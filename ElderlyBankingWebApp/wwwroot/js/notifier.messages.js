; (function (window) {

    var notifier = {
        error: function (msg, element) {
            if (element == "" || element == undefined) {
                element = "#MessageBox";
            }
            $(element).html("<div  class=' alert alert-danger fade in' data-alert='alert'><a class='close' data-dismiss='alert'>&times;</a> " + msg + "</div>");
        },
        success: function (msg, element) {
            if (element == "" || element == undefined) {
                element = "#MessageBox";
            }
            $(element).html("<div  class=' alert alert-success fade in' data-alert='alert'><a class='close' data-dismiss='alert'>&times;</a> " + msg + "</div>");
        },
        info: function (msg, element) {
            if (element == "" || element == undefined) {
                element = "#MessageBox";
            }
            $(element).html("<div  class=' alert alert-info fade in' data-alert='alert'><a class='close' data-dismiss='alert'>&times;</a>	" + msg + "</div>");
        },
        notice: function (msg, element) {
            if (element == "" || element == undefined) {
                element = "#MessageBox";
            }
            $(element).html("<div  class=' alert alert-warning fade in' data-alert='alert'><a class='close' data-dismiss='alert'>&times;</a> " + msg + "</div>");
        },
        fadeOut: function (obj) {
            $(obj.parentElement).slideUp('slow');
            $(obj).hide('fast');
        },
        ERROR_SUPPORT_MESSAGE: "An error occurred while performing requested operation, Please contact Customer Support."
    };
    window.notifier = notifier;
}(window));