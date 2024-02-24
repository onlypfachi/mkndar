import React from "react";
import Header from "../components/header.jsx";
import * as Styled from "../styles/primaryLayout";

export const PrimaryLayout = ({ Children }) => {
  return (
    <>
      <Styled.LayoutContainer>
        <Header />
        <div className="container mx-auto bg-black"><h1>hello</h1>{Children}</div>
      </Styled.LayoutContainer>
    </>
  );
};

export default PrimaryLayout;
