import React from "react";
import Footer from "ui/footer/Footer";
import Header from "ui/header/Header";

function NotFound() {
    return (
        <>
            <div
                style={{
                    height: "100vh",
                    display: "grid",
                    alignItems: "center",
                    gridTemplateRows: "auto 1fr auto",
                }}
            >
                <Header />

                <main>
                    <p>sorry,</p>
                    <p>we could not found the page you were looing for :(</p>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default NotFound;
