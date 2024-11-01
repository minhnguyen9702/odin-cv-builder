import PropTypes from "prop-types";
import InputField from "./components/InputField";

function PersonalDetails({ personalInfo, onChange }) {
  const fields = [
    {
      label: "Fullname",
      type: "text",
      id: "fullname",
      value: personalInfo.fullname,
      onChange: onChange,
      placeholder: "Enter your full name",
    },
    {
      label: "Email",
      type: "email",
      id: "email",
      value: personalInfo.email,
      onChange: onChange,
      placeholder: "Enter your email",
    },
    {
      label: "Phone Number",
      type: "tel",
      id: "phone",
      value: personalInfo.phone,
      onChange: onChange,
      placeholder: "Enter your phone number",
    },
    {
      label: "Address",
      type: "text",
      id: "address",
      value: personalInfo.address,
      onChange: onChange,
      placeholder: "City, Country",
    },
  ];
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Details</h2>
    {fields.map((field)=> (
      <InputField
      key={field.id}
      label={field.label}
      type={field.type}
      id={field.id}
      value={field.value}
      onChange={onChange}
      placeholder={field.placeholder}
      />
    ))}
    </div>
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
