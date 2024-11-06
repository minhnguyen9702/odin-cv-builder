import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DetailsWrapper from "./components/DetailsWrapper";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";
import Display from "./Display";

function App() {
  // This section handles personalInfo
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

  //This section handles educationInfo
  const [educationInfo, setEducationInfo] = useState([]);
  const addEducationInfo = () => {
    setEducationInfo([
      ...educationInfo,
      {
        id: uuidv4(),
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
        isShow: true,
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

  //this section handles experienceInfo
  const [experienceInfo, setExperienceInfo] = useState([]);
  const addExperienceInfo = () => {
    setExperienceInfo([
      ...experienceInfo,
      {
        id: uuidv4(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        location: "",
        desc: "",
        isShow: true,
      },
    ]);
  };
  const experienceInfoChange = (id, e) => {
    const { name, value } = e.target;
    setExperienceInfo((prevExperience) =>
      prevExperience.map((exp) =>
        exp.id === id ? { ...exp, [name]: value } : exp
      )
    );
  };
  const removeExperience = (id) => {
    setExperienceInfo(experienceInfo.filter((exp) => exp.id !== id));
  };

  return (
    <div className="flex">
      <div className="flex-grow m-8">
        <DetailsWrapper header="Personal Details">
          <PersonalDetails
            personalInfo={personalInfo}
            onChange={personalInfoChange}
          />
        </DetailsWrapper>
        <DetailsWrapper header="Education">
          <EducationDetails
            educationInfo={educationInfo}
            onAdd={addEducationInfo}
            onChange={educationInfoChange}
            onRemove={removeEducation}
          />
        </DetailsWrapper>
        <DetailsWrapper header="Experience">
          <ExperienceDetails
            experienceInfo={experienceInfo}
            onAdd={addExperienceInfo}
            onChange={experienceInfoChange}
            onRemove={removeExperience}
          />
        </DetailsWrapper>
      </div>
      <div className="w-1/2 ml-4">
        <Display
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </div>
    </div>
  );
}

export default App;
