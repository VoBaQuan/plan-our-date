import { useNavigate } from "react-router-dom";

const Navbar = () => {

   const navigate = useNavigate();
   const repoName = "/plan-our-date";

   const redirectHome = () => {
      navigate(repoName);
   }

   return (
      <nav onClick={redirectHome}>
         <div className="navbar-left">
            <h1>
               Bá Quận
            </h1>
         </div>
         <div className="nav-heart">
            <div className="heart-icon-glow">
               <i className="fas fa-heartbeat"></i>
            </div>
         </div>
         <div className="navbar-left">
            <h1>
               Khánh Linh
            </h1>
         </div>
      </nav>
   )
}

export default Navbar;
