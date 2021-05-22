import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const DreamCardWrap = styled.div`
  .dreamCard {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 0;
    border: 1px solid #dbae6e;

    &__desc {
      background-color: transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 1.169rem 1.862rem;

      &--deal {
        color: #dbae6e;
      }

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

const DreamCard = ({ dream, idx, history }) => {
  const handleClick = () => {
    history.push(`/detail/${dream._id}`);
  };

  return (
    <DreamCardWrap idx={idx}>
      <div className="dreamCard" onClick={handleClick}>
        <img
          src={dream.image}
          alt=""
          className="dreamCard__img"
          style={{ width: "33rem", height: "31rem" }}
        />
        <div className="dreamCard__desc">
          <div className="dreamCard__desc--title">{dream.title}</div>
          <div style={{ height: "0.31rem" }} />
          <div className="dreamCard__desc--tags">
            {dream.keyword.map((tag) => (
              <span className="dreamCard__desc--tag">#{tag} </span>
            ))}
          </div>
          <div style={{ height: "1.813rem" }} />
          <div className="dreamCard__desc--deal">
            <span
              className="deal__text"
              style={{ color: "#white", fontSize: "1.2rem" }}
            >
              경매 시작가{" "}
            </span>
            <span
              className="deal__price"
              style={{ fontWeight: "700", fontSize: "1.5rem" }}
            >
              {dream.price}{" "}
            </span>
            코인
          </div>
        </div>
      </div>
      <div style={{ height: "4.7rem" }} />
    </DreamCardWrap>
  );
};

export default withRouter(DreamCard);
