define("home", ["jquery", ""], function ($) {
    "use strict";
    (function ($, undefined) {
        $(document).ready(function () {
            var jsonContent = {
                "Quick actions": {
                    "search": ["User", "Account"],
                    "create": ["User", "FeeStructure"]
                },
                "Watchlist": {
                    "User": [1989, 2004],
                    "Account": [8909, 67365]
                },
                "Search": [
                    {
                        "flowName": "User",
                        "searchCriteria": ["loginName"]
                    },
                    {
                        "flowName": "Account",
                        "searchCriteria": ["accountNumber"]
                    }
                ],
                "Latest Activity": ["Authorised User ZYZ", "Released Account 23456"],
                "Last viewed": {
                    "User": [7898, 6576],
                    "Account": [3876, 5887]
                },
                "widgetLocation":{
                    "Quick actions":[1,0],
                    "Watchlist":[1,1],
                    "Search":[2,0],
                    "Latest Activity":[2,1],
                    "Last viewed":[3,1]
                }
            };

            var sliderData = {
                "sliderImages": [
                   /* {
                        "id": "image1",
                        "name": "slider1.jpg"
                    },*/
                  /*  {
                        "id": "image2",
                        "name": "slider2.jpg"
                    },*/
                    {
                        "id": "image3",
                        "name": "section1.jpg"
                    },
                    {
                        "id": "image4",
                        "name": "section2.jpg"
                    },
                    {
                        "id": "image5",
                        "name": "section3.jpg"
                    },
                    {
                        "id": "image6",
                        "name": "section4.jpg"
                    }
                   /* {
                        "id": "image7",
                        "name": "slider7.png"
                    }*/
                ]
            };

            $(".dashBoard").DashBoard({dashBoard: jsonContent});

            $(".bancs-slider").ImageSlider({sliderData:sliderData});

            $(document).find('.navbar-right').on("click",function(){
                $('.login-info').toggle();
            });

            $(document).find('.thumb').on("click",function(){
                $('body').Overlay();
            });


        });
    }($));
});
