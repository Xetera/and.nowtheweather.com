import * as React from "react";
import Paper from "@material-ui/core/es/Paper/Paper";
import InputBase from "@material-ui/core/es/InputBase/InputBase";
import styled from "styled-components";
import { textSize3 } from "../style";
import { random } from "../utils";
import Icon from "@material-ui/icons/Search"
import Fuse from "fuse.js";

const placeholders = [
	"Acknowledge angels",
	"All hail the glow cloud",
	"Destroy Desert Bluffs",
	"Hide from the librarians",
	"Enter the dog park"
];

const lightGray = "#494b4b";

const SearchIcon = styled(Icon)`
	margin-right: 5px;
	color: ${lightGray};
`;

const SearchContainer = styled(Paper)`
	display: flex;
	align-items: center;
	padding: 10px;
`;

const SearchBarText = styled(InputBase)`
	text-overflow: ellipsis;
	width: 100%;
`;

const SearchCount = styled.div`
	min-width: 64px;
	color: ${lightGray};
	flex-shrink: 0;
	margin-left: 5px;
	span {
		margin: 0;
		${textSize3}
	}
	input {
	padding: 0
	}
`;

export const SearchBar = ({ items, filter }) => {
	const searchOptions = {
		shouldSort: true,
		threshold: .6,
		keys: ["artist", "episode", "num"]
	};
	const fuse = new Fuse(items, searchOptions);

	const generateRandomPlaceholder = () => random(placeholders);
	const [currentPlaceholder, setPlaceholder] = React.useState(generateRandomPlaceholder());
	const setNewPlaceholder = () => setPlaceholder(generateRandomPlaceholder());

	const handleChange = ({ target }) => {
		const filtered = fuse.search(target.value);
    filter(filtered);
    if (!target.value) {
			setNewPlaceholder();
		}
	};

	return (
		<SearchContainer elevation={2}>
			<SearchIcon/>
			<SearchBarText placeholder={currentPlaceholder} autoFocus onChange={handleChange}/>
			<SearchCount>
			<span>
				{items.length} results
			</span>
			</SearchCount>
		</SearchContainer>
	);
};
