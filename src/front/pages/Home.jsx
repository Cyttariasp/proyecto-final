import React, { useEffect } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import chatGptImage from "../assets/img/cropped_bottom_half_image.png";
import chatGptImage2 from "../assets/img/camping_central_crop.png"
import chatGptImage3 from "../assets/img/elegant_food_central_crop.png";
import kitchenImage from "../assets/img/kitchen_central_crop.png"
export const Home = () => {

  const { store, dispatch } = useGlobalReducer()

  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner" style={{ maxHeight: '60vh', minHeight: '300px' }}>
          <div className="carousel-item active position-relative">
            <img src={kitchenImage} className="d-block w-100 h-100 carousel-responsive-img" alt="Bienvenido a CookIA" />
            <div className="carousel-caption position-absolute top-0 start-50 translate-middle-x text-center">
              <h1 className="display-4 display-md-3 fw-bold text-black mt-3">
                <span className="d-block d-md-inline">¡Bienvenido {store.user.name} a CookIA!</span>
              </h1>
              <button className="btn btn-success btn-lg mt-3">
                <Link to="/pantry" className="text-white text-decoration-none">
                  <i className="fas fa-plus-circle me-2"></i>
                  Registrar Ingredientes
                </Link>
              </button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={chatGptImage2} className="d-block w-100 h-100 carousel-responsive-img" alt="Camping y cocina" />
          </div>
          <div className="carousel-item active position-relative">
            <img src={chatGptImage3} className="d-block w-100 h-100 carousel-responsive-img" alt="Bienvenido a CookIA" />
            <div className="carousel-caption position-absolute top-0 start-50 translate-middle-x text-center">
              <h1 className="display-4 display-md-3 fw-bold text-white mt-3">
                <span className="d-block d-md-inline">Aqui puedes comenzar a generar tus recetas</span>
              </h1>
              <button className="btn btn-success btn-lg mt-3">
                <Link to="/Recipe" className="text-white text-decoration-none">
                  <i className="fas fa-plus-circle me-2"></i>
                  Generar Recetas
                </Link>
              </button>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section className="functionalities bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="display-5 fw-bold text-center mb-5">Funcionalidades</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="text-center h-100">
                <div className="mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    src="https://www.shutterstock.com/image-vector/green-chef-logo-design-template-260nw-2639161045.jpg"
                    alt="Recetas a tu medida"
                  />
                </div>
                <h3 className="h5 fw-bold mb-3">Recetas a tu medida</h3>
                <p className="text-muted">Ingresa los ingredientes que tengas en tu despensa y recibe recetas adaptadas a ti</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="text-center h-100">
                <div className="mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    src="https://media.istockphoto.com/id/2163736632/es/vector/cuadro-de-icono-de-contorno-delgado-que-contiene-comida-se%C3%B1al-de-l%C3%ADnea-como-comida-para.jpg?s=612x612&w=0&k=20&c=GOcwM8JNZAW7Pp3xghWbN7xKfYew_FWJNPhEJdtHEfs="
                    alt="Gestiona tu despensa"
                  />
                </div>
                <h3 className="h5 fw-bold mb-3">Gestiona tu despensa</h3>
                <p className="text-muted">Mantén un inventario de tus ingredientes y evita desperdicios</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="text-center h-100">
                <div className="mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    src="https://media.istockphoto.com/id/1173167531/vector/plate-fork-and-knife-line-icons-stock-vector.jpg?s=612x612&w=0&k=20&c=VtgZYE_z9fUVtppmwwTAw2ht0CgPO8NRKKNZ1d0JOOw="
                    alt="Cumple tus objetivos"
                  />
                </div>
                <h3 className="h5 fw-bold mb-3">Cumple tus objetivos</h3>
                <p className="text-muted">Logra tus metas nutricionales cocinando con lo que ya tienes</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="text-center h-100">
                <div className="mb-3">
                  <img
                    className="img-fluid rounded-circle"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    src="https://media.istockphoto.com/id/1433529839/vector/time-is-money-clock-and-coin-exchange-vector-illustration.jpg?s=612x612&w=0&k=20&c=tEmy9-qJ7LfHP3Af6QPFRKcZR3FnmCcS0zNcPKU89y4="
                    alt="Ahorra tiempo y dinero"
                  />
                </div>
                <h3 className="h5 fw-bold mb-3">Ahorra tiempo y dinero</h3>
                <p className="text-muted">Aprovecha lo que tienes, cocina rápido y sin gastar de más</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner rounded">
                  <div className="carousel-item active">
                    <img src="https://i.postimg.cc/90FvGPDk/temp-Image-JF3w1e.avif" className="d-block w-100" style={{ height: '300px', objectFit: 'cover' }} alt="Receta destacada 1" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.postimg.cc/tCFh30HL/temp-Image2-RPOSb.avif" className="d-block w-100" style={{ height: '300px', objectFit: 'cover' }} alt="Receta destacada 2" />
                  </div>
                  <div className="carousel-item">
                    <img src="https://i.postimg.cc/QtZ79HKv/temp-Imageqt-CGYt.avif" className="d-block w-100" style={{ height: '300px', objectFit: 'cover' }} alt="Receta destacada 3" />
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-it-works bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="display-5 fw-bold text-center mb-5">¿Cómo funciona?</h2>
            </div>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-12 col-md-8 col-lg-6 mb-4">
              <div className="text-center">
                <img
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: '250px', width: '100%', objectFit: 'cover' }}
                  src="https://www.trasteros-madrid.com/wp-content/uploads/2022/05/como-organizar-despensa.jpg"
                  alt="Organiza tu despensa"
                />
                <h3 className="h4 fw-bold mb-3">Agrega lo que tienes en tu despensa</h3>
              </div>
            </div>

            <div className="col-12 text-center mb-4">
              <img
                className="img-fluid"
                style={{ width: '60px', height: '60px' }}
                src="https://media.istockphoto.com/id/688550958/es/vector/signo-de-negro-s%C3%ADmbolo-positivo.jpg?s=612x612&w=0&k=20&c=LyVTdpQ0VUUnhYVyY6Emy6CXx96dUOU9O7GXmEN_Vxo="
                alt="más"
              />
            </div>

            <div className="col-12 col-md-8 col-lg-6 mb-4">
              <div className="text-center">
                <img
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: '250px', width: '100%', objectFit: 'cover' }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDFCwshOxt7clpVVlNwxThB_xd0_Ifxk7O4g&s"
                  alt="Recetas sugeridas"
                />
                <h3 className="h4 fw-bold mb-3">Recibe recetas sugeridas</h3>
              </div>
            </div>

            <div className="col-12 text-center mb-4">
              <img
                className="img-fluid"
                style={{ width: '60px', height: '60px' }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Gzj_YWabZcy8fAq3eAvJtaIvC7_0W3AOcg&s"
                alt="más"
              />
            </div>

            <div className="col-12 col-md-8 col-lg-6 mb-4">
              <div className="text-center">
                <img
                  className="img-fluid rounded mb-3"
                  style={{ maxHeight: '250px', width: '100%', objectFit: 'cover' }}
                  src="https://www.eatthis.com/wp-content/uploads/sites/4/2022/09/happy-cooking-in-kitchen.jpg?quality=82&strip=1"
                  alt="Cocina fácil"
                />
                <h3 className="h4 fw-bold mb-3">Cocina fácil y disfruta</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="recipes bg-light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="display-5 fw-bold text-center mb-5">Recetas Populares</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://i.postimg.cc/kgbr77y5/temp-Image-SWM2vv.avif"
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                  alt="Espaguetis con salsa de carne"
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-text flex-grow-1">Espaguetis con salsa de carne y tomate, cubiertos con queso parmesano</p>
                  <Link to="/recipe/1" className="btn btn-success mt-auto">Ver Receta</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://i.postimg.cc/xd34d8N9/temp-Image-Tpb-SEH.avif"
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                  alt="Pechuga de pollo con papas"
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-text flex-grow-1">Pechuga de pollo dorada acompañada de papas y habichuelas verdes</p>
                  <Link to="/recipe/2" className="btn btn-success mt-auto">Ver Receta</Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://i.postimg.cc/44jkqKz0/temp-Image9-Ftz7c.avif"
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                  alt="Pollo en salsa de champiñones"
                />
                <div className="card-body d-flex flex-column">
                  <p className="card-text flex-grow-1">Pollo sellado en sartén con salsa cremosa de champiñones y perejil</p>
                  <Link to="/recipe/3" className="btn btn-success mt-auto">Ver Receta</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials bg-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="display-5 fw-bold text-center mb-5">Testimonios</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-12 col-md-6">
              <div className="bg-light p-4 rounded-3 shadow-sm h-100">
                <blockquote className="blockquote mb-3">
                  <p className="fs-5 mb-0">"Me ahorro tiempo pensando qué cocinar"</p>
                </blockquote>
                <footer className="blockquote-footer">
                  <cite title="Gabriel">Gabriel</cite>
                </footer>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="bg-light p-4 rounded-3 shadow-sm h-100">
                <blockquote className="blockquote mb-3">
                  <p className="fs-5 mb-0">"No tengo que botar más alimentos vencidos"</p>
                </blockquote>
                <footer className="blockquote-footer">
                  <cite title="Paula">Paula</cite>
                </footer>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="bg-light p-4 rounded-3 shadow-sm h-100">
                <blockquote className="blockquote mb-3">
                  <p className="fs-5 mb-0">"Tengo una guía de cómo alcanzar mis objetivos alimenticios por porciones"</p>
                </blockquote>
                <footer className="blockquote-footer">
                  <cite title="Laura">Laura</cite>
                </footer>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="bg-light p-4 rounded-3 shadow-sm h-100">
                <blockquote className="blockquote mb-3">
                  <p className="fs-5 mb-0">"Amo CookIA, te hace la vida más fácil"</p>
                </blockquote>
                <footer className="blockquote-footer">
                  <cite title="Robert">Robert</cite>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="call-to-action bg-success text-white py-5">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-lg-8">
              <h2 className="display-4 fw-bold mb-4">¡Empieza ahora!</h2>
              <p className="fs-4 mb-4">Aprovecha lo que ya tienes en casa y deja que la cocina sea fácil</p>
              <Link to="/pantry" className="btn btn-light btn-lg px-4 py-3">
                <i className="fas fa-plus-circle me-2"></i>
                Registrar Ingredientes
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <p className="mb-2">© 2025 CookIA</p>
              <p className="mb-0 text-muted">Hecho con ❤️ para aprovechar tu despensa</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};