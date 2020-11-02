import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import * as ROUTES from '../../constants/appRoutes';
import Pagnation from '../../components/Pagnation';

function Section1L4() {
  return (
    <IonPage>
      <PageTitle title={ROUTES.S1L4.title} />
      <IonContent>
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>What are Components?</strong>
          </h4>
          <hr />
          <p>
            They are the building blocks of any React applications. Even a
            single application consists of multiple components. Components are
            independent, reusable parts that can be individually processed.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/pic6.png'}
                alt='Add new event preview'
              />
              <figcaption> Fig: React Components</figcaption>
            </div>
          </p>
          <h4>Functional Components</h4>
          <p>
            Functional Components are stateless components because they don’t
            have any state of their own and only contain a render method. These
            components derive data from other components as props (properties).
          </p>

          <h4>Class Components</h4>
          <p>
            Also called stateful components, Class components can hold and
            manage their state and contain a separate render method to return
            JSX on the screen.
          </p>

          <h4>
            <strong>What is a State?</strong>
          </h4>
          <hr />
          <p>
            State is a built-in React object which contains data or information
            about the component. A state of a component can change over time
            re-rendering the component in the process. A component’s behavior or
            how it renders is determined by the change in state which occurs as
            a response to user action or system generated events.
          </p>
          <h4>
            <strong>What are Props?</strong>
          </h4>
          <hr />
          <p>
            Props are short form of properties which is a built-in object to
            store the value of tag’s attributes. They work similar to HTML
            attributes. Props provide a medium to pass data from one component
            to another same way as arguments are passed in a function.
          </p>
        </section>
        <Pagnation prev={ROUTES.S1L3.path} next={ROUTES.S1L5.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section1L4;
