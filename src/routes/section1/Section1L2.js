import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import * as ROUTES from '../../constants/appRoutes';
import Pagnation from '../../components/Pagnation';

function Section1L2() {
  return (
    <IonPage>
      <PageTitle title={ROUTES.S1L2.title} />
      <IonContent>
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>
              React has gained immense popularity and these are the reasons why:
            </strong>
          </h4>
          <hr />
          <h3>Easy to create dynamic applications</h3>

          <p>
            It is easy to create dynamic web application using React as it
            requires less coding and offering more functionality.
          </p>
          <h3>Provides improved performance</h3>

          <p>
            React provides improved performance with the use of virtual DOM
            which makes creating web applications much faster. Instead of
            updating all of the components virtual DOM just compares the
            component’s previous states and updates the items that are only in
            Real DOM.{' '}
          </p>
          <h3>Use of reusable components</h3>

          <p>
            Components are the building block of any React application. Even a
            single app usually consists of multiple components which have their
            own login and controls. These components can be reused throughout
            the application dramatically reducing application’s development
            time.{' '}
          </p>
          <h3>Unidirectional data flow</h3>

          <p>
            React follows a unidirectional data flow which means when a React
            app is developed, the developers usually nest child components
            within parent components. And since data flows in a single
            direction, debugging error becomes easier and identify the location
            of any problem that occurs in an application.
          </p>
          <h3>Small Learning Curve</h3>

          <p>
            React is an easy language to learn which combines basic HTML and
            JavaScript concepts with some additional benefits added.{' '}
          </p>
          <h3>Used for developing both web and mobile application</h3>

          <p>
            React is useful not just for developing web applications but is
            equally handy for developing mobile applications as well. React
            Native, derived from React itself, is used for creating beautiful
            mobile application.
          </p>
          <h3>Tools for easy debugging</h3>

          <p>
            A Chrome extension has been released by Facebook which can be used
            to easily and quickly debug React applications.{' '}
          </p>
        </section>
        <Pagnation prev={ROUTES.S1L1.path} next={ROUTES.S1L3.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section1L2;
