import { Link, useParams } from "react-router-dom";
const ProductShow = ({ image, name, description, price }) => {
  return (
    <div className="product">
      <div className="image">
        <Link to={name}><img src={(image)} alt={name} height="150" /></Link>
      </div>
      <div className="description">
        <h4><Link to={name}>{name}</Link></h4>
      </div>
      <div className="price">
        {price}$
      </div>
    </div>
  );
}

export default ProductShow;