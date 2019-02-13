import React from 'react'
import { Root, Routes } from 'react-static'

import "@material-ui/core"
import "./global.css"

export default () =>
	<Root>
		<div className="content">
			<Routes/>
		</div>
	</Root>
