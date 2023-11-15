import React from 'react'
import ReactDOM from 'react-dom'

const parent = React.createElement('div', {}, [
	React.createElement('div', {}, [
		React.createElement('h1', {}, 'this is a h1 tag'),
		React.createElement('h2', {}, 'this is a h2 tag'),
	]),
	React.createElement('div', {}, [
		React.createElement('h1', {}, 'this is a h1 tag'),
		React.createElement('h2', {}, 'this is a h2 tag'),
	]),
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)
