import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import * as ROUTES from '../../constants/appRoutes';
import Pagnation from '../../components/Pagnation';

function Section1L3() {
  return (
    <IonPage>
      <PageTitle title={ROUTES.S1L3.title} />
      <IonContent>
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>Features</strong>
          </h4>
          <hr />
          <p>
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/pic2.png'}
                alt='Add new event preview'
              />
            </div>
          </p>
          <h3>JSX – JavaScript Syntax Extension</h3>

          <p>
            JSX is a syntax extension used with React to outline the look of the
            user interface. The HTML structures are in the same file as the
            JavaScript code using JSX. The code is easy to understand and debug
            because it avoids the use of complex DOM structure.
          </p>

          <h3>Virtual DOM</h3>

          <p>
            Virtual DOM, a lightweight representation of “real” DOM, which is
            kept in the memory is easier to manipulate due to which is much
            faster than real DOM as nothing is drawn on the screen. Rather than
            updating all the objects, Virtual DOM only changes the object in
            real DOM when an object’s state changes.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/pic3.png'}
                alt='Add new event preview'
              />
              <figcaption>Fig: DOM of a Webpage</figcaption>
            </div>
          </p>
          <h4>How do Virtual DOM and React DOM interact?</h4>
          <p>
            Virtual DOM compares its previous state with current one and updates
            the objects in Real DOM and then gets updated. Since only the
            objects in real DOM are updated, it is much faster.
          </p>

          <h3>Performance</h3>

          <p>
            Use of VDOM makes a web application much faster than the ones that
            don’t use it because rather than having a complex user interface,
            React divides a single interface into individual components.
            Multiple users can thus work on the components simultaneously thus
            speeding up the development time.
          </p>

          <h3>One-way data binding</h3>
          <p>
            One way data binding in React makes everything modular and fast due
            to which it is easier to identify the when and where the error
            occurs in the code which provides better control of the application
            to the developers.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/pic4.png'}
                alt='Add new event preview'
              />
            </div>
          </p>

          <h3>Extensions</h3>
          <p>
            React offers many extensions which provide architecture support for
            the application. React offers the Flux and Redux architecture in web
            application development and also offers React Native which is useful
            to create a cross-compatible mobile application.
          </p>
          <h3>Debugging</h3>
          <p>
            Debugging is easier for React applications due to larger developer
            community. Facebook has even offered a browser extension which makes
            debugging faster and easier.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/pic5.png'}
                alt='Add new event preview'
              />
            </div>
          </p>
        </section>
        <Pagnation prev={ROUTES.S1L2.path} next={ROUTES.S1L4.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section1L3;
