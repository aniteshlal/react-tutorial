import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IonApp, IonPage, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import Menu from './components/Menu';
import Section1L1 from './routes/section1/Section1L1';
import Section1L2 from './routes/section1/Section1L2';
import Section1L3 from './routes/section1/Section1L3';
import Section1L4 from './routes/section1/Section1L4';
import Section1L5 from './routes/section1/Section1L5';
import Section1L6 from './routes/section1/Section1L6';
import Lesson1 from './routes/flashcard_app/Lesson1';
import Lesson3 from './routes/flashcard_app/Lesson3';
import Lesson2 from './routes/flashcard_app/Lesson2';
import Section3L1 from './routes/section3/Section3L1';
import Section3L2 from './routes/section3/Section3L2';

import * as ROUTES from './constants/appRoutes';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <Menu />
          <IonPage id='main'>
            <Switch>
              <Route exact path={ROUTES.S1L1.path} component={Section1L1} />
              <Route
                exact
                path='/'
                render={() => <Redirect to={ROUTES.S1L1.path} />}
              />
              <Route exact path={ROUTES.S1L1.path} component={Section1L1} />
              <Route exact path={ROUTES.S1L2.path} component={Section1L2} />
              <Route exact path={ROUTES.S1L3.path} component={Section1L3} />
              <Route exact path={ROUTES.S1L4.path} component={Section1L4} />
              <Route exact path={ROUTES.S1L5.path} component={Section1L5} />
              <Route exact path={ROUTES.S1L6.path} component={Section1L6} />

              <Route exact path={ROUTES.Lesson1.path} component={Lesson1} />
              <Route exact path={ROUTES.Lesson2.path} component={Lesson2} />
              <Route exact path={ROUTES.Lesson3.path} component={Lesson3} />

              <Route exact path={ROUTES.S3L1.path} component={Section3L1} />
              <Route exact path={ROUTES.S3L2.path} component={Section3L2} />
            </Switch>
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
