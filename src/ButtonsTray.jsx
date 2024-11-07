import PropTypes from "prop-types";

function ButtonsTray({ onClear, onLoadExample, onDownload }) {
  return (
    <div className="mx-auto p-6 bg-white rounded-lg shadow-md mb-6 flex justify-between">
      <button onClick={onClear}>Clear Resume</button>
      <button onClick={onLoadExample}>Load Example</button>
      <button onClick={onDownload}>Download Resume</button>
    </div>
  );
}

ButtonsTray.propTypes = {
  onClear: PropTypes.func,
  onLoadExample: PropTypes.func,
  onDownload: PropTypes.func,
};

export default ButtonsTray;
