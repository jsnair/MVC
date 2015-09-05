define("bFlowImageSlider", ["jquery", "widgetFactory"], function ($) {
    "use strict";
    (function ($, undefined) {
        $.widget('bFlow.ImageSlider', {
            options: {
                sliderImageLocation:"assets/images/",
                sliderData:{}
            },
            classes: {
                 slideclass:"fadeOut"
            },

            _create: function () {
                var _that = this,
                    _self = _that.element;
                _that._createElement();
                _that._attachEvents();
                _that._keyboardEvent();

              /*  function my_function(){
                    alert("Yo Man!!!");
                }

                setInterval(my_function,3000);*/

            },

            _createElement: function () {
                var _that = this,
                    _self = _that.element;
                 _that._processJSON();
                var _bancs_slider_icons = $("<div/>",{class:"bancs-slider-icons"}),
                    _bancs_left_slider  = $("<span/>",{class:"bancs-left-slider fa fa-angle-left"}),
                    _bancs_right_slider  = $("<span/>",{class:"bancs-right-slider fa fa-angle-right"});

                    _bancs_slider_icons.append(_bancs_left_slider);
                    _bancs_slider_icons.append(_bancs_right_slider);

                _self.append(_bancs_slider_icons);

            },

            _processJSON:function(){
                var _that = this,
                    _self = _that.element;
                    _that._createImageSliderChild();
                    _that._createImageSliderCircleIcons();

            },

            _createImageSliderChild:function(){

                var _that = this,
                    _self = _that.element,
                    _sliderImages,
                    _sliderImageLocation = _that.options.sliderImageLocation;

                var _tempDiv=$("<div/>");
                    $.each(_that.options.sliderData, function(name, content) {
                        _sliderImages =  _that.options.sliderData.sliderImages;

                        $.each(_sliderImages, function(index,object ) {
                            var _bancs_slider_image_span = $("<span/>", {id:object['id'],class: "bancs-slider-image"}),
                                _bancs_slider_image = $("<img/>",{src:_sliderImageLocation+"/"+object['name']});
                            if(index==0){
                                _bancs_slider_image_span.addClass("bancs-active-slider");
                            }
                            else{
                                _bancs_slider_image_span.addClass("noDisplay");
                            }
                            _bancs_slider_image_span.append(_bancs_slider_image);
                            _tempDiv.append(_bancs_slider_image_span);
                        });
                });

                _self.append(_tempDiv.html());
            },

            _createImageSliderCircleIcons:function(){

                var _that = this,
                    _self = _that.element,
                    _sliderImages;

                var _tempUL = $("<ul/>",{class:"bancs-slider-circle-icons"});
                    _sliderImages =  _that.options.sliderData.sliderImages;

                    $.each(_sliderImages, function(index,object ) {
                        var _bancs_slider_icon_li = $("<li/>", {class: "fa fa-circle"});

                            _bancs_slider_icon_li.attr('data-image',object['id']);

                        if(index==0){
                            _bancs_slider_icon_li.addClass("bancs-active-slider-icon");
                        }
                        _tempUL.append(_bancs_slider_icon_li);
                    });

                _self.append(_tempUL);
            },

            _attachEvents : function(){
                var _that = this,
                    _self = _that.element;

                _self.find('.bancs-left-slider').on("click",function(){
                         _that._getPreviousSliderImage(_that);
                });

                _self.find('.bancs-right-slider').on("click",function(){
                        _that._getNextSliderImage(_that);
                });

                _self.find('.bancs-slider-circle-icons li').on("click",function(){
                       var imageId = $(this).attr('data-image');
                       var _activeSlider = _self.find('.bancs-active-slider');
                        $("#"+imageId).removeClass('noDisplay').addClass('bancs-active-slider animated fadeInDown');
                       _activeSlider.removeClass('bancs-active-slider').addClass('noDisplay');
                       _activeSlider.removeClass('animated');
                       _activeSlider.removeClass('fadeInDown');
                        if(_activeSlider.hasClass('slideInLeft')){
                            _activeSlider.removeClass('slideInLeft');
                         }
                         else if(_activeSlider.hasClass('slideInRight')){
                             _activeSlider.removeClass('slideInRight');
                        }
                        var _activeIcon = _self.find('.bancs-slider-circle-icons').children('.bancs-active-slider-icon');
                        _activeIcon.removeClass('bancs-active-slider-icon');
                        $(this).addClass('bancs-active-slider-icon');

                });

            },
            _changeSliderIcon:function(parent,activeSlider){

                var _activeIcon = parent.find('.bancs-slider-circle-icons').children('.bancs-active-slider-icon');
                _activeIcon.removeClass('bancs-active-slider-icon');
                parent.find('.bancs-slider-circle-icons').children().each(function(idx, li) {
                    var item = $(li);
                    var activeID = activeSlider.attr('id'),
                        itemID = item.attr('data-image');
                    if(activeID === itemID){
                        item.addClass('bancs-active-slider-icon');
                    }
                });

            },
            _keyboardEvent: function () {
                var _that = this,
                    _self = _that.element,
                    key;

                $('body').on("keydown", function (event) {
                    key = event.keyCode;
                    switch (key) {
                        case $.bancs.keyCode.LEFT:
                            _that._getPreviousSliderImage(_that);
                            break;
                        case $.bancs.keyCode.RIGHT:
                           _that._getNextSliderImage(_that);
                            break;
                        default:
                            break;
                    }
                });


            }
            ,
            _getNextSliderImage:function(that){
                var _self = that.element;
                var _activeSlider = _self.find('.bancs-active-slider');

                if(_activeSlider.next('span.bancs-slider-image').size()>0){
                    _activeSlider.next('span.bancs-slider-image').removeClass('noDisplay').addClass('bancs-active-slider animated slideInRight');
                }
                else{
                    _self.children("span.bancs-slider-image:first").removeClass('noDisplay').addClass('bancs-active-slider animated slideInRight');
                }
                _activeSlider.removeClass('bancs-active-slider').addClass('noDisplay');
                _activeSlider.removeClass('animated');
                if(_activeSlider.hasClass('slideInLeft')){
                    _activeSlider.removeClass('slideInLeft');
                }
                else if(_activeSlider.hasClass('fadeInDown')){
                    _activeSlider.removeClass('fadeInDown');
                }
                else{
                    _activeSlider.removeClass('slideInRight');
                }
                that._changeSliderIcon(_self,_self.find('.bancs-active-slider'));
            },
            _getPreviousSliderImage:function(that){
                var _self = that.element
                var _activeSlider = _self.find('.bancs-active-slider');
                if(_activeSlider.prev('span.bancs-slider-image').size()>0){
                    _activeSlider.prev('span.bancs-slider-image').removeClass('noDisplay').addClass('bancs-active-slider animated slideInLeft');
                }
                else{
                    _self.find('span.bancs-slider-image:last').removeClass('noDisplay').addClass('bancs-active-slider animated slideInLeft');
                }
                _activeSlider.removeClass('bancs-active-slider').addClass('noDisplay');
                _activeSlider.removeClass('animated');
                if(_activeSlider.hasClass('slideInRight')){
                    _activeSlider.removeClass('slideInRight');
                }
                else if(_activeSlider.hasClass('fadeInDown')){
                    _activeSlider.removeClass('fadeInDown');
                }
                else{
                    _activeSlider.removeClass('slideInLeft');
                }
                that._changeSliderIcon(_self,_self.find('.bancs-active-slider'));
            }
        });
    }($));
   $(document).ready(function () {


   });
});


