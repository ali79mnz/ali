import { useContext } from "react";
import { ShopContext } from "../../contex/Contex";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';


const DataLaptop = (props) => {
  const { id, productName, productImage, price } = props.laptop;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const isInCart = cartItems?.some((item) => item.id === id);
  return (
    <>
    <div className="m-4">
    <Link to="/">
        <Button className="bg-danger">  صفحه اصلی</Button>
        </Link>
<div key={id}>
   <Card style={{ width: '16rem' }}>
   <Image src={productImage} />
    <Card.Body>
      <Card.Title>{productName}</Card.Title>
      <Card.Text>
       {price}  <span className="text-danger">تومان</span>
      </Card.Text>
      <Link to="/shop"><Button variant="primary"> سبد خرید</Button></Link>
    </Card.Body>
    
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt sunt excepturi ipsam quod rem repellat qui odio vitae enim ea.</p>

      <button className="btn btn-info btn-sm" onClick={() => addToCart(id)}>
        +
      </button>
      <span className="mx-1">
        {cartItems?.filter((row) => row.id === id)[0]?.count}
      </span>
      {isInCart && (
        <button
        className="btn btn-info btn-sm"
        onClick={() => removeFromCart(id)}
        >
          -
        </button>
      )}
      </Card>
      </div>
    </div>
    </>
  );
};
export default DataLaptop;
