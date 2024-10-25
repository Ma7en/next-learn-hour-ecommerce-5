import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { arrProducts } from "data/Products";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

// data
// const arrayProduct = [
//     { productImage: "./images/1.png" },
//     { productImage: "./images/2.webp" },
//     { productImage: "./images/3.webp" },
//     { productImage: "./images/4.webp" },
//     { productImage: "./images/5.webp" },
//     { productImage: "./images/6.webp" },
//     { productImage: "./images/7.webp" },
//     { productImage: "./images/8.png" },
// ];

async function getDate() {
    try {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        const response = await fetch(`http://localhost:4000/products`, {
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

async function Products() {
    const dataProducts = await getDate();
    // console.log(`dataProduct: `, dataProducts);

    return (
        <>
            <section className="products flex">
                {arrProducts?.map((product, index) => (
                    <article
                        title={`${product?.title}`}
                        className="card"
                        key={index}
                    >
                        <Link href={`/productdetails/${product?.id}`}>
                            <Image
                                width={266}
                                height={400}
                                quality={100}
                                src={`${product?.image}`}
                                alt={`${product?.image}`}
                                // srcSet
                            />
                        </Link>

                        <div style={{ width: 266 }} className="content">
                            <h1 className="title">
                                {product?.title.slice(0, 20)}...
                            </h1>
                            <p className="description">
                                {product?.description.slice(0, 100)}...
                            </p>

                            <div
                                className="flex"
                                style={{
                                    justifyContent: "space-between",
                                    paddingBottom: "0.7rem",
                                }}
                            >
                                <div className="price">${product?.price}</div>

                                <button className="add-to-cart flex">
                                    <FontAwesomeIcon
                                        className="fa-solid fa-cart-plus"
                                        style={{ width: ".8rem" }}
                                        icon={faCartPlus}
                                    />
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
                {/* 
                        <article className="card">
                            <a href="/pages/product-details.html">
                                <img width={266} src="" alt="" srcSet />
                            </a>
                            <div style={{ width: 266 }} className="content">
                                <h1 className="title">Product Title</h1>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur elit
                                    adipisicing . Ex tempore dolor in,
                                    accusantium laudantium accusamus.
                                </p>
                                <div
                                    className="flex"
                                    style={{
                                        justifyContent: "space-between",
                                        paddingBottom: "0.7rem",
                                    }}
                                >
                                    <div className="price">$100</div>
                                    <button className="add-to-cart flex">
                                        <i className="fa-solid fa-cart-plus" />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </article>
                        <article className="card">
                            <a href="/pages/product-details.html">
                                <img width={266} src="" alt="" srcSet />
                            </a>
                            <div style={{ width: 266 }} className="content">
                                <h1 className="title">Product Title</h1>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur elit
                                    adipisicing . Ex tempore dolor in,
                                    accusantium laudantium accusamus.
                                </p>
                                <div
                                    className="flex"
                                    style={{
                                        justifyContent: "space-between",
                                        paddingBottom: "0.7rem",
                                    }}
                                >
                                    <div className="price">$100</div>
                                    <button className="add-to-cart flex">
                                        <i className="fa-solid fa-cart-plus" />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="card">
                            <a href="/pages/product-details.html">
                                <img width={266} src="" alt="" srcSet />
                            </a>
                            <div style={{ width: 266 }} className="content">
                                <h1 className="title">Product Title</h1>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur elit
                                    adipisicing . Ex tempore dolor in,
                                    accusantium laudantium accusamus.
                                </p>
                                <div
                                    className="flex"
                                    style={{
                                        justifyContent: "space-between",
                                        paddingBottom: "0.7rem",
                                    }}
                                >
                                    <div className="price">$100</div>
                                    <button className="add-to-cart flex">
                                        <i className="fa-solid fa-cart-plus" />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="card">
                            <a href="/pages/product-details.html">
                                <img width={266} src="" alt="" srcSet />
                            </a>
                            <div style={{ width: 266 }} className="content">
                                <h1 className="title">Product Title</h1>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur elit
                                    adipisicing . Ex tempore dolor in,
                                    accusantium laudantium accusamus.
                                </p>
                                <div
                                    className="flex"
                                    style={{
                                        justifyContent: "space-between",
                                        paddingBottom: "0.7rem",
                                    }}
                                >
                                    <div className="price">$100</div>
                                    <button className="add-to-cart flex">
                                        <i className="fa-solid fa-cart-plus" />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="card">
                            <a href="/pages/product-details.html">
                                <img width={266} src="" alt="" srcSet />
                            </a>
                            <div style={{ width: 266 }} className="content">
                                <h1 className="title">Product Title</h1>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur elit
                                    adipisicing . Ex tempore dolor in,
                                    accusantium laudantium accusamus.
                                </p>
                                <div
                                    className="flex"
                                    style={{
                                        justifyContent: "space-between",
                                        paddingBottom: "0.7rem",
                                    }}
                                >
                                    <div className="price">$100</div>
                                    <button className="add-to-cart flex">
                                        <i className="fa-solid fa-cart-plus" />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="card">
                            <a href="/pages/product-details.html">
                                <img width={266} src="" alt="" srcSet />
                            </a>
                            <div style={{ width: 266 }} className="content">
                                <h1 className="title">Product Title</h1>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur elit
                                    adipisicing . Ex tempore dolor in,
                                    accusantium laudantium accusamus.
                                </p>
                                <div
                                    className="flex"
                                    style={{
                                        justifyContent: "space-between",
                                        paddingBottom: "0.7rem",
                                    }}
                                >
                                    <div className="price">$100</div>
                                    <button className="add-to-cart flex">
                                        <i className="fa-solid fa-cart-plus" />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </article>

                        <article className="card">
                            <a href="/pages/product-details.html">
                                <img width={266} src="" alt="" srcSet />
                            </a>
                            <div style={{ width: 266 }} className="content">
                                <h1 className="title">Product Title</h1>
                                <p className="description">
                                    Lorem ipsum dolor sit amet consectetur elit
                                    adipisicing . Ex tempore dolor in,
                                    accusantium laudantium accusamus.
                                </p>
                                <div
                                    className="flex"
                                    style={{
                                        justifyContent: "space-between",
                                        paddingBottom: "0.7rem",
                                    }}
                                >
                                    <div className="price">$100</div>
                                    <button className="add-to-cart flex">
                                        <i className="fa-solid fa-cart-plus" />
                                        Add To Cart
                                    </button>
                                </div>
                            </div>
                        </article> */}
            </section>
        </>
    );
}

export default Products;
