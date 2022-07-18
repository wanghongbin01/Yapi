import React from 'react';
import PropTypes from 'prop-types';

const LogoSVG = props => {
  let length = props.length;
  return (
    <svg className="svg" width={length} height={length} viewBox="0 0 64 64" version="1.1">
      <title>Icon</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F2F2F2" offset="100%" />
        </linearGradient>
        <circle id="path-2" cx="31.9988602" cy="31.9988602" r="2.92886048" />
        <filter
          x="-85.4%"
          y="-68.3%"
          width="270.7%"
          height="270.7%"
          filterUnits="objectBoundingBox"
          id="filter-3"
        >
          <feOffset dx="0" dy="1" in="SourceAlpha" result="shadowOffsetOuter1" />
          <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1" />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.159703351 0"
            type="matrix"
            in="shadowBlurOuter1"
          />
        </filter>
      </defs>
      <g id="首页" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="大屏幕2">

        </g>
      </g>
    </svg>
  );
};

LogoSVG.propTypes = {
  length: PropTypes.any
};

export default LogoSVG;
