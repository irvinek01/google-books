import { NavLink, useLocation} from "react-router-dom";

function NavItem({to, exact, children}) {
    const {pathname} = useLocation();
    return (
        <li className="nav-item px-4">
            <NavLink className="nav-link" exact={exact} to={to}>
                {children} {" "}
                {pathname === to && <span className="sr-only"></span>}
            </NavLink>
        </li>
    )
};

export default NavItem;