import domReady from '@wordpress/dom-ready';

domReady(() => {
	const selector = '.js-load-more'
	let elements = document.querySelectorAll(selector);

	if (elements.length) {
		import('./loader').then(({ Loader }) =>
			[...elements].forEach((element) => {
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
						initialLoad: element.dataset.initialLoad
					}
				);

				loader.init();
			}));
	}
});