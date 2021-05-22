import React from "react";
import styled from "styled-components";

const DreamDetail = () => {
  return (
    <DreamDetailWrapper>
      <main className="dream-detail">
        <div className="dream-detail__header">
          <div className="dream-detail__header__title">
            돼지가 내 얼굴을 마구 찬 꿈
          </div>
          <div className="dream-detail__header__tags">#돼지 #부자</div>
        </div>
        <div className="dream-detail__content">
          <img className="dream-detail__img" />
          <div className="dream-detail__info">
            <div className="dream-detail__info__row">
              <div className="dream-detail__bidstart">
                <span>시작가</span>
                <span className="dream-detail__startcoin">10</span>
                <span>코인</span>
              </div>
              <div className="dream-detail__time">
                <span>남은 시간</span>
                <span className="dream-detail__remaintime">00:00::00</span>
              </div>
            </div>

            <div className="dream-detail__gilmong">길몽 내용</div>
            <div className="dream-detail__gilmong__content">
              길몽 내용ㅇㅇㅇㅇㅇㅇ
            </div>
            <div className="dream-detail__bidnumber">
              200번째 등록되었습니다.
            </div>
          </div>
        </div>
      </main>
    </DreamDetailWrapper>
  );
};

export default DreamDetail;
const DreamDetailWrapper = styled.div`
  .dream-detail__img {
    width: 687px;
    height: 406px;
    margin-right: 26px;
  }
  .dream-detail {
    width: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* .dream-detail__info {
    width: 687px;
  } */
  .dream-detail__gilmong {
    font-weight: 900;
    font-size: 24px;
    line-height: 36px;

    /* identical to box height */

    color: #ffffff;
    &__content {
      border: 1px solid #dbae6e;
      width: 686px;
      height: 215px;
      overflow-y: scroll;
      margin-bottom: 9px;
      padding: 16px;
    }
  }
  .dream-detail__bidnumber {
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    /* SUB 2_YELLOW */

    color: #dbae6e;
  }
  .dream-detail__header {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Noto Sans CJK KR;
    &__title {
      font-weight: bold;
      font-size: 40px;
      color: #ffffff;
      line-height: 59px;
      text-align: center;
      margin-bottom: 12px;
    }
    &__tags {
      font-size: 36px;
      line-height: 53px;
      text-align: center;
      margin-bottom: 58px;
      /* SUB 2_YELLOW */

      color: #dbae6e;
    }
  }
  .dream-detail__content {
    display: flex;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 36px;
    width: 100%;
    color: #ffffff;

    margin-bottom: 83px;
  }
  .dream-detail__info__row {
    width: 100%;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }
  .dream-detail__bidstart,
  .dream-detail__time {
    display: flex;
    width: 330px;
    height: 92px;
    border: 1px solid #dbae6e;
    justify-content: space-around;
    align-items: center;
    span {
      font-size: 24px;
      font-weight: bold;

      color: #ffffff;
    }
    span:nth-child(2) {
      font-size: 40px;
      color: #dbae6e;
    }
    span:last-child {
      margin-right: 16px;
    }
  }
  /* .dream-detail__startcoin {
    font-size: 40px;
    color: #dbae6e;
  } */
`;
