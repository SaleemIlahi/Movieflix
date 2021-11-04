import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './component/js/Home'
import Page from './component/js/Page'
import Youtube from './component/js/Youtube'
const App = () => {
    return (
        <main>
            <BrowserRouter>
                <Route exact path="/" component={Home} />
                <Route exact path="/Page" component={Page} />
                <Route exact path="/Youtube"component={Youtube} />
            </BrowserRouter>
        </main>
    )
}

export default App