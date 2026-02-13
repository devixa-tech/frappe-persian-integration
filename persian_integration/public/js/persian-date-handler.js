// jalali_shamsi_datepicker/public/js/persian-date-handler.js
frappe.provide("frappe.ui.form");

(function() {

    // --- Helper: تبدیل اعداد فارسی به لاتین ---
    function toLatinDigits(str) {
        const persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g];
        const latinNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        let result = str;
        for (let i = 0; i < 10; i++) {
            result = result.replace(persianNumbers[i], latinNumbers[i]);
        }
        return result;
    }

    // --- Helper: تبدیل تاریخ شمسی به میلادی ---
    function persianToGregorian(jy, jm, jd, hour = 0, minute = 0, second = 0) {
        const g = persianDate.toGregorian(jy, jm, jd);
        const yyyy = g.year;
        const mm = String(g.month).padStart(2, "0");
        const dd = String(g.day).padStart(2, "0");
        const hh = String(hour).padStart(2, "0");
        const mi = String(minute).padStart(2, "0");
        const ss = String(second).padStart(2, "0");
        return `${yyyy}-${mm}-${dd} ${hh}:${mi}:${ss}`;
    }

    // --- نمایش میلادی کنار فیلد ---
    function show_gregorian_date($input, gregorian_date) {
        let $gregorian = $input.next(".gregorian-date");
        if (!$gregorian.length) {
            $gregorian = $('<div class="gregorian-date"></div>').insertAfter($input);
        }
        $gregorian.text("میلادی: " + gregorian_date);
    }

    // --- initialize Persian Datepicker on a field ---
    function attachPersianDatepicker($input, isDatetime = false) {
        if ($input.data("datepicker-initialized")) return;
        $input.data("datepicker-initialized", true);

        const format = isDatetime ? "YYYY/MM/DD HH:mm:ss" : "YYYY/MM/DD";

        $input.persianDatepicker({
            format: format,
            position: "auto",
            timePicker: { enabled: isDatetime },
            persianDigit: false,
            autoClose: true,
            formatter: function(unix) {
                const p = new persianDate(unix);
                let val = p.year() + "/" + String(p.month()).padStart(2,"0") + "/" + String(p.date()).padStart(2,"0");
                if (isDatetime) {
                    val += " " + String(p.hours()).padStart(2,"0") + ":" + String(p.minutes()).padStart(2,"0") + ":" + String(p.seconds()).padStart(2,"0");
                }
                return toLatinDigits(val);
            },
            onSelect: function(unix) {
                const p = new persianDate(unix);
                const jy = p.year(), jm = p.month(), jd = p.date();
                const hour = isDatetime ? p.hours() : 0;
                const minute = isDatetime ? p.minutes() : 0;
                const second = isDatetime ? p.seconds() : 0;

                const persianVal = toLatinDigits(
                    jy + "/" + String(jm).padStart(2,"0") + "/" + String(jd).padStart(2,"0") +
                    (isDatetime ? " " + String(hour).padStart(2,"0") + ":" + String(minute).padStart(2,"0") + ":" + String(second).padStart(2,"0") : "")
                );

                const gregorianVal = persianToGregorian(jy, jm, jd, hour, minute, second);

                $input.val(persianVal);

                // update Frappe model with Gregorian date
                const frm = $input.closest("form").data("frappe-form");
                if (frm && frm.doc && $input.attr("data-fieldname")) {
                    frappe.model.set_value(frm.doc.doctype, frm.doc.name, $input.attr("data-fieldname"), gregorianVal);
                }

                // show Gregorian next to field (only for Date type, not Datetime)
                if (!isDatetime) show_gregorian_date($input, gregorianVal);

                $input.trigger("change");
            }
        });
    }

    // --- Initialize on form load or refresh ---
    $(document).on("form-load form-refresh", function() {
        frappe.call({
            method: "frappe.client.get",
            args: { doctype: "System Settings", name: "System Settings" },
            callback: function(r) {
                const settings = r.message;

                if (!settings) return;
                const enableShamsi = settings.custom_enable_shamsi_jalali_calendar;
                const storageFormat = settings.custom_date_storage_format;

                if (!enableShamsi || !storageFormat) return;

                // attach to all Date fields
                $('input[data-fieldtype="Date"]').each(function() {
                    attachPersianDatepicker($(this), false);
                });

                // attach to all Datetime fields
                $('input[data-fieldtype="Datetime"]').each(function() {
                    attachPersianDatepicker($(this), true);
                });
            }
        });
    });

    // --- Cleanups ---
    frappe.ui.form.on('*', {
        refresh: function(frm) {
            if (frm.doc && frm.doc.in_words) {
                let inWords = frm.doc.in_words;
                if (inWords.endsWith("Only")) {
                    frm.set_value("in_words", inWords.slice(0, -4).trim());
                } else if (inWords.endsWith("فقط")) {
                    frm.set_value("in_words", inWords.slice(0, -3).trim());
                }
            }
        }
    });
})()
;