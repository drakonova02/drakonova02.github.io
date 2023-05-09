import React from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import { useDispatch, useSelector} from 'react-redux';
import createMenuAction from "../actionCreater/createMenuAction";
import '../style/Navigation.css';
import NavigationFooter from "./NavigationFooter";

export default () => {
    const isOpenMenu = useSelector(state => state.isOpenMenu);
    const dispatch = useDispatch();

    const toggleMenu = () => {
        const action = createMenuAction(!isOpenMenu);
        dispatch(action);
    }

    const menuItemLink = [
        {name: 'Resume', to: '/resume'},
        {name: 'Portfolio', to: '/portfolio'},
        {name: 'Contact', to: '/contact'}
    ]

    return (
        <Menu width={'50%'} onOpen={ toggleMenu } onClose={ toggleMenu } isOpen={ isOpenMenu } right disableAutoFocus>
            { menuItemLink.map(elem => {
                return (
                    <Link key={ elem.name } onClick={ toggleMenu } to={ elem.to }>{ elem.name }</Link>        
                )
            })}
            <NavigationFooter />
        </Menu>
    )
}