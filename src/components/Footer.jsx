// Filename - components/Footer1.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/fontawesome-free-brands";
import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box className="container-fluid">
      <FooterContainer className="bg-info">
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Bangalore</FooterLink>
            <FooterLink href="#">Delhi</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <FontAwesomeIcon icon={faFacebook} className="text-primary" />
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                Facebook
              </span>
            </FooterLink>
            <FooterLink href="#">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  color: "purple",
                }}
              />
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                Instagram
              </span>
            </FooterLink>
            <FooterLink href="#">
              <FontAwesomeIcon icon={faTwitter} className="text-dark" />
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                Twitter
              </span>
            </FooterLink>
            <FooterLink href="#">
              <FontAwesomeIcon icon={faYoutube} className="text-danger" />
              <span
                style={{
                  marginLeft: "10px",
                }}
              >
                Youtube
              </span>
            </FooterLink>
          </Column>
        </Row>
        <div className="text-danger text-center pt-2 pb-0 fw-bold">
          Copyright &copy; 2024. TA-DA.com All Rights Reserved.
        </div>
      </FooterContainer>
    </Box>
  );
};
export default Footer;
