import React from "react";
import Footer from "./Footer";
import MyNavBar from "./MyNavBar";

const Layouts = ({ children }) => {
  return (
    <div>
      <MyNavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layouts;
