import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

import DreamImage from "../../assets/img/dream_image.png";

const DreamCardWrap = styled.div`
  .dreamCard {
    display: flex;
    flex-direction: column;
    width: 33rem;
    height: 31rem;
    margin: 0;

    &__desc {
      background-color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.169rem 1.862rem;

      &--title {
        font-family: noto-sans-cjk-kr, sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 1.8rem;
      }

      &--tag {
        font-size: 1.5rem;
      }
    }
  }
`;

const mockData = {
  title: "돼지가 내 얼굴을 마구 찬 꿈",
  image:
    "https://m.nongmin.com/upload/bbs/201901/20190106150134342/20190106150134342.jpg",
  keyworkd: ["돼지", "부자"],
  price: 10
};

const DreamCard = () => {
  return (
    <DreamCardWrap>
      <div className="dreamCard">
        <img src={DreamImage} alt="" className="dreamCard__img" />
        <div className="dreamCard__desc">
          <div className="dreamCard__desc--title">{mockData.title}</div>
          <div style={{ height: "0.31rem" }} />
          <div className="dreamCard__desc--tags">
            {mockData.keyworkd.map((tag) => (
              <span className="dreamCard__desc--tag">#{tag} </span>
            ))}
          </div>
          <div style={{ height: "1.813rem" }} />
          <div className="dreamCard__desc--deal">
            <span
              className="deal__text"
              style={{ color: "#B0B0B0", fontSize: "1.2rem" }}
            >
              경매 시작가{" "}
            </span>
            <span
              className="deal__price"
              style={{ fontWeight: "700", fontSize: "1.5rem" }}
            >
              {mockData.price}{" "}
            </span>
            코인
          </div>
        </div>
      </div>
    </DreamCardWrap>
  );
};

export default withRouter(DreamCard);
