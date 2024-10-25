import React from "react";

// import style
import "./Loading.css";

function Loading() {
    return (
        <>
            <div
                style={{
                    marginBlock: "9rem",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

export default Loading;
