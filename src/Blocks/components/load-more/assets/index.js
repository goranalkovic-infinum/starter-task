async function load() { 
	let domReady = await import('@wordpress/dom-ready');

	domReady.default(() => {
		const selector = '.js-load-more'
		let elements = document.querySelectorAll(selector);
	
		for (let element of elements) {
			const url = element.dataset.url;
			const button = element.querySelector('button');
			const pagination = element.dataset.paginated;
			const startParam = element.dataset.startItemParam;
			const limitParam = element.dataset.perPageParam;
			const limit = parseInt(element.dataset.perPage);
			let start = parseInt(element.dataset.startItem);
	
			console.log(element.dataset);
	
			let container = document.querySelector(`${selector}--container`);
	
			container.innerHTML = '';
	
			const loadMoreContent = async (e) => {
				e.preventDefault();
	
				let urlToFetch = url;
	
				if (pagination) {
					const startParams = url.includes('?') ? '&' : '?';
					urlToFetch = `${url}${startParams}${startParam}=${start}&${limitParam}=${limit}`
				}
	
				console.log(urlToFetch)
	
				let data = await fetch(urlToFetch);
	
				let contents = await data.text();
	
				contents = JSON.parse(contents);
	
				container.innerHTML += contents;
	
				start += limit;
			}
	
			button.addEventListener('click', loadMoreContent);
		}
	});
}

load();