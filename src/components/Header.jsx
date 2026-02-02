import Button from "./UI/Button";
import headerImg from "../assets/logo.jpg";
import { useContext } from "react";
import CartContext from "./store/CartContext";
import UserProgressContext from "./store/UserProgressContext";
export default function Header() {
  const ctxValue = useContext(CartContext);
  const UserProgressCtx = useContext(UserProgressContext);
  const totalCartItems = ctxValue.items.reduce(
    (totalNumberOfCartItems, item) => {
      return totalNumberOfCartItems + item.quantity;
    },
    0
  );
  function handleShowCart() {
    UserProgressCtx.showCart();
  }
  return (
    <header id="main-header">
      <div id="title">
        <img src={headerImg} alt="header of restro" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
