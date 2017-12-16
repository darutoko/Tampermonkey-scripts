// ==UserScript==
// @name         Add Theater Mode Link
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Script swaps match info link href with href for Theater mode
// @author       You
// @match        *://news.sportbox.ru/Vidy_sporta/Avtosport/Formula_1/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var selector = '#node-header > div.node-header__video-wrapper > div.node-header__video > iframe';
    if ($(selector).length == 0) return; 
	var href = $(selector).attr('src');
	$('#node-header > div.node-header__video-wrapper > div.node-header__match > div > div > span > a').attr('href', href);
})();