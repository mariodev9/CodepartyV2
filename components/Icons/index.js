import React from "react";
import { Box, Flex, Icon } from "@chakra-ui/react";

export const Logo = (props) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="33"
      viewBox="0 0 46 44"
      fill="none"
      {...props}
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
    </Icon>
  );
};

export const Logo404 = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="44"
      viewBox="0 0 46 44"
      fill="none"
      {...props}
    >
      <path
        d="M14.6351 14.1296L19.5405 18.824M19.5405 14.1296L14.6351 18.824"
        stroke="#4DB0FA"
      />
      <path
        d="M21.1757 12.5648V12.5648C18.5436 11.5572 15.6321 11.5572 13 12.5648V12.5648"
        stroke="#4DB0FA"
      />
      <path
        d="M26.6351 14.1296L31.5405 18.824M31.5405 14.1296L26.6351 18.824"
        stroke="#4DB0FA"
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

export const Back = (props) => {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(4.5 6.5)"
      >
        <path d="m11 8v-2c0-1.65685425-1.34314575-3-3-3h-8" />
        <path d="m3 6-3.001-3 3.001-3" />
      </g>
    </svg>
  );
};

export const Home = ({ fill }) => {
  return (
    <Icon
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
    </Icon>
  );
};

// INTERACTIONS
export const Like = ({ isLiked }) => {
  return (
    <Flex
      align="center"
      justify="center"
      width="35px"
      h="35px"
      borderRadius={"full"}
      _hover={{
        bg: "#fdff946e",
        transition: "0.3s",
        color: "#ffd91e",
      }}
    >
      <Icon
        width="25"
        height="25"
        viewBox="0 0 21 21"
        xmlns="http://www.w3.org/2000/svg"
        fill={isLiked ? "#faff5b" : "none"}
        stroke={isLiked ? "#fbe03c" : "currentColor"}
      >
        <path
          d="m7.5 11.5-5 3 2-5.131-4-3.869h5l2-5 2 5h5l-4 4 2 5z"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(3 3)"
        />
      </Icon>
    </Flex>
  );
};

export const Comment = () => {
  return (
    <Flex
      display={"flex"}
      align="center"
      justify="center"
      width="35px"
      h="35px"
      borderRadius={"full"}
      _hover={{
        bg: "#419fff52",
        transition: "0.3s",
        color: "#61bbff",
      }}
    >
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 21 21"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M9 9V9.0075M6 9V9.0075M12 9V9.0075M2.25 15.0001L3.225 12.0751C2.38233 10.8288 2.0775 9.35287 2.36716 7.92179C2.65683 6.4907 3.5213 5.20181 4.79983 4.29476C6.07835 3.38772 7.68394 2.92423 9.31807 2.99049C10.9522 3.05675 12.5036 3.64823 13.684 4.65498C14.8643 5.66172 15.5932 7.01522 15.735 8.4638C15.8769 9.91238 15.4222 11.3575 14.4554 12.5304C13.4886 13.7033 12.0755 14.5243 10.4788 14.8406C8.8822 15.1569 7.21065 14.947 5.775 14.2501L2.25 15.0001Z"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(1 1)"
        />
      </Icon>
    </Flex>
  );
};

export const Save = ({ isSave, width, height }) => {
  return (
    <Box _hover={{ color: "gray.50", fill: "white" }}>
      <Icon
        height={height}
        viewBox="0 0 21 21"
        width={width}
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="1px"
        fill={isSave ? "white" : "black.50"}
        stroke="currentColor"
      >
        <path
          d="m1.5.5h6c.55228475 0 1 .44771525 1 1v12l-4-4-4 4v-12c0-.55228475.44771525-1 1-1z"
          strokeLinecap="round"
          strokeLinejoin="round"
          transform="translate(6 4)"
        />
      </Icon>
    </Box>
  );
};

export const CommonSave = (props) => {
  return (
    <Icon
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1px"
      stroke="white"
      fill="none"
      {...props}
    >
      <path
        d="m1.5.5h6c.55228475 0 1 .44771525 1 1v12l-4-4-4 4v-12c0-.55228475.44771525-1 1-1z"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(6 4)"
      />
    </Icon>
  );
};

export const Photo = (props) => {
  return (
    <Icon
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
    </Icon>
  );
};

export const User = (props) => {
  return (
    <Icon
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m7.5.5c1.65685425 0 3 1.34314575 3 3v2c0 1.65685425-1.34314575 3-3 3s-3-1.34314575-3-3v-2c0-1.65685425 1.34314575-3 3-3zm7 14v-.7281753c0-3.1864098-3.6862915-5.2718247-7-5.2718247s-7 2.0854149-7 5.2718247v.7281753c0 .5522847.44771525 1 1 1h12c.5522847 0 1-.4477153 1-1z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 2)"
      />
    </Icon>
  );
};

export const Google = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.788 5.10805C16.2192 3.79053 14.2478 3.04767 12.1997 3.00222C10.1515 2.95677 8.14914 3.61145 6.52343 4.85808C4.89771 6.10471 3.74597 7.86868 3.2585 9.8585C2.77103 11.8483 2.97702 13.9449 3.84242 15.8018C4.70783 17.6587 6.18086 19.1648 8.01811 20.0712C9.85535 20.9776 11.9469 21.2301 13.947 20.7869C15.9472 20.3437 17.7362 19.2314 19.0186 17.6337C20.301 16.0361 21 14.0487 21 12H13"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Github = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.49995C19.9988 8.30492 19.5325 7.15726 18.7 6.29995C19.0905 5.26192 19.0545 4.11158 18.6 3.09995C18.6 3.09995 17.5 2.79995 15.1 4.39995C13.0672 3.87054 10.9328 3.87054 8.9 4.39995C6.5 2.79995 5.4 3.09995 5.4 3.09995C4.94548 4.11158 4.90953 5.26192 5.3 6.29995C4.46745 7.15726 4.00122 8.30492 4 9.49995C4 14.1 6.7 15.2 9.5 15.5C8.9 16.1 8.9 16.7 9 17.5V21"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Settings = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z"
        stroke="#fff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#fff"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Options = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Upload = (props) => {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(3 3)"
      >
        <path d="m11.5 4.5-3.978-4-4.022 4" />
        <path d="m7.522.521v11.979" />
        <path d="m.5 9v4.5c0 1.1045695.8954305 2 2 2h10c1.1045695 0 2-.8954305 2-2v-4.5" />
      </g>
    </svg>
  );
};

export const Cross = (props) => {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(5 5)"
      >
        <path d="m10.5 10.5-10-10z" />
        <path d="m10.5.5-10 10" />
      </g>
    </svg>
  );
};

export const Message = (props) => {
  return (
    <svg
      height="21"
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd" transform="translate(2 3)">
        <path
          d="m14.5.5c1.1045695 0 2 .8954305 2 2v10c0 1.1045695-.8954305 2-2 2l-2.999-.001-2.29389322 2.2938932c-.36048396.360484-.92771502.3882135-1.32000622.0831886l-.09420734-.0831886-2.29389322-2.2938932-2.999.001c-1.1045695 0-2-.8954305-2-2v-10c0-1.1045695.8954305-2 2-2z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m13.5 5.5h-6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4.49884033 6.5c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1zm0 4c.5 0 1-.5 1-1s-.5-1-1-1-.99884033.5-.99884033 1 .49884033 1 .99884033 1z"
          fill="currentColor"
        />
        <path
          d="m13.5 9.5h-6"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export const Chat = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M8 9H16M8 13H14M12 20L9 17H7C6.20435 17 5.44129 16.6839 4.87868 16.1213C4.31607 15.5587 4 14.7956 4 14V8C4 7.20435 4.31607 6.44129 4.87868 5.87868C5.44129 5.31607 6.20435 5 7 5H17C17.7956 5 18.5587 5.31607 19.1213 5.87868C19.6839 6.44129 20 7.20435 20 8V14C20 14.7956 19.6839 15.5587 19.1213 16.1213C18.5587 16.6839 17.7956 17 17 17H15L12 20Z"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const Trash = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
        stroke="#D43434"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
