import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../components/PageTitle';

function WhatIsReact() {
  return (
    <IonPage>
      <IonContent>
        <PageTitle title='What is React?' />
      </IonContent>
    </IonPage>
  );
}

export default WhatIsReact;
