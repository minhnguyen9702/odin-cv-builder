import { useState } from "react";
import PersonalDetails from "./PersonalDetails";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });

  function personalInfoChange(e) {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  }

  return (
    <>
      <PersonalDetails
        personalInfo={personalInfo}
        onChange={personalInfoChange}
      />
      <h1>{personalInfo.fullname}</h1>
    </>
  );
}

export default App;
