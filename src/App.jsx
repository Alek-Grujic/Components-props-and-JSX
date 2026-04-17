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

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt="pizza" />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <p>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</p>
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
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

export default App;
