/**
 *   bancs.Overlay.js
 *   Bancs UI Widget for rendering user preferences
 *
 *   Depends:
 *   jquery.js
 *   jquery.ui.core.js
 *	jquery.ui.widget.js
 *
 *   @author: Shilpa P
 **/


/*global define:false document:false setTimeout:false*/
define("Overlay",["jquery","widgetFactory"], function($) {
    "use strict";
    (function($,undefined) {

        $.widget("bancs.Overlay",{
             _init: function() {
                var maxZ = 0,that=this;
               ( $('body').children()).each(function() {
                   if($(this).css('z-index') !== "auto")  {
                        maxZ = Math.max(maxZ, $(this).css('z-index'));
                   }
                });
                var $el = $("'<div></div>").appendTo(document.body)
                    .addClass('bancs-overlay');
                $el.css("z-index",++maxZ);
               // $(this.element).css("z-index",++maxZ);
                //Check for IE6
                //(dialog.options.bgiframe && $.fn.bgiframe && $el.bgiframe());

                //bind events

                $(document).on("keydown",function(event){
                    if(event.keyCode === 27){
                       that.destroy();
                    }

                });

                return $el;
            },

            destroy: function() {
                $(".bancs-overlay").remove();
            }




        });
    })($);



});
