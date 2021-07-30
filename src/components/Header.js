import React from "react";
import styled from "styled-components";

const Header = (props) => {
  return (
    <Bucket>
      <SubBucket>
        <Logo>
          <a href="/">
            <img src="/images/sign-logo.png" alt="Parjanya Modi" />
          </a>
        </Logo>
        <CallToAction>
          <a href="/contact">
            <span>Contact Me</span>
          </a>
        </CallToAction>
      </SubBucket>
    </Bucket>
  );
};
const CallToAction = styled.div`
  @media (min-width: 600px) {
    margin-right: 5%;
    z-index: 15;
    a {
      text-decoration: none;
      color: #ede7d4;
      padding: 0;
      width: 200px;
      height: 70px;
      position: relative;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      font-size: 0;
      z-index: 20;
      background-color: #816c61;
      border-radius: 15px;
      font-size: 16px;
      font-weight: 800;
      &:hover {
        background-color: #e8eef2;
        color: #816c61;
      }
    }
  }
  @media (max-width: 600px) {
    margin-right: 5%;
    z-index: 15;
    a {
      text-decoration: none;
      color: #ede7d4;
      padding: 0;
      width: 120px;
      height: 60px;
      position: relative;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      font-size: 0;
      z-index: 20;
      background-color: #816c61;
      border-radius: 15px;
      font-size: 16px;
      font-weight: 800;
      &:hover {
        background-color: #e8eef2;
        color: #816c61;
      }
    }
  }
`;

const Logo = styled.a`
  @media (min-width: 600px) {
    padding: 0;
    width: 250px;
    font-size: 0;
    margin-left: 5%;
    display: flex;
    flex-flow: row nowrap;
    img {
      align-items: center;
      text-align: center;
      margin-bottom: auto;
      margin-top: 15px;
      justify-content: center;
      width: 200px;
      image-rendering: auto;
      image-rendering: crisp-edges;
    }
  }
  @media (max-width: 600px) {
    padding: 0;
    width: 130px;
    font-size: 0;
    margin-left: 5%;
    display: flex;
    flex-flow: row nowrap;
    img {
      align-items: center;
      text-align: center;
      margin-bottom: auto;
      margin-top: 10px;
      justify-content: center;
      width: 130px;
      image-rendering: auto;
      image-rendering: crisp-edges;
    }
  }
`;
const SubBucket = styled.div`
  @media (min-width: 600px) {
    position: relative;
    height: 100px;
    background-color: #131b23;
    width: 80vw;
    border: none;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 600px) {
    position: relative;
    height: 90px;
    background-color: #131b23;
    width: 90vw;
    border: none;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const Bucket = styled.nav`
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 150px;
  background-color: #ffffff;
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;

export default Header;
