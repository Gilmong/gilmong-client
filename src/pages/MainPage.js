import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import DealCard from "../components/main/DealCard";
import DreamCard from "../components/main/DreamCard";
import UserCard from "../components/main/UserCard";
import ApiService from "../lib/api";

const MainWrap = styled.div`
  color: white;

  .main {
    width: 100%;
    display: flex;
  }

  .dreams {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const MainPage = ({ history }) => {
  const [auctions, setAuctions] = useState(null);

  useEffect(() => {
    (async () => {
      const temp = await ApiService.getAuctions();
      temp && setAuctions(temp);
    })();
  }, []);

  return (
    <MainWrap>
      <div className="main">
        <DealCard />
        <div style={{ width: "2.539rem" }} />
        <UserCard />
      </div>
      <div style={{ height: "4.7rem" }} />
      <div className="dreams">
        {/* DB 연결 후 useEffect 써서 dreams.map(<DreamCard />) 로 변경해야 함 */}
        {auctions &&
          auctions.map((auction, idx) => {
            const dream = auction.dream;

            return <DreamCard key={dream._id} idx={idx} dream={dream} />;
          })}
      </div>
    </MainWrap>
  );
};

export default withRouter(MainPage);
