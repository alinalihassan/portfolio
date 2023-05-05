import styled from "styled-components";

export const Heading = styled.h2`
  position: relative;
`;

export const AnchorLink = styled.a`
  float: left;
  margin-top: 0.125em;
  margin-left: -1.2em;
  padding-right: 0.5em;
  font-size: 0.85em;
  opacity: 0;
  text-decoration: none;
  transition: 0.3s;

  ${Heading}:hover & {
    opacity: 1;
  }
`;
