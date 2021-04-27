import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";
//import PrivateRoute from './layout/AdminLayout/PrivateRoute'

const AdminLayout = Loadable({
    loader: () => import('./layout/AdminLayout'),
    loading: Loader
});
const DistrictLayout = Loadable({
    loader: () => import('./layout/DistrictLayout'),
    loading: Loader
});

const SchoolLayout = Loadable({
    loader: () => import('./layout/SchoolLayout'),
    loading: Loader
});


class App extends Component {
    render() {
        const menu = routes.map((route, index) => {
            return (route.component) ? (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                      <route.component {...props} />
                    )} 
                />
          ) : (null);
        });

        return (
            <Aux>
                <ScrollToTop>
                    <Suspense fallback={<Loader/>}>
                        <Switch>
                            {menu}
                            <Route path="/admin" component={AdminLayout} />
                            <Route path="/district" component={DistrictLayout} />
                            <Route path="/school" component={SchoolLayout} />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}

export default App;
