import domReady from '@wordpress/dom-ready';

domReady(async () => {
	const selector = '.js-load-more'
	let elements = document.querySelectorAll(selector);

	let { Loader } = await import('./loader');

	if (elements.length) {
		for (let element of elements) {
			const loader = new Loader(
				{
					element,
					url: element.dataset.url,
					buttonSelector: `${selector}-button`,
					containerSelector: `${selector}-container`,
					pagination: element.dataset.paginated,
					startParam: element.dataset.startItemParam,
					limitParam: element.dataset.perPageParam,
					start: parseInt(element.dataset.startItem),
					limit: parseInt(element.dataset.perPage),
				}
			);

			loader.init();
		}
	}
}
);