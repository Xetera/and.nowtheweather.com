import * as React from "react";
import Modal from "@material-ui/core/es/Modal/Modal";
import styled from "styled-components";
import { LOADING_TRANSCRIPT } from "../utils";
import Close from "@material-ui/icons/Close"

const TranscriptWrapper = styled(Modal)`
	justify-content: center;
	display: flex;
	padding: 25px;
`;

const ModalWrapper = styled.div`
	display: flex;
	border-radius: 4px;
	flex-direction: column;
	width: 400px;
	@media(min-width: 767px) {
		width: 700px;
	}
	background-color: whitesmoke;
	height: auto;
	padding: 25px;
`;

const Credits = styled.h5`
	margin: 0;
	align-self: flex-end;
`;

const TranscriptContent = styled.div`
	overflow-y: scroll;
	margin: 10px 0;
	p {
		font-size: 18px;
		line-height: 1.42;
	}
`;

const CloseButton = styled(Close)`
  align-self: flex-end;
  cursor: pointer;
`;

const Flex = styled.div`
	display: flex;
	min-height: 20px;
	flex-direction: column;
	justify-content: space-between;
`;

export const TranscriptModal = ({ content, close, open }) => {
	return (
		<TranscriptWrapper open={open} onClose={close}>
			<ModalWrapper className="transcript">
				<Flex>
					<CloseButton onClick={close}/>
				</Flex>
				{content === LOADING_TRANSCRIPT ? <div>Transcript loading...</div>
					: <TranscriptContent dangerouslySetInnerHTML={{ __html: content }}/>}
				<Credits>
					Transcripts taken from <a target="_blank" href="https://cecilspeaks.tumblr.com/">Cecilspeaks</a>
				</Credits>
			</ModalWrapper>
		</TranscriptWrapper>
	);
};
