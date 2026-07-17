import React from "react";
import Header from "./Header.jsx";

function App() {
  // Variables
  let age = 87;
  let isOutOfStock = true;
  let arr = ["jj", "kk", "pp"];

  // Function
  function greet() {
    return "Preksha";
  }

  // JSX in Variable
  const alpha = <p>Hello! How are you? {2 + 2}</p>;

  return (
    <>
      {/* 1. Function Call */}
      <h1>Hello {greet()}</h1>

      {/* 2. Ternary Operator */}
      <h1>{age >= 18 ? "You can drive" : "You cannot drive"}</h1>

      {/* 3. Conditional Rendering */}
      {age >= 18 ? (
        <p>You can drive</p>
      ) : (
        <p>You cannot drive</p>
      )}

      {/* 4. Inline CSS */}
      <h1
        style={{
          backgroundColor: "pink",
          color: "green",
          fontFamily: "fantasy",
        }}
      >
        Hello Style
      </h1>

      {/* 5. Short Circuit Rendering */}
      {isOutOfStock && <p>Out of Stock</p>}

      {/* 6. JSX with Loops */}
      {arr.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}

      {/* 7. JSX pass in Props */}
      <Header title="Preksha" />
      <Header title={<p>How are you? {2 + 2}</p>} />

      {/* 8. JSX Stored in Variable */}
      {alpha}
    </>
  );
}

export default App;