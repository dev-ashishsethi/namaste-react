import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
const Parent = () => (
	<h1>
		<p>avsdjasdjkagsd</p>
		this is a parent
	</h1>
)

const HeadingComponent = () => (
	<div>
		<Parent />
		<p id='heading'>this is a paragraph in a div</p>
		<h1>this is a heading in a div alongside a paragraph</h1>
	</div>
)
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<HeadingComponent />)
