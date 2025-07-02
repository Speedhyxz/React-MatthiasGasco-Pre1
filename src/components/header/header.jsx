import { MdShoppingCart } from "react-icons/md";
import "./header.css";
export const Header = () => {
    return (
        <header className="header">
           <h1>Tienda</h1>
            <nav>   
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><button className="carrito" ><MdShoppingCart /></button></li>
                </ul>
                
            </nav>
        </header>
    )

}