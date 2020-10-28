import React from 'react';
import { IonHeader, IonToolbar, IonTitle } from '@ionic/react';
function PageTitle({ title }) {
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle class='ion-text-center'>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
}

export default PageTitle;
