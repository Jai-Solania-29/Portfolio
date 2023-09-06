import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Homepage from './components/Homepage';
import Menu from './components/Menu';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Work from './components/Work';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<About />, div);
  ReactDOM.render(<Contact />, div);
  ReactDOM.render(<Education />, div);
  ReactDOM.render(<Homepage />, div);
  ReactDOM.render(<Menu />, div);
  ReactDOM.render(<Skills />, div);
  ReactDOM.render(<Tools />, div);
  ReactDOM.render(<Work />, div);
  ReactDOM.unmountComponentAtNode(div);
});