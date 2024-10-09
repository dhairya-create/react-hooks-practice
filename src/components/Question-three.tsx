//Build a form containing first,last name and email.Use only one state to mamage all fields

import { useState } from "react";

const Q3 = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  console.log(userData);
  

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(userData);
      }}>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Q3;
