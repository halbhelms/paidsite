import React, { useState } from 'react';

const Question = (props) => {
  const initialState = {
    questions: {
      e1: {id: 'e1', answer: null, correct: 'c', next: 'e2'},
      e2: {id: 'e2', answer: null, correct: 'b', next: 'e3'},
      e3: {id: 'e3', answer: null, correct: 'a', next: 'e4'},
      e4: {id: 'e4', answer: null, correct: 'c', next: 'e5'},
      e5: {id: 'e5', answer: null, correct: 'a', next: 'e6'},
      e6: {id: 'e6', answer: null, correct: 'd', next: 'e7'},
      e7: {id: 'e7', answer: null, correct: 'a', next: 'e8'},
      e8: {id: 'e8', answer: null, correct: 'b', next: 'e9'},
      e9: {id: 'e9', answer: null, correct: 'c', next: 'e10'},
      e10: {id: 'e10', answer: null, correct: 'c', next: 'm1'},
      m1: {id: 'm1', answer: null, correct: 'b', next: 'm2'},
      m2: {id: 'm2', answer: null, correct: 'a', next: 'm3'},
      m3: {id: 'm3', answer: null, correct: 'c', next: 'm4'},
      m4: {id: 'm4', answer: null, correct: 'd', next: 'm5'},
      m5: {id: 'm5', answer: null, correct: 'd', next: 'm6'},
      m6: {id: 'm6', answer: null, correct: 'c', next: 'm7'},
      m7: {id: 'm7', answer: null, correct: 'c', next: 'm8'},
      m8: {id: 'm8', answer: null, correct: 'c', next: 'm9'},
      m9: {id: 'm9', answer: null, correct: 'a', next: 'm10'},
      m10: {id: 'm10', answer: null, correct: 'b', next: 'h1'},
      h1: {id: 'h1', answer: null, correct: 'c', next: 'h2'},
      h2: {id: 'h2', answer: null, correct: 'c', next: 'h3'},
      h3: {id: 'h3', answer: null, correct: 'b', next: 'h4'},
      h4: {id: 'h4', answer: null, correct: 'c', next: 'h5'},
      h5: {id: 'h5', answer: null, correct: 'd', next: 'h6'},
      h6: {id: 'h6', answer: null, correct: 'b', next: 'h7'},
      h7: {id: 'h7', answer: null, correct: 'b', next: 'h8'},
      h8: {id: 'h8', answer: null, correct: 'a', next: 'h9'},
      h9: {id: 'h9', answer: null, correct: 'c', next: 'h10'},
      h10: {id: 'h10', answer: null, correct: 'd', next: undefined},
    },
    currentQuestionId: 'e1',
    currentQuestionNumber: 1
  }
  const [ state, setState ] = useState(initialState);
  let onNext = (event) => {
    let checkedAnswer = document.querySelector('input[name="answers"]:checked').id;
    console.log('checkedAnswer', checkedAnswer);
    // TODO: update state with answer for currentQuestionId
    let radioButtons = document.querySelectorAll('input[type="radio"]');
    let radioButtonsArray = Array.prototype.slice.call(radioButtons);
    radioButtonsArray.forEach( radioButton => radioButton.checked = false);
    setState({...state, currentQuestionId: state.questions[state.currentQuestionId].next, currentQuestionNumber: state.currentQuestionNumber + 1})
  }

  return (
    <div className="question">
      <h1>Question No. {state.currentQuestionNumber}</h1>
      <img src={`../sortingquiz/images/${state.currentQuestionId}.png`} width="800" alt={state.currentQuestionId}/>
      <div id="answers">
        <div className="answer">
          <input type="radio" name="answers" id="a"/>
          <label htmlFor="a">a</label>
        </div>
        <div className="answer">
          <input type="radio" name="answers" id="b"/>
          <label htmlFor="b">b</label>
        </div>
        <div className="answer">
          <input type="radio" name="answers" id="c"/>
          <label htmlFor="c">c</label>
        </div>
        <div className="answer">
          <input type="radio" name="answers" id="d"/>
          <label htmlFor="d">d</label>
        </div>
        <div className="answer">
          <input type="radio" name="answers" id="e"/>
          <label htmlFor="e">e</label>
        </div>
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default Question;