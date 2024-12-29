import { Link } from "react-router-dom";
import useRedirection from "../../hooks/useRedirection";
const Index = () => {
  useRedirection("/home", 5000);

  return (
    <div className="px-4 pt-5 my-5 text-center">
      <h1 className="display-4 fw-bold text-body-emphasis">
        Bienvenido a la página de inicio
      </h1>
      <div className="col-md-6 mx-auto">
        <p className="lead mb-4">
          It is a long established fact that a reader will be distracted by the readable content
          of a page when looking at its layout. The point of using Lorem Ipsum
          is that it has a more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Link to={"/home"} className="px-4 me-sm-3">
            Explorar
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Index;