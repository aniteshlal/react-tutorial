import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import * as ROUTES from '../../constants/appRoutes';
import Pagnation from '../../components/Pagnation';

function Section3L1() {
  return (
    <IonPage>
      <PageTitle title={ROUTES.S1L6.title} />
      <IonContent>
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>Google Firebase</strong>
          </h4>
          <hr />
          <p>
            Google Firebase is platform developed by google for multiple
            purposes, but the functionality we will be using for this tutorial
            is hosting.
          </p>
          <h4>
            <strong>Firebase Hosting</strong>
          </h4>
          <hr />
          <p>
            As described by the google firebase docs,
            <br />
            <blockquote>
              <i>
                "Firebase Hosting is built for the modern web developer. ...
                Using the Firebase CLI, you deploy files from local directories
                on your computer to our Hosting servers. Beyond serving static
                content, you can use Cloud Functions for Firebase or Cloud Run
                to serve dynamic content and host microservices on your sites"
              </i>
            </blockquote>
          </p>
          <p>
            It is very similar to the Google App Engine which we are all
            familiar with, it is familiar in the sense that you have to create a
            project and configure it. You can manage your projects through an
            online console.
          </p>
          <p>
            Overall, Firebase Hosting can be a good choice to deploy static
            websites, and single page apps. A really interesting leg-up Firebase
            has over competitors is that Firebase hosting comes with free CDN
            and SSL — all running on the Google Cloud platform. This means you
            shouldn’t have any problems serving files to any number of users all
            over the globe
          </p>
        </section>
        <Pagnation
          prev={ROUTES.Lesson3.path}
          next={ROUTES.S3L2.path}
        ></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section3L1;
