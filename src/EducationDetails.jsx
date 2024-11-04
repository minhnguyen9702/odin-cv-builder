import PropTypes from "prop-types";
import InputField from "./components/InputField";

function EducationDetails({ educationInfo, onAdd, onChange, onRemove }) {
  const handleHide = (id) => {
    onChange(id, { target: { name: "isShow", value: false } });
  };
  const handleShow = (id) => {
    onChange(id, { target: { name: "isShow", value: true } });
  };

  return (
    <div>
      {educationInfo.map((edu) =>
        edu.isShow ? (
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
            <div className="flex justify-between">
              <button
                onClick={() => onRemove(edu.id)}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                - Education
              </button>
              <button onClick={() => handleHide(edu.id)} className="px-4 py-2 text-sm bg-gray-500 text-white rounded-full hover:bg-gray-600">Hide</button>
            </div>
          </div>
        ) : (
          <div key={edu.id} className="flex justify-between p-4 bg-white rounded-lg shadow-md mb-4">
            <div className="text-gray-700">{edu.school}</div>
            <button onClick={() => handleShow(edu.id)} className="px-4 py-2 text-sm bg-gray-500 text-white rounded-full hover:bg-gray-600">Show</button>
          </div>
        )
      )}
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
      isShow: PropTypes.bool,
    })
  ).isRequired,
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default EducationDetails;
