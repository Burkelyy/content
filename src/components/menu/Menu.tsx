import React from "react";
import { faBlog, faHouseUser, faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { MenuStateValues } from "../../constants/menuVars";
import { toggleMenu } from "../../redux/action_creators/menu_action_creators";
import { StoreState } from "../../redux/storeTypes";
import { User } from "../user/User";
import "./Menu.scss";

const Menu = () => {
    const dispatch = useDispatch();
    const menuState = useSelector((state: StoreState) => state.menu.menuState);
    const currentUser = useSelector((state: StoreState) => state.user.user);
    const handleMenuOut = () => {
        dispatch(toggleMenu());
    };

    const handleClickUserBtn = () => {
        window.location.href = '/signin';
    };
    return (
        <div className={`menu${menuState === MenuStateValues.OPEN ? ' open' : ''}`} onClick={handleMenuOut}>
            <div className="menu-blur" />
            <div className="menu-content" onClick={(e) => e.stopPropagation()}>
                <User />
                <nav className="menu-items">
                    <ul className="menu-list">
                        <li className="menu-item">
                            <a className="menu-item-link" href='/'>Home</a> 
                        </li>
                        <li className="menu-item">
                            <a className="menu-item-link" href='/articles'>Articles</a> 
                        </li>
                        <li className="menu-item">
                            <a className="menu-item-link" href='/blogs'>Blogs</a> 
                        </li>
                    </ul>
                    <button className="menu-btn" onClick={handleClickUserBtn}>
                        {currentUser ? 'Log out' : 'SignIn'}
                    </button>
                </nav>
            </div>
        </div>
    );
};

export { Menu }