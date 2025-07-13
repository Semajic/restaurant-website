import Main from './pages/main/main-page';
import Menu from './pages/menu/menu';
import Gallery from './pages/gallery/gallery';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './pages/main-components/navbar';
import Footer from './pages/main-components/footer';

function App() {

    return (
        <Router>
        <div className="container">
            <div className="navbar">
                <Navbar />
            </div>

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>

            <div className="footer">
                <Footer />
            </div>
        </div>
        </Router>
    )
}

export default App
