import * as React from "react";
import { Head} from "react-static";
import favicon from "../../public/nightvale.jpg";
import ReactGA from "react-ga";

export const SiteHead = () => {
	ReactGA.initialize("UA-133545986-2");
	ReactGA.pageview(`${window.location.pathname}${window.location.search}`);

	return (
		<Head>
			<html lang="en"/>
			<title>And now, the weather</title>
			<link rel="icon" href={favicon}/>
			<meta name="description" content="A collection of all songs in Welcome to Nightvale"/>
			<meta name="theme-color" content="#9a3b8f"/>
			<meta property="og:type" content="website"/>
			<meta property="og:title" content="And now, the weather!"/>
			<meta property="og:description" content="A collection of all songs in Welcome to Nightvale"/>
			<meta property="og:type" content="website"/>
			<meta property="og:url" content="https://and.nowtheweather.com"/>
			<meta property="og:image" content={favicon}/>
		</Head>
	);
};
