import React from "react";

export default function DogSprite() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="95"
      height="100"
      viewBox="0 0 95 100"
      version="1.1"
      xmlSpace="preserve"
    >
      <g>
        <g stroke="none" fillRule="evenodd">
          <g id="dog-costume">
            {/* Tail */}
            <path
              d="M20,70 C18,69 15,68 12,66 C7,62 5,55 2,57 C-1,59 0,72 10,76 C14,78 18,78 21,78 C22,78 28,77 30,74 C32,71 31,70 30,70 C29,69 24,73 20,70 Z"
              stroke="#001026"
              strokeWidth="1.2"
              fill="#A0522D"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Back leg */}
            <path
              d="M35,80 C33,82 27,86 19,88 L18.5,88.2 C18,88.3 17.8,88.8 18,89.2 C19.5,91.3 22,95 17,96 C12,97 4,85 8,82 C10,80.8 12,81.5 13,82 C13.5,82.2 14,82.2 14.5,82.1 C15.5,81.7 17.5,80.9 19,80 C23,77.5 24,76.5 26,75 C28,73.5 32,70 35,73 C38,76 36,79 35,80 Z"
              stroke="#001026"
              strokeWidth="1.2"
              fill="#A0522D"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Front leg */}
            <path
              d="M50,60 C50.5,60.5 56,67 58,65.5 C60,64 63,60 67,63 C71,66 64,71 62,72.5 C55,75 50,70 50,70 C50,70 48,67 48,65 C48,63 48,61 50,60 Z"
              stroke="#001026"
              strokeWidth="1.2"
              fill="#A0522D"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Body */}
            <path
              d="M45,75 C46,74 47,72 48,70 C49,68 50,65 50,65 C51,63 52,59 49,59 C47,59 45,58.5 42,58 C36,57 35,56 33,60 C30,64 24,68 32,75 C32,75 35,79 42,85 C46,89 52,95 54,97 C55,98 56,98.5 57,98.6 C66,99.5 74,98.5 74,94 C74,87 59,89 59,89 C59,89 55,86 53,84 L45,75 Z"
              stroke="#001026"
              strokeWidth="1.2"
              fill="#A0522D"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Belly patch */}
            <path
              d="M48,68 C48,68 50,65 46,62 C42,59 40,62 38,65 C36,68 38,70 40,72 C41.5,73.5 43,74.5 43,74.5 C43,74.5 46,72.5 48,68 Z"
              fill="#FFFFFF"
              strokeWidth="1"
            />
            {/* Head */}
            <path
              d="M52,10 C50,9.5 48,9 45,9 C40,9 36,10.5 36,10.5 L24,3 C23.5,2.8 23,3.1 23,3.5 L25,20 C25.5,19.2 14,33 21,44 C28,55 44,60 62,57 C80,54 85,44 83,38 C82,32 75,30 75,30 C75,30 74.5,26 72,20 C70,17 65,12 65,12 L63,1.5 C62.8,1.2 62,1 61.5,1.2 L52,10 Z"
              stroke="#001026"
              strokeWidth="1.2"
              fill="#A0522D"
            />
            {/* Face patch */}
            <path
              d="M75,30 C75,30 82,32 83,38 C84,44 80,53 62,57 C38,62 27,47 33,37 C39,27 52,36 60,35 C67,34 68,28 75,30 Z"
              fill="#FFFFFF"
              strokeWidth="1"
            />
            {/* Mouth */}
            <path
              d="M45,40 C45,39.5 45.5,39 46,39 C47.5,39.8 53,42 59,42.5 C64.5,43 67.5,42.7 68.5,42.5 C69,42.4 69.5,42.9 69,43.4 C68,46 65,53 55,52.5 C46,51.5 45,46 45,40 Z"
              stroke="#001026"
              strokeWidth="1.2"
              fill="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Whiskers */}
            <path
              d="M83,35 C83,35 90,35 94,32"
              stroke="#001026"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M83,41 C83,41 87,43 94,43"
              stroke="#001026"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M15,31 C15,31 23,34 27,37"
              stroke="#001026"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M15,41 C15,41 23,42 27,41"
              stroke="#001026"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            {/* Eyes */}
            <g id="eye">
              <path
                d="M70,20 C73,25 73,30 71,32 C69,34 65,32 62,27 C59,23 59,18 62,16 C65,14 69,16 70,20 Z"
                stroke="#001026"
                strokeWidth="1.2"
                fill="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="69" cy="27" r="2" fill="#001026" />
            </g>
            <g id="eye">
              <path
                d="M46,23 C49,28 49,33 47,35 C44,37 40,36 37,31 C34,27 34,21 37,19 C40,17 44,19 46,23 Z"
                stroke="#001026"
                strokeWidth="1.2"
                fill="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="44" cy="29" r="2" fill="#001026" />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
