/*
 * jsLaTeX v1.2.2 - A jQuery plugin to directly embed LaTeX into your website or blog
 *
 *  Copyright (c) 2009 Andreas Grech
 *
 *  Licensed under the WTFPL license:
 *    http://www.wtfpl.net/about/
*
 * http://dreasgrech.com
 */

(function ($) {
  var attachToImage = function () {
    return $('<img/>').attr({
      src: this.src
    });
  };
  var formats = {
    gif: attachToImage,
    png: attachToImage,
    swf: function () {
      return $('<embed/>').attr({
        src: this.src,
        type: 'application/x-shockwave-flash'
      });
    }
  };
  var sections = {
    '{f}': 'format',
    '{e}': 'equation'
  };
  var escapes = {
    '+': '2B',
    '=': '3D'
  };

  $.fn.latex = function (opts) {
    opts = $.extend({},
      $.fn.latex.defaults, opts);
    opts.format = formats[opts.format] ? opts.format : 'gif';
    return this.each(function () {
      var $this = $(this);
      var format; var s; var element; var url = opts.url;
      opts.equation = $.trim($this.text());
      for (s in sections) {
        if (sections.hasOwnProperty(s) && (format = url.indexOf(s)) >= 0) {
          url = url.replace(s, opts[sections[s]]);
        }
      }
      for (s in escapes) {
        if (escapes.hasOwnProperty(s) && (format = url.indexOf(s)) >= 0) {
          url = url.replace(s, '%' + escapes[s]);
        }
      }
      opts.src = url;
      element = formats[opts.format].call(opts);
      $this.html('').append(element);
      if (opts.callback) {
        opts.callback.call(element);
      }
    });
  };

  $.fn.latex.defaults = {
    format: 'gif',
    url: 'http://latex.codecogs.com/{f}.latex?{e}'
  };
}(jQuery));
