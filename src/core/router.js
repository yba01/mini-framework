const routes = {};

function registerRoute(path, handler) {
    routes[path] = handler
}

function onRouteChange() {
    const path = window.location.pathname;
    const routeHandler = routes[path] || (() => showNotFound())
    routeHandler();
}

function navigateTo(path) {
    history.pushState(null, '', path)
    onRouteChange();
}

function showNotFound() {
    console.log('not found');
}

window.addEventListener('popstate', onRouteChange);

export { registerRoute, navigateTo }