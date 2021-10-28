import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Home from './component/Home/Home'
import Page from './component/moviePage/Page'
const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route exact path="/Page" component={Page} />
        </BrowserRouter>
    )
}

export default App