class GuidedIntersectionObserver extends IntersectionObserver {
	constructor(callback, options = {}) {
		super(callback, options);
		this.#createGuide();
	}

	#createGuide = () => {
		const rootElement = this.root || document.body;
		const rootId = (rootElement.id ? `#${rootElement.id}` : '');
		const inset = this.#convertRootMarginToInset();
		const guide = document.createElement('div');
		const guideLabel = (this.root ? this.root.nodeName.toLowerCase() : 'viewport');
		const guidePosition = this.root ? 'absolute' : 'fixed';
		const guideStyles = [
			[ 'position', guidePosition ],
			[ 'inset', inset ],
			[ 'color', '#F012BE' ],
			[ 'background-color', '#F012BE22' ],
			[ 'background-image', 'radial-gradient(#F012BE22 1px, transparent 1px)' ],
			[ 'background-size', '10px 10px' ],
			[ 'border', '2px dashed #F012BE' ],
			[ 'box-sizing', 'content-box' ],
			[ 'z-index', '999' ],
			[ 'overflow', 'hidden' ],
		]

		if (this.root) {
			rootElement.style.position = 'relative';
		}

		guide.style = guideStyles.map(rule => `${rule[0]}:${rule[1]}`).join(';');
		guide.innerText = `${guideLabel}${rootId}`;
		rootElement.append(guide);
	};

	#convertRootMarginToInset = () => {
		const measures = this.rootMargin.split(' ').map(measure => {
			const matches = measure.match(/^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/);
			const int = matches[1];
			const unit = matches[2];

			return `${int * -1}${unit}`;
		});
		return measures.join(' ');
	};
}

module.exports = GuidedIntersectionObserver;
