import React from "react";
import styled from "styled-components";
const DetailHeader = () => {
  return (
    <DetailHeaderWrapper>
      <header className="detail-header">
        <div className="detail-header__back"></div>
        <div className="detail-header__title"></div>
      </header>
    </DetailHeaderWrapper>
  );
};

export default DetailHeader;
const DetailHeaderWrapper = styled.div`
  .detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .detail-header__back {
    margin-left: 25px;
  }
`;
