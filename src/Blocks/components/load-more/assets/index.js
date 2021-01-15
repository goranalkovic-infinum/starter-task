import domReady from '@wordpress/dom-ready';

domReady(() => {
	let elements = document.querySelectorAll('.load-more');

	for (let element of elements) {
		const url = element.dataset.url;
		const containerClass = element.dataset.container;
		const button = element.querySelector('button');

		let container = document.querySelector(`.${containerClass}`);

		const loadMoreContent = async (e) => {
			e.preventDefault();

			console.log(url);
			console.log(containerClass);

			let data = await fetch(url);
			let contents = await data.text();

			container.innerHTML += contents;
		}

		button.addEventListener('click', loadMoreContent);
	}
});
