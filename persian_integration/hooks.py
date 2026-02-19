app_name = "persian_integration"
app_title = "Persian Integration"
app_icon = "octicon octicon-calendar-import"
app_color = "blue"
app_publisher = "devixa-tech"
app_description = "Adds better persian support for frappe framework"
app_email = "hmohammad2520@gmail.com"
app_license = "mit"


fixtures = [
    {"doctype": "Custom Field", "filters": {"module": "Persian Integration"}}
]

app_include_css = [
    "/assets/persian_integration/css/jquery-bootstrap-datetimepicker.css",
    "/assets/persian_integration/css/jquery-ui.min.css",
    "/assets/persian_integration/css/persian-calendar.css",
    "/assets/persian_integration/css/vazirmatn-font.css",
]
app_include_js = [
    "/assets/persian_integration/js/persian-calendar.js",
    # "/assets/persian_integration/js/persian-date-handler.js",
]