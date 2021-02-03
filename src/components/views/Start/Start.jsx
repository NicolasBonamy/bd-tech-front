import React, { useState } from "react";
import Footer from "../../commons/Footer/Footer";
import Header from "../../commons/Header/Header";

function Start() {
  const [pseudo, setPseudo] = useState("");
  const handleChange = (e) => {
    setPseudo(e.target.value);
  };
  const handleSubmit = () => {
    localStorage.setItem("pseudoBD", pseudo);
  };

  return (
    <div>
      <Header />
      <label htmlFor="pseudo">Veuillez entrer votre pseudo</label>
      <input
        type="text"
        id="pseudo"
        name="pseudo"
        placeholder="pseudo"
        required
        minlength="4"
        onChange={handleChange}
      />
      <button type="button" onClick={handleSubmit}>
        Valider
      </button>
      <Footer />
    </div>
  );
}

export default Start;
