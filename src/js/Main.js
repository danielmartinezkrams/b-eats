import React, { Component } from 'react';
import '../style/App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import PageOne from './pageOne';
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import AcceptOrder from "./AcceptOrder"

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoggedIn: false};
        this.handler = this.handler.bind(this)
    }

    handler(x, y) {
        this.setState({
            isLoggedIn: x,
            info: y
        })
    }

    render(){
        return(
            <Switch>
                <div className="content">
                    <Route exact path="/" render={() => <Home isLoggedIn={this.state.isLoggedIn} info={this.state.info}/>}/>
                    <Route path="/pageOne" render={() => <PageOne isLoggedIn={this.state.isLoggedIn} info={this.state.info}/>}/>
                    <Route path="/login" render={() => <Login isLoggedIn={this.state.isLoggedIn} function={this.handler} info={this.state.info}/>}/>
                    <Route path="/createAccount" render={() => <CreateAccount isLoggedIn={this.state.isLoggedIn} function={this.handler} info={this.state.info}/>}/>
                    <Route path="/makedelivery" render={() => <AcceptOrder isLoggedIn={this.state.isLoggedIn} function={this.handler} info={this.state.info}/>}/>
                </div>
            </Switch>
        )
    }
}

//render={() => <pageTwo isLoggedIn={this.state.isLoggedIn} info={this.state.info}/>}

export default Main;