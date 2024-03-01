import React from "react";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import * as Styled from "../styles/primaryLayout.jsx";

const PrimaryLayout = ({ children }) => {
  return (
    <Styled.LayoutContainer>
      <Header />
      <Styled.PageContainer>
        {children}
      </Styled.PageContainer>
      <Footer />
    </Styled.LayoutContainer>
  );
};

export default PrimaryLayout;
