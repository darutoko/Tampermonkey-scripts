// ==UserScript==
// @name         Copy Grammar Data
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Copy grammar description data in to clipbord
// @author       You
// @match        https://japanesetest4you.com/flashcard/learn-jlpt-n*-grammar-*/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=japanesetest4you.com
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	window.addEventListener('load', function() {
		let lines = [];
		console.log('Script started.');
		let string = this.document.querySelector('.title').textContent.split(': ')[1];
		lines.push('## ' + string);

		let paragraphs = this.document.querySelectorAll('.entry.clearfix > p');
		lines.push(paragraphs[0].textContent);

		lines.push('**Formation:**');
		string = paragraphs[2].innerHTML.split('<br>').join("\n");
		lines.push(string);

		lines.push('**Example sentences:**');

		navigator.clipboard.writeText(lines.join("\n"))
			.then(() => {
				console.log('Text copied to clipboard');
			})
			.catch((error) => {
				console.error('Error copying text: ', error);
			});

	});
})();
