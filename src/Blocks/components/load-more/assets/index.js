import domReady from '@wordpress/dom-ready';

domReady(() => {
	let elements = document.querySelectorAll('.load-more');

	let start = 5;
	let limit = 4;

	for (let element of elements) {
		const url = element.dataset.url;
		const containerClass = element.dataset.container;
		const button = element.querySelector('button');

		let container = document.querySelector(`.${containerClass}`);

		const loadMoreContent = async (e) => {
			e.preventDefault();

			let data = await fetch(`${url}&_limit=${limit}&_start=${start}`);
			let contents = await data.text();

			contents = JSON.parse(contents);

			container.innerHTML += contents;

			start += limit;
		}

		button.addEventListener('click', loadMoreContent);
	}
});
