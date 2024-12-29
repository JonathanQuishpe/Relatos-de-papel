import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

const Header = () => {
  const { cart } = useShoppingCartContext();
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4">Relatos de papel</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link to={"/cart"} className="nav-link active" >
            {cart.length} <BsCartFill />
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header;