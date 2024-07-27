//manage local storage data base
const setDb = (id, value) => {


    let jobCart;
    const storedCart = localStorage.getItem(value);
    if (storedCart) {
        jobCart = JSON.parse(storedCart)

    } else {
        jobCart = {}
    }


    const quantity = jobCart[id];
    if (quantity) {
        alert('already exist')

    } else {
        jobCart[id] = 1
    }
    localStorage.setItem(value, JSON.stringify(jobCart))
}

const removeDb = (id, value )=> {
    const storedCart = localStorage.getItem(value);
    if (storedCart) {
        const jobCart = JSON.parse(storedCart);
        if (id in jobCart) {
            delete jobCart[id]
            localStorage.setItem(value, JSON.stringify(jobCart))
        }
    }
}
export { setDb, removeDb }