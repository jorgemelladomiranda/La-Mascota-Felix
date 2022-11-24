import React, {useState} from "react";
import "../navbar/navbar.css"
import logoCarrito from "../img/logoCarrito.png"
import Buscador from "../img/Buscador.png"
import Logo from "../img/Logo.png"

function Navbar () {
    const [active, setActive] = useState("nav_menu");
    const [toggleIcon, setToggleIcon] = useState("nav_toggle");

    
    const navToggle = () => {
            if (active === 'nav_menu'){
                setActive("nav_menu nav_active")
            } else  setActive("nav_menu");
    
            // TogglerIcon

        if (toggleIcon === "nav_toggler"){
            setToggleIcon("nav_toggler toggle")
        } else  setToggleIcon("nav_toggler");
    };

    return (
        <nav className="nav">
            <a href="../index.html" className="nav_brand"> <img className="Logo-Dog" src={Logo} alt="" /></a>
            <ul className={active}>
                <li className="nav_item"></li><a href="" className="nav_link">Inicio</a>
                <li className="nav_item"></li><a href="" className="nav_link">Tienda</a>
                <li className="nav_item"></li><a href="" className="nav_link">Nosotros</a>
                <li className="nav_item"></li><a href="" className="nav_link">Consejos</a>
                <li className="nav_item"></li><a href="" className="nav_link">Contacto</a>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <form className="form-search content-search navbar-form" action="" method="post">
                    <div className="input-group">
                        <input placeholder="Buscar" className="form-control form-text" type="text" size="15" maxlength="128" />
                        <span className="input-group-btn">
                        <button type="submit" className="btn btn-primary"><span className="search" aria-hidden="true"> <img className="iconSearch" src={Buscador} alt="" /></span></button>
                        </span>
                    </div>
            </form>
            <a href="#" className="cart" target="_blank" rel="nofollow"><i className="fas fa-shopping-cart"></i>
            <span><img className="logo-carrito" src={logoCarrito} alt="" /></span>
            <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">5</span>
            </a>
        </nav>

    )
}

export default Navbar;