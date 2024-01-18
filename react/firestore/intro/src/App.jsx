import { useEffect, useState } from "react";
import "./App.scss";
import { getAllMovies } from "../services/movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage";
import AddMoviePage from "../pages/AddMoviePage/AddMoviePage";
import { NavBar } from "../components/NavBar/NavBar.jsx";
import MoviePage from "../pages/MoviePage/MoviePage.jsx";
import LiveHomePage from "../pages/HomePage/LiveHomePage.jsx";

function App() {
  // useEffect(() => {
  //   getAllMovies();
  // }, []);

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/" element={<LiveHomePage />} />
          <Route path="/add-movie" element={<AddMoviePage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// home page
// list of movies
// dedicated page for each movie
// page with a form to add a movie to the database
