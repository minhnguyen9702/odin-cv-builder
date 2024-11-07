import PropTypes from "prop-types";

function ButtonsTray({ onClear, onLoadExample, onDownload }) {
  return (
    <div className="mx-auto p-3 bg-white rounded-lg shadow-md mb-6 flex justify-around">
      <button
        onClick={onClear}
        className="px-6 py-3 text-sm bg-red-500 text-white rounded hover:bg-red-600"
      >
        Clear Resume
      </button>
      <button
        onClick={onLoadExample}
        className="px-6 py-3 text-sm bg-gray-100 text-black rounded hover:bg-gray-200"
      >
        Load Example
      </button>
      <button
        onClick={onDownload}
        className="px-6 py-3 text-sm bg-green-500 text-white rounded hover:bg-green-600"
      >
        Download
      </button>
    </div>
  );
}

ButtonsTray.propTypes = {
  onClear: PropTypes.func,
  onLoadExample: PropTypes.func,
  onDownload: PropTypes.func,
};

ButtonsTray.defaultProps = {
  onClear: () => {}, // No-op function if not passed
  onLoadExample: () => {}, // No-op function if not passed
  onDownload: () => {}, // No-op function if not passed
};

export default ButtonsTray;
