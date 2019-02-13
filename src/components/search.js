import * as React from "react";
import Paper from "@material-ui/core/es/Paper/Paper";
import InputBase from "@material-ui/core/es/InputBase/InputBase";
import styled from "styled-components";
import { textSize3 } from "../style";
import { random } from "../utils";
import Icon from "@material-ui/icons/Search"

const placeholders = [
	"Acknowledge angels",
	"All hail the glow cloud",
	"Destroy Desert Bluffs"
];

const SearchIcon = styled(Icon)`
	margin-right: 5px;
	color: #494b4b;
`;

const SearchContainer = styled(Paper)`
	display: flex;
	align-items: center;
	padding: 10px;
`;

const SearchBarText = styled(InputBase)`
	text-overflow: ellipsis;
	width: 100%;
	${textSize3}
`;

const SearchCount = styled.div`
	min-width: 64px;
	color: grey;
	flex-shrink: 0;
	span {
		margin: 0;
		${textSize3}
	}
	input {
	padding: 0
	}
`;

export const SearchBar = ({ results }) =>
	<SearchContainer elevation={2}>
		<SearchIcon/>
		<SearchBarText placeholder={random(placeholders)}/>
		<SearchCount>
			<span>
				{results} results
			</span>
		</SearchCount>
	</SearchContainer>;
