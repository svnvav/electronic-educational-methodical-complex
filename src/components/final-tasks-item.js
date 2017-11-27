import React, {Component} from 'react';
import './final-tasks-item.css';

class FinalTasksItem extends Component {

  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEvaluateClick = this.handleEvaluateClick.bind(this);

    this.state = {
      inputText: "",
      result: ""
    };
  }

  handleInputChange(e){
    //this.props.userAnswer = this.state.inputText;
    this.setState({
      inputText: e.target.value,
      result: ""
    });
  }

  handleEvaluateClick(){
    this.setState({result: this.state.inputText === this.props.rightAnswer ? "Правильно" : "Ответ неверный"});
  }

  render() {
    return (
      <div className="final-tasks-item">
        <div className="final-tasks-item-text" dangerouslySetInnerHTML={{__html: this.props.text}}/>
        <input
          className='final-tasks-item-input'
          value={this.state.inputText}
          onChange={this.handleInputChange}
          placeholder='Введите ответ'
        />
        <div className="final-tasks-item-button" onClick={this.handleEvaluateClick}>Проверить</div>
        <div className="final-tasks-item-result">{this.state.result}</div>
      </div>
    );
  }
}

export default FinalTasksItem;