import PropTypes from "prop-types";
import InputField from "./components/InputField";

function EducationDetails({ educationInfo, onAdd, onChange, onRemove }) {
  return (
    <div>
      {educationInfo.map((edu) => (
        <div key={edu.id}>
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
          <div className="flex">
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
          <button onClick={() => onRemove(edu.id)}>-</button>
        </div>
      ))}
      <button onClick={onAdd}>+</button>
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
