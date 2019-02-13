import * as React from "react";
import Typography from "@material-ui/core/es/Typography/Typography";
import Paper from "@material-ui/core/Paper";
import styled from "styled-components";
import { textSize2 } from "../style";

const DescriptionContainer = styled(Paper)`
	padding: 10px;
`;

const Text = styled(Typography)`
	color: #2f2f2f;
	${textSize2}
`;

const Section = styled.div`
	padding: 2rem 0;
`;

export const Description = () =>
	<Section>
	</Section>;
