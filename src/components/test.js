import React, {Component} from 'react';
import './test.css';

import TestQuestion from './test-question.js'

class Test extends Component {

  constructor(props) {
    super(props);

    this.handleEvaluateClick = this.handleEvaluateClick.bind(this);

    this.state = {
      isFinished: false,
      evaluationString: ""
    };
  }

  handleEvaluateClick(){
    let rightAnswersCount = 0;
    this.props.data.items.forEach(item => {
      rightAnswersCount += checkAnswers(item.answers);
    });

    let mark = this.props.data.evaluations[0].result;
    for(let i = 1; i < this.props.data.evaluations.length; ++i)
      if(rightAnswersCount >= this.props.data.evaluations[i]) mark = this.props.data.evaluations[i].result;

    let result = "Правильных ответов: " + rightAnswersCount + " из " + this.props.data.items.length +
      ";  Оценка: " + mark;

    this.setState({
      isFinished: true,
      evaluationString: result
    });

    this.props.data.result = result;
  }

  render() {
    return (
      <div className="test">
        <div dangerouslySetInnerHTML={{__html: this.props.data.annotation}}/>
        {
          this.props.data.items.map((item, i)=>
            <TestQuestion
              key={"testQuestion" + i} text={item.text} answers={item.answers}
            />
          )
        }
        <div className="test-button" onClick={this.handleEvaluateClick}>Закончить тест</div>
        <div className="test-result">{(this.state.isFinished && this.state.evaluationString)}</div>
      </div>
    );
  }
}

export default Test;

function checkAnswers(answers) {
  for(let i=0; i<answers.length; ++i) {
    if(answers[i].userChoice !== answers[i].isRight) return 0;
  }
  return 1;
}