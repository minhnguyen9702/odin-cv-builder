function DisplayWrapper({ header, children }) {
    return (
      <div className="bg-white aspect-[10/14.14] w-full max-w-2xl mx-auto mt-4 mb-4 shadow-md">
        {children}
      </div>
    );
  }
  
  export default DisplayWrapper