import * as React from "react";
import { textSize3, textSizeTitle } from "../style";
import styled, { css } from "styled-components";
import Typography from "@material-ui/core/Typography"

const eyeImage = "https://66.media.tumblr.com/f87ca6958f19b1380e830a3cf3c9a401/tumblr_mqt86daL6l1r6ptieo1_1280.gif";

const titleFont = css`
	font-family: "Nightvale", Arial, "sans-serif" !important;
`;

const Nightvale = styled(Typography)`
	color: white !important;
	display: inline !important;
	${titleFont}
	${textSizeTitle}
`;

const NightvaleSubtitle = styled(Typography)`
	color: white !important;
	${titleFont}
	${textSize3}
`;

const Eye = styled.img`
	max-height: 50px;
	top: 0;
	padding: 10px 0;
	opacity: .6;
`;

const TextWrapper = styled.div`
	width: 80%;
	align-self: center;
`;

const Centered = styled.span`
	display: inline-flex;
	flex-direction: column;
	justify-content: center;
`;

export const Title = () =>
	<TextWrapper>
		<Centered>
			<Nightvale align="right" className="nightvale" variant="h1">And now, the weather</Nightvale>
			<NightvaleSubtitle variant="h4" align="right">
				All previous meteorological news from Nightvale
			</NightvaleSubtitle>
		</Centered>
	</TextWrapper>;
