define("bFlowDashBoard", ["jquery", "widgetFactory"], function ($) {
    "use strict";
    (function ($, undefined) {
        $.widget('bFlow.DashBoard', {
            options: {
               dashBoard:{}
            },
            classes: {
                dashBoard: "dashBoard"
            },

            _create: function () {
                var _that = this,
                    _self = _that.element;
                _that._createElement();
                _that._processJSON();
                _that._addCustomization();
                var customize_link = $("<a/>",{href:"#",text:"Customize your homepage",class:"dasboard-customize-link"});
                _self.append(customize_link);
                _that._attachEvents();
            },

            _createElement: function () {
                var _that = this,
                    _self = _that.element,
                    _collapsible_icon = $("<span/>", {class: "dashBoard-collapsible-icon fa fa-caret-down"}),
                    _collapsible_span = $("<span/>", {class: "dashBoard-collapsible", text: "Collapse all", clickedContainer: "createList"}),
                    _divProperty = $("<div/>",{id:"dashBoard-property"});
                _divProperty.append(_collapsible_icon);
                _divProperty.append(_collapsible_span);
                var div=$(document.createElement("div"));
                div.append(_divProperty);
                var _dashboard_column1 = $("<ul/>",{id:"dashboard-column1",class:"dashboard-block"}),
                    _dashboard_column2 = $("<ul/>",{id:"dashboard-column2",class:"dashboard-block"}),
                    _dashboard_column3 = $("<ul/>",{id:"dashboard-column3",class:"dashboard-block"});
                div.append(_dashboard_column1);
                div.append(_dashboard_column2);
                div.append(_dashboard_column3);
                _self.prepend(div);
            },
            _processJSON:function(){
                var _that = this,
                    _self = _that.element;

                $.each(_that.options.dashBoard, function(index, element) {
                    _that._createDashBoardChild(index,element);
                });
            },
            _addCustomization:function(){
                var _that = this,
                    _self = _that.element;
                var tempDiv=$(document.createElement("div"));
                var customization_block = $("<div/>",{id:"customize",class:"dashBoard-customize"});
                var custom_form = $("<form/>",{id:"customization-form"});
                var form_content = $("<ul/>",{class:"dashboard-custom-ul"});
                $.each(_that.options.dashBoard, function(index, element) {
                        var widget_option_li = $("<li/>",{class:"dashboard-custom-li",text:index}),
                            widget_option = $("<input/>",{type:"checkbox"});
                        widget_option_li.append(widget_option);
                    form_content.append(widget_option_li);
                });
                custom_form.append(form_content);
                var update_link = $("<a/>",{href:"#",text:"Update",class:"dasboard-update-link"});
                custom_form.append(update_link);
                customization_block.append(custom_form);
                tempDiv.append(customization_block);

                _self.append(tempDiv.html());
            },

            _attachEvents : function(){
                var _that = this,
                    _self = _that.element;
                $( ".dashboard-block" ).sortable({connectWith: ".dashboard-block" ,containment:_self,placeholder: "portlet-placeholder"}).disableSelection();

                $(".collapsible").click(function(){
                    $(this).parent().siblings('.dashboard-content').slideToggle();
                });

                $(".dashBoard-collapsible").click(function(){
                    $(this).toggleClass("toggled");
                    if($(this).hasClass("toggled")){
                        $(this).text("Expand all");
                        $('.dashboard-content').hide();
                    }else{
                        $(this).text("Collapse all");
                        $('.dashboard-content').show();
                    }
                });
                $(".dasboard-customize-link").on("click",function(e){
                     _self.find("#customize").toggle();
                });
            },
      /*      getWidgetVisibility : function(element){
                var elementContent = $(element).find('.dashboard-content');
                if(elementContent.is(":visible")){
                    return true;
                }
                return false;
            },*/

            _createDashBoardChild:function(title,content){
                var _that = this,
                    _self = _that.element,
                    _widgetLocation,
                    _dashboard_item = $("<ul/>",{class:"dashboard-item"}),
                    _dashboard_header=$("<li/>",{class:"dashboard-header",text:title}),
                    _dashboard_item_close = $("<span/>",{class:"close fa fa-times"}),
                    _dashboard_item_collapsible=$("<span/>",{class:"collapsible fa fa-caret-down"}),
                    _dashboard_content = $("<li/>",{class:"dashboard-content",text:content}),
                    _dashboard_child = $("<li/>",{class:"dashBoard-child"});

                    _dashboard_header.prepend(_dashboard_item_collapsible);
                    _dashboard_header.prepend(_dashboard_item_close);
                    _dashboard_item.prepend(_dashboard_header);
                    _dashboard_item.append(_dashboard_content);
                    _dashboard_child.append(_dashboard_item);

                $.each(_that.options.dashBoard, function(name, content) {
                    if(name=="widgetLocation"){
                        _widgetLocation = content;
                        $.each(_widgetLocation, function(link, location) {
                               if(link==title){
                                   var index = location[0];
                                   _dashboard_child.attr("row-index",location[1]);
                                   $("#dashboard-column"+index).append(_dashboard_child);
                               }
                        });
                    }
                });


            }
        });
    }($));
    $(document).ready(function () {
        $(document).find("input[data-role=bancs\\.DashBoard]").each(function () {
            var element = $(this);
            element.DashBoard();
        });
    });
});

