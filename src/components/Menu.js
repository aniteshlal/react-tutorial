import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import * as ROUTES from '../constants/appRoutes';

const routes = {
  section1: [
    ROUTES.HOME,
    ROUTES.WHY_REACT,
    ROUTES.FEATURES,
    ROUTES.COMPONENTS_STATES_PROPS,
    ROUTES.REACT_PREREQUISITES,
    ROUTES.REACT_LIFECYCLES,
  ],
  section2: [ROUTES.Lesson1, ROUTES.Lesson2, ROUTES.Lesson3],
};
function Menu() {
  function renderlistItems(list) {
    return list
      .filter((route) => !!route.path)
      .map((p) => (
        <IonMenuToggle key={p.title} auto-hide='false'>
          <IonItem href={p.path}>
            <IonLabel>{p.title}</IonLabel>
          </IonItem>
        </IonMenuToggle>
      ));
  }

  return (
    <IonMenu contentId='main' scrollY='true'>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <img
              src={process.env.PUBLIC_URL + '/logo192.png'}
              alt=''
              style={{
                height: 30,
                display: 'inline-block',
                verticalAlign: 'top',
              }}
            />
            <div style={{ display: 'inline' }}> React Tutorial</div>
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent class='outer-content'>
        <IonListHeader>Introduction</IonListHeader>
        <IonList>{renderlistItems(routes.section1)}</IonList>
        <IonListHeader>Flashcard App Tutorial</IonListHeader>
        <IonList>{renderlistItems(routes.section2)}</IonList>
      </IonContent>
    </IonMenu>
  );
}

export default Menu;
