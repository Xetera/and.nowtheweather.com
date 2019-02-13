import * as React from "react";
import Paper from "@material-ui/core/es/Paper/Paper";
import InputBase from "@material-ui/core/es/InputBase/InputBase";
import styled from "styled-components";
import { responsiveText, textSize3 } from "../style";
import Typography from "@material-ui/core/es/Typography/Typography";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
const placeholders = [
	"Acknowledge angels",
	"All hail the glow cloud",
	"Destroy Desert Bluffs"
];

const SearchContainer = styled(Paper)`
	padding: 10px;
	display: flex;
	justify-content: space-between;
`;

const SearchBarText = styled(InputBase)`
	text-overflow: ellipsis;
	width: 60%;
	${textSize3}
`;

const SearchCount = styled.div`
	display: flex;
	min-width: 64px;
	justify-content: center;
	align-items: center;
	color: grey;
	span {
		margin: 0;
		${textSize3}
	}
	input {
	padding: 0
	}
`;

export const SearchBar = ({ results }) =>
	<SearchContainer elevation={31}>
		<SearchBarText placeholder="Acknowledge angels"/>
		<SearchCount>
			<span>
				{results} results
			</span>
		</SearchCount>
	</SearchContainer>;
