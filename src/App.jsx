import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [basket, setBasket] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      console.log("useEffect");
      if (data.length === 0) {
        const response = await axios.get("http://localhost:3200/");
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <span>Loading... </span>
  ) : (
    <div className="App">
      <header>
        <img src="./src/assets/images/logo-teal.svg" alt="logo deliveroo" />
        <div className="container">
          <div className="name">
            <h1>{data.restaurant.name} </h1>
            <p>{data.restaurant.description}</p>
          </div>
          <img src={data.restaurant.picture} alt="image header" />
        </div>
      </header>
      <section className="main">
        {data.categories.map((elem) => {
          return (
            <>
              <div className="container">
                {elem.meals.length === 0 ? (
                  <p></p>
                ) : (
                  <div className="category" key={elem.name}>
                    <h2>{elem.name}</h2>
                  </div>
                )}

                <div className="meals">
                  {elem.meals.map((elem, index) => {
                    return (
                      <>
                        <div className="meals-detail">
                          <div className="text">
                            <p className="meals-title" key={elem.title}>
                              {elem.title}
                            </p>
                            <p className="meals-description" key={elem.index}>
                              {elem.description}
                            </p>

                            <div className="popular-meals">
                              <p className="meals-price" key={elem.index}>
                                {elem.price} €
                              </p>

                              {elem.popular ? (
                                <p className="popular" key={elem.index}>
                                  <span>
                                    <i className="icon-STAR_FILL"></i>
                                  </span>
                                  Populaire
                                </p>
                              ) : (
                                <p></p>
                              )}
                            </div>
                          </div>
                          {elem.picture && <img src={elem.picture} alt="" />}
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </section>
      <section>
        <div className="cart">
          <button>Valider mon panier</button>
          {/* {meals.map((elem, index) => {
            return (
              <div className="cart-container" key={elem.index}>
                <button>-</button>
                <p> {elem.quantity}</p>
                <button>+</button>
                <p> {elem.meal}</p>
                <p> {elem.price} €</p>
              </div>
            );
          })} */}
          <p>Sous-total</p>
          <p>Frais de livraison</p>
          <h3>Total</h3>
        </div>
      </section>
    </div>
  );
}

export default App;
