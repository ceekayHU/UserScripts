// ==UserScript==
// @name        Apple Trailers Downloader
// @author      ceekay
// @namespace   ceekay 2021
// @version      1.1
// @description Adds a button to download the trailer .MOVs using savieo.com
// @match       *://trailers.apple.com/trailers/*
// @grant       GM_addStyle
// ==/UserScript==

/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/
var zNode       = document.createElement ('div');
//zNode.innerHTML = '<button id="myButton" type="button">'
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'download trailer</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    /*--- For our dummy action, we'll just add a line of text to the top
        of the screen.
    var zNode       = document.createElement ('p');
    zNode.innerHTML = 'The button was clicked.';
    document.getElementById ("myContainer").appendChild (zNode);
    */
    location.href = "https://savieo.com/"+window.location.href;
}

//--- Style our newly added elements using CSS.
GM_addStyle ( `
    #myContainer {
        position:               absolute;
        top:                    0;
        left:                   0;
        font-size:              20px;
        background:             orange;
        border:                 none;
        margin:                 10px;
        opacity:                0.9;
        z-index:                1100;
        padding:                5px 6px;
        border-radius:          8px;
        box-shadow:             2px 2px 3px black;
    }
    #myButton {
        cursor:                 pointer;
        font:                   normal 12px/18px Helvetica;
        color:                  black;
        border:                 1px solid black;
        background-color:       transparent;
        border-radius:          4px;
    }
    #myButton:hover {
        cursor:                 pointer;
        font:                   normal 12px/18px Helvetica;
        color:                  orange;
        border:                 1px solid black;
        background-color:       black;
        border-radius:          4px;
    }
` );
