function DetailsWrapper({header, children}) {
  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">
        {header}
      </h2>
      {children}
    </div>
  );
}

export default DetailsWrapper