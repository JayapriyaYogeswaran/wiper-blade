import List from '../assets/list.json'

export const getList =({commit}) =>{
    const list = List 
    commit('SET_LIST',list)
}

export const addProductToCart = ( { commit }, { product , quantity } ) => {
    commit('ADD_TO_CART', { product , quantity})
       console.log({ product , quantity})
}