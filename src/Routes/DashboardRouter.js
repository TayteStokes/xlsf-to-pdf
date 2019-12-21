import React from "react";

// react-router-dom packages
import { Switch, Route } from "react-router-dom";

// Components
import Home from '../Components/Home';
import Documents from '../Components/Documents';
import Upload from '../Components/Upload';

// Router
export default (
    <Switch>
        <Route exact path="/dashboard/home" component={Home} />
        <Route exact path="/dashboard/documents" component={Documents} />
        <Route exact path="/dashboard/upload" component={Upload} />
    </Switch>
);