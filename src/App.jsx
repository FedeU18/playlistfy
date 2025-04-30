import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./Pages/Home/Home";
import SongDetail from "./Pages/SongDetail/SongDetail";
import FavoriteSongs from "./Pages/FavoriteSongs/FavoriteSongs";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="w-full h-full bg-green-950">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/songDetail" element={<SongDetail />} />
            <Route path="/favoriteSongs" element={<FavoriteSongs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
