import React from "react"; 
import './App.css';
import Nav from './components/Nav'
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
// import BookingForm from "./components/BookingForm";

function App(){
  return(
    <>
    <Nav />
    <Header />
    <Menu />
    <Footer />
    {/* <BookingForm /> */}
    </>
  );
}

export default App;