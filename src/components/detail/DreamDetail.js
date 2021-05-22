import React from "react";
import styled from "styled-components";

const DreamDetail = () => {
  return (
    <DreamDetailWrapper>
      <main className="dream-detail">
        <div className="dream-detail__header">
          <div className="dream-detail__header__title"></div>
          <div className="dream-detail__header__tags"></div>
        </div>
        <div className="dream-detail__content">
          <img className="dream-detail__img" />
          <div className="dream-detail__info">
            <div className="dream-detail__remaintime">
              경매 종료까지 남은 시간
            </div>
            <div className="dream-detail__remain"></div>
            <div className="dream-detail__gilmong">길몽 내용</div>
            <div className="dream-detail__gilmong__content">길몽 내용</div>
            <div className="dream-detail__bidnumber">
              200번째 등록되었습니다.
            </div>
          </div>
        </div>
        <div className="dream-detail__comments">
          <div className="dream-detail__comment">
            <div></div>
            <div className="dream-detail__comment__username"></div>
            <div className="dream-detail__comment__bidcoin"></div>
            <div className="dream-detail__comment__content"></div>
            <div className="dream-detail__comment__bidding"></div>
          </div>
        </div>
      </main>
    </DreamDetailWrapper>
  );
};

export default DreamDetail;
const DreamDetailWrapper = styled.div`
  .dream-detail {
    display: flex;
    justify-content: center;
  }
  .dream-detail__header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .dream-detail__content {
    display: flex;
  }
  .dream-detail__comment {
    display: flex;
  }
`;
