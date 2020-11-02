import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../components/PageTitle';

import Pagnation from '../components/Pagnation';

function TableOfContents() {
  return (
    <IonPage>
      <IonContent>
        <PageTitle title='Table of Contents' />
        <Pagnation prev={'/what-is-react'} next={'flashcard-2'}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default TableOfContents;
