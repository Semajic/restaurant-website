import Main from './pages/main/main-page';
import Menu from './pages/menu/menu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  )
}

export default App
