import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import * as ROUTES from '../../constants/appRoutes';
import Pagnation from '../../components/Pagnation';
import { Link } from 'react-router-dom';

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
            We are going to create the header which consist of the a dropdown
            menu of catergories, the number of question and a generate button.
            The following picture is of the header we will build.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/header.png'}
                alt='Add new event preview'
              />
            </div>
          </p>
          <p>
            We are now going to update our <b>App.js</b> file to create the{' '}
            <i>Header</i> and call the API to get the data and store it in our
            state variable.
            <br />
            Add the following code to the <b>App.js</b>
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/appjs.png'}
                alt='Add new event preview'
              />
            </div>
          </p>

          <p>
            <div className='code-line-explain'>
              <div className='lines'>
                <strong>Line 7-8:</strong>
              </div>
              <div class='explain'>
                The state variable <b>catergories</b> will contain all the
                catergories offered by our API after we hit the endpoint to get
                all the catergories.
                <br />
                The state variable <b>flashcards</b> is going to be the response
                we get back for selecting a certain catergory and the number of
                question. The response is going to be an Array of JSON object
                that have the question, options, and correct answer.
              </div>
            </div>

            <div className='code-line-explain'>
              <div className='lines'>
                <strong>Line 10-11:</strong>
              </div>
              <div class='explain'>
                The <i>categoryEl</i> reference will used to get which category
                the user will select. (this is seen in Line 25 and the reference
                is set on L ine 52)
                <br />
                The <i>amountEl</i> reference will used to get which number of
                question the user will select (this is seen in Line 24 and the
                reference is set on Line 70)
              </div>
            </div>

            <div className='code-line-explain'>
              <div className='lines'>
                <strong>Line 13-17:</strong>
              </div>
              <div class='explain'>
                This useEffect hits the endpoint that grabs all the categories
                avaiable to choose from and sets the <i>catergories</i> state
                variable to be able to populate the dropdown menu.
                <br />
                This populating of all the categories can be seen in Lines 51-60
              </div>
            </div>

            <div className='code-line-explain'>
              <div className='lines'>
                <strong>Line 19-45:</strong>
              </div>
              <div class='explain'>
                This function will be used when the Generate button is click to
                retrieve questions from the API.
                <br />
                In the <i>axios.get</i> function we use the end that takes 2
                parameters (amount,category) which our reference variable be
                able to access to get the correct input.
                <br />
                In the <i>.then</i> function, we will reponse data and just grab
                the information that we only need for each flashcard as such the
                question, options, and the correct answer.
              </div>
            </div>

            <div className='code-line-explain'>
              <div className='lines'>
                <strong>Line 49-76:</strong>
              </div>
              <div class='explain'>
                This is the header which is a html form that has 3 parts.
                <br />
                - First: there is the dropdown for catergories
                <br />
                - Second: there will be a input for number that you can type in
                or use the up and down arrow keys
                <br />- Third: there is a Generate button of submit type
              </div>
            </div>

            <div className='code-line-explain'>
              <div className='lines'>
                <strong>Line 77-79:</strong>
              </div>
              <div class='explain'>
                This is the container that will hold all of the Flashcard
                components.
                <br />
                Inside here we will render the <b>FlashcardList</b> component
                and pass the <i>flashcards</i> state variable to be used to
                render the Flashcard grid
              </div>
            </div>
          </p>
          <h4>
            <strong>Step 4: Update the App.css</strong>
          </h4>
          <hr />
          <p>
            <a href='https://raw.githubusercontent.com/aniteshlal/react-quiz-app/main/src/App.css'>
              Here
            </a>{' '}
            is the link to the CSS code that needs to be added to the App.css
            file to add the proper styling to it to make it like the demo App
            shown in <Link to='/flashcard-1'>Getting Started</Link> section
          </p>
          <p>
            You can get the full code at this{' '}
            <a href='https://github.com/aniteshlal/react-quiz-app'>
              Github Repo
            </a>
          </p>
        </section>
        <Pagnation
          prev={ROUTES.Lesson2.path}
          next={ROUTES.S3L1.path}
        ></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Lesson2;
