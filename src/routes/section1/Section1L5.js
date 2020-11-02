import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import * as ROUTES from '../../constants/appRoutes';
import Pagnation from '../../components/Pagnation';

function Section1L5() {
  return (
    <IonPage>
      <PageTitle title={ROUTES.S1L5.title} />
      <IonContent>
        <section style={{ padding: '10px' }}></section>
        <Pagnation prev={ROUTES.S1L4.path} next={ROUTES.S1L6.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section1L5;
