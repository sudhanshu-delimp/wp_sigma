var removeSpinner = function(){
  jQuery(".fa-spinner").remove();
}

jQuery(document).ready(function ($) {
    jQuery('.my-news-ticker').AcmeTicker({
        type:'marquee',
        direction: 'right',
        speed: 0.05,
        controls: {
            toggle: jQuery('.acme-news-ticker-pause'),
        }
    });
})

if(jQuery("#example-3").length > 0){
  jQuery('#example-3').eocjsNewsticker({
    'speed':      15,
    'divider':    '.',
    'type':       'ajax',
    'source':     news_tiker_url,
    'dataType':   'jsonp',
    'callback':   'callbackLTR',
    'interval':   30
  });
}

jQuery(document).on('click','#recent_post_loader', function(){
  var data = {};
  data['action'] = 'load_recent_posts';
  data['last_id'] = jQuery(this).attr('post-last-id');
  data['limit'] = jQuery(this).attr('post-limit');
  data['card_image'] = jQuery(this).attr('card-image');
  data['category_id'] = jQuery(this).attr('post-category');
  data['current_post_count'] = parseInt(jQuery('.sbs_author_blog .sbs-item-card').length)+parseInt(data['limit']);
  var button_element = jQuery(this);
  var previous_element = button_element.prev();
  jQuery.ajax({
    url:DVO.siteurl+'/wp-admin/admin-ajax.php',
    method:'post',
    dataType:'json',
    data:data,
    beforeSend: function(){
      console.log(data);
      button_element.attr('disabled','disabled');
      previous_element.append('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
    },
    success: function(response){
      console.log(response);
      removeSpinner();
      previous_element.append(response.posts);
      if(response.is_load_more===false){
        button_element.remove();
      }
      else{
        button_element.attr('post-last-id',response.last_id);
        button_element.removeAttr('disabled','disabled');
      }
    }
  });
});

jQuery(document).on('click','#author_post_loader', function(){
  var data = {};
  data['action'] = 'load_author_posts';
  data['last_id'] = jQuery(this).attr('post-last-id');
  data['limit'] = jQuery(this).attr('post-limit');
  data['user_id'] = jQuery(this).attr('user-id');
  data['current_post_count'] = parseInt(jQuery('.sbs_author_blog .sbs-item-card').length)+parseInt(data['limit']);
  var button_element = jQuery(this);
  var previous_element = button_element.parent();
  jQuery.ajax({
    url:DVO.siteurl+'/wp-admin/admin-ajax.php',
    method:'post',
    dataType:'json',
    data:data,
    beforeSend: function(){
      console.log(data);
      button_element.attr('disabled','disabled');
      button_element.before('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
    },
    success: function(response){
      console.log(response);
      removeSpinner();
      button_element.before(response.posts);
      if(response.is_load_more===false){
        button_element.remove();
      }
      else{
        button_element.attr('post-last-id',response.last_id);
        button_element.removeAttr('disabled','disabled');
      }
    }
  });
});

jQuery(document).on('keyup','input[name=author_articles_search]',function(){
  var search_value = jQuery(this).val();
  var user_id = jQuery(this).attr('user-id');
  var limit = jQuery(this).attr('post-limit');
  var data={};
  if(1==1){
      data['action'] = 'search_author_posts';
      data['from'] = 'search_bar';
      data['search_value'] = search_value;
      data['user_id'] = user_id;
      data['limit'] = limit;

      jQuery.ajax({
        url:DVO.siteurl+'/wp-admin/admin-ajax.php',
        method:'post',
        dataType:'json',
        data:data,
        beforeSend: function(){
          console.log("beforeSend");
          console.log(data);
          jQuery(".sbs_author_blog").html('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
        },
        success: function(response){
          removeSpinner();
          jQuery(".sbs_author_blog").html(response.posts);
        }
      });
  }
});

jQuery(document).on('click','#recent_author_loader', function(){
  var data = {};
  data['action'] = 'load_recent_authors';
  data['last_id'] = jQuery(this).attr('post-last-id');
  data['limit'] = jQuery(this).attr('post-limit');
  data['card_image'] = jQuery(this).attr('card-image');
  data['category_id'] = jQuery(this).attr('post-category');
  data['loader'] = jQuery(this).attr('is-loader');
  data['current_post_count'] = parseInt(jQuery('.sbs_author_blog .sbs-item-card').length)+parseInt(data['limit']);
  var button_element = jQuery(this);
  var previous_element = button_element.prev();
  jQuery.ajax({
    url:DVO.siteurl+'/wp-admin/admin-ajax.php',
    method:'post',
    dataType:'json',
    data:data,
    beforeSend: function(){
      console.log(data);
      button_element.attr('disabled','disabled');
      previous_element.append('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
    },
    success: function(response){
      console.log(response);
      removeSpinner();
      previous_element.append(response.posts);
      if(response.is_load_more===false){
        button_element.remove();
      }
      else{
        button_element.attr('post-last-id',response.last_id);
        button_element.removeAttr('disabled','disabled');
      }
    }
  });
});

jQuery(document).on('click','#opinion_post_loader', function(){
  var data = {};
  data['action'] = 'load_recent_opinions';
  data['last_id'] = jQuery(this).attr('post-last-id');
  data['limit'] = jQuery(this).attr('post-limit');
  data['card_image'] = jQuery(this).attr('card-image');
  data['category_id'] = jQuery(this).attr('post-category');
  data['current_post_count'] = parseInt(jQuery('.sbs_author_blog .sbs-item-card').length)+parseInt(data['limit']);
  data['number_of_post'] = parseInt(jQuery('.sbs_author_blog .sbs-item-card').length);
  var button_element = jQuery(this);
  var previous_element = button_element.prev();
  jQuery.ajax({
    url:DVO.siteurl+'/wp-admin/admin-ajax.php',
    method:'post',
    dataType:'json',
    data:data,
    beforeSend: function(){
      console.log(data);
      button_element.attr('disabled','disabled');
      previous_element.append('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
    },
    success: function(response){
      console.log(response);
      removeSpinner();
      previous_element.append(response.posts);
      if(response.is_load_more===false){
        button_element.remove();
      }
      else{
        button_element.attr('post-last-id',response.last_id);
        button_element.removeAttr('disabled','disabled');
      }
    }
  });
});

jQuery(document).on('click','#trending_post_loader', function(){
  var data = {};
  data['action'] = 'load_trending_posts';
  data['last_id'] = jQuery(this).attr('post-last-id');
  data['limit'] = jQuery(this).attr('post-limit');
  data['card_image'] = jQuery(this).attr('card-image');
  data['category_id'] = jQuery(this).attr('post-category');
  data['loader'] = jQuery(this).attr('is_loader');
  data['current_post_count'] = parseInt(jQuery('.sbs_author_blog .trening-post-card').length)+parseInt(data['limit']);
  var button_element = jQuery(this);
  var previous_element = button_element.prev();
  jQuery.ajax({
    url:DVO.siteurl+'/wp-admin/admin-ajax.php',
    method:'post',
    dataType:'json',
    data:data,
    beforeSend: function(){
      console.log(data);
      button_element.attr('disabled','disabled');
      previous_element.append('<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>');
    },
    success: function(response){
      console.log(response);
      removeSpinner();
      previous_element.append(response.posts);
      if(response.is_load_more===false){
        button_element.remove();
      }
      else{
        button_element.attr('post-last-id',response.last_id);
        button_element.removeAttr('disabled','disabled');
      }
    }
  });
});


jQuery(document).ready(function(){

  jQuery('#newsTicker2').breakingNews({
    direction: 'ltr'
  });

});

!(function (C) {
    "use strict";
    (C.breakingNews = function (e, t) {
        var i = {
                effect: "scroll",
                direction: "ltr",
                height: 40,
                fontSize: "default",
                themeColor: "default",
                background: "default",
                borderWidth: 1,
                radius: 2,
                source: "html",
                play: !0,
                delayTimer: 4e3,
                scrollSpeed: 2,
                stopOnHover: !0,
                position: "auto",
                zIndex: 99999,
            },
            o = this;
        o.settings = {};
        var s = C(e),
            n = ((e = e), s.children(".bn-label")),
            l = s.children(".bn-news"),
            c = l.children("ul"),
            d = c.children("li"),
            r = s.children(".bn-controls"),
            f = r.find(".bn-prev").parent(),
            g = r.find(".bn-action").parent(),
            h = r.find(".bn-next").parent(),
            u = !1,
            p = !0,
            m = c.children("li").length,
            a = 0,
            b = !1,
            y = function () {
                if ((0 < n.length && ("rtl" == o.settings.direction ? l.css({ right: n.outerWidth() }) : l.css({ left: n.outerWidth() })), 0 < r.length)) {
                    var e = r.outerWidth();
                    "rtl" == o.settings.direction ? l.css({ left: e }) : l.css({ right: e });
                }
                if ("scroll" === o.settings.effect) {
                    var t = 0;
                    d.each(function () {
                        t += C(this).outerWidth();
                    }),
                        (t += 10),
                        c.css({ width: t });
                }
            },
            k = function () {
                var e = parseFloat(c.css("marginLeft"));
                (e -= o.settings.scrollSpeed / 2),
                    c.css({ marginLeft: e }),
                    e <= -c.find("li:first-child").outerWidth() && (c.find("li:first-child").insertAfter(c.find("li:last-child")), c.css({ marginLeft: 0 })),
                    !1 === u && ((window.requestAnimationFrame && requestAnimationFrame(k)) || setTimeout(k, 16));
            },
            v = function () {
                var e = parseFloat(c.css("marginRight"));
                (e -= o.settings.scrollSpeed / 2),
                    c.css({ marginRight: e }),
                    e <= -c.find("li:first-child").outerWidth() && (c.find("li:first-child").insertAfter(c.find("li:last-child")), c.css({ marginRight: 0 })),
                    !1 === u && ((window.requestAnimationFrame && requestAnimationFrame(v)) || setTimeout(v, 16));
            },
            w = function () {
                "rtl" === o.settings.direction
                    ? c.stop().animate({ marginRight: -c.find("li:first-child").outerWidth() }, 300, function () {
                          c.find("li:first-child").insertAfter(c.find("li:last-child")), c.css({ marginRight: 0 }), (p = !0);
                      })
                    : c.stop().animate({ marginLeft: -c.find("li:first-child").outerWidth() }, 300, function () {
                          c.find("li:first-child").insertAfter(c.find("li:last-child")), c.css({ marginLeft: 0 }), (p = !0);
                      });
            },
            q = function () {
                "rtl" === o.settings.direction
                    ? (0 <= parseInt(c.css("marginRight"), 10) && (c.css({ "margin-right": -c.find("li:last-child").outerWidth() }), c.find("li:last-child").insertBefore(c.find("li:first-child"))),
                      c.stop().animate({ marginRight: 0 }, 300, function () {
                          p = !0;
                      }))
                    : (0 <= parseInt(c.css("marginLeft"), 10) && (c.css({ "margin-left": -c.find("li:last-child").outerWidth() }), c.find("li:last-child").insertBefore(c.find("li:first-child"))),
                      c.stop().animate({ marginLeft: 0 }, 300, function () {
                          p = !0;
                      }));
            },
            x = function () {
                switch (((p = !0), o.settings.effect)) {
                    case "typography":
                        c.find("li").hide(), c.find("li").eq(a).width(30).show(), c.find("li").eq(a).animate({ width: "100%", opacity: 1 }, 1500);
                        break;
                    case "fade":
                        c.find("li").hide(), c.find("li").eq(a).fadeIn();
                        break;
                    case "slide-down":
                        c.find("li:visible").animate({ top: 30, opacity: 0 }, 300, function () {
                            C(this).hide();
                        }),
                            c.find("li").eq(a).css({ top: -30, opacity: 0 }).show(),
                            c.find("li").eq(a).animate({ top: 0, opacity: 1 }, 300);
                        break;
                    case "slide-up":
                        c.find("li:visible").animate({ top: -30, opacity: 0 }, 300, function () {
                            C(this).hide();
                        }),
                            c.find("li").eq(a).css({ top: 30, opacity: 0 }).show(),
                            c.find("li").eq(a).animate({ top: 0, opacity: 1 }, 300);
                        break;
                    case "slide-left":
                        c.find("li:visible").animate({ left: "50%", opacity: 0 }, 300, function () {
                            C(this).hide();
                        }),
                            c.find("li").eq(a).css({ left: -50, opacity: 0 }).show(),
                            c.find("li").eq(a).animate({ left: 0, opacity: 1 }, 300);
                        break;
                    case "slide-right":
                        c.find("li:visible").animate({ left: "-50%", opacity: 0 }, 300, function () {
                            C(this).hide();
                        }),
                            c.find("li").eq(a).css({ left: "50%", opacity: 0 }).show(),
                            c.find("li").eq(a).animate({ left: 0, opacity: 1 }, 300);
                        break;
                    default:
                        c.find("li").hide(), c.find("li").eq(a).show();
                }
            },
            W = function () {
                if (((u = !1), o.settings.play))
                    switch (o.settings.effect) {
                        case "scroll":
                            "rtl" === o.settings.direction ? v() : k();
                            break;
                        default:
                            o.pause(),
                                (b = setInterval(function () {
                                    o.next();
                                }, o.settings.delayTimer));
                    }
            };
        (o.init = function () {
            if (
                ((o.settings = C.extend({}, i, t)),
                "fixed-top" === o.settings.position ? s.addClass("bn-fixed-top").css({ "z-index": o.settings.zIndex }) : "fixed-bottom" === o.settings.position && s.addClass("bn-fixed-bottom").css({ "z-index": o.settings.zIndex }),
                "default" != o.settings.fontSize && s.css({ "font-size": o.settings.fontSize }),
                "default" != o.settings.themeColor && (s.css({ "border-color": o.settings.themeColor, color: o.settings.themeColor }), n.css({ background: o.settings.themeColor })),
                "default" != o.settings.background && s.css({ background: o.settings.background }),
                s.css({ height: o.settings.height, "line-height": o.settings.height - 2 * o.settings.borderWidth + "px", "border-radius": o.settings.radius, "border-width": o.settings.borderWidth }),
                d.find(".bn-seperator").css({ height: o.settings.height - 2 * o.settings.borderWidth }),
                s.addClass("bn-effect-" + o.settings.effect + " bn-direction-" + o.settings.direction),
                y(),
                "object" == typeof o.settings.source)
            )
                switch (o.settings.source.type) {
                    case "rss":
                        "rss2json" === o.settings.source.usingApi
                            ? (((a = new XMLHttpRequest()).onreadystatechange = function () {
                                  if (4 == a.readyState && 200 == a.status) {
                                      var e = JSON.parse(a.responseText),
                                          t = "",
                                          i = "";
                                      switch (o.settings.source.showingField) {
                                          case "title":
                                              i = "title";
                                              break;
                                          case "description":
                                              i = "description";
                                              break;
                                          case "link":
                                              i = "link";
                                              break;
                                          default:
                                              i = "title";
                                      }
                                      var s = "";
                                      void 0 !== o.settings.source.seperator && void 0 !== typeof o.settings.source.seperator && (s = o.settings.source.seperator);
                                      for (var n = 0; n < e.items.length; n++)
                                          o.settings.source.linkEnabled
                                              ? (t += '<li><a target="' + o.settings.source.target + '" href="' + e.items[n].link + '">' + s + e.items[n][i] + "</a></li>")
                                              : (t += "<li><a>" + s + e.items[n][i] + "</a></li>");
                                      c.empty().append(t),
                                          (d = c.children("li")),
                                          (m = c.children("li").length),
                                          y(),
                                          "scroll" != o.settings.effect && x(),
                                          d.find(".bn-seperator").css({ height: o.settings.height - 2 * o.settings.borderWidth }),
                                          W();
                                  }
                              }),
                              a.open("GET", "https://api.rss2json.com/v1/api.json?rss_url=" + o.settings.source.url, !0),
                              a.send())
                            : ((r = new XMLHttpRequest()).open(
                                  "GET",
                                  "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent('select * from rss where url="' + o.settings.source.url + '" limit ' + o.settings.source.limit) + "&format=json",
                                  !0
                              ),
                              (r.onreadystatechange = function () {
                                  if (4 == r.readyState)
                                      if (200 == r.status) {
                                          var e = JSON.parse(r.responseText),
                                              t = "",
                                              i = "";
                                          switch (o.settings.source.showingField) {
                                              case "title":
                                                  i = "title";
                                                  break;
                                              case "description":
                                                  i = "description";
                                                  break;
                                              case "link":
                                                  i = "link";
                                                  break;
                                              default:
                                                  i = "title";
                                          }
                                          var s = "";
                                          "undefined" != o.settings.source.seperator && void 0 !== o.settings.source.seperator && (s = o.settings.source.seperator);
                                          for (var n = 0; n < e.query.results.item.length; n++)
                                              o.settings.source.linkEnabled
                                                  ? (t += '<li><a target="' + o.settings.source.target + '" href="' + e.query.results.item[n].link + '">' + s + e.query.results.item[n][i] + "</a></li>")
                                                  : (t += "<li><a>" + s + e.query.results.item[n][i] + "</a></li>");
                                          c.empty().append(t),
                                              (d = c.children("li")),
                                              (m = c.children("li").length),
                                              y(),
                                              "scroll" != o.settings.effect && x(),
                                              d.find(".bn-seperator").css({ height: o.settings.height - 2 * o.settings.borderWidth }),
                                              W();
                                      } else c.empty().append('<li><span class="bn-loader-text">' + o.settings.source.errorMsg + "</span></li>");
                              }),
                              r.send(null));
                        break;
                    case "json":
                        C.getJSON(o.settings.source.url, function (e) {
                            var t = "",
                                i = "";
                            i = "undefined" === o.settings.source.showingField ? "title" : o.settings.source.showingField;
                            var s = "";
                            void 0 !== o.settings.source.seperator && void 0 !== typeof o.settings.source.seperator && (s = o.settings.source.seperator);
                            for (var n = 0; n < e.length && !(n >= o.settings.source.limit); n++)
                                o.settings.source.linkEnabled ? (t += '<li><a target="' + o.settings.source.target + '" href="' + e[n].link + '">' + s + e[n][i] + "</a></li>") : (t += "<li><a>" + s + e[n][i] + "</a></li>"),
                                    "undefined" === e[n][i] && console.log('"' + i + '" does not exist in this json.');
                            c.empty().append(t), (d = c.children("li")), (m = c.children("li").length), y(), "scroll" != o.settings.effect && x(), d.find(".bn-seperator").css({ height: o.settings.height - 2 * o.settings.borderWidth }), W();
                        });
                        break;
                    default:
                        console.log('Please check your "source" object parameter. Incorrect Value');
                }
            else "html" === o.settings.source ? ("scroll" != o.settings.effect && x(), W()) : console.log('Please check your "source" parameter. Incorrect Value');
            var r, a;
            o.settings.play ? g.find("span").removeClass("bn-play").addClass("bn-pause") : g.find("span").removeClass("bn-pause").addClass("bn-play"),
                s.on("mouseleave", function (e) {
                    var t = C(document.elementFromPoint(e.clientX, e.clientY)).parents(".bn-breaking-news")[0];
                    C(this)[0] !== t && (!0 === o.settings.stopOnHover ? !0 === o.settings.play && o.play() : !0 === o.settings.play && !0 === u && o.play());
                }),
                s.on("mouseenter", function () {
                    !0 === o.settings.stopOnHover && o.pause();
                }),
                h.on("click", function () {
                    p && ((p = !1), o.pause(), o.next());
                }),
                f.on("click", function () {
                    p && ((p = !1), o.pause(), o.prev());
                }),
                g.on("click", function () {
                    p && (g.find("span").hasClass("bn-pause") ? (g.find("span").removeClass("bn-pause").addClass("bn-play"), o.stop()) : ((o.settings.play = !0), g.find("span").removeClass("bn-play").addClass("bn-pause")));
                }),
                C(window).on("resize", function () {
                    s.width() < 480 ? (n.hide(), "rtl" == o.settings.direction ? l.css({ right: 0 }) : l.css({ left: 0 })) : (n.show(), "rtl" == o.settings.direction ? l.css({ right: n.outerWidth() }) : l.css({ left: n.outerWidth() }));
                });
        }),
            (o.pause = function () {
                (u = !0), clearInterval(b);
            }),
            (o.stop = function () {
                (u = !0), (o.settings.play = !1);
            }),
            (o.play = function () {
                W();
            }),
            (o.next = function () {
                !(function () {
                    switch (o.settings.effect) {
                        case "scroll":
                            w();
                            break;
                        default:
                            m <= ++a && (a = 0), x();
                    }
                })();
            }),
            (o.prev = function () {
                !(function () {
                    switch (o.settings.effect) {
                        case "scroll":
                            q();
                            break;
                        default:
                            --a < 0 && (a = m - 1), x();
                    }
                })();
            }),
            o.init();
    }),
        (C.fn.breakingNews = function (t) {
            return this.each(function () {
                if (null == C(this).data("breakingNews")) {
                    var e = new C.breakingNews(this, t);
                    C(this).data("breakingNews", e);
                }
            });
        });
})(jQuery);
