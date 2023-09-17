import { React, useState } from 'react';
import logo from '../../img/logo.png';
import { NavLink } from "react-router-dom";

export default function Navibar() {
    const [menuBurger, setMenuBurger] = useState('');
    return (
        <>
            <div className={`nav-bar ${menuBurger}`}>
                <div className="container">
                    <nav className="links">
                        <NavLink className='link' to='/' onClick={() => setMenuBurger('')}>Matchlar</NavLink>
                        <NavLink className='link' to='/news' onClick={() => setMenuBurger('')}>Yangiliklar</NavLink>
                        <NavLink className='link' to='/table' onClick={() => setMenuBurger('')}>Turnir Jadvali</NavLink>
                        <NavLink className='link' to='/statistic' onClick={() => setMenuBurger('')}>Statistika</NavLink>
                        <NavLink className='link menu-bottom' to='/teams' onClick={() => setMenuBurger('')}>
                            Jamoalar
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" />
                            </svg> */}
                            {/* <div className="bottom-link">
                                <NavLink to="/transfer-market">
                                    Transfer Market
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="10.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" /><path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z" /></svg>
                                </NavLink>
                            </div> */}
                        </NavLink>
                        {/* <NavLink className='mobile-transfer-menu' onClick={() => setMenuBurger('')} to="/transfer-market">
                            Transfer Market
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="10.5" cy="19.5" r="1.5" /><circle cx="17.5" cy="19.5" r="1.5" /><path d="M21 7H7.334L6.18 4.23A1.995 1.995 0 0 0 4.333 3H2v2h2.334l4.743 11.385c.155.372.52.615.923.615h8c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7zm-4 6h-2v2h-2v-2h-2v-2h2V9h2v2h2v2z" /></svg>
                        </NavLink> */}
                        <NavLink className='link' to='/kubok' onClick={() => setMenuBurger('')}>Kubok</NavLink>
                        <NavLink className='link' to='/reglament' onClick={() => setMenuBurger('')}>Reglament</NavLink>
                        <div className="nav-logo" onClick={() => setMenuBurger('')}>
                            <img src={logo} alt="Rasimni yuklashda hatolik" />
                        </div>
                    </nav>
                </div>
            </div>
            <div className='menu-burger' onClick={() => {
                setMenuBurger('active');
                if (menuBurger === 'active') {
                    setMenuBurger('');
                }
            }}>
                <div className={`burger ${menuBurger}`}></div>
            </div>
        </>
    )
};


