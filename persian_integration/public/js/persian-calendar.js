( () => {
    var ya = Object.create;
    var $t = Object.defineProperty;
    var Da = Object.getOwnPropertyDescriptor;
    var va = Object.getOwnPropertyNames;
    var ba = Object.getPrototypeOf
      , Ma = Object.prototype.hasOwnProperty;
    var Sa = (d, p) => () => (p || d((p = {
        exports: {}
    }).exports, p),
    p.exports);
    var _a = (d, p, y, T) => {
        if (p && typeof p == "object" || typeof p == "function")
            for (let x of va(p))
                !Ma.call(d, x) && x !== y && $t(d, x, {
                    get: () => p[x],
                    enumerable: !(T = Da(p, x)) || T.enumerable
                });
        return d
    }
    ;
    var qt = (d, p, y) => (y = d != null ? ya(ba(d)) : {},
    _a(p || !d || !d.__esModule ? $t(y, "default", {
        value: d,
        enumerable: !0
    }) : y, d));
    var kt = Sa( (Qe, _t) => {
        (function(p, y) {
            typeof Qe == "object" && typeof _t == "object" ? _t.exports = y() : typeof define == "function" && define.amd ? define([], y) : typeof Qe == "object" ? Qe.persianDate = y() : p.persianDate = y()
        }
        )(Qe, function() {
            return function(d) {
                var p = {};
                function y(T) {
                    if (p[T])
                        return p[T].exports;
                    var x = p[T] = {
                        i: T,
                        l: !1,
                        exports: {}
                    };
                    return d[T].call(x.exports, x, x.exports, y),
                    x.l = !0,
                    x.exports
                }
                return y.m = d,
                y.c = p,
                y.i = function(T) {
                    return T
                }
                ,
                y.d = function(T, x, P) {
                    y.o(T, x) || Object.defineProperty(T, x, {
                        configurable: !1,
                        enumerable: !0,
                        get: P
                    })
                }
                ,
                y.n = function(T) {
                    var x = T && T.__esModule ? function() {
                        return T.default
                    }
                    : function() {
                        return T
                    }
                    ;
                    return y.d(x, "a", x),
                    x
                }
                ,
                y.o = function(T, x) {
                    return Object.prototype.hasOwnProperty.call(T, x)
                }
                ,
                y.p = "",
                y(y.s = 8)
            }([function(d, p, y) {
                "use strict";
                var T = function() {
                    function Y(S, c) {
                        for (var s = 0; s < c.length; s++) {
                            var l = c[s];
                            l.enumerable = l.enumerable || !1,
                            l.configurable = !0,
                            "value"in l && (l.writable = !0),
                            Object.defineProperty(S, l.key, l)
                        }
                    }
                    return function(S, c, s) {
                        return c && Y(S.prototype, c),
                        s && Y(S, s),
                        S
                    }
                }();
                function x(Y, S) {
                    if (!(Y instanceof S))
                        throw new TypeError("Cannot call a class as a function")
                }
                var P = y(4).durationUnit
                  , q = function() {
                    function Y() {
                        x(this, Y)
                    }
                    return T(Y, [{
                        key: "toPersianDigit",
                        value: function(c) {
                            var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                            return c.toString().replace(/\d+/g, function(l) {
                                var m = []
                                  , g = []
                                  , D = void 0
                                  , C = void 0;
                                for (D = 0; D < l.length; D += 1)
                                    m.push(l.charCodeAt(D));
                                for (C = 0; C < m.length; C += 1)
                                    g.push(String.fromCharCode(m[C] + (!!s && s === !0 ? 1584 : 1728)));
                                return g.join("")
                            })
                        }
                    }, {
                        key: "leftZeroFill",
                        value: function(c, s) {
                            for (var l = c + ""; l.length < s; )
                                l = "0" + l;
                            return l
                        }
                    }, {
                        key: "normalizeDuration",
                        value: function() {
                            var c = void 0
                              , s = void 0;
                            return typeof arguments[0] == "string" ? (c = arguments[0],
                            s = arguments[1]) : (s = arguments[0],
                            c = arguments[1]),
                            P.year.indexOf(c) > -1 ? c = "year" : P.month.indexOf(c) > -1 ? c = "month" : P.week.indexOf(c) > -1 ? c = "week" : P.day.indexOf(c) > -1 ? c = "day" : P.hour.indexOf(c) > -1 ? c = "hour" : P.minute.indexOf(c) > -1 ? c = "minute" : P.second.indexOf(c) > -1 ? c = "second" : P.millisecond.indexOf(c) > -1 && (c = "millisecond"),
                            {
                                unit: c,
                                value: s
                            }
                        }
                    }, {
                        key: "absRound",
                        value: function(c) {
                            return c < 0 ? Math.ceil(c) : Math.floor(c)
                        }
                    }, {
                        key: "absFloor",
                        value: function(c) {
                            return c < 0 ? Math.ceil(c) || 0 : Math.floor(c)
                        }
                    }]),
                    Y
                }();
                d.exports = q
            }
            , function(d, p, y) {
                "use strict";
                var T = function() {
                    function _(h, a) {
                        for (var n = 0; n < a.length; n++) {
                            var k = a[n];
                            k.enumerable = k.enumerable || !1,
                            k.configurable = !0,
                            "value"in k && (k.writable = !0),
                            Object.defineProperty(h, k.key, k)
                        }
                    }
                    return function(h, a, n) {
                        return a && _(h.prototype, a),
                        n && _(h, n),
                        h
                    }
                }();
                function x(_, h) {
                    if (!(_ instanceof h))
                        throw new TypeError("Cannot call a class as a function")
                }
                var P = y(10)
                  , q = y(2)
                  , Y = y(0)
                  , S = y(5)
                  , c = y(11)
                  , s = new Y().toPersianDigit
                  , l = new Y().leftZeroFill
                  , m = new Y().normalizeDuration
                  , g = y(7)
                  , D = y(6)
                  , C = function() {
                    function _(h) {
                        return x(this, _),
                        this.calendarType = _.calendarType,
                        this.localType = _.localType,
                        this.leapYearMode = _.leapYearMode,
                        this.algorithms = new q(this),
                        this.version = "1.1.0",
                        this._utcMode = !1,
                        this.localType !== "fa" ? this.formatPersian = !1 : this.formatPersian = "_default",
                        this.State = this.algorithms.State,
                        this.setup(h),
                        this.State.isInvalidDate ? new Date([-1, -1]) : this
                    }
                    return T(_, [{
                        key: "setup",
                        value: function(a) {
                            if (P.isDate(a))
                                this._gDateToCalculators(a);
                            else if (P.isArray(a)) {
                                if (!c.validateInputArray(a))
                                    return this.State.isInvalidDate = !0,
                                    !1;
                                this.algorithmsCalc([a[0], a[1] ? a[1] : 1, a[2] ? a[2] : 1, a[3] ? a[3] : 0, a[4] ? a[4] : 0, a[5] ? a[5] : 0, a[6] ? a[6] : 0])
                            } else if (P.isNumber(a)) {
                                var n = new Date(a);
                                this._gDateToCalculators(n)
                            } else if (a instanceof _)
                                this.algorithmsCalc([a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]);
                            else if (a && a.substring(0, 6) === "/Date(") {
                                var k = new Date(parseInt(a.substr(6)));
                                this._gDateToCalculators(k)
                            } else {
                                var b = new Date;
                                this._gDateToCalculators(b)
                            }
                        }
                    }, {
                        key: "_getSyncedClass",
                        value: function(a) {
                            var n = _.toCalendar(this.calendarType).toLocale(this.localType).toLeapYearMode(this.leapYearMode);
                            return new n(a)
                        }
                    }, {
                        key: "_gDateToCalculators",
                        value: function(a) {
                            this.algorithms.calcGregorian([a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()])
                        }
                    }, {
                        key: "rangeName",
                        value: function() {
                            var a = this.calendarType;
                            return this.localType === "fa" ? a === "persian" ? g.persian : g.gregorian : a === "persian" ? D.persian : D.gregorian
                        }
                    }, {
                        key: "toLeapYearMode",
                        value: function(a) {
                            return this.leapYearMode = a,
                            a === "astronomical" && this.calendarType == "persian" ? this.leapYearMode = "astronomical" : a === "algorithmic" && this.calendarType == "persian" && (this.leapYearMode = "algorithmic"),
                            this.algorithms.updateFromGregorian(),
                            this
                        }
                    }, {
                        key: "toCalendar",
                        value: function(a) {
                            return this.calendarType = a,
                            this.algorithms.updateFromGregorian(),
                            this
                        }
                    }, {
                        key: "toLocale",
                        value: function(a) {
                            return this.localType = a,
                            this.localType !== "fa" ? this.formatPersian = !1 : this.formatPersian = "_default",
                            this
                        }
                    }, {
                        key: "_locale",
                        value: function() {
                            var a = this.calendarType;
                            return this.localType === "fa" ? a === "persian" ? g.persian : g.gregorian : a === "persian" ? D.persian : D.gregorian
                        }
                    }, {
                        key: "_weekName",
                        value: function(a) {
                            return this._locale().weekdays[a - 1]
                        }
                    }, {
                        key: "_weekNameShort",
                        value: function(a) {
                            return this._locale().weekdaysShort[a - 1]
                        }
                    }, {
                        key: "_weekNameMin",
                        value: function(a) {
                            return this._locale().weekdaysMin[a - 1]
                        }
                    }, {
                        key: "_dayName",
                        value: function(a) {
                            return this._locale().persianDaysName[a - 1]
                        }
                    }, {
                        key: "_monthName",
                        value: function(a) {
                            return this._locale().months[a - 1]
                        }
                    }, {
                        key: "_monthNameShort",
                        value: function(a) {
                            return this._locale().monthsShort[a - 1]
                        }
                    }, {
                        key: "isPersianDate",
                        value: function(a) {
                            return a instanceof _
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            return this._getSyncedClass(this.State.gDate)
                        }
                    }, {
                        key: "algorithmsCalc",
                        value: function(a) {
                            if (this.isPersianDate(a) && (a = [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]),
                            this.calendarType === "persian" && this.leapYearMode == "algorithmic")
                                return this.algorithms.calcPersian(a);
                            if (this.calendarType === "persian" && this.leapYearMode == "astronomical")
                                return this.algorithms.calcPersiana(a);
                            if (this.calendarType === "gregorian")
                                return a[1] = a[1] - 1,
                                this.algorithms.calcGregorian(a)
                        }
                    }, {
                        key: "calendar",
                        value: function() {
                            var a = void 0;
                            return this.calendarType == "persian" ? this.leapYearMode == "astronomical" ? a = "persianAstro" : this.leapYearMode == "algorithmic" && (a = "persianAlgo") : a = "gregorian",
                            this.State[a]
                        }
                    }, {
                        key: "duration",
                        value: function(a, n) {
                            return new S(a,n)
                        }
                    }, {
                        key: "isDuration",
                        value: function(a) {
                            return a instanceof S
                        }
                    }, {
                        key: "years",
                        value: function(a) {
                            return this.year(a)
                        }
                    }, {
                        key: "year",
                        value: function(a) {
                            return a || a === 0 ? (this.algorithmsCalc([a, this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]),
                            this) : this.calendar().year
                        }
                    }, {
                        key: "month",
                        value: function(a) {
                            return a || a === 0 ? (this.algorithmsCalc([this.year(), a, this.date()]),
                            this) : this.calendar().month + 1
                        }
                    }, {
                        key: "days",
                        value: function() {
                            return this.day()
                        }
                    }, {
                        key: "day",
                        value: function() {
                            return this.calendar().weekday
                        }
                    }, {
                        key: "dates",
                        value: function(a) {
                            return this.date(a)
                        }
                    }, {
                        key: "date",
                        value: function(a) {
                            return a || a === 0 ? (this.algorithmsCalc([this.year(), this.month(), a]),
                            this) : this.calendar().day
                        }
                    }, {
                        key: "hour",
                        value: function(a) {
                            return this.hours(a)
                        }
                    }, {
                        key: "hours",
                        value: function(a) {
                            return a || a === 0 ? (a === 0 && (a = 24),
                            this.algorithmsCalc([this.year(), this.month(), this.date(), a]),
                            this) : this.State.gDate.getHours()
                        }
                    }, {
                        key: "minute",
                        value: function(a) {
                            return this.minutes(a)
                        }
                    }, {
                        key: "minutes",
                        value: function(a) {
                            return a || a === 0 ? (this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), a]),
                            this) : this.State.gDate.getMinutes()
                        }
                    }, {
                        key: "second",
                        value: function(a) {
                            return this.seconds(a)
                        }
                    }, {
                        key: "seconds",
                        value: function(a) {
                            return a || a === 0 ? (this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), a]),
                            this) : this.State.gDate.getSeconds()
                        }
                    }, {
                        key: "millisecond",
                        value: function(a) {
                            return this.milliseconds(a)
                        }
                    }, {
                        key: "milliseconds",
                        value: function(a) {
                            return a || a === 0 ? (this.algorithmsCalc([this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), a]),
                            this) : this.State.gregorian.millisecond
                        }
                    }, {
                        key: "unix",
                        value: function(a) {
                            var n = void 0;
                            if (a)
                                return this._getSyncedClass(a * 1e3);
                            var k = this.State.gDate.valueOf().toString();
                            return n = k.substring(0, k.length - 3),
                            parseInt(n)
                        }
                    }, {
                        key: "valueOf",
                        value: function() {
                            return this.State.gDate.valueOf()
                        }
                    }, {
                        key: "getFirstWeekDayOfMonth",
                        value: function(a, n) {
                            return this._getSyncedClass([a, n, 1]).day()
                        }
                    }, {
                        key: "diff",
                        value: function(a, n, k) {
                            var b = this
                              , L = a
                              , B = 0
                              , j = b.State.gDate - L.toDate() - B
                              , ee = b.year() - L.year()
                              , le = b.month() - L.month()
                              , te = (b.date() - L.date()) * -1
                              , ie = void 0;
                            return n === "months" || n === "month" ? ie = ee * 12 + le + te / 30 : n === "years" || n === "year" ? ie = ee + (le + te / 30) / 12 : ie = n === "seconds" || n === "second" ? j / 1e3 : n === "minutes" || n === "minute" ? j / 6e4 : n === "hours" || n === "hour" ? j / 36e5 : n === "days" || n === "day" ? j / 864e5 : n === "weeks" || n === "week" ? j / 6048e5 : j,
                            k ? ie : Math.round(ie)
                        }
                    }, {
                        key: "startOf",
                        value: function(a) {
                            var n = _.toCalendar(this.calendarType).toLocale(this.localType)
                              , k = new _(this.valueOf() - (this.calendar().weekday - 1) * 864e5).toArray();
                            switch (a) {
                            case "years":
                            case "year":
                                return new n([this.year(), 1, 1]);
                            case "months":
                            case "month":
                                return new n([this.year(), this.month(), 1]);
                            case "days":
                            case "day":
                                return new n([this.year(), this.month(), this.date(), 0, 0, 0]);
                            case "hours":
                            case "hour":
                                return new n([this.year(), this.month(), this.date(), this.hours(), 0, 0]);
                            case "minutes":
                            case "minute":
                                return new n([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 0]);
                            case "seconds":
                            case "second":
                                return new n([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
                            case "weeks":
                            case "week":
                                return new n(k);
                            default:
                                return this.clone()
                            }
                        }
                    }, {
                        key: "endOf",
                        value: function(a) {
                            var n = _.toCalendar(this.calendarType).toLocale(this.localType);
                            switch (a) {
                            case "years":
                            case "year":
                                var k = this.isLeapYear() ? 30 : 29;
                                return new n([this.year(), 12, k, 23, 59, 59]);
                            case "months":
                            case "month":
                                var b = this.daysInMonth(this.year(), this.month());
                                return new n([this.year(), this.month(), b, 23, 59, 59]);
                            case "days":
                            case "day":
                                return new n([this.year(), this.month(), this.date(), 23, 59, 59]);
                            case "hours":
                            case "hour":
                                return new n([this.year(), this.month(), this.date(), this.hours(), 59, 59]);
                            case "minutes":
                            case "minute":
                                return new n([this.year(), this.month(), this.date(), this.hours(), this.minutes(), 59]);
                            case "seconds":
                            case "second":
                                return new n([this.year(), this.month(), this.date(), this.hours(), this.minutes(), this.seconds()]);
                            case "weeks":
                            case "week":
                                var L = this.calendar().weekday;
                                return new n([this.year(), this.month(), this.date() + (7 - L)]);
                            default:
                                return this.clone()
                            }
                        }
                    }, {
                        key: "sod",
                        value: function() {
                            return this.startOf("day")
                        }
                    }, {
                        key: "eod",
                        value: function() {
                            return this.endOf("day")
                        }
                    }, {
                        key: "zone",
                        value: function(a) {
                            return a || a === 0 ? (this.State.zone = a,
                            this) : this.State.zone
                        }
                    }, {
                        key: "local",
                        value: function() {
                            var a = void 0;
                            if (this._utcMode) {
                                var n = new Date(this.toDate()).getTimezoneOffset()
                                  , k = n * 60 * 1e3;
                                n < 0 ? a = this.valueOf() - k : a = this.valueOf() + k,
                                this.toCalendar(_.calendarType);
                                var b = new Date(a);
                                return this._gDateToCalculators(b),
                                this._utcMode = !1,
                                this.zone(n),
                                this
                            } else
                                return this
                        }
                    }, {
                        key: "utc",
                        value: function(a) {
                            var n = void 0;
                            if (a)
                                return this._getSyncedClass(a).utc();
                            if (this._utcMode)
                                return this;
                            var k = this.zone() * 60 * 1e3;
                            this.zone() < 0 ? n = this.valueOf() + k : n = this.valueOf() - k;
                            var b = new Date(n)
                              , L = this._getSyncedClass(b);
                            return this.algorithmsCalc(L),
                            this._utcMode = !0,
                            this.zone(0),
                            this
                        }
                    }, {
                        key: "isUtc",
                        value: function() {
                            return this._utcMode
                        }
                    }, {
                        key: "isDST",
                        value: function() {
                            var a = this.month()
                              , n = this.date();
                            return a == 1 && n > 1 || a == 6 && n < 31 || a < 6 && a >= 2
                        }
                    }, {
                        key: "isLeapYear",
                        value: function(a) {
                            if (a === void 0 && (a = this.year()),
                            this.calendarType == "persian" && this.leapYearMode === "algorithmic")
                                return this.algorithms.leap_persian(a);
                            if (this.calendarType == "persian" && this.leapYearMode === "astronomical")
                                return this.algorithms.leap_persiana(a);
                            if (this.calendarType == "gregorian")
                                return this.algorithms.leap_gregorian(a)
                        }
                    }, {
                        key: "daysInMonth",
                        value: function(a, n) {
                            var k = a || this.year()
                              , b = n || this.month();
                            if (this.calendarType === "persian")
                                return b < 1 || b > 12 ? 0 : b < 7 ? 31 : b < 12 || this.isLeapYear(k) ? 30 : 29;
                            if (this.calendarType === "gregorian")
                                return new Date(k,b,0).getDate()
                        }
                    }, {
                        key: "toDate",
                        value: function() {
                            return this.State.gDate
                        }
                    }, {
                        key: "toArray",
                        value: function() {
                            return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
                        }
                    }, {
                        key: "formatNumber",
                        value: function() {
                            var a = void 0
                              , n = this;
                            return this.formatPersian === "_default" ? typeof d != "undefined" && typeof d.exports != "undefined" ? n.formatPersian === !1 ? a = !1 : a = !0 : window.formatPersian === !1 ? a = !1 : a = !0 : this.formatPersian === !0 ? a = !0 : this.formatPersian === !1 ? a = !1 : Error('Invalid Config "formatPersian" !!'),
                            a
                        }
                    }, {
                        key: "format",
                        value: function(a) {
                            if (this.State.isInvalidDate)
                                return !1;
                            var n = this
                              , k = /([[^[]*])|(\\)?(Mo|MM?M?M?|Do|DD?D?D?|dddddd?|ddddd?|dddd?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|X|LT|ll?l?l?|LL?L?L?)/g
                              , b = {
                                year: n.year(),
                                month: n.month(),
                                hour: n.hours(),
                                minute: n.minutes(),
                                second: n.seconds(),
                                date: n.date(),
                                timezone: n.zone(),
                                unix: n.unix()
                            }
                              , L = n.formatNumber()
                              , B = function(te) {
                                return L ? s(te) : te
                            };
                            function j(le) {
                                switch (le) {
                                case "a":
                                    return L ? b.hour >= 12 ? "\u0628 \u0638" : "\u0642 \u0638" : b.hour >= 12 ? "PM" : "AM";
                                case "H":
                                    return B(b.hour);
                                case "HH":
                                    return B(l(b.hour, 2));
                                case "h":
                                    return B(b.hour % 12);
                                case "hh":
                                    return B(l(b.hour % 12, 2));
                                case "m":
                                    return B(l(b.minute, 2));
                                case "mm":
                                    return B(l(b.minute, 2));
                                case "s":
                                    return B(b.second);
                                case "ss":
                                    return B(l(b.second, 2));
                                case "D":
                                    return B(l(b.date));
                                case "DD":
                                    return B(l(b.date, 2));
                                case "DDD":
                                    {
                                        var te = n.startOf("year");
                                        return B(l(n.diff(te, "days"), 3))
                                    }
                                case "DDDD":
                                    {
                                        var ie = n.startOf("year");
                                        return B(l(n.diff(ie, "days"), 3))
                                    }
                                case "d":
                                    return B(n.calendar().weekday);
                                case "ddd":
                                    return n._weekNameShort(n.calendar().weekday);
                                case "dddd":
                                    return n._weekName(n.calendar().weekday);
                                case "ddddd":
                                    return n._dayName(n.calendar().day);
                                case "dddddd":
                                    return n._weekNameMin(n.calendar().weekday);
                                case "w":
                                    {
                                        var de = n.startOf("year")
                                          , Se = parseInt(n.diff(de, "days") / 7) + 1;
                                        return B(Se)
                                    }
                                case "ww":
                                    {
                                        var $e = n.startOf("year")
                                          , qe = l(parseInt(n.diff($e, "days") / 7) + 1, 2);
                                        return B(qe)
                                    }
                                case "M":
                                    return B(b.month);
                                case "MM":
                                    return B(l(b.month, 2));
                                case "MMM":
                                    return n._monthNameShort(b.month);
                                case "MMMM":
                                    return n._monthName(b.month);
                                case "YY":
                                    {
                                        var _e = b.year.toString().split("");
                                        return B(_e[2] + _e[3])
                                    }
                                case "YYYY":
                                    return B(b.year);
                                case "Z":
                                    {
                                        var Ge = "+"
                                          , ke = Math.round(b.timezone / 60)
                                          , we = b.timezone % 60;
                                        we < 0 && (we *= -1),
                                        ke < 0 && (Ge = "-",
                                        ke *= -1);
                                        var ze = Ge + l(ke, 2) + ":" + l(we, 2);
                                        return B(ze)
                                    }
                                case "ZZ":
                                    {
                                        var Ce = "+"
                                          , Te = Math.round(b.timezone / 60)
                                          , xe = b.timezone % 60;
                                        xe < 0 && (xe *= -1),
                                        Te < 0 && (Ce = "-",
                                        Te *= -1);
                                        var et = Ce + l(Te, 2) + "" + l(xe, 2);
                                        return B(et)
                                    }
                                case "X":
                                    return n.unix();
                                case "LT":
                                    return n.format("H:m a");
                                case "L":
                                    return n.format("YYYY/MM/DD");
                                case "l":
                                    return n.format("YYYY/M/D");
                                case "LL":
                                    return n.format("MMMM DD YYYY");
                                case "ll":
                                    return n.format("MMM DD YYYY");
                                case "LLL":
                                    return n.format("MMMM YYYY DD   H:m  a");
                                case "lll":
                                    return n.format("MMM YYYY DD   H:m  a");
                                case "LLLL":
                                    return n.format("dddd D MMMM YYYY  H:m  a");
                                case "llll":
                                    return n.format("ddd D MMM YYYY  H:m  a")
                                }
                            }
                            if (a)
                                return a.replace(k, j);
                            var ee = "YYYY-MM-DD HH:mm:ss a";
                            return ee.replace(k, j)
                        }
                    }, {
                        key: "add",
                        value: function(a, n) {
                            if (n === 0)
                                return this;
                            var k = m(a, n).unit
                              , b = this.toArray();
                            if (n = m(a, n).value,
                            k === "year") {
                                var L = b[2]
                                  , B = this.daysInMonth(b[0] + n, b[1]);
                                b[2] > B && (L = B);
                                var j = new _([b[0] + n, b[1], L, b[3], b[4], b[5], b[6], b[7]]);
                                return j
                            }
                            if (k === "month") {
                                var ee = Math.floor(n / 12)
                                  , le = n - ee * 12
                                  , te = null;
                                b[1] + le > 12 ? (ee += 1,
                                te = b[1] + le - 12) : te = b[1] + le;
                                var ie = b[2]
                                  , de = new _([b[0] + ee, te, 1, b[3], b[4], b[5], b[6], b[7]]).toArray()
                                  , Se = this.daysInMonth(b[0] + ee, te);
                                return b[2] > Se && (ie = Se),
                                new _([de[0], de[1], ie, de[3], de[4], de[5], de[6], de[7]])
                            }
                            if (k === "day") {
                                var $e = new _(this.valueOf()).hour(12)
                                  , qe = $e.valueOf() + n * 864e5
                                  , _e = new _(qe);
                                return _e.hour(b[3])
                            }
                            if (k === "week") {
                                var Ge = new _(this.valueOf()).hour(12)
                                  , ke = Ge.valueOf() + 7 * n * 864e5
                                  , we = new _(ke);
                                return we.hour(b[3])
                            }
                            if (k === "hour") {
                                var ze = this.valueOf() + n * 36e5;
                                return this.unix(ze / 1e3)
                            }
                            if (k === "minute") {
                                var Ce = this.valueOf() + n * 6e4;
                                return this.unix(Ce / 1e3)
                            }
                            if (k === "second") {
                                var Te = this.valueOf() + n * 1e3;
                                return this.unix(Te / 1e3)
                            }
                            if (k === "millisecond") {
                                var xe = this.valueOf() + n;
                                return this.unix(xe / 1e3)
                            }
                            return this._getSyncedClass(this.valueOf())
                        }
                    }, {
                        key: "subtract",
                        value: function(a, n) {
                            return this.add(a, n * -1)
                        }
                    }, {
                        key: "isSameDay",
                        value: function(a) {
                            return this && a && this.date() == a.date() && this.year() == a.year() && this.month() == a.month()
                        }
                    }, {
                        key: "isSameMonth",
                        value: function(a) {
                            return this && a && this.year() == this.year() && this.month() == a.month()
                        }
                    }], [{
                        key: "rangeName",
                        value: function() {
                            var a = _
                              , n = a.calendarType;
                            return a.localType === "fa" ? n === "persian" ? g.persian : g.gregorian : n === "persian" ? D.persian : D.gregorian
                        }
                    }, {
                        key: "toLeapYearMode",
                        value: function(a) {
                            var n = _;
                            return n.leapYearMode = a,
                            n
                        }
                    }, {
                        key: "toCalendar",
                        value: function(a) {
                            var n = _;
                            return n.calendarType = a,
                            n
                        }
                    }, {
                        key: "toLocale",
                        value: function(a) {
                            var n = _;
                            return n.localType = a,
                            n.localType !== "fa" ? n.formatPersian = !1 : n.formatPersian = "_default",
                            n
                        }
                    }, {
                        key: "isPersianDate",
                        value: function(a) {
                            return a instanceof _
                        }
                    }, {
                        key: "duration",
                        value: function(a, n) {
                            return new S(a,n)
                        }
                    }, {
                        key: "isDuration",
                        value: function(a) {
                            return a instanceof S
                        }
                    }, {
                        key: "unix",
                        value: function(a) {
                            return a ? new _(a * 1e3) : new _().unix()
                        }
                    }, {
                        key: "getFirstWeekDayOfMonth",
                        value: function(a, n) {
                            return new _([a, n, 1]).day()
                        }
                    }, {
                        key: "utc",
                        value: function(a) {
                            return a ? new _(a).utc() : new _().utc()
                        }
                    }, {
                        key: "isSameDay",
                        value: function(a, n) {
                            return a && n && a.date() == n.date() && a.year() == n.year() && a.month() == n.month()
                        }
                    }, {
                        key: "isSameMonth",
                        value: function(a, n) {
                            return a && n && a.year() == n.year() && a.month() == n.month()
                        }
                    }]),
                    _
                }();
                d.exports = C
            }
            , function(d, p, y) {
                "use strict";
                var T = function() {
                    function S(c, s) {
                        for (var l = 0; l < s.length; l++) {
                            var m = s[l];
                            m.enumerable = m.enumerable || !1,
                            m.configurable = !0,
                            "value"in m && (m.writable = !0),
                            Object.defineProperty(c, m.key, m)
                        }
                    }
                    return function(c, s, l) {
                        return s && S(c.prototype, s),
                        l && S(c, l),
                        c
                    }
                }();
                function x(S, c) {
                    if (!(S instanceof c))
                        throw new TypeError("Cannot call a class as a function")
                }
                var P = y(3)
                  , q = y(9)
                  , Y = function() {
                    function S(c) {
                        x(this, S),
                        this.parent = c,
                        this.ASTRO = new P,
                        this.State = new q,
                        this.J0000 = 17214245e-1,
                        this.J1970 = 24405875e-1,
                        this.JMJD = 24000005e-1,
                        this.NormLeap = [!1, !0],
                        this.GREGORIAN_EPOCH = 17214255e-1,
                        this.PERSIAN_EPOCH = 19483205e-1
                    }
                    return T(S, [{
                        key: "leap_gregorian",
                        value: function(s) {
                            return s % 4 === 0 && !(s % 100 === 0 && s % 400 !== 0)
                        }
                    }, {
                        key: "gregorian_to_jd",
                        value: function(s, l, m) {
                            return this.GREGORIAN_EPOCH - 1 + 365 * (s - 1) + Math.floor((s - 1) / 4) + -Math.floor((s - 1) / 100) + Math.floor((s - 1) / 400) + Math.floor((367 * l - 362) / 12 + (l <= 2 ? 0 : this.leap_gregorian(s) ? -1 : -2) + m)
                        }
                    }, {
                        key: "jd_to_gregorian",
                        value: function(s) {
                            var l = void 0
                              , m = void 0
                              , g = void 0
                              , D = void 0
                              , C = void 0
                              , _ = void 0
                              , h = void 0
                              , a = void 0
                              , n = void 0
                              , k = void 0
                              , b = void 0
                              , L = void 0
                              , B = void 0
                              , j = void 0;
                            return l = Math.floor(s - .5) + .5,
                            m = l - this.GREGORIAN_EPOCH,
                            g = Math.floor(m / 146097),
                            D = this.ASTRO.mod(m, 146097),
                            C = Math.floor(D / 36524),
                            _ = this.ASTRO.mod(D, 36524),
                            h = Math.floor(_ / 1461),
                            a = this.ASTRO.mod(_, 1461),
                            n = Math.floor(a / 365),
                            k = g * 400 + C * 100 + h * 4 + n,
                            C === 4 || n === 4 || k++,
                            b = l - this.gregorian_to_jd(k, 1, 1),
                            L = l < this.gregorian_to_jd(k, 3, 1) ? 0 : this.leap_gregorian(k) ? 1 : 2,
                            B = Math.floor(((b + L) * 12 + 373) / 367),
                            j = l - this.gregorian_to_jd(k, B, 1) + 1,
                            [k, B, j]
                        }
                    }, {
                        key: "tehran_equinox",
                        value: function(s) {
                            var l = void 0
                              , m = void 0
                              , g = void 0
                              , D = void 0
                              , C = void 0;
                            return l = this.ASTRO.equinox(s, 0),
                            m = l - this.ASTRO.deltat(s) / (24 * 60 * 60),
                            g = m + this.ASTRO.equationOfTime(l),
                            C = (52 + 30 / 60 + 0 / (60 * 60)) / 360,
                            D = g + C,
                            D
                        }
                    }, {
                        key: "tehran_equinox_jd",
                        value: function(s) {
                            var l = void 0
                              , m = void 0;
                            return l = this.tehran_equinox(s),
                            m = Math.floor(l),
                            m
                        }
                    }, {
                        key: "persiana_year",
                        value: function(s) {
                            var l = this.jd_to_gregorian(s)[0] - 2
                              , m = void 0
                              , g = void 0
                              , D = void 0;
                            for (m = this.tehran_equinox_jd(l); m > s; )
                                l--,
                                m = this.tehran_equinox_jd(l);
                            for (g = m - 1; !(m <= s && s < g); )
                                m = g,
                                l++,
                                g = this.tehran_equinox_jd(l);
                            return D = Math.round((m - this.PERSIAN_EPOCH) / this.ASTRO.TropicalYear) + 1,
                            [D, m]
                        }
                    }, {
                        key: "jd_to_persiana",
                        value: function(s) {
                            var l = void 0
                              , m = void 0
                              , g = void 0
                              , D = void 0
                              , C = void 0
                              , _ = void 0;
                            return s = Math.floor(s) + .5,
                            D = this.persiana_year(s),
                            l = D[0],
                            C = D[1],
                            g = Math.floor((s - C) / 30) + 1,
                            _ = Math.floor(s) - this.persiana_to_jd(l, 1, 1) + 1,
                            m = _ <= 186 ? Math.ceil(_ / 31) : Math.ceil((_ - 6) / 30),
                            g = Math.floor(s) - this.persiana_to_jd(l, m, 1) + 1,
                            [l, m, g]
                        }
                    }, {
                        key: "persiana_to_jd",
                        value: function(s, l, m) {
                            var g = void 0
                              , D = void 0
                              , C = void 0
                              , _ = void 0;
                            for (C = this.PERSIAN_EPOCH - 1 + this.ASTRO.TropicalYear * (s - 1 - 1),
                            g = [s - 1, 0]; g[0] < s; )
                                g = this.persiana_year(C),
                                C = g[1] + (this.ASTRO.TropicalYear + 2);
                            return D = g[1],
                            _ = D + (l <= 7 ? (l - 1) * 31 : (l - 1) * 30 + 6) + (m - 1),
                            _
                        }
                    }, {
                        key: "leap_persiana",
                        value: function(s) {
                            return this.persiana_to_jd(s + 1, 1, 1) - this.persiana_to_jd(s, 1, 1) > 365
                        }
                    }, {
                        key: "leap_persian",
                        value: function(s) {
                            return ((s - (s > 0 ? 474 : 473)) % 2820 + 474 + 38) * 682 % 2816 < 682
                        }
                    }, {
                        key: "persian_to_jd",
                        value: function(s, l, m) {
                            var g = void 0
                              , D = void 0;
                            return g = s - (s >= 0 ? 474 : 473),
                            D = 474 + this.ASTRO.mod(g, 2820),
                            m + (l <= 7 ? (l - 1) * 31 : (l - 1) * 30 + 6) + Math.floor((D * 682 - 110) / 2816) + (D - 1) * 365 + Math.floor(g / 2820) * 1029983 + (this.PERSIAN_EPOCH - 1)
                        }
                    }, {
                        key: "jd_to_persian",
                        value: function(s) {
                            var l = void 0
                              , m = void 0
                              , g = void 0
                              , D = void 0
                              , C = void 0
                              , _ = void 0
                              , h = void 0
                              , a = void 0
                              , n = void 0
                              , k = void 0;
                            return s = Math.floor(s) + .5,
                            D = s - this.persian_to_jd(475, 1, 1),
                            C = Math.floor(D / 1029983),
                            _ = this.ASTRO.mod(D, 1029983),
                            _ === 1029982 ? h = 2820 : (a = Math.floor(_ / 366),
                            n = this.ASTRO.mod(_, 366),
                            h = Math.floor((2134 * a + 2816 * n + 2815) / 1028522) + a + 1),
                            l = h + 2820 * C + 474,
                            l <= 0 && l--,
                            k = s - this.persian_to_jd(l, 1, 1) + 1,
                            m = k <= 186 ? Math.ceil(k / 31) : Math.ceil((k - 6) / 30),
                            g = s - this.persian_to_jd(l, m, 1) + 1,
                            [l, m, g]
                        }
                    }, {
                        key: "gWeekDayToPersian",
                        value: function(s) {
                            return s + 2 === 8 ? 1 : s + 2 === 7 ? 7 : s + 2
                        }
                    }, {
                        key: "updateFromGregorian",
                        value: function() {
                            var s = void 0
                              , l = void 0
                              , m = void 0
                              , g = void 0
                              , D = void 0
                              , C = void 0
                              , _ = void 0
                              , h = void 0
                              , a = void 0
                              , n = void 0;
                            l = this.State.gregorian.year,
                            m = this.State.gregorian.month,
                            g = this.State.gregorian.day,
                            D = 0,
                            C = 0,
                            _ = 0,
                            this.State.gDate = new Date(l,m,g,this.State.gregorian.hour,this.State.gregorian.minute,this.State.gregorian.second,this.State.gregorian.millisecond),
                            this.parent._utcMode === !1 && (this.State.zone = this.State.gDate.getTimezoneOffset()),
                            this.State.gregorian.year = this.State.gDate.getFullYear(),
                            this.State.gregorian.month = this.State.gDate.getMonth(),
                            this.State.gregorian.day = this.State.gDate.getDate(),
                            s = this.gregorian_to_jd(l, m + 1, g) + Math.floor(_ + 60 * (C + 60 * D) + .5) / 86400,
                            this.State.julianday = s,
                            this.State.modifiedjulianday = s - this.JMJD,
                            h = this.ASTRO.jwday(s),
                            this.State.gregorian.weekday = h + 1,
                            this.State.gregorian.leap = this.NormLeap[this.leap_gregorian(l) ? 1 : 0],
                            h = this.ASTRO.jwday(s),
                            this.parent.calendarType == "persian" && this.parent.leapYearMode == "algorithmic" && (n = this.jd_to_persian(s),
                            this.State.persian.year = n[0],
                            this.State.persian.month = n[1] - 1,
                            this.State.persian.day = n[2],
                            this.State.persian.weekday = this.gWeekDayToPersian(h),
                            this.State.persian.leap = this.NormLeap[this.leap_persian(n[0]) ? 1 : 0]),
                            this.parent.calendarType == "persian" && this.parent.leapYearMode == "astronomical" && (n = this.jd_to_persiana(s),
                            this.State.persianAstro.year = n[0],
                            this.State.persianAstro.month = n[1] - 1,
                            this.State.persianAstro.day = n[2],
                            this.State.persianAstro.weekday = this.gWeekDayToPersian(h),
                            this.State.persianAstro.leap = this.NormLeap[this.leap_persiana(n[0]) ? 1 : 0]),
                            this.State.gregserial.day !== null && (this.State.gregserial.day = s - this.J0000),
                            a = (s - this.J1970) * (60 * 60 * 24 * 1e3),
                            this.State.unixtime = Math.round(a / 1e3)
                        }
                    }, {
                        key: "calcGregorian",
                        value: function(s) {
                            (s[0] || s[0] === 0) && (this.State.gregorian.year = s[0]),
                            (s[1] || s[1] === 0) && (this.State.gregorian.month = s[1]),
                            (s[2] || s[2] === 0) && (this.State.gregorian.day = s[2]),
                            (s[3] || s[3] === 0) && (this.State.gregorian.hour = s[3]),
                            (s[4] || s[4] === 0) && (this.State.gregorian.minute = s[4]),
                            (s[5] || s[5] === 0) && (this.State.gregorian.second = s[5]),
                            (s[6] || s[6] === 0) && (this.State.gregorian.millisecond = s[6]),
                            this.updateFromGregorian()
                        }
                    }, {
                        key: "calcJulian",
                        value: function() {
                            var s = void 0
                              , l = void 0;
                            s = this.State.julianday,
                            l = this.jd_to_gregorian(s),
                            this.State.gregorian.year = l[0],
                            this.State.gregorian.month = l[1] - 1,
                            this.State.gregorian.day = l[2],
                            this.updateFromGregorian()
                        }
                    }, {
                        key: "setJulian",
                        value: function(s) {
                            this.State.julianday = s,
                            this.calcJulian()
                        }
                    }, {
                        key: "calcPersian",
                        value: function(s) {
                            (s[0] || s[0] === 0) && (this.State.persian.year = s[0]),
                            (s[1] || s[1] === 0) && (this.State.persian.month = s[1]),
                            (s[2] || s[2] === 0) && (this.State.persian.day = s[2]),
                            (s[3] || s[3] === 0) && (this.State.gregorian.hour = s[3]),
                            (s[4] || s[4] === 0) && (this.State.gregorian.minute = s[4]),
                            (s[5] || s[5] === 0) && (this.State.gregorian.second = s[5]),
                            (s[6] || s[6] === 0) && (this.State.gregorian.millisecond = s[6]),
                            this.setJulian(this.persian_to_jd(this.State.persian.year, this.State.persian.month, this.State.persian.day))
                        }
                    }, {
                        key: "calcPersiana",
                        value: function(s) {
                            (s[0] || s[0] === 0) && (this.State.persianAstro.year = s[0]),
                            (s[1] || s[1] === 0) && (this.State.persianAstro.month = s[1]),
                            (s[2] || s[2] === 0) && (this.State.persianAstro.day = s[2]),
                            (s[3] || s[3] === 0) && (this.State.gregorian.hour = s[3]),
                            (s[4] || s[4] === 0) && (this.State.gregorian.minute = s[4]),
                            (s[5] || s[5] === 0) && (this.State.gregorian.second = s[5]),
                            (s[6] || s[6] === 0) && (this.State.gregorian.millisecond = s[6]),
                            this.setJulian(this.persiana_to_jd(this.State.persianAstro.year, this.State.persianAstro.month, this.State.persianAstro.day + .5))
                        }
                    }]),
                    S
                }();
                d.exports = Y
            }
            , function(d, p, y) {
                "use strict";
                var T = function() {
                    function q(Y, S) {
                        for (var c = 0; c < S.length; c++) {
                            var s = S[c];
                            s.enumerable = s.enumerable || !1,
                            s.configurable = !0,
                            "value"in s && (s.writable = !0),
                            Object.defineProperty(Y, s.key, s)
                        }
                    }
                    return function(Y, S, c) {
                        return S && q(Y.prototype, S),
                        c && q(Y, c),
                        Y
                    }
                }();
                function x(q, Y) {
                    if (!(q instanceof Y))
                        throw new TypeError("Cannot call a class as a function")
                }
                var P = function() {
                    function q() {
                        x(this, q),
                        this.J2000 = 2451545,
                        this.JulianCentury = 36525,
                        this.JulianMillennium = this.JulianCentury * 10,
                        this.TropicalYear = 365.24219878,
                        this.oterms = [-4680.93, -1.55, 1999.25, -51.38, -249.67, -39.05, 7.12, 27.87, 5.79, 2.45],
                        this.nutArgMult = [0, 0, 0, 0, 1, -2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, -2, 1, 0, 2, 2, 0, 0, 0, 2, 1, 0, 0, 1, 2, 2, -2, -1, 0, 2, 2, -2, 0, 1, 0, 0, -2, 0, 0, 2, 1, 0, 0, -1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, -1, 2, 2, 0, 0, -1, 0, 1, 0, 0, 1, 2, 1, -2, 0, 2, 0, 0, 0, 0, -2, 2, 1, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, -2, 0, 1, 2, 2, 0, 0, 0, 2, 0, -2, 0, 0, 2, 0, 0, 0, -1, 2, 1, 0, 2, 0, 0, 0, 2, 0, -1, 0, 1, -2, 2, 0, 2, 2, 0, 1, 0, 0, 1, -2, 0, 1, 0, 1, 0, -1, 0, 0, 1, 0, 0, 2, -2, 0, 2, 0, -1, 2, 1, 2, 0, 1, 2, 2, 0, 1, 0, 2, 2, -2, 1, 1, 0, 0, 0, -1, 0, 2, 2, 2, 0, 0, 2, 1, 2, 0, 1, 0, 0, -2, 0, 2, 2, 2, -2, 0, 1, 2, 1, 2, 0, -2, 0, 1, 2, 0, 0, 0, 1, 0, -1, 1, 0, 0, -2, -1, 0, 2, 1, -2, 0, 0, 0, 1, 0, 0, 2, 2, 1, -2, 0, 2, 0, 1, -2, 1, 0, 2, 1, 0, 0, 1, -2, 0, -1, 0, 1, 0, 0, -2, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 2, 0, -1, -1, 1, 0, 0, 0, 1, 1, 0, 0, 0, -1, 1, 2, 2, 2, -1, -1, 2, 2, 0, 0, -2, 2, 2, 0, 0, 3, 2, 2, 2, -1, 0, 2, 2],
                        this.nutArgCoeff = [-171996, -1742, 92095, 89, -13187, -16, 5736, -31, -2274, -2, 977, -5, 2062, 2, -895, 5, 1426, -34, 54, -1, 712, 1, -7, 0, -517, 12, 224, -6, -386, -4, 200, 0, -301, 0, 129, -1, 217, -5, -95, 3, -158, 0, 0, 0, 129, 1, -70, 0, 123, 0, -53, 0, 63, 0, 0, 0, 63, 1, -33, 0, -59, 0, 26, 0, -58, -1, 32, 0, -51, 0, 27, 0, 48, 0, 0, 0, 46, 0, -24, 0, -38, 0, 16, 0, -31, 0, 13, 0, 29, 0, 0, 0, 29, 0, -12, 0, 26, 0, 0, 0, -22, 0, 0, 0, 21, 0, -10, 0, 17, -1, 0, 0, 16, 0, -8, 0, -16, 1, 7, 0, -15, 0, 9, 0, -13, 0, 7, 0, -12, 0, 6, 0, 11, 0, 0, 0, -10, 0, 5, 0, -8, 0, 3, 0, 7, 0, -3, 0, -7, 0, 0, 0, -7, 0, 3, 0, -7, 0, 3, 0, 6, 0, 0, 0, 6, 0, -3, 0, 6, 0, -3, 0, -6, 0, 3, 0, -6, 0, 3, 0, 5, 0, 0, 0, -5, 0, 3, 0, -5, 0, 3, 0, -5, 0, 3, 0, 4, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, -4, 0, 0, 0, -4, 0, 0, 0, -4, 0, 0, 0, 3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0, -3, 0, 0, 0],
                        this.deltaTtab = [121, 112, 103, 95, 88, 82, 77, 72, 68, 63, 60, 56, 53, 51, 48, 46, 44, 42, 40, 38, 35, 33, 31, 29, 26, 24, 22, 20, 18, 16, 14, 12, 11, 10, 9, 8, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 14, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 16, 16, 15, 15, 14, 13, 13.1, 12.5, 12.2, 12, 12, 12, 12, 12, 12, 11.9, 11.6, 11, 10.2, 9.2, 8.2, 7.1, 6.2, 5.6, 5.4, 5.3, 5.4, 5.6, 5.9, 6.2, 6.5, 6.8, 7.1, 7.3, 7.5, 7.6, 7.7, 7.3, 6.2, 5.2, 2.7, 1.4, -1.2, -2.8, -3.8, -4.8, -5.5, -5.3, -5.6, -5.7, -5.9, -6, -6.3, -6.5, -6.2, -4.7, -2.8, -.1, 2.6, 5.3, 7.7, 10.4, 13.3, 16, 18.2, 20.2, 21.1, 22.4, 23.5, 23.8, 24.3, 24, 23.9, 23.9, 23.7, 24, 24.3, 25.3, 26.2, 27.3, 28.2, 29.1, 30, 30.7, 31.4, 32.2, 33.1, 34, 35, 36.5, 38.3, 40.2, 42.2, 44.5, 46.5, 48.5, 50.5, 52.2, 53.8, 54.9, 55.8, 56.9, 58.3, 60, 61.6, 63, 65, 66.6],
                        this.EquinoxpTerms = [485, 324.96, 1934.136, 203, 337.23, 32964.467, 199, 342.08, 20.186, 182, 27.85, 445267.112, 156, 73.14, 45036.886, 136, 171.52, 22518.443, 77, 222.54, 65928.934, 74, 296.72, 3034.906, 70, 243.58, 9037.513, 58, 119.81, 33718.147, 52, 297.17, 150.678, 50, 21.02, 2281.226, 45, 247.54, 29929.562, 44, 325.15, 31555.956, 29, 60.93, 4443.417, 18, 155.12, 67555.328, 17, 288.79, 4562.452, 16, 198.04, 62894.029, 14, 199.76, 31436.921, 12, 95.39, 14577.848, 12, 287.11, 31931.756, 12, 320.81, 34777.259, 9, 227.73, 1222.114, 8, 15.45, 16859.074],
                        this.JDE0tab1000 = [new Array(172113929189e-5,365242.1374,.06134,.00111,-71e-5), new Array(172123325401e-5,365241.72562,-.05323,.00907,25e-5), new Array(172132570455e-5,365242.49558,-.11677,-.00297,74e-5), new Array(172141439987e-5,365242.88257,-.00769,-.00933,-6e-5)],
                        this.JDE0tab2000 = [new Array(245162380984e-5,365242.37404,.05169,-.00411,-57e-5), new Array(245171656767e-5,365241.62603,.00325,.00888,-3e-4), new Array(245181021715e-5,365242.01767,-.11575,.00337,78e-5), new Array(245190005952e-5,365242.74049,-.06223,-.00823,32e-5)]
                    }
                    return T(q, [{
                        key: "dtr",
                        value: function(S) {
                            return S * Math.PI / 180
                        }
                    }, {
                        key: "rtd",
                        value: function(S) {
                            return S * 180 / Math.PI
                        }
                    }, {
                        key: "fixangle",
                        value: function(S) {
                            return S - 360 * Math.floor(S / 360)
                        }
                    }, {
                        key: "fixangr",
                        value: function(S) {
                            return S - 2 * Math.PI * Math.floor(S / (2 * Math.PI))
                        }
                    }, {
                        key: "dsin",
                        value: function(S) {
                            return Math.sin(this.dtr(S))
                        }
                    }, {
                        key: "dcos",
                        value: function(S) {
                            return Math.cos(this.dtr(S))
                        }
                    }, {
                        key: "mod",
                        value: function(S, c) {
                            return S - c * Math.floor(S / c)
                        }
                    }, {
                        key: "jwday",
                        value: function(S) {
                            return this.mod(Math.floor(S + 1.5), 7)
                        }
                    }, {
                        key: "obliqeq",
                        value: function(S) {
                            var c, s, l, m;
                            if (l = s = (S - this.J2000) / (this.JulianCentury * 100),
                            c = 23 + 26 / 60 + 21.448 / 3600,
                            Math.abs(s) < 1)
                                for (m = 0; m < 10; m++)
                                    c += this.oterms[m] / 3600 * l,
                                    l *= s;
                            return c
                        }
                    }, {
                        key: "nutation",
                        value: function(S) {
                            var c, s, l, m, g = (S - 2451545) / 36525, D, C, _, h = [], a = 0, n = 0, k;
                            for (C = g * (D = g * g),
                            h[0] = this.dtr(297.850363 + 445267.11148 * g - .0019142 * D + C / 189474),
                            h[1] = this.dtr(357.52772 + 35999.05034 * g - 1603e-7 * D - C / 3e5),
                            h[2] = this.dtr(134.96298 + 477198.867398 * g + .0086972 * D + C / 56250),
                            h[3] = this.dtr(93.27191 + 483202.017538 * g - .0036825 * D + C / 327270),
                            h[4] = this.dtr(125.04452 - 1934.136261 * g + .0020708 * D + C / 45e4),
                            l = 0; l < 5; l++)
                                h[l] = this.fixangr(h[l]);
                            for (_ = g / 10,
                            l = 0; l < 63; l++) {
                                for (k = 0,
                                m = 0; m < 5; m++)
                                    this.nutArgMult[l * 5 + m] !== 0 && (k += this.nutArgMult[l * 5 + m] * h[m]);
                                a += (this.nutArgCoeff[l * 4 + 0] + this.nutArgCoeff[l * 4 + 1] * _) * Math.sin(k),
                                n += (this.nutArgCoeff[l * 4 + 2] + this.nutArgCoeff[l * 4 + 3] * _) * Math.cos(k)
                            }
                            return c = a / (3600 * 1e4),
                            s = n / (3600 * 1e4),
                            [c, s]
                        }
                    }, {
                        key: "deltat",
                        value: function(S) {
                            var c, s, l, m;
                            return S >= 1620 && S <= 2e3 ? (l = Math.floor((S - 1620) / 2),
                            s = (S - 1620) / 2 - l,
                            c = this.deltaTtab[l] + (this.deltaTtab[l + 1] - this.deltaTtab[l]) * s) : (m = (S - 2e3) / 100,
                            S < 948 ? c = 2177 + 497 * m + 44.1 * m * m : (c = 102 + 102 * m + 25.3 * m * m,
                            S > 2e3 && S < 2100 && (c += .37 * (S - 2100)))),
                            c
                        }
                    }, {
                        key: "equinox",
                        value: function(S, c) {
                            var s = void 0
                              , l = void 0
                              , m = void 0
                              , g = void 0
                              , D = void 0
                              , C = void 0
                              , _ = void 0
                              , h = void 0
                              , a = void 0
                              , n = void 0;
                            for (S < 1e3 ? (C = this.JDE0tab1000,
                            n = S / 1e3) : (C = this.JDE0tab2000,
                            n = (S - 2e3) / 1e3),
                            g = C[c][0] + C[c][1] * n + C[c][2] * n * n + C[c][3] * n * n * n + C[c][4] * n * n * n * n,
                            h = (g - 2451545) / 36525,
                            a = 35999.373 * h - 2.47,
                            s = 1 + .0334 * this.dcos(a) + 7e-4 * this.dcos(2 * a),
                            _ = 0,
                            l = m = 0; l < 24; l++)
                                _ += this.EquinoxpTerms[m] * this.dcos(this.EquinoxpTerms[m + 1] + this.EquinoxpTerms[m + 2] * h),
                                m += 3;
                            return D = g + _ * 1e-5 / s,
                            D
                        }
                    }, {
                        key: "sunpos",
                        value: function(S) {
                            var c = void 0
                              , s = void 0
                              , l = void 0
                              , m = void 0
                              , g = void 0
                              , D = void 0
                              , C = void 0
                              , _ = void 0
                              , h = void 0
                              , a = void 0
                              , n = void 0
                              , k = void 0
                              , b = void 0
                              , L = void 0
                              , B = void 0
                              , j = void 0
                              , ee = void 0;
                            return c = (S - this.J2000) / this.JulianCentury,
                            s = c * c,
                            l = 280.46646 + 36000.76983 * c + 3032e-7 * s,
                            l = this.fixangle(l),
                            m = 357.52911 + 35999.05029 * c + -1537e-7 * s,
                            m = this.fixangle(m),
                            g = .016708634 + -42037e-9 * c + -1267e-10 * s,
                            D = (1.914602 + -.004817 * c + -14e-6 * s) * this.dsin(m) + (.019993 - 101e-6 * c) * this.dsin(2 * m) + 289e-6 * this.dsin(3 * m),
                            C = l + D,
                            _ = m + D,
                            h = 1.000001018 * (1 - g * g) / (1 + g * this.dcos(_)),
                            a = 125.04 - 1934.136 * c,
                            n = C + -.00569 + -.00478 * this.dsin(a),
                            b = this.obliqeq(S),
                            k = b + .00256 * this.dcos(a),
                            L = this.rtd(Math.atan2(this.dcos(b) * this.dsin(C), this.dcos(C))),
                            L = this.fixangle(L),
                            B = this.rtd(Math.asin(this.dsin(b) * this.dsin(C))),
                            j = this.rtd(Math.atan2(this.dcos(k) * this.dsin(n), this.dcos(n))),
                            j = this.fixangle(j),
                            ee = this.rtd(Math.asin(this.dsin(k) * this.dsin(n))),
                            [l, m, g, D, C, _, h, n, L, B, j, ee]
                        }
                    }, {
                        key: "equationOfTime",
                        value: function(S) {
                            var c = void 0
                              , s = void 0
                              , l = void 0
                              , m = void 0
                              , g = void 0
                              , D = void 0;
                            return D = (S - this.J2000) / this.JulianMillennium,
                            g = 280.4664567 + 360007.6982779 * D + .03032028 * D * D + D * D * D / 49931 + -(D * D * D * D / 15300) + -(D * D * D * D * D / 2e6),
                            g = this.fixangle(g),
                            c = this.sunpos(S)[10],
                            s = this.nutation(S)[0],
                            m = this.obliqeq(S) + this.nutation(S)[1],
                            l = g + -.0057183 + -c + s * this.dcos(m),
                            l = l - 20 * Math.floor(l / 20),
                            l = l / (24 * 60),
                            l
                        }
                    }]),
                    q
                }();
                d.exports = P
            }
            , function(d, p, y) {
                "use strict";
                d.exports = {
                    durationUnit: {
                        year: ["y", "years", "year"],
                        month: ["M", "months", "month"],
                        day: ["d", "days", "day"],
                        hour: ["h", "hours", "hour"],
                        minute: ["m", "minutes", "minute"],
                        second: ["s", "second", "seconds"],
                        millisecond: ["ms", "milliseconds", "millisecond"],
                        week: ["W", "w", "weeks", "week"]
                    }
                }
            }
            , function(d, p, y) {
                "use strict";
                var T = function() {
                    function s(l, m) {
                        for (var g = 0; g < m.length; g++) {
                            var D = m[g];
                            D.enumerable = D.enumerable || !1,
                            D.configurable = !0,
                            "value"in D && (D.writable = !0),
                            Object.defineProperty(l, D.key, D)
                        }
                    }
                    return function(l, m, g) {
                        return m && s(l.prototype, m),
                        g && s(l, g),
                        l
                    }
                }();
                function x(s, l) {
                    if (!(s instanceof l))
                        throw new TypeError("Cannot call a class as a function")
                }
                var P = y(0)
                  , q = new P().normalizeDuration
                  , Y = new P().absRound
                  , S = new P().absFloor
                  , c = function() {
                    function s(l, m) {
                        x(this, s);
                        var g = {}
                          , D = this._data = {}
                          , C = 0
                          , _ = q(l, m)
                          , h = _.unit;
                        g[h] = _.value,
                        C = g.milliseconds || g.millisecond || g.ms || 0;
                        var a = g.years || g.year || g.y || 0
                          , n = g.months || g.month || g.M || 0
                          , k = g.weeks || g.w || g.week || 0
                          , b = g.days || g.d || g.day || 0
                          , L = g.hours || g.hour || g.h || 0
                          , B = g.minutes || g.minute || g.m || 0
                          , j = g.seconds || g.second || g.s || 0;
                        return this._milliseconds = C + j * 1e3 + B * 6e4 + L * 36e5,
                        this._days = b + k * 7,
                        this._months = n + a * 12,
                        D.milliseconds = C % 1e3,
                        j += S(C / 1e3),
                        D.seconds = j % 60,
                        B += Y(j / 60),
                        D.minutes = B % 60,
                        L += Y(B / 60),
                        D.hours = L % 24,
                        b += Y(L / 24),
                        b += k * 7,
                        D.days = b % 30,
                        n += Y(b / 30),
                        D.months = n % 12,
                        a += Y(n / 12),
                        D.years = a,
                        this
                    }
                    return T(s, [{
                        key: "valueOf",
                        value: function() {
                            return this._milliseconds + this._days * 864e5 + this._months * 2592e6
                        }
                    }]),
                    s
                }();
                d.exports = c
            }
            , function(d, p, y) {
                "use strict";
                d.exports = {
                    gregorian: {
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        weekdaysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        weekdaysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    },
                    persian: {
                        months: ["Farvardin", "Ordibehesht", "Khordad", "Tir", "Mordad", "Shahrivar", "Mehr", "Aban", "Azar", "Dey", "Bahman", "Esfand"],
                        monthsShort: ["Far", "Ord", "Kho", "Tir", "Mor", "Sha", "Meh", "Aba", "Aza", "Dey", "Bah", "Esf"],
                        weekdays: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        weekdaysShort: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
                        weekdaysMin: ["Sa", "Su", "Mo", "Tu", "We", "Th", "Fr"],
                        persianDaysName: ["Urmazd", "Bahman", "Ordibehesht", "Shahrivar", "Sepandarmaz", "Khurdad", "Amordad", "Dey-be-azar", "Azar", "Aban", "Khorshid", "Mah", "Tir", "Gush", "Dey-be-mehr", "Mehr", "Sorush", "Rashn", "Farvardin", "Bahram", "Ram", "Bad", "Dey-be-din", "Din", "Ord", "Ashtad", "Asman", "Zamyad", "Mantre-sepand", "Anaram", "Ziadi"]
                    }
                }
            }
            , function(d, p, y) {
                "use strict";
                d.exports = {
                    gregorian: {
                        months: "\u0698\u0627\u0646\u0648\u06CC\u0647_\u0641\u0648\u0631\u06CC\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06CC\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06CC\u0647_\u0627\u0648\u062A_\u0633\u067E\u062A\u0627\u0645\u0628\u0631_\u0627\u06A9\u062A\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062F\u0633\u0627\u0645\u0628\u0631".split("_"),
                        monthsShort: "\u0698\u0627\u0646\u0648\u06CC\u0647_\u0641\u0648\u0631\u06CC\u0647_\u0645\u0627\u0631\u0633_\u0622\u0648\u0631\u06CC\u0644_\u0645\u0647_\u0698\u0648\u0626\u0646_\u0698\u0648\u0626\u06CC\u0647_\u0627\u0648\u062A_\u0633\u067E\u062A\u0627\u0645\u0628\u0631_\u0627\u06A9\u062A\u0628\u0631_\u0646\u0648\u0627\u0645\u0628\u0631_\u062F\u0633\u0627\u0645\u0628\u0631".split("_"),
                        weekdays: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
                        weekdaysShort: "\u06CC\u06A9\u200C\u0634\u0646\u0628\u0647_\u062F\u0648\u0634\u0646\u0628\u0647_\u0633\u0647\u200C\u0634\u0646\u0628\u0647_\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647_\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647_\u062C\u0645\u0639\u0647_\u0634\u0646\u0628\u0647".split("_"),
                        weekdaysMin: "\u06CC_\u062F_\u0633_\u0686_\u067E_\u062C_\u0634".split("_")
                    },
                    persian: {
                        months: ["\u0641\u0631\u0648\u0631\u062F\u06CC\u0646", "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A", "\u062E\u0631\u062F\u0627\u062F", "\u062A\u06CC\u0631", "\u0645\u0631\u062F\u0627\u062F", "\u0634\u0647\u0631\u06CC\u0648\u0631", "\u0645\u0647\u0631", "\u0622\u0628\u0627\u0646", "\u0622\u0630\u0631", "\u062F\u06CC", "\u0628\u0647\u0645\u0646", "\u0627\u0633\u0641\u0646\u062F"],
                        monthsShort: ["\u0641\u0631\u0648", "\u0627\u0631\u062F", "\u062E\u0631\u062F", "\u062A\u06CC\u0631", "\u0645\u0631\u062F", "\u0634\u0647\u0631", "\u0645\u0647\u0631", "\u0622\u0628\u0627", "\u0622\u0630\u0631", "\u062F\u06CC", "\u0628\u0647\u0645", "\u0627\u0633\u0641"],
                        weekdays: ["\u0634\u0646\u0628\u0647", "\u06CC\u06A9\u0634\u0646\u0628\u0647", "\u062F\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647 \u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631 \u0634\u0646\u0628\u0647", "\u067E\u0646\u062C\u200C\u0634\u0646\u0628\u0647", "\u062C\u0645\u0639\u0647"],
                        weekdaysShort: ["\u0634", "\u06CC", "\u062F", "\u0633", "\u0686", "\u067E", "\u062C"],
                        weekdaysMin: ["\u0634", "\u06CC", "\u062F", "\u0633", "\u0686", "\u067E", "\u062C"],
                        persianDaysName: ["\u0627\u0648\u0631\u0645\u0632\u062F", "\u0628\u0647\u0645\u0646", "\u0627\u0648\u0631\u062F\u06CC\u0628\u0647\u0634\u062A", "\u0634\u0647\u0631\u06CC\u0648\u0631", "\u0633\u067E\u0646\u062F\u0627\u0631\u0645\u0630", "\u062E\u0648\u0631\u062F\u0627\u062F", "\u0627\u0645\u0631\u062F\u0627\u062F", "\u062F\u06CC \u0628\u0647 \u0622\u0630\u0632", "\u0622\u0630\u0632", "\u0622\u0628\u0627\u0646", "\u062E\u0648\u0631\u0634\u06CC\u062F", "\u0645\u0627\u0647", "\u062A\u06CC\u0631", "\u06AF\u0648\u0634", "\u062F\u06CC \u0628\u0647 \u0645\u0647\u0631", "\u0645\u0647\u0631", "\u0633\u0631\u0648\u0634", "\u0631\u0634\u0646", "\u0641\u0631\u0648\u0631\u062F\u06CC\u0646", "\u0628\u0647\u0631\u0627\u0645", "\u0631\u0627\u0645", "\u0628\u0627\u062F", "\u062F\u06CC \u0628\u0647 \u062F\u06CC\u0646", "\u062F\u06CC\u0646", "\u0627\u0631\u062F", "\u0627\u0634\u062A\u0627\u062F", "\u0622\u0633\u0645\u0627\u0646", "\u0632\u0627\u0645\u06CC\u0627\u062F", "\u0645\u0627\u0646\u062A\u0631\u0647 \u0633\u067E\u0646\u062F", "\u0627\u0646\u0627\u0631\u0627\u0645", "\u0632\u06CC\u0627\u062F\u06CC"]
                    }
                }
            }
            , function(d, p, y) {
                "use strict";
                var T = y(1);
                T.calendarType = "persian",
                T.leapYearMode = "astronomical",
                T.localType = "fa",
                d.exports = T
            }
            , function(d, p, y) {
                "use strict";
                function T(P, q) {
                    if (!(P instanceof q))
                        throw new TypeError("Cannot call a class as a function")
                }
                var x = function P() {
                    T(this, P),
                    this.isInvalidDate = null,
                    this.gDate = null,
                    this.modifiedjulianday = 0,
                    this.julianday = 0,
                    this.gregserial = {
                        day: 0
                    },
                    this.zone = 0,
                    this.gregorian = {
                        year: 0,
                        month: 0,
                        day: 0,
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0,
                        weekday: 0,
                        unix: 0,
                        leap: 0
                    },
                    this.juliancalendar = {
                        year: 0,
                        month: 0,
                        day: 0,
                        leap: 0,
                        weekday: 0
                    },
                    this.islamic = {
                        year: 0,
                        month: 0,
                        day: 0,
                        leap: 0,
                        weekday: 0
                    },
                    this.persianAlgo = this.persian = {
                        year: 0,
                        month: 0,
                        day: 0,
                        leap: 0,
                        weekday: 0
                    },
                    this.persianAstro = {
                        year: 0,
                        month: 0,
                        day: 0,
                        leap: 0,
                        weekday: 0
                    },
                    this.isoweek = {
                        year: 0,
                        week: 0,
                        day: 0
                    },
                    this.isoday = {
                        year: 0,
                        day: 0
                    }
                };
                d.exports = x
            }
            , function(d, p, y) {
                "use strict";
                d.exports = {
                    isArray: function(x) {
                        return Object.prototype.toString.call(x) === "[object Array]"
                    },
                    isNumber: function(x) {
                        return typeof x == "number"
                    },
                    isDate: function(x) {
                        return x instanceof Date
                    }
                }
            }
            , function(d, p, y) {
                "use strict";
                d.exports = {
                    validateInputArray: function(x) {
                        var P = !0;
                        return (x[1] < 1 || x[1] > 12) && (P = !1),
                        (x[2] < 1 || x[1] > 31) && (P = !1),
                        (x[3] < 0 || x[3] > 24) && (P = !1),
                        (x[4] < 0 || x[4] > 60) && (P = !1),
                        (x[5] < 0 || x[5] > 60) && (P = !1),
                        P
                    }
                }
            }
            ])
        })
    }
    );
    (function(d) {
        function p(e, t, r) {
            return S(c(e, t, r))
        }
        function y(e, t, r) {
            return s(Y(e, t, r))
        }
        function T(e, t, r) {
            return e >= -61 && e <= 3177 && t >= 1 && t <= 12 && r >= 1 && r <= P(e, t)
        }
        function x(e) {
            return q(e).leap === 0
        }
        function P(e, t) {
            return t <= 6 ? 31 : t <= 11 || x(e) ? 30 : 29
        }
        function q(e) {
            var t = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178], r = t.length, u = e + 621, o = -14, v = t[0], M, i = 1, f, w, z;
            if (e < v || e >= t[r - 1])
                throw new Error("Invalid Jalali year " + e);
            for (z = 1; z < r && (M = t[z],
            i = M - v,
            !(e < M)); z += 1)
                o = o + l(i, 33) * 8 + l(m(i, 33), 4),
                v = M;
            w = e - v,
            o = o + l(w, 33) * 8 + l(m(w, 33) + 3, 4),
            m(i, 33) === 4 && i - w === 4 && (o += 1);
            var Z = l(u, 4) - l((l(u, 100) + 1) * 3, 4) - 150
              , E = 20 + o - Z;
            return i - w < 6 && (w = w - i + l(i + 4, 33) * 33),
            f = m(m(w + 1, 33) - 1, 4),
            f === -1 && (f = 4),
            {
                leap: f,
                gy: u,
                march: E
            }
        }
        function Y(e, t, r) {
            var u = q(e);
            return c(u.gy, 3, u.march) + (t - 1) * 31 - l(t, 7) * (t - 7) + r - 1
        }
        function S(e) {
            var t = s(e).gy, r = t - 621, u = q(r), o = c(t, 3, u.march), v, M, i;
            if (i = e - o,
            i >= 0) {
                if (i <= 185)
                    return M = 1 + l(i, 31),
                    v = m(i, 31) + 1,
                    {
                        jy: r,
                        jm: M,
                        jd: v
                    };
                i -= 186
            } else
                r -= 1,
                i += 179,
                u.leap === 1 && (i += 1);
            return M = 7 + l(i, 30),
            v = m(i, 30) + 1,
            {
                jy: r,
                jm: M,
                jd: v
            }
        }
        function c(e, t, r) {
            var u = l((e + l(t - 8, 6) + 100100) * 1461, 4) + l(153 * m(t + 9, 12) + 2, 5) + r - 34840408;
            return u = u - l(l(e + 100100 + l(t - 8, 6), 100) * 3, 4) + 752,
            u
        }
        function s(e) {
            var t;
            t = 4 * e + 139361631,
            t = t + l(l(4 * e + 183187720, 146097) * 3, 4) * 4 - 3908;
            var r = l(m(t, 1461), 4) * 5 + 308
              , u = l(m(r, 153), 5) + 1
              , o = m(l(r, 153), 12) + 1
              , v = l(t, 1461) - 100100 + l(8 - o, 6);
            return {
                gy: v,
                gm: o,
                gd: u
            }
        }
        function l(e, t) {
            return ~~(e / t)
        }
        function m(e, t) {
            return e - ~~(e / t) * t
        }
        var g = "data-mdpersiandatetimepicker"
          , D = "[" + g + "]"
          , C = "data-mdpersiandatetimepicker-group"
          , _ = "data-mdpersiandatetimepicker-element"
          , h = "[" + _ + "]"
          , a = "data-mdpersiandatetimepicker-container"
          , n = "[" + a + "]"
          , k = "MdPersianDateTimePicker"
          , b = !1
          , L = `
<div class="modal fade mds-bootstrap-persian-datetime-picker-modal" tabindex="-1" role="dialog" 
  aria-labelledby="mdDateTimePickerModalLabel" aria-hidden="true" ${_}>
  <div class="modal-dialog modal-xl modal-dialog-centered" data-buttonselector="">
    <div class="modal-content">
      <div class="modal-body" data-name="mds-datetimepicker-body">
        MD DateTimePicker Html
      </div>
    </div>
  </div>
</div>
`
          , B = `
<div class="popover mds-bootstrap-persian-datetime-picker-popover" role="tooltip" ${_}>    
    <div class="arrow"></div>    
    <h3 class="popover-header text-center" data-name="mds-datetimepicker-title"></h3>    
    <div class="popover-body p-0" data-name="mds-datetimepicker-body"></div>
</div>`
          , j = `
<table class="table table-sm table-borderless text-center p-0 m-0 {{rtlCssClass}}">
    <tr>
        <th>            
            <a href="javascript:void(0)" title="{{previousText}}" data-year="{{latestPreviousYear}}" data-yearrangebuttonchange="-1"> &lt; </a>
        </th>
        <th>
            {{yearsRangeText}}
        </th>
        <th>            
            <a href="javascript:void(0)" title="{{nextText}}" data-year="{{latestNextYear}}" data-yearrangebuttonchange="1"> &gt; </a>
        </th>
    </tr>       
</table>`
          , ee = `
<table class="table table-sm text-center p-0 m-0">
    <tbody>
        {{yearsToSelectHtml}}
    </tbody>            
</table>`
          , le = `
<div class="mds-bootstrap-persian-datetime-picker-container {{rtlCssClass}}" ${a}>

	<div class="select-year-inline-box w-0" data-name="dateTimePickerYearsButtonsContainer">        
    </div>
    <div class="select-year-box w-0" data-name="dateTimePickerYearsToSelectContainer">        
    </div>

    <table class="table table-sm text-center p-0 m-0">
        <thead>
            <tr {{selectedDateStringAttribute}}>
                <th colspan="100" data-selecteddatestring>{{selectedDateString}}</th>
            </tr>            
        </thead>
        <tbody>
            <tr>
                {{monthsTdHtml}}
            </tr>
        </tbody>
        <tfoot>
            <tr {{timePickerAttribute}}>
                <td colspan="100" class="border-0">
                    <table class="table table-sm table-borderless">
                        <tbody>
                            <tr>
                                <td>
                                    <input type="text" title="{{hourText}}" value="{{hour}}" maxlength="2" data-clock="hour" />
                                </td>
                                <td>:</td>
                                <td>
                                    <input type="text" title="{{minuteText}}" value="{{minute}}" maxlength="2" data-clock="minute" />
                                </td>
                                <td>:</td>
                                <td>
                                    <input type="text" title="{{secondText}}" value="{{second}}" maxlength="2" data-clock="second" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan="100">
                    <button type="button" class="btn btn-light" title="{{goTodayText}}" data-go-today>{{todayDateString}}</button>
                </td>
            </tr>
        </tfoot>
    </table>
</div>`
          , te = `
<td class="border-0" style="{{monthTdStyle}}" {{monthTdAttribute}} data-td-month>
	<table class="table table-sm table-striped table-borderless">
		<thead>
			<tr {{monthNameAttribute}}>
				<th colspan="100" class="border-0">
					<table class="table table-sm table-borderless">
						<thead>
							<tr>
								<th>
									<button type="button" class="btn btn-light"> {{currentMonthInfo}} </button>
								</th>
							</tr>
						</thead>
					</table>
				</th>
			</tr>
			<tr {{theadSelectDateButtonTrAttribute}}>
                <td colspan="100" class="border-0">
                    <table class="table table-sm table-borderless">
                        <tr>
                            <th>
                                <button type="button" class="btn btn-light btn-sm" title="{{previousYearText}}" data-changedatebutton data-number="{{previousYearButtonDateNumber}}" {{previousYearButtonDisabledAttribute}}> &lt;&lt; </button>
                            </th>
                            <th>
                                <button type="button" class="btn btn-light btn-sm" title="{{previousMonthText}}" data-changedatebutton data-number="{{previousMonthButtonDateNumber}}" {{previousMonthButtonDisabledAttribute}}> &lt; </button>
                            </th>
                            <th style="width: 120px;">
                                <div class="dropdown">
                                    <button type="button" class="btn btn-light btn-sm dropdown-toggle" id="mdsBootstrapPersianDatetimePickerMonthSelectorButon"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {{selectedMonthName}}
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="mdsBootstrapPersianDatetimePickerMonthSelectorButon">
                                        <a class="dropdown-item {{selectMonth1ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth1DateNumber}}">{{monthName1}}</a>
                                        <a class="dropdown-item {{selectMonth2ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth2DateNumber}}">{{monthName2}}</a>
                                        <a class="dropdown-item {{selectMonth3ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth3DateNumber}}">{{monthName3}}</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item {{selectMonth4ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth4DateNumber}}">{{monthName4}}</a>
                                        <a class="dropdown-item {{selectMonth5ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth5DateNumber}}">{{monthName5}}</a>
                                        <a class="dropdown-item {{selectMonth6ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth6DateNumber}}">{{monthName6}}</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item {{selectMonth7ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth7DateNumber}}">{{monthName7}}</a>
                                        <a class="dropdown-item {{selectMonth8ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth8DateNumber}}">{{monthName8}}</a>
                                        <a class="dropdown-item {{selectMonth9ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth9DateNumber}}">{{monthName9}}</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item {{selectMonth10ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth10DateNumber}}">{{monthName10}}</a>
                                        <a class="dropdown-item {{selectMonth11ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth11DateNumber}}">{{monthName11}}</a>
                                        <a class="dropdown-item {{selectMonth12ButtonCssClass}}" data-changedatebutton data-number="{{dropDownMenuMonth12DateNumber}}">{{monthName12}}</a>
                                    </div>
                                </div>
                            </th>
                            <th style="width: 50px;">
                                <button type="button" class="btn btn-light btn-sm" select-year-button {{selectYearButtonDisabledAttribute}}>{{selectedYear}}</button>
                            </th>
                            <th>
                                <button type="button" class="btn btn-light btn-sm" title="{{nextMonthText}}" data-changedatebutton data-number="{{nextMonthButtonDateNumber}}" {{nextMonthButtonDisabledAttribute}}> &gt; </button>
                            </th>
                            <th>
                                <button type="button" class="btn btn-light btn-sm" title="{{nextYearText}}" data-changedatebutton data-number="{{nextYearButtonDateNumber}}" {{nextYearButtonDisabledAttribute}}> &gt;&gt; </button>
                            </th>
                        </tr>
                    </table>
                </td>
			</tr>
		</thead>
		<tbody class="days">
            <tr>
                <td class="{{weekDayShortName1CssClass}}">{{weekDayShortName1}}</td>
                <td>{{weekDayShortName2}}</td>
                <td>{{weekDayShortName3}}</td>
                <td>{{weekDayShortName4}}</td>
                <td>{{weekDayShortName5}}</td>
                <td>{{weekDayShortName6}}</td>
                <td class="{{weekDayShortName7CssClass}}">{{weekDayShortName7}}</td>
            </tr>
        {{daysHtml}}
		</tbody>
	</table>
</td>
    `;
        triggerChangeCalling = !1;
        var ie = "\u0633\u0627\u0644 \u0642\u0628\u0644"
          , de = "\u0645\u0627\u0647 \u0642\u0628\u0644"
          , Se = "\u0642\u0628\u0644\u06CC"
          , $e = "\u0633\u0627\u0644 \u0628\u0639\u062F"
          , qe = "\u0645\u0627\u0647 \u0628\u0639\u062F"
          , _e = "\u0628\u0639\u062F\u06CC"
          , Ge = "\u0633\u0627\u0639\u062A"
          , ke = "\u062F\u0642\u06CC\u0642\u0647"
          , we = "\u062B\u0627\u0646\u06CC\u0647"
          , ze = "\u0628\u0631\u0648 \u0628\u0647 \u0627\u0645\u0631\u0648\u0632"
          , Ce = "Previous"
          , Te = "Previous Year"
          , xe = "Previous Month"
          , et = "Next"
          , Jt = "Next Year"
          , Ut = "Next Month"
          , Zt = "Go Today"
          , Kt = "Hour"
          , Vt = "Minute"
          , Xt = "Second"
          , Ee = {
            am: 0,
            pm: 1,
            none: 2
        }
          , Qt = ["\u0634", "\u06CC", "\u062F", "\u0633", "\u0686", "\u067E", "\u062C"]
          , ea = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"]
          , ta = ["\u0641\u0631\u0648\u0631\u062F\u06CC\u0646", "\u0627\u0631\u062F\u06CC\u0628\u0647\u0634\u062A", "\u062E\u0631\u062F\u0627\u062F", "\u062A\u06CC\u0631", "\u0645\u0631\u062F\u0627\u062F", "\u0634\u0647\u0631\u06CC\u0648\u0631", "\u0645\u0647\u0631", "\u0622\u0628\u0627\u0646", "\u0622\u0630\u0631", "\u062F\u06CC", "\u0628\u0647\u0645\u0646", "\u0627\u0633\u0641\u0646\u062F"]
          , aa = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
          , ra = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
          , na = ["\u06CC\u06A9 \u0634\u0646\u0628\u0647", "\u062F\u0648\u0634\u0646\u0628\u0647", "\u0633\u0647 \u0634\u0646\u0628\u0647", "\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647", "\u067E\u0646\u062C \u0634\u0646\u0628\u0647", "\u062C\u0645\u0639\u0647", "\u0634\u0646\u0628\u0647"];
        function ia() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, e => {
                var t = Math.random() * 16 | 0
                  , r = e == "x" ? t : t & 3 | 8;
                return r.toString(16)
            }
            )
        }
        function wt(e) {
            return e.parents(".modal" + h + ":first").length > 0
        }
        function pt(e) {
            var t = e.parents(D + ":first");
            return t.length <= 0 && (t = e.parents(h + ":first"),
            t = d('[aria-describedby="' + t.attr("id") + '"]')),
            t
        }
        function Ct(e) {
            return d("#" + e.attr("aria-describedby"))
        }
        function Tt(e) {
            return e.attr("aria-describedby") != null
        }
        function sa(e) {
            return e.attr("aria-describedby") != null
        }
        function pe(e) {
            if (wt(e)) {
                var t = e.parents("[data-buttonselector]:first").attr("data-buttonselector");
                return d('[data-uniqueid="' + t + '"]').data(k)
            } else
                return pt(e).data(k)
        }
        function V(e) {
            return e.data(k)
        }
        function tt(e, t, r) {
            if (!t)
                sa(e) ? Ct(e).find('[data-name="mds-datetimepicker-title"]').html(r) : e.parents(h + ":first").find('[data-name="mds-datetimepicker-title"]').html(r);
            else {
                var u = e.parents(D + ":first").find('[data-name="dateTimePickerYearsButtonsContainer"]');
                u.html(r),
                u.removeClass("w-0")
            }
        }
        function ae(e, t) {
            return pt(e).data(k, t)
        }
        function Ne(e, t) {
            var r = st(t)
              , u = t.inLine ? e.parents(D + ":first") : e.parents('[data-name="mds-datetimepicker-body"]:first');
            tt(e, t.inLine, d(r).find("[data-selecteddatestring]").text().trim()),
            u.html(r)
        }
        function We(e) {
            return e.selectedDate == null ? "" : e.rangeSelector && e.rangeSelectorStartDate != null && e.rangeSelectorEndDate != null ? Fe(e.isGregorian ? O(e.rangeSelectorStartDate) : H(e.rangeSelectorStartDate), e.textFormat, e.isGregorian, e.englishNumber) + " - " + Fe(e.isGregorian ? O(e.rangeSelectorEndDate) : H(e.rangeSelectorEndDate), e.textFormat, e.isGregorian, e.englishNumber) : Fe(e.isGregorian ? O(e.selectedDate) : H(e.selectedDate), e.textFormat, e.isGregorian, e.englishNumber)
        }
        function xt(e) {
            return e.selectedDate == null ? "" : e.rangeSelector && e.rangeSelectorStartDate != null && e.rangeSelectorEndDate != null ? Fe(O(e.rangeSelectorStartDate), e.dateFormat, e.isGregorian, e.englishNumber) + " - " + Fe(O(e.rangeSelectorEndDate), e.dateFormat, e.isGregorian, e.englishNumber) : Fe(O(e.selectedDate), e.dateFormat, e.isGregorian, e.englishNumber)
        }
        function se(e) {
            var t = d(e.targetTextSelector);
            if (t.length > 0)
                switch (t[0].tagName.toLowerCase()) {
                case "input":
                    t.val(We(e)),
                    triggerChangeCalling = !0,
                    t.trigger("change");
                    break;
                default:
                    t.text(We(e)),
                    triggerChangeCalling = !0,
                    t.trigger("change");
                    break
                }
            var r = d(e.targetDateSelector);
            if (r.length > 0)
                switch (r[0].tagName.toLowerCase()) {
                case "input":
                    r.val(at(xt(e))),
                    triggerChangeCalling = !0,
                    r.trigger("change");
                    break;
                default:
                    r.text(at(xt(e))),
                    triggerChangeCalling = !0,
                    r.trigger("change");
                    break
                }
        }
        function oa(e) {
            var t = d(e.targetTextSelector)
              , r = e.selectedRangeDate[0]
              , u = e.selectedRangeDate[1];
            if (!r)
                throw new Error(`Start Date of '${e.targetTextSelector}' is not valid for range selector`);
            if (!u)
                throw new Error(`End Date of '${e.targetTextSelector}' is not valid for range selector`);
            if (e.selectedDate = r,
            e.rangeSelectorStartDate = r,
            e.rangeSelectorEndDate = u,
            t.length > 0)
                switch (t[0].tagName.toLowerCase()) {
                case "input":
                    t.val(We(e)),
                    triggerChangeCalling = !0,
                    t.trigger("change");
                    break;
                default:
                    t.text(We(e)),
                    triggerChangeCalling = !0,
                    t.trigger("change");
                    break
                }
        }
        function ge(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }
        function ue(e) {
            if (!e)
                return "";
            var t = e.toString().trim();
            return t ? (t = t.replace(/0/img, "\u06F0"),
            t = t.replace(/1/img, "\u06F1"),
            t = t.replace(/2/img, "\u06F2"),
            t = t.replace(/3/img, "\u06F3"),
            t = t.replace(/4/img, "\u06F4"),
            t = t.replace(/5/img, "\u06F5"),
            t = t.replace(/6/img, "\u06F6"),
            t = t.replace(/7/img, "\u06F7"),
            t = t.replace(/8/img, "\u06F8"),
            t = t.replace(/9/img, "\u06F9"),
            t) : ""
        }
        function at(e) {
            if (!e)
                return "";
            var t = e.toString().trim();
            return t ? (t = t.replace(/۰/img, "0"),
            t = t.replace(/۱/img, "1"),
            t = t.replace(/۲/img, "2"),
            t = t.replace(/۳/img, "3"),
            t = t.replace(/۴/img, "4"),
            t = t.replace(/۵/img, "5"),
            t = t.replace(/۶/img, "6"),
            t = t.replace(/۷/img, "7"),
            t = t.replace(/۸/img, "8"),
            t = t.replace(/۹/img, "9"),
            t) : ""
        }
        function X(e, t) {
            return t ? aa[e] : ta[e]
        }
        function rt(e, t, r) {
            var u = d.extend({}, e);
            return u.day = 1,
            u.month += t,
            r ? O(Ot(u)) : (u.month <= 0 && (u.month = 12,
            u.year--),
            u.month > 12 && (u.year++,
            u.month = 1),
            u)
        }
        function Nt(e, t, r) {
            var u = {};
            return r ? (u = O(e),
            u = rt(u, t, r),
            Ot(u)) : (u = H(e),
            u = rt(u, t, r),
            gt(u))
        }
        function Be(e, t) {
            return t ? ra[e] : na[e]
        }
        function Pe(e, t) {
            return t ? ea[e] : Qt[e]
        }
        function la(e) {
            var t;
            return e > 12 ? t = e - 12 : t = e,
            t
        }
        function Pt(e, t) {
            var r;
            return e > 12 ? t ? r = "PM" : r = "\u0628.\u0638" : t ? r = "AM" : r = "\u0642.\u0638",
            r
        }
        function da(e) {
            d(h).each(function() {
                var t = d(this);
                !e && e.is(t) || He(t)
            })
        }
        function ua(e) {
            !e || e.popover("show")
        }
        function He(e) {
            !e || (e.popover("hide"),
            e.modal("hide"))
        }
        function U(e) {
            return Number(J(e.year) + J(e.month) + J(e.day))
        }
        function De(e, t, r) {
            return Number(J(e) + J(t) + J(r))
        }
        function nt(e) {
            return U(O(e))
        }
        function Yt(e) {
            return Number(J(e.getFullYear()) + J(e.getMonth()) + J(e.getDate()))
        }
        function Je(e, t, r, u, o, v) {
            ge(u) || (u = 0),
            ge(o) || (o = 0),
            ge(v) || (v = 0);
            var M = y(e, t, r);
            return new Date(M.gy,M.gm - 1,M.gd,u,o,v)
        }
        function gt(e) {
            e.hour || (e.hour = 0),
            e.minute || (e.minute = 0),
            e.second || (e.second = 0);
            var t = y(e.year, e.month, e.day);
            return new Date(t.gy,t.gm - 1,t.gd,e.hour,e.minute,e.second)
        }
        function Ot(e) {
            return new Date(e.year,e.month - 1,e.day,e.hour,e.minute,e.second)
        }
        function Gt(e, t, r) {
            var u = Et(e);
            if (r.isGregorian)
                t = new Date(u.year,u.month - 1,u.day,t.getHours(),t.getMinutes(),t.getSeconds());
            else {
                var o = H(t);
                o.year = u.year,
                o.month = u.month,
                o.day = u.day,
                t = gt(o)
            }
            return t
        }
        function O(e) {
            return {
                year: e.getFullYear(),
                month: e.getMonth() + 1,
                day: e.getDate(),
                hour: e.getHours(),
                minute: e.getMinutes(),
                second: e.getSeconds(),
                dayOfWeek: e.getDay()
            }
        }
        function Et(e) {
            return {
                year: Math.floor(e / 1e4),
                month: Math.floor(e / 100) % 100,
                day: e % 100,
                hour: 0,
                minute: 0,
                second: 0
            }
        }
        function H(e) {
            var t = p(e.getFullYear(), e.getMonth() + 1, e.getDate());
            return {
                year: t.jy,
                month: t.jm,
                day: t.jd,
                hour: e.getHours(),
                minute: e.getMinutes(),
                second: e.getSeconds(),
                dayOfWeek: e.getDay()
            }
        }
        function ha(e, t, r, u, o, v) {
            ge(u) || (u = 0),
            ge(o) || (o = 0),
            ge(v) || (v = 0);
            var M = y(e, t, r);
            return H(new Date(M.gy,M.gm - 1,M.gd,u,o,v))
        }
        function ca(e) {
            return x(e)
        }
        function Ue(e, t) {
            var r = 31;
            return t > 6 && t < 12 ? r = 30 : t == 12 && (r = ca(e) ? 30 : 29),
            r
        }
        function yt(e, t) {
            return new Date(e,t + 1,0).getDate()
        }
        function G(e) {
            return new Date(e.getTime())
        }
        function J(e, t) {
            if (e == null || e == "")
                return "00";
            (t == null || t == "") && (t = "00");
            var r = String(t).length - String(e).length + 1;
            return r > 0 ? new Array(r).join("0") + e : e
        }
        function Fe(e, t, r, u) {
            return r && (u = !0),
            t = t.replace(/yyyy/mg, e.year),
            t = t.replace(/yy/mg, e.year % 100),
            t = t.replace(/MMMM/mg, X(e.month - 1, r)),
            t = t.replace(/MM/mg, J(e.month)),
            t = t.replace(/M/mg, e.month),
            t = t.replace(/dddd/mg, Be(e.dayOfWeek, r)),
            t = t.replace(/dd/mg, J(e.day)),
            t = t.replace(/d/mg, e.day),
            t = t.replace(/HH/mg, J(e.hour)),
            t = t.replace(/H/mg, e.hour),
            t = t.replace(/hh/mg, J(la(e.hour))),
            t = t.replace(/h/mg, J(e.hour)),
            t = t.replace(/mm/mg, J(e.minute)),
            t = t.replace(/m/mg, e.minute),
            t = t.replace(/ss/mg, J(e.second)),
            t = t.replace(/s/mg, e.second),
            t = t.replace(/fff/mg, J(e.millisecond, "000")),
            t = t.replace(/ff/mg, J(e.millisecond / 10)),
            t = t.replace(/f/mg, e.millisecond / 100),
            t = t.replace(/tt/mg, Pt(e.hour, r)),
            t = t.replace(/t/mg, Pt(e.hour, r)[0]),
            u || (t = ue(t)),
            t
        }
        function Bt(e, t) {
            var r = G(e);
            if (t) {
                var u = new Date(r.getFullYear(),r.getMonth() - 1,1)
                  , o = yt(u.getFullYear(), u.getMonth());
                return new Date(u.getFullYear(),u.getMonth(),o)
            }
            var v = H(r);
            return v.month += -1,
            v.month <= 0 ? (v.month = 12,
            v.year--) : v.month > 12 && (v.year++,
            v.month = 1),
            Je(v.year, v.month, Ue(v.year, v.month))
        }
        function Ht(e, t) {
            var r = G(e);
            if (t) {
                var u = new Date(r.getFullYear(),r.getMonth() + 1,1);
                return new Date(u.getFullYear(),u.getMonth(),1)
            }
            var o = H(r);
            return o.month += 1,
            o.month <= 0 && (o.month = 12,
            o.year--),
            o.month > 12 && (o.year++,
            o.month = 1),
            Je(o.year, o.month, 1)
        }
        function fa(e, t) {
            t || (t = "/|-"),
            t = new RegExp(t,"img"),
            e = at(e);
            var r = 0
              , u = 0
              , o = 0
              , v = 0
              , M = 0
              , i = 0
              , f = 0
              , w = Ee.none
              , z = t.test(e);
            if (e = e.replace(/&nbsp;/img, " "),
            e = e.replace(/\s+/img, "-"),
            e = e.replace(/\\/img, "-"),
            e = e.replace(/ك/img, "\u06A9"),
            e = e.replace(/ي/img, "\u06CC"),
            e = e.replace(t, "-"),
            e = "-" + e + "-",
            e.indexOf("\u0642.\u0638") > -1 ? w = Ee.AM : e.indexOf("\u0628.\u0638") > -1 && (w = Ee.PM),
            e.indexOf(":") > -1) {
                e = e.replace(/-*:-*/img, ":"),
                v = e.match(/-\d{1,2}(?=:)/img)[0].replace(/\D+/, "");
                var Z = e.match(/:\d{1,2}(?=:?)/img);
                M = Z[0].replace(/\D+/, ""),
                Z[1] != null && (i = Z[1].replace(/\D+/, "")),
                Z[2] != null && (f = Z[2].replace(/\D+/, ""))
            }
            if (z) {
                var E = e.match(/-\d{1,2}(?=-\d{1,2}[^:]|-)/img);
                r = E[0].replace(/\D+/, ""),
                o = E[1].replace(/\D+/, ""),
                u = e.match(/-\d{2,4}(?=-\d{1,2}[^:])/img)[0].replace(/\D+/, "")
            } else {
                for (var K = 1; K < 12; K++) {
                    var fe = X(K - 1, !1);
                    if (!(e.indexOf(fe) > -1)) {
                        r = K;
                        break
                    }
                }
                var oe = e.match(/-\d{1,2}(?=-)/img);
                oe != null && (o = oe[0].replace(/\D+/, ""),
                e = e.replace(new RegExp("-" + o + "(?=-)","img"), "-"));
                var W = e.match(/-\d{4}(?=-)/img);
                W != null ? u = W[0].replace(/\D+/, "") : (W = e.match(/-\d{2,4}(?=-)/img),
                W != null && (u = W[0].replace(/\D+/, "")))
            }
            var re = Number(u)
              , N = Number(r)
              , Q = Number(o)
              , R = Number(v)
              , F = Number(M)
              , ne = Number(i)
              , I = Number(f);
            switch (re <= 0 && (re = persianDateTime[0]),
            N <= 0 && (N = persianDateTime[1]),
            Q <= 0 && (Q = persianDateTime[2]),
            w) {
            case Ee.PM:
                R < 12 && (R = R + 12);
                break;
            case Ee.AM:
            case Ee.None:
                break
            }
            return Je(re, N, Q, R, F, ne, I)
        }
        function ma(e) {
            if (e = at(e),
            !e) {
                var t = new Date;
                return t.setHours(0),
                t.setMinutes(0),
                t.setSeconds(0),
                t.setMilliseconds(0),
                t
            }
            return new Date(e)
        }
        function it(e, t) {
            if (!!e)
                return t.isGregorian ? ma(e) : fa(e)
        }
        function Ft(e, t) {
            var r = G(e.selectedDateToShow), u = ee, o = "", v = {}, M = {}, i, f, w = 1;
            if (e.isGregorian ? (M = O(r),
            v = O(new Date),
            i = e.disableBeforeDate ? O(e.disableBeforeDate) : void 0,
            f = e.disableAfterDate ? O(e.disableAfterDate) : void 0) : (M = H(r),
            v = H(new Date),
            i = e.disableBeforeDate ? H(e.disableBeforeDate) : void 0,
            f = e.disableAfterDate ? H(e.disableAfterDate) : void 0),
            (e.fromDate || e.toDate) && e.groupId) {
                var z = d("[" + C + '="' + e.groupId + '"][data-toDate]')
                  , Z = d("[" + C + '="' + e.groupId + '"][data-fromDate]');
                if (e.fromDate) {
                    var E = V(z)
                      , K = E.selectedDate;
                    f = K ? e.isGregorian ? O(K) : H(K) : void 0
                } else if (e.toDate) {
                    var fe = V(Z)
                      , oe = fe.selectedDate;
                    i = oe ? e.isGregorian ? O(oe) : H(oe) : void 0
                }
            }
            w = 1;
            for (var W = t || v.year - e.yearOffset, re = t ? t + e.yearOffset * 2 : v.year + e.yearOffset, N = W; N < re; N++)
                if (!(e.disableBeforeToday && N < v.year) && !(e.disableAfterToday && N > v.year) && !(i != null && i.year != null && N < i.year) && !(f != null && f.year != null && N > f.year)) {
                    var Q = Et(De(N, M.month, Ue(N, M.month)))
                      , R = ""
                      , F = e.englishNumber ? N.toString() : ue(N)
                      , ne = De(N, M.month, 1);
                    i != null && i.year != null && Q.year < i.year && (R = "disabled"),
                    f != null && f.year != null && Q.year > f.year && (R = "disabled"),
                    e.disableBeforeToday && Q.year < v.year && (R = "disabled"),
                    e.disableAfterToday && Q.year > v.year && (R = "disabled"),
                    w == 1 && (o += "<tr>"),
                    o += `
<td class="text-center" ${M.year == N ? "selected-year" : ""}>
    <button class="btn btn-sm btn-light" type="button" data-changedatebutton data-number="${ne}" ${R}>${F}</button>        
</td>
`,
                    w == 5 && (o += "</tr>"),
                    w++,
                    w > 5 && (w = 1)
                }
            return u = u.replace(/{{yearsToSelectHtml}}/img, o),
            {
                yearStart: W,
                yearEnd: re,
                html: u
            }
        }
        function st(e) {
            var t = G(e.selectedDateToShow)
              , r = le;
            r = r.replace(/{{rtlCssClass}}/img, e.isGregorian ? "" : "rtl"),
            r = r.replace(/{{selectedDateStringAttribute}}/img, e.inLine ? "" : "hidden"),
            r = r.replace(/{{hourText}}/img, e.isGregorian ? Kt : Ge),
            r = r.replace(/{{minuteText}}/img, e.isGregorian ? Vt : ke),
            r = r.replace(/{{secondText}}/img, e.isGregorian ? Xt : we),
            r = r.replace(/{{goTodayText}}/img, e.isGregorian ? Zt : ze),
            r = r.replace(/{{timePickerAttribute}}/img, e.enableTimePicker ? "" : "hidden");
            var u = "", o = "", v = {}, M = !e.rangeSelector || !e.rangeSelectorStartDate ? void 0 : G(e.rangeSelectorStartDate), i = !e.rangeSelector || !e.rangeSelectorEndDate ? void 0 : G(e.rangeSelectorEndDate), f = {}, w = {}, z = {}, Z = {}, E, K;
            if (e.isGregorian ? (Z = O(t),
            v = O(new Date),
            f = M != null ? O(M) : void 0,
            w = i != null ? O(i) : void 0,
            z = e.selectedDate == null ? v : O(e.selectedDate),
            E = e.disableBeforeDate ? O(e.disableBeforeDate) : void 0,
            K = e.disableAfterDate ? O(e.disableAfterDate) : void 0) : (Z = H(t),
            v = H(new Date),
            f = M != null ? H(M) : void 0,
            w = i != null ? H(i) : void 0,
            z = e.selectedDate == null ? v : H(e.selectedDate),
            E = e.disableBeforeDate ? H(e.disableBeforeDate) : void 0,
            K = e.disableAfterDate ? H(e.disableAfterDate) : void 0),
            (e.fromDate || e.toDate) && e.groupId) {
                var fe = d("[" + C + '="' + e.groupId + '"][data-toDate]')
                  , oe = d("[" + C + '="' + e.groupId + '"][data-fromDate]');
                if (e.fromDate && fe.length > 0) {
                    var W = V(fe)
                      , re = W.selectedDate;
                    K = re ? e.isGregorian ? O(re) : H(re) : void 0
                } else if (e.toDate && oe.length > 0) {
                    var N = V(oe)
                      , Q = N.selectedDate;
                    E = Q ? e.isGregorian ? O(Q) : H(Q) : void 0
                }
            }
            e.rangeSelector && f != null && w != null ? u = `${Be(f.dayOfWeek, e.isGregorian)}\u060C ${f.day} ${X(f.month - 1, e.isGregorian)} ${f.year} - 
                ${Be(w.dayOfWeek, e.isGregorian)}\u060C ${w.day} ${X(w.month - 1, e.isGregorian)} ${w.year}` : u = `${Be(z.dayOfWeek, e.isGregorian)}\u060C ${z.day} ${X(z.month - 1, e.isGregorian)} ${z.year}`,
            o = `${e.isGregorian ? "Today," : "\u0627\u0645\u0631\u0648\u0632\u060C"} ${v.day} ${X(v.month - 1, e.isGregorian)} ${v.year}`,
            e.englishNumber || (u = ue(u),
            o = ue(o)),
            K != null && K.year <= Z.year && K.month < Z.month && (t = e.isGregorian ? new Date(K.year,K.month - 1,1) : Je(K.year, K.month, K.day)),
            E != null && E.year >= Z.year && E.month > Z.month && (t = e.isGregorian ? new Date(E.year,E.month - 1,1) : Je(E.year, E.month, E.day));
            var R = ""
              , F = e.monthsToShow[1] <= 0 ? 0 : e.monthsToShow[1]
              , ne = e.monthsToShow[0] <= 0 ? 0 : e.monthsToShow[0];
            ne *= -1;
            for (var I = ne; I < 0; I++)
                e.selectedDateToShow = Nt(G(t), I),
                R += Dt(e, !1, !0);
            e.selectedDateToShow = G(t),
            R += Dt(e, !1, !1);
            for (var ve = 1; ve <= F; ve++)
                e.selectedDateToShow = Nt(G(t), ve),
                R += Dt(e, !0, !1);
            var me = Math.abs(ne) + 1 + F
              , ye = me > 1 ? "width: " + (100 / me).toString() + "%;" : "";
            return R = R.replace(/{{monthTdStyle}}/img, ye),
            r = r.replace(/{{selectedDateString}}/img, u),
            r = r.replace(/{{todayDateString}}/img, o),
            r = r.replace(/{{hour}}/img, Z.hour),
            r = r.replace(/{{minute}}/img, Z.minute),
            r = r.replace(/{{second}}/img, Z.second),
            r = r.replace(/{{monthsTdHtml}}/img, R),
            r
        }
        function Dt(e, t, r) {
            var u = G(e.selectedDateToShow)
              , o = G(u)
              , v = e.selectedDate != null ? G(e.selectedDate) : void 0
              , M = t || r
              , i = te;
            i = i.replace(/{{monthTdAttribute}}/img, t ? "data-next-month" : r ? "data-prev-month" : ""),
            i = i.replace(/{{monthNameAttribute}}/img, M ? "" : "hidden"),
            i = i.replace(/{{theadSelectDateButtonTrAttribute}}/img, e.inLine || !M ? "" : "hidden"),
            i = i.replace(/{{weekDayShortName1CssClass}}/img, e.isGregorian ? "text-danger" : ""),
            i = i.replace(/{{weekDayShortName7CssClass}}/img, e.isGregorian ? "" : "text-danger"),
            i = i.replace(/{{previousYearText}}/img, e.isGregorian ? Te : ie),
            i = i.replace(/{{previousMonthText}}/img, e.isGregorian ? xe : de),
            i = i.replace(/{{nextMonthText}}/img, e.isGregorian ? Ut : qe),
            i = i.replace(/{{nextYearText}}/img, e.isGregorian ? Jt : $e),
            i = i.replace(/{{monthName1}}/img, X(0, e.isGregorian)),
            i = i.replace(/{{monthName2}}/img, X(1, e.isGregorian)),
            i = i.replace(/{{monthName3}}/img, X(2, e.isGregorian)),
            i = i.replace(/{{monthName4}}/img, X(3, e.isGregorian)),
            i = i.replace(/{{monthName5}}/img, X(4, e.isGregorian)),
            i = i.replace(/{{monthName6}}/img, X(5, e.isGregorian)),
            i = i.replace(/{{monthName7}}/img, X(6, e.isGregorian)),
            i = i.replace(/{{monthName8}}/img, X(7, e.isGregorian)),
            i = i.replace(/{{monthName9}}/img, X(8, e.isGregorian)),
            i = i.replace(/{{monthName10}}/img, X(9, e.isGregorian)),
            i = i.replace(/{{monthName11}}/img, X(10, e.isGregorian)),
            i = i.replace(/{{monthName12}}/img, X(11, e.isGregorian)),
            i = i.replace(/{{weekDayShortName1}}/img, Pe(0, e.isGregorian)),
            i = i.replace(/{{weekDayShortName2}}/img, Pe(1, e.isGregorian)),
            i = i.replace(/{{weekDayShortName3}}/img, Pe(2, e.isGregorian)),
            i = i.replace(/{{weekDayShortName4}}/img, Pe(3, e.isGregorian)),
            i = i.replace(/{{weekDayShortName5}}/img, Pe(4, e.isGregorian)),
            i = i.replace(/{{weekDayShortName6}}/img, Pe(5, e.isGregorian)),
            i = i.replace(/{{weekDayShortName7}}/img, Pe(6, e.isGregorian));
            var f = 0, w = 0, z, Z = 0, E = 0, K = 0, fe = 0, oe = "", W, re = {}, N = {}, Q, R = d("<tr />"), F = d("<td />"), ne = "", I = 0, ve = "", me = 0, ye = 0, Ye = 0, Oe = 0, be = 0, Me = 0, ot = !e.rangeSelector || e.rangeSelectorStartDate == null ? void 0 : G(e.rangeSelectorStartDate), lt = !e.rangeSelector || e.rangeSelectorEndDate == null ? void 0 : G(e.rangeSelectorEndDate), he = 0, ce = 0, Ae = "0", bt = "", A = {
                month1DateNumber: 0,
                month2DateNumber: 0,
                month3DateNumber: 0,
                month4DateNumber: 0,
                month5DateNumber: 0,
                month6DateNumber: 0,
                month7DateNumber: 0,
                month8DateNumber: 0,
                month9DateNumber: 0,
                month10DateNumber: 0,
                month11DateNumber: 0,
                month12DateNumber: 0,
                selectMonth1ButtonCssClass: "",
                selectMonth2ButtonCssClass: "",
                selectMonth3ButtonCssClass: "",
                selectMonth4ButtonCssClass: "",
                selectMonth5ButtonCssClass: "",
                selectMonth6ButtonCssClass: "",
                selectMonth7ButtonCssClass: "",
                selectMonth8ButtonCssClass: "",
                selectMonth9ButtonCssClass: "",
                selectMonth10ButtonCssClass: "",
                selectMonth11ButtonCssClass: "",
                selectMonth12ButtonCssClass: ""
            }, dt = [], ut = [], ht = [], Ze = {}, Ke = {}, Ie = "", Ve = "", At = "", Xe = "", Re = "";
            if (e.isGregorian) {
                for (N = O(o),
                re = O(new Date),
                Ze = e.disableBeforeDate ? O(e.disableBeforeDate) : void 0,
                Ke = e.disableAfterDate ? O(e.disableAfterDate) : void 0,
                z = new Date(N.year,N.month - 1,1).getDay(),
                fe = v ? U(O(v)) : 0,
                Q = yt(N.year, N.month - 1),
                numberOfDaysInPreviousMonth = yt(N.year, N.month - 2),
                me = U(O(Bt(o, !0))),
                ye = U(O(Ht(o, !0))),
                o = G(u),
                Ye = U(O(new Date(o.setFullYear(o.getFullYear() - 1)))),
                o = G(u),
                Oe = U(O(new Date(o.setFullYear(o.getFullYear() + 1)))),
                o = G(u),
                he = !e.rangeSelector || !ot ? 0 : nt(ot),
                ce = !e.rangeSelector || !lt ? 0 : nt(lt),
                f = 1; f <= 12; f++)
                    A["month" + f.toString() + "DateNumber"] = U(O(new Date(o.setMonth(f - 1)))),
                    o = G(u);
                for (f = 0; f < e.holiDays.length; f++)
                    dt.push(U(O(e.holiDays[f])));
                for (f = 0; f < e.disabledDates.length; f++)
                    ut.push(U(O(e.disabledDates[f])));
                for (f = 0; f < e.specialDates.length; f++)
                    ht.push(U(O(e.specialDates[f])))
            } else {
                for (N = H(o),
                re = H(new Date),
                Ze = e.disableBeforeDate ? H(e.disableBeforeDate) : void 0,
                Ke = e.disableAfterDate ? H(e.disableAfterDate) : void 0,
                z = ha(N.year, N.month, 1, 0, 0, 0).dayOfWeek,
                fe = v ? U(H(v)) : 0,
                Q = Ue(N.year, N.month),
                numberOfDaysInPreviousMonth = Ue(N.year - 1, N.month - 1),
                me = U(H(Bt(o, !1))),
                o = G(u),
                ye = U(H(Ht(o, !1))),
                o = G(u),
                Ye = De(N.year - 1, N.month, N.day),
                Oe = De(N.year + 1, N.month, N.day),
                o = G(u),
                he = !e.rangeSelector || !ot ? 0 : U(H(ot)),
                ce = !e.rangeSelector || !lt ? 0 : U(H(lt)),
                f = 1; f <= 12; f++)
                    A["month" + f.toString() + "DateNumber"] = De(N.year, f, Ue(N.year, f)),
                    o = G(u);
                for (f = 0; f < e.holiDays.length; f++)
                    dt.push(U(H(e.holiDays[f])));
                for (f = 0; f < e.disabledDates.length; f++)
                    ut.push(U(H(e.disabledDates[f])));
                for (f = 0; f < e.specialDates.length; f++)
                    ht.push(U(H(e.specialDates[f])))
            }
            if ((e.fromDate || e.toDate) && e.groupId) {
                var It = d("[" + C + '="' + e.groupId + '"][data-toDate]')
                  , Rt = d("[" + C + '="' + e.groupId + '"][data-fromDate]');
                if (e.fromDate && It.length > 0) {
                    var pa = V(It)
                      , Mt = pa.selectedDate;
                    Ke = Mt ? e.isGregorian ? O(Mt) : H(Mt) : void 0
                } else if (e.toDate && Rt.length > 0) {
                    var ga = V(Rt)
                      , St = ga.selectedDate;
                    Ze = St ? e.isGregorian ? O(St) : H(St) : void 0
                }
            }
            if (W = U(re),
            K = e.englishNumber ? N.year : ue(N.year),
            be = Ze ? U(Ze) : void 0,
            Me = Ke ? U(Ke) : void 0,
            ve = X(N.month - 1, e.isGregorian) + " " + N.year.toString(),
            e.englishNumber || (ve = ue(ve)),
            oe = X(N.month - 1, e.isGregorian),
            e.yearOffset <= 0 && (Ie = "disabled",
            Re = "disabled",
            At = "disabled"),
            z != 6) {
                e.isGregorian && z--;
                var Lt = rt(N, -1, e.isGregorian);
                for (f = numberOfDaysInPreviousMonth - z; f <= numberOfDaysInPreviousMonth; f++)
                    I = De(Lt.year, Lt.month, f),
                    Ae = e.englishNumber ? J(f) : ue(J(f)),
                    F = d("<td data-nm />").attr("data-number", I).html(Ae),
                    e.rangeSelector && (I == he || I == ce ? F.addClass("selected-range-days-start-end") : he > 0 && ce > 0 && I > he && I < ce && F.addClass("selected-range-days")),
                    (!e.isGregorian && E == 6 || e.isGregorian && E == 0) && F.addClass("text-danger"),
                    R.append(F),
                    Z++,
                    E++,
                    E >= 7 && (E = 0,
                    ne += R[0].outerHTML,
                    isTrAppended = !0,
                    R = d("<tr />"))
            }
            for (f = 1; f <= Q; f++) {
                for (E >= 7 && (E = 0,
                ne += R[0].outerHTML,
                isTrAppended = !0,
                R = d("<tr />")),
                I = De(N.year, N.month, f),
                Ae = e.englishNumber ? J(f) : ue(J(f)),
                F = d("<td data-day />").attr("data-number", I).html(Ae),
                I == W && (F.attr("data-today", ""),
                bt || (bt = Be(E - 1 < 0 ? 0 : E - 1, e.isGregorian))),
                !e.rangeSelector && fe == I && (F.attr("data-selectedday", ""),
                bt = Be(E - 1 < 0 ? 0 : E - 1, e.isGregorian)),
                w = 0; w < dt.length; w++)
                    if (dt[w] == I) {
                        F.addClass("text-danger");
                        break
                    }
                if ((!e.isGregorian && E == 6 || e.isGregorian && E == 0) && F.addClass("text-danger"),
                e.disableBeforeToday)
                    for (I < W && F.attr("disabled", ""),
                    ye < W && (Xe = "disabled"),
                    Oe < W && (Re = "disabled"),
                    me < W && (Ve = "disabled"),
                    Ye < W && (Ie = "disabled"),
                    w = 1; w <= 12; w++)
                        A["month" + w.toString() + "DateNumber"] < W && (A["selectMonth" + w.toString() + "ButtonCssClass"] = "disabled");
                if (e.disableAfterToday)
                    for (I > W && F.attr("disabled", ""),
                    ye > W && (Xe = "disabled"),
                    Oe > W && (Re = "disabled"),
                    me > W && (Ve = "disabled"),
                    Ye > W && (Ie = "disabled"),
                    w = 1; w <= 12; w++)
                        A["month" + w.toString() + "DateNumber"] > W && (A["selectMonth" + w.toString() + "ButtonCssClass"] = "disabled");
                if (Me)
                    for (I > Me && F.attr("disabled", ""),
                    ye > Me && (Xe = "disabled"),
                    Oe > Me && (Re = "disabled"),
                    me > Me && (Ve = "disabled"),
                    Ye > Me && (Ie = "disabled"),
                    w = 1; w <= 12; w++)
                        A["month" + w.toString() + "DateNumber"] > Me && (A["selectMonth" + w.toString() + "ButtonCssClass"] = "disabled");
                if (be)
                    for (I < be && F.attr("disabled", ""),
                    ye < be && (Xe = "disabled"),
                    Oe < be && (Re = "disabled"),
                    me < be && (Ve = "disabled"),
                    Ye < be && (Ie = "disabled"),
                    w = 1; w <= 12; w++)
                        A["month" + w.toString() + "DateNumber"] < be && (A["selectMonth" + w.toString() + "ButtonCssClass"] = "disabled");
                for (w = 0; w < ut.length; w++)
                    I == ut[w] && F.attr("disabled", "");
                for (w = 0; w < ht.length; w++)
                    I == ht[w] && F.attr("data-special-date", "");
                e.disabledDays && e.disabledDays.indexOf(E) >= 0 && F.attr("disabled", ""),
                e.rangeSelector && (I == he || I == ce ? F.addClass("selected-range-days-start-end") : he > 0 && ce > 0 && I > he && I < ce && F.addClass("selected-range-days")),
                R.append(F),
                isTrAppended = !1,
                E++,
                Z++
            }
            E >= 7 && (E = 0,
            ne += R[0].outerHTML,
            isTrAppended = !0,
            R = d("<tr />"));
            var jt = rt(N, 1, e.isGregorian);
            for (f = 1; f <= 42 - Z; f++)
                Ae = e.englishNumber ? J(f) : ue(J(f)),
                I = De(jt.year, jt.month, f),
                F = d("<td data-nm />").attr("data-number", I).html(Ae),
                e.rangeSelector && (I == he || I == ce ? F.addClass("selected-range-days-start-end") : he > 0 && ce > 0 && I > he && I < ce && F.addClass("selected-range-days")),
                (!e.isGregorian && E == 6 || e.isGregorian && E == 0) && F.addClass("text-danger"),
                R.append(F),
                E++,
                E >= 7 && (E = 0,
                ne += R[0].outerHTML,
                isTrAppended = !0,
                R = d("<tr />"));
            return isTrAppended || (ne += R[0].outerHTML,
            isTrAppended = !0),
            i = i.replace(/{{currentMonthInfo}}/img, ve),
            i = i.replace(/{{selectedYear}}/img, K),
            i = i.replace(/{{selectedMonthName}}/img, oe),
            i = i.replace(/{{daysHtml}}/img, ne),
            i = i.replace(/{{previousYearButtonDisabledAttribute}}/img, Ie),
            i = i.replace(/{{previousYearButtonDateNumber}}/img, Ye),
            i = i.replace(/{{previousMonthButtonDisabledAttribute}}/img, Ve),
            i = i.replace(/{{previousMonthButtonDateNumber}}/img, me),
            i = i.replace(/{{selectYearButtonDisabledAttribute}}/img, At),
            i = i.replace(/{{nextMonthButtonDisabledAttribute}}/img, Xe),
            i = i.replace(/{{nextMonthButtonDateNumber}}/img, ye),
            i = i.replace(/{{nextYearButtonDisabledAttribute}}/img, Re),
            i = i.replace(/{{nextYearButtonDateNumber}}/img, Oe),
            i = i.replace(/{{dropDownMenuMonth1DateNumber}}/img, A.month1DateNumber),
            i = i.replace(/{{dropDownMenuMonth2DateNumber}}/img, A.month2DateNumber),
            i = i.replace(/{{dropDownMenuMonth3DateNumber}}/img, A.month3DateNumber),
            i = i.replace(/{{dropDownMenuMonth4DateNumber}}/img, A.month4DateNumber),
            i = i.replace(/{{dropDownMenuMonth5DateNumber}}/img, A.month5DateNumber),
            i = i.replace(/{{dropDownMenuMonth6DateNumber}}/img, A.month6DateNumber),
            i = i.replace(/{{dropDownMenuMonth7DateNumber}}/img, A.month7DateNumber),
            i = i.replace(/{{dropDownMenuMonth8DateNumber}}/img, A.month8DateNumber),
            i = i.replace(/{{dropDownMenuMonth9DateNumber}}/img, A.month9DateNumber),
            i = i.replace(/{{dropDownMenuMonth10DateNumber}}/img, A.month10DateNumber),
            i = i.replace(/{{dropDownMenuMonth11DateNumber}}/img, A.month11DateNumber),
            i = i.replace(/{{dropDownMenuMonth12DateNumber}}/img, A.month12DateNumber),
            i = i.replace(/{{selectMonth1ButtonCssClass}}/img, A.selectMonth1ButtonCssClass),
            i = i.replace(/{{selectMonth2ButtonCssClass}}/img, A.selectMonth2ButtonCssClass),
            i = i.replace(/{{selectMonth3ButtonCssClass}}/img, A.selectMonth3ButtonCssClass),
            i = i.replace(/{{selectMonth4ButtonCssClass}}/img, A.selectMonth4ButtonCssClass),
            i = i.replace(/{{selectMonth5ButtonCssClass}}/img, A.selectMonth5ButtonCssClass),
            i = i.replace(/{{selectMonth6ButtonCssClass}}/img, A.selectMonth6ButtonCssClass),
            i = i.replace(/{{selectMonth7ButtonCssClass}}/img, A.selectMonth7ButtonCssClass),
            i = i.replace(/{{selectMonth8ButtonCssClass}}/img, A.selectMonth8ButtonCssClass),
            i = i.replace(/{{selectMonth9ButtonCssClass}}/img, A.selectMonth9ButtonCssClass),
            i = i.replace(/{{selectMonth10ButtonCssClass}}/img, A.selectMonth10ButtonCssClass),
            i = i.replace(/{{selectMonth11ButtonCssClass}}/img, A.selectMonth11ButtonCssClass),
            i = i.replace(/{{selectMonth12ButtonCssClass}}/img, A.selectMonth12ButtonCssClass),
            i
        }
        function Ya() {
            d(document).off("click", n + " [data-day]"),
            d(document).off("mouseenter", n + " [data-day]"),
            d(document).off("click", n + " [data-changedatebutton]"),
            d(document).off("blur", n + " input[data-clock]"),
            d(document).off("blur", n + " input[data-clock]"),
            d(document).off("click", n + " [select-year-button]"),
            d(document).off("click", "[data-yearrangebuttonchange]"),
            d(document).off("click", n + " [data-go-today]"),
            d(document).off("click", "html")
        }
        d(document).on("click", n + " [data-day]", function(e) {
            var t = d(this)
              , r = t.attr("disabled")
              , u = Number(t.attr("data-number"))
              , o = pe(t)
              , v = o.selectedDate == null ? void 0 : O(o.selectedDate)
              , M = G(o.selectedDateToShow)
              , i = M == null ? void 0 : O(M);
            if (r) {
                o.onDayClick != null && o.onDayClick({
                    selectedDate: o.selectedDate,
                    disabled: r,
                    event: e,
                    selectedDateToShow: M,
                    rangeSelectorStartDate: o.rangeSelectorStartDate,
                    rangeSelectorEndDate: o.rangeSelectorEndDate
                });
                return
            }
            if (M = Gt(u, M, o),
            o.rangeSelector) {
                o.rangeSelectorStartDate != null && o.rangeSelectorEndDate != null && (o.selectedRangeDate = [],
                o.rangeSelectorStartDate = void 0,
                o.rangeSelectorEndDate = void 0,
                t.parents("table:last").find("td.selected-range-days-start-end,td.selected-range-days").removeClass("selected-range-days").removeClass("selected-range-days-start-end")),
                o.rangeSelectorStartDate == null ? (t.addClass("selected-range-days-start-end"),
                o.rangeSelectorStartDate = G(M),
                o.selectedDate = G(M),
                o.selectedDateToShow = G(M)) : o.rangeSelectorStartDate != null && o.rangeSelectorEndDate == null && (t.addClass("selected-range-days-start-end"),
                o.rangeSelectorEndDate = G(M),
                se(o)),
                ae(t, o),
                o.rangeSelectorStartDate != null && o.rangeSelectorEndDate != null && (o.selectedRangeDate = [G(o.rangeSelectorStartDate), G(o.rangeSelectorEndDate)],
                o.inLine ? Ne(t, o) : He(d(h)));
                return
            }
            if (o.selectedDate = G(M),
            o.selectedDateToShow = G(M),
            v != null && (v.hour = i.hour,
            v.minute = i.minute,
            v.second = i.second,
            o.selectedDate.setHours(v.hour),
            o.selectedDate.setMinutes(v.minute),
            o.selectedDate.setSeconds(v.second)),
            ae(t, o),
            se(o),
            !o.inLine)
                He(d(h));
            else if (o.inLine && (o.toDate || o.fromDate)) {
                var f = d("[" + C + '="' + o.groupId + '"][data-toDate]').find("[data-day]:first")
                  , w = d("[" + C + '="' + o.groupId + '"][data-fromDate]').find("[data-day]:first");
                o.fromDate && f.length > 0 ? Ne(f, pe(f)) : o.toDate && w.length > 0 && Ne(w, pe(w)),
                Ne(t, o)
            } else
                Ne(t, o);
            o.onDayClick != null && o.onDayClick({
                rangeSelector: o.rangeSelector,
                selectedDate: o.selectedDate,
                disabled: r,
                event: e,
                selectedDateToShow: M,
                rangeSelectorStartDate: o.rangeSelectorStartDate,
                rangeSelectorEndDate: o.rangeSelectorEndDate
            })
        }),
        d(document).on("mouseenter", n + " [data-day]," + n + " [data-nm]," + n + " [data-pm]", function() {
            var e = d(this)
              , t = e.parents("table:last").find("td[data-day]")
              , r = e.attr("disabled")
              , u = Number(e.attr("data-number"))
              , o = pe(e);
            if (!(r || !o.rangeSelector || o.rangeSelectorStartDate != null && o.rangeSelectorEndDate != null)) {
                t.removeClass("selected-range-days");
                var v = o.rangeSelectorStartDate ? G(o.rangeSelectorStartDate) : void 0
                  , M = o.rangeSelectorEndDate ? G(o.rangeSelectorEndDate) : void 0
                  , i = 0
                  , f = 0;
                if (o.isGregorian ? (i = v ? nt(v) : 0,
                f = M ? nt(M) : 0) : (i = v ? U(H(v)) : 0,
                f = M ? U(H(M)) : 0),
                i > 0 && u > i)
                    for (var w = i; w <= u; w++)
                        t.filter('[data-number="' + w.toString() + '"]:not(.selected-range-days-start-end)').addClass("selected-range-days");
                else if (f > 0 && u < f)
                    for (var z = u; z <= f; z++)
                        t.filter('[data-number="' + z.toString() + '"]:not(.selected-range-days-start-end)').addClass("selected-range-days")
            }
        }),
        d(document).on("click", n + " [data-changedatebutton]", function() {
            var e = d(this)
              , t = e.attr("disabled")
              , r = Number(e.attr("data-number"))
              , u = pe(e)
              , o = G(u.selectedDateToShow);
            t || (o = Gt(r, o, u),
            u.selectedDateToShow = G(o),
            ae(e, u),
            Ne(e, u),
            u.calendarViewOnChange != null && u.calendarViewOnChange(u.selectedDateToShow))
        }),
        d(document).on("blur", n + " input[data-clock]", function() {
            var e = d(this)
              , t = e.parents(n + ":first")
              , r = t.find('input[type="text"][data-clock="hour"]')
              , u = t.find('input[type="text"][data-clock="minute"]')
              , o = t.find('input[type="text"][data-clock="second"]')
              , v = Number(r.val())
              , M = Number(u.val())
              , i = Number(o.val())
              , f = pe(e);
            !f.enableTimePicker || (f.selectedDateToShow == null && (f.selectedDateToShow = new Date),
            v = ge(v) ? v : f.selectedDateToShow.getHours(),
            M = ge(M) ? M : f.selectedDateToShow.getMinutes(),
            i = ge(i) ? i : f.selectedDateToShow.getSeconds(),
            f.selectedDateToShow = new Date(f.selectedDateToShow.setHours(v)),
            f.selectedDateToShow = new Date(f.selectedDateToShow.setMinutes(M)),
            f.selectedDateToShow = new Date(f.selectedDateToShow.setSeconds(i)),
            f.selectedDate == null && (f.selectedDate = new Date),
            f.selectedDate = new Date(f.selectedDate.setHours(v)),
            f.selectedDate = new Date(f.selectedDate.setMinutes(M)),
            f.selectedDate = new Date(f.selectedDate.setSeconds(i)),
            ae(e, f),
            se(f))
        }),
        d(document).on("click", n + " [select-year-button]", function() {
            var e = d(this)
              , t = pe(e)
              , r = Ft(t)
              , u = ` ${r.yearStart} - ${r.yearEnd} `
              , o = j
              , v = r.html
              , M = e.parents(n + ":first")
              , i = M.find('[data-name="dateTimePickerYearsToSelectContainer"]');
            o = o.replace(/{{rtlCssClass}}/img, t.isGregorian ? "" : "rtl"),
            o = o.replace(/{{yearsRangeText}}/img, t.isGregorian || t.englishNumber ? u : ue(u)),
            o = o.replace(/{{previousText}}/img, t.isGregorian ? Ce : Se),
            o = o.replace(/{{nextText}}/img, t.isGregorian ? et : _e),
            o = o.replace(/{{latestPreviousYear}}/img, r.yearStart > r.yearEnd ? r.yearEnd : r.yearStart),
            o = o.replace(/{{latestNextYear}}/img, r.yearStart > r.yearEnd ? r.yearStart : r.yearEnd),
            tt(e, t.inLine, o),
            i.html(v),
            i.removeClass("w-0"),
            t.inLine ? i.addClass("inline") : i.removeClass("inline")
        }),
        d(document).on("click", "[data-yearrangebuttonchange]", function() {
            var e = d(this)
              , t = pe(e)
              , r = e.attr("data-yearrangebuttonchange") == "1"
              , u = Number(e.attr("data-year"))
              , o = Ft(t, r ? u : u - t.yearOffset * 2)
              , v = ` ${o.yearStart} - ${o.yearEnd - 1} `
              , M = j
              , i = o.html;
            M = M.replace(/{{rtlCssClass}}/img, t.isGregorian ? "" : "rtl"),
            M = M.replace(/{{yearsRangeText}}/img, t.isGregorian ? v : ue(v)),
            M = M.replace(/{{previousText}}/img, t.isGregorian ? Ce : Se),
            M = M.replace(/{{nextText}}/img, t.isGregorian ? et : _e),
            M = M.replace(/{{latestPreviousYear}}/img, o.yearStart > o.yearEnd ? o.yearEnd : o.yearStart),
            M = M.replace(/{{latestNextYear}}/img, o.yearStart > o.yearEnd ? o.yearStart : o.yearEnd),
            tt(e, t.inLine, M),
            d(n).find('[data-name="dateTimePickerYearsToSelectContainer"]').html(i)
        }),
        d(document).on("click", n + " [data-go-today]", function() {
            var e = d(this)
              , t = pe(e);
            t.selectedDateToShow = new Date,
            ae(e, t),
            Ne(e, t)
        }),
        d("html").on("click", function(e) {
            if (!b) {
                var t = d(e.target)
                  , r = pt(t);
                r.length >= 1 || wt(t) || Tt(t) || He(d(h))
            }
        });
        var vt = {
            init: function(e) {
                return this.each(function() {
                    var t = d(this)
                      , r = d.extend({
                        englishNumber: !1,
                        placement: "bottom",
                        trigger: "click",
                        enableTimePicker: !1,
                        targetTextSelector: "",
                        targetDateSelector: "",
                        toDate: !1,
                        fromDate: !1,
                        groupId: "",
                        disabled: !1,
                        textFormat: "",
                        dateFormat: "",
                        isGregorian: !1,
                        inLine: !1,
                        selectedDate: void 0,
                        selectedDateToShow: new Date,
                        monthsToShow: [0, 0],
                        yearOffset: 15,
                        holiDays: [],
                        disabledDates: [],
                        disabledDays: [],
                        specialDates: [],
                        disableBeforeToday: !1,
                        disableAfterToday: !1,
                        disableBeforeDate: void 0,
                        disableAfterDate: void 0,
                        rangeSelector: !1,
                        rangeSelectorStartDate: void 0,
                        rangeSelectorEndDate: void 0,
                        modalMode: !1,
                        calendarViewOnChange: () => {}
                        ,
                        onDayClick: () => {}
                    }, e);
                    if (t.attr(g, ""),
                    r.targetDateSelector) {
                        var u = d(r.targetDateSelector).val();
                        u && (r.selectedDate = new Date(u),
                        r.selectedDateToShow = G(r.selectedDate))
                    } else if (r.targetTextSelector) {
                        var o = d(r.targetTextSelector).val();
                        o && (r.selectedDate = it(o, r),
                        r.selectedDateToShow = G(r.selectedDate))
                    }
                    if (r.rangeSelector && (r.fromDate = !1,
                    r.toDate = !1,
                    r.enableTimePicker = !1),
                    (r.fromDate || r.toDate) && r.groupId && (t.attr(C, r.groupId),
                    r.toDate ? t.attr("data-toDate", "") : r.fromDate && t.attr("data-fromDate", "")),
                    r.isGregorian && (r.englishNumber = !0),
                    r.toDate && r.fromDate)
                        throw new Error("MdPersianDateTimePicker => You can not set true 'toDate' and 'fromDate' together");
                    if (!r.groupId && (r.toDate || r.fromDate))
                        throw new Error("MdPersianDateTimePicker => When you set 'toDate' or 'fromDate' true, you have to set 'groupId'");
                    r.disable && t.attr("disabled", ""),
                    r.enableTimePicker && !r.textFormat ? r.textFormat = "yyyy/MM/dd   HH:mm:ss" : !r.enableTimePicker && !r.textFormat && (r.textFormat = "yyyy/MM/dd"),
                    r.enableTimePicker && !r.dateFormat ? r.dateFormat = "yyyy/MM/dd   HH:mm:ss" : !r.enableTimePicker && !r.dateFormat && (r.dateFormat = "yyyy/MM/dd");
                    var v = ia();
                    t.data(k, r),
                    t.attr("data-uniqueid", v),
                    r.rangeSelector && r.selectedRangeDate != null ? (oa(r),
                    triggerChangeCalling = !1) : r.selectedDate != null && (se(r),
                    triggerChangeCalling = !1),
                    r.inLine ? t.append(st(r)) : r.modalMode ? r.modalMode && (d("body").append(L),
                    t.on("click", function() {
                        if (!r.disabled) {
                            r.selectedDateToShow = r.selectedDate != null ? G(r.selectedDate) : new Date;
                            var M = st(r);
                            d(h).find('[data-name="mds-datetimepicker-body"]').html(M),
                            d(h).find("[data-buttonselector]").attr("data-buttonselector", v),
                            d(h).modal("show")
                        }
                    })) : t.popover({
                        container: "body",
                        content: "",
                        html: !0,
                        placement: r.placement,
                        title: " ",
                        trigger: "manual",
                        template: B,
                        sanitize: !1
                    }).on(r.trigger, function() {
                        if (b = !0,
                        t = d(this),
                        r = t.data(k),
                        r.disabled || Tt(t)) {
                            b = !1;
                            return
                        }
                        da(t),
                        ua(t),
                        setTimeout(function() {
                            r.selectedDateToShow = r.selectedDate != null ? G(r.selectedDate) : G(r.selectedDateToShow);
                            var M = st(r);
                            tt(t, r.inLine, d(M).find("[data-selecteddatestring]").text().trim()),
                            Ct(t).find('[data-name="mds-datetimepicker-body"]').html(M),
                            t.popover("update"),
                            b = !1
                        }, 10)
                    }),
                    d(document).on("change", r.targetTextSelector, function() {
                        if (triggerChangeCalling) {
                            setTimeout(function() {
                                triggerChangeCalling = !1
                            }, 100);
                            return
                        }
                        var M = d(this)
                          , i = M.val();
                        if (!i) {
                            t.MdPersianDateTimePicker("clearDate");
                            return
                        }
                        try {
                            if (!r.rangeSelector)
                                t.MdPersianDateTimePicker("setDate", it(i, r));
                            else {
                                let f = i.split(" - ");
                                t.MdPersianDateTimePicker("setDateRange", it(f[0], r), it(f[1], r))
                            }
                        } catch (f) {
                            se(r)
                        }
                    })
                })
            },
            getText: function() {
                var e = [];
                return this.each(function() {
                    e.push(We(V(d(this))))
                }),
                e.length > 1 ? e : e[0]
            },
            getDate: function() {
                var e = [];
                return this.each(function() {
                    e.push(V(d(this)).selectedDate)
                }),
                e.length > 1 ? e : e[0]
            },
            getDateRange: function() {
                var e = [];
                return this.each(function() {
                    var t = V(d(this));
                    if (t.rangeSelector) {
                        e.push([t.rangeSelectorStartDate, t.rangeSelectorEndDate]);
                        return
                    }
                    if (!t.toDate && !t.fromDate || !t.groupId)
                        return [];
                    var r = V(d("[" + C + '="' + t.groupId + '"][data-fromDate]'))
                      , u = V(d("[" + C + '="' + t.groupId + '"][data-toDate]'));
                    e.push([r.selectedDate, u.selectedDate])
                }),
                e.length > 1 ? e : e[0]
            },
            setDate: function(e) {
                if (e == null)
                    throw new Error("MdPersianDateTimePicker => setDate => \u0645\u0642\u062F\u0627\u0631 \u0648\u0631\u0648\u062F\u06CC \u0646\u0627 \u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A");
                return this.each(function() {
                    var t = d(this)
                      , r = V(t);
                    r.selectedDate = G(e),
                    ae(t, r),
                    se(r)
                })
            },
            setOption: function(e, t) {
                if (!e)
                    throw new Error("MdPersianDateTimePicker => setOption => name parameter \u0645\u0642\u062F\u0627\u0631 \u0648\u0631\u0648\u062F\u06CC \u0646\u0627 \u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A");
                return this.each(function() {
                    var r = d(this)
                      , u = V(r);
                    u[e] = t,
                    ae(r, u)
                })
            },
            setDateRange: function(e, t) {
                if (e == null || t == null)
                    throw new Error("MdPersianDateTimePicker => setDateRange => \u0645\u0642\u062F\u0627\u0631 \u0648\u0631\u0648\u062F\u06CC \u0646\u0627 \u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A");
                if (Yt(e) > Yt(t))
                    throw new Error("MdPersianDateTimePicker => setDateRange => \u0645\u0642\u062F\u0627\u0631 \u0648\u0631\u0648\u062F\u06CC \u0646\u0627 \u0645\u0639\u062A\u0628\u0631 \u0627\u0633\u062A, \u062A\u0627\u0631\u06CC\u062E \u0634\u0631\u0648\u0639 \u0628\u0627\u06CC\u062F \u0628\u0632\u0631\u06AF\u062A\u0631 \u0627\u0632 \u062A\u0627\u0631\u06CC\u062E \u067E\u0627\u06CC\u0627\u0646 \u0628\u0627\u0634\u062F");
                return this.each(function() {
                    var r = d(this)
                      , u = V(r);
                    if (u.rangeSelector)
                        u.selectedDate = e,
                        u.selectedRangeDate = [e, t],
                        u.rangeSelectorStartDate = e,
                        u.rangeSelectorEndDate = t,
                        ae(r, u),
                        se(u);
                    else if ((u.fromDate || u.toDate) && u.groupId) {
                        var o = d("[" + C + '="' + u.groupId + '"][data-toDate]')
                          , v = d("[" + C + '="' + u.groupId + '"][data-fromDate]');
                        if (v.length > 0) {
                            var M = V(v);
                            M.selectedDate = e,
                            ae(v, M),
                            se(M)
                        }
                        if (o.length > 0) {
                            var i = V(o);
                            i.selectedDate = t,
                            ae(o, i),
                            se(i)
                        }
                    }
                })
            },
            clearDate: function() {
                return this.each(function() {
                    var e = d(this)
                      , t = V(e);
                    t.selectedDate = void 0,
                    t.selectedRangeDate = [],
                    t.rangeSelectorStartDate = void 0,
                    t.rangeSelectorEndDate = void 0,
                    ae(e, t),
                    se(t)
                })
            },
            setDatePersian: function(e) {
                if (e == null)
                    throw new Error("MdPersianDateTimePicker => setDatePersian => \u0648\u0631\u0648\u062F\u06CC \u0628\u0627\u06CC\u062F \u0627\u0632 \u0646\u0648\u0647 \u062C\u06CC \u0633\u0627\u0646 \u0628\u0627 \u062D\u062F\u0627\u0642\u0644 \u067E\u0631\u0627\u067E\u0631\u062A\u06CC \u0647\u0627\u06CC year, month, day \u0628\u0627\u0634\u062F");
                return e.hour = e.hour ? e.hour : 0,
                e.minute = e.hour ? e.minute : 0,
                e.second = e.second ? e.second : 0,
                this.each(function() {
                    var t = d(this)
                      , r = V(t);
                    r.selectedDate = gt(e),
                    ae(t, r),
                    se(r)
                })
            },
            hide: function() {
                return this.each(function() {
                    He(d(this))
                })
            },
            show: function() {
                return this.each(function() {
                    var e = d(this)
                      , t = V(e);
                    d(this).trigger(t.trigger)
                })
            },
            disable: function(e) {
                return this.each(function() {
                    var t = d(this)
                      , r = V(t);
                    r.disabled = e,
                    ae(t, r),
                    e ? t.attr("disabled", "") : t.removeAttr("disabled")
                })
            },
            destroy: function() {
                return this.each(function() {
                    var e = d(this)
                      , t = V(e);
                    t.disable && e.removeAttr("disabled"),
                    t.inLine && e.find(n).remove(),
                    e.removeAttr(g).removeAttr("data-toDate").removeAttr("data-fromDate"),
                    e.off(t.trigger).popover("dispose"),
                    e.removeData(k)
                })
            },
            changeType: function(e, t) {
                return this.each(function() {
                    var r = d(this)
                      , u = V(r);
                    He(r),
                    u.isGregorian = e,
                    u.englishNumber = t,
                    u.isGregorian && (u.englishNumber = !0),
                    ae(r, u),
                    se(u)
                })
            }
        };
        d.fn.MdPersianDateTimePicker = function(e) {
            return vt[e] ? vt[e].apply(this, Array.prototype.slice.call(arguments, 1)) : typeof e == "object" || !e ? vt.init.apply(this, arguments) : (d.error("Method " + e + " does not exist in jquery.Bootstrap-PersianDateTimePicker"),
            !1)
        }
    }
    )(jQuery);
    var Aa = qt(kt());
    frappe.ui.FilterGroup = class extends frappe.ui.FilterGroup {
        set_popover_events() {
            $(document.body).on("click", p => {
                if (this.wrapper && this.wrapper.is(":visible")) {
                    let y = $(p.target).is(".datepicker--cell") || $(p.target).closest(".datepicker--nav-title").length !== 0 || $(p.target).parents(".datepicker--nav-action").length !== 0 || $(p.target).parents(".datepicker").length !== 0 || $(p.target).is(".datepicker--button") || $(p.target).closest(".mds-bootstrap-persian-datetime-picker-popover.show").length !== 0;
                    $(p.target).parents(".filter-popover").length === 0 && $(p.target).parents(".filter-box").length === 0 && this.filter_button.find($(p.target)).length === 0 && !$(p.target).is(this.filter_button) && !y && this.wrapper && this.hide_popover()
                }
            }
            ),
            this.filter_button.on("click", () => {
                this.filter_button.popover("toggle")
            }
            ),
            this.filter_button.on("shown.bs.popover", () => {
                let p = this.filters && this.filters.length > 0;
                this.wrapper || (this.wrapper = $(".filter-popover"),
                p && (this.toggle_empty_filters(!1),
                this.add_filters_to_popover(this.filters)),
                this.set_filter_events()),
                this.toggle_empty_filters(!1),
                !p && this.add_filter(this.doctype, "name")
            }
            ),
            this.filter_button.on("hidden.bs.popover", () => {
                this.apply()
            }
            ),
            frappe.router.on("change", () => {
                this.wrapper && this.wrapper.is(":visible") && this.hide_popover()
            }
            )
        }
    }
    ;
    var mt = qt(kt())
      , ct = "date"
      , ft = "datetime"
      , Le = frappe.boot.persian_date_datepicker_format || "yyyy/MM/dd"
      , zt = frappe.boot.persian_date_format || "yyyy/MM/dd"
      , ka = zt + " " + frappe.boot.sysdefaults.time_format;
    frappe.boot.is_en && mt.default.toLocale("en");
    var Wt = frappe.datetime.str_to_user
      , wa = frappe.form.formatters.Date
      , Ca = frappe.form.formatters.Datetime;
    function Ta(d) {
        frappe.datetime.str_to_user = Wt;
        let p = wa(d);
        if (!p)
            return p;
        let y = frappe.datetime.str_to_obj(d);
        return je(moment(y), ct, zt)
    }
    function xa(d) {
        frappe.datetime.str_to_user = Wt;
        let p = Ca(d);
        if (!p)
            return p;
        let y = frappe.datetime.str_to_obj(d);
        return je(moment(y), ft, ka)
    }
    frappe.form.formatters.Date = Ta;
    frappe.form.formatters.Datetime = xa;
    console.log(new mt.default().format());
    var Na = {
        "MM-dd-yyyy": "MM-DD-YYYY",
        "MM-dd-yyyy HH:mm:ss": "MM-DD-YYYY HH:mm:ss",
        "dd-MM-yyyy": "DD-MM-YYYY",
        "dd-MM-yyyy HH:mm:ss": "DD-MM-YYYY HH:mm:ss",
        "yyyy/MM/dd": "YYYY/MM/DD",
        "yyyy/MM/dd HH:mm:ss": "YYYY/MM/DD HH:mm:ss"
    };
    function je(d, p, y=Le) {
        return d ? Pa(d, p).format(Na[y]) : null
    }
    function Pa(d, p=ct) {
        let y;
        return p == ft ? y = moment(d.clone().toDate(), "YYYY-MM-DD HH:mm:ss").utc().toDate() : y = d.toDate(),
        new mt.default(y)
    }
    frappe.ui.form.ControlDate = class extends frappe.ui.form.ControlDate {
        make_input() {
            this.datepicker_persian = !0,
            super.make_input(),
            this.$input.off(),
            this.$ismInput = this.$input.clone(),
            this.$ismInput.addClass("hide"),
            this.persian_make_picker(),
            this._toggleDatepicker()
        }
        make_wrapper() {
            this.only_input ? this.$wrapper = $('<div class="form-group frappe-control persian_datepicker_multi">').appendTo(this.parent) : this.$wrapper = $(`<div class="frappe-control nd_datepickers_container">
                <div class="form-group">
                    <div class="clearfix">
                        <label class="control-label" style="padding-right: 0px;"></label>
                        <span class="help"></span>
                    </div>
                    <div class="control-input-wrapper persian_datepicker_multi">
                        <div class="control-input"></div>
                        <div class="control-value like-disabled-input" style="display: none;"></div>
                        <div class="persian_date-conversion small bold" style="padding-left: 8px;">&nbsp;</div>
                        <p class="help-box small text-muted"></p>
                    </div>
                </div>
            </div>`).appendTo(this.parent),
            this.bind_events()
        }
        bind_events() {
            this.$wrapper.on("click", ".isd_switch_btn", p => {
                event.preventDefault(),
                event.stopPropagation()
            }
            )
        }
        _toggleDatepicker() {
            !this.$ismInput || !this.$ismInput.length || (this.datepicker_persian === !0 ? (this.$ismInput.removeClass("hide"),
            this.$input.addClass("hide")) : (this.$input.removeClass("hide"),
            this.$ismInput.addClass("hide")),
            this._printDateConversion())
        }
        set_formatted_input(p) {
            let y = super.set_formatted_input(p);
            if (p) {
                this.$ismInput.MdPersianDateTimePicker("setDate", new Date(p));
                let T = moment(frappe.datetime.str_to_obj(p));
                this.$ismInput.val(je(T) || "")
            } else
                this.$ismInput.val("");
            return this._printDateConversion(),
            y
        }
        _printDateConversion() {
            let p = this.get_value(), y;
            this.df.fieldtype === "Date" ? y = ct : this.df.fieldtype === "Datetime" && (y = ft)
        }
        persian_make_picker() {
            $(this.$ismInput).removeAttr("readonly"),
            this.$input.after(this.$ismInput);
            var p = moment(new Date)._d;
            this.value && (p = moment(this.value)._d),
            this.$ismInput.MdPersianDateTimePicker({
                selectedDate: p,
                englishNumber: frappe.boot.is_en,
                isGregorian: !1,
                toDate: !0,
                groupId: "rangeSelector1",
                placement: "bottom",
                enableTimePicker: !1,
                dateFormat: Le,
                textFormat: Le,
                onDayClick: () => {
                    this.$ismInput.val(je(moment(this.$ismInput.MdPersianDateTimePicker("getDate"))) || ""),
                    this.set_value(moment(this.$ismInput.MdPersianDateTimePicker("getDate")).format(this.date_format))
                }
            })
        }
        refresh() {
            super.refresh(),
            this._printDateConversion()
        }
    }
    ;
    frappe.ui.form.ControlDatetime = class extends frappe.ui.form.ControlDatetime {
        make_input() {
            this.datepicker_persian = !0,
            this.formatdatetimepersian = Le + " " + frappe.boot.sysdefaults.time_format,
            super.make_input(),
            this.$input.off(),
            this.$ismInput = this.$input.clone(),
            this.$ismInput.addClass("hide"),
            this.persian_make_picker(),
            this._toggleDatepicker()
        }
        make_wrapper() {
            this.only_input ? this.$wrapper = $('<div class="form-group frappe-control persian_datepicker_multi">').appendTo(this.parent) : this.$wrapper = $(`<div class="frappe-control nd_datepickers_container">
                <div class="form-group">
                    <div class="clearfix">
                        <label class="control-label" style="padding-right: 0px;"></label>
                        <span class="help"></span>
                    </div>
                    <div class="control-input-wrapper persian_datepicker_multi">
                        <div class="control-input"></div>
                        <div class="control-value like-disabled-input" style="display: none;"></div>
                        <div class="persian_date-conversion small bold" style="padding-left: 8px;">&nbsp;</div>
                        <p class="help-box small text-muted"></p>
                    </div>
                </div>
            </div>`).appendTo(this.parent),
            this.bind_events()
        }
        bind_events() {
            this.$wrapper.on("click", ".isd_switch_btn", p => {
                event.preventDefault(),
                event.stopPropagation()
            }
            )
        }
        _toggleDatepicker() {
            !this.$ismInput || !this.$ismInput.length || (this.datepicker_persian === !0 ? (this.$ismInput.removeClass("hide"),
            this.$input.addClass("hide")) : (this.$input.removeClass("hide"),
            this.$ismInput.addClass("hide")),
            this._printDateConversion())
        }
        set_formatted_input(p) {
            let y = super.set_formatted_input(p);
            if (p) {
                this.$ismInput.MdPersianDateTimePicker("setDate", new Date(p));
                let T = moment(frappe.datetime.str_to_obj(p));
                this.$ismInput.val(je(T, this.df.fieldtype, this.formatdatetimepersian) || "")
            } else
                this.$ismInput.val("");
            return this._printDateConversion(),
            y
        }
        _printDateConversion() {
            let p = this.get_value(), y;
            if (this.df.fieldtype === "Date" ? y = ct : this.df.fieldtype === "Datetime" && (y = ft),
            !this.can_write()) {
                this.$wrapper.find(".persian_date-conversion").html("&nbsp;");
                return
            }
            p || this.$wrapper.find(".persian_date-conversion").html("&nbsp;")
        }
        persian_make_picker() {
            $(this.$ismInput).removeAttr("readonly"),
            this.$input.after(this.$ismInput);
            var p = moment(new Date)._d;
            this.value && (p = moment(this.value)._d),
            this.$ismInput.MdPersianDateTimePicker({
                selectedDate: p,
                englishNumber: frappe.boot.is_en,
                isGregorian: !1,
                toDate: !0,
                groupId: "rangeSelector1",
                placement: "bottom",
                enableTimePicker: !0,
                dateFormat: this.formatdatetimepersian,
                textFormat: this.formatdatetimepersian,
                onDayClick: () => {
                    this.$ismInput.val(je(moment(this.$ismInput.MdPersianDateTimePicker("getDate")), this.df.fieldtype, this.formatdatetimepersian)),
                    this.set_value(moment(this.$ismInput.MdPersianDateTimePicker("getDate")).format(this.date_format))
                }
            })
        }
        refresh() {
            super.refresh(),
            this._printDateConversion()
        }
    }
    ;
    frappe.ui.form.ControlDateRange = class extends frappe.ui.form.ControlDateRange {
        make_input() {
            this.is_change_log = !0,
            this.datepicker_persian = !0,
            super.make_input(),
            this.$input.off(),
            this.$ismInput = this.$input.clone(),
            this.$ismInput.addClass("hide"),
            this.persian_make_picker(),
            this._toggleDatepicker()
        }
        make_wrapper() {
            this.only_input && (this.$wrapper = $('<div class="form-group frappe-control persian_datepicker_multi">').appendTo(this.parent)),
            this.bind_events()
        }
        bind_events() {
            this.$wrapper.on("click", ".isd_switch_btn", p => {
                event.preventDefault(),
                event.stopPropagation()
            }
            )
        }
        _toggleDatepicker() {
            !this.$ismInput || !this.$ismInput.length || (this.datepicker_persian === !0 ? (this.$ismInput.removeClass("hide"),
            this.$input.addClass("hide")) : (this.$input.removeClass("hide"),
            this.$ismInput.addClass("hide")))
        }
        getDatesInRange(p, y) {
            let T = []
              , x = new Date(y)
              , P = new Date(p);
            for (; P <= x; )
                T.push(new Date(P)),
                P.setDate(P.getDate() + 1);
            return T
        }
        persian_make_picker() {
            $(this.$ismInput).removeAttr("readonly"),
            this.$input.after(this.$ismInput);
            var p = null;
            this.value && (p = moment(this.value)._d),
            this.$ismInput.MdPersianDateTimePicker({
                selectedDate: p,
                englishNumber: frappe.boot.is_en,
                targetTextSelector: this.$ismInput,
                isGregorian: !1,
                toDate: !0,
                groupId: "rangeSelector1",
                placement: "bottom",
                enableTimePicker: !1,
                rangeSelector: !0,
                dateFormat: Le,
                textFormat: Le
            });
            var y = this;
            this.$ismInput.on("change", function(T) {
                if (T.currentTarget.value && y.is_change_log) {
                    var x = $(this).MdPersianDateTimePicker("getDateRange");
                    let P = moment($(this).MdPersianDateTimePicker("getDateRange")[0]).format("YYYY/MM/DD")
                      , q = moment($(this).MdPersianDateTimePicker("getDateRange")[1]).format("YYYY/MM/DD");
                    y.datepicker.selectDate(),
                    y.datepicker ? (y.datepicker.clear(),
                    y.getDatesInRange(P, q).forEach(S => y.datepicker.selectedDates.push(S)),
                    y.datepicker.update()) : console.error("Air Datepicker instance is not initialized."),
                    y.set_input(P, q),
                    y.$input.trigger("change")
                }
            })
        }
        set_input(p, y) {
            if (this.last_value = this.value,
            p && y ? this.value = [p, y] : this.value = p,
            this.value) {
                let T = this.format_for_input(this.value[0], this.value[1]);
                this.$input && this.$input.val(T),
                this.is_change_log = !1,
                this.$ismInput && this.$ismInput.MdPersianDateTimePicker("setDateRange", moment(this.value[0])._d, moment(this.value[1])._d),
                this.is_change_log = !0
            } else
                this.$input && this.$input.val(""),
                this.$ismInput && this.$ismInput.val("");
            this.set_disp_area(p || ""),
            this.set_mandatory && this.set_mandatory(p)
        }
        parse(p) {
            if (p == null || typeof p == "object")
                return p;
            let y = __("{0} to {1}").replace("{0}", "").replace("{1}", "");
            if (p = p && p.replace(y, ","),
            p && p.includes(",")) {
                var T = p.split(",")
                  , x = moment(frappe.datetime.user_to_obj(T[0])).format("YYYY/MM/DD")
                  , P = moment(frappe.datetime.user_to_obj(T[T.length - 1])).format("YYYY/MM/DD");
                return [x, P]
            }
        }
        format_for_input(p, y) {
            return p && y ? (p = frappe.datetime.str_to_user(p, !1, !0),
            y = frappe.datetime.str_to_user(y, !1, !0),
            __("{0} to {1}", [p, y])) : ""
        }
    }
    ;
}
)();