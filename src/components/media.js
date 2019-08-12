import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import styled from "styled-components";
import Typography from "@material-ui/core/es/Typography/Typography";
import Youtube from "react-youtube";
import { textSize1, textSize3 } from "../style";
import Note from "@material-ui/icons/MusicNoteOutlined";
import Book from "@material-ui/icons/NotesOutlined";

const stripQuotes = string => string.slice(1, -1);

const MusicalNote = styled(Note)`
  font-size: 24px !important;
  @media (min-width: 767px) {
    font-size: 32px !important;
  }
  color: #6a696c;
  padding-right: 5px;
`;

const MediaCard = styled(Card)`
  margin-bottom: 1rem;
  cursor: pointer;
`;

const CardTitles = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;

const CardTitle = styled(Typography)`
  font-weight: 500 !important;
  ${textSize1}
`;

const CardEpisode = styled(CardTitle)`
  color: #353535 !important;
`;

const VideoContainer = styled.div`
  display: flex;
  position: relative;
  max-width: 600px;
  height: 250px;
  justify-content: center;
  margin: 15px auto;
`;

const YoutubeVideo = styled(Youtube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Text = styled(Typography)`
  font-weight: 300 !important;
  padding-right: 5px;
  ${textSize3}
`;

const Content = styled(CardContent)`
  padding-bottom: 16px !important;
`;

const SongNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Flex = styled.span`
  display: flex;
`;

const SongLink = styled.a`
  color: unset;
  text-decoration: unset;
  :hover {
    text-decoration: underline;
  }
`;

export const Media = ({ url, num, episode, song, artist, onTranscript }) => {
  const [open, setOpen] = React.useState(false);
  const sendTranscript = () => onTranscript({ num });
  const toggleVideo = () => setOpen(!open);

  return (
    <MediaCard className="media" elevation={1} onClick={toggleVideo}>
      <Content>
        <CardTitles>
          <CardTitle variant="h2">{episode}</CardTitle>
          <CardEpisode variant="h2">{num}</CardEpisode>
        </CardTitles>
        {url && open && (
          <VideoContainer>
            <YoutubeVideo videoId={url} opts={{ width: 350, height: 250 }} />
          </VideoContainer>
        )}
        <SongNameContainer>
          <Flex>
            <MusicalNote />
            <Text>
              <SongLink
                title="Open song in a new tab"
                target="_blank"
                href={`https://www.youtube.com/watch?v=${url}`}
              >
                {artist} - {stripQuotes(song)}
              </SongLink>
            </Text>
          </Flex>
          <Book title="Episode transcripts" onClick={sendTranscript} />
        </SongNameContainer>
      </Content>
    </MediaCard>
  );
};
