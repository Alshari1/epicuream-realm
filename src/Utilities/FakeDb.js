// use local storage to manage cart data
const addToLS = id => {
    let chefCart = getChefCart();
    // add quantity
    const quantity = chefCart[id];
    if (!quantity) {
        chefCart[id] = 1;
    }
    localStorage.setItem('chef-cart', JSON.stringify(chefCart));
}

const removeFromLS = id => {
    const chefCart = getChefCart();
    if (id in chefCart) {
        delete chefCart[id];
        localStorage.setItem('chef-cart', JSON.stringify(chefCart));
    }
}

const getChefCart = (value) => {
    let chefCart = {};

    //get the chef cart from local storage
    const storedCart = localStorage.getItem(value);
    if (storedCart) {
        chefCart = JSON.parse(storedCart);
    }
    return chefCart;
}

// const deletechefCart = () => {
//     localStorage.removeItem('chef-cart');
// }

export {
    addToLS,
    removeFromLS,
    getChefCart,
    // deletehefCart
    
}
