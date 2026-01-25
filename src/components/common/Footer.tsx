function Footer() {
   return (
      <footer className="site-footer">
         <div className="footer-links">
            <p>Follow us:</p>
            <a href="https://www.tiktok.com/@planyour.date" target="_blank" className="social-icon">
               <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/@planyourdate" target="_blank" className="social-icon">
               <i className="fab fa-instagram"></i>
            </a>
         </div>
         <div className="policy-links">
            <a href="/legal/cookie.html" className="policy-btn">COOKIE POLICY</a>
            <a href="/legal/user-agreement.html" className="policy-btn">USER AGREEMENT</a>
            <a href="/legal/refund.html" className="policy-btn">REFUND POLICY</a>
            <a href="/legal/privacy.html" className="policy-btn">PRIVACY POLICY</a>
         </div>
         <p>Need help? Email us at <a href="mailto:help.planyourdate@gmail.com">help.planyourdate@gmail.com</a></p>
         <p className="copyright">
            © 2026 PlanYour.Date. All rights reserved.
         </p>
      </footer>
   )
}

export default Footer;