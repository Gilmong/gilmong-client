import React from "react";
import styled from "styled-components";
const DetailHeader = () => {
  return (
    <DetailHeaderWrapper>
      <header className="detail-header">
        <div className="detail-header__back"></div>
        <div className="detail-header__dream">
          <div className="detail-header__dream__title"></div>
          <div className="detail-header__dream__tags"></div>
        </div>
      </header>
    </DetailHeaderWrapper>
  );
};

export default DetailHeader;
const DetailHeaderWrapper = styled.div``;
