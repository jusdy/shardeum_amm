import { Description } from "@mui/icons-material";
import { title } from "process";
import React from "react";
import styled from "styled-components";

const TokenDetails = styled.div``;
const Amount = styled.div`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #a80084;
`;
const TokenWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e0e0e0;
`;
const TokenDiscription = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #616161;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const TokenIcon = styled.img`
  width: 45px;
  height: 45px;
`;

const TokenTitle = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;

  color: #a80084;
`;

interface Props {
  icon: string;
  title: string;
  description: string;
}

function TokenItem({ icon, title, description }: Props) {
  return (
    <TokenWrapper>
      <Info>
        <TokenIcon src={icon} />
        <TokenDetails>
          <TokenTitle>{title}</TokenTitle>
          <TokenDiscription>{description}</TokenDiscription>
        </TokenDetails>
      </Info>
      <Amount>0</Amount>
    </TokenWrapper>
  );
}

export default TokenItem;