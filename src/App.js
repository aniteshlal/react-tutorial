import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { IonApp, IonPage, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';

import Menu from './components/Menu';
import Home from './routes/Home';
import TableOfContent from './routes/TableOfContents';
import WhatIsReact from './routes/WhatIsReact';
import Lesson1 from './routes/flashcard_app/Lesson1';
import Lesson3 from './routes/flashcard_app/Lesson3';
import Lesson2 from './routes/flashcard_app/Lesson2';

import * as ROUTES from './constants/appRoutes';

function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <Menu />
          <IonPage id='main'>
            <Switch>
              <Route exact path={ROUTES.HOME.path} component={Home} />
              <Route
                exact
                path='/'
                render={() => <Redirect to={ROUTES.HOME.path} />}
              />
              <Route
                exact
                path={'/table-of-contents'}
                component={TableOfContent}
              />
              <Route exact path={'/what-is-react'} component={WhatIsReact} />
              <Route exact path={'/flashcard-1'} component={Lesson1} />
              <Route exact path={'/flashcard-2'} component={Lesson2} />
              <Route exact path={'/flashcard-3'} component={Lesson3} />
            </Switch>
          </IonPage>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
