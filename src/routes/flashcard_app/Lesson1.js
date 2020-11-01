import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import * as ROUTES from '../../constants/appRoutes';

function Lesson1() {
  return (
    <IonPage>
      <PageTitle title={ROUTES.Lesson1.title} />
      <IonContent>
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>What are we going to be making?</strong>
          </h4>

          <p>
            We will be making a flashcard React web application that will
            connect to a public API called{' '}
            <a href='https://opentdb.com/'>Open Trivia DB.</a>{' '}
            <p>The following GIF will demonstrate the app we will be making.</p>
          </p>
          <div className='text-center'>
            {' '}
            <img
              className='img-fluid'
              src={process.env.PUBLIC_URL + '/App_Demo.gif'}
              alt='Add new event preview'
            />
          </div>

          <h4>
            <strong>Step 1: Create react app</strong>
          </h4>
          <p>
            Create React App is an officially supported way to create
            single-page React applications.
          </p>
          <p>
            {' '}
            To get started on a React Application, run the following commond.
          </p>
          <pre>
            <code>npx create-react-app flashcard-app</code>
          </pre>
          <p>
            This will create the react application with the file structure
            looking like the following.
          </p>
          <div className='text-center'>
            <img
              className='img-fluid'
              src={process.env.PUBLIC_URL + '/file_struct.png'}
              alt='Add new event preview'
            />
          </div>
          <h4>
            <strong>Step 2: Run the application locally</strong>
          </h4>
          <p>
            After your the create-react-app is done. Run the following commands
            to install your dependencies.(<strong>Note:</strong> you can use
            either yarn or npm package manager.{' '}
            <a href='https://medium.com/javascript-in-plain-english/npm-vs-yarn-choosing-the-right-package-manager-a5f04256a93f'>
              {' '}
              NPM vs Yarn
            </a>
            )
            <pre>
              <code>npm install</code>
            </pre>
            After this is done installing. <br></br>
            Run the following command to start your application
            <pre>
              <code>npm start</code>
            </pre>
            This opens up your default browser and shows the following
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/default_app.gif'}
                alt='Add new event preview'
              />
            </div>
          </p>

          <h4>
            <strong>Step 3:Cleaning up boilerplate code</strong>
          </h4>
          <p>
            Remove all the files that are highlighted in orange in the above
            image of the file structure.
          </p>
          <p>
            {' '}
            Also remove the following code from that is highlighed in{' '}
            <i>
              <u>index.js</u>
            </i>{' '}
            and{' '}
            <i>
              <u>App.js</u>
            </i>
            <br></br>
            In the{' '}
            <i>
              <u>App.js</u>
            </i>
            , add the following in the return statement{' '}
            <pre>
              <code>{'<div>Hello World</div>'}</code>
            </pre>
            <div className='image-container'>
              <span className='image-column'>
                <img
                  className='img-fluid'
                  src={process.env.PUBLIC_URL + '/clean_up_index.png'}
                  alt='Add new event preview'
                />{' '}
              </span>
              <span className='image-column'>
                <img
                  className='img-fluid'
                  src={process.env.PUBLIC_URL + '/clean_up_app.png'}
                  alt='Add new event preview'
                />
              </span>
            </div>
          </p>
          <p>
            {' '}
            When you go back to your browser, you should just see the text
            'Hello World'
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/hello_world.png'}
                alt='Add new event preview'
              />
            </div>
          </p>
        </section>
      </IonContent>
    </IonPage>
  );
}

export default Lesson1;
