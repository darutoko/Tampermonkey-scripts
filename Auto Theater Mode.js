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
            
            var event = new MouseEvent('click', {'bubbles': true});
            button.dispatchEvent(event);
        }, 4000);
    });
    window.addEventListener('load', function() {
        setTimeout(function() {
            var div;
            // Hide whispers button
            div = document.getElementsByClassName('whispers--theatre-mode')[0];
            console.log('.whispers--theatre-mode: ' + div);
            div.style.display = 'none';
            // Expand player to fill space
            div = document.getElementsByClassName('video-player--logged-in')[0];
            console.log('.video-player--logged-in: ' + div);
            div.classList.remove('video-player--logged-in');
        }, 6000);
    });
})();
