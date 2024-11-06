import PropTypes from "prop-types";

function Display({ personalInfo, educationInfo, experienceInfo }) {
  return (
    <div className="bg-gray-100 aspect-[10/14.14] w-full max-w-xl mx-auto">
      <h1>{personalInfo.fullname}</h1>
      <div>{personalInfo.email}</div>
      <div>{personalInfo.phone}</div>
      <div>{personalInfo.address}</div>
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
