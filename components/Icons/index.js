import React from "react";
import { Icon } from "@chakra-ui/react";

export const Add = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 5V19M5 12H19"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Back = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
    >
      <path
        d="M6.75004 12.4167L1.08337 6.75001M1.08337 6.75001L6.75004 1.08334M1.08337 6.75001H16.6667C18.1696 6.75001 19.6109 7.34703 20.6736 8.40974C21.7364 9.47244 22.3334 10.9138 22.3334 12.4167C22.3334 13.9196 21.7364 15.3609 20.6736 16.4236C19.6109 17.4863 18.1696 18.0833 16.6667 18.0833H15.25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Comment = () => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 18 18"
      fill="none"
      marginRight={3}
    >
      <path
        d="M9 9V9.0075M6 9V9.0075M12 9V9.0075M2.25 15.0001L3.225 12.0751C2.38233 10.8288 2.0775 9.35287 2.36716 7.92179C2.65683 6.4907 3.5213 5.20181 4.79983 4.29476C6.07835 3.38772 7.68394 2.92423 9.31807 2.99049C10.9522 3.05675 12.5036 3.64823 13.684 4.65498C14.8643 5.66172 15.5932 7.01522 15.735 8.4638C15.8769 9.91238 15.4222 11.3575 14.4554 12.5304C13.4886 13.7033 12.0755 14.5243 10.4788 14.8406C8.8822 15.1569 7.21065 14.947 5.775 14.2501L2.25 15.0001Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export const Home = ({ fill }) => {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        fill={fill}
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(1 1)"
      >
        <path d="m.5 9.5 9-9 9 9" />
        <path d="m2.5 7.5v7c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-7" />
      </g>
    </svg>
  );
};

export const Like = () => {
  return (
    <Icon
      width="21"
      height="21"
      viewBox="0 0 18 18"
      fill="none"
      marginRight={3}
    >
      <path
        d="M5.25 8.25V14.25C5.25 14.4489 5.17098 14.6397 5.03033 14.7803C4.88968 14.921 4.69891 15 4.5 15H3C2.80109 15 2.61032 14.921 2.46967 14.7803C2.32902 14.6397 2.25 14.4489 2.25 14.25V9C2.25 8.80109 2.32902 8.61032 2.46967 8.46967C2.61032 8.32902 2.80109 8.25 3 8.25H5.25ZM5.25 8.25C6.04565 8.25 6.80871 7.93393 7.37132 7.37132C7.93393 6.80871 8.25 6.04565 8.25 5.25V4.5C8.25 4.10218 8.40804 3.72064 8.68934 3.43934C8.97064 3.15804 9.35218 3 9.75 3C10.1478 3 10.5294 3.15804 10.8107 3.43934C11.092 3.72064 11.25 4.10218 11.25 4.5V8.25H13.5C13.8978 8.25 14.2794 8.40804 14.5607 8.68934C14.842 8.97064 15 9.35218 15 9.75L14.25 13.5C14.1421 13.9601 13.9375 14.3552 13.667 14.6257C13.3964 14.8963 13.0746 15.0276 12.75 15H7.5C6.90326 15 6.33097 14.7629 5.90901 14.341C5.48705 13.919 5.25 13.3467 5.25 12.75"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export const Save = () => {
  return (
    <svg
      fill="none"
      viewBox="0 0 25 25"
      strokeWidth={1.5}
      stroke="currentColor"
      width="21"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      />
    </svg>
  );
};

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="33"
      viewBox="0 0 46 44"
      fill="none"
    >
      <path
        d="M14.6351 16.4768C14.6351 17.7731 15.7332 18.824 17.0878 18.824C18.4424 18.824 19.5405 17.7731 19.5405 16.4768C19.5405 15.1805 18.4424 14.1296 17.0878 14.1296C15.7332 14.1296 14.6351 15.1805 14.6351 16.4768Z"
        fill="#4DB0FA"
      />
      <path
        d="M21.1757 12.5648V12.5648C18.5436 11.5572 15.6321 11.5572 13 12.5648V12.5648"
        stroke="#4DB0FA"
      />
      <path
        d="M26.6351 16.4768C26.6351 17.7731 27.7332 18.824 29.0878 18.824C30.4424 18.824 31.5405 17.7731 31.5405 16.4768C31.5405 15.1805 30.4424 14.1296 29.0878 14.1296C27.7332 14.1296 26.6351 15.1805 26.6351 16.4768Z"
        fill="#4DB0FA"
      />
      <path
        d="M33.1757 12.5648V12.5648C30.5436 11.5572 27.6321 11.5572 25 12.5648V12.5648"
        stroke="#4DB0FA"
      />
      <path
        d="M15 40V44C-2 44 11 24 0 24V20C11 20 -2 0 15 0V4C5 4 15 22 5 22C15 22 5 40 15 40Z"
        fill="#4DB0FA"
      />
      <path
        d="M31 40V44C48 44 35 24 46 24V20C35 20 48 0 31 0V4C41 4 31 22 41 22C31 22 41 40 31 40Z"
        fill="#4DB0FA"
      />
    </svg>
  );
};

export const Photo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M12 5H12.01M1 12L5 7.99995C5.45606 7.56111 5.97339 7.33008 6.5 7.33008C7.02661 7.33008 7.54394 7.56111 8 7.99995L13 13M11 11L12 9.99995C12.4561 9.56111 12.9734 9.33008 13.5 9.33008C14.0266 9.33008 14.5439 9.56111 15 9.99995L17 12M4 1H14C15.6569 1 17 2.34315 17 4V14C17 15.6569 15.6569 17 14 17H4C2.34315 17 1 15.6569 1 14V4C1 2.34315 2.34315 1 4 1Z"
        stroke="#fff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const User = ({ fill }) => {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z"
        fill={fill}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 2)"
      />
    </svg>
  );
};
