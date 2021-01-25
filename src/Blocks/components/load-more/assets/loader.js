export class Loader {
    constructor(options) {
        this.element = options.element;
        this.url = options.url;
        this.buttonSelector = options.buttonSelector;
        this.containerSelector = options.containerSelector;
        this.pagination = options.pagination;
        this.startParam = options.startParam;
        this.limitParam = options.limitParam;
        this.limit = options.limit;
        this.start = options.start;
        this.initialLoad = options.initialLoad;
    }

    init() {
        let button = this.element.querySelector(this.buttonSelector)
        let container = this.element.querySelector(this.containerSelector);

        container.innerHTML = '';

        const loadMoreContent = async () => {
            let urlToFetch = this.url;
    
            if (this.pagination) {
                const startParams = this.url.includes('?') ? '&' : '?';
    
                urlToFetch = `${this.url}${startParams}${this.startParam}=${this.start}&${this.limitParam}=${this.limit}`
            }
    
            const data = await fetch(urlToFetch);
    
            let contents = await data.text();
    
            contents = JSON.parse(contents);
    
            container.innerHTML += contents;
    
            this.start += this.limit;
        };

        button.addEventListener('click', loadMoreContent);

        if (this.initialLoad == 'true') {
            loadMoreContent();
        }
    }
}