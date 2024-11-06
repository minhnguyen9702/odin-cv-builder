import PropTypes from "prop-types";
import InputField from "./components/InputField";

function ExperienceDetails({ experienceInfo, onAdd, onChange, onRemove }) {
  const handleHide = (id) => {
    onChange(id, { target: { name: "isShow", value: false } });
  };
  const handleShow = (id) => {
    onChange(id, { target: { name: "isShow", value: true } });
  };

  return (
    <div>
      {experienceInfo.map((exp) =>
        exp.isShow ? (
          <div key={exp.id} className="p-4 bg-white rounded-lg shadow-md mb-4">
            <InputField
              label="Company Name"
              type="text"
              name="company"
              value={exp.company}
              onChange={(e) => onChange(exp.id, e)}
              placeholder="Enter Company Name"
            />
            <InputField
              label="position"
              type="text"
              name="position"
              value={exp.position}
              onChange={(e) => onChange(exp.id, e)}
              placeholder="Enter Position"
            />
            <div className="flex space-x-4">
              <InputField
                label="Start Date"
                type="text"
                name="startDate"
                value={exp.startDate}
                onChange={(e) => onChange(exp.id, e)}
                placeholder="Enter Start Date"
              />
              <InputField
                label="End Date"
                type="text"
                name="endDate"
                value={exp.endDate}
                onChange={(e) => onChange(exp.id, e)}
                placeholder="Enter End Date"
              />
            </div>
            <InputField
              label="Location"
              type="text"
              name="location"
              value={exp.location}
              onChange={(e) => onChange(exp.id, e)}
              placeholder="Enter Location"
            />
            <div className="flex justify-between">
              <button
                onClick={() => onRemove(exp.id)}
                className="px-4 py-2 text-sm bg-red-500 text-white rounded-full hover:bg-red-600"
              >
                - Experience
              </button>
              <button
                onClick={() => handleHide(exp.id)}
                className="px-4 py-2 text-sm bg-gray-500 text-white rounded-full hover:bg-gray-600"
              >
                Hide
              </button>
            </div>
          </div>
        ) : (
          <div
            key={exp.id}
            className="flex justify-between p-4 bg-white rounded-lg shadow-md mb-4"
          >
            <div className="text-gray-700">{exp.company}</div>
            <button
              onClick={() => handleShow(exp.id)}
              className="px-4 py-2 text-sm bg-gray-500 text-white rounded-full hover:bg-gray-600"
            >
              Show
            </button>
          </div>
        )
      )}
      <button
        onClick={onAdd}
        className="block mx-auto px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
      >
        + Experience
      </button>
    </div>
  );
}

ExperienceDetails.propTypes = {
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
  onAdd: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ExperienceDetails;
