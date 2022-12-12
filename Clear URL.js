// ==UserScript==
// @name         Clear URL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Clear IMDB URL from params part
// @author       You
// @match        https://www.imdb.com/title/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=imdb.com
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	let current_url = window.location.href.toString()
	let re = new RegExp('/\\?.*$')

	if (!re.test(current_url)) return

	let new_url = current_url.replace(re, '/')
	window.location.replace(new_url)
})();