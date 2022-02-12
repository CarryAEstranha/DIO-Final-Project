import { Link } from "react-router-dom";

export const HeaderAnchor = (props) => {
    return (
        <Link
            className={props.className}
            id={props.id}
            onClick={props.onClick}
            to={props.href}
        >
            {props.children}
        </Link>
    );
}