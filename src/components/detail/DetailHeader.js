import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import BackIcon from "../../assets/DetailPageImg/back.svg";
import HomeIcon from "../../assets/DetailPageImg/home.svg";
const DetailHeader = ({ history }) => {
  return (
    <DetailHeaderWrapper>
      <div className="detail-header">
        <img
          src={BackIcon}
          className="detail-header__back"
          onClick={() => history.push("/")}
        />
        <img src={HomeIcon} className="detail-header__title" />
      </div>
    </DetailHeaderWrapper>
  );
};

export default withRouter(DetailHeader);
const DetailHeaderWrapper = styled.div`
  .detail-header {
    width: 100%;
    height: 146px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-top: 1px solid #dbae6e;
    border-bottom: 1px solid #dbae6e;
    margin: 35px 0px;
    /* padding: 40px 260px; */
    &__back {
      cursor: pointer;
    }
  }
  /* .detail-header__back {
    margin-left: 25px;
  } */
`;
