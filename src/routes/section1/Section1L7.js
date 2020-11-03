import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import PageTitle from '../../components/PageTitle';
import * as ROUTES from '../../constants/appRoutes';
import Pagnation from '../../components/Pagnation';

function Section1L7() {
  return (
    <IonPage>
      <PageTitle title={ROUTES.S1L7.title} />
      <IonContent>
        <section style={{ padding: '10px' }}>
          <h4>
            <strong>Angular Vs React Vs Vue </strong>
          </h4>
          <hr />
          <p>
            <i>React, Vue</i> and <i>Angular</i> are three of the most popular
            JavaScript Libraries and Frameworks which are used to build complex
            and reactive user interfaces in web. There are no best framework or
            library and all three of these have gained popularity for some very
            good reasons.
          </p>
          <h4>
            <strong>Angular</strong>
          </h4>
          <hr />

          <p>
            <i>Angular</i> was developed and released by Google in 2010 and is
            still used by Google internally. <i>Angular</i> can be called a
            bigger “framework” or even a platform compared to <i>React</i> or{' '}
            <i>Vue</i>
            because of the out of the box supports it provides to the users like
            controlling the UI, reacting to user input, routing, state
            management sending Ajax Http Requests, testing, building and
            managing multiple applications. <i>Angular</i> provides full set of
            tools to build a reactive and complex user interface.{' '}
            <p>
              <i>Angular</i> uses TypeScript, a superset of JavaScript, which
              does not run in the browser but with the help of some set of
              tools, the TypeScript code is compiled down to browser-compatible
              JavaScript code.
            </p>
            Big Website produced in <i>Angular</i> :{' '}
            <a href='https://www.delta.com/'>Delta Airlines</a>
          </p>

          <h4>
            <strong>React</strong>
          </h4>
          <hr />
          <p>
            <i>React</i> was developed and released by Facebook in 2013.{' '}
            <i>React</i> is completely different to <i>Angular</i> because
            compared to
            <i>Angular</i> <i>React</i> only provides a library to render
            content to the DOM and to control the efficiency of it. <i>React</i>{' '}
            provides the users with the “tool” to define anything that needs to
            be rendered under which circumstances. However, <i>React</i> does
            not offer a built-in form validation support nor does it include a
            router to render multiple components upon URL changes. <i>React</i>{' '}
            is much slimmer than <i>Angular</i> with regards to offering special
            features.
          </p>
          <p>
            <i>React</i> uses JavaScript for coding and the projects in{' '}
            <i>React</i> are set up in such a way that JSX is supported during
            development. Much like TypeScript in <i>Angular</i>, JSX gets
            compiled to regular and browser friendly JavaScript code behind the
            scenes.
          </p>
          <p>
            <i>React</i> focuses on not only detecting and performing the UI
            updates efficiently but also prioritizes certain tasks which make
            the loaded page feel faster to the user. This is not performed by{' '}
            <i>Angular</i> and <i>Vue</i> currently but may start doing
            something similar in the future.
            <br />
            Big website developed in <i>React</i>:{' '}
            <a href='https://www.facebook.com/'>Facebook</a>
          </p>
          <h4>
            <strong>Vue</strong>
          </h4>
          <hr />
          <p>
            <i>Vue</i> or Vue.js was developed by Evan You, a former Google
            employee, in 2014. It is a stand-alone project which was not built
            by any big company. It is a framework which comes between{' '}
            <i>Angular</i> and <i>React</i> as it is smaller than <i>Angular</i>{' '}
            and provides more features than <i>React</i>.<i>Vue</i> offers
            built-in state management as well as built-in router but does not
            include form validation or Http Client functionalities. <i>Vue</i>
            uses regular JavaScript and utilizes “Single File Components” which
            allows the developers to define the HTML/CSS and JS of any component
            inside a single .vue file. Single File Component consists of:
            <ul>
              <li>
                <code>{'<template>'}</code> which contains the component’s
                markup in plain HTML
              </li>
              <li>
                <code>{'<script>'}</code> which contains the JS logic
              </li>
              <li>
                <code>{'<style>'}</code> which contains the component styles
              </li>
            </ul>
            Famous Website developed using <i>Vue</i>:{' '}
            <a href='https://www.alibaba.com/'>Alibaba</a>
          </p>
        </section>
        <Pagnation
          prev={ROUTES.S1L6.path}
          next={ROUTES.Lesson1.path}
        ></Pagnation>
      </IonContent>
    </IonPage>
  );
}

export default Section1L7;
