
import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartContext";
import { useNavigate } from "react-router-dom";
const Header=() => {
    const { totalItems, totalValue } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className="header-wrapper">
            <div className="brand-logo">
            <Link
                        to={`/`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >   Logo
                    </Link>
            </div>
            <div className="nav">
                <ul>
                    <Link
                        to={`/`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >   <li>Home</li>
                    </Link>

                    <Link
                        to={`/`}
                        style={{ textDecoration: "none", color: "inherit" }}
                    >   <li>Products</li>
                    </Link>
                    
                   
                </ul>
            </div>
            <div className="cart" onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
            <span>{totalItems} items</span>
        <br />
        <small>Total: ${totalValue.toFixed(2)}</small>
            </div>
        </div>
    );
}   
export default Header;