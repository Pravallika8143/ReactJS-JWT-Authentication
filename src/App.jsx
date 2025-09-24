import { Outlet, Link, useNavigate } from "react-router-dom";
import Categories from "./Categories"
import { useEffect } from "react";

function App() {
    let navigate = useNavigate();
    useEffect(() => {
        if(window.localStorage.getItem("token")){
            navigate("/");
        }else{
            navigate("/login")
        }
    })
    function logout(){
      window.localStorage.clear()
      navigate("/login")
    }
  return (
    <div className="border border-dark border-3 m-3">
      <div id="navbar">
        <ul>
          <li>
            <Link to="/home" className="text-decoration-none text-dark fw-bold fs-4">Home</Link>
          </li>
          <li>
            <Link to="/aboutus" className="text-decoration-none text-dark fw-bold fs-4"> Aboutus</Link>
          </li>
          <li>
            <Link to="/courses" className="text-decoration-none text-dark fw-bold fs-4">Technologies</Link>
          </li>
          <li>
            <button  onClick={()=> {logout()}} className="btn btn-danger btn-sm p-2">LogOut</button>
          </li>
        </ul>
      </div>
      <Categories></Categories>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
// component