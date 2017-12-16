// ==UserScript==
// @name         Auto Theater Mode
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.twitch.tv/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    window.onload = function() {
        setTimeout(function () {
            var div = document.getElementById('js-controls-bottom');
            console.log( '#js-controls-bottom: ' + div );
            if(div === null) return;

            var button;// = div.childNodes[0].childNodes[1].childNodes[2];
            var children = div.childNodes[0].childNodes;
            for(var i=0; i < children.length; i++) {
                if (children[i].className === "player-buttons-right") {
                    button = children[i].childNodes[2];
                    break;
                }
            }
            console.log( 'button: ' + button );

            var event = new MouseEvent('click', {'bubbles': true});
            button.dispatchEvent(event);
        }, 6000);
    };
})();
