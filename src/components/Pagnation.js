import React from 'react';

import { IonButton, IonIcon } from '@ionic/react';
import { arrowBack, arrowForward } from 'ionicons/icons';

function Pagnation({ prev, next }) {
  return (
    <>
      <hr />
      <div className='text-center'>
        {prev ? (
          <IonButton routerLink={prev}>
            <IonIcon slot='start' icon={arrowBack} />
            Previous
          </IonButton>
        ) : (
          ''
        )}
        {next ? (
          <IonButton routerLink={next}>
            Next
            <IonIcon slot='end' icon={arrowForward} />
          </IonButton>
        ) : (
          ''
        )}
      </div>
    </>
  );
}

export default Pagnation;
