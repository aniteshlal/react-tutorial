import React from 'react';
import { IonButton, IonContent, IonIcon, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import * as ROUTES from '../../constants/appRoutes';
import Pagnation from '../../components/Pagnation';
import { star } from 'ionicons/icons';

function Section3L2() {
  return (
    <IonPage>
      <PageTitle title={ROUTES.S3L2.title} />
      <IonContent>
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>Deployment Tutorial</strong>
          </h4>
          <hr />
          <p>
            Deploying the app was fairly straight forward, the first step is
            creating a Firebase project using the online console. The console
            will guide you through the creation process, it is a fairly easy
            process.
          </p>
          <p>
            Once the app is created there are four steps that you need to follow
            to add firebase to your web app.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/steps.png'}
                alt='Add new event preview'
                style={{ width: '40%' }}
              />
            </div>
          </p>

          <h4>
            <strong>Step 1: Register App</strong>
          </h4>
          <hr />
          <p>
            Registering the app, means that you provide your app a unique
            Identifier, ID, that you will need to use inside your react project
            for deployment later on.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/register_app.png'}
                alt='Add new event preview'
                style={{ width: '50%' }}
              />
            </div>
          </p>

          <h4>
            <strong>Step 2: Add Firebase SDK</strong>
          </h4>
          <hr />
          <p>
            Adding the SDK is as easy as adding a snippet of code to your index
            file, that code snippet is responsible for specifying the SDK
            dependencies that your app will use as well as adding the Firebase
            initializer in case you are using the Firebase CLI to deploy.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/add_sdk.png'}
                alt='Add new event preview'
                style={{ width: '50%' }}
              />
            </div>
          </p>

          <h4>
            <strong>Step 3: Install Firebase CLI</strong>
          </h4>
          <hr />
          <p>
            In order to use the Firebase tools, you first must download it on
            the machine you have the project you would like to deploy.
            Installing it as easy as running the following command in terminal
            with the -g flag so the NPM installs globally on the machine.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/install_cli.png'}
                alt='Add new event preview'
                style={{ width: '50%' }}
              />
            </div>
          </p>

          <h4>
            <strong>Step 4: Deploy to Firebase Hosting</strong>
          </h4>
          <hr />
          <p>
            <p>
              To deploy your app to Firebase hosting, now you need to use the
              installed CLI and login into your Firebase account using the
              command <code>firebase login.</code>
            </p>
            <p>
              Once your logged in, you need to navigate to your app’s root
              directory and run the initializer command –
              <code>firebase init </code>– the command will guide through a
              series of configuration options that will help you set up your
              server.
            </p>
            <p>
              Once your server is set up, you are ready to deploy your app. You
              can simply deploy your app using the <code>firebase deploy</code>
              command. The terminal will then output a link which is where you
              will find your deployed react project.
            </p>
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/deploy.png'}
                alt='Add new event preview'
                style={{ width: '50%' }}
              />
            </div>
          </p>
          <IonButton
            color='success'
            href={'https://quiz-react-app-54baa.web.app'}
            expand='block'
            fill='solid'
          >
            <IonIcon slot='start' icon={star} />
            Launch App
          </IonButton>
        </section>
        <Pagnation prev={ROUTES.S3L1.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section3L2;
