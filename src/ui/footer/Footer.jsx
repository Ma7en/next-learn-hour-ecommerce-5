import React from "react";

// import style
import "./Footer.css";

function Footer() {
    return (
        <>
            <footer>
                Designed and developed by
                <span> Mazen Saad </span>© {new Date().getFullYear()}.
            </footer>
        </>
    );
}

export default Footer;
