import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import Pagnation from '../../components/Pagnation';

function Lesson2() {
  return (
    <IonPage>
      <PageTitle title='Making a UI' />
      <IonContent>
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>Creating components</strong>
          </h4>
          <hr />
          <p>
            React components let you divide the UI into a completly different
            and isolated piece of code that is reusable. We will create the
            following components for our appilcation
          </p>
          <ul>
            <li>Flashcard component</li>
            <li>FlashcardList component</li>
          </ul>
          <p>
            The Flashcard component will be the a card that has questions and
            possible answers in the front, when click on, it will flip the card
            and reveal the correct answer. (Green border in the image below)
          </p>
          <p>
            The FlashcardList component will be a flex box that will hold many
            of these single Flashcard component to display it in a dynamic way
            based on the screen size. (Purple border in the image below)
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/components.png'}
                alt='Add new event preview'
              />
            </div>
          </p>

          <h4>
            <strong>Flashcard Components</strong>
          </h4>
          <hr />
          <p>
            Create a directory in the{' '}
            <i>
              <b>src</b>
            </i>{' '}
            folder called{' '}
            <i>
              <b>components.</b>
            </i>{' '}
            This is where we will store our all our compoents.
            <br />
            Next we will create 2 files
            <ul>
              <li>Flashcard.js</li>
              <li>FlashcardList.js</li>
            </ul>
            The direcotry should look like this:
            <div className=''>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/components_dir.png'}
                alt='Add new event preview'
              />
            </div>
          </p>
          <p>
            Add the following code to the{' '}
            <b>
              <i>Flashcard.js</i>
            </b>{' '}
            file
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/flashcardcomponent.png'}
                alt='Add new event preview'
              />
            </div>
            <strong>Line 1:</strong> We are import React because we need that
            for any react component. Then we are also importing <b>useState</b>{' '}
            and <b>useEffect</b> which will be used to create component state
            variable and update the variable based on user interaction. And
            Lastly, the <b>useRef</b> will be used to refer to the front and
            back sides of the Flashcards.
            <br />
            <strong>Line 4-5:</strong> This is where we define our state
            variables
            <br />
            <strong>Line 7-8:</strong> This is using the useRef hooks that is
            used to refer to a particular element in our render function (Line
            32 and 44)
            <br />
            <strong>Line 10-14:</strong> The <b>setMaxHeight</b> function
            dynamically calculates and sets what the height of our Flashcard by
            getting the max of what the height would be for the front and the
            back of the card based on how long the questions and the answers are
            <br />
            <strong>Line 16-20:</strong> useEffect hook is going to invoke the
            setMaxHeight function anytime there is a change in question, answer,
            or options.
            <br />
            <strong>Line 21-24:</strong> This also updates our flashcard height
            everytime the window size is changed. The return statement is there
            so that when the component is destoryed, we will no longer need the
            event listener.
            <br />
            <strong>Line 27-31:</strong> This is the div that will have the
            Flashcard. The className for this div depeneds on if the card is
            flipped or not. You can also do inline styling in JSX with the style
            variable and here we use it to dynamically set the height of this
            element. The onClick changes the flip variable between true and
            false every time the card is clicked so you know if you are
            displaying the front or the back of the Flashcard
            <br />
            <strong>Line 32-43:</strong> This is creating the front of the
            Flashcard by displaying the Question and then using the ES6
            Array.map method to iterate through all the options and display them
            below the question.
            <strong>Line 44-46:</strong> This is the back of the Flashcard that
            will have the correct answer.
            <br />
          </p>
        </section>
        <hr />
        <Pagnation prev={'/flashcard-1'} next={'/flashcard-3'}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Lesson2;
