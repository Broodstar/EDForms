$.notify.addStyle('info-note', {
    html: '<div><div class="icon-info"></div><span data-notify-text/></div>',
    classes: {
        base: {
            "white-space": "nowrap",
            "border-radius": "4px 4px 4px 4px",
            "border-width": "0",
            "background": "none repeat scroll 0 0 #CCEBF1",
            "color": "#404041",
            "box-shadow": "0 0 1px 2px rgba(102, 175, 233, 0.6)",
            "padding": "9px 46px 5px 11px",
            "font-size": "16px"
        }
    }
});
$.notify.addStyle('success-note', {
    html: '<div><div class="icon-check-alt"></div><span data-notify-text/></div>',
    classes: {
        base: {
            "white-space": "nowrap",
            "border-radius": "4px 4px 4px 4px",
            "border-width": "0",
            "background": "none repeat scroll 0 0 #A0CF77",
            "color": "#404041",
            "box-shadow": "0 0 1px 2px rgba(24, 130, 44, 0.6)",
            "padding": "9px 46px 5px 11px",
            "font-size": "16px"
        }
    }
});
$.notify.addStyle('error-note', {
    html: '<div><div class="icon-x-altx-alt"></div><span data-notify-text/></div>',
    classes: {
        base: {
            "white-space": "nowrap",
            "border-radius": "4px 4px 4px 4px",
            "border-width": "0",
            "color": "#404041",
            "box-shadow": "0 0 1px 2px rgba(238, 44, 47, 0.6)",
            "background": "none repeat scroll 0 0 #FCE2E2",
            "padding": "9px 46px 5px 11px",
            "font-size": "16px"
        }
    }
});
$.notify.addStyle('warning-note', {
    html: '<div><div class="icon-alert"></div><span data-notify-text/></div>',
    classes: {
        base: {
            "white-space": "nowrap",
            "border-radius": "4px 4px 4px 4px",
            "border-width": "0",
            "color": "#404041",
            "box-shadow": "0 0 1px 2px rgba(240, 181, 33, 0.6)",
            "background": "none repeat scroll 0 0 #F3F4C1",
            "padding": "9px 46px 5px 11px",
            "font-size": "16px"
        }
    }
});
$.notify.addStyle('top-banner', {
    html: '<div><div class="banner-container"><h3>Elastic Digital Notification Panel <span class="bnr-msg" data-notify-text/></h2> <div class="icon-x-altx-alt"></div></div></div>',
    classes: {
        base: {
            "white-space": "nowrap",
            "border-radius": "0",
            "border-width": "0",
            "color": "#333",
            "box-shadow": "none",
            "padding": "9px 46px 5px 11px",
            "font-size": "16px",
            "height": "60px",
            "left": "0%",
            "right": "0%",
            "top": "0%",
            "width": "100%",
            "margin-top": "-8px",
            "position": "fixed"
        },
        info: {
            "background": "-moz-linear-gradient(center top , #28AAE1 0%, #0092D4 50%, #0875BA 100%) repeat scroll 0 0 transparent"
        },
        success: {
            "background": "-moz-linear-gradient(center top , #64BA45 0%, #43A242 50%, #1D8C3D 100%) repeat scroll 0 0 transparent"
        },
        warning: {
            "background": "-moz-linear-gradient(center top , #F3F4C1 0%, #F0B521 50%, #F0B521 100%) repeat scroll 0 0 transparent"
        },
        error: {
            "background": "-moz-linear-gradient(center top , #EF3F23 0%, #E42F26 50%, #DB2128 100%) repeat scroll 0 0 transparent "
            + "-webkit-gradient(linear, left top, left bottom, from(#ccc), to(#000))"
            //filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#cccccc', endColorstr='#000000');
            //background: -webkit-gradient(linear, left top, left bottom, from(#ccc), to(#000));
            //background: -moz-linear-gradient(top,  #ccc,  #000);
        }
    }
});
$.notify.addStyle('message', {
    html: '<div><h3 class="title" data-notify-html="title"/><div class="icon-x-altx-alt close-btn"></div><div><p data-notify-text="bodytext"/><p class="close-btn">I hear and I obey</p></div></div>',
    classes: {
        base: {
            "border-radius": "4px 4px 4px 4px",
            "border-width": "0",
            "color": "#404041",
            "box-shadow": "0 0 1px 2px rgba(240, 181, 33, 0.6)",
            "background": "none repeat scroll 0 0 #F3F4C1",
            "padding": "9px 46px 5px 11px",
            "font-size": "16px",
            "width": "200px"
        }
    }
});
$(document).on('click', '.banner-container .icon-x-altx-alt', function() {
    //hide notification
    $(this).trigger('notify-hide');
});
$(document).on('click', '.notifyjs-message-base .close-btn', function() {
    //hide notification
    $(this).trigger('notify-hide');
});