import { writable } from "svelte/store";

export const docTitle = writable("");

export const curSearchParam = writable("");

const createGettableAppendableWriteableStore = (initialVal) => {
    let val = initialVal;
    const { subscribe, set, update } = writable(val);
    var newSet = (newVal) => {
        val = newVal;
        return set(val);
    };
    const get = () => val;
    const append = (app) => {
        set(`${val}${app}`);
    };
    return { subscribe, set: newSet, update, get, append };
};
export const curRoute = createGettableAppendableWriteableStore("");