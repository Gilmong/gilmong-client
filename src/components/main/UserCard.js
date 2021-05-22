import React from "react";
import styled from "styled-components";

const UserCardWrap = styled.div`
  width: 30%;

  .userCard {
    width: 100%;
    height: 34.238rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &__deal {
      height: 16.074rem;
      width: 100%;
      display: flex;
      justify-content: space-between;

      > * {
        border: 1px solid #dbae6e;
        width: 48%;
        box-sizing: border-box;
        padding: 1.857rem 3.505rem;
      }
    }

    &__coin {
      box-sizing: border-box;
      padding: 1.857rem 3.505rem;
      border: 1px solid #dbae6e;
      width: 100%;
      height: 16.074rem;
      display: flex;
      flex-direction: column;
    }

    &__body {
      &--top {
        width: 100%;
        display: flex;
        align-items: baseline;
        justify-content: flex-end;
      }

      &--bottom {
        width: 100%;
        display: flex;
        align-items: baseline;
        justify-content: center;
      }

      &--number {
        font-size: 5rem;
        font-weight: 700;
        color: #dbae6e;
      }

      &--char {
        font-size: 2.4rem;
        font-weight: 700;
      }
    }

    &__title {
      font-size: 2.4rem;
      font-weight: 700;
    }
  }
`;

const UserCard = () => {
  return (
    <UserCardWrap>
      <div className="userCard">
        <div className="userCard__coin">
          <div className="userCard__title">나의 코인</div>
          <div className="userCard__body--top">
            <span className="userCard__body--number">31</span>
            <span style={{ width: "1rem" }} />
            <span className="userCard__body--char">코인</span>
          </div>
        </div>
        <div className="userCard__deal">
          <div className="userCard__deal--wait">
            <div className="userCard__title">거래 대기</div>
            <div className="userCard__body--bottom">
              <span className="userCard__body--number">2</span>
              <span style={{ width: "1rem" }} />
              <span className="userCard__body--char">몽</span>
            </div>
          </div>
          <div className="userCard__deal--success">
            <div className="userCard__title">낙찰 성공</div>
            <div className="userCard__body--bottom">
              <span className="userCard__body--number">1</span>
              <span style={{ width: "1rem" }} />
              <span className="userCard__body--char">몽</span>
            </div>
          </div>
        </div>
      </div>
    </UserCardWrap>
  );
};

export default UserCard;
