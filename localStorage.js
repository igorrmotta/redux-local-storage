export const loadState = () => {
    try {
        const serializeData = localStorage.getItem('state');
        if (serializeData === null) {
            return undefined;
        }

        return JSON.parse(serializeData);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializeData = JSON.stringify(state);
        localStorage.setItem('state', serializeData);
    } catch (err) {
        //Ignore write errors
    }
}

export const clearState = () => {
    try {
        localStorage.setItem('state', {});
    } catch (err) {
        //Ingore
    }
}
