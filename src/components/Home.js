import React from "react";
import styled from "styled-components";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaReact,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const Home = (props) => {
  return (
    <>
      <Bucket>
        <SubBucket>
          <ProfilePic>
            <img src="/images/parjanyamodi-profile.jpg" alt="Parjanya Modi" />
          </ProfilePic>
          <ProfileDetails>
            <ProfileName>
              <span>Parjanya H. Modi</span>
            </ProfileName>
            <ProfileTitle>
              <span>Computer Science & Engineering Undergrad</span>
            </ProfileTitle>
            <ProfileBio>
              <span>
                I am a curious, able and energetic individual who is fascinated
                by the complex yet adaptable nature of technology. I am a
                photographer, software developer, computer networks aficionado
                and a creative UI/UX designer, who has been a freelancer in
                these fields since 2019. Today, when technology has conquered
                every aspect of human life, resulting in the change of work
                method, cognitive learning and managing finance. Our devices
                inevitably begin to show our civic aspirations – our desires to
                connect with others and to contribute to the world around us.
              </span>
            </ProfileBio>
            <CTAButtons>
              <Portfolio>
                <a
                  href="https://portfolio.parjanyamodi.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Portfolio</span>
                </a>
              </Portfolio>
              <Photography>
                <a
                  href="https://photography.parjanyamodi.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Photography</span>
                </a>
              </Photography>
            </CTAButtons>
            <SocialIcons>
              <a
                href="https://github.com/parjanyamodi"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.instagram.com/parjanya_modi/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/in/parjanyamodi/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/channel/UCLNn5vP3X38s8Kdf5Mjk0QA/featured"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaYoutube />
              </a>
              <a
                href="mailto:parjanyamodi@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <HiMail />
              </a>
              <a
                href="https://wa.me/919737426927?text=Visited%20your%20landing%20page%20!"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaWhatsapp />
              </a>
            </SocialIcons>
            <Footer>
              <hr />
              <span>
                Made with ❤️ using{" "}
                <a
                  href="https://reactjs.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <strong>
                    <FaReact />
                  </strong>
                </a>
                .
                <br /> &#169; {new Date().getFullYear()}{" "}
                <a href="http://parjanyamodi.com">
                  <strong>Parjanya H Modi</strong>
                </a>
                .
              </span>
            </Footer>
          </ProfileDetails>
        </SubBucket>
      </Bucket>
    </>
  );
};
const Footer = styled.div`
  @media (min-width: 1024px) {
    position: relative;
    left: 0;
    right: 0;
    margin-top: 6vh;
    span {
      font-size: 14px;
      color: #2a90cb;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        color: #131b23;
        text-decoration: none;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    position: relative;
    left: 0;
    right: 0;
    margin-top: 20vh;
    span {
      font-size: 14px;
      color: #2a90cb;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        color: #131b23;
        text-decoration: none;
      }
    }
  }
  @media (max-width: 768px) {
    position: relative;
    left: 0;
    right: 0;
    margin-top: 5vh;
    span {
      font-size: 14px;
      color: #2a90cb;
      justify-content: center;
      text-align: center;
      align-items: center;
      a {
        font-size: 16px;
        color: #131b23;
        text-decoration: none;
      }
    }
  }
`;
const SocialIcons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  a {
    text-decoration: none;
    color: #816c61;
    font-size: 24px;
    font-weight: 700;
    margin: 5px;
    &:hover {
      color: #131b23;
    }
  }
`;
const Portfolio = styled.a`
  margin: 10px;
  a {
    width: 150px;
    background-color: #131b23;
    padding: 10px 15px;
    text-decoration: none;
    border-radius: 10px;
    span {
      text-align: center;
      justify-content: center;
      align-items: center;
      color: #ede7d4;
      font-size: 16px;
      font-weight: 700;
    }
    &:hover {
      background-color: #e9f1f7;
      span {
        color: #131b23;
      }
    }
  }
`;
const Photography = styled.a`
  margin: 10px;
  a {
    width: 150px;
    background-color: #131b23;
    padding: 10px 15px;
    text-decoration: none;
    border-radius: 10px;
    span {
      text-align: center;
      justify-content: center;
      align-items: center;
      color: #ede7d4;
      font-size: 16px;
      font-weight: 700;
    }
    &:hover {
      background-color: #e9f1f7;
      span {
        color: #131b23;
      }
    }
  }
`;
const CTAButtons = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ProfileBio = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 50vw;
    span {
      justify-content: center;
      font-size: 16px;
      font-weight: 400;
      color: #131b23;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 70vw;
    span {
      justify-content: center;
      font-size: 16px;
      font-weight: 400;
      color: #131b23;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    width: 90vw;
    span {
      justify-content: center;
      font-size: 16px;
      font-weight: 400;
      color: #131b23;
    }
  }
`;
const ProfileTitle = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    span {
      justify-content: center;
      font-size: 28px;
      font-weight: 400;
      color: #2a90cb;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    span {
      justify-content: center;
      font-size: 24px;
      font-weight: 400;
      color: #2a90cb;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    span {
      justify-content: center;
      font-size: 22px;
      font-weight: 400;
      color: #2a90cb;
    }
  }
`;
const ProfileName = styled.div`
  @media (min-width: 1024px) {
    margin-top: 2%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    span {
      justify-content: center;
      font-size: 40px;
      font-weight: 700;
      color: #131b23;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-top: 2%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    span {
      justify-content: center;
      font-size: 36px;
      font-weight: 700;
      color: #131b23;
    }
  }
  @media (max-width: 768px) {
    margin-top: 2%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    span {
      justify-content: center;
      font-size: 32px;
      font-weight: 700;
      color: #131b23;
    }
  }
`;
const ProfileDetails = styled.div`
  display: flex;
  flex-flow: column;
`;
const ProfilePic = styled.div`
  @media (min-width: 1024px) {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 2%;
    img {
      position: relative;
      width: 250px;
      border-radius: 50%;
      display: flex;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 5vh;
    img {
      position: relative;
      width: 200px;
      border-radius: 50%;
      display: flex;
    }
  }
  @media (max-width: 768px) {
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin-top: 2vh;
    img {
      position: relative;
      width: 150px;
      border-radius: 50%;
      display: flex;
    }
  }
`;
const SubBucket = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;
const Bucket = styled.div`
  color: #000000;
  position: relative;
  min-height: calc(100vh - 150px);
  overflow-x: hidden;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background-color: #ffffff;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
