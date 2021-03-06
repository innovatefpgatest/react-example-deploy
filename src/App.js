import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function App() {
  const [questions, setQuestions] = useState({});

  useEffect(async () => {
    const result = await axios(
      'https://django-example-demo.azurewebsites.net/polls/questiones/',
    );

    setQuestions(result.data);
  }, []);

  const renderQuestions = () => {
    const questionsList = []
    if (questions.length) {
      for (const q of questions) {
        questionsList.push(<p><b>{q.question_text}</b>: {moment(q.pub_date).format('DD-MM-YYYY HH:mm:ss')}</p>)
      }
    }

    return questionsList
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
          href="https://django-example-demo.azurewebsites.net/polls/questiones/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Questions
        </a>
        <div>{renderQuestions()}</div>
      </header>
    </div>
  );
}

export default App;
