import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const Nav = ({show, click}) => {
    const [showNav, setShowNav] = useState();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 220) {
                setShowNav(true);
            } else setShowNav(false);
        });
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
    <nav className={showNav && "nav"}>
        <div className="nav__container">
            <div className={!show ? 'nav__logo' : 'nav__logo2'}><Link to="/"><span>Naakwu</span></Link></div>
            <div className="menu">
                {!show && <div className='harmburger' onClick={click}><img src="/Images/menu.png" alt=""/></div>}
                {show && <div className="menu__dropdown">
                    <div className='menu__logo'>
                        <Link to="/"><span>Naakwu</span></Link>
                        <div className="menu__closeBar" onClick={click}></div>
                    </div>
                    <ul className="menu__list">
                        <li><a href="#"><span>Our solution</span></a></li>
                        <li><a href="#"><span>Our blog</span></a></li>
                        <li><a href="#"><span>About us</span></a></li>
                    </ul>
                </div>}
            </div>
            <ul className="nav__list">
                <li><a href="#"><span>Our solution</span></a></li>
                <li><a href="#"><span>Our blog</span></a></li>
                <li><a href="#"><span>About us</span></a></li>
            </ul>
            <button>Contact us</button>
        </div>
    </nav>
    )
}

export default Nav
