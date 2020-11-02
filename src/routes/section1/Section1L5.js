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
            <strong>What are component Lifecycle methods?</strong>
          </h4>
          <hr />
          <p>
            Every component has multiple “lifecycle methods” which can be
            overridden to run a certain code at a particular time in the
            process.
            <div className='text-center'>
              <img
                className='img-fluid'
                src={process.env.PUBLIC_URL + '/pic7.png'}
                alt='Add new event preview'
              />
            </div>
          </p>
          <h3>Mounting</h3>
          <hr />
          <p>
            Mounting occurs when an instance of a component is created or
            inserted into the DOM. While Mounting these methods are called in
            the following order:
          </p>
          <p>
            <ul>
              <li>
                <b>constructor()</b>
                <br />
                <span>
                  A constructor is called before the component is mounted.
                  Super(props) should be called before any statement when the
                  constructor is getting implemented. Otherwise, the component
                  will be undefined causing bugs.
                </span>
              </li>
              <li>
                <b>static getDerivedStateFromProps()</b>
                <br />
                <span>
                  This method is called before a call to the render method is
                  made both during initial mount and any subsequent updatesa.
                  This method either returns an object to update the state or
                  returns null to update nothing.
                </span>
              </li>
              <li>
                <b>render()</b>
                <br />
                <span>
                  It is the only required method in a class component. It
                  examines this.props and this.state and return one of the
                  following types:
                </span>
                <ul>
                  <li>React elements: created via JSX</li>
                  <li>
                    Arrays and fragments: lets the user return multiple elements
                    from render
                  </li>
                  <li>
                    Portals: allows rendering children into different DOM
                    subtree.
                  </li>
                  <li>String and numbers: rendered as text nodes in the DOM</li>
                  <li>Booleans or null: renders nothing</li>
                </ul>
              </li>
              <li>
                <b>componentDidMount()</b>
                <br />
                <span>
                  It is invoked immediately after a component gets mounted.
                  Initialization that requires DOM nodes go here. It is a good
                  place to instantiate the network request if the data is needed
                  to be loaded from a remote endpoint.
                </span>
              </li>
            </ul>
          </p>

          <h3>Updating</h3>
          <hr />
          <p>
            An update occurs when there is a change in props or state. The
            methods below are called in the following order when a component is
            re-rendered:
          </p>

          <p>
            <ul>
              <li>
                <b>static getDerivedStateFromProps()</b> <br />
                (Note: make this a link which takes the reader back to previous
                page where the method is explained)
              </li>
              <li>
                <b>shouldComponentUpdate()</b> <br />
                This method let’s React know whether a component’s output is not
                affected by the current change in state or props. It is invoked
                before rendering after new props or state are being received.
              </li>
              <li>
                <b>render()</b>
                <br />
                (Note: make this a link which takes the reader back to previous
                page where the method is explained)
              </li>
              <li>
                <b>getSnapshotBeforeUpdate()</b>
                <br />
                Right before the mostly rendered output gets committed to DOM,
                this method gets invoked. This method allows the component to
                get some information from the DOM before it gets changed.
              </li>
              <li>
                <b>componentDidUpdate()</b>
                <br />
                This method is invoked exactly when updating occurs and is not
                called for the initial render.
              </li>
            </ul>
          </p>

          <h3>Unmounting</h3>
          <hr />
          <p>
            When a component gets removed from the DOM this method is called:
            <ul>
              <li>
                <b>componentWillUnmount()</b>
                <br />
                Right before the component is unmounted and destroyed this
                method gets invoked. In this method, any necessary cleanup such
                as invalidating timers cancelling subscriptions created in
                componentDidMount() is performed.
              </li>
            </ul>
          </p>
          <h3>Error Handling</h3>
          <hr />
          <p>
            Whenever an error occurs either during rendering, in a lifecycle
            method or the constructor of any child component, these methods are
            called:
            <ul>
              <li>
                <b>static getDerivedStateFromError()</b>
                <br />
                When an error is thrown by a descendent component, this method
                gets invoked. It receives the error thrown as a parameter and
                returns a value in order to update state.
              </li>
              <li>
                <b>componentDidCatch()</b>
                <br />
                This method is invoked when an error is thrown by a descendent
                component and receives two parameters:
              </li>
              <ul>
                <li>
                  <i>error</i>: the thrown error
                </li>
                <li>
                  <i>info</i>: an object with componentStack key which contains
                  information about the components that threw the error.
                </li>
              </ul>
            </ul>
          </p>
        </section>
        <Pagnation prev={ROUTES.S1L4.path} next={ROUTES.S1L6.path}></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section1L5;
