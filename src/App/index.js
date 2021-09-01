import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader'
import Aux from "../hoc/_Aux";
import ScrollToTop from './layout/ScrollToTop';
import routes from "../route";


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

const TeacherLayout = Loadable({
    loader: () => import('./layout/TeacherLayout'),
    loading: Loader
});

const StaffLayout = Loadable({
    loader: () => import('./layout/StaffLayout'),
    loading: Loader
});

const StudentLayout = Loadable({
    loader: () => import('./layout/StudentLayout'),
    loading: Loader
});

const ParentLayout = Loadable({
    loader: () => import('./layout/ParentLayout'),
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
                            <Route path="/staff" component={StaffLayout} />
                            <Route path="/school" component={SchoolLayout} />
                            <Route path="/teacher" component={TeacherLayout} />
                            <Route path="/student" component={StudentLayout} />
                            <Route path="/parent" component={ParentLayout} />
                        </Switch>
                    </Suspense>
                </ScrollToTop>
            </Aux>
        );
    }
}

export default App;
