import React from 'react';

function Home() {
  return (
    <div>
      <h1 className='page-title'>Home</h1>

      <section style={{ padding: '10px' }}>
        <h4>
          <strong>What is React?</strong>
        </h4>

        <p>
          React is a library developed by <b>Facebook</b> which makes it very
          easy to create interactive UIs. It is a JavaScript library used for
          building reusable components. React is widely used around the world,
          by some companies you may know:{' '}
        </p>
        <p>
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/airbnb.jpeg'
            alt='Airbnb logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/uber.png'
            alt='uber logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/twitter.png'
            alt='Twitter logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/pinterest.png'
            alt='Pinterest logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/codecademy.png'
            alt='Codecademy logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/9gag.png'
            alt='9gag logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/netflix.png'
            alt='Netflix logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/adobe.jpg'
            alt='Adobe logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/xiaomi.png'
            alt='Xiaomi logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/alibaba.png'
            alt='Alibaba logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/g.png'
            alt='Google logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/pp.png'
            alt='Paypal logo'
          />
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/_publications/assets/img/best-js/companies/microsoft.png'
            alt='Microsoft logo'
          />
        </p>
        <p>
          React has become arguably the most popular JavaScript framework
          currently in use.
        </p>

        <h4 className='mt-5'>
          <strong>What do I have to know to start this course?</strong>
        </h4>

        <p>
          You must have a basic knowledge of HTML, CSS and JavaScript. In case
          you lack some knowledge try these tutorials first:
        </p>

        <p>They are short, simple and also free.</p>
        <div className='text-center'>
          <a
            className='btn btn-primary btn-md waves-effect waves-light'
            href='https://mdbootstrap.com/education/html/'
            target='_blank'
            rel='noreferrer'
            role='button'
          >
            {' '}
            <i className='far fa-play-circle mr-2'></i> Start HTML tutorial
          </a>

          <a
            className='btn btn-green btn-md waves-effect waves-light'
            href='https://mdbootstrap.com/education/css/'
            target='_blank'
            rel='noreferrer'
            role='button'
          >
            {' '}
            <i className='far fa-play-circle mr-2'></i> Start CSS tutorial
          </a>

          <a
            className='btn btn-yellow btn-md waves-effect waves-light'
            href='https://mdbootstrap.com/education/javascript/'
            target='_blank'
            rel='noreferrer'
            role='button'
          >
            {' '}
            <i className='far fa-play-circle mr-2'></i> Start JS tutorial
          </a>
        </div>

        <h4 className='mt-5'>
          <strong>I have the basics, how shall I start the course?</strong>
        </h4>

        <p>
          In order to work with React you have to install the Node Package
          Manager (npm). If you already have it you can start the course now!
        </p>

        <div className='text-center'>
          <a
            className='btn btn-orange btn-md waves-effect waves-light'
            href='https://www.youtube.com/watch?v=-pfxNSpNbA4'
            target='_blank'
            rel='noreferrer'
            role='button'
          >
            npm installation guide
          </a>

          <a
            className='btn btn-primary btn-md waves-effect waves-light'
            href='https://mdbootstrap.com/education/react/agenda-1-hello-world/'
            target='_blank'
            rel='noreferrer'
            role='button'
          >
            <i className='far fa-play-circle mr-2'></i> Start React tutorial
          </a>
        </div>

        <h4 className='mt-5'>
          <strong>Do I need anything else?</strong>
        </h4>

        <p>
          You will need some text editor. We recommend{' '}
          <a href='https://code.visualstudio.com/download'>
            Visual Studio Code
          </a>
          .
        </p>

        <h4 className='mt-5'>
          <strong>Is this tutorial really free?</strong>
        </h4>

        <p>Yes, it's completely free.</p>
        <h4 className='mt-5'>
          <strong>What will I build?</strong>
        </h4>

        <p>
          During the course you will build a real fully responsive Daily Agenda
          application.
        </p>
        <div className='text-center'>
          {' '}
          <img
            className='img-fluid'
            src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/react/tutorials/agenda-app/12/addNewEvent.gif'
            alt='Add new event preview'
          />
          <br></br>
        </div>

        <h4 className='mt-5'>
          <strong>What will I know once I finish this tutorial?</strong>{' '}
        </h4>

        <p>
          During this course you will also learn many powerful and useful
          technologies such as:
        </p>

        <section className='text-center'>
          <div className='row features-big mt-5'>
            <div className='col-md-3 mb-r'>
              <img
                className='img-fluid'
                src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/react/tutorials/main/img/1.png'
                alt='Angular 6'
                style={{ height: '45px' }}
              />
              <h5 className='h5'>React</h5>
              <p>
                The newest version of React including the most recent features.
                The technology used by Facebook, Airbnb, Amazon, and American
                Express.
              </p>
            </div>

            <div className='col-md-3 mb-r'>
              <img
                className='img-fluid'
                src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/react/tutorials/main/img/2.png'
                alt='Angular CLI'
                style={{ height: '50px' }}
              />
              <h5 className='h5'>Create React App</h5>
              <p>
                Create React App speeds up your development. Creation of
                projects, classes, services has never been easier.
              </p>
            </div>

            <div className='col-md-3 mb-r'>
              <img
                className='img-fluid'
                src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/react/tutorials/main/img/3.png'
                alt='Typescript'
                style={{ height: '45px' }}
              />
              <h5 className='h5'>JSX</h5>
              <p>
                JSX is a syntax extension to JavaScript. JSX may remind you of a
                template language, but it comes with the full power of
                JavaScript.
              </p>
            </div>

            <div className='col-md-3 mb-r'>
              <img
                src='https://mdbootstrap.com/img/logo/brands/npm.jpg'
                alt='sass logo'
                className=''
                style={{ height: '60px' }}
              />
              <h5 className='h5'>NPM</h5>
              <p>
                Within this tutorial, you will also learn how to use the Node
                Package Manager to easily install and maintain your project
                dependencies.
              </p>
            </div>
          </div>

          <div className='row features-big'>
            <div className='col-md-3 mb-r'>
              <img
                className='img-fluid'
                src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/react/tutorials/main/img/5.jpg'
                alt='Cross platform'
                style={{ height: '60px' }}
              />
              <h5 className='h5'>Cross-platform</h5>
              <p>
                Regardless of whether you are using Windows, macOS or Unix -
                this tutorial show you how to use Angular on each operating
                system.
              </p>
            </div>

            <div className='col-md-3 mb-r'>
              <img
                className='img-fluid'
                src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/react/tutorials/main/img/6.svg'
                alt='SPA'
                style={{ height: '60px' }}
              />
              <h5 className='h5'>SPA</h5>
              <p>
                If you have ever wonder why some websites are blazing fast you
                should continue reading. This tutorial will guide you on how to
                build a Single Page Application, which works without reloading.
              </p>
            </div>

            <div className='col-md-3 mb-r'>
              <img
                className='img-fluid'
                src='https://mdbootstrap.com/wp-content/themes/mdbootstrap4/content/en/react/tutorials/main/img/7.png'
                alt='SPA'
                style={{ height: '60px' }}
              />
              <h5 className='h5'>RWD</h5>
              <p>
                Within this tutorial, you will learn about Responsive Web
                Development - in other words, how to build a website which looks
                awesome on each device. Regardless of whether it's a 30-inch
                monitor or a smartphone screen.
              </p>
            </div>

            <div className='col-md-3 mb-r'>
              <img
                src='https://mdbootstrap.com/img/logo/brands/mdb.jpg'
                alt='material design for bootstrap logo'
                className='mb-3'
              />
              <h5 className='h5'>MDB</h5>
              <p>
                This tutorial will also teach you how to combine two powerful
                tools - Bootstrap and Material Design to achieve an outstanding
                effect on your website for application.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Home;
