// #1
// console.log("i am react!!");

// #2
// import React from 'react'; // este "React" se DEBE llamar asi, respetando case sensitive
// // import ReactDOM from "react-dom"; // en cambio, aqui puede llamarse como deseen
// import myDom from 'react-dom';

// const helloWorld = <h1>Hello REACT world</h1>;
// const divRoot = document.querySelector('#root');

// myDom.render(helloWorld, divRoot);

// #3
import React from 'react';
import ReactDOM from 'react-dom';
import MyFirstComponent from './MyFirstComponent';
import GridTasks from './GridTasks';
// Styles
import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(
  <>
    <MyFirstComponent
      title="My tasks"
      userName="Gustavo Lopez"
      date="Sunday, August 30, 2020"
      date-year={2020}
    />
    <GridTasks title="Tasks" />
  </>,
  divRoot
);
