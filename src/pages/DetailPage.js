import React from "react";
import styled from "styled-components";
import DetailHeader from "../components/detail/DetailHeader";
import DreamDetail from "../components/detail/DreamDetail";
import Comment from "../components/detail/Comment";
import apiService from "../lib/api";
const DetailPage = () => {
  const getDream = async () => {
    const data = await apiService();
    console.log(data);
  };
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
