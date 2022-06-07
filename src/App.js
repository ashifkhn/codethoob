import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import "./app.scss"

import { SideBar } from "./components/SideBar";
import { HomePage } from "./Pages/HomePage/HomePage";
import { LandingPage } from './Pages/LandingPage/LandingPage';
import { SignUpPage } from "./Pages/SignUpPage/SignUpPage";
import { PlayList } from "./Pages/Playlist/PlayList"
import { LikedVideos } from "./Pages/LikedVideos/LikedVideos";
import { WatchLater } from "./Pages/WatchLater/WatchLater";
import { History } from "./Pages/History/History";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/home" element={<HomePage />} />
        <Route path="/playlist" element={<PlayList />} />
        <Route path="/liked" element={<LikedVideos />} />
        <Route path="/watchlater" element={<WatchLater />} />
        <Route path="/history" element={<History />} />
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
