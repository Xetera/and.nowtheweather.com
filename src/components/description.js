import * as React from "react";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { textSize3 } from "../style";
import icon from "../../public/nightvale.jpg";

const DescriptionContainer = styled(Paper)`
`;

const Text = styled(Typography)`
  width: 100%;
  text-align: left;
  padding-bottom: 15px;
  color: #565656 !important;
  ${textSize3}
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 1rem;
  text-align: left;
  display: flex;
  align-items: center;
  h2 {
    margin-right: 5px;
  }
`;

const Thumbnail = styled.img`
  max-width: 128px;
  border-radius: 999px;
`;

export const Description = () => (
  <Section>
    <Text>
      <a href="https://www.welcometonightvale.com/" target="_blank" rel="noopener noreferrer">Welcome to Nightvale</a> is a podcast about a radio show in a fictional desert
      community where the strangest things, like five headed dragons, predatory
      government helicopters that abduct children, and a faceless old woman
      who secretly lives in your home are nothing out of the ordinary.
    </Text>
    <Text>
      In every episode, there is a song segment that lets listeners discover new music called <strong>The Weather</strong>.
      This is a searchable collection of every single one of them.
    </Text>
  </Section >
);
