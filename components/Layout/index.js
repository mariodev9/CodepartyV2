import { Text } from "@chakra-ui/react";
import React from "react";
import TopNav from "./TopNavbar";

export default function Layout({ children }) {
  return (
    <div>
      <TopNav />
      {children}
      <Text>Layout</Text>
    </div>
  );
}
