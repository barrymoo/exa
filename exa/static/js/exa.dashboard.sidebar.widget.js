/*"""
Dashboard Widget Sidebar GUI
`````````````````````````````

*/
'use strict';


require.config({
    shim: {
        'nbextensions/exa/static/js/libs/dat.gui.min': {
            exports: 'dat'
        }
    }
});


define([
    'nbextensions/exa/static/js/libs/dat.gui.min'
], function(
    dat
) {
    var sidebar_css_string = ".dg {\
        color: black;\
        font: 400 12px Verdana, Arial, sans-serif;\
        text-shadow: white 0 0 0;\
    }\
    .hue-field {\
        width: 10;\
    }\
    .dg .c .slider {\
        background: white\
    }\
    .dg .c .slider:hover {\
        background: white\
    }\
    .dg .c input[type=text] {\
        background: white;\
        border-color: lightgrey;\
        border-radius: 2px;\
        border-style: solid;\
        border-width: 1.1px;\
        color: black\
    }\
    .dg .c input[type=text]:active {\
        background: white;\
        color: black;\
        outline-color: black;\
        outline-style: solid;\
        outline-width: 1.5px\
    }\
    .dg .c input[type=text]:focus {\
        background: white;\
        color: black;\
        outline-color: black;\
        outline-style: solid;\
        outline-width: 1.5px\
    }\
    .dg .c input[type=text]:hover {\
        background: white;\
        color: black;\
        outline-color: black;\
        outline-style: solid;\
        outline-width: 1.5px\
    }\
    .dg .closed li.title {\
        background: -moz-linear-gradient(center top, #ededed 34%, #dfdfdf 71%);\
        background: -ms-linear-gradient(top, #ededed 34%, #dfdfdf 71%);\
        background: -webkit-gradient(linear, left top, left bottom, color-stop(34%, #ededed),\
                     color-stop(71%, #dfdfdf));\
        background-color: #ededed;\
        border: 1px solid #dcdcdc;\
        border-radius: 2px;\
        box-shadow: inset 1px 0 9px 0 white;\
        color: #777;\
        text-shadow: 1px 0 0 white\
    }\
    .dg .cr.boolean:hover {\
        background: white;\
        border-bottom: 1px solid white;\
        border-right: 1px solid white\
    }\
    .dg .cr.function:hover {\
        background: white;\
        border-bottom: 1px solid white;\
        border-right: 1px solid white\
    }\
    .dg li.cr {\
        background: #fafafa;\
        border-bottom: 1px solid white;\
        border-right: 1px solid white\
    }\
    .dg li.cr:hover {\
        background: white;\
        border-bottom: 1px solid white;\
        border-right: 1px solid white\
    }\
    .dg li.title, .dg closed {\
        background: -moz-linear-gradient(center top, #ededed 34%, #dfdfdf 71%);\
        background: -ms-linear-gradient(top, #ededed 34%, #dfdfdf 71%);\
        background: -webkit-gradient(linear, left top, left bottom, color-stop(34%, #ededed),\
                     color-stop(71%, #dfdfdf));\
        background-color: #ededed;\
        border: 1px solid #dcdcdc;\
        border-radius: 2px;\
        box-shadow: inset 1px 0 9px 0 white;\
        color: black;\
        text-shadow: 1px 0 0 white\
    }\
    .dg li.title:hover {\
        outline-color: black;\
        outline-style: solid;\
        outline-width: 1.5px\
    }\
    .dg.main .close-button {\
        background: -moz-linear-gradient(center top, #ededed 34%, #dfdfdf 71%);\
        background: -ms-linear-gradient(top, #ededed 34%, #dfdfdf 71%);\
        background: -webkit-gradient(linear, left top, left bottom, color-stop(34%, #ededed),\
                     color-stop(71%, #dfdfdf));\
        background-color: #ededed;\
        border: 1px solid #dcdcdc;\
        border-radius: 2px;\
        box-shadow: inset 1px 0 9px 0 white;\
        color: black;\
        height: 27px;\
        line-height: 27px;\
        text-align: center;\
        text-shadow: 1px 0 0 white\
    }\
    .dg.main .close-button:hover {\
        outline-color: black;\
        outline-style: solid;\
        outline-width: 1.5px\
    }";

    var sidebar = function(sidebarwidth) {
        /*"""
        Dashboard Widget Sidebar
        `````````````````````````
        */
        var self = this;
        this.gui = new dat.GUI({autoPlace: false, width: sidebarwidth});
        this.gui_style_element = document.createElement('style');
        this.gui_style_element.innerHTML = sidebar_css_string;
        $(this.gui.domElement).css('position', 'relative');
        $(this.gui.domElement).css('top', 0);
        $(this.gui.domElement).css('left', 0);
        this.gui.addFolder('Sessions');
        this.gui.addFolder('Russians');
    };

    return sidebar;
});