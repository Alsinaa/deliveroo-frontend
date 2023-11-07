import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
      <main className="main">
        {data.categories.map((elem) => {
          return (
            <div className="main-container" key={elem.name}>
              {elem.meals.length === 0 ? (
                <p></p>
              ) : (
                <p className="category">{elem.name} </p>
              )}
              <div className="meals" key={elem.title}>
                {elem.meals.map((elem) => {
                  return (
                    <div className="meals-container" key={elem.meals}>
                      <p className="meals-title" key={elem.title}>
                        {elem.title}
                      </p>
                      <p className="meals-details">{elem.description}</p>
                      <p className="meals-price">{elem.price} €</p>
                      {elem.picture && (
                        <img
                          className="meals-pictures"
                          src={elem.picture}
                          alt=""
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default App;
