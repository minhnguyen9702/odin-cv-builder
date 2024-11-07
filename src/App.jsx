import { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { v4 as uuidv4 } from "uuid";
import DetailsWrapper from "./components/DetailsWrapper";
import PersonalDetails from "./PersonalDetails";
import EducationDetails from "./EducationDetails";
import ExperienceDetails from "./ExperienceDetails";
import Display from "./Display";
import ButtonsTray from "./ButtonsTray";

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

  const clearResume = () => {
    setPersonalInfo({
      fullname: "",
      email: "",
      phone: "",
      address: "",
    });
    setEducationInfo([]);
    setExperienceInfo([]);
  };

  const loadExample = () => {
    setPersonalInfo({
      fullname: "Solid Snake",
      email: "solid.snake@foxhound.com",
      phone: "(555) 123-4567",
      address: "Alaska, United States",
    });
    setEducationInfo([
      {
        id: uuidv4(),
        school: "U.S. Army Special Forces Training",
        degree: "Special Operations Training Program",
        startDate: "1990",
        endDate: "1992",
        location: "Fort Bragg, North Carolina",
        isShow: false,
      },
      {
        id: uuidv4(),
        school: "CIA Training Facility (The Farm)",
        degree: "Covert Operations Training",
        startDate: "1994",
        endDate: "1995",
        location: "Camp Peary, Virginia",
        isShow: false,
      },
    ]);
    setExperienceInfo([
      {
        id: uuidv4(),
        company: "Foxhound",
        position: "Special Operations Soldier",
        startDate: "1995",
        endDate: "1999",
        location: "Global Locations",
        desc: "Conducted high-risk infiltration and intelligence-gathering missions. Specialized in stealth, CQC (close-quarters combat), and counter-terrorism operations. Played a crucial role in Operation Intrude N313 to destroy the rogue state of Outer Heaven.",
        isShow: false,
      },
      {
        id: uuidv4(),
        company: "Philanthropy",
        position: "Co-Founder / Field Operative",
        startDate: "2000",
        endDate: "2005",
        location: "Worldwide",
        desc: "Established the anti-Metal Gear NGO 'Philanthropy' and engaged in operations to locate and destroy Metal Gear units. Responsible for strategic planning and execution of missions, as well as intelligence analysis and tactical coordination.",
        isShow: false,
      },
    ]);
  };

  const displayRef = useRef();

  function downloadResume() {

    const HTML_Width = displayRef.current.offsetWidth;
    const HTML_Height = displayRef.current.offsetHeight;
    const top_left_margin = 15;
    const PDF_Width = HTML_Width + top_left_margin * 2;
    const PDF_Height = PDF_Width * 1.5 + top_left_margin * 2;
    const canvas_image_width = HTML_Width;
    const canvas_image_height = HTML_Height;

    const totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas(displayRef.current).then(function (canvas) {
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "pt", [PDF_Width, PDF_Height]);
      pdf.addImage(
        imgData,
        "JPG",
        top_left_margin,
        top_left_margin,
        canvas_image_width,
        canvas_image_height
      );
      for (let i = 1; i <= totalPDFPages; i++) {
        pdf.addPage(PDF_Width, PDF_Height);
        pdf.addImage(
          imgData,
          "JPG",
          top_left_margin,
          -(PDF_Height * i) + top_left_margin * 4,
          canvas_image_width,
          canvas_image_height
        );
      }
      pdf.save("resume.pdf");
    });
  }

  return (
    <div className="flex bg-gray-100">
      {/* Input Section*/}
      <div className="flex-grow m-8">
        <ButtonsTray onClear={clearResume} onLoadExample={loadExample} onDownload={downloadResume} />
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
      <div className="w-[68%] ml-4">
        {/* Display Section*/}
        <div ref={displayRef}>
          <Display
            personalInfo={personalInfo}
            educationInfo={educationInfo}
            experienceInfo={experienceInfo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
