function change() {
    var a = document.documentElement.clientWidth;
    a = a > 640 ? 640 : a, document.documentElement.style.fontSize = a / 6.4 + "px"
}

window.onload = function (params) {
    $('#topMenu').html(`
        <li><a href="/" id="">首页</a></li>
        <li><a href="/about/index.html" id="menu_1" class="">关于我们</a></li>
        <li><a href="/jyln/index.html" id="menu_4" class="">检测项目</a></li>
        <li><a href="/fwxm/index.html" id="menu_127" class="">服务项目</a></li>
        <li><a href="/about/contact/index.html" id="menu_149" class="current">联系我们</a></li>
    `)
}

function sliders(a, b, c) {
    function d() {
        $(a).slick(e)
    }
    var e = {
        autoplay: !0,
        speed: 800,
        draggable: !1,
        dots: !0,
        adaptiveHeight: !0,
        touchThreshold: 10,
        slidesToShow: b,
        slidesToScroll: c || 1
    };
    5 === b || b > 5 ? (e["responsive"] = [{
        breakpoint: 1199,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 979,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 479,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }], d()) : 4 === b ? (e["responsive"] = [{
        breakpoint: 979,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 479,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }], d()) : 3 === b ? (e["responsive"] = [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 479,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }], d()) : 2 === b ? (e["responsive"] = [{
        breakpoint: 479,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }], d()) : d()
}
var EventUtil = {
    addHandler: function(a, b, c) {
        a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : a["on" + b] = c
    }
};
change(), EventUtil.addHandler(window, "orientationchange", change), EventUtil.addHandler(window, "resize", change),
    function(a) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
    }(function(a) {
        "use strict";
        var b = window.Slick || {};
        b = function() {
            function b(b, d) {
                var e, f = this;
                f.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: a(b),
                    appendDots: a(b),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function(b, c) {
                        return a('<button type="button" />').text(c + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                }, f.initials = {
                    animating: !1,
                    dragging: !1,
                    autoPlayTimer: null,
                    currentDirection: 0,
                    currentLeft: null,
                    currentSlide: 0,
                    direction: 1,
                    $dots: null,
                    listWidth: null,
                    listHeight: null,
                    loadIndex: 0,
                    $nextArrow: null,
                    $prevArrow: null,
                    scrolling: !1,
                    slideCount: null,
                    slideWidth: null,
                    $slideTrack: null,
                    $slides: null,
                    sliding: !1,
                    slideOffset: 0,
                    swipeLeft: null,
                    swiping: !1,
                    $list: null,
                    touchObject: {},
                    transformsEnabled: !1,
                    unslicked: !1
                }, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.focussed = !1, f.interrupted = !1, f.hidden = "hidden", f.paused = !0, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, d, e), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0)
            }
            var c = 0;
            return b
        }(), b.prototype.activateADA = function() {
            var a = this;
            a.$slideTrack.find(".slick-active").attr({
                "aria-hidden": "false"
            }).find("a, input, button, select").attr({
                tabindex: "0"
            })
        }, b.prototype.addSlide = b.prototype.slickAdd = function(b, c, d) {
            var e = this;
            if ("boolean" == typeof c) d = c, c = null;
            else if (0 > c || c >= e.slideCount) return !1;
            e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b)
            }), e.$slidesCache = e.$slides, e.reinit()
        }, b.prototype.animateHeight = function() {
            var b, a = this;
            1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1 && (b = a.$slides.eq(a.currentSlide).outerHeight(!0), a.$list.animate({
                height: b
            }, a.options.speed))
        }, b.prototype.animateSlide = function(b, c) {
            var d = {},
                e = this;
            e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
                left: b
            }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
                top: b
            }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
                animStart: e.currentLeft
            }).animate({
                animStart: b
            }, {
                duration: e.options.speed,
                easing: e.options.easing,
                step: function(a) {
                    a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
                },
                complete: function() {
                    c && c.call()
                }
            })) : (e.applyTransition(), b = Math.ceil(b), d[e.animType] = e.options.vertical === !1 ? "translate3d(" + b + "px, 0px, 0px)" : "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function() {
                e.disableTransition(), c.call()
            }, e.options.speed))
        }, b.prototype.getNavTarget = function() {
            var b = this,
                c = b.options.asNavFor;
            return c && null !== c && (c = a(c).not(b.$slider)), c
        }, b.prototype.asNavFor = function(b) {
            var c = this,
                d = c.getNavTarget();
            null !== d && "object" == typeof d && d.each(function() {
                var c = a(this).slick("getSlick");
                c.unslicked || c.slideHandler(b, !0)
            })
        }, b.prototype.applyTransition = function(a) {
            var b = this,
                c = {};
            c[b.transitionType] = b.options.fade === !1 ? b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.autoPlay = function() {
            var a = this;
            a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
        }, b.prototype.autoPlayClear = function() {
            var a = this;
            a.autoPlayTimer && clearInterval(a.autoPlayTimer)
        }, b.prototype.autoPlayIterator = function() {
            var a = this,
                b = a.currentSlide + a.options.slidesToScroll;
            a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, 0 === a.currentSlide - 1 && (a.direction = 1))), a.slideHandler(b))
        }, b.prototype.buildArrows = function() {
            var b = this;
            b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
                "aria-disabled": "true",
                tabindex: "-1"
            }))
        }, b.prototype.buildDots = function() {
            var b, c, d = this;
            if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
                for (d.$slider.addClass("slick-dotted"), c = a("<ul />").addClass(d.options.dotsClass), b = 0; b <= d.getDotCount(); b += 1) c.append(a("<li />").append(d.options.customPaging.call(this, d, b)));
                d.$dots = c.appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active")
            }
        }, b.prototype.buildOut = function() {
            var b = this;
            b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function(b, c) {
                a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
            }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), b.options.centerMode !== !0 && b.options.swipeToSlide !== !0 || (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
        }, b.prototype.buildRows = function() {
            var a, b, c, d, e, f, g, i, j, k, h = this;
            if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 0) {
                for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
                    for (i = document.createElement("div"), b = 0; b < h.options.rows; b++) {
                        for (j = document.createElement("div"), c = 0; c < h.options.slidesPerRow; c++) k = a * g + (b * h.options.slidesPerRow + c), f.get(k) && j.appendChild(f.get(k));
                        i.appendChild(j)
                    }
                    d.appendChild(i)
                }
                h.$slider.empty().append(d), h.$slider.children().children().children().css({
                    width: 100 / h.options.slidesPerRow + "%",
                    display: "block"
                })
            }
        }, b.prototype.checkResponsive = function(b, c) {
            var d, e, f, g = this,
                h = !1,
                i = g.$slider.width(),
                j = window.innerWidth || a(window).width();
            if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
                e = null;
                for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
                null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || h === !1 || g.$slider.trigger("breakpoint", [g, h])
            }
        }, b.prototype.changeSlide = function(b, c) {
            var d, e, f, i, g = this,
                h = a(b.currentTarget);
            switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = 0 !== g.slideCount % g.options.slidesToScroll, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
                case "previous":
                    e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
                    break;
                case "next":
                    e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
                    break;
                case "index":
                    i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll, g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
                    break;
                default:
                    return
            }
        }, b.prototype.checkNavigable = function(a) {
            var b, c, e, d = this;
            if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
            else
                for (e in b) {
                    if (a < b[e]) {
                        a = c;
                        break
                    }
                    c = b[e]
                }
            return a
        }, b.prototype.cleanUpEvents = function() {
            var b = this;
            b.options.dots && null !== b.$dots && (a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.options.accessibility === !0 && b.$dots.off("keydown.slick", b.keyHandler)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide), b.options.accessibility === !0 && (b.$prevArrow && b.$prevArrow.off("keydown.slick", b.keyHandler), b.$nextArrow && b.$nextArrow.off("keydown.slick", b.keyHandler))), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition)
        }, b.prototype.cleanUpSlideEvents = function() {
            var b = this;
            b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
        }, b.prototype.cleanUpRows = function() {
            var a, b = this;
            b.options.rows > 0 && (a = b.$slides.children().children(), a.removeAttr("style"), b.$slider.empty().append(a))
        }, b.prototype.clickHandler = function(a) {
            var b = this;
            b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
        }, b.prototype.destroy = function(b) {
            var c = this;
            c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
                a(this).attr("style", a(this).data("originalStyling"))
            }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
        }, b.prototype.disableTransition = function(a) {
            var b = this,
                c = {};
            c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
        }, b.prototype.fadeSlide = function(a, b) {
            var c = this;
            c.cssTransitions === !1 ? (c.$slides.eq(a).css({
                zIndex: c.options.zIndex
            }), c.$slides.eq(a).animate({
                opacity: 1
            }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
                opacity: 1,
                zIndex: c.options.zIndex
            }), b && setTimeout(function() {
                c.disableTransition(a), b.call()
            }, c.options.speed))
        }, b.prototype.fadeSlideOut = function(a) {
            var b = this;
            b.cssTransitions === !1 ? b.$slides.eq(a).animate({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
                opacity: 0,
                zIndex: b.options.zIndex - 2
            }))
        }, b.prototype.filterSlides = b.prototype.slickFilter = function(a) {
            var b = this;
            null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
        }, b.prototype.focusHandler = function() {
            var b = this;
            b.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function() {
                var d = a(this);
                setTimeout(function() {
                    b.options.pauseOnFocus && d.is(":focus") && (b.focussed = !0, b.autoPlay())
                }, 0)
            }).on("blur.slick", "*", function() {
                a(this), b.options.pauseOnFocus && (b.focussed = !1, b.autoPlay())
            })
        }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function() {
            var a = this;
            return a.currentSlide
        }, b.prototype.getDotCount = function() {
            var a = this,
                b = 0,
                c = 0,
                d = 0;
            if (a.options.infinite === !0)
                if (a.slideCount <= a.options.slidesToShow) ++d;
                else
                    for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else if (a.options.centerMode === !0) d = a.slideCount;
            else if (a.options.asNavFor)
                for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
            else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
            return d - 1
        }, b.prototype.getLeft = function(a) {
            var b, c, d, e, f = this,
                g = 0;
            return f.slideOffset = 0, c = f.$slides.first().outerHeight(!0), f.options.infinite === !0 ? (f.slideCount > f.options.slidesToShow && (f.slideOffset = -1 * f.slideWidth * f.options.slidesToShow, e = -1, f.options.vertical === !0 && f.options.centerMode === !0 && (2 === f.options.slidesToShow ? e = -1.5 : 1 === f.options.slidesToShow && (e = -2)), g = c * f.options.slidesToShow * e), 0 !== f.slideCount % f.options.slidesToScroll && a + f.options.slidesToScroll > f.slideCount && f.slideCount > f.options.slidesToShow && (a > f.slideCount ? (f.slideOffset = -1 * (f.options.slidesToShow - (a - f.slideCount)) * f.slideWidth, g = -1 * (f.options.slidesToShow - (a - f.slideCount)) * c) : (f.slideOffset = -1 * f.slideCount % f.options.slidesToScroll * f.slideWidth, g = -1 * f.slideCount % f.options.slidesToScroll * c))) : a + f.options.slidesToShow > f.slideCount && (f.slideOffset = (a + f.options.slidesToShow - f.slideCount) * f.slideWidth, g = (a + f.options.slidesToShow - f.slideCount) * c), f.slideCount <= f.options.slidesToShow && (f.slideOffset = 0, g = 0), f.options.centerMode === !0 && f.slideCount <= f.options.slidesToShow ? f.slideOffset = f.slideWidth * Math.floor(f.options.slidesToShow) / 2 - f.slideWidth * f.slideCount / 2 : f.options.centerMode === !0 && f.options.infinite === !0 ? f.slideOffset += f.slideWidth * Math.floor(f.options.slidesToShow / 2) - f.slideWidth : f.options.centerMode === !0 && (f.slideOffset = 0, f.slideOffset += f.slideWidth * Math.floor(f.options.slidesToShow / 2)), b = f.options.vertical === !1 ? -1 * a * f.slideWidth + f.slideOffset : -1 * a * c + g, f.options.variableWidth === !0 && (d = f.slideCount <= f.options.slidesToShow || f.options.infinite === !1 ? f.$slideTrack.children(".slick-slide").eq(a) : f.$slideTrack.children(".slick-slide").eq(a + f.options.slidesToShow), b = f.options.rtl === !0 ? d[0] ? -1 * (f.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, f.options.centerMode === !0 && (d = f.slideCount <= f.options.slidesToShow || f.options.infinite === !1 ? f.$slideTrack.children(".slick-slide").eq(a) : f.$slideTrack.children(".slick-slide").eq(a + f.options.slidesToShow + 1), b = f.options.rtl === !0 ? d[0] ? -1 * (f.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, b += (f.$list.width() - d.outerWidth()) / 2)), b
        }, b.prototype.getOption = b.prototype.slickGetOption = function(a) {
            var b = this;
            return b.options[a]
        }, b.prototype.getNavigableIndexes = function() {
            var a, b = this,
                c = 0,
                d = 0,
                e = [];
            for (b.options.infinite === !1 ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
            return e
        }, b.prototype.getSlick = function() {
            return this
        }, b.prototype.getSlideCount = function() {
            var b, c, d, e, f = this;
            return e = f.options.centerMode === !0 ? Math.floor(f.$list.width() / 2) : 0, d = -1 * f.swipeLeft + e, f.options.swipeToSlide === !0 ? (f.$slideTrack.find(".slick-slide").each(function(b, e) {
                var g, h, i;
                return g = a(e).outerWidth(), h = e.offsetLeft, f.options.centerMode !== !0 && (h += g / 2), i = h + g, i > d ? (c = e, !1) : void 0
            }), b = Math.abs(a(c).attr("data-slick-index") - f.currentSlide) || 1) : f.options.slidesToScroll
        }, b.prototype.goTo = b.prototype.slickGoTo = function(a, b) {
            var c = this;
            c.changeSlide({
                data: {
                    message: "index",
                    index: parseInt(a)
                }
            }, b)
        }, b.prototype.init = function(b) {
            var c = this;
            a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
        }, b.prototype.initADA = function() {
            var e, f, b = this,
                c = Math.ceil(b.slideCount / b.options.slidesToShow),
                d = b.getNavigableIndexes().filter(function(a) {
                    return a >= 0 && a < b.slideCount
                });
            for (b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }), null !== b.$dots && (b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c) {
                    var f, e = d.indexOf(c);
                    a(this).attr({
                        role: "tabpanel",
                        id: "slick-slide" + b.instanceUid + c,
                        tabindex: -1
                    }), -1 !== e && (f = "slick-slide-control" + b.instanceUid + e, a("#" + f).length && a(this).attr({
                        "aria-describedby": f
                    }))
                }), b.$dots.attr("role", "tablist").find("li").each(function(e) {
                    var f = d[e];
                    a(this).attr({
                        role: "presentation"
                    }), a(this).find("button").first().attr({
                        role: "tab",
                        id: "slick-slide-control" + b.instanceUid + e,
                        "aria-controls": "slick-slide" + b.instanceUid + f,
                        "aria-label": e + 1 + " of " + c,
                        "aria-selected": null,
                        tabindex: "-1"
                    })
                }).eq(b.currentSlide).find("button").attr({
                    "aria-selected": "true",
                    tabindex: "0"
                }).end()), e = b.currentSlide, f = e + b.options.slidesToShow; f > e; e++) b.options.focusOnChange ? b.$slides.eq(e).attr({
                tabindex: "0"
            }) : b.$slides.eq(e).removeAttr("tabindex");
            b.activateADA()
        }, b.prototype.initArrowEvents = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
                message: "previous"
            }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
                message: "next"
            }, a.changeSlide), a.options.accessibility === !0 && (a.$prevArrow.on("keydown.slick", a.keyHandler), a.$nextArrow.on("keydown.slick", a.keyHandler)))
        }, b.prototype.initDotEvents = function() {
            var b = this;
            b.options.dots === !0 && b.slideCount > b.options.slidesToShow && (a("li", b.$dots).on("click.slick", {
                message: "index"
            }, b.changeSlide), b.options.accessibility === !0 && b.$dots.on("keydown.slick", b.keyHandler)), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
        }, b.prototype.initSlideEvents = function() {
            var b = this;
            b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
        }, b.prototype.initializeEvents = function() {
            var b = this;
            b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
                action: "start"
            }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
                action: "move"
            }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
                action: "end"
            }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(b.setPosition)
        }, b.prototype.initUI = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
        }, b.prototype.keyHandler = function(a) {
            var b = this;
            a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
                data: {
                    message: b.options.rtl === !0 ? "next" : "previous"
                }
            }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
                data: {
                    message: b.options.rtl === !0 ? "previous" : "next"
                }
            }))
        }, b.prototype.lazyLoad = function() {
            function b(b) {
                a("img[data-lazy]", b).each(function() {
                    var b = a(this),
                        c = a(this).attr("data-lazy"),
                        d = a(this).attr("data-srcset"),
                        e = a(this).attr("data-sizes") || g.$slider.attr("data-sizes"),
                        f = document.createElement("img");
                    f.onload = function() {
                        b.animate({
                            opacity: 0
                        }, 100, function() {
                            d && (b.attr("srcset", d), e && b.attr("sizes", e)), b.attr("src", c).animate({
                                opacity: 1
                            }, 200, function() {
                                b.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                            }), g.$slider.trigger("lazyLoaded", [g, b, c])
                        })
                    }, f.onerror = function() {
                        b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), g.$slider.trigger("lazyLoadError", [g, b, c])
                    }, f.src = c
                })
            }
            var c, d, e, f, h, i, j, k, g = this;
            if (g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = Math.ceil(e + g.options.slidesToShow), g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), "anticipated" === g.options.lazyLoad)
                for (h = e - 1, i = f, j = g.$slider.find(".slick-slide"), k = 0; k < g.options.slidesToScroll; k++) 0 > h && (h = g.slideCount - 1), c = c.add(j.eq(h)), c = c.add(j.eq(i)), h--, i++;
            b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
        }, b.prototype.loadSlider = function() {
            var a = this;
            a.setPosition(), a.$slideTrack.css({
                opacity: 1
            }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
        }, b.prototype.next = b.prototype.slickNext = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "next"
                }
            })
        }, b.prototype.orientationChange = function() {
            var a = this;
            a.checkResponsive(), a.setPosition()
        }, b.prototype.pause = b.prototype.slickPause = function() {
            var a = this;
            a.autoPlayClear(), a.paused = !0
        }, b.prototype.play = b.prototype.slickPlay = function() {
            var a = this;
            a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
        }, b.prototype.postSlide = function(b) {
            var d, c = this;
            !c.unslicked && (c.$slider.trigger("afterChange", [c, b]), c.animating = !1, c.slideCount > c.options.slidesToShow && c.setPosition(), c.swipeLeft = null, c.options.autoplay && c.autoPlay(), c.options.accessibility === !0 && (c.initADA(), c.options.focusOnChange)) && (d = a(c.$slides.get(c.currentSlide)), d.attr("tabindex", 0).focus())
        }, b.prototype.prev = b.prototype.slickPrev = function() {
            var a = this;
            a.changeSlide({
                data: {
                    message: "previous"
                }
            })
        }, b.prototype.preventDefault = function(a) {
            a.preventDefault()
        }, b.prototype.progressiveLazyLoad = function(b) {
            b = b || 1;
            var c, d, e, f, g, h = this,
                i = a("img[data-lazy]", h.$slider);
            i.length ? (c = i.first(), d = c.attr("data-lazy"), e = c.attr("data-srcset"), f = c.attr("data-sizes") || h.$slider.attr("data-sizes"), g = document.createElement("img"), g.onload = function() {
                e && (c.attr("srcset", e), f && c.attr("sizes", f)), c.attr("src", d).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), h.options.adaptiveHeight === !0 && h.setPosition(), h.$slider.trigger("lazyLoaded", [h, c, d]), h.progressiveLazyLoad()
            }, g.onerror = function() {
                3 > b ? setTimeout(function() {
                    h.progressiveLazyLoad(b + 1)
                }, 500) : (c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), h.$slider.trigger("lazyLoadError", [h, c, d]), h.progressiveLazyLoad())
            }, g.src = d) : h.$slider.trigger("allImagesLoaded", [h])
        }, b.prototype.refresh = function(b) {
            var c, d, e = this;
            d = e.slideCount - e.options.slidesToShow, !e.options.infinite && e.currentSlide > d && (e.currentSlide = d), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), c = e.currentSlide, e.destroy(!0), a.extend(e, e.initials, {
                currentSlide: c
            }), e.init(), b || e.changeSlide({
                data: {
                    message: "index",
                    index: c
                }
            }, !1)
        }, b.prototype.registerBreakpoints = function() {
            var b, c, d, e = this,
                f = e.options.responsive || null;
            if ("array" === a.type(f) && f.length) {
                e.respondTo = e.options.respondTo || "window";
                for (b in f)
                    if (d = e.breakpoints.length - 1, f.hasOwnProperty(b)) {
                        for (c = f[b].breakpoint; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
                        e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
                    }
                e.breakpoints.sort(function(a, b) {
                    return e.options.mobileFirst ? a - b : b - a
                })
            }
        }, b.prototype.reinit = function() {
            var b = this;
            b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
        }, b.prototype.resize = function() {
            var b = this;
            a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function() {
                b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
            }, 50))
        }, b.prototype.removeSlide = b.prototype.slickRemove = function(a, b, c) {
            var d = this;
            return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, !(d.slideCount < 1 || 0 > a || a > d.slideCount - 1) && (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
        }, b.prototype.setCSS = function(a) {
            var b, c, d = this,
                e = {};
            d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
        }, b.prototype.setDimensions = function() {
            var b, a = this;
            a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
                padding: "0px " + a.options.centerPadding
            }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
                padding: a.options.centerPadding + " 0px"
            })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length))), b = a.$slides.first().outerWidth(!0) - a.$slides.first().width(), a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
        }, b.prototype.setFade = function() {
            var b, c = this;
            c.$slides.each(function(d, e) {
                b = -1 * c.slideWidth * d, c.options.rtl === !0 ? a(e).css({
                    position: "relative",
                    right: b,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                }) : a(e).css({
                    position: "relative",
                    left: b,
                    top: 0,
                    zIndex: c.options.zIndex - 2,
                    opacity: 0
                })
            }), c.$slides.eq(c.currentSlide).css({
                zIndex: c.options.zIndex - 1,
                opacity: 1
            })
        }, b.prototype.setHeight = function() {
            var b, a = this;
            1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1 && (b = a.$slides.eq(a.currentSlide).outerHeight(!0), a.$list.css("height", b))
        }, b.prototype.setOption = b.prototype.slickSetOption = function() {
            var b, c, d, e, f, g = this,
                h = !1;
            if ("object" === a.type(arguments[0]) ? (d = arguments[0], h = arguments[1], f = "multiple") : "string" === a.type(arguments[0]) && (d = arguments[0], e = arguments[1], h = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? f = "responsive" : "undefined" != typeof arguments[1] && (f = "single")), "single" === f) g.options[d] = e;
            else if ("multiple" === f) a.each(d, function(a, b) {
                g.options[a] = b
            });
            else if ("responsive" === f)
                for (c in e)
                    if ("array" !== a.type(g.options.responsive)) g.options.responsive = [e[c]];
                    else {
                        for (b = g.options.responsive.length - 1; b >= 0;) g.options.responsive[b].breakpoint === e[c].breakpoint && g.options.responsive.splice(b, 1), b--;
                        g.options.responsive.push(e[c])
                    }
            h && (g.unload(), g.reinit())
        }, b.prototype.setPosition = function() {
            var a = this;
            a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
        }, b.prototype.setProps = function() {
            var a = this,
                b = document.body.style;
            a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), void 0 === b.WebkitTransition && void 0 === b.MozTransition && void 0 === b.msTransition || a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
        }, b.prototype.setSlideClasses = function(a) {
            var b, c, d, e, g, f = this;
            c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), f.options.centerMode === !0 ? (g = 0 === f.options.slidesToShow % 2 ? 1 : 0, b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b + g, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1 + g, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" !== f.options.lazyLoad && "anticipated" !== f.options.lazyLoad || f.lazyLoad()
        }, b.prototype.setupInfinite = function() {
            var b, c, d, e = this;
            if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
                for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
                for (b = 0; b < d + e.slideCount; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
                e.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                    a(this).attr("id", "")
                })
            }
        }, b.prototype.interrupt = function(a) {
            var b = this;
            a || b.autoPlay(), b.interrupted = a
        }, b.prototype.selectHandler = function(b) {
            var c = this,
                d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
                e = parseInt(d.attr("data-slick-index"));
            return e || (e = 0), c.slideCount <= c.options.slidesToShow ? void c.slideHandler(e, !1, !0) : void c.slideHandler(e)
        }, b.prototype.slideHandler = function(a, b, c) {
            var d, e, f, g, h, i = null,
                j = this;
            return b = b || !1, j.animating === !0 && j.options.waitForAnimate === !0 || j.options.fade === !0 && j.currentSlide === a ? void 0 : (b === !1 && j.asNavFor(a), d = a, i = j.getLeft(d), g = j.getLeft(j.currentSlide), j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft, j.options.infinite === !1 && j.options.centerMode === !1 && (0 > a || a > j.getDotCount() * j.options.slidesToScroll) ? void(j.options.fade === !1 && (d = j.currentSlide, c !== !0 && j.slideCount > j.options.slidesToShow ? j.animateSlide(g, function() {
                j.postSlide(d)
            }) : j.postSlide(d))) : j.options.infinite === !1 && j.options.centerMode === !0 && (0 > a || a > j.slideCount - j.options.slidesToScroll) ? void(j.options.fade === !1 && (d = j.currentSlide, c !== !0 && j.slideCount > j.options.slidesToShow ? j.animateSlide(g, function() {
                j.postSlide(d)
            }) : j.postSlide(d))) : (j.options.autoplay && clearInterval(j.autoPlayTimer), e = 0 > d ? 0 !== j.slideCount % j.options.slidesToScroll ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + d : d >= j.slideCount ? 0 !== j.slideCount % j.options.slidesToScroll ? 0 : d - j.slideCount : d, j.animating = !0, j.$slider.trigger("beforeChange", [j, j.currentSlide, e]), f = j.currentSlide, j.currentSlide = e, j.setSlideClasses(j.currentSlide), j.options.asNavFor && (h = j.getNavTarget(), h = h.slick("getSlick"), h.slideCount <= h.options.slidesToShow && h.setSlideClasses(j.currentSlide)), j.updateDots(), j.updateArrows(), j.options.fade === !0 ? (c !== !0 ? (j.fadeSlideOut(f), j.fadeSlide(e, function() {
                j.postSlide(e)
            })) : j.postSlide(e), void j.animateHeight()) : void(c !== !0 && j.slideCount > j.options.slidesToShow ? j.animateSlide(i, function() {
                j.postSlide(e)
            }) : j.postSlide(e))))
        }, b.prototype.startLoad = function() {
            var a = this;
            a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
        }, b.prototype.swipeDirection = function() {
            var a, b, c, d, e = this;
            return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
        }, b.prototype.swipeEnd = function() {
            var b, c, d = this;
            if (d.dragging = !1, d.swiping = !1, d.scrolling) return d.scrolling = !1, !1;
            if (d.interrupted = !1, d.shouldClick = !(d.touchObject.swipeLength > 10), void 0 === d.touchObject.curX) return !1;
            if (d.touchObject.edgeHit === !0 && d.$slider.trigger("edge", [d, d.swipeDirection()]), d.touchObject.swipeLength >= d.touchObject.minSwipe) {
                switch (c = d.swipeDirection()) {
                    case "left":
                    case "down":
                        b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount(), d.currentDirection = 0;
                        break;
                    case "right":
                    case "up":
                        b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount(), d.currentDirection = 1
                }
                "vertical" != c && (d.slideHandler(b), d.touchObject = {}, d.$slider.trigger("swipe", [d, c]))
            } else d.touchObject.startX !== d.touchObject.curX && (d.slideHandler(d.currentSlide), d.touchObject = {})
        }, b.prototype.swipeHandler = function(a) {
            var b = this;
            if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
                case "start":
                    b.swipeStart(a);
                    break;
                case "move":
                    b.swipeMove(a);
                    break;
                case "end":
                    b.swipeEnd(a)
            }
        }, b.prototype.swipeMove = function(a) {
            var b, c, d, e, f, g, h = this;
            return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !(!h.dragging || h.scrolling || f && 1 !== f.length || (b = h.getLeft(h.currentSlide), h.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, h.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, h.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(h.touchObject.curX - h.touchObject.startX, 2))), g = Math.round(Math.sqrt(Math.pow(h.touchObject.curY - h.touchObject.startY, 2))), !h.options.verticalSwiping && !h.swiping && g > 4 ? (h.scrolling = !0, 1) : (h.options.verticalSwiping === !0 && (h.touchObject.swipeLength = g), c = h.swipeDirection(), void 0 !== a.originalEvent && h.touchObject.swipeLength > 4 && (h.swiping = !0, a.preventDefault()), e = (h.options.rtl === !1 ? 1 : -1) * (h.touchObject.curX > h.touchObject.startX ? 1 : -1), h.options.verticalSwiping === !0 && (e = h.touchObject.curY > h.touchObject.startY ? 1 : -1), d = h.touchObject.swipeLength, h.touchObject.edgeHit = !1, h.options.infinite === !1 && (0 === h.currentSlide && "right" === c || h.currentSlide >= h.getDotCount() && "left" === c) && (d = h.touchObject.swipeLength * h.options.edgeFriction, h.touchObject.edgeHit = !0), h.swipeLeft = h.options.vertical === !1 ? b + d * e : b + d * (h.$list.height() / h.listWidth) * e, h.options.verticalSwiping === !0 && (h.swipeLeft = b + d * e), h.options.fade === !0 || h.options.touchMove === !1 || (h.animating === !0 ? (h.swipeLeft = null, 1) : !void h.setCSS(h.swipeLeft)))))
        }, b.prototype.swipeStart = function(a) {
            var b, c = this;
            return c.interrupted = !0, 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
        }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function() {
            var a = this;
            null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
        }, b.prototype.unload = function() {
            var b = this;
            a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
        }, b.prototype.unslick = function(a) {
            var b = this;
            b.$slider.trigger("unslick", [b, a]), b.destroy()
        }, b.prototype.updateArrows = function() {
            var a, b = this;
            a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
        }, b.prototype.updateDots = function() {
            var a = this;
            null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").end(), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active"))
        }, b.prototype.visibility = function() {
            var a = this;
            a.options.autoplay && (a.interrupted = document[a.hidden] ? !0 : !1)
        }, a.fn.slick = function() {
            var a, c, d = this,
                e = arguments[0],
                f = Array.prototype.slice.call(arguments, 1),
                g = d.length;
            for (a = 0; g > a; a++)
                if ("object" == typeof e || "undefined" == typeof e ? d[a].slick = new b(d[a], e) : c = d[a].slick[e].apply(d[a].slick, f), "undefined" != typeof c) return c;
            return d
        }
    }), window.animation = function(a, b) {
        var e, f, g, d = [],
            h = function() {
                var c, f, g;
                for (c = d.length; c--;) f = d[c], g = f.getBoundingClientRect(), (0 <= g.top && 0 <= g.left && g.top) <= (a.innerHeight || b.documentElement.clientHeight) + parseInt(e) && (g = f.getAttribute("hsm"), f.className += " " + g, d.splice(c, 1))
            },
            i = function() {
                clearTimeout(g), g = setTimeout(h, f)
            };
        return {
            init: function(c) {
                var g = b.querySelectorAll("[hsm]");
                for (c = c || {}, e = c.offset || 0, f = c.throttle || 15, c = 0; c < g.length; c++) d.push(g[c]);
                i(), b.addEventListener ? a.addEventListener("scroll", i, !1) : a.attachEvent("onscroll", i)
            },
            render: i
        }
    }(window, document), $(function() {
        sliders(".sliders"), animation.init({
            offset: 0,
            throttle: 0
        }), $("body *").each(function() {
            $(this).attr("hsm") && $(this).addClass("animation")
        }), $(".hsms").each(function() {
            $(this).children().each(function(a) {
                $(this).css({
                    "animation-delay": a / 10 + "s"
                })
            })
        }), $(".tab-wrap .tab-head li").click(function() {
            $(this).addClass("cur").siblings().removeClass("cur"), $(this).parents(".tab-wrap").find(".tab-body").children("li").eq($(this).index()).addClass("cur").siblings("li").removeClass("cur")
        }), $(".search-btn,.m-search-b").click(function() {
            $(".fix-search").fadeIn()
        }), $("a").hasClass("video-open") && $("body").append('<div class="fix-wrap fix-video"><div class="dfcc wh1"><div class="video-wrap"></div></div><button class="hide"></button></div>'), $("a").hasClass("pic-open") && $("body").append('<div class="fix-pic fix-wrap"><div class="dfcc wh1"><img src="" alt=""></div><button class="hide"></button></div>'), $(".video-open").click(function() {
            $(".fix-video").stop().fadeToggle().find(".video-wrap").html('<video autoplay controls><source src="' + $(this).attr("vurl") + '" type="video/mp4">您的浏览器不支持 video 标签。</video>')
        }), $(".pic-open").click(function() {
            $(".fix-pic").stop().fadeToggle().find("img").attr("src", $(this).find("img").attr("src"))
        }), $(".fix-wrap .hide").click(function() {
            $(this).parent(".fix-wrap").stop().fadeOut(), $(".fix-video").find("video").get(0).pause()
        }), $("body").click(function() {
            $("html").removeClass("active"), $(this).find(".header-m").find(".nav").children("li").removeClass("active").find(".sub-nav").hide(), $(this).find(".main-nav-m").find("ul").slideUp().siblings(".title").removeClass("active")
        }), $("body").children().click(function() {}), $(".m-menu-b").click(function() {
            return $("html").toggleClass("active"), $(".main-nav-m ul").hide(), $(".main-nav-m .title").removeClass("active"), !1
        }), $(".header-m .nav li").each(function() {
            $(this).find("li").length > 0 && $(this).addClass("cur").children("a").attr("href", "javascript:;").click(function() {
                return $(this).siblings(".sub-nav").stop().slideToggle().parent("li").toggleClass("active").siblings("li").removeClass("active").find(".sub-nav").stop().slideUp(), !1
            })
        }), $(".main-nav-m .title").click(function() {
            return $(this).toggleClass("active").siblings("ul").stop().slideToggle(), !1
        })
    });