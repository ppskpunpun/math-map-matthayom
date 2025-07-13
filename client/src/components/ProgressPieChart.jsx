import React from 'react';

export default function ProgressPieChart({ percentage = 75, size = 150, color = '#00aaff' }) {
  const radius = 16;
  const stroke = 4;
  const normalizedRadius = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalizedRadius;
  const strokeDashoffset = circumference * (1 - percentage / 100);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      style={{ position: 'relative' }}
    >
      {/* Background Circle */}
      <circle
        cx="18"
        cy="18"
        r={normalizedRadius}
        fill="none"
        stroke="#eee"
        strokeWidth={stroke}
      />
      {/* Progress Circle */}
      <circle
        cx="18"
        cy="18"
        r={normalizedRadius}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 0.5s ease', transform: 'rotate(-90deg)', transformOrigin: 'center' }}
      />
      {/* Center Text */}
      <text
        x="18"
        y="20.5"
        textAnchor="middle"
        fontSize="5"
        fontWeight="bold"
        fill="#505050"
      >
        {percentage}%
      </text>
    </svg>
  );
}
