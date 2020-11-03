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
            Components are the building blocks of any React applications and
            every application contains multiple independent and reusable
            components on which multiple developers can work simultaneously.
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
            These are called stateless components as they don’t have any state
            of their own and only contain a render method. These components
            derive data as props from other components.
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
            It is a built-in React object which holds the information about a
            component. The concept of state is very important as any change in a
            state occurred due to a response to any user action or any system
            generated events determines a component’s behavior or how it is
            rendered.
          </p>
          <h4>
            <strong>What are Props?</strong>
          </h4>
          <hr />
          <p>
            Props, aka properties, are a built-in object which holds the value
            of tag’s attributes just like HTML attributes. These props provide a
            medium to pass data from one component to another same way as
            arguments are passed in a function.
          </p>
        </section>
        <Pagnation prev={ROUTES.S1L3.path} next={ROUTES.S1L5.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section1L4;
