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
    window.addEventListener('load', function() {
        setTimeout(function() {
            var button = document.getElementsByClassName('qa-theatre-mode-button')[0];
            console.log( '.qa-theatre-mode-button: ' + button );

            if(!button) return;

            button.addEventListener('click', function(){
                setTimeout(function() {
                    var div;
                    // Hide whispers button
                    div = document.getElementsByClassName('whispers--theatre-mode')[0];
                    console.log('.whispers--theatre-mode: ' + div);
                    if(div) div.style.display = 'none';
                    // Expand player to fill space bottom
                    div = document.getElementsByClassName('video-player--logged-in')[0];
                    console.log('.video-player--logged-in: ' + div);
                    if(div) div.classList.remove('video-player--logged-in');
                }, 500);
            });

            var event = new MouseEvent('click', {'bubbles': true});
            button.dispatchEvent(event);
        }, 4000);
    });
})();
