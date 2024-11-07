import PropTypes from "prop-types";

function InputField({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  multiline = false,
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-gray-700 font-small mb-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="h-40 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-2 transition-all duration-300 ease"
        ></textarea>
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full p-2 transition-all duration-300 ease"
        ></input>
      )}
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
};

export default InputField;
