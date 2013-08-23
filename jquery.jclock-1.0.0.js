 /*!
 * jClock - jQuery Plugin to print date and time
 *
 * Version:  1.0.0
 * Released: 2013-08-23
 * Source:   http://github.com/colin6618/jquery-jclock
 * Docs:     
 * Plugin:   jClock
 * Author:   Colin Han (hyz0805@gmail.com)
 * License:  MIT,GPL
 * 
 * Copyright (c) 2010 appendTo LLC.
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 */
(function($){
    $.fn.extend({
        jClock: function(){
            var $that = $(this);
            var riqi = function () {
                var dt = new Date();
                return dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate();
            };
            var shijian = function (){
                var dt = new Date();
                return dt.getHours() + ":" + 
                (dt.getMinutes()<10?'0'+dt.getMinutes():dt.getMinutes())  + ":" + 
                (dt.getSeconds()<10?'0'+dt.getSeconds():dt.getSeconds());
            };

            (function refreshClock(){
                $that.html(riqi() + " " + shijian());
                setTimeout(refreshClock, 1000);
            })();
        }
    });
}(jQuery));

