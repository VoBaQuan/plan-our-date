
function Navbar() {
   return (
      <nav>
         <div className="navbar-left">
            <h1>
               <a href="/">PlanYour.Date</a>
            </h1>
         </div>
         <div className="navbar-right">
            <a href="/account/account.html" id="dashboard-icon" style={{display: 'none'}} data-destination="/account/account.html">
               <i className="fas fa-user-circle"></i>
            </a>
            {/* <!-- PŮVODNÍ TLAČÍTKA JSOU PRYČ --> */}
            {/* <!-- NOVÉ: Jedno tlačítko pro Auth --> */}
            <div className="nav-links" id="auth-links" style={{display: 'none'}}>
               <a href="/faq/faq.html">FAQ</a>
               <button id="get-started-btn" className="btn-auth-glass">Get Started</button>
            </div>
            {/* <!-- Tlačítko Dashboard pro přihlášené uživatele --> */}
            <a href="/account/account.html" className="btn-auth-glass" id="dashboard-btn" style={{display: 'inline-block'}}>Dashboard</a>
            <button className="btn" id="logout-btn" style={{display: 'none'}}>LOGOUT</button>
         </div>
      </nav>
   )
}

export default Navbar;
