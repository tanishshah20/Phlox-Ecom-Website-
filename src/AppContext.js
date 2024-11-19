import { createContext,useRef,useState } from "react";
import toast from "react-hot-toast";


export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [user, setUser] = useState(false);
    const [userName,setUserName] = useState("");
    const [userEmail,setUserEmail] = useState("");
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        toast.success(`"${item.name}" added to cart`);
        setCartItems(prevItems => {
            const existingItem = prevItems.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevItems.map(cartItem => 
                    cartItem.id === item.id 
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeFromCart = (id) => {
        toast.success("Item removed from cart");
        setCartItems(items => {
            return items.map(item => 
                item.id === id 
                    ? { ...item, quantity: 0 }
                    : item
            ).filter(item => item.id !== id);
        });
    };

    const incQuantity = (id) => {
        setCartItems(items => {
            return items.map(item => 
                item.id === id 
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        });
    };

    const decQuantity = (id) => {
        setCartItems(items => {
            return items.map(item => 
                item.id === id 
                    ? { ...item, quantity: Math.max(0, item.quantity - 1) }
                    : item
            ).filter(item => item.quantity > 0);    
        });
    };

    const value = {
        user,
        setUser,
        userName,
        setUserName,
        userEmail,
        setUserEmail,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        incQuantity,
        decQuantity
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
