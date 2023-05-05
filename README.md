# GuidedIntersectionObserver

I struggled to wrap my head around Intersection Observer's root margins at first, and thought a visual aid might help. So I made one, inspired by dev tool's visualizations for flexbox and grid.

## Usage

Include the class in your page however you like, and use it the same way you would an `IntersectionObserver` [[MDN](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver)].

Because this class extends `IntersectionObserver`, you have access to [the same API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) you would with the browser's native object.

```js
const observer = new GuidedIntersectionObserver(callback, options);
```

Caution! I think this is best used in prototyping because for non-viewport `root` elements, there's a bit of CSS injection that could throw off that beautiful design you've been working on.
