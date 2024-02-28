import "./App.scss";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CreatePage from "./pages/CreatePage/CreatePage";
import Header from "./containers/Header/Header";
import PostsContextProvider from "./context/PostsContextProvider/PostsContextProvider";
import CategoriesContextProvider from "./context/CategoriesContextProvider/CategoriesContextProvider";

function App() {
  return (
    <>
      <CategoriesContextProvider>
        <PostsContextProvider>
          <BrowserRouter>
            <Header />
            <h1>Posts About Everything and Anything</h1>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/create" element={<CreatePage />} />
            </Routes>
          </BrowserRouter>
        </PostsContextProvider>
      </CategoriesContextProvider>
    </>
  );
}

export default App;
