export function Loader() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="57"
      height="57"
      stroke="#fff"
      viewBox="0 0 57 57"
    >
      <g
        fill="none"
        fillRule="evenodd"
        strokeWidth="2"
        transform="translate(1 1)"
      >
        <circle cx="5" cy="50" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="50;5;50;50"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="5;27;49;5"
          ></animate>
        </circle>
        <circle cx="27" cy="5" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="5"
            repeatCount="indefinite"
            to="5"
            values="5;50;50;5"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="27"
            repeatCount="indefinite"
            to="27"
            values="27;49;5;27"
          ></animate>
        </circle>
        <circle cx="49" cy="50" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="50;50;5;50"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="49"
            repeatCount="indefinite"
            to="49"
            values="49;5;27;49"
          ></animate>
        </circle>
      </g>
    </svg>
  );
}

export function ClipboardIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5 2V1h5v1H5zm-.25-2A.75.75 0 004 .75V1h-.5A1.5 1.5 0 002 2.5v10A1.5 1.5 0 003.5 14H7v-1H3.5a.5.5 0 01-.5-.5v-10a.5.5 0 01.5-.5H4v.25c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75V2h.5a.5.5 0 01.5.5V7h1V2.5A1.5 1.5 0 0011.5 1H11V.75a.75.75 0 00-.75-.75h-5.5zM9 8.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1zm.5 1.5a.5.5 0 11-1 0 .5.5 0 011 0zm-.5 2.5a.5.5 0 100-1 .5.5 0 000 1zm0 2a.5.5 0 100-1 .5.5 0 000 1zm-6-4a.5.5 0 100-1 .5.5 0 000 1zm.5 1.5a.5.5 0 11-1 0 .5.5 0 011 0zM8.5 15a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zm1.5.5a.5.5 0 100-1 .5.5 0 000 1z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function DownIcon({ width = 15, height = 15 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5 2a.5.5 0 01.5.5v8.793l3.146-3.147a.5.5 0 01.708.708l-4 4a.5.5 0 01-.708 0l-4-4a.5.5 0 11.708-.708L7 11.293V2.5a.5.5 0 01.5-.5z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function CloseIcon({ width = 15, height = 15 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        stroke="10"
        d="M12.854 2.854a.5.5 0 00-.708-.708L7.5 6.793 2.854 2.146a.5.5 0 10-.708.708L6.793 7.5l-4.647 4.646a.5.5 0 00.708.708L7.5 8.207l4.646 4.647a.5.5 0 00.708-.708L8.207 7.5l4.647-4.646z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function InfoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.5.877a6.623 6.623 0 100 13.246A6.623 6.623 0 007.5.877zM1.827 7.5a5.673 5.673 0 1111.346 0 5.673 5.673 0 01-11.346 0zm6.423-3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6 6h1.5a.5.5 0 01.5.5V10h1v1H6v-1h1V7H6V6z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
export function LinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.5 0a.5.5 0 01.5.5v2a.5.5 0 11-1 0v-2a.5.5 0 01.5-.5zM.646.646a.5.5 0 01.708 0l1.5 1.5a.5.5 0 11-.708.708l-1.5-1.5a.5.5 0 010-.708zM0 4.5A.5.5 0 01.5 4h2a.5.5 0 110 1h-2a.5.5 0 01-.5-.5zm12 6a.5.5 0 01.5-.5h2a.5.5 0 110 1h-2a.5.5 0 01-.5-.5zM10.5 12a.5.5 0 01.5.5v2a.5.5 0 01-1 0v-2a.5.5 0 01.5-.5zm1.646.146a.5.5 0 01.707 0l1.5 1.5a.5.5 0 01-.707.707l-1.5-1.5a.5.5 0 010-.707zM7.765 3.7c.427-.427.592-.589.747-.694.676-.46 1.531-.468 2.166-.051.145.095.299.245.71.657.412.412.563.566.658.71.417.636.408 1.49-.052 2.167-.104.154-.267.32-.694.747l-.619.619a.5.5 0 00.708.707l.618-.62.043-.042c.37-.37.606-.606.772-.85.675-.993.71-2.287.06-3.277-.16-.241-.39-.472-.742-.823l-.044-.045-.045-.045c-.351-.351-.582-.582-.824-.74-.99-.651-2.283-.616-3.277.059-.243.165-.48.402-.85.771l-.042.043-.619.619a.5.5 0 10.707.707l.619-.619zM2.992 7.06l-.043.042c-.37.37-.606.606-.771.85-.676.993-.71 2.287-.06 3.277.158.241.39.472.74.824l.046.044.044.045c.351.351.582.582.824.74.99.651 2.284.616 3.278-.06.243-.164.48-.4.849-.77l.043-.043.618-.619a.5.5 0 00-.707-.707l-.619.619c-.427.427-.592.589-.746.694-.677.46-1.532.468-2.167.051-.144-.095-.299-.245-.71-.657-.412-.412-.563-.566-.657-.71-.418-.636-.409-1.49.05-2.167.106-.154.268-.32.695-.747l.619-.619a.5.5 0 10-.707-.707l-.62.62z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function RightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 01-.944.12l-2.75-2.5a.625.625 0 01.841-.925l2.208 2.007 3.849-5.886a.625.625 0 01.865-.181z"
      ></path>
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.146 3.146a.5.5 0 01.708 0l4 4a.5.5 0 010 .708l-4 4a.5.5 0 01-.708-.708L11.293 8H2.5a.5.5 0 010-1h8.793L8.146 3.854a.5.5 0 010-.708z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export function PaytmIcon() {
  return (
    <svg
      x="0"
      y="0"
      enableBackground="new 0 0 122.88 38.52"
      viewBox="0 0 122.88 38.52"
    >
      <path
        d="M122.47 11.36c-1.12-3.19-4.16-5.48-7.72-5.48h-.08c-2.32 0-4.41.97-5.9 2.52a8.16 8.16 0 00-5.9-2.52h-.07c-2.04 0-3.91.75-5.34 1.98v-.62c-.05-.63-.56-1.12-1.2-1.12h-5.48c-.67 0-1.21.54-1.21 1.21v29.74c0 .67.54 1.21 1.21 1.21h5.48a1.2 1.2 0 001.19-1.04V15.89c0-.08 0-.14.01-.21.09-.95.79-1.74 1.89-1.83h1.01c.46.04.85.2 1.15.45.48.38.74.96.74 1.6l.02 21.24c0 .67.54 1.22 1.21 1.22h5.48a1.2 1.2 0 001.2-1.15V15.88c0-.7.32-1.34.89-1.71.28-.18.62-.3 1.01-.34h1.01c1.19.1 1.9 1 1.9 2.05l.02 21.22c0 .67.54 1.21 1.21 1.21h5.48c.64 0 1.17-.5 1.21-1.13V13.91c-.03-1.31-.2-1.92-.42-2.55zM85.39 6.2h-3.13V1.12 1.1A1.105 1.105 0 0080.94.02c-3.47.95-2.78 5.76-9.12 6.17h-.61c-.09 0-.18.01-.27.03h-.01.01c-.53.13-.94.61-.94 1.19v5.48c0 .67.54 1.21 1.21 1.21h3.3l-.01 23.22c0 .66.54 1.2 1.2 1.2h5.42c.66 0 1.2-.54 1.2-1.2V14.1h3.07c.66 0 1.21-.55 1.21-1.21V7.41c0-.67-.54-1.21-1.21-1.21z"
        fill="#00BAF2"
      ></path>
      <path
        d="M65.69 6.2h-5.48c-.66 0-1.21.54-1.21 1.21v11.33c-.01.7-.58 1.26-1.28 1.26h-2.29c-.71 0-1.29-.57-1.29-1.28l-.02-11.31c0-.67-.54-1.21-1.21-1.21h-5.48c-.67 0-1.21.54-1.21 1.21v12.41c0 4.71 3.36 8.08 8.08 8.08 0 0 3.54 0 3.65.02.64.07 1.13.61 1.13 1.27 0 .65-.48 1.19-1.12 1.27-.03 0-.06.01-.09.02l-8.01.03c-.67 0-1.21.54-1.21 1.21v5.47c0 .67.54 1.21 1.21 1.21h8.95c4.72 0 8.08-3.36 8.08-8.07V7.41c.01-.67-.53-1.21-1.2-1.21zm-31.16.03h-7.6c-.67 0-1.22.51-1.22 1.13v5.14c0 .66.58 1.21 1.29 1.21h7.24c.57.09 1.02.51 1.09 1.16v.71c-.06.62-.51 1.07-1.06 1.12h-3.58c-4.77 0-8.16 3.17-8.16 7.61v6.37c0 4.42 2.92 7.56 7.65 7.56h9.93c1.78 0 3.23-1.35 3.23-3.01V14.45c0-5.04-2.6-8.22-8.81-8.22zm.87 22.86v.86c0 .07-.01.14-.02.2s-.03.12-.05.18c-.17.48-.65.83-1.22.83h-2.28c-.71 0-1.29-.54-1.29-1.21v-1.03V25.26c0-.66.58-1.2 1.29-1.2h2.28c.71 0 1.29.54 1.29 1.21v3.82zM13.16 6.19H1.19C.53 6.19 0 6.73 0 7.38V37.14c0 .66.49 1.2 1.11 1.21h5.58c.67 0 1.21-.54 1.21-1.21l.02-8.32h5.24c4.38 0 7.44-3.04 7.44-7.45v-7.72c0-4.4-3.06-7.46-7.44-7.46zm-.48 10.04v3.38c0 .71-.57 1.29-1.28 1.29H7.93v-6.77h3.47c.71 0 1.28.57 1.28 1.28v.82z"
        fill="#20336B"
      ></path>
    </svg>
  );
}

export function GpayIcon() {
  return (
    <svg preserveAspectRatio="xMidYMid" viewBox="0 0 256 218">
      <path
        fill="#EA4335"
        d="M232.504 42.169c-25.25-14.576-57.538-5.915-72.13 19.336l-36.782 63.717c-10.643 18.4 3.059 24.829 18.337 33.99l35.393 20.427c11.986 6.914 27.295 2.81 34.208-9.16l37.813-65.482c12.702-22.004 5.165-50.125-16.839-62.828z"
      ></path>
      <path
        fill="#FBBC04"
        d="M190.884 68.542l-35.393-20.428c-19.538-10.846-30.603-11.564-38.624 1.186l-52.201 90.404c-14.576 25.234-5.9 57.507 19.335 72.051 22.004 12.703 50.126 5.166 62.829-16.838l53.2-92.152c6.944-11.985 2.84-27.31-9.146-34.223z"
      ></path>
      <path
        fill="#34A853"
        d="M197.697 22.069L172.837 7.71c-27.497-15.87-62.657-6.46-78.528 21.037l-47.332 81.976c-6.991 12.095-2.84 27.576 9.255 34.551l27.84 16.074c13.748 7.944 31.32 3.23 39.264-10.518l54.073-93.65c11.205-19.397 36.003-26.045 55.4-14.84l-35.112-20.272z"
      ></path>
      <path
        fill="#4285F4"
        d="M101.033 52.203L74.16 36.722c-11.985-6.898-27.294-2.81-34.207 9.145L7.71 101.579c-15.87 27.419-6.46 62.5 21.037 78.325l20.459 11.782L74.02 205.98l10.768 6.195c-19.117-12.796-25.188-38.436-13.5-58.63l8.35-14.42 30.571-52.825c6.898-11.923 2.794-27.2-9.176-34.098z"
      ></path>
    </svg>
  );
}

export function PhonepeIcon() {
  return (
    <svg viewBox="0 0 122.88 122.88">
      <path
        d="M75.56 1.66a61.42 61.42 0 1045.66 73.9 61.42 61.42 0 00-45.66-73.9z"
        fill="#5f259f"
      ></path>
      <path
        d="M89.32 45.41A4.54 4.54 0 0084.86 41h-8.24L57.75 19.33a7 7 0 00-7.21-2.06L44 19.33a1.52 1.52 0 00-.69 2.4l20.61 19.56H32.7A1.63 1.63 0 0031 43v3.43a4.54 4.54 0 004.46 4.46h4.81v16.48c0 12.35 6.52 19.56 17.5 19.56a23.66 23.66 0 009.61-1.72v11a5.42 5.42 0 005.49 5.49h4.8a2.22 2.22 0 002.06-2.06V50.56h7.87a1.63 1.63 0 001.72-1.72v-3.43zm-22 29.51a16.38 16.38 0 01-6.87 1.37c-5.49 0-8.23-2.74-8.23-8.92V50.9h15.1v24z"
        fill="#fff"
      ></path>
    </svg>
  );
}
