export const SET_LIST = (state, list) =>{
    state.list = list 
}

// export const ADD_TO_CART = (state , { product,quantity }) => {
//     let productInCart = state.cart.find(item => {
//        return item.product === product
//     })
//    if(productInCart) {
//        productInCart.quantity +=  quantity
//        return;
//    }
//     state.cart.push({
//         product,
//         quantity
//     })
// }

export const ADD_TO_CART = (state , { product,quantity }) => {
    let productInCart = state.cart.find(item => {
       return item.sel.count.name === product
    })
   if(productInCart) {

       productInCart.quantity +=  quantity
       return;
   }
   let arr = state.list
   for (let i=0;i<arr.length; i++){
       if(arr[i].count.name == product ) {
           let sel = arr[i]
        state.cart.push({
            sel,
            quantity
        })
       }
   }
  
}