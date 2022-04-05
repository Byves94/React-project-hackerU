import { Link } from "react-router-dom";


const ItemShow = ({ image, name, price, description, id }) => {
    let path = `/Shop/${name}`;
    return (
      <li className="item">
        <div className="image">
          <Link to={path}><img src={(image)} alt={name} height="150" /></Link>
        </div>
        <div className="description">
          <h4><Link to={path}>{name}</Link></h4>
        </div>
        <div className="price">
          {price}$
        </div>
      </li>
    );
  }

  export default ItemShow;