import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import Pagnation from '../../components/Pagnation';

function Lesson2() {
  return (
    <IonPage>
      <PageTitle title='3. Connecting to API' />
      <IonContent>
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>Step 3: Creating the header</strong>
          </h4>
          <hr />
          <p>
            React components let you divide the UI into a completly different
            and isolated piece of code that is reusable. We will create the
            following components for our appilcation
          </p>
        </section>
        <Pagnation prev={'/flashcard-2'} next={'/flashcard-4'}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Lesson2;
