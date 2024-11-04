import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DetailsWrapper from "./components/DetailsWrapper";
import PersonalDetails from "./PersonalDetails";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    fullname: "",
    email: "",
    phone: "",
    address: "",
  });

  const personalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const [educationInfo, setEducationInfo] = useState([
    { id: uuidv4(), school: "", degree: "", startYear: "", endYear: "" },
  ]);

  const addEducationInfo = () => {
    setEducationInfo([
      ...educationInfo,
      {
        id: uuidv4(),
        school: "",
        degree: "",
        startYear: "",
        endYear: "",
      },
    ]);
  };

  const educationInfoChange = (id, e) => {
    const { name, value } = e.target;
    setEducationInfo((prevEducation) =>
      prevEducation.map((edu) =>
        edu.id === id ? { ...edu, [name]: value } : edu
      )
    );
  };

  const removeEducation = (id) => {
    setEducationInfo(educationInfo.filter((edu) => edu.id !== id));
  };

  return (
    <>
      <DetailsWrapper header="Personal Details">
        <PersonalDetails
          personalInfo={personalInfo}
          onChange={personalInfoChange}
        />
      </DetailsWrapper>
    </>
  );
}

export default App;
