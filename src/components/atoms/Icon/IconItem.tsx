
interface IconItemProps {
  className: string;
  border?: string;
  background?: string;
}

interface IconItem {
  label: string;
  icon: Function;
}

const IconItems: IconItem[] = [
  // User
  {
    label: "User",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          className={className}
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="21" fill={background} fillOpacity="0.1" />
          <path
            d="M20.5 20.5C22.6861 20.5 24.4583 18.7278 24.4583 16.5417C24.4583 14.3555 22.6861 12.5833 20.5 12.5833C18.3138 12.5833 16.5416 14.3555 16.5416 16.5417C16.5416 18.7278 18.3138 20.5 20.5 20.5Z"
            fill={background}
          />
          <path
            d="M20.5001 22.4792C16.5338 22.4792 13.3038 25.1392 13.3038 28.4167C13.3038 28.6383 13.478 28.8125 13.6997 28.8125H27.3005C27.5222 28.8125 27.6964 28.6383 27.6964 28.4167C27.6964 25.1392 24.4664 22.4792 20.5001 22.4792Z"
            fill={background}
          />
        </svg>
      );
    },
  },
  // Search
  {
    label: "Search",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          className={className}
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="21" fill={background} fillOpacity="0.1" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.9312 19.5232C13.9312 16.4286 16.4398 13.92 19.5344 13.92C22.6289 13.92 25.1375 16.4286 25.1375 19.5232C25.1375 22.6177 22.6289 25.1263 19.5344 25.1263C16.4398 25.1263 13.9312 22.6177 13.9312 19.5232ZM19.5344 12.5722C15.6954 12.5722 12.5834 15.6842 12.5834 19.5232C12.5834 23.362 15.6954 26.4741 19.5344 26.4741C21.3342 26.4741 22.9742 25.79 24.2088 24.6677L27.2663 27.7252C27.5295 27.9884 27.9561 27.9884 28.2193 27.7252C28.4825 27.4621 28.4825 27.0354 28.2193 26.7722L25.115 23.6679C25.9758 22.5106 26.4853 21.0763 26.4853 19.5232C26.4853 15.6842 23.3732 12.5722 19.5344 12.5722Z"
            fill={background}
          />
        </svg>
      );
    },
  },
  // file
  {
    label: "File",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          className={className}
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="21" fill={background} fillOpacity="0.1" />
          <g clipPath="url(#clip0_622_948)">
            <path
              d="M21.2917 13.375H17.4917C16.605 13.375 16.1616 13.375 15.8229 13.5476C15.525 13.6994 15.2827 13.9416 15.1309 14.2395C14.9584 14.5782 14.9584 15.0216 14.9584 15.9083V25.0917C14.9584 25.9784 14.9584 26.4218 15.1309 26.7605C15.2827 27.0584 15.525 27.3007 15.8229 27.4524C16.1616 27.625 16.605 27.625 17.4917 27.625H20.5M21.2917 13.375L26.0417 18.125M21.2917 13.375V16.8583C21.2917 17.3017 21.2917 17.5234 21.378 17.6927C21.4539 17.8417 21.575 17.9628 21.724 18.0387C21.8933 18.125 22.115 18.125 22.5584 18.125H26.0417M26.0417 18.125V20.5M24.4584 26.0417H27.625M26.0417 24.4583V27.625"
              stroke={background}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_622_948">
              <rect
                width="19"
                height="19"
                fill="white"
                transform="translate(11 11)"
              />
            </clipPath>
          </defs>
        </svg>
      );
    },
  },
  // Work
  {
    label: "Work",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          className={className}
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="21" fill={background} fillOpacity="0.1" />
          <path
            d="M29.4062 15.75H23.6846C23.4878 14.8837 22.813 13.375 20.5 13.375C18.187 13.375 17.5123 14.8837 17.3154 15.75H11.5938C11.266 15.75 11 16.016 11 16.3438V27.0312C11 27.359 11.266 27.625 11.5938 27.625H29.4062C29.734 27.625 30 27.359 30 27.0312V16.3438C30 16.016 29.734 15.75 29.4062 15.75ZM20.5 14.5625C21.787 14.5625 22.2753 15.2287 22.4618 15.75H18.5371C18.7241 15.2314 19.2142 14.5625 20.5 14.5625ZM28.8125 16.9375V19.3125H12.1875V16.9375H28.8125ZM19.6094 20.5H21.3906V21.0938H19.6094V20.5ZM12.1875 26.4375V20.5H18.4219V21.6875C18.4219 22.0153 18.6879 22.2812 19.0156 22.2812H21.9844C22.3121 22.2812 22.5781 22.0153 22.5781 21.6875V20.5H28.8125V26.4375H12.1875Z"
            fill={background}
            stroke="black"
            strokeWidth="0.00064"
          />
        </svg>
      );
    },
  },
  // ArrowDown
  {
    label: "ArrowDown",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          className={className}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="#94A3B8"
            strokeWidth="1.33333"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    },
  },
  // Star
  {
    label: "Star",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          className={className}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_622_1203)">
            <path
              d="M18.1266 22.6667C17.832 22.6664 17.5442 22.5782 17.3 22.4133L12.3266 19.08C12.3021 19.0631 12.2731 19.054 12.2433 19.054C12.2135 19.054 12.1845 19.0631 12.16 19.08L7.18665 22.4133C6.93691 22.5801 6.64235 22.6669 6.3421 22.6623C6.04184 22.6577 5.75009 22.5619 5.50558 22.3875C5.26108 22.2132 5.07539 21.9686 4.97317 21.6863C4.87096 21.4039 4.85706 21.0971 4.93331 20.8067L6.56665 15.0467C6.57437 15.0177 6.57343 14.9871 6.56395 14.9587C6.55448 14.9302 6.53687 14.9052 6.51331 14.8867L1.80665 11.1867C1.55887 11.0021 1.37508 10.7446 1.28104 10.4503C1.18699 10.156 1.18742 9.83959 1.28225 9.54554C1.37709 9.25148 1.56157 8.99448 1.80984 8.81056C2.05811 8.62665 2.35772 8.52504 2.66665 8.52L8.66665 8.29333C8.69615 8.29129 8.72443 8.28077 8.74809 8.26303C8.77174 8.24529 8.78976 8.22108 8.79998 8.19333L10.8666 2.57333C10.9708 2.28842 11.16 2.04241 11.4086 1.86859C11.6573 1.69478 11.9533 1.60156 12.2566 1.60156C12.56 1.60156 12.856 1.69478 13.1047 1.86859C13.3533 2.04241 13.5425 2.28842 13.6466 2.57333L15.7133 8.19333C15.7235 8.22108 15.7416 8.24529 15.7652 8.26303C15.7889 8.28077 15.8171 8.29129 15.8466 8.29333L21.8466 8.52C22.1556 8.52504 22.4552 8.62665 22.7035 8.81056C22.9517 8.99448 23.1362 9.25148 23.231 9.54554C23.3259 9.83959 23.3263 10.156 23.2323 10.4503C23.1382 10.7446 22.9544 11.0021 22.7066 11.1867L18 14.8867C17.9757 14.9046 17.9576 14.9296 17.948 14.9582C17.9385 14.9869 17.938 15.0177 17.9466 15.0467L19.58 20.8067C19.6373 21.0276 19.643 21.2588 19.5966 21.4823C19.5502 21.7057 19.453 21.9155 19.3124 22.0954C19.1719 22.2753 18.9918 22.4203 18.7862 22.5194C18.5806 22.6185 18.3549 22.6689 18.1266 22.6667ZM12.2466 17.72C12.5419 17.729 12.8276 17.8266 13.0666 18L18.04 21.3333C18.0652 21.3525 18.0959 21.363 18.1276 21.3632C18.1592 21.3635 18.1901 21.3535 18.2156 21.3347C18.2411 21.316 18.2599 21.2895 18.2691 21.2592C18.2783 21.2289 18.2774 21.1964 18.2666 21.1667L16.6333 15.4067C16.5529 15.1241 16.5589 14.824 16.6503 14.5448C16.7418 14.2656 16.9146 14.0202 17.1466 13.84L21.8533 10.14C21.879 10.122 21.8982 10.0962 21.9081 10.0664C21.9181 10.0366 21.9182 10.0045 21.9085 9.97465C21.8988 9.94481 21.8798 9.91886 21.8543 9.90063C21.8287 9.88239 21.798 9.87282 21.7666 9.87333L15.7666 9.64666C15.4729 9.63521 15.1891 9.53652 14.9517 9.36316C14.7142 9.18981 14.5337 8.94966 14.4333 8.67333L12.3666 3.05333C12.3573 3.02349 12.3387 2.99741 12.3135 2.97889C12.2884 2.96037 12.2579 2.95038 12.2266 2.95038C12.1954 2.95038 12.1649 2.96037 12.1398 2.97889C12.1146 2.99741 12.096 3.02349 12.0866 3.05333L10.04 8.66666C9.93955 8.94299 9.75909 9.18314 9.52163 9.3565C9.28416 9.52985 9.00044 9.62854 8.70665 9.64L2.70665 9.86666C2.67528 9.86616 2.64457 9.87572 2.61904 9.89396C2.5935 9.9122 2.57449 9.93814 2.5648 9.96798C2.5551 9.99782 2.55522 10.03 2.56516 10.0597C2.57509 10.0895 2.59431 10.1153 2.61998 10.1333L7.33331 13.84C7.56461 14.0208 7.73691 14.2663 7.82832 14.5452C7.91973 14.8242 7.92611 15.1241 7.84665 15.4067L6.21998 21.1667C6.21027 21.1955 6.21023 21.2267 6.21985 21.2556C6.22947 21.2845 6.24824 21.3094 6.27331 21.3267C6.29746 21.3473 6.3282 21.3587 6.35998 21.3587C6.39176 21.3587 6.4225 21.3473 6.44665 21.3267L11.42 17.9933C11.663 17.8321 11.9483 17.7463 12.24 17.7467L12.2466 17.72Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_622_1203">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
  },
  // Bag
  {
    label: "Bag",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          className={className}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_622_1023)">
            <path
              d="M0 3.97083V13.1584H14V3.97083H0ZM13.125 6.91608H10.9742V7.7911H13.125V12.2835H0.875V7.7911H3.02602V6.91608H0.875V4.84585H13.125V6.91608Z"
              fill="black"
              fillOpacity="0.5"
            />
            <path
              d="M5.89418 2.17462C6.1785 1.89093 6.56678 1.71683 7.00002 1.71661C7.43325 1.71681 7.8215 1.8909 8.10582 2.17462C8.38954 2.45897 8.56375 2.84711 8.56397 3.28079H9.43897C9.43878 1.93323 8.34705 0.841805 7.00002 0.841614C5.6529 0.841805 4.56125 1.93323 4.56104 3.28079H5.43604C5.43628 2.84711 5.61049 2.45897 5.89418 2.17462Z"
              fill="black"
              fillOpacity="0.5"
            />
            <path
              d="M10.3179 6.57489H9.00525V8.32492H10.3179V6.57489Z"
              fill="black"
              fillOpacity="0.5"
            />
            <path
              d="M8.3491 6.91608H5.65112V7.7911H8.3491V6.91608Z"
              fill="black"
              fillOpacity="0.5"
            />
            <path
              d="M4.99475 6.57489H3.68225V8.32492H4.99475V6.57489Z"
              fill="black"
              fillOpacity="0.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_622_1023">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
  },
  // Location
  {
    label: "Location",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          className={className}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_622_1152)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 6.5625C6.27506 6.5625 5.6875 5.97494 5.6875 5.25C5.6875 4.52506 6.27506 3.9375 7 3.9375C7.72494 3.9375 8.3125 4.52506 8.3125 5.25C8.3125 5.97494 7.72494 6.5625 7 6.5625ZM7 3.0625C5.79206 3.0625 4.8125 4.04163 4.8125 5.25C4.8125 6.45837 5.79206 7.4375 7 7.4375C8.20794 7.4375 9.1875 6.45837 9.1875 5.25C9.1875 4.04163 8.20794 3.0625 7 3.0625ZM7 12.6875C6.27244 12.6914 2.625 7.07919 2.625 5.25C2.625 2.83413 4.58369 0.875 7 0.875C9.41631 0.875 11.375 2.83413 11.375 5.25C11.375 7.05469 7.71619 12.6914 7 12.6875ZM7 0C4.10069 0 1.75 2.35069 1.75 5.25C1.75 7.44537 6.12719 14.0048 7 14C7.85925 14.0048 12.25 7.41563 12.25 5.25C12.25 2.35069 9.89931 0 7 0Z"
              fill="black"
              fillOpacity="0.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_622_1152">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
  },
  // Date
  {
    label: "Date",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          className={className}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_622_1092)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.99995 13.3C3.52056 13.3 0.699951 10.4794 0.699951 7.00001C0.699951 3.52062 3.52056 0.700012 6.99995 0.700012C10.4793 0.700012 13.3 3.52062 13.3 7.00001C13.3 10.4794 10.4793 13.3 6.99995 13.3Z"
              stroke="black"
              strokeOpacity="0.5"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.00002 4.20001V7.00001L4.90002 9.10001"
              stroke="black"
              strokeOpacity="0.5"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_622_1092">
              <rect width="14" height="14" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
  },
  // social media icon
  // facebook
  {
    label: "Facebook",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1231_2882)">
            <path
              d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 17.625 3.87656 22.35 9.10312 23.6484V15.6656H6.62812V12H9.10312V10.4203C9.10312 6.3375 10.95 4.44375 14.9625 4.44375C15.7219 4.44375 17.0344 4.59375 17.5734 4.74375V8.0625C17.2922 8.03437 16.8 8.01562 16.1859 8.01562C14.2172 8.01562 13.4578 8.76094 13.4578 10.6969V12H17.3766L16.7016 15.6656H13.4531V23.9109C19.3969 23.1938 24 18.1359 24 12Z"
              fill="#F8F9FA"
            />
          </g>
          <defs>
            <clipPath id="clip0_1231_2882">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
  },
  // telegram
  {
    label: "Telegram",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_1231_2884)">
            <path
              d="M12 0.375C5.37097 0.375 0 5.57812 0 12C0 18.4219 5.37097 23.625 12 23.625C18.629 23.625 24 18.4219 24 12C24 5.57812 18.629 0.375 12 0.375ZM17.5645 8.28281C17.3855 10.1203 16.6016 14.5828 16.2048 16.6406C16.0355 17.5125 15.7065 17.8031 15.3871 17.8312C14.6903 17.8922 14.1629 17.3859 13.4855 16.9547C12.4306 16.2844 11.8306 15.8672 10.8097 15.2109C9.62419 14.4563 10.3935 14.0391 11.0661 13.3594C11.2452 13.1812 14.3129 10.4766 14.371 10.2328C14.3806 10.2 14.3855 10.0875 14.3129 10.0266C14.2403 9.96562 14.1387 9.98906 14.0661 10.0031C13.9597 10.025 12.2726 11.1047 9.00484 13.2422C8.52742 13.5609 8.09355 13.7156 7.70323 13.7062C7.27258 13.6969 6.45 13.4719 5.83548 13.2797C5.08548 13.0453 4.48548 12.9187 4.53871 12.5156C4.56452 12.3062 4.8629 12.0922 5.43387 11.8734C8.93064 10.3984 11.2629 9.425 12.4306 8.95312C15.7645 7.6125 16.4565 7.37812 16.9065 7.36875C17.0081 7.36875 17.2258 7.39219 17.371 7.50469C17.4657 7.58538 17.5261 7.69733 17.5403 7.81875C17.5665 7.97205 17.5746 8.12774 17.5645 8.28281Z"
              fill="#F8F9FA"
            />
          </g>
          <defs>
            <clipPath id="clip0_1231_2884">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    },
  },
  // x
  {
    label: "X",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.42857 1C1.5375 1 0 2.40937 0 4.14286V19.8571C0 21.5906 1.5375 23 3.42857 23H20.5714C22.4625 23 24 21.5906 24 19.8571V4.14286C24 2.40937 22.4625 1 20.5714 1H3.42857ZM19.3446 5.125L13.7839 10.9491L20.325 18.875H15.2036L11.1964 14.0674L6.60536 18.875H4.06071L10.0071 12.6433L3.73393 5.125H8.98393L12.6107 9.52009L16.8 5.125H19.3446ZM17.3196 17.4804L8.21786 6.44598H6.70179L15.9054 17.4804H17.3143H17.3196Z"
            fill="#F8F9FA"
          />
        </svg>
      );
    },
  },
  // instargram
  {
    label: "Instargram",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.36364 0C3.20633 0 2.09642 0.459739 1.27808 1.27808C0.459739 2.09642 0 3.20633 0 4.36364V19.6364C0 20.7937 0.459739 21.9036 1.27808 22.7219C2.09642 23.5403 3.20633 24 4.36364 24H19.6364C20.7937 24 21.9036 23.5403 22.7219 22.7219C23.5403 21.9036 24 20.7937 24 19.6364V4.36364C24 3.20633 23.5403 2.09642 22.7219 1.27808C21.9036 0.459739 20.7937 0 19.6364 0H4.36364ZM3.81818 8.72727C3.81818 7.4253 4.33539 6.17665 5.25602 5.25602C6.17665 4.33539 7.4253 3.81818 8.72727 3.81818H15.2727C16.5747 3.81818 17.8233 4.33539 18.744 5.25602C19.6646 6.17665 20.1818 7.4253 20.1818 8.72727V15.2727C20.1818 16.5747 19.6646 17.8233 18.744 18.744C17.8233 19.6646 16.5747 20.1818 15.2727 20.1818H8.72727C7.4253 20.1818 6.17665 19.6646 5.25602 18.744C4.33539 17.8233 3.81818 16.5747 3.81818 15.2727V8.72727ZM8.72727 4.90909C7.71463 4.90909 6.74346 5.31136 6.02741 6.02741C5.31136 6.74346 4.90909 7.71463 4.90909 8.72727V15.2727C4.90909 16.2854 5.31136 17.2565 6.02741 17.9726C6.74346 18.6886 7.71463 19.0909 8.72727 19.0909H15.2727C16.2854 19.0909 17.2565 18.6886 17.9726 17.9726C18.6886 17.2565 19.0909 16.2854 19.0909 15.2727V8.72727C19.0909 7.71463 18.6886 6.74346 17.9726 6.02741C17.2565 5.31136 16.2854 4.90909 15.2727 4.90909H8.72727ZM17.4545 7.81855C17.4545 8.0597 17.3587 8.29098 17.1882 8.4615C17.0177 8.63202 16.7864 8.72782 16.5453 8.72782C16.3041 8.72782 16.0728 8.63202 15.9023 8.4615C15.7318 8.29098 15.636 8.0597 15.636 7.81855C15.636 7.57739 15.7318 7.34611 15.9023 7.17559C16.0728 7.00507 16.3041 6.90927 16.5453 6.90927C16.7864 6.90927 17.0177 7.00507 17.1882 7.17559C17.3587 7.34611 17.4545 7.57739 17.4545 7.81855ZM7.81855 12C7.81855 10.891 8.25909 9.82744 9.04327 9.04327C9.82744 8.25909 10.891 7.81855 12 7.81855C13.109 7.81855 14.1726 8.25909 14.9567 9.04327C15.7409 9.82744 16.1815 10.891 16.1815 12C16.1815 13.109 15.7409 14.1726 14.9567 14.9567C14.1726 15.7409 13.109 16.1815 12 16.1815C10.891 16.1815 9.82744 15.7409 9.04327 14.9567C8.25909 14.1726 7.81855 13.109 7.81855 12ZM12 8.90945C11.1803 8.90945 10.3942 9.23506 9.81465 9.81465C9.23506 10.3942 8.90945 11.1803 8.90945 12C8.90945 12.8197 9.23506 13.6058 9.81465 14.1853C10.3942 14.7649 11.1803 15.0905 12 15.0905C12.8197 15.0905 13.6058 14.7649 14.1853 14.1853C14.7649 13.6058 15.0905 12.8197 15.0905 12C15.0905 11.1803 14.7649 10.3942 14.1853 9.81465C13.6058 9.23506 12.8197 8.90945 12 8.90945Z"
            fill="#F8F9FA"
          />
        </svg>
      );
    },
  },
  // phone
  {
    label: "Phone",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 4.5C1.5 3.70435 1.81607 2.94129 2.37868 2.37868C2.94129 1.81607 3.70435 1.5 4.5 1.5H5.872C6.732 1.5 7.482 2.086 7.691 2.92L8.796 7.343C8.88554 7.701 8.86746 8.07746 8.74401 8.42522C8.62055 8.77299 8.39723 9.07659 8.102 9.298L6.809 10.268C6.674 10.369 6.645 10.517 6.683 10.62C7.24738 12.1549 8.1386 13.5487 9.29495 14.7051C10.4513 15.8614 11.8451 16.7526 13.38 17.317C13.483 17.355 13.63 17.326 13.732 17.191L14.702 15.898C14.9234 15.6028 15.227 15.3794 15.5748 15.256C15.9225 15.1325 16.299 15.1145 16.657 15.204L21.08 16.309C21.914 16.518 22.5 17.268 22.5 18.129V19.5C22.5 20.2956 22.1839 21.0587 21.6213 21.6213C21.0587 22.1839 20.2956 22.5 19.5 22.5H17.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
            fill="#F8F9FA"
          />
        </svg>
      );
    },
  },
  // map
  {
    label: "Map",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.54 22.351L11.61 22.391L11.638 22.407C11.749 22.467 11.8733 22.4985 11.9995 22.4985C12.1257 22.4985 12.25 22.467 12.361 22.407L12.389 22.392L12.46 22.351C12.8511 22.1191 13.2328 21.8716 13.604 21.609C14.5651 20.9305 15.463 20.1667 16.287 19.327C18.231 17.337 20.25 14.347 20.25 10.5C20.25 8.31196 19.3808 6.21354 17.8336 4.66637C16.2865 3.11919 14.188 2.25 12 2.25C9.81196 2.25 7.71354 3.11919 6.16637 4.66637C4.61919 6.21354 3.75 8.31196 3.75 10.5C3.75 14.346 5.77 17.337 7.713 19.327C8.53664 20.1667 9.43427 20.9304 10.395 21.609C10.7666 21.8716 11.1485 22.1191 11.54 22.351ZM12 13.5C12.7956 13.5 13.5587 13.1839 14.1213 12.6213C14.6839 12.0587 15 11.2956 15 10.5C15 9.70435 14.6839 8.94129 14.1213 8.37868C13.5587 7.81607 12.7956 7.5 12 7.5C11.2044 7.5 10.4413 7.81607 9.87868 8.37868C9.31607 8.94129 9 9.70435 9 10.5C9 11.2956 9.31607 12.0587 9.87868 12.6213C10.4413 13.1839 11.2044 13.5 12 13.5Z"
            fill="#F8F9FA"
          />
        </svg>
      );
    },
  },
  // mail
  {
    label: "Mail",
    icon: ({
      className,
      border,
      background,
    }: IconItemProps): React.JSX.Element => {
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 8.67V17.25C1.5 18.0456 1.81607 18.8087 2.37868 19.3713C2.94129 19.9339 3.70435 20.25 4.5 20.25H19.5C20.2956 20.25 21.0587 19.9339 21.6213 19.3713C22.1839 18.8087 22.5 18.0456 22.5 17.25V8.67L13.572 14.163C13.0992 14.4539 12.5551 14.6078 12 14.6078C11.4449 14.6078 10.9008 14.4539 10.428 14.163L1.5 8.67Z"
            fill="#F8F9FA"
          />
          <path
            d="M22.5 6.908V6.75C22.5 5.95435 22.1839 5.19129 21.6213 4.62868C21.0587 4.06607 20.2956 3.75 19.5 3.75H4.5C3.70435 3.75 2.94129 4.06607 2.37868 4.62868C1.81607 5.19129 1.5 5.95435 1.5 6.75V6.908L11.214 12.886C11.4504 13.0314 11.7225 13.1084 12 13.1084C12.2775 13.1084 12.5496 13.0314 12.786 12.886L22.5 6.908Z"
            fill="#F8F9FA"
          />
        </svg>
      );
    },
  },
];

export { IconItems };
