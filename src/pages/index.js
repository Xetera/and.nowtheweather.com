import React from 'react'
import { withSiteData } from 'react-static'
import styled from "styled-components";
import { Media } from "../components/media";
import Typography from "@material-ui/core/es/Typography/Typography";
import { SearchBar } from "../components/search";
import { Description } from "../components/description";
import Grid from "@material-ui/core/Grid";
import { textSizeTitle } from "../style";

const eyeImage = "https://66.media.tumblr.com/f87ca6958f19b1380e830a3cf3c9a401/tumblr_mqt86daL6l1r6ptieo1_1280.gif";

const Root = styled.div`
  text-align: center;
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  text-align: left;
  padding: 1rem;
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
background:linear-gradient(135deg, #932c8f 0%,#651368 100%);
	padding: 20px 0 45px 0;
	--webkit-clip-path: polygon(0 0, 100% 0, 100% 61%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 81%);
`;

const Nightvale = styled(Typography)`
	font-family: "Nightvale", Arial, "sans-serif" !important;
	color: white !important;
	display: inline !important;
	${textSizeTitle}
`;

const Eye = styled.img`
	max-height: 50px;
	top: 0;
	padding: 10px 0;
	opacity: .6;
`;

const MediaWrapper = styled.div`
  justify-content: center;
  .media {
  	&:nth-child(5n + 0) {
    	background:  #CE9FFC;
    }
  	&:nth-child(5n + 1) {
			background: #66fcf5;
    }
  	&:nth-child(5n + 2) {
			background: #FF57B9;
    }
  	&:nth-child(5n + 3) {
			background: #f2d50f;
    }
  	&:nth-child(5n + 4) {
			background: #c3ec52;
    }
  }
`;

const SearchBarWrapper = styled.div`
	margin: 20px 0;
`;

export default withSiteData(({ weather }) => (
	<Root>
		<TitleWrapper>
			{/*<Grid xs={8}>*/}
				<Nightvale className="nightvale" variant="h1">And now, the weather</Nightvale>
			{/*</Grid>*/}
			{/*<Grid xs={4}>*/}
				{/*<Eye src={eyeImage}/>*/}
			{/*</Grid>*/}
		</TitleWrapper>
		<MediaContainer>
			<Description/>
			<SearchBarWrapper>
				<SearchBar results={weather.length}/>
			</SearchBarWrapper>
			<MediaWrapper>
				{weather.map(data => <Media {...data} key={data.episode}/>)}
			</MediaWrapper>
		</MediaContainer>
	</Root>
));
