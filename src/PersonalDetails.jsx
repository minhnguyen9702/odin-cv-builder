import PropTypes from "prop-types";

function PersonalDetails({ personalInfo, onChange }) {
  return (
    <>
      <h2>Personal Details</h2>
      <label htmlFor="fullname">Fullname</label>
      <input
        type="text"
        id="fullname"
        name="fullname"
        value={personalInfo.fullname}
        onChange={onChange}
        placeholder="Enter your full name"
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={personalInfo.email}
        onChange={onChange}
        placeholder="Enter your email"
      ></input>

      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={personalInfo.phone}
        onChange={onChange}
        placeholder="Enter your phone number"
      ></input>

      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        value={personalInfo.address}
        onChange={onChange}
        placeholder="City, Country"
      ></input>
    </>
  );
}

PersonalDetails.propTypes = {
  personalInfo: PropTypes.shape({
    fullname: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default PersonalDetails;
