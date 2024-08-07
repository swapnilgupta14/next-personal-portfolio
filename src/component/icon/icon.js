import React from 'react';

export const Custom = () => {
  return (
    <svg fill="ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.92098 2.29927C6.93571 1.53286 5.5 2.23498 5.5 3.48325V20.492C5.5 21.9142 7.2945 22.538 8.17661 21.4224L12.3676 16.1222C12.6806 15.7264 13.1574 15.4956 13.6619 15.4956H20.5143C21.9425 15.4956 22.5626 13.6885 21.4353 12.8116L7.92098 2.29927Z" fill="#ffffff"/></svg>
  );
};

export const Tray = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 50 50">
      <path fill="#ffffff" d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"></path>
    </svg>
  );
};

export const HorArrow = ({ width, height, fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" id="next-arrow"><path fill={fill} d="M22.707,12.707a1,1,0,0,0,0-1.414l-5-5a1,1,0,0,0-1.414,1.414L19.586,11H2a1,1,0,0,0,0,2H19.586l-3.293,3.293a1,1,0,0,0,1.414,1.414Z"></path></svg>
  )
};

export const Sun = ({ width, height, fill }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24"><path fill={fill} d="M7 12a5 5 0 1 1 5 5 5 5 0 0 1-5-5zm5-7a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1zm-1 15v1a1 1 0 0 0 2 0v-1a1 1 0 0 0-2 0zm10-9h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2zM3 13h1a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zm14.657-5.657a1 1 0 0 0 .707-.293l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 0 0 .707 1.707zM5.636 16.95l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 0-1.414-1.414zm11.314 0a1 1 0 0 0 0 1.414l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 0-1.414 0zM5.636 7.05A1 1 0 0 0 7.05 5.636l-.707-.707a1 1 0 0 0-1.414 1.414z" /></svg>
  );
};

export const Cross = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" id="close"><g><path fill='#ffffff' d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path></g></svg>);
};

export const sunAnimatedIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 50 50">
      <path d="M 24.984375 3.9863281 A 1.0001 1.0001 0 0 0 24 5 L 24 11 A 1.0001 1.0001 0 1 0 26 11 L 26 5 A 1.0001 1.0001 0 0 0 24.984375 3.9863281 z M 10.888672 9.890625 A 1.0001 1.0001 0 0 0 10.193359 11.607422 L 14.392578 15.806641 A 1.0001 1.0001 0 1 0 15.806641 14.392578 L 11.607422 10.193359 A 1.0001 1.0001 0 0 0 10.888672 9.890625 z M 39.080078 9.890625 A 1.0001 1.0001 0 0 0 38.392578 10.193359 L 34.193359 14.392578 A 1.0001 1.0001 0 1 0 35.607422 15.806641 L 39.806641 11.607422 A 1.0001 1.0001 0 0 0 39.080078 9.890625 z M 25 15 A 1.0001 1.0001 0 0 0 24.591797 15.082031 C 19.260044 15.307579 15 19.611572 15 25 C 15 30.533333 19.466667 35 25 35 C 30.533333 35 35 30.533333 35 25 C 35 19.612238 30.740979 15.308576 25.410156 15.082031 A 1.0001 1.0001 0 0 0 25 15 z M 25 17 C 29.466667 17 33 20.533333 33 25 C 33 29.466667 29.466667 33 25 33 C 20.533333 33 17 29.466667 17 25 C 17 20.533333 20.533333 17 25 17 z M 5 24 A 1.0001 1.0001 0 1 0 5 26 L 11 26 A 1.0001 1.0001 0 1 0 11 24 L 5 24 z M 39 24 A 1.0001 1.0001 0 1 0 39 26 L 45 26 A 1.0001 1.0001 0 1 0 45 24 L 39 24 z M 15.080078 33.890625 A 1.0001 1.0001 0 0 0 14.392578 34.193359 L 10.193359 38.392578 A 1.0001 1.0001 0 1 0 11.607422 39.806641 L 15.806641 35.607422 A 1.0001 1.0001 0 0 0 15.080078 33.890625 z M 34.888672 33.890625 A 1.0001 1.0001 0 0 0 34.193359 35.607422 L 38.392578 39.806641 A 1.0001 1.0001 0 1 0 39.806641 38.392578 L 35.607422 34.193359 A 1.0001 1.0001 0 0 0 34.888672 33.890625 z M 24.984375 37.986328 A 1.0001 1.0001 0 0 0 24 39 L 24 45 A 1.0001 1.0001 0 1 0 26 45 L 26 39 A 1.0001 1.0001 0 0 0 24.984375 37.986328 z"></path>
    </svg>
  );
};

export const DropDown = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} id="arrow">
      <path fill="none" d="M0 0h48v48H0z"></path>
      <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 24-8-8h16l-8 8z"></path></svg>
  );
};

export const DownloadIcon = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 24 24"><g data-name="93.Download"><path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2z" /><path d="M7 17h10v2H7zM12 15.414l-4.707-4.707 1.414-1.414L12 12.586l3.293-3.293 1.414 1.414L12 15.414z" /><path d="M11 5h2v9h-2z" /></g></svg>
  )
}


export const Github = ({ width, height, color = '#ffffff' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 50 50">
      <path fill={color} d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
    </svg>
  );
};

export const Linkedin = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 50 50">
      <path fill="#ffffff" d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
    </svg>
  );
};

export const HackerRank = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 32 32">
      <path fill="#ffffff" d="M 15.998047 3 C 14.225047 3 5.5352031 7.9839062 4.6582031 9.5039062 C 3.7802031 11.024906 3.7802031 20.983047 4.6582031 22.498047 C 5.5392031 24.017047 14.229047 29 15.998047 29 C 17.762047 29 26.451938 24.019953 27.335938 22.501953 C 28.222938 20.979953 28.222938 11.014047 27.335938 9.4980469 L 27.335938 9.4960938 C 26.444937 7.9790937 17.756047 3 15.998047 3 z M 15.996094 5.0117188 C 17.693094 5.3647187 24.417703 9.2167656 25.595703 10.509766 C 26.135703 12.150766 26.134703 19.844281 25.595703 21.488281 C 24.425703 22.779281 17.695094 26.636281 15.996094 26.988281 C 14.298094 26.638281 7.5723906 22.783234 6.4003906 21.490234 C 5.8653906 19.842234 5.8653906 12.155766 6.4003906 10.509766 C 7.5693906 9.2167656 14.297094 5.3617187 15.996094 5.0117188 z M 13 9 L 11 11 L 12 11 L 12 21 L 14 21 L 14 17 L 18 17 L 18 21 L 17 21 L 19 23 L 21 21 L 20 21 L 20 12 L 18 12 L 18 15 L 14 15 L 14 11 L 15 11 L 13 9 z"></path>
    </svg>
  );
};

export const Mail = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 50 50">
      <path fill="#ffffff" d="M12 23.403V23.39 10.389L11.88 10.3h-.01L9.14 8.28C7.47 7.04 5.09 7.1 3.61 8.56 2.62 9.54 2 10.9 2 12.41v3.602L12 23.403zM38 23.39v.013l10-7.391V12.41c0-1.49-.6-2.85-1.58-3.83-1.46-1.457-3.765-1.628-5.424-.403L38.12 10.3 38 10.389V23.39zM14 24.868l10.406 7.692c.353.261.836.261 1.189 0L36 24.868V11.867L25 20l-11-8.133V24.868zM38 25.889V41c0 .552.448 1 1 1h6.5c1.381 0 2.5-1.119 2.5-2.5V18.497L38 25.889zM12 25.889L2 18.497V39.5C2 40.881 3.119 42 4.5 42H11c.552 0 1-.448 1-1V25.889z"></path>
    </svg>
  );
};

export const Leetcode = ({ width, height }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 16 16">
      <path fill="#ffffff" d="M 10.447266 0.265625 A 0.50005 0.50005 0 0 0 10.103516 0.41796875 L 5.65625 4.8671875 L 3.0957031 7.4257812 A 0.50005 0.50005 0 0 0 2.9785156 7.6035156 C 1.769869 8.9739016 1.7865696 11.063913 3.0957031 12.373047 L 5.65625 14.933594 C 7.0176322 16.294976 9.242133 16.294976 10.603516 14.933594 L 12.853516 12.683594 A 0.50063809 0.50063809 0 1 0 12.144531 11.976562 L 9.8945312 14.226562 C 8.9159134 15.20518 7.3418991 15.20518 6.3632812 14.226562 L 3.8027344 11.666016 C 2.8241166 10.687398 2.8241166 9.1114303 3.8027344 8.1328125 L 6.3632812 5.5742188 C 7.3418991 4.5956009 8.9159135 4.5956009 9.8945312 5.5742188 L 12.144531 7.8242188 A 0.50063784 0.50063784 0 1 0 12.853516 7.1171875 L 10.603516 4.8671875 C 9.9106907 4.174363 8.9943718 3.8431189 8.0820312 3.8554688 L 10.8125 1.125 A 0.50005 0.50005 0 0 0 10.447266 0.265625 z M 7.328125 9.4003906 A 0.50005 0.50005 0 1 0 7.328125 10.400391 L 14.228516 10.400391 A 0.50005 0.50005 0 1 0 14.228516 9.4003906 L 7.328125 9.4003906 z"></path>
    </svg>
  );
};

export const IndicatorIcon = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 2.5C30.5 2.5 13.7 19.3 13.7 38.8 13.7 56.1 29.1 63.4 50 97.5 70.9 63.4 86.3 56.1 86.3 38.8 86.3 19.3 69.5 2.5 50 2.5zM50 0C78.5 0 100 21.5 100 50S78.5 100 50 100 0 78.5 0 50 21.5 0 50 0z"
        fill="black"
      />
    </svg>
  )
}

export const NightIcon = () => {
  return (
    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" width=".28in" height=".28in" viewBox="0 0 20 20">
      <g id="moon"><path d="M9,2.9c-2,0-3.8,.8-5.2,2.2,.7-.3,1.4-.5,2.1-.5,3,.1,5.3,2.7,5.2,5.6-.1,2.9-2.4,5.1-5.2,5.2-.7,0-1.5-.2-2.1-.5,2.8,2.9,7.3,2.9,10.1,.2s3-7.3,.3-10.1c-1.4-1.3-3.3-2.2-5.2-2.1h0Z" fill="none" stroke="#14303f" stroke-linecap="round" stroke-linejoin="round"></path></g>
      <g id="sun"><circle cx="10" cy="9.96" r="4.1" fill="none" stroke="#14303f" stroke-linecap="round" stroke-linejoin="round"></circle>
        <line x1="10" y1="1.56" x2="10" y2="3.46" fill="none" stroke="#14303f" stroke-linecap="round" stroke-linejoin="round"></line>
        <line x1="10" y1="16.46" x2="10" y2="18.36" fill="none" stroke="#14303f" stroke-linecap="round" stroke-linejoin="round"></line>
        <line x1="18.4" y1="9.96" x2="16.5" y2="9.96" fill="none" stroke="#14303f" stroke-linecap="round" stroke-linejoin="round"></line>
        <line x1="3.5" y1="9.96" x2="1.6" y2="9.96" fill="none" stroke="#14303f" stroke-linecap="round" stroke-linejoin="round"></line>
        <line x1="15.9" y1="15.86" x2="14.6" y2="14.56" fill="none" stroke="#14303f" stroke-linecap="round" stroke-linejoin="round"></line>
        <line x1="5.4" y1="5.36" x2="4.1" y2="4.06" fill="none" stroke="#14303f" stroke-linecap="round" stroke-linejoin="round"></line>
        <line x1="15.9" y1="4.06" x2="14.6" y2="5.36" fill="none" stroke="#14303f" stroke-linecap="round" stroke-linejoin="round"></line>
        <line x1="5.4" y1="14.56" x2="4.1" y2="15.86" fill="none" stroke="#14303f" stroke-linecap="round" stroke-linejoin="round"></line></g>
    </svg>
  )
}

export const SVGSymbols = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="fileIcon">
        <path stroke="none" d="M14,0H3A1,1,0,0,0,2,1V23a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8H15a1,1,0,0,1-1-1ZM5,17H19v2H5Zm0-5H19v2H5Zm6-3H5V7h6Z"></path>
        <polygon stroke="none" points="21.414 6 16 6 16 0.586 21.414 6"></polygon>
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="imageIcon">
        <circle stroke="none" cx="9" cy="8" r="2"></circle>
        <path stroke="none" d="M23,1H1C0.448,1,0,1.447,0,2v20c0,0.553,0.448,1,1,1h22c0.552,0,1-0.447,1-1V2C24,1.447,23.552,1,23,1z M22,3v12l-5-5l-6,7l-5-4l-4,4V3H22z"></path>
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="mailIcon">
        <path stroke="none" d="M21,2H3A3,3,0,0,0,0,5V19a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V5A3,3,0,0,0,21,2ZM8.207,15.207l-2.5,2.5a1,1,0,0,1-1.414-1.414l2.5-2.5Zm11.5,2.5a1,1,0,0,1-1.414,0l-2.5-2.5,1.414-1.414,2.5,2.5A1,1,0,0,1,19.707,17.707Zm0-10-7,7a1,1,0,0,1-1.414,0l-7-7A1,1,0,0,1,5.707,6.293L12,12.586l6.293-6.293a1,1,0,1,1,1.414,1.414Z"></path>
      </symbol>
      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="chatIcon">
        <g stroke="none">
          <path d="M21.965,9.575C21.604,14.821,16.384,19,10,19c-0.465,0-0.931-0.026-1.394-0.072 c2.013,1.586,4.939,2.376,7.946,1.967L22,23.618v-5.215c1.293-1.243,2-2.791,2-4.403C24,12.373,23.277,10.822,21.965,9.575z"></path>
          <path d="M10,1C4.477,1,0,4.582,0,9c0,1.797,0.75,3.45,2,4.785V19l4.833-2.416C7.829,16.85,8.892,17,10,17 c5.523,0,10-3.582,10-8S15.523,1,10,1z"></path>
        </g>
      </symbol>
    </svg>
  );
};



export const CIcon = () => (
  <img alt="C Language" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-plain.svg" className="w-12" />
);

export const TypeScriptIcon = () => (
  <img alt="TypeScript" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" className="w-12" />
);

export const ExpressIcon = () => (
  <img alt="Express" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" className="w-12" />
);

export const NodeJSIcon = () => (
  <img alt="NodeJS" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" className="w-12" />
);

export const PostmanIcon = () => (
  <img alt="Postman" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" className="w-12" />
);

export const DartIcon = () => (
  <img alt="Dart" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" className="w-12" />
);

export const FlutterIcon = () => (
  <img alt="Flutter" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-plain.svg" className="w-12" />
);

export const ReactNativeIcon = () => (
  <img alt="React Native" src="https://pagepro.co/blog/wp-content/uploads/2020/03/react-native-logo-884x1024.png" className="w-12" />
);

export const HTMLIcon = () => (
  <img alt="HTML" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="w-12" />
);

export const CSSIcon = () => (
  <img alt="CSS" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" className="w-12" />
);

export const BootstrapIcon = () => (
  <img alt="Bootstrap" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" className="w-12" />
);

export const ReduxIcon = () => (
  <img alt="Redux" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" className="w-12" />
);

export const SassIcon = () => (
  <img alt="Sass" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" className="w-12" />
);

export const JavaScriptIcon = () => (
  <img alt="JavaScript" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="w-12" />
);

export const TailwindCSSIcon = () => (
  <img alt="Tailwind CSS" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" className="w-12" />
);

export const ReactIcon = () => (
  <img alt="React" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" className="w-12" />
);

export const MySQLIcon = () => (
  <img alt="MySQL" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg" className="w-12" />
);

export const MongoDBIcon = () => (
  <img alt="MongoDB" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg" className="w-12" />
);

export const HerokuIcon = () => (
  <img alt="Heroku" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain.svg" className="w-12" />
);

export const GitIcon = () => (
  <img alt="Git" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" className="w-12" />
);

export const FirebaseIcon = () => (
  <img alt="Firebase" src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" className="w-12" />
);



