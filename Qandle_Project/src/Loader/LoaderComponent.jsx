// import React from 'react'
// import "./Loader.css";
// const LoaderComponent = () => {
//   const letters = ['S', 'U', 'M', 'A', 'G', 'O'];

//   return (
//     <div className="graph-loader-container">
//       <div className="bars">
//         {letters.map((char, i) => (
//           <div className="bar-container" key={i}>
//             <div className={`bar bar-${i}`}></div>
//             <span className="label">{char}</span>
//           </div>
//         ))}
//       </div>
//       <div className="loading-text">Loading Attendance Data...</div>
//     </div>
//   );
// };

// export default LoaderComponent

import React from 'react'
import "./Loader.css";
import sumagoLogo from "../assets/SumagoLogo.png";

const LoaderComponent = () => {

  return (
    <div className="sumago-loader-container">
      <div className="rotating-glow-ring">
        <div className="inner-logo-circle">
          <img src={sumagoLogo} alt="SUMAGO Logo" className="logo-img" />
        </div>
      </div>
      <div className="loader-caption">Loading Attendance System...</div>
    </div>
  );
};

export default LoaderComponent
