import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../components/PageTitle';

function TableOfContents() {
  return (
    <IonPage>
      <IonContent>
        <PageTitle title='Table of Contents' />
      </IonContent>
    </IonPage>
  );
}

export default TableOfContents;
