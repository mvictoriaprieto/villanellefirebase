import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '../../styles/_CartWidget.scss';
const CartWidget = (props) => {
  return (
    <>
     
      <ShoppingCartOutlinedIcon color="white" />
      <p className="cartCounter">{props.cartNumber}</p>
    </>
  );
};

export default CartWidget;
