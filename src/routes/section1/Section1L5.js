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
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>Concepts to familiarize with before learning React</strong>
          </h4>
          <hr />
          <ul>
            <li>
              Programing concepts like functions, objects, arrays and classes
            </li>
            <li>Concept of JavaScript</li>
            <li>Familiarity with HTML {`&`} CSS</li>
            <li>Understanding of DOM</li>
            <li>Familiarity with ES6 syntax and features</li>
            <li>Node.js and npm installation</li>
          </ul>
        </section>
        <Pagnation prev={ROUTES.S1L4.path} next={ROUTES.S1L6.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section1L5;
