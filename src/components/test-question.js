import React, {Component} from 'react';
import './test-question.css';

import TestQuestionItem from './test-question-item.js';

class TestQuestion extends Component {

  handleQuestionItemClick(answer){
    return () => {
      answer.userChoice = answer.userChoice ? 0 : 1;
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className="test-question">
        <div className="test-question-text" dangerouslySetInnerHTML={{__html: this.props.text}}/>
        {this.props.answers.map((item, i) =>
          <TestQuestionItem
            key={"questionItem" + i} text={item.text} isRight={item.isRight} userChoice={item.userChoice}
            handleClick={this.handleQuestionItemClick(item)}
          />
        )}
      </div>
    );
  }
}

export default TestQuestion;