
import moment from "moment";
import "moment-jalaali";
import "md.bootstrappersiandatetimepicker";
import "md.bootstrap.persian.datetimepicker"; // plugin

export default function initPersianDatepicker() {

    // ---------------------------------------------
    // Constants and formats
    // ---------------------------------------------
    const DATE_TYPE = "date";
    const DATETIME_TYPE = "datetime";

    const DATE_FORMAT = frappe.boot.persian_date_format || "yyyy/MM/dd";
    const DATEPICKER_FORMAT = frappe.boot.persian_date_datepicker_format || DATE_FORMAT;
    const DATETIME_FORMAT = DATE_FORMAT + " " + frappe.boot.sysdefaults.time_format;

    const ORIGINAL_STR_TO_USER = frappe.datetime.str_to_user;
    const ORIGINAL_DATE_FORMATTER = frappe.form.formatters.Date;
    const ORIGINAL_DATETIME_FORMATTER = frappe.form.formatters.Datetime;

    const FORMAT_MAP = {
        "MM-dd-yyyy": "MM-DD-YYYY",
        "MM-dd-yyyy HH:mm:ss": "MM-DD-YYYY HH:mm:ss",
        "dd-MM-yyyy": "DD-MM-YYYY",
        "dd-MM-yyyy HH:mm:ss": "DD-MM-YYYY HH:mm:ss",
        "yyyy/MM/dd": "YYYY/MM/DD",
        "yyyy/MM/dd HH:mm:ss": "YYYY/MM/DD HH:mm:ss"
    };

    // ---------------------------------------------
    // Helper functions
    // ---------------------------------------------
    function formatMoment(m, type, format = DATEPICKER_FORMAT) {
        if (!m) return null;
        return (type === DATETIME_TYPE ? moment(m.toDate()) : m).format(FORMAT_MAP[format]);
    }

    // ---------------------------------------------
    // Override Frappe formatters
    // ---------------------------------------------
    frappe.form.formatters.Date = function(value) {
        frappe.datetime.str_to_user = ORIGINAL_STR_TO_USER;
        const parsed = ORIGINAL_DATE_FORMATTER(value);
        if (!parsed) return parsed;
        const obj = frappe.datetime.str_to_obj(value);
        return formatMoment(moment(obj), DATE_TYPE, DATE_FORMAT);
    };

    frappe.form.formatters.Datetime = function(value) {
        frappe.datetime.str_to_user = ORIGINAL_STR_TO_USER;
        const parsed = ORIGINAL_DATETIME_FORMATTER(value);
        if (!parsed) return parsed;
        const obj = frappe.datetime.str_to_obj(value);
        return formatMoment(moment(obj), DATETIME_TYPE, DATETIME_FORMAT);
    };

    // ---------------------------------------------
    // ControlDate
    // ---------------------------------------------
    frappe.ui.form.ControlDate = class extends frappe.ui.form.ControlDate {
        make_input() {
            this.datepicker_persian = true;
            super.make_input();

            this.$input.off();
            this.$ismInput = this.$input.clone().addClass("hide");
            this.$input.after(this.$ismInput);

            this.persian_make_picker();
            this._toggleDatepicker();
        }

        _toggleDatepicker() {
            if (!this.$ismInput || !this.$ismInput.length) return;
            if (this.datepicker_persian) {
                this.$ismInput.removeClass("hide");
                this.$input.addClass("hide");
            } else {
                this.$input.removeClass("hide");
                this.$ismInput.addClass("hide");
            }
            this._printDateConversion();
        }

        persian_make_picker() {
            const selectedDate = this.value ? moment(this.value)._d : new Date();
            this.$ismInput.MdPersianDateTimePicker({
                selectedDate,
                englishNumber: frappe.boot.is_en,
                isGregorian: false,
                toDate: true,
                groupId: "rangeSelector1",
                placement: "bottom",
                enableTimePicker: false,
                dateFormat: DATEPICKER_FORMAT,
                textFormat: DATEPICKER_FORMAT,
                onDayClick: () => {
                    const date = this.$ismInput.MdPersianDateTimePicker("getDate");
                    this.$ismInput.val(formatMoment(moment(date)) || "");
                    this.set_value(moment(date).format(this.date_format));
                }
            });
        }

        refresh() {
            super.refresh();
            this._printDateConversion();
        }

        _printDateConversion() {
            // optional: update conversion display
        }
    };

    // ---------------------------------------------
    // ControlDatetime
    // ---------------------------------------------
    frappe.ui.form.ControlDatetime = class extends frappe.ui.form.ControlDatetime {
        make_input() {
            this.datepicker_persian = true;
            this.formatdatetimepersian = DATEPICKER_FORMAT + " " + frappe.boot.sysdefaults.time_format;

            super.make_input();

            this.$input.off();
            this.$ismInput = this.$input.clone().addClass("hide");
            this.$input.after(this.$ismInput);

            this.persian_make_picker();
            this._toggleDatepicker();
        }

        _toggleDatepicker() {
            if (!this.$ismInput || !this.$ismInput.length) return;
            if (this.datepicker_persian) {
                this.$ismInput.removeClass("hide");
                this.$input.addClass("hide");
            } else {
                this.$input.removeClass("hide");
                this.$ismInput.addClass("hide");
            }
            this._printDateConversion();
        }

        persian_make_picker() {
            const selectedDate = this.value ? moment(this.value)._d : new Date();
            this.$ismInput.MdPersianDateTimePicker({
                selectedDate,
                englishNumber: frappe.boot.is_en,
                isGregorian: false,
                toDate: true,
                groupId: "rangeSelector1",
                placement: "bottom",
                enableTimePicker: true,
                dateFormat: this.formatdatetimepersian,
                textFormat: this.formatdatetimepersian,
                onDayClick: () => {
                    const date = this.$ismInput.MdPersianDateTimePicker("getDate");
                    this.$ismInput.val(formatMoment(moment(date), this.df.fieldtype, this.formatdatetimepersian));
                    this.set_value(moment(date).format(this.date_format));
                }
            });
        }

        refresh() {
            super.refresh();
            this._printDateConversion();
        }

        _printDateConversion() {
            // optional: update conversion display
        }
    };

    // ---------------------------------------------
    // ControlDateRange
    // ---------------------------------------------
    frappe.ui.form.ControlDateRange = class extends frappe.ui.form.ControlDateRange {
        make_input() {
            this.datepicker_persian = true;
            super.make_input();

            this.$input.off();
            this.$ismInput = this.$input.clone().addClass("hide");
            this.$input.after(this.$ismInput);

            this.persian_make_picker();
            this._toggleDatepicker();
        }

        _toggleDatepicker() {
            if (!this.$ismInput || !this.$ismInput.length) return;
            if (this.datepicker_persian) {
                this.$ismInput.removeClass("hide");
                this.$input.addClass("hide");
            } else {
                this.$input.removeClass("hide");
                this.$ismInput.addClass("hide");
            }
        }

        persian_make_picker() {
            const selectedDate = this.value ? moment(this.value)._d : null;

            this.$ismInput.MdPersianDateTimePicker({
                selectedDate,
                englishNumber: frappe.boot.is_en,
                targetTextSelector: this.$ismInput,
                isGregorian: false,
                toDate: true,
                groupId: "rangeSelector1",
                placement: "bottom",
                enableTimePicker: false,
                rangeSelector: true,
                dateFormat: DATEPICKER_FORMAT,
                textFormat: DATEPICKER_FORMAT
            });

            this.$ismInput.on("change", (e) => {
                if (!e.currentTarget.value) return;
                const range = this.$ismInput.MdPersianDateTimePicker("getDateRange");
                const start = moment(range[0]).format("YYYY/MM/DD");
                const end = moment(range[1]).format("YYYY/MM/DD");
                this.set_input(start, end);
                this.$input.trigger("change");
            });
        }

        set_input(start, end) {
            this.value = start && end ? [start, end] : start;
            if (this.value) {
                this.$input.val(start && end ? `${start} to ${end}` : start);
                this.$ismInput.MdPersianDateTimePicker("setDateRange",
                    start ? moment(start)._d : null,
                    end ? moment(end)._d : null
                );
            } else {
                this.$input.val("");
                this.$ismInput.val("");
            }
        }
    };
}
frappe.ready(() => {
    initPersianDatepicker();
});