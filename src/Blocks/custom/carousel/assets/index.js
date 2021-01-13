import domReady from '@wordpress/dom-ready';

domReady(() => {
	const selector = '.js-block-carousel';
	const elements = document.querySelectorAll(selector);

	if (elements.length) {
		const eventName = new CustomEvent('carouselInit');

		import('./carousel-slider').then(({ CarouselSlider }) => {
			[...elements].forEach((element) => {
				console.log(element);
				console.log(`${selector}-next-arrow`);
				console.log(`${selector}-prev-arrow`);
				console.log(document.querySelector(`${selector}-prev-arrow`));
				console.log(document.querySelector(`${selector}-next-arrow`));
				const carouselSlider = new CarouselSlider({
					element,
					blockClass: 'block-carousel',
					nextElement: `${selector}-next-arrow`,
					prevElement: `${selector}-prev-arrow`,
					paginationElement: document.querySelector(`${selector}-pagination`),
					eventName,
				});
				console.log(carouselSlider);
				carouselSlider.init();
			});
		});
	}
});
