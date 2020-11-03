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
          <ul>
            <li>
              <h3>Easy to create dynamic applications</h3>
              <p>
                Dynamic applications can be easily created using React as it
                requires less coding and also offers more functionalities
              </p>
            </li>

            <li>
              <h3>Provides improved performance</h3>

              <p>
                React offers much improved performance compared to others as it
                uses Virtual DOM. Use of virtual DOM makes developing web
                application quicker because rather than updating all of the
                components it just compares the component’s previous states and
                updates the items that are only in Real DOM.
              </p>
            </li>

            <li>
              <h3>Use of reusable components</h3>
              <p>
                One of the most important features of React is the use of
                Components. They are the building block of any React
                application. Any React application consists of multiple
                components and each component has its own login and controls.
                These components are reused in the web application due to which
                the application’s development time is reduced dramatically.
              </p>
            </li>
            <li>
              <h3>Unidirectional data flow</h3>

              <p>
                React follows a unidirectional data flow by allowing the users
                to nest child components within parent components. And that the
                data flows in a unidirectional way it becomes much easier to
                debug the errors and to identify the location of any problem
                that occurs in an application.
              </p>
            </li>
            <li>
              <h3>Small Learning Curve</h3>

              <p>
                React is an easy language to learn. It consists of basic HTML
                and JavaScript concepts plus some additional benefits.
              </p>
            </li>
            <li>
              <h3>Used for developing both web and mobile application</h3>

              <p>
                React is an extremely useful tools as it is not only used to
                develop web application but is also extremely handy for
                developing mobile applications. React Native, which is derived
                from React itself, is used for creating beautiful mobile
                application.
              </p>
            </li>
            <li>
              <h3>Tools for easy debugging</h3>

              <p>
                A Chrome extension has been released by Facebook which can be
                used to easily and quickly debug React applications.
              </p>
            </li>
          </ul>
        </section>
        <Pagnation prev={ROUTES.S1L1.path} next={ROUTES.S1L3.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section1L2;
