# SpaceX App 

An application which would help users list and browse all launches by SpaceX program.

Deployed URL : [https://spacex-launch-programs-kushal.herokuapp.com/](https://spacex-launch-programs-kushal.herokuapp.com/)

[![N|Solid](https://spacex-launch-programs-kushal.herokuapp.com/assets/android-icon-96x96.png)](https://spacex-launch-programs-kushal.herokuapp.com/)

## Application features
- Browse all launches by SpaceX Program.
- Filter by which year the launches took place.
- Filter by successful/unsuccessful launches of the program.
- Filter by successful/unsuccessful landing of the program.
- A fully functional PWA application
- Fast and reliable with [google lighthouse](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fspacex-launch-programs-kushal.herokuapp.com%2F) score of >95
- [W3C complainant](https://validator.w3.org/nu/?doc=https%3A%2F%2Fspacex-launch-programs-kushal.herokuapp.com%2F)
- [WCAG 2.0 (level AA) verified](https://achecker.ca/checker/index.php)
 
### Pagespeed

![N|Solid](https://res.cloudinary.com/doxldod5y/image/upload/v1600639615/spacex/pagespeed_mobile_d7xk2i.png)

### Web Accessibility

![N|Solid](https://res.cloudinary.com/doxldod5y/image/upload/v1600640025/spacex/accessibility_boti0e.png)

### W3C Complaiance

![N|Solid](https://res.cloudinary.com/doxldod5y/image/upload/v1600640191/spacex/w3c_wd7nar.png)

## Tech stack

- ReactJS
- Redux
- Redux thunk middleware
- NodeJS
- Express
- SCSS
- Webpack

## Code quality checks
- Jest test runner
- Enzyme test utility
- Eslint
- Airbnb eslint config
- Prettier

## Approach

Using `renderToString` API provided by `react-dom/server` to render the React application in Server side. The server rendered react app is then send to the browser using a `Express` server.

The React app is again hydrated in client side after the server rendered html is fetched by the browser using `hydrate` API provided by `react-dom`.

The server rendered state is added to the `window.__STATE__` object while being sent to the browser. On initial hydration the client uses the same state object to repopulate the store. This helps maintain sync between server state and client state.

On applying filters in the client side the redux store is updated with filtered data and the URL is updated using `window.history.pushState`. Refreshing the browsers sends the applied filters to the server, where `req.query` object is parsed and Application is rendered using the filtered data and eventually sent to the browser.

## Performance Optimizations

**Webpack** - For a optimized production build, Bundling both Client code and Server code in a distribution directory. The server is then ran from the distribution directory.

**Image** -  Using Cloudinary CDN for optimized WEBP images. Using[ cloudinary remote upload api](https://cloudinary.com/documentation/fetch_remote_images#auto_upload_remote_resources) to automatically upload images fetched from API response to cloudinary CDN.

**Lazyload** - Lazyloading images using newly introduced [browser native lazy-loading](https://web.dev/native-lazy-loading/)

**CLS** - Following guidelines on cumulative layout shift to achieve a perfect score of 0.

**Server response time** - Optimizing server code using webpack to reduce initial server response time.

## Instructions

**Installation**
Install the dependencies and devDependencies and start the server.
```sh
$ npm install
```

**Development**
```sh
$ npm run dev
```

**Production**
For production build:
```sh
$ npm run build
```
Start production server
```sh
$ npm run start
```

---

> Author: Kushal Mukherjee
> [http://kushalm.dev/](http://kushalm.dev/)


