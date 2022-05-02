// ==UserScript==
// @name         Ignore Users
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ignore and downvote blacklisted users
// @author       You
// @match        https://glav.su/forum/*/*
// @grant        none
// ==/UserScript==

(function() {
		'use strict';
		window.addEventListener('load', function() {
			var users = ['https://glav.su/members/16811/', 'https://glav.su/members/1482/', 'https://glav.su/members/25900/', 'https://glav.su/members/9955/', 'https://glav.su/members/29612/',
			'https://glav.su/members/8634/', 'https://glav.su/members/2633/', 'https://glav.su/members/35969/', 'https://glav.su/members/25900/', 'https://glav.su/members/11505/', 'https://glav.su/members/146/'];
			
			document.querySelectorAll('.a-mp-m').forEach(message => {
				// Skip if user is not on the list
				if (!users.includes( message.querySelector('.a-mp-m-an > a').href )) return;
				// Hide message
				let childrenBlocks = message.children;
				for (let i = 1; i < childrenBlocks.length; i++)
						childrenBlocks[i].setAttribute('style', 'display: none;');
				// Downvote message if possible
				// let button = message.querySelector('.js-ml-m-v-nb');
				// console.log('.js-ml-m-v-nb: ' + !!button);
				// if (button) button.dispatchEvent(event);
			});
			// Hide junk at the bottom of the page
			let div = this.document.querySelector(".bl-f.c-m-t-1rem");
			if(div) div.setAttribute('style', 'display: none;');
			div = this.document.querySelector(".bl-ptrs");
			if(div) div.setAttribute('style', 'display: none;');
			div = this.document.querySelector(".bl-a.c-m-b-1rem.c-m-t-1rem");
			if(div) div.setAttribute('style', 'display: none;');
			div = this.document.querySelector(".l-f");
			if(div) div.setAttribute('style', 'display: none;');
			document.querySelectorAll(".bl-mp-bl:not(.c-p-1rem)").forEach(div => {
				div.setAttribute('style', 'display: none;');
		});
		});
})();
