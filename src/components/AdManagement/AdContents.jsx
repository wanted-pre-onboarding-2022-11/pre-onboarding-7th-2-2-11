import React from "react";
import styled from "styled-components";
import AdList from "./AdList";
import SubHeader from "./SubHeader";

const AdContents = () => {
  return (
    <>
      <S.AdContents>
        <SubHeader />
        <AdList />
      </S.AdContents>
    </>
  );
};

export default AdContents;

const S = {
  AdContents: styled.div`
    padding: 2.5rem 4rem;

    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
  `,
};
