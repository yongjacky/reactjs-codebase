import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Default from '../../views/Default'
import Sample from '../../views/Sample'

export default function Home(){
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/sample" component={Sample} />
                    <Route component={Default} />
                </Switch>    
            </div> 
        </Router>  
    )
}