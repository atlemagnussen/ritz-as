import Home from "../views/Home.svelte";
import Order from "../views/Order.svelte";

export const findComponent = (path) => {
    const r = findRoute(path);
    return r.component;
};

export const findRoute = (path) => {
    const r = routes.filter(r => r.path === path);
    if (!r || r.length === 0) {
        const nf404 = notFound(path);
        return nf404;
    }
        
    return r[0];
};

const notFound = (path) => {
    return {
        path, 
        name: "Not Found",
        component: NotFound
    };
};
export const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "bestill",
        name: "Bestill",
        component: Order,
    }
];
