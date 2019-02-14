import * as React from "react";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { textSize2 } from "../style";
import icon from "../../public/nightvale.jpg"

const DescriptionContainer = styled(Paper)`
	padding: 10px;
`;

const Text = styled(Typography)`
	color: #565656 !important;
	${textSize2}
`;

const Section = styled.div`
	padding: 2rem 0;
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

export const Description = () =>
	<Section>
		<Text>
			A friendly desert community where the sun is hot, the moon is beautiful,
			and mysterious lights pass overhead while we all pretend to sleep
		</Text>
	</Section>;
