import React, { useState , createContext, useEffect} from 'react'

export const CartContext = createContext()

export default function CartProvider({children}) {

  // fav 
      const [favItems , setFavItems] = useState(() =>{
      const savedFav = localStorage.getItem("favItems");
      return savedFav ? JSON.parse(savedFav) : [];
    })

    // add To Favorite 
    const addToFavorite = (item) => {
        setFavItems((prev) => {
          if(prev.some((i) => i.id === item.id)) return prev;
          return [...prev, item]
        })
    }

    useEffect(() =>{
      localStorage.setItem("favItems" , JSON.stringify(favItems))
    } , [favItems])

    // removedfrom favorite
    const removeFromFav = (id) =>{
      setFavItems((prev)=> prev.filter((i) => i.id !== id))
    }

  // cart 
    // const [cartItems , setCartItems] = useState(() =>{
    //   const savedItem = localStorage.getItem("cartItems");
    //   return savedItem ? JSON.parse(savedItem) : [];
    // })

    // addToCart
    // const addToCart = (item) => {
    //     setCartItems((PrevItems) => [...PrevItems , {...item , quantity: 1}])
    // }


    // removeFromCart

    // const removeFromCart = (id) => {
    //   setCartItems(PrevItems => PrevItems.filter(item => item.id !== id))
    // }
    // useEffect(() =>{
    //   localStorage.setItem("cartItems" , JSON.stringify(cartItems))
    // } , [cartItems])
    

  return (
    <CartContext.Provider value={{addToFavorite , favItems , removeFromFav}}>
        {children}
    </CartContext.Provider>
  )
}