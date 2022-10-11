import React from "react";

interface Intestation {
  subtitle: string;
  title: string;
  img: string;
  description?: string;
}

function Card({ subtitle, title, img, description }: Intestation) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        margin: "10px 20px",
        padding: "5px",
        border: "2px solid black",
        borderRadius: "10px",
        width: "80vw",
        minWidth: "300px",
        textAlign: "left",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <img
          src={img}
          alt="profile"
          style={{
            width: "75px",
            height: "75px",
            border: "1px solid grey",
            borderRadius: "50%",
            margin: "10px",
            objectFit: "cover",
          }}
        />
      </div>
      <div>
        <h3
          style={{
            textAlign: "left",
            marginBottom: "0",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            marginTop: "0",
            textAlign: "left",
          }}
        >
          {subtitle}
        </p>
        <p
          style={{
            maxWidth: "90%",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
