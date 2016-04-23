import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from 'components/Home'
import ProfileShow from 'components/ProfileShow'
import PostShow from 'components/PostShow'
import Navbar from 'components/Navbar'

import 'styles/reset'

const App = props => {
  return (
    <div>
      <Navbar />
      { props.children }
    </div>
  )
}

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="profile" component={ProfileShow} />
			<Route path="post" component={PostShow} />
		</Route>
	</Router>, document.getElementById('root'))
