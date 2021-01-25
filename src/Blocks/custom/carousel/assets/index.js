import domReady from '@wordpress/dom-ready';

domReady(() => {
	const selector = '.js-block-carousel';
	const elements = document.querySelectorAll(selector);

	if (elements.length) {
		const eventName = new CustomEvent('carouselInit');

		import('./carousel-slider').then(({ CarouselSlider }) => {
			[...elements].forEach((element) => {
				const carouselSlider = new CarouselSlider({
					element,
					blockClass: 'block-carousel',
					nextElement: `.block-carousel__icon--next`,
					prevElement: `.block-carousel__icon--prev`,
					paginationElement: `.block-carousel__pagination`,
					swipeHandler: `${selector} .swiper-wrapper`,
					eventName,
				});
				carouselSlider.init();
			});
		});
	}
});