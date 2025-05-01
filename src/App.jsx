import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home/Home";
import AlbumDetail from "./Pages/AlbumDetail/AlbumDetail";
import FavoriteSongs from "./Pages/FavoriteSongs/FavoriteSongs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col" >
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 pt-18">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/albumDetail" element={<AlbumDetail />} />
            <Route path="/favoriteSongs" element={<FavoriteSongs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
