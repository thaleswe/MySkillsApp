import React from "react";

import { Home } from "./src/pages/Home";
import { StatusBar } from "react-native";

export default function App() {
  return ( // fragment
    <>
      <StatusBar barStyle={"light-content"} />
      <Home />
    </>
  )
}