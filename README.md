# GuidedIntersectionObserver

I struggled to wrap my head around Intersection Observer's root margins at first, and thought a visual aid might help. So I made one, inspired by dev tool's visualizations for flexbox and grid.

![A screenshot of a web page filled with placeholder text, showing a large, pink, semi-transparent rectangle overlay with a dashed border. The overlay is labeled "viewport."](https://user-images.githubusercontent.com/173223/236583402-20921575-7052-47e5-9d8c-16746ebc79b9.jpg)

## Usage

Include the class in your page however you like, and use it the same way you would an `IntersectionObserver` [[MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)].

Because this class extends `IntersectionObserver`, you have access to [the same API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) you would with the browser's native object.

If you specify a root element, the guide overlay will be labeled with that element's node type and, if present, the element's ID.

```js
const observer = new GuidedIntersectionObserver(callback, options);
```

Caution! I think this is best used in prototyping because for non-viewport `root` elements, there's a bit of CSS injection that could throw off that beautiful design you've been working on.
