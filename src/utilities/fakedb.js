const addToDb = (id) => {

  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart); // JSON.parse() is used to convert a JSON string into a JavaScript object.
  }

  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } 

  else {
    shoppingCart[id] = 1; //First manually shopping cart e id ta kore sekhane 1 bosai dilam
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart)); // then shopping cart take local storage e set korlam string baniye. 
};

const removeFromDb = (id) => {
  const storeCart = localStorage.getItem("shopping-cart");
  if (storeCart) {
    const shoppingCart = JSON.parse(storeCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

const gettingStoreCart = () =>{
    const storeCart = localStorage.getItem("shopping-cart")
    return storeCart
}

export { 
    addToDb, 
    removeFromDb, 
    deleteShoppingCart,
    gettingStoreCart,
};
