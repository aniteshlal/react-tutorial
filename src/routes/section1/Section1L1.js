import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import * as ROUTES from '../../constants/appRoutes';
import Pagnation from '../../components/Pagnation';

function Section1L1() {
  return (
    <IonPage>
      <PageTitle title={ROUTES.S1L1.title} />
      <IonContent>
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>What is React?</strong>
          </h4>
          <hr />
          <p>
            <b>React</b>, created by Facebook, is a declarative, efficient and
            flexible JavaScript library used by the developers to an interactive
            user interface (UI) on the front end. React is basically the view
            layer of the Model-View-Controller Architecture which means React
            allows the users to create components which are the re-usable HTML
            elements that are used to build the user interfaces. React is used
            to developing both web and mobile applications.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/pic1.png'}
                alt='Add new event preview'
              />
            </div>
          </p>
        </section>
        <Pagnation next={ROUTES.S1L2.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section1L1;
