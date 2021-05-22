import React from "react";
import styled from "styled-components";

import DealCard from "../components/main/DealCard";
import DreamCard from "../components/main/DreamCard";
import UserCard from "../components/main/UserCard";

const MainWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MainPage = () => {
  return (
    <MainWrap>
      <DreamCard />
    </MainWrap>
  );
};

export default MainPage;
