import * as React from "react";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { textSize3 } from "../style";

const DescriptionContainer = styled(Paper)`
	padding: 10px;
`;

const Text = styled(Typography)`
	color: whitesmoke;
	${textSize3}
`;

const Section = styled.div`
	padding: 1rem 0;
`;

export const Description = () =>
	<Section>
		<Text variant="p">Get the latest meteorological news from Nightvale!</Text>
	</Section>;
