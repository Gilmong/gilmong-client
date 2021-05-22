import React from "react";
import styled from "styled-components";

import ArrowBack from "../../assets/img/arrow_back.png";
import ArrowForward from "../../assets/img/arrow_forward.png";

const DealCardWrap = styled.div`
  .dealCard {
    padding: 3.35rem 3.214rem;
    background-color: #878787;
    color: white;
    width: 86rem;
    position: relative;

    &__title {
      font-weight: 700;
      font-size: 2.4rem;
    }

    &__page {
      position: absolute;
      top: 3.35rem;
      right: 5.123rem;
      fontsize: 2.4rem;
    }

    &__bottom {
      &--deal {
        font-weight: 700;
        font-size: 2.4rem;
      }
    }

    &__scroll {
      display: flex;
      position: absolute;
      bottom: 3.631rem;
      right: 3.631rem;

      > * {
        width: 3rem;
        height: 3rem;
        color: black;
      }
    }
  }
`;

// slider로 구현!
const DealCard = () => {
  return (
    <DealCardWrap>
      <div className="dealCard">
        <div className="dealCard__title">지금 뜨고 있는 길몽일세</div>
        <div className="dealCard__page">1/5</div>
        <div style={{ height: "15.235rem" }} />
        <div className="dealCard__bottom">
          <div className="dealCard__bottom--time">
            <span style={{ fontSize: "1.8rem" }}>경매 종료까지 남은 시간 </span>
            <span
              style={{ fontWeight: "700", fontSize: "4rem", color: "#dbae6e" }}
            >
              12:01:33
            </span>
          </div>
          <div style={{ height: "0.421rem" }} />
          <div className="dealCard__bottom--deal">
            200번째 경매가가 등록되었습니다.
          </div>
        </div>
        <div className="dealCard__scroll">
          <img src={ArrowBack} alt="" className="dealCard__scroll--back" />
          <span style={{ width: "1.5rem" }} />
          <img src={ArrowForward} alt="" className="dealCard__scroll--front" />
        </div>
      </div>
    </DealCardWrap>
  );
};

export default DealCard;
