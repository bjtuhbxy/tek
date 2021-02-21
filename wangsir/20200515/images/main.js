var hsm = {};
hsm.init = function() {
    hsm.events()
};
hsm.events = function() {
    hsm.common()
};
hsm.common = function() {
    // Share
    window._bd_share_config = {
        "share": {}
    };
    // with(document) {
    //     0[(getElementsByTagName("head")[0] || body).appendChild(createElement("script")).src = "http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=" + ~(-new Date() / 3600000)]
    // };
    // Gotop
    $(window).scroll(function() {
        $(window).scrollTop() > 500 ? $("#gotop").show() : $("#gotop").hide()
    });
    $("#gotop").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 1000);
        return false
    });

    (function($) {
        $.fn.hoverDelay = function(options) {
            var defaults = {
                hoverDuring: 100,
                outDuring: 0,
                hoverEvent: function() {
                    $.noop();
                },
                outEvent: function() {
                    $.noop();
                }
            };
            var sets = $.extend(defaults, options || {});
            var hoverTimer, outTimer;
            return $(this).each(function() {
                $(this).hover(function() {
                    clearTimeout(outTimer);
                    hoverTimer = setTimeout(sets.hoverEvent, sets.hoverDuring);
                }, function() {
                    clearTimeout(hoverTimer);
                    outTimer = setTimeout(sets.outEvent, sets.outDuring);
                });
            });
        };
    })(jQuery);

    var flagLi = false;
    var flagDisplay = false;
    var upNumber = 0;
    $("#topMenu li a").each(
        function() {
            var object = $(this);
            object.hoverDelay({
                hoverEvent: function() {
                    var index = object.index() + 1;
                    var id = object.attr('id');
                    var number = id.substring(id.lastIndexOf('_') + 1);
                    $("#menu_" + number).addClass("hov");
                    flagLi = true;
                    flagDisplay = false;
                    if (number != 0) {
                        if (flagLi) {
                            if (flagDisplay) {
                                $("#display_" + number).slideUp();
                            } else {
                                if (upNumber != number) {
                                    $("#display_" + upNumber).slideUp();
                                }
                                $("#display_" + number).slideDown();
                            }

                        } else {
                            $("#display_" + number).slideDown();
                        }
                    } else {}
                },
                outEvent: function() {
                    var index = object.index() + 1;
                    var id = object.attr('id');
                    var number = id.substring(id.lastIndexOf('_') + 1);

                    $("#menu_" + number).removeClass("hov");
                    $(".display_class").each(
                        function() {
                            var display = $(this).css('display');
                            if (display == "block") {
                                var displayId = $(this).attr('id');
                                upNumber = displayId.substring(displayId
                                    .lastIndexOf('_') + 1);
                            }
                        });
                }
            });
        });
    $("nav,.sub-nav").hoverDelay({
        hoverEvent: function() {},
        outEvent: function() {
            flagDisplay = false;
            flagLi = false;
            $(".display_class").each(function() {
                $(this).slideUp();
            });
        }
    });
    $(".display_class").each(function() {
        var object = $(this);
        var id = object.attr('id');
        var number = id.substring(id.lastIndexOf('_') + 1);
        object.hoverDelay({
            hoverEvent: function() {
                flagDisplay = true;
                flagLi = false;
                $("#menu_" + number).addClass("hov");
            },
            outEvent: function() {
                $("#menu_" + number).removeClass("hov");
            }
        });
    });


}
$(function() {
    hsm.init();
});