import React from "react";

const curYear = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p className="footer">Copyrights @ {curYear} </p>
    </footer>
  );
}

export default Footer;
