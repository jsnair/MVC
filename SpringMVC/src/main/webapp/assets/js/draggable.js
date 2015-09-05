(function ($) {
    $.fn.drags = function (opt) {

        opt = $.extend({handle: "", cursor: "move"}, opt);

        if (opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown",function (e) {

            if (opt.handle === "") {
                var $drag = $(this).addClass('draggable');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
            }
            if ($drag.hasClass("pinned")) {
                $(this).removeClass('draggable');
                return;
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            var errorField = $('#error', $($('.activeLi>a').attr("href"))).addClass("moveErrorField");
            if(errorField.length){
                var drg_h1 = errorField.outerHeight(),
                    drg_w1 = errorField.outerWidth(),
                    pos_y1 = errorField.offset().top + drg_h1 - e.pageY,
                    pos_x1 = errorField.offset().left + drg_w1 - e.pageX;
            }
            $drag.css('z-index', 1000).parents().on("mousemove", function (e) {

                $('.draggable').offset({
                    top: e.pageY + pos_y - drg_h,
                    left: e.pageX + pos_x - drg_w
                }).on("mouseup", function () {
                        $(this).removeClass('draggable').css('z-index', z_idx);
                    });
                if(errorField.length){
                    $(".moveErrorField").offset({
                        top: e.pageY + pos_y1 - drg_h1,
                        left: e.pageX + pos_x1 - drg_w1
                    });
                    if (e.pageY + drg_h1 > $(window).outerHeight()) {
                        $(".moveErrorField").offset({
                            top: e.pageY - drg_h1 - drg_h + 4,
                            left: e.pageX + pos_x1 - drg_w1
                        });
                    }
                    if (e.pageY < drg_h1 + drg_h) {
                        $(".moveErrorField").offset({
                            top: e.pageY + drg_h - pos_y - 10,
                            left: e.pageX + pos_x1 - drg_w1
                        });
                    }
                }
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function () {
                if (opt.handle === "") {
                    $(this).removeClass('draggable');
                } else {
                    $(this).removeClass('active-handle').parent().removeClass('draggable');
                }
                $('#error', $($('.activeLi>a').attr("href"))).removeClass("moveErrorField");
            });

    }

    //Resizable feature of pop ups
    $(document).on('mousedown', ".dialogDraggable", function (e) {
        var $draggable = $(this).parents(".bancs-dialog").addClass("dragDialog"),
            startWidth = $draggable.width(),
            pX = e.pageX;
        var windowWidth = parseInt($(window).width(), 10);
        $(document).on('mouseup', function (e) {
            $(".dragDialog").off("mousemove");
            $draggable.removeClass("dragDialog");
        });
        $(".dragDialog").on('mousemove', function (me) {
            var mx = (me.pageX - pX);
            $draggable.css({
                width: startWidth + mx
            }).css("margin-left", (windowWidth - parseInt($draggable.width(), 10)) / 2);
        });

    });
/*    $(document).on("mousedown", "#activeContextMenu", function (e) {
        $(this).addClass("dragContext");
        var height = $(this).height(),
            width = $(this).width();
        $(".dragContext").on("mousemove", function (me) {
            $(this).offset({
                top: e.pageY - height/2,
                left: e.pageX -width/2
            });
        });
        $(document).on('mouseup', function (e) {
            $(this).off("mousemove");
            $(this).removeClass("dragContext");
        });
    });*/


})(jQuery);