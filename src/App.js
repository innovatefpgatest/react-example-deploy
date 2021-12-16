import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [questions, setQuestions] = useState({});

  useEffect(async () => {
    const result = await axios(
      'http://django-example-demo.azurewebsites.net/polls/questiones/',
    );

    setQuestions(result.data);
  });

  const renderQuestions = () => {
    const questionsList = []
    for (const q in questions) {
      questionsList.push(<div><b>{q.question_text}</b>: {Date(q.pub_date).toLocaleDateString()}</div>)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Innovate FPGA
        </a>
      </header>
      <b>{renderQuestions()}</b>
    </div>
  );
}

export default App;
