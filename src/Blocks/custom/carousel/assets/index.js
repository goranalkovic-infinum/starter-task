import domReady from '@wordpress/dom-ready';

domReady(() => {
	const selector = 'js-block-carousel';
	const elements = document.querySelectorAll(`.${selector}`);

	if (elements.length) {
		const eventName = new CustomEvent('carouselInit');

		import('./carousel-slider').then(({ CarouselSlider }) => {
			[...elements].forEach((element) => {
				const carouselSlider = new CarouselSlider({
					element,
					slideClass: `${selector}-item`,
					nextElement: `.${selector}-icon-next`,
					prevElement: `.${selector}-icon-prev`,
					paginationElement: `.${selector}-pagination`,
					swipeHandler: `.${selector} .swiper-wrapper`,
					eventName,
				});
				carouselSlider.init();
			});
		});
	}
});