import * as React from "react";
import styled from "styled-components";
import { textSize1 } from "../style";

const FooterPage = styled.footer`
	height: 150px;
	margin: auto 0 0 0;
	display: flex;
	justify-content: center;
	background: linear-gradient(135deg, #932c8f 0%,#651368 100%);
	padding: 20px 20px 20px 20px;
	//--webkit-clip-path: polygon(0 0, 100% 0, 100% 61%, 0% 100%);
  //clip-path: polygon(0 0, 100% 19%, 100% 100%, 0% 100%);
`;

const FooterText = styled.p`
	margin: 0;
	color: ghostwhite;
	align-self: center;
	${textSize1}
`;

export const Footer = () =>
	<FooterPage>
		<FooterText className="nightvale">
      Goodnight Nightvale, goodnight...
		</FooterText>
	</FooterPage>;
