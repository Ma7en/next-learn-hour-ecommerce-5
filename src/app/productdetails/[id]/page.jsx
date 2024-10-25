import React from "react";

// import style
import "./Productdetails.css";

// ui components
import Footer from "ui/footer/Footer";
import Header from "ui/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import Image from "next/image";
import { arrProducts } from "data/Products";

/**
 * @param {any} id
 */
async function getDate(id) {
    try {
        const response = await fetch(`http://localhost:4000/products/${id}`, {
            next: { revalidate: 0 },
        });
        if (!response.ok) {
            notFound();
        }
        return response.json();
    } catch (error) {
        // console.log(`${error.message}`);
        notFound();
    }
}

export async function generateMetadata({ params }) {
    const objectData = await getDate(params?.id);

    return {
        title: `${objectData.title}`,
        description: `${objectData.description}`,
    };
}

async function Page({ params }) {
    // console.log(`----->`, params);
    // const objectData = await getDate(params?.id);
    const objectData = arrProducts.find((item) => {
        return item.id == params.id;
    });

    // console.log(objectData);
    const { id, title, description, image, price } = objectData;

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

                <main style={{ textAlign: "center" }} className="flex">
                    {/* <img alt="" src={`../images/3.webp`} /> */}
                    <Image
                        src={`${image}`}
                        alt={`${title}`}
                        quality={100}
                        width={266}
                        height={400}
                    />

                    <div className="product-details">
                        <div
                            style={{ justifyContent: "space-between" }}
                            className="flex"
                        >
                            <h2>{title}</h2>
                            <p className="price">${price}</p>
                        </div>

                        <p className="description">{description}</p>

                        <button className="flex add-to-cart">
                            {/* <i className="fa-solid fa-cart-plus" /> */}
                            <FontAwesomeIcon
                                className="fa-solid fa-cart-plus"
                                style={{ width: ".8rem" }}
                                icon={faCartPlus}
                            />
                            Add To Cart
                        </button>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
}

export default Page;
