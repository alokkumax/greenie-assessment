import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
  // const isTablet = useMediaQuery("(min-width:768px)");

  return (
    <Router>
    <div>
      <div className="main">
        {/* {isTablet ? ( */}
          <Sidebar />
        {/* ) : (
          <>
            <BottomNavBar />
            <TopNavBar />
          </>
        )} */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
