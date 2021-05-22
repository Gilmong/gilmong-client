import React from "react";
import styled from "styled-components";
import ProfileIcon from "../../assets/DetailPageImg/profile.svg";
const Comment = () => {
  const [inputs, setInputs] = React.useState({
    coin: "",
    comment: "",
  });
  const { coin, comment } = inputs;
  const changeHandler = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    // getUser(userName);
    // console.log(inputs);
    setInputs({
      coin: "",
      comment: "",
    });
  };
  return (
    <CommentWrapper>
      <div className="dream-detail__comment">
        <form className="dream-form" onSubmit={submitHandler}>
          <div className="dream-form__row">
            <img src={ProfileIcon} />
            <div className="dream-detail__comment__username">
              유저닉네임유저닉네임
            </div>
          </div>

          <div className="dream-detail__comment__bidcoin">
            <input
              className="coin-input"
              name="coin"
              type="text"
              value={coin}
              onChange={changeHandler}
              placeholder="nn"
            />
            <span>코인</span>
          </div>
          <input
            className="comment-input"
            name="comment"
            type="text"
            value={comment}
            onChange={changeHandler}
            placeholder="댓글을 입력해주세요"
          />

          <button type="submit" className="bid_btn">
            내가 사 보겠네~!
          </button>
        </form>
        <div className="no-comment">아직 거래내역이 존재하지 않습니다.</div>
      </div>
    </CommentWrapper>
  );
};

export default Comment;
const CommentWrapper = styled.div`
  .dream-detail__comment {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* height: 121px; */
    align-items: center;

    &__username {
      font-weight: bold;
      font-size: 24px;
      color: white;
    }
    &__bidcoin {
      width: 80px;
      .coin-input {
        width: 30px;
        outline: none;
        color: white;
        font-size: 20px;
      }

      span {
        font-weight: 500;
        font-size: 20px;
        line-height: 36px;

        color: #cb6d79;
      }
    }
  }
  .bid_btn {
    background-color: #cb6d79;
    font-size: 24px;
    font-weight: bold;
    color: white;
    padding: 8px 10px;
    border-radius: 10px;
    border: none;
  }
  .dream-form {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #dbae6e;
    border-bottom: 1px solid #dbae6e;
    height: 121px;
    margin-bottom: 54px;
    &__row {
      display: flex;
      align-items: center;
      img {
        margin-right: 25px;
      }
    }
    .comment-input {
      width: 720px;
      outline: none;
      font-size: 20px;
      color: white;
    }
  }
  input {
    border: none;
    background-color: #214260;
  }
  .no-comment {
    font-weight: 500;
    font-size: 24px;
    color: white;
    margin-bottom: 120px;
  }
`;
