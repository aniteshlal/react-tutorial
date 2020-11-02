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
        <section style={{ padding: '10px' }}></section>
        <Pagnation prev={ROUTES.S1L1.path} next={ROUTES.S1L3.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section1L2;
