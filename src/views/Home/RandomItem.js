import { NavLink } from "react-router-dom";

const RandomItem = (props) => {
    return (
        <div>
            <NavLink to={props.linkPath}><img src={(props.product.image)} alt={props.product.name} height="200" /></NavLink>
            <br />
            {props.product.name}
            <br />
            {props.product.price}$
        </div>
    )
}

export default RandomItem;