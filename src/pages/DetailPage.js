import React from "react";
import styled from "styled-components";
import DetailHeader from "../components/detail/DetailHeader";
import DreamDetail from "../components/detail/DreamDetail";
import Comment from "../components/detail/Comment";

const DetailPage = ({ dreamId }) => {
  return (
    <DetailPageWrapper>
      <DetailHeader />
      <DreamDetail />
      <Comment />
    </DetailPageWrapper>
  );
};

export default DetailPage;
const DetailPageWrapper = styled.div``;
