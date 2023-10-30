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
        fill="#159BFF"
      />
      <path
        d="M21.1757 12.5648V12.5648C18.5436 11.5572 15.6321 11.5572 13 12.5648V12.5648"
        stroke="#159BFF"
      />
      <path
        d="M26.6351 16.4768C26.6351 17.7731 27.7332 18.824 29.0878 18.824C30.4424 18.824 31.5405 17.7731 31.5405 16.4768C31.5405 15.1805 30.4424 14.1296 29.0878 14.1296C27.7332 14.1296 26.6351 15.1805 26.6351 16.4768Z"
        fill="#159BFF"
      />
      <path
        d="M33.1757 12.5648V12.5648C30.5436 11.5572 27.6321 11.5572 25 12.5648V12.5648"
        stroke="#159BFF"
      />
      <path
        d="M15 40V44C-2 44 11 24 0 24V20C11 20 -2 0 15 0V4C5 4 15 22 5 22C15 22 5 40 15 40Z"
        fill="#159BFF"
      />
      <path
        d="M31 40V44C48 44 35 24 46 24V20C35 20 48 0 31 0V4C41 4 31 22 41 22C31 22 41 40 31 40Z"
        fill="#159BFF"
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
        stroke="#159BFF"
      />
      <path
        d="M21.1757 12.5648V12.5648C18.5436 11.5572 15.6321 11.5572 13 12.5648V12.5648"
        stroke="#159BFF"
      />
      <path
        d="M26.6351 14.1296L31.5405 18.824M31.5405 14.1296L26.6351 18.824"
        stroke="#159BFF"
      />
      <path
        d="M33.1757 12.5648V12.5648C30.5436 11.5572 27.6321 11.5572 25 12.5648V12.5648"
        stroke="#159BFF"
      />
      <path
        d="M15 40V44C-2 44 11 24 0 24V20C11 20 -2 0 15 0V4C5 4 15 22 5 22C15 22 5 40 15 40Z"
        fill="#159BFF"
      />
      <path
        d="M31 40V44C48 44 35 24 46 24V20C35 20 48 0 31 0V4C41 4 31 22 41 22C31 22 41 40 31 40Z"
        fill="#159BFF"
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
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M5 12H19M5 12L11 18M5 12L11 6"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SearchIcon = ({ strokeColor }) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24px"
      height="24px"
      fill="none"
      stroke={strokeColor}
    >
      <path
        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

export const Home = ({ fill, height }) => {
  return (
    <Icon
      viewBox="0 0 21 21"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      strokeWidth={2}
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
    <Icon
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
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
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

export const Edit = (props) => {
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
        d="M12.5 5.5L16.5 9.5M4.5 13.5L8.5 17.5M3 19.0001H7L17.5 8.50006C18.0304 7.96963 18.3284 7.2502 18.3284 6.50006C18.3284 5.74991 18.0304 5.03049 17.5 4.50006C16.9696 3.96962 16.2501 3.67163 15.5 3.67163C14.7499 3.67163 14.0304 3.96962 13.5 4.50006L3 15.0001V19.0001ZM21 15V19H13L17 15H21Z"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ShirtStoreIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
    >
      <ellipse cx="20" cy="19.9901" rx="20" ry="19.9901" fill="#53623B" />
      <path
        d="M27.0707 12.5189V10.9036H25.4546V12.5189H27.0707Z"
        fill="#B27A4C"
      />
      <path
        d="M17.3738 23.8265V28.6725H18.9899H20.6061V27.0572H18.9899V20.5957H17.3738V22.2111V23.8265Z"
        fill="#7E5034"
      />
      <path
        d="M20.6061 10.9036V12.5189H22.2223H23.8384V10.9036H22.2223H20.6061Z"
        fill="#B27A4C"
      />
      <path
        d="M22.2223 12.5189H20.6061V14.1343H22.2223V12.5189Z"
        fill="#B27A4C"
      />
      <path
        d="M30.3031 17.365V15.7497H28.6869H27.0707V17.365H28.6869H30.3031Z"
        fill="#755640"
      />
      <path
        d="M20.6061 15.7497V17.365H22.2223H23.8384H25.4546V15.7497H20.6061Z"
        fill="#755640"
      />
      <path
        d="M27.0707 15.7497V12.5189H25.4546V10.9036H23.8384V12.5189H22.2223V14.1343H20.6061V15.7497H25.4546H27.0707Z"
        fill="#C08C5E"
      />
      <path
        d="M27.0707 18.9804V17.365H25.4546V20.5957H27.0707V18.9804Z"
        fill="#C79870"
      />
      <path d="M28.6869 17.365H27.0707V18.9804H28.6869V17.365Z" fill="black" />
      <path d="M22.2223 17.365V18.9804H23.8384V17.365H22.2223Z" fill="black" />
      <path
        d="M18.9899 12.5189V14.1343V15.7497V18.9804V20.5957V27.0572H20.6061V28.6725H23.8384V27.0572H22.2223V25.4418H20.6061V20.5957V18.9804H22.2223V17.365H20.6061V15.7497V14.1343V12.5189H18.9899Z"
        fill="#9C653E"
      />
      <path
        d="M25.4546 17.365H23.8384V18.9804V22.2111H27.0707V20.5957H25.4546V17.365Z"
        fill="#8F5C39"
      />
      <path
        d="M27.0707 17.365V15.7497H25.4546V17.365H27.0707Z"
        fill="#B27A4C"
      />
      <path
        d="M27.0707 27.0572H28.6869V23.8265V22.2111H27.0707V23.8265V25.4418V27.0572Z"
        fill="#B27A4C"
      />
      <path
        d="M28.6869 18.9804H27.0707V20.5957V22.2111H28.6869V18.9804Z"
        fill="#B27A4C"
      />
      <path
        d="M27.0707 22.2111H23.8384V23.8265H27.0707V22.2111Z"
        fill="#753A41"
      />
      <path
        d="M23.8384 27.0572H27.0707V25.4418H23.8384V27.0572Z"
        fill="#AF5F69"
      />
      <path
        d="M23.8384 27.0572V28.6725H25.4546H27.0707V27.0572H23.8384Z"
        fill="#C08C5E"
      />
      <path
        d="M25.4546 9.28821V7.67285H23.8384V9.28821H25.4546Z"
        fill="#505050"
      />
      <path
        d="M20.6061 9.28821H22.2223V7.67285H20.6061V9.28821Z"
        fill="#505050"
      />
      <path
        d="M25.4546 10.9036H27.0707V9.28821H25.4546V10.9036Z"
        fill="#4B4B4B"
      />
      <path
        d="M18.9899 12.5189H20.6061V10.9036H18.9899V12.5189Z"
        fill="#505050"
      />
      <path
        d="M18.9899 7.67285V9.28821H20.6061V7.67285H18.9899Z"
        fill="#454545"
      />
      <path
        d="M20.6061 10.9036V9.28821H18.9899V10.9036H20.6061Z"
        fill="#505050"
      />
      <path
        d="M20.6061 10.9036H22.2223V9.28821H20.6061V10.9036Z"
        fill="#676767"
      />
      <path
        d="M22.2223 10.9036H23.8384V9.28821H22.2223V10.9036Z"
        fill="#505050"
      />
      <path
        d="M25.4546 10.9036V9.28821H23.8384V10.9036H25.4546Z"
        fill="#676767"
      />
      <path
        d="M23.8384 9.28821V7.67285H22.2223V9.28821H23.8384Z"
        fill="#676767"
      />
      <path
        d="M17.3738 18.9804H18.9899V15.7497H17.3738V14.1343H15.7576V15.7497H14.1415V18.9804H15.7576V17.365H17.3738V18.9804Z"
        fill="#2E2E2E"
      />
      <path
        d="M15.7576 12.5189H14.1415V14.1343H15.7576V12.5189Z"
        fill="#2E2E2E"
      />
      <path
        d="M15.7576 10.9036H14.1415V12.5189H15.7576V10.9036Z"
        fill="#2E2E2E"
      />
      <path
        d="M14.1415 14.1343V15.7497H15.7576V14.1343H14.1415Z"
        fill="#505050"
      />
      <path
        d="M15.7576 14.1343H17.3738V12.5189H15.7576V14.1343Z"
        fill="#505050"
      />
      <path
        d="M18.9899 15.7497V14.1343H17.3738V15.7497H18.9899Z"
        fill="#505050"
      />
      <path
        d="M15.7576 9.28821V10.9036H17.3738V9.28821H15.7576Z"
        fill="#505050"
      />
      <path
        d="M15.7576 10.9036V12.5189H17.3738V10.9036H15.7576Z"
        fill="#676767"
      />
      <path
        d="M18.9899 10.9036V9.28821H17.3738V10.9036H18.9899Z"
        fill="#3F3F3F"
      />
      <path
        d="M18.9899 12.5189V10.9036H17.3738V12.5189H18.9899Z"
        fill="#505050"
      />
      <path
        d="M18.9899 14.1343V12.5189H17.3738V14.1343H18.9899Z"
        fill="#2E2E2E"
      />
      <path
        d="M15.7576 18.9804H17.3738V17.365H15.7576V18.9804Z"
        fill="#676767"
      />
      <path
        d="M18.9899 20.5957V18.9804H17.3738V20.5957H18.9899Z"
        fill="#7E5034"
      />
      <path
        d="M17.3738 18.9804H15.7576V20.5957H17.3738V18.9804Z"
        fill="#B27A4C"
      />
      <path
        d="M14.1415 22.2111H15.7576V20.5957H14.1415V22.2111Z"
        fill="#B27A4C"
      />
      <path
        d="M15.7576 23.8265H17.3738V22.2111H15.7576V23.8265Z"
        fill="#B27A4C"
      />
      <path
        d="M14.1415 18.9804V20.5957H15.7576V18.9804H14.1415Z"
        fill="#9C653E"
      />
      <path
        d="M17.3738 20.5957H15.7576V22.2111H17.3738V20.5957Z"
        fill="#9C653E"
      />
      <path
        d="M20.6061 25.4418H22.2223V27.0572H23.8384V25.4418V23.8265V22.2111H22.2223V20.5957H20.6061V25.4418Z"
        fill="#B27A4C"
      />
      <path
        d="M23.8384 18.9804H22.2223H20.6061V20.5957H22.2223V22.2111H23.8384V18.9804Z"
        fill="#C08C5E"
      />
      <path
        d="M23.8384 28.6725H20.6061V30.2879H25.4546V28.6725H23.8384Z"
        fill="#7E5034"
      />
      <path
        d="M20.6061 28.6725H18.9899V30.2879H20.6061V28.6725Z"
        fill="#9C653E"
      />
      <path
        d="M18.9899 28.6725H17.3738V30.2879H18.9899V28.6725Z"
        fill="#193657"
      />
      <path
        d="M17.3738 28.6725V23.8265H15.7576V25.4418V27.0572V28.6725V30.2879H17.3738V28.6725Z"
        fill="#0E0E0E"
      />
      <path
        d="M15.7576 30.2879V31.9033H17.3738V30.2879H15.7576Z"
        fill="#193657"
      />
      <path
        d="M14.1415 31.9033V33.5186H15.7576V31.9033H14.1415Z"
        fill="#193657"
      />
      <path
        d="M14.1415 33.5186H12.5253V35.134H14.1415V33.5186Z"
        fill="#193657"
      />
      <path
        d="M10.9091 28.6725H9.29297V30.2879H10.9091V28.6725Z"
        fill="#363636"
      />
      <path
        d="M10.9091 25.4418H9.29297V27.0572H10.9091V25.4418Z"
        fill="#363636"
      />
      <path
        d="M9.29297 23.8265H10.9091V22.2111H9.29297V23.8265Z"
        fill="#2E2E2E"
      />
      <path
        d="M10.9091 20.5957H9.29297V22.2111H10.9091V20.5957Z"
        fill="#0E0E0E"
      />
      <path
        d="M10.9091 18.9804H9.29297V20.5957H10.9091V18.9804Z"
        fill="#676767"
      />
      <path
        d="M14.1415 12.5189H12.5253V14.1343V15.7497V17.365V23.8265H14.1415V22.2111V20.5957V18.9804V15.7497V14.1343V12.5189Z"
        fill="#0E0E0E"
      />
      <path
        d="M12.5253 15.7497H10.9091V17.365H12.5253V15.7497Z"
        fill="#1C1C1C"
      />
      <path
        d="M10.9091 18.9804V20.5957V22.2111V23.8265H12.5253V17.365H10.9091V18.9804Z"
        fill="#202020"
      />
      <path
        d="M15.7576 23.8265V22.2111H14.1415V23.8265H15.7576Z"
        fill="#202020"
      />
      <path
        d="M14.1415 23.8265V25.4418H15.7576V23.8265H14.1415Z"
        fill="#121212"
      />
      <path
        d="M12.5253 23.8265V25.4418H14.1415V23.8265H12.5253Z"
        fill="#141414"
      />
      <path
        d="M12.5253 27.0572H14.1415V25.4418H12.5253V27.0572Z"
        fill="#0B0B0B"
      />
      <path
        d="M15.7576 27.0572V25.4418H14.1415V27.0572H15.7576Z"
        fill="#2E2E2E"
      />
      <path
        d="M12.5253 28.6725H14.1415V27.0572H12.5253V28.6725Z"
        fill="#232323"
      />
      <path
        d="M14.1415 30.2879V31.9033H15.7576V30.2879H14.1415Z"
        fill="#232323"
      />
      <path
        d="M15.7576 30.2879V28.6725H14.1415V30.2879H15.7576Z"
        fill="#141414"
      />
      <path
        d="M12.5253 30.2879H14.1415V28.6725H12.5253V30.2879Z"
        fill="#232323"
      />
      <path
        d="M10.9091 28.6725V30.2879H12.5253V28.6725H10.9091Z"
        fill="#232323"
      />
      <path
        d="M10.9091 30.2879V31.9033H12.5253V30.2879H10.9091Z"
        fill="#363636"
      />
      <path
        d="M10.9091 27.0572V28.6725H12.5253V27.0572H10.9091Z"
        fill="#363636"
      />
      <path
        d="M10.9091 25.4418V27.0572H12.5253V25.4418H10.9091Z"
        fill="#232323"
      />
      <path
        d="M10.9091 23.8265V25.4418H12.5253V23.8265H10.9091Z"
        fill="#141414"
      />
      <path
        d="M15.7576 28.6725V27.0572H14.1415V28.6725H15.7576Z"
        fill="#232323"
      />
      <path
        d="M27.0707 15.7497H28.6869V12.5189H27.0707V15.7497Z"
        fill="#B27A4C"
      />
      <path
        d="M25.4546 30.2879H20.6061V31.9033H25.4546V30.2879Z"
        fill="#9C653E"
      />
      <path
        d="M28.6869 33.5186V35.134H30.3031V33.5186H28.6869Z"
        fill="#26578D"
      />
      <path
        d="M27.0707 31.9033H25.4546V33.5186H27.0707V31.9033Z"
        fill="#26578D"
      />
      <path
        d="M25.4546 30.2879V31.9033H27.0707V30.2879H25.4546Z"
        fill="#193657"
      />
      <path
        d="M27.0707 31.9033V33.5186H28.6869V31.9033H27.0707Z"
        fill="#A62D3B"
      />
      <path
        d="M25.4546 31.9033H20.6061V33.5186H22.2223V38.3647H23.8384V33.5186H25.4546V31.9033Z"
        fill="#3371B6"
      />
      <path
        d="M17.3738 31.9033V33.5186V36.7493V38.3647H18.9899V31.9033H17.3738Z"
        fill="#BF3544"
      />
      <path
        d="M15.7576 33.5186H14.1415V35.134H15.7576V33.5186Z"
        fill="#7B2130"
      />
      <path
        d="M15.7576 31.9033V33.5186H17.3738V31.9033H15.7576Z"
        fill="#7B2130"
      />
      <path
        d="M15.7576 33.5186V35.134V36.7493H17.3738V33.5186H15.7576Z"
        fill="#3371B6"
      />
      <path
        d="M17.3738 36.7493H15.7576V38.3647H17.3738V36.7493Z"
        fill="#1F4774"
      />
      <path
        d="M18.9899 30.2879H17.3738V31.9033H18.9899V30.2879Z"
        fill="#1F4774"
      />
      <path
        d="M20.6061 30.2879H18.9899V31.9033V38.3647H20.6061V33.5186V31.9033V30.2879Z"
        fill="#28609E"
      />
      <path
        d="M22.2223 33.5186H20.6061V38.3647H22.2223V33.5186Z"
        fill="#BF3544"
      />
      <path
        d="M25.4546 33.5186H23.8384V38.3647H25.4546V36.7493V35.134V33.5186Z"
        fill="#BF3544"
      />
      <path
        d="M18.9899 39.9801H19.1897H20.6061V38.3647H18.9899V39.9703V39.9801Z"
        fill="#1F4774"
      />
      <path
        d="M27.0707 35.134H25.4546V36.7493H27.0707V35.134Z"
        fill="#A18F3C"
      />
      <path
        d="M27.0707 33.5186H25.4546V35.134H27.0707V33.5186Z"
        fill="#3371B6"
      />
      <path
        d="M25.4546 36.7493V38.3647H27.0707V36.7493H25.4546Z"
        fill="#3371B6"
      />
      <path
        d="M27.0707 35.134V36.7493L28.6869 36.7216V35.134H27.0707Z"
        fill="#741F2B"
      />
      <path
        d="M28.6869 33.5186H27.0707V35.134H28.6869V33.5186Z"
        fill="#892534"
      />
      <path
        d="M30.3031 35.134H28.6869V36.7216H30.3031V35.134Z"
        fill="#323E64"
      />
      <path
        d="M27.0707 23.8265H23.8384V25.4418H27.0707V23.8265Z"
        fill="white"
      />
      <path
        d="M12.5253 35.134H10.9091V36.7493H12.5253V35.134Z"
        fill="#7B2130"
      />
      <path
        d="M10.9091 37.7589C11.3078 37.9697 11.7276 38.1727 12.1675 38.3647H12.5253V36.7493H10.9091V37.7589Z"
        fill="#7B2130"
      />
      <path
        d="M12.1675 38.3647C12.2853 38.4161 12.4046 38.4668 12.5253 38.5165V38.3647H12.1675Z"
        fill="#7B2130"
      />
      <path
        d="M14.1415 35.134H12.5253V36.7493H14.1415V35.134Z"
        fill="#1F4774"
      />
      <path
        d="M12.5253 36.7493V38.3647H14.1415V36.7493H12.5253Z"
        fill="#1F4774"
      />
      <path
        d="M12.5253 38.5165C13.0387 38.7283 13.578 38.9245 14.1415 39.1003V38.3647H12.5253V38.5165Z"
        fill="#1F4774"
      />
      <path
        d="M15.7576 35.134H14.1415V36.7493H15.7576V35.134Z"
        fill="#9F2C39"
      />
      <path
        d="M15.7576 38.3647V36.7493H14.1415V38.3647H15.7576Z"
        fill="#9F2C39"
      />
      <path
        d="M14.1415 39.1003C14.66 39.2621 15.1991 39.4066 15.7576 39.53V38.3647H14.1415V39.1003Z"
        fill="#9F2C39"
      />
      <path
        d="M17.3738 38.3647H15.7576V39.53C16.2797 39.6453 16.8188 39.7422 17.3738 39.8174V38.3647Z"
        fill="#193657"
      />
      <path
        d="M18.9899 39.9703V38.3647H17.3738V39.8174C17.8985 39.8886 18.4375 39.9404 18.9899 39.9703Z"
        fill="#9F2C39"
      />
      <path
        d="M20.6061 38.3647V39.9801H19.1897C20.1612 40.023 21.1735 39.9977 22.2223 39.8901V38.3647H20.6061Z"
        fill="#9F2C39"
      />
      <path
        d="M23.8384 38.3647H22.2223V39.8901C22.7511 39.8359 23.2899 39.7565 23.8384 39.6487V38.3647Z"
        fill="#28609E"
      />
      <path
        d="M25.4546 38.3647H23.8384V39.6487C24.3682 39.5447 24.907 39.4141 25.4546 39.2541V38.3647Z"
        fill="#9F2C39"
      />
      <path
        d="M27.0707 38.3647H25.4546V39.2541C25.9852 39.0991 26.524 38.9165 27.0707 38.7036V38.3647Z"
        fill="#28609E"
      />
      <path
        d="M27.0707 36.7493V38.3647H27.8888C28.1531 38.2487 28.4191 38.1254 28.6869 37.9947V36.7216L27.0707 36.7493Z"
        fill="#741F2B"
      />
      <path
        d="M27.0707 38.3647V38.7036C27.3415 38.5982 27.6142 38.4853 27.8888 38.3647H27.0707Z"
        fill="#741F2B"
      />
      <path
        d="M30.3031 36.7216H28.6869V37.9947C29.2188 37.7352 29.7576 37.4462 30.3031 37.1254V36.7216Z"
        fill="#323E64"
      />
    </svg>
  );
};

export const PortfolioIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="29"
      viewBox="0 0 44 31"
      fill="none"
    >
      <path
        d="M0.869318 0.90909H7.31818L15.9545 21.9886H16.2955L24.9318 0.90909H31.3807V30H26.3239V10.0142H26.054L18.0142 29.9148H14.2358L6.19602 9.97159H5.92614V30H0.869318V0.90909ZM40.0597 30.3125C39.1979 30.3125 38.4593 30.0095 37.8438 29.4034C37.2282 28.7973 36.9252 28.0587 36.9347 27.1875C36.9252 26.3352 37.2282 25.6061 37.8438 25C38.4593 24.3939 39.1979 24.0909 40.0597 24.0909C40.893 24.0909 41.6174 24.3939 42.233 25C42.858 25.6061 43.1752 26.3352 43.1847 27.1875C43.1752 27.7652 43.0237 28.2907 42.7301 28.7642C42.446 29.2377 42.0672 29.6165 41.5938 29.9006C41.1297 30.1752 40.6184 30.3125 40.0597 30.3125Z"
        fill="white"
      />
    </svg>
  );
};

export const InmobiliariaIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="34"
      viewBox="0 0 44 34"
      fill="none"
    >
      <path
        d="M28.25 31.5484H10.3333V21.871L26.1667 3L42 21.871V33"
        stroke="#CD0000"
        strokeWidth="3"
      />
      <rect
        x="20.3333"
        y="22.3547"
        width="3.33333"
        height="3.87097"
        fill="#141414"
      />
      <path
        d="M2 31.5484V21.871L17.8333 3L19.6603 5.17742M33.6667 33V21.871L24.0833 10.4491"
        stroke="#D7D7D7"
        strokeWidth="3"
      />
    </svg>
  );
};

export const GithubIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M13.5 28.4999C7.05 30.5999 7.05 24.7499 4.5 23.9999M22.5 31.4999V26.2499C22.5 24.7499 22.65 24.1499 21.75 23.2499C25.95 22.7999 30 21.1499 30 14.2499C29.9982 12.4574 29.2988 10.7359 28.05 9.44993C28.6357 7.89288 28.5818 6.16737 27.9 4.64993C27.9 4.64993 26.25 4.19993 22.65 6.59993C19.6009 5.80581 16.3991 5.80581 13.35 6.59993C9.75 4.19993 8.1 4.64993 8.1 4.64993C7.41822 6.16737 7.3643 7.89288 7.95 9.44993C6.70118 10.7359 6.00183 12.4574 6 14.2499C6 21.1499 10.05 22.7999 14.25 23.2499C13.35 24.1499 13.35 25.0499 13.5 26.2499V31.4999"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LinkedinIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 36 36"
      fill="none"
    >
      <path
        d="M12 16.5V24M12 12V12.015M18 24V16.5M24 24V19.5C24 18.7044 23.6839 17.9413 23.1213 17.3787C22.5587 16.8161 21.7956 16.5 21 16.5C20.2044 16.5 19.4413 16.8161 18.8787 17.3787C18.3161 17.9413 18 18.7044 18 19.5M9 6H27C28.6569 6 30 7.34315 30 9V27C30 28.6569 28.6569 30 27 30H9C7.34315 30 6 28.6569 6 27V9C6 7.34315 7.34315 6 9 6Z"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const WorldIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M4.80001 12H27.2M4.80001 20H27.2M15.3333 4C13.0871 7.59948 11.8962 11.7572 11.8962 16C11.8962 20.2428 13.0871 24.4005 15.3333 28M16.6667 4C18.9129 7.59948 20.1037 11.7572 20.1037 16C20.1037 20.2428 18.9129 24.4005 16.6667 28M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
