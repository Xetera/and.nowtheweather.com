import * as React from "react";
import { Head} from "react-static";
import favicon from "../../public/nightvale.jpg";

export const SiteHead = () =>
	<Head>
		<html lang="en"/>
		<title>And now, the weather</title>
		<link rel="icon" href={favicon}/>
		<meta name="description" content="A collection of all songs in Welcome to Nightvale"/>
		<meta property="og:type" content="website"/>
		<meta property="og:title" content="And now, the weather!"/>
		<meta property="og:description" content="A collection of all songs in Welcome to Nightvale"/>
		<meta property="og:type" content="website"/>
		<meta property="og:url" content="https://and.nowtheweather.com"/>
		<meta property="og:image" content={favicon}/>
	</Head>;
