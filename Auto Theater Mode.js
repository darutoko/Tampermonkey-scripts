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
            var button = document.querySelector("[data-a-target='player-theatre-mode-button']");
            console.log( 'Theater Mode Button: ' + button );

            if(!button) return;

            document.body.addEventListener('click', function(){
                setTimeout(function() {
                    var div;
                    // Expand player to fill space bottom
                    div = document.getElementsByClassName('highwind-video-player__container--theatre highwind-video-player__container--theatre-whispers')[0];
                    console.log('highwind-video-player__container--theatre-whispers: ' + div);
                    if(div)
                    { 
                        div.classList.remove('highwind-video-player__container--theatre-whispers');
                        div.classList.add('tw-bottom-0');
                    }
                }, 500);
            });

            var event = new MouseEvent('click', {'bubbles': true});
            button.dispatchEvent(event);

            setTimeout(function() {
                var div;
                // Hide whispers button
                div = document.querySelector(".whispers-threads-box__container");
                console.log('.whispers--theatre-mode: ' + div);
                if(div) div.remove();
                // Remove kouch extension
                div = document.querySelector(".kouch-embed-target");
                console.log(".kouch-embed-target " + div);
                if(div) div.remove();
            }, 500);
        }, 4000);
    });
})();
