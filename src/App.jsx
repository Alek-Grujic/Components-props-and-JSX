import { useState } from "react";
import pizzaData from "../public/data";
// import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            // name={pizza.name}
            // ingredients={pizza.ingredients}
            // price={pizza.price}
            // photoName={pizza.photoName}
            pizzaObj={pizza}
            key={pizza.name}
          />
        ))}
      </ul>
      {/* <Pizza
          name={pizzaData[0].name}
          ingredients={pizzaData[0].ingredients}
          price={pizzaData[0].price}
          photoName={pizzaData[0].photoName}
        /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt="pizza" />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <p>{props.pizzaObj.price}</p>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   // alert(`We're currently open!`);
  // }

  return (
    <footer className="footer">
      {" "}
      {new Date().toLocaleTimeString()}. We are currently open!
    </footer>
  );
}

export default App;
