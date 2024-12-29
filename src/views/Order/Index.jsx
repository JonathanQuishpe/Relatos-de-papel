import { Link } from "react-router-dom";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { useEffect } from "react";
import useRedirection from "../../hooks/useRedirection";

const Index = () => {
  const { clearCart } = useShoppingCartContext()

  useEffect(() => {
    clearCart()
  }, []);

  useRedirection("/home", 2500);

  return (
    <div className="container">
      <main>
        <div className="text-center">
          <h2>Pedido procesado</h2>
        </div>
        <div className="alert alert-success" role="alert">
          Su orden  #123456 ha sido procesada exitosamente.
        </div>
        <Link to={'/home'} className="btn btn-primary btn-sm">
          Volver a la tienda
        </Link>
      </main>
    </div>
  )
}

export default Index;