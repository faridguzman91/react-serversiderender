import React, { Component } from "react";
import styled, { createGlobalStyle } from 'styled-components';
//importeer browserrouter
import { Route, Switch } from 'react-router-dom';
import Header from '../components/header/header'
import Feed from './feed'
//import Question
import Question from './question'

const GlobalStyle = createGlobalStyle `
body {
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
`;

const AppWrapper = styled.div`
text-align: center;
`;

class App extends Component {
    render()  {
        return (
            <>
            <GlobalStyle />
            <AppWrapper>
                <Header />
                <Switch>
                 <Route exact path='/' component={Feed} />
                 
                 <Route path='/questions/:id' component={Question} />
                 <Route path='/questions' component={Feed} />
                </Switch>
                   
            </AppWrapper>
            </>
        )
    }
}

export default App;
