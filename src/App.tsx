import "./App.css";
import { Nav } from "./components/nav/Nav";
import { LandingPage } from "./pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Articles } from "./pages/Articles";
import { ArticlePlans } from "./pages/ArticlePlans";
import { ProtectedRoute } from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="articles" element={<ProtectedRoute />}>
          <Route path="/articles" element={<Articles />} />
        </Route>
        <Route path="article-plans" element={<ProtectedRoute />}>
          <Route path="/article-plans" element={<ArticlePlans />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
