/* eslint-disable jsx-a11y/alt-text */
// @ts-nocheck
/* eslint-disable @next/next/no-img-element */
// import Image from "next/image";
// import styles from "./page.module.css";

// import style
import "./Home.css";

// ui components
import Footer from "ui/footer/Footer";
import Header from "ui/header/Header";
import Products from "./Products";
import { Suspense } from "react";
import Loading from "./loading";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <>
            {/* <Image
                src={"https://www.clker.com//cliparts/w/U/x/V/Q/q/truk-hi.png"}
                width={500}
                height={500}
                alt="Picture of the author"
            /> */}

            <div>
                <div className="top-img">
                    <Header />
                    <section className="content">
                        <p className="lifestyle">Lifestyle collection</p>
                        <p className="men">MEN</p>
                        <p className="sale">
                            SALE UP TO <span>30% OFF</span>
                        </p>
                        <p className="free-shipping">
                            Get Free Shipping on orders over $99.00
                        </p>
                        <button>Shop Now</button>
                    </section>
                </div>

                <main className="">
                    <h1 className="recommended">
                        <FontAwesomeIcon
                            style={{ width: "1.9rem", marginRight: "1.2rem" }}
                            icon={faCheck}
                        />
                        Recommended for you
                    </h1>

                    <Suspense fallback={<Loading />}>
                        <Products />
                    </Suspense>
                </main>

                <Footer />
            </div>
        </>
    );
}
