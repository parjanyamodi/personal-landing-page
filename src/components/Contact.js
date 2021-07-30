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
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [url, setUrl] = React.useState("");
  const [message, setMessage] = React.useState("");
  const rawTimestamp = Date.now();
  const timestamp = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(rawTimestamp);
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        timestamp: timestamp,
        name: name,
        email: email,
        phone: phone,
        url: url,
        message: message,
      })
      .then(() => {
        alert("Thanks for submitting the form!\nWill reach out to you soon.");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setPhone("");
    setUrl("");
    setMessage("");
  };

  return (
    <>
      <Bucket>
        <SubBucket>
          <SubBucket2>
            <FormArea>
              <FormTitle>
                <span>Contact Me !</span>
              </FormTitle>
              <FormGroup>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    required
                  ></input>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email Address"
                    required
                  ></input>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number"
                    required
                  ></input>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="Website/Social Media Link"
                  ></input>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Please leave a message!"
                  ></textarea>
                  <br></br>
                  <button type="submit" id="submit" placeholder="Submit">
                    Submit
                  </button>
                </form>
              </FormGroup>
            </FormArea>
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
          </SubBucket2>
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
margin-top: 15px;
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
const FormArea = styled.div`
  @media (min-width: 1024px) {
    background-color: #ede7d4;
    padding: 20px 50px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    background-color: #ede7d4;
    padding: 20px 50px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
  }
  @media (max-width: 768px) {
    background-color: #ede7d4;
    padding: 20px 20px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
  }
`;
const FormGroup = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 40px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #131b23;
      color: #ffffff;
      border: none;
      border-radius: 10px;
      font-size: 14px;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 150px;
      padding-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #131b23;
      color: #ffffff;
      border: none;
      border-radius: 10px;
      font-size: 14px;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #816c61;
      border: none;
      border-radius: 20px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #ede7d4;
      &:hover {
        background-color: #131b23;
        color: #ffffff;
      }
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 40px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #131b23;
      color: #ffffff;
      border: none;
      border-radius: 10px;
      font-size: 14px;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 350px;
      height: 150px;
      padding-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #131b23;
      color: #ffffff;
      border: none;
      border-radius: 10px;
      font-size: 14px;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #816c61;
      border: none;
      border-radius: 20px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #ede7d4;
      &:hover {
        background-color: #131b23;
        color: #ffffff;
      }
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    input {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 300px;
      height: 40px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #131b23;
      color: #ffffff;
      border: none;
      border-radius: 10px;
      font-size: 14px;
    }
    textarea {
      display: flex;
      flex-flow: row nowrap;
      margin-top: 10px;
      width: 300px;
      height: 150px;
      padding-top: 10px;
      padding-left: 10px;
      align-items: center;
      justify-content: center;
      background-color: #131b23;
      color: #ffffff;
      border: none;
      border-radius: 10px;
      font-size: 14px;
    }
    button {
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: 10px;
      background-color: #816c61;
      border: none;
      border-radius: 20px;
      width: 150px;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      color: #ede7d4;
      &:hover {
        background-color: #131b23;
        color: #ffffff;
      }
    }
  }
`;
const FormTitle = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    span {
      color: #131b23;
      justify-content: center;
      margin-top: 10px;
      font-size: 32px;
      font-weight: 700;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    span {
      color: #131b23;
      justify-content: center;
      margin-top: 10px;
      font-size: 32px;
      font-weight: 700;
    }
  }
  @media (max-width: 768px) {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    span {
      color: #131b23;
      justify-content: center;
      margin-top: 10px;
      font-size: 32px;
      font-weight: 700;
    }
  }
`;
const SubBucket2 = styled.div`
  display: flex;
  flex-flow: column;
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

export default Contact;
