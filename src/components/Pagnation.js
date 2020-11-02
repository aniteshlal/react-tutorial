import React from 'react';

import { IonButton, IonIcon } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';

function Pagnation({ prev, next }) {
  return (
    <div className='text-center'>
      <IonButton routerLink={prev}>
        <IonIcon slot='start' icon={arrowBack} />
        Previous
      </IonButton>

      <IonButton routerLink={next}>
        Next
        <IonIcon slot='end' icon={arrowForward} />
      </IonButton>
    </div>
  );
}

export default Pagnation;
