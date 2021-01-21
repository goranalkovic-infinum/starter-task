import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export class CarouselSlider {
	constructor(options) {
		this.element = options.element;
		this.blockClass = options.blockClass;
		this.nextElement = options.nextElement;
		this.prevElement = options.prevElement;
		this.paginationElement = options.paginationElement;
		this.eventName = options.eventName;
		this.swipeHandler = options.eventName;
	}

	init() {
		const item = this.element;

		new Swiper(item, {
			loop: item.getAttribute('data-swiper-loop'),
			slideClass: `${this.blockClass}__item`,
			slidesPerView: 2,
			spaceBetween: 30,
			keyboard: {
				enabled: true,
			},
			swipeHandler: this.swipeHandler,
			centeredSlides: true,
			grabCursor: false,
			breakpointsInverse: true,
			threshold: 20,
			navigation: {
				nextEl: this.nextElement,
				prevEl: this.prevElement,
			},
			pagination: {
				el: this.paginationElement,
				type: 'fraction',
				renderFraction: (currentClass, totalClass) => {
					return `<span class="${currentClass}"></span><span>/</span><span class="${totalClass}"></span>`;
				},
			},
			on: {
				init: () => {
					window.dispatchEvent(this.eventName);
				},
			},
			// the object key represents minimum width where the breakpoint properties apply
			breakpoints: {
				1: {
					slidesPerView: 1,
				},
				849: {
					slidesPerView: 2,
				},
				1470: {
					slidesPerView: 3,
				},
				2001: {
					slidesPerView: 5,
				},
			}
		});
	}
}
