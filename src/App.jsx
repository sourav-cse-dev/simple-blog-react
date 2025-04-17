import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>

        <div className="main-container flex justify-between items-center mx-auto container text-center">
          <div className="left-container w-2/3">
            <Blogs>0</Blogs>
          </div>
          <div className="right-container w-1/3">
            <p>Reading time: 0</p>
            <p>Bookmark count: 0</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
