import React, { useState } from "react";

const FunctionalForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            onChange={handleNameChange}
            value={name}
            placeholder="Enter your name"
            type="text"
          />
        </label>

        <br />

        <label>
          Email:
          <input
            onChange={handleEmailChange}
            value={email}
            placeholder="Enter your email"
            type="email"
          />
        </label>

        <br />

        <label>
          Password:
          <input
            onChange={handlePasswordChange}
            value={password}
            placeholder="Enter your password"
            type="password"
          />
        </label>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FunctionalForm;
