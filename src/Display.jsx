import PropTypes from "prop-types";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/16/solid";

function Display({ personalInfo, educationInfo, experienceInfo }) {
  return (
    <div className="p-8">
      {/* Personal Info */}
      <div className="mb-4 text-center">
        <h1 className="text-3xl font-bold">{personalInfo.fullname}</h1>
        <div className="inline-flex flex-wrap items-center justify-center space-x-4">
          {personalInfo.email ? (
            <div className="inline-flex items-center justify-center">
              <EnvelopeIcon className="h-5 w-5 text-black" />
              <p>{personalInfo.email}</p>
            </div>
          ) : (
            <></>
          )}
          {personalInfo.phone ? (
            <div className="inline-flex items-center justify-center">
              <PhoneIcon className="h-5 w-5 text-black" />
              <p>{personalInfo.phone}</p>
            </div>
          ) : (
            <></>
          )}
          {personalInfo.address ? (
            <div className="inline-flex items-center justify-center">
              <MapPinIcon className="h-5 w-5 text-black" />
              <p>{personalInfo.address}</p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {/* Education Info */}
      {educationInfo && educationInfo.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold">EDUCATION</h2>
          <div className="border-b-2 border-black w-full"></div>
        </div>
      ) : (
        <></>
      )}
      {educationInfo.map((edu) => (
        <div key={edu.id} className="flex justify-between mb-4">
          <div>
            <p className="font-bold">{edu.school}</p>
            <p>
              <i>{edu.degree}</i>
            </p>
          </div>
          <div className="text-right">
            <p className="font-bold">
              {edu.startDate} - {edu.endDate}
            </p>
            <p>
              <i>{edu.location}</i>
            </p>
          </div>
        </div>
      ))}
      {/* Experience Info */}
      {experienceInfo && experienceInfo.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold">EXPERIENCE</h2>
          <div className="border-b-2 border-black w-full"></div>
        </div>
      ) : (
        <></>
      )}
      {experienceInfo.map((exp) => (
        <div key={exp.id} className="mb-4">
          <div className="flex justify-between">
            <div>
              <p className="font-bold">{exp.company}</p>
              <p>
                <i>{exp.position}</i>
              </p>
            </div>
            <div className="text-right">
              <p className="font-bold">
                {exp.startDate} - {exp.endDate}
              </p>
              <p>
                <i>{exp.location}</i>
              </p>
            </div>
          </div>
          <p>
            {exp.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

Display.propTypes = {
  personalInfo: PropTypes.shape({
    fullname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  educationInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      school: PropTypes.string,
      degree: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      location: PropTypes.string,
      isShow: PropTypes.bool,
    })
  ).isRequired,
  experienceInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      company: PropTypes.string,
      position: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
      location: PropTypes.string,
      desc: PropTypes.string,
      isShow: PropTypes.bool,
    })
  ).isRequired,
};
export default Display;
