import React, { useState } from "react";
import styled from "styled-components";

import DealCard from "../components/main/DealCard";
import DreamCard from "../components/main/DreamCard";
import UserCard from "../components/main/UserCard";

const MainWrap = styled.div`
  margin: 9rem 25.9rem;
  .main {
    display: flex;
    justify-content: center;
  }
`;

const MainPage = () => {
  const [dreams, setDreams] = useState(null);

  return (
    <MainWrap>
      <div className="main">
        <DealCard />
        <div style={{ width: "2.539rem" }} />
        <UserCard />
      </div>
      <div className="dreams">
        {/* DB 연결 후 useEffect 써서 dreams.map(<DreamCard />) 로 변경해야 함 */}
        <DreamCard />
      </div>
    </MainWrap>
  );
};

export default MainPage;
