import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/es/CardContent/CardContent";
import styled, { css } from "styled-components";
import Typography from "@material-ui/core/es/Typography/Typography";
import Youtube from "react-youtube";
import { textSize1, textSize3 } from "../style";

const stripQuotes = (string) => string.slice(1, -1);

const MediaCard = styled(Card)`
	margin-bottom: 2rem;
`;

const CardTitles = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 5px;
`;

const CardTitle = styled(Typography)`
	${textSize1}
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
	${textSize3}
`;

export const Media = ({ url, num, episode, song, artist }) =>
	<MediaCard className="media">
		<CardContent>
			<CardTitles>
				<CardTitle variant="h2">{episode}</CardTitle>
				<CardTitle variant="h2">{num}</CardTitle>
			</CardTitles>
			{url && <VideoContainer>
				<YoutubeVideo videoId={url} opts={{ width: 350, height: 250 }}/>
			</VideoContainer>}
			<Text>{artist} - {stripQuotes(song)}</Text>
		</CardContent>
	</MediaCard>;
