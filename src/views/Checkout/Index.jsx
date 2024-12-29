import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import FormData from "../../components/FormData";
import { Link } from "react-router-dom";

const Index = () => {
  const { cart } = useShoppingCartContext()
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  return (

    cart.length ? (
      <div className="container">
        <main>
          <div className="text-center">
            <h2>Realizar pedido</h2>
          </div>

          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Tu carrito</span>
                <span className="badge bg-primary rounded-pill">
                  {cart.length}
                </span>
              </h4>
              <ul className="list-group mb-3">
                {cart.map((item, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                      <h6 className="my-0">{item.title}</h6>
                      <small className="text-muted">$ {item.price} X {item.quantity}</small>
                    </div>
                    <span className="text-muted">${(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>${total}</strong>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-lg-8">
              <h4 className="mb-3">Datos</h4>
              <FormData />
            </div>
          </div>
        </main>
      </div>) : (
      <div className="container">
        <div className="alert alert-danger" role="alert">
          No tiene libros selecionados. !!!
        </div>
        <Link to={'/home'} className="btn btn-danger mx-1">
          Seguir Comprando
        </Link>
      </div>
    )
  );
}

export default Index;