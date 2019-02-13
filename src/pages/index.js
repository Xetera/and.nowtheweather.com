import React from 'react'
import { withSiteData } from 'react-static'
import styled, { css } from "styled-components";
import { Media } from "../components/media";
import { SearchBar } from "../components/search";
import { Title } from "../components/title";


const Root = styled.div`
  text-align: center;
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: left;
  @media(min-width: 767px) {
  	width: 100%;
  }
  @media(min-width: 1024px) {
  	width: 70%;
  }
`;

const MainColumn = styled.div`
	padding: 1.5rem;
`;

const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
background:linear-gradient(135deg, #932c8f 0%,#651368 100%);
	padding: 20px 0 45px 0;
	--webkit-clip-path: polygon(0 0, 100% 0, 100% 61%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 81%);
`;


const MediaWrapper = styled.div`
  justify-content: center;
  .media {
  	*:hover {
  		background-color: inherit;
  	}
  	&:nth-child(5n + 0) {
    	border-left: 8px solid #CE9FFC;
    }
  	&:nth-child(5n + 1) {
    	border-left: 8px solid #66fcf5;
    }
  	&:nth-child(5n + 2) {
    	border-left: 8px solid #FF57B9;
    }
  	&:nth-child(5n + 3) {
    	border-left: 8px solid #f2d50f;
    }
  	&:nth-child(5n + 4) {
    	border-left: 8px solid #c3ec52;
    }
  }
`;

const SearchBarWrapper = styled.div`
	margin: 20px 0;
`;

export default withSiteData(({ weather }) => {
	const [episodes, setEpisodes] = React.useState(weather);

	const changeEpisodes = newEpisodes => {
		if (!newEpisodes.length) {
			return setEpisodes(weather);
		}
		return setEpisodes(newEpisodes);
	};
	return (
		<Root>
			<TitleWrapper>
				<Title/>
			</TitleWrapper>

			<MainColumn>
				<MediaContainer>
					{/*<Description/>*/}
					<SearchBarWrapper>
						<SearchBar items={episodes} filter={changeEpisodes}/>
					</SearchBarWrapper>
					<MediaWrapper>
						{episodes.map(data => <Media {...data} key={data.episode}/>)}
					</MediaWrapper>
				</MediaContainer>
			</MainColumn>
		</Root>
	);
});
