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
            JSX is a syntax extension to JavaScript which is used with React the
            look of the user interface. With JSX, HTML structures can be written
            in the same file which contains JavaScript code. Since the usage of
            complex JavaScript DOM structures is avoided, the code becomes much
            easier to understand and debug.
          </p>

          <h3>Virtual DOM</h3>

          <p>
            Virtual DOM is a lightweight representation of “real” DOM which is
            kept in memory by React. Manipulation of Virtual DOM is much faster
            than real DOM because nothing is drawn on the screen. When an
            object’s state changes, virtual DOM changes only that object in real
            DOM rather than updating all the objects.
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
            During the state change of an object in a React application, virtual
            DOM gets updated. Virtual DOM then compares its previous state and
            updates only the objects in Real DOM and not all of the objects.
            This makes things much faster since because it does not have to
            update every object even if only a single object changes in the web
            application.
          </p>

          <h3>Performance</h3>

          <p>
            With the use of VDOM, the web applications run much faster than the
            ones developed with alternate front-end frameworks. Instead of
            having a complex user interface, React divides a single interface
            into individual components which allows multiple users to
            simultaneously work on each component and thus, speeding up the
            development time.
          </p>

          <h3>One-way data binding</h3>
          <p>
            The one way binding of React keeps everything modular and fast.
            There is a unidirectional data flow in React meaning when a React
            app is developed, the child components are nested within parent
            components. This makes it easier to identify when and where the
            error occurs thus giving the developers better control of the whole
            web application.
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
            React not only provides simple UI design but also has many
            extensions which offer complete application architecture support. It
            provides server-side rendering which means it renders a normal
            client side only web application on the server and sends a fully
            rendered page to the client. React extensively employs Flux and
            Redux in web application development. And finally, there is React
            native, which is used to create a cross-compatible mobile
            applications.
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
