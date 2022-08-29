import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./pages/Main";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Main />} />
        <Route path="/postpage" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
