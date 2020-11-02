import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import * as ROUTES from '../../constants/appRoutes';
import Pagnation from '../../components/Pagnation';

function Section3L2() {
  return (
    <IonPage>
      <PageTitle title={ROUTES.S3L2.title} />
      <IonContent>
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>Deployment Tutorial</strong>
          </h4>
          <hr />
          <p>
            Deploying the app was fairly straight forward, the first step is
            creating a Firebase project using the online console. The console
            will guide you through the creation process, it is a fairly easy
            process.
          </p>
          <p>
            Once the app is created there are four steps that you need to follow
            to add firebase to your web app.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/steps.png'}
                alt='Add new event preview'
                style={{ width: '40%' }}
              />
            </div>
          </p>
        </section>
        <Pagnation prev={ROUTES.S3L1.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section3L2;
