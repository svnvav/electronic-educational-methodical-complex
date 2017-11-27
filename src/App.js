import React, { Component } from 'react';
import './App.css';

import Header from './components/header.js';
import Content from './components/content.js';
import Menu from './components/menu.js';
import About from './components/about.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showMenu: true,
      showAbout: false,
      chapterId: "curriculum",
      contentType: "default"
    };
  }

  handleMenuClick() {
    return () => this.setState({
      showMenu: !this.state.showMenu,
    });
  }

  handleAboutClick(){
    return () => this.setState({
      showAbout: !this.state.showAbout,
    });
  }

  handleChangeContent(){
    return (type, chapterId) => this.setState({
      contentType: type,
      chapterId: chapterId
    });
  }

  render() {
    return (
      <div className="App">
        <Header
          showMenu={this.state.showMenu}
          handleMenuClick={this.handleMenuClick()}
          showAbout={this.state.showAbout}
          handleAboutClick={this.handleAboutClick()}
        />
        <Menu
          showMenu={this.state.showMenu}
          chapters = {data.chapters}
          handleItemClick={this.handleMenuClick()}
          handleItemMouseEnter = {this.handleChangeContent()}
        />
        <About showAbout={this.state.showAbout} contentText = {data.about}/>
        <Content type={this.state.contentType} chapterId = {this.state.chapterId} data={data}/>
      </div>
    );
  }
}

export default App;

const data = {
  curriculum: "",

  final: {
    test: {

      annotation: `<h1>Here is a Test</h1>`,

      items: [

        {
          text: "123123?",
          answers: [
            {
              text: "qwertyuiLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "qwertyui2",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
          answers: [
            {
              text: "qwertyui3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui2vLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui1",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
          answers: [
            {
              text: "qwertyui3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui2vLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui1",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
          answers: [
            {
              text: "qwertyui3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui2vLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui1",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
          answers: [
            {
              text: "qwertyui3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui2vLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui1",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
          answers: [
            {
              text: "qwertyui3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui2vLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui1",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
          answers: [
            {
              text: "qwertyui3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui2vLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui1",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
          answers: [
            {
              text: "qwertyui3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui2vLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui1",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
          answers: [
            {
              text: "qwertyui3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui2vLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "qwertyui1",
              isRight: 1,
              userChoice: 0
            },
          ]
        },
      ],

      evaluations: [
        {count: 0, result: 2},
        {count: 9, result: 3},
        {count: 14, result: 4},
        {count: 19, result: 5}
      ],
      result: ""
    },

    tasks: [
      {
        text: "a",
        rightAnswer: "a",
        userAnswer: ""
      },
      {
        text: "b",
        rightAnswer: "b",
        userAnswer: ""
      },
      {
        text: "c",
        rightAnswer: "c",
        userAnswer: ""
      }
    ]

  },

  chapters: [

    {
      title: "Раздел 1: Введение в объектно-ориентированный язык программирования C#",
      materials: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus non auctor. Cras sollicitudin justo urna, id posuere felis mattis ut. Morbi quis rhoncus libero. Maecenas elementum mattis magna vitae porta. Proin bibendum, felis sed volutpat interdum, augue metus dignissim elit, ut sollicitudin odio urna nec eros. Suspendisse potenti. Sed et posuere odio. Aenean fermentum dolor euismod, fermentum mauris a, dignissim arcu. Praesent vel metus accumsan, auctor risus rutrum, auctor tortor. Aliquam et pharetra odio, id aliquet magna. Nulla vitae finibus ligula, id facilisis enim. Quisque volutpat euismod erat non ultrices. Nam lacinia diam quis sem tempor blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu tristique lectus.\n" +
      "\n" +
      "Aliquam rhoncus luctus velit, eget condimentum erat mollis lacinia. Donec condimentum ipsum ac ornare rutrum. Morbi eu hendrerit magna, eget congue erat. Ut nec aliquet nisl. Nam tempus quam nec sagittis sodales. Curabitur justo ante, finibus quis justo id, finibus vehicula purus. Nullam ultricies urna ex, quis posuere magna laoreet eu. Cras molestie et ipsum ac hendrerit. Integer eget eleifend ante. Aenean volutpat justo finibus, placerat nisi interdum, bibendum velit. Pellentesque luctus volutpat condimentum. Praesent semper sagittis odio pellentesque sollicitudin. Fusce lobortis scelerisque urna sit amet rhoncus. Nam lacinia vestibulum enim ac hendrerit. Aliquam porttitor orci nec condimentum vulputate. Nunc eget ligula purus.\n" +
      "\n" +
      "Morbi quis quam facilisis, venenatis neque nec, tempor nibh. Morbi convallis, nibh at efficitur fringilla, risus augue consequat diam, sit amet sollicitudin enim justo vitae leo. Donec gravida condimentum feugiat. Cras vestibulum venenatis ex, eget pellentesque erat consectetur et. Phasellus vel laoreet sem. Curabitur facilisis molestie feugiat. Duis eu sapien at dolor condimentum scelerisque sit amet at lectus. Fusce ac nunc eu elit efficitur cursus. Nam in ultrices sem. Quisque vitae aliquet sapien. Cras orci metus, imperdiet at efficitur aliquet, convallis vel purus. Duis gravida, lectus ut vehicula venenatis, nibh enim feugiat enim, sit amet dictum nisi turpis eget quam. Etiam ullamcorper lectus dignissim mauris rutrum elementum. Fusce vehicula vitae libero id venenatis. Curabitur quis ullamcorper orci, non aliquet ligula.\n" +
      "\n" +
      "Praesent scelerisque risus in dolor aliquet porta. Aliquam erat volutpat. Mauris eu vestibulum sem. Pellentesque finibus facilisis libero, eget tincidunt velit imperdiet eget. Proin ac orci eget erat ornare volutpat. Integer non tristique dui. Aliquam posuere accumsan vestibulum. Aliquam non felis sit amet ligula sodales rhoncus. Donec sagittis sapien ultrices magna aliquet porta. Quisque imperdiet, ante et finibus egestas, augue nisi fringilla magna, vel vulputate ipsum eros sit amet lectus. Pellentesque vehicula elit id risus malesuada euismod.\n" +
      "\n" +
      "Integer fermentum hendrerit pretium. Etiam scelerisque nulla vestibulum ante facilisis pretium. Donec id interdum urna, sit amet bibendum est. In lobortis fermentum tellus et mattis. Suspendisse consectetur commodo libero a facilisis. Mauris efficitur ultrices interdum. Maecenas sed diam a orci placerat scelerisque ut id massa. Nullam fringilla velit lacus, ac placerat ex ornare nec. Morbi imperdiet mattis nulla sit amet ultricies. Vestibulum tincidunt gravida purus scelerisque pharetra. Maecenas congue quis erat a condimentum. Praesent eget tortor quis dolor elementum viverra. Nullam posuere eleifend venenatis.",
      questions: "",
      tasks: "",
    },

    {
      title: "Раздел 2: Введение в объектно-ориентированный язык программирования C#",
      materials: "Donec ullamcorper faucibus tellus non auctor. Cras sollicitudin justo urna, id posuere felis mattis ut. Morbi quis rhoncus libero. Maecenas elementum mattis magna vitae porta. Proin bibendum, felis sed volutpat interdum, augue metus dignissim elit, ut sollicitudin odio urna nec eros. Suspendisse potenti. Sed et posuere odio. Aenean fermentum dolor euismod, fermentum mauris a, dignissim arcu. Praesent vel metus accumsan, auctor risus rutrum, auctor tortor. Aliquam et pharetra odio, id aliquet magna. Nulla vitae finibus ligula, id facilisis enim. Quisque volutpat euismod erat non ultrices. Nam lacinia diam quis sem tempor blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu tristique lectus.\n" +
      "\n" +
      "Aliquam rhoncus luctus velit, eget condimentum erat mollis lacinia. Donec condimentum ipsum ac ornare rutrum. Morbi eu hendrerit magna, eget congue erat. Ut nec aliquet nisl. Nam tempus quam nec sagittis sodales. Curabitur justo ante, finibus quis justo id, finibus vehicula purus. Nullam ultricies urna ex, quis posuere magna laoreet eu. Cras molestie et ipsum ac hendrerit. Integer eget eleifend ante. Aenean volutpat justo finibus, placerat nisi interdum, bibendum velit. Pellentesque luctus volutpat condimentum. Praesent semper sagittis odio pellentesque sollicitudin. Fusce lobortis scelerisque urna sit amet rhoncus. Nam lacinia vestibulum enim ac hendrerit. Aliquam porttitor orci nec condimentum vulputate. Nunc eget ligula purus.\n" +
      "\n" +
      "Morbi quis quam facilisis, venenatis neque nec, tempor nibh. Morbi convallis, nibh at efficitur fringilla, risus augue consequat diam, sit amet sollicitudin enim justo vitae leo. Donec gravida condimentum feugiat. Cras vestibulum venenatis ex, eget pellentesque erat consectetur et. Phasellus vel laoreet sem. Curabitur facilisis molestie feugiat. Duis eu sapien at dolor condimentum scelerisque sit amet at lectus. Fusce ac nunc eu elit efficitur cursus. Nam in ultrices sem. Quisque vitae aliquet sapien. Cras orci metus, imperdiet at efficitur aliquet, convallis vel purus. Duis gravida, lectus ut vehicula venenatis, nibh enim feugiat enim, sit amet dictum nisi turpis eget quam. Etiam ullamcorper lectus dignissim mauris rutrum elementum. Fusce vehicula vitae libero id venenatis. Curabitur quis ullamcorper orci, non aliquet ligula.\n" +
      "\n" +
      "Praesent scelerisque risus in dolor aliquet porta. Aliquam erat volutpat. Mauris eu vestibulum sem. Pellentesque finibus facilisis libero, eget tincidunt velit imperdiet eget. Proin ac orci eget erat ornare volutpat. Integer non tristique dui. Aliquam posuere accumsan vestibulum. Aliquam non felis sit amet ligula sodales rhoncus. Donec sagittis sapien ultrices magna aliquet porta. Quisque imperdiet, ante et finibus egestas, augue nisi fringilla magna, vel vulputate ipsum eros sit amet lectus. Pellentesque vehicula elit id risus malesuada euismod.\n" +
      "\n" +
      "Integer fermentum hendrerit pretium. Etiam scelerisque nulla vestibulum ante facilisis pretium. Donec id interdum urna, sit amet bibendum est. In lobortis fermentum tellus et mattis. Suspendisse consectetur commodo libero a facilisis. Mauris efficitur ultrices interdum. Maecenas sed diam a orci placerat scelerisque ut id massa. Nullam fringilla velit lacus, ac placerat ex ornare nec. Morbi imperdiet mattis nulla sit amet ultricies. Vestibulum tincidunt gravida purus scelerisque pharetra. Maecenas congue quis erat a condimentum. Praesent eget tortor quis dolor elementum viverra. Nullam posuere eleifend venenatis.",
      questions: "",
      tasks: "",
    },
  ],

  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eleifend erat nec consequat efficitur. Donec ullamcorper faucibus tellus non auctor. Cras sollicitudin justo urna, id posuere felis mattis ut. Morbi quis rhoncus libero. Maecenas elementum mattis magna vitae porta. Proin bibendum, felis sed volutpat interdum, augue metus dignissim elit, ut sollicitudin odio urna nec eros. Suspendisse potenti. Sed et posuere odio. Aenean fermentum dolor euismod, fermentum mauris a, dignissim arcu. Praesent vel metus accumsan, auctor risus rutrum, auctor tortor. Aliquam et pharetra odio, id aliquet magna. Nulla vitae finibus ligula, id facilisis enim. Quisque volutpat euismod erat non ultrices. Nam lacinia diam quis sem tempor blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In eu tristique lectus.\n" +
  "\n" +
  "Aliquam rhoncus luctus velit, eget condimentum erat mollis lacinia. Donec condimentum ipsum ac ornare rutrum. Morbi eu hendrerit magna, eget congue erat. Ut nec aliquet nisl. Nam tempus quam nec sagittis sodales. Curabitur justo ante, finibus quis justo id, finibus vehicula purus. Nullam ultricies urna ex, quis posuere magna laoreet eu. Cras molestie et ipsum ac hendrerit. Integer eget eleifend ante. Aenean volutpat justo finibus, placerat nisi interdum, bibendum velit. Pellentesque luctus volutpat condimentum. Praesent semper sagittis odio pellentesque sollicitudin. Fusce lobortis scelerisque urna sit amet rhoncus. Nam lacinia vestibulum enim ac hendrerit. Aliquam porttitor orci nec condimentum vulputate. Nunc eget ligula purus.",

};