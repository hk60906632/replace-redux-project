import React, {useState, createContext} from 'react';

export const ProductsContext = createContext({
    products: [],
    toggleFav: (id) => {}
});


export default props => {
    const [productList, setProductList] = useState([
        {
        id: 'p1',
        title: 'Red Scarf',
        description: 'A pretty red scarf.',
        isFavorite: false
        },
        {
        id: 'p2',
        title: 'Blue T-Shirt',
        description: 'A pretty blue t-shirt.',
        isFavorite: false
        },
        {
        id: 'p3',
        title: 'Green Trousers',
        description: 'A pair of lightly green trousers.',
        isFavorite: false
        },
        {
        id: 'p4',
        title: 'Orange Hat',
        description: 'Street style! An orange hat.',
        isFavorite: false
        }])
    
    const toggleFavourite = productId => {
        setProductList(prevState => {
            const changeProductIndex = prevState.findIndex( element => element.id === productId);
            const newProductState = { ...prevState[changeProductIndex], isFavorite: !prevState[changeProductIndex].isFavorite};
            const newProductList = [...prevState];
            newProductList[changeProductIndex] = newProductState;
            return newProductList;
        })
    }
    
    //whenever we update the productList state here, the provider will receive a new value and every child wrap by this provider will get the new value
    return (
        <ProductsContext.Provider value={{products: productList, toggleFav: toggleFavourite}}>
            {props.children}
        </ProductsContext.Provider>
    )
}