require.config({
    //All the dependencies are resolved w.r.t to the script folder
    baseUrl: "assets/js/",
    paths: {
        //jQuery library
        jquery: "jquery-1.8.3",
        widgetFactory: "jquery-ui.min",
        jqueryPlugin: "jquery.plugin.min",
        Overlay: "Overlay",
        draggable: "draggable",
        bFlowDashBoard:"bFlowDashBoard",
        KeyCode: "KeyCode",
        bFlowImageSlider:"bFlowImageSlider",
        home: "home"
    },
    shim: {
        "widgetFactory": ["jquery"],
        "jqueryPlugin": ["jquery"],
        "draggable": ["jquery"],
        "bFlowDashBoard":["jquery","widgetFactory"],
        "bFlowImageSlider":  ["jquery","widgetFactory"],
        "home":["jquery","widgetFactory","jqueryPlugin","draggable","bFlowDashBoard","bFlowImageSlider"]
    },
    waitSeconds: 0
});
require([
    'jquery',"jqueryPlugin","draggable","bFlowDashBoard", "Overlay","KeyCode","bFlowImageSlider","home"],
    function ($) {
        "use strict";
        require(["jquery","jqueryPlugin","draggable","bFlowDashBoard", "Overlay","KeyCode","bFlowImageSlider","home"],
            function () {
            });
    });



