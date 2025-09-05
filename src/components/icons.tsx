import { GlobeIcon, MailIcon } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  home: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path strokeDasharray="16" strokeDashoffset="16" d="M4.5 21.5h15">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="16;0"
          ></animate>
        </path>
        <path
          strokeDasharray="16"
          strokeDashoffset="16"
          d="M4.5 21.5v-13.5M19.5 21.5v-13.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="16;0"
          ></animate>
        </path>
        <path strokeDasharray="28" strokeDashoffset="28" d="M2 10l10 -8l10 8">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.4s"
            dur="0.4s"
            values="28;0"
          ></animate>
        </path>
        <path strokeDasharray="24" strokeDashoffset="24" d="M9.5 21.5v-9h5v9">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.4s"
            values="24;0"
          ></animate>
        </path>
      </g>
    </svg>
  ),
  notebook: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="72"
          strokeDashoffset="72"
          d="M12 3h7v18h-14v-18h7Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="72;0"
          ></animate>
        </path>
        <path
          strokeDasharray="12"
          strokeDashoffset="12"
          strokeWidth="1"
          d="M14.5 3.5v3h-5v-3"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
        <path strokeDasharray="4" strokeDashoffset="4" d="M9 10h3">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.9s"
            dur="0.2s"
            values="4;0"
          ></animate>
        </path>
        <path strokeDasharray="6" strokeDashoffset="6" d="M9 13h5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.1s"
            dur="0.2s"
            values="6;0"
          ></animate>
        </path>
        <path strokeDasharray="8" strokeDashoffset="8" d="M9 16h6">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.3s"
            dur="0.2s"
            values="8;0"
          ></animate>
        </path>
      </g>
    </svg>
  ),
  sun: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="2"
          strokeDashoffset="2"
          d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
        >
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.6s"
            dur="0.2s"
            values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
        <path
          strokeDasharray="2"
          strokeDashoffset="2"
          d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
        >
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.8s"
            dur="0.2s"
            values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
        <animateTransform
          attributeName="transform"
          dur="30s"
          repeatCount="indefinite"
          type="rotate"
          values="0 12 12;360 12 12"
        ></animateTransform>
      </g>
      <mask id="lineMdMoonAltToSunnyOutlineLoopTransition0">
        <circle cx="12" cy="12" r="12" fill="#fff"></circle>
        <circle cx="12" cy="12" r="8">
          <animate
            fill="freeze"
            attributeName="r"
            dur="0.4s"
            values="8;4"
          ></animate>
        </circle>
        <circle cx="18" cy="6" r="12" fill="#fff">
          <animate
            fill="freeze"
            attributeName="cx"
            dur="0.4s"
            values="18;22"
          ></animate>
          <animate
            fill="freeze"
            attributeName="cy"
            dur="0.4s"
            values="6;2"
          ></animate>
          <animate
            fill="freeze"
            attributeName="r"
            dur="0.4s"
            values="12;3"
          ></animate>
        </circle>
        <circle cx="18" cy="6" r="10">
          <animate
            fill="freeze"
            attributeName="cx"
            dur="0.4s"
            values="18;22"
          ></animate>
          <animate
            fill="freeze"
            attributeName="cy"
            dur="0.4s"
            values="6;2"
          ></animate>
          <animate
            fill="freeze"
            attributeName="r"
            dur="0.4s"
            values="10;1"
          ></animate>
        </circle>
      </mask>
      <circle
        cx="12"
        cy="12"
        r="10"
        mask="url(#lineMdMoonAltToSunnyOutlineLoopTransition0)"
        fill="currentColor"
      >
        <animate
          fill="freeze"
          attributeName="r"
          dur="0.4s"
          values="10;6"
        ></animate>
      </circle>
    </svg>
  ),
  moon: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="4"
        strokeDashoffset="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5">
          <animate
            id="lineMdMoonAltLoop0"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s;lineMdMoonAltLoop0.begin+6s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonAltLoop0.begin+2s;lineMdMoonAltLoop0.begin+4s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonAltLoop0.begin+1.2s;lineMdMoonAltLoop0.begin+3.2s;lineMdMoonAltLoop0.begin+5.2s"
            dur="0.4s"
            values="0;4"
          ></animate>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonAltLoop0.begin+1.8s"
            to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"
          ></set>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonAltLoop0.begin+3.8s"
            to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"
          ></set>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonAltLoop0.begin+5.8s"
            to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"
          ></set>
        </path>
        <path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5">
          <animate
            id="lineMdMoonAltLoop1"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="1.1s;lineMdMoonAltLoop1.begin+6s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonAltLoop1.begin+2s;lineMdMoonAltLoop1.begin+4s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonAltLoop1.begin+1.2s;lineMdMoonAltLoop1.begin+3.2s;lineMdMoonAltLoop1.begin+5.2s"
            dur="0.4s"
            values="0;4"
          ></animate>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonAltLoop1.begin+1.8s"
            to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"
          ></set>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonAltLoop1.begin+3.8s"
            to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"
          ></set>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonAltLoop1.begin+5.8s"
            to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"
          ></set>
        </path>
        <path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5">
          <animate
            id="lineMdMoonAltLoop2"
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="2s;lineMdMoonAltLoop2.begin+6s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonAltLoop2.begin+2s"
            dur="0.4s"
            values="4;0"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="lineMdMoonAltLoop2.begin+1.2s;lineMdMoonAltLoop2.begin+3.2s"
            dur="0.4s"
            values="0;4"
          ></animate>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonAltLoop2.begin+1.8s"
            to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"
          ></set>
          <set
            fill="freeze"
            attributeName="d"
            begin="lineMdMoonAltLoop2.begin+5.8s"
            to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"
          ></set>
        </path>
      </g>
      <path
        fill="none"
        stroke="currentColor"
        strokeDasharray="56"
        strokeDashoffset="56"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.6s"
          values="56;0"
        ></animate>
      </path>
    </svg>
  ),
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="64"
          strokeDashoffset="64"
          d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          ></animate>
        </path>
        <path
          strokeDasharray="24"
          strokeDashoffset="24"
          d="M3 6.5l9 5.5l9 -5.5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.6s"
            dur="0.2s"
            values="24;0"
          ></animate>
        </path>
      </g>
    </svg>
  ),
  linkedin: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      {...props}
    >
      <circle cx="4" cy="4" r="2" fill="currentColor" fillOpacity="0">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.15s"
          values="0;1"
        ></animate>
      </circle>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
      >
        <path strokeDasharray="12" strokeDashoffset="12" d="M4 10v10">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.15s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
        <path strokeDasharray="12" strokeDashoffset="12" d="M10 10v10">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.45s"
            dur="0.2s"
            values="12;0"
          ></animate>
        </path>
        <path
          strokeDasharray="24"
          strokeDashoffset="24"
          d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.65s"
            dur="0.2s"
            values="24;0"
          ></animate>
        </path>
      </g>
    </svg>
  ),
  x: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      {...props}
    >
      <g fill="currentColor">
        <path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z">
          <animate
            fill="freeze"
            attributeName="d"
            dur="0.4s"
            values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"
          ></animate>
        </path>
        <path d="M3 2h5v0h-5zM16 22h5v0h-5z">
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.4s"
            dur="0.4s"
            values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"
          ></animate>
        </path>
        <path d="M18.5 2h3.5L22 2h-3.5z">
          <animate
            fill="freeze"
            attributeName="d"
            begin="0.5s"
            dur="0.4s"
            values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"
          ></animate>
        </path>
      </g>
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>youtube</title>
      <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
    </svg>
  ),
  reddit: (props: IconProps) => (<svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="32px"
    height="32px"
    {...props}
  >
    <mask id="lineMdRedditLoop0">
      <g fill="#fff">
        <path
          fillOpacity="0"
          stroke="#fff"
          strokeDasharray="48"
          strokeDashoffset="48"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9.42c4.42 0 8 2.37 8 5.29c0 2.92 -3.58 5.29 -8 5.29c-4.42 0 -8 -2.37 -8 -5.29c0 -2.92 3.58 -5.29 8 -5.29Z"
        >
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="0.6s"
            dur="0.4s"
            values="0;1"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="48;0"
          ></animate>
        </path>
        <circle cx="7.24" cy="11.97" r="2.24" opacity="0">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="1s"
            dur="0.2s"
            values="7.24;3.94"
          ></animate>
          <set fill="freeze" attributeName="opacity" begin="1s" to="1"></set>
        </circle>
        <circle cx="16.76" cy="11.97" r="2.24" opacity="0">
          <animate
            fill="freeze"
            attributeName="cx"
            begin="1s"
            dur="0.2s"
            values="16.76;20.06"
          ></animate>
          <set fill="freeze" attributeName="opacity" begin="1s" to="1"></set>
        </circle>
        <circle cx="18.45" cy="4.23" r="1.61" opacity="0">
          <animate
            attributeName="cx"
            begin="2.4s"
            dur="6s"
            repeatCount="indefinite"
            values="18.45;5.75;18.45"
          ></animate>
          <set
            fill="freeze"
            attributeName="opacity"
            begin="2.6s"
            to="1"
          ></set>
        </circle>
      </g>
      <path
        fill="none"
        stroke="#fff"
        strokeDasharray="12"
        strokeDashoffset="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".8"
        d="M12 8.75L13.18 3.11L18.21 4.18"
      >
        <animate
          attributeName="d"
          begin="2.4s"
          dur="6s"
          repeatCount="indefinite"
          values="M12 8.75L13.18 3.11L18.21 4.18;M12 8.75L12 2L12 4.18;M12 8.75L10.82 3.11L5.79 4.18;M12 8.75L12 2L12 4.18;M12 8.75L13.18 3.11L18.21 4.18"
        ></animate>
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="2.4s"
          dur="0.2s"
          values="12;0"
        ></animate>
      </path>
      <g fillOpacity="0">
        <circle cx="8.45" cy="13.59" r="1.61">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1.2s"
            dur="0.4s"
            values="0;1"
          ></animate>
        </circle>
        <circle cx="15.55" cy="13.59" r="1.61">
          <animate
            fill="freeze"
            attributeName="fill-opacity"
            begin="1.6s"
            dur="0.4s"
            values="0;1"
          ></animate>
        </circle>
      </g>
      <path
        fill="none"
        stroke="#000"
        strokeDasharray="10"
        strokeDashoffset="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth=".8"
        d="M8.47 17.52c0 0 0.94 1.06 3.53 1.06c2.58 0 3.53 -1.06 3.53 -1.06"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="2s"
          dur="0.2s"
          values="10;0"
        ></animate>
      </path>
    </mask>
    <rect
      width="24"
      height="24"
      fill="currentColor"
      mask="url(#lineMdRedditLoop0)"
    ></rect>
  </svg>
  ),
  github: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      {...props}
    >
      <mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0">
        <g fill="#fff">
          <ellipse cx="9.5" cy="9" rx="1.5" ry="1"></ellipse>
          <ellipse cx="14.5" cy="9" rx="1.5" ry="1"></ellipse>
        </g>
      </mask>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path
          strokeDasharray="32"
          strokeDashoffset="32"
          d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.7s"
            values="32;0"
          ></animate>
        </path>
        <path
          strokeDasharray="10"
          strokeDashoffset="10"
          d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
        >
          <animate
            attributeName="d"
            dur="3s"
            repeatCount="indefinite"
            values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"
          ></animate>
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.8s"
            dur="0.2s"
            values="10;0"
          ></animate>
        </path>
      </g>
      <rect
        width="8"
        height="4"
        x="8"
        y="11"
        fill="currentColor"
        mask="url(#lineMdGithubLoop0)"
      >
        <animate
          attributeName="y"
          dur="10s"
          keyTimes="0;0.45;0.46;0.54;0.55;1"
          repeatCount="indefinite"
          values="11;11;7;7;11;11"
        ></animate>
      </rect>
    </svg>
  ),
};
