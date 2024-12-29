import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";

const Index = () => {
  const { cart, removeItem } = useShoppingCartContext()

  return (
    cart.length ? (
      <div className="container">
        <h2>
          Carrito
        </h2>
        <div className="d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center">
          <div className="list-group">
            {cart.map((item, index) => (
              <div key={index} className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                <img src={item.img ? item.img : 'https://github.com/twbs.png'} alt="twbs" width="32" height="32" className="rounded-circle flex-shrink-0" />
                <div className="d-flex gap-2 w-100 justify-content-between">
                  <div>
                    <h6 className="mb-0">
                      {item.title}
                    </h6>
                    <p className="mb-0 opacity-75">
                      {item.price} $ x {item.quantity}
                    </p>
                  </div>
                  <small className="opacity-50 text-nowrap">
                    <button className="btn btn-danger" onClick={() => removeItem(item.id)}>
                      <BsFillTrash3Fill />
                    </button>
                  </small>
                </div>
              </div>
            ))}
          </div>
          <Link to={'/checkout'} className="btn btn-primary mx-1">
            Procesar pago
          </Link>
          <Link to={'/home'} className="btn btn-danger mx-1">
            Seguir Comprando
          </Link>
        </div>
      </div>
    ) : (
      <div className="container">
        <div className="alert alert-danger" role="alert">
          No tiene libros selecionados. !!!
        </div>
        <Link to={'/home'} className="btn btn-danger mx-1">
          Seguir Comprando
        </Link>
      </div>
    )
  )
}

export default Index;