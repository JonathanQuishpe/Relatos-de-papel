import { Link } from "react-router-dom";

const Index = () => {
  return (
    <form>
      <div className="row g-3">
        <div className="col-sm-6">
          <label className="form-label">Nombres</label>
          <input type="text" className="form-control" id="firstName" placeholder="" />
          <div className="invalid-feedback">
            Valid first name is required.
          </div>
        </div>

        <div className="col-sm-6">
          <label className="form-label">Apellidos</label>
          <input type="text" className="form-control" id="lastName" placeholder="" />
          <div className="invalid-feedback">
            Valid last name is required.
          </div>
        </div>

        <div className="col-12">
          <label className="form-label">Correo <span className="text-body-secondary">(Optional)</span></label>
          <input type="email" className="form-control" id="email" placeholder="you@mail.com" />
        </div>

        <div className="col-12">
          <label className="form-label">Dirección</label>
          <input type="text" className="form-control" id="address" placeholder="1234 Main St" required="" />
          <div className="invalid-feedback">
            Please enter your shipping address.
          </div>
        </div>
      </div>

      <hr className="my-4" />

      <h4 className="mb-3">Pago</h4>

      <div className="my-3">
        <div className="form-check">
          <input id="credit" name="paymentMethod" type="radio" className="form-check-input" required="" />
          <label className="form-check-label" >Tarjeta de crédito</label>
        </div>
        <div className="form-check">
          <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required="" />
          <label className="form-check-label" >Tarjeta de débito</label>
        </div>
      </div>

      <div className="row gy-3">
        <div className="col-md-6">
          <label className="form-label">Tarjetahabiente</label>
          <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
        </div>

        <div className="col-md-6">
          <label className="form-label"># de tarjeta</label>
          <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
          <div className="invalid-feedback">
            Credit card number is required
          </div>
        </div>

        <div className="col-md-3">
          <label className="form-label">Expiración</label>
          <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
        </div>

        <div className="col-md-3">
          <label className="form-label">CVV</label>
          <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
        </div>
      </div>

      <hr className="my-4" />

      <Link to={'/order'} className="w-100 btn btn-primary btn-lg">
        Procesar pago
      </Link>
    </form>
  )
}

export default Index;