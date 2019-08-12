import React from "react";
import styled from "styled-components";
import "normalize.css";
import GithubCorner from "react-github-corner";
import { graphql } from "gatsby";
import "../global.css";
import { Media } from "../components/media";
import { SearchBar } from "../components/search";
import { Title } from "../components/title";
import { SiteHead } from "../components/head";
import { Footer } from "../components/footer";
import { LOADING_TRANSCRIPT, parseTranscript } from "../utils";
import { TranscriptModal } from "../components/modal";
import { Description } from "../components/description";

const Root = styled.div`
  text-align: center;
`;

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: left;
  @media (min-width: 767px) {
		margin: 1.5rem auto;
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 65%;
  }
`;

const MainColumn = styled.div`
  padding: 1rem;
`;

const TitleWrapper = styled.header`
  display: flex;
  height: 250px;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(135deg, #932c8f 0%, #651368 100%);
  padding: 20px 0 20px 0;
`;

const MediaWrapper = styled.div`
  justify-content: center;
  .media {
    *:hover {
      background-color: inherit;
    }
    &:nth-child(5n + 0) {
      border-left: 8px solid #c239b3;
    }
    &:nth-child(5n + 1) {
      border-left: 8px solid #00b7c3;
    }
    &:nth-child(5n + 2) {
      border-left: 8px solid #e3008c;
    }
    &:nth-child(5n + 3) {
      border-left: 8px solid #ffaa44;
    }
    &:nth-child(5n + 4) {
      border-left: 8px solid #8cbd18;
    }
  }
`;

const SearchBarWrapper = styled.div`
  margin: 0 0 20px 0;
`;

const SiteWrapper = styled(Root)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Index = ({
	data: {
		json: { nodes },
	},
}) => {
	const [episodes, setEpisodes] = React.useState(nodes);
	const [modal, setModal] = React.useState(false);
	const [transcript, setTranscript] = React.useState(LOADING_TRANSCRIPT);

	const changeEpisodes = newEpisodes => {
		if (!newEpisodes.length) {
			return setEpisodes(nodes);
		}
		return setEpisodes(newEpisodes);
	};

	const findTranscript = num => nodes.find(item => item.num == num).transcript;

	const addTranscript = async track => {
		setModal(true);
		const transcript = findTranscript(String(track.num));
		const dom = await parseTranscript(transcript);
		setTranscript(dom.outerHTML);
	};

	const closeModal = () => {
		setModal(false);
		setTranscript(LOADING_TRANSCRIPT);
	};

	return (
		<SiteWrapper>
			<SiteHead />
			<TitleWrapper>
				<Title />
			</TitleWrapper>
			<MainColumn>
				<GithubCorner
					href="https://github.com/xetera/and.nowtheweather.com"
					bannerColor="black"
					target="_blank"
					ariaLabel="See the code on github"
					octoColor="white"
				/>
				<MediaContainer>
					<Description />
					<TranscriptModal
						content={transcript}
						open={modal}
						close={closeModal}
					/>
					<SearchBarWrapper>
						<SearchBar
							items={episodes}
							originalItems={nodes}
							filter={changeEpisodes}
						/>
					</SearchBarWrapper>
					<MediaWrapper>
						{episodes.map(data => (
							<Media
								{...data}
								key={data.episode}
								onTranscript={addTranscript}
							/>
						))}
					</MediaWrapper>
				</MediaContainer>
			</MainColumn>
			<Footer />
		</SiteWrapper>
	);
};

export const query = graphql`
  query Data {
    json: allDataJson {
      nodes {
        episode
        artist
        num
        url
        transcript
        song
      }
    }
  }
`;

export default Index;
