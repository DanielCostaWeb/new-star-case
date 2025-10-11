var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
    The MIT License (MIT)

    Copyright (c) 2014 Dirk Groenen

    Permission is hereby granted, free of charge, to any person obtaining a copy of
    this software and associated documentation files (the "Software"), to deal in
    the Software without restriction, including without limitation the rights to
    use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
    the Software, and to permit persons to whom the Software is furnished to do so,
    subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
*/
!function(t){t.fn.viewportChecker=function(o){var e={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(t,o){},scrollHorizontal:!1,scrollBox:window};t.extend(e,o);var a=this,s={height:t(e.scrollBox).height(),width:t(e.scrollBox).width()};return this.checkElements=function(){var o,l;e.scrollHorizontal?(o=Math.max(t("html").scrollLeft(),t("body").scrollLeft(),t(window).scrollLeft()),l=o+s.width):(o=Math.max(t("html").scrollTop(),t("body").scrollTop(),t(window).scrollTop()),l=o+s.height),a.each(function(){var a=t(this),i={},n={};if(a.data("vp-add-class")&&(n.classToAdd=a.data("vp-add-class")),a.data("vp-remove-class")&&(n.classToRemove=a.data("vp-remove-class")),a.data("vp-add-class-full-view")&&(n.classToAddForFullView=a.data("vp-add-class-full-view")),a.data("vp-keep-add-class")&&(n.removeClassAfterAnimation=a.data("vp-remove-after-animation")),a.data("vp-offset")&&(n.offset=a.data("vp-offset")),a.data("vp-repeat")&&(n.repeat=a.data("vp-repeat")),a.data("vp-scrollHorizontal")&&(n.scrollHorizontal=a.data("vp-scrollHorizontal")),a.data("vp-invertBottomOffset")&&(n.scrollHorizontal=a.data("vp-invertBottomOffset")),t.extend(i,e),t.extend(i,n),!a.data("vp-animated")||i.repeat){String(i.offset).indexOf("%")>0&&(i.offset=parseInt(i.offset)/100*s.height);var d=i.scrollHorizontal?a.offset().left:a.offset().top,r=i.scrollHorizontal?d+a.width():d+a.height(),c=Math.round(d)+i.offset,h=i.scrollHorizontal?c+a.width():c+a.height();i.invertBottomOffset&&(h-=2*i.offset),c<l&&h>o?(a.removeClass(i.classToRemove),a.addClass(i.classToAdd),i.callbackFunction(a,"add"),r<=l&&d>=o?a.addClass(i.classToAddForFullView):a.removeClass(i.classToAddForFullView),a.data("vp-animated",!0),i.removeClassAfterAnimation&&a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){a.removeClass(i.classToAdd)})):a.hasClass(i.classToAdd)&&i.repeat&&(a.removeClass(i.classToAdd+" "+i.classToAddForFullView),i.callbackFunction(a,"remove"),a.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&t(document).bind("touchmove MSPointerMove pointermove",this.checkElements),t(e.scrollBox).bind("load scroll",this.checkElements),t(window).resize(function(o){s={height:t(e.scrollBox).height(),width:t(e.scrollBox).width()},a.checkElements()}),this.checkElements(),this}}(jQuery);var isBuilder=$("html").hasClass("is-builder");isBuilder||$(".counters").each(function(){$(this).viewportChecker({callbackFunction:function(t,o){$("#"+t.attr("id")+" .count").each(function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:3e3,easing:"swing",step:function(t){$(this).text(Math.ceil(t))}})})}})});

}
/*
     FILE ARCHIVED ON 20:58:31 Jan 22, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:04:28 Oct 11, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.595
  exclusion.robots: 0.03
  exclusion.robots.policy: 0.018
  esindex: 0.013
  cdx.remote: 56.269
  LoadShardBlock: 562.977 (3)
  PetaboxLoader3.datanode: 629.416 (5)
  PetaboxLoader3.resolve: 472.697 (3)
  load_resource: 695.256 (2)
*/