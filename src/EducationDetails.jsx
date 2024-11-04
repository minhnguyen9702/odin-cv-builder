import PropTypes from "prop-types";
import InputField from "./components/InputField";

function EducationDetails({ educationInfo, onAdd, onChange, onRemove }) {
  return (
    <div>
      {educationInfo.map((edu) => (
        <div key={edu.id} className="p-4 bg-white rounded-lg shadow-md mb-4">
          <InputField
            label="School Name"
            type="text"
            name="school"
            value={edu.school}
            onChange={(e) => onChange(edu.id, e)}
            placeholder="Enter School Name"
          />
          <InputField
            label="Degree"
            type="text"
            name="degree"
            value={edu.degree}
            onChange={(e) => onChange(edu.id, e)}
            placeholder="Enter Degree"
          />
          <div className="flex space-x-4">
            <InputField
              label="Start Date"
              type="text"
              name="startDate"
              value={edu.startDate}
              onChange={(e) => onChange(edu.id, e)}
              placeholder="Enter Start Date"
            />
            <InputField
              label="End Date"
              type="text"
              name="endDate"
              value={edu.endDate}
              onChange={(e) => onChange(edu.id, e)}
              placeholder="Enter End Date"
            />
          </div>
          <button
            onClick={() => onRemove(edu.id)}
            className="block mx-auto px-4 py-2 text-sm bg-red-500 text-white rounded-full hover:bg-red-600"
          >
            - Education
          </button>
        </div>
      ))}
      <button
        onClick={onAdd}
        className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        + Education
      </button>
    </div>
  );
}

EducationDetails.propTypes = {
  educationInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      school: PropTypes.string,
      degree: PropTypes.string,
      startDate: PropTypes.string,
      endDate: PropTypes.string,
    })
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default EducationDetails;
