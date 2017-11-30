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
      showMenu: false,
      showAbout: true,
      chapterId: "curriculum",
      contentType: "materials"
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
  curriculum:
  "<h2>Учебная программа</h2>" +
  "<br><br>Целью данного курса является изучение основных конструкций объектно-ориентированного языка программирования C#" +
  "<br><br>Одной из задач при прохождении курса является наработка практических навыков программирования на предлагаемом языке. " +
  "Также важной задачей является получение теоретических знаний об основных конструкциях языка программирования." +
  "<br><br>Для прохождения курса необходимо иметь навыки владения компьютером, а также иметь начальные навыки программирования на любом императивном языке программирования. Важным требованием для решения предлагаемых практических задач является начальная математическая подоготовка" +
  "<br><br>Рузультатом прохождения курса будет наличие навыков программирования на языке С#" +
  "<br><br>Курс состоит из двух разделов, каждый из которых содержит материалы подготовки, контрольные вопросы к материалам подготовки и практические задачи по материалам подготовки." +
  "<br>Разделы:" +
  "<ul>" +
  "<li>Раздел 1: Первая программа, типы данных, арифметические и логические операции в C#" +
  "<br>Содержит материалы для начальной работы с языком и запуска первой программы, информацию о типах данных, обрабатываемых компилятором С#, а также обзор арифметических и логических операций</li>" +
  "<li>Раздел 2: Условные операторы, массивы, циклы в C#" +
  "<br>Содержит материалы о конструкциях управления последовательностью выполнения команд при работе программы, а также обзор массива, как комплексного типа данных.</li>" +
  "</ul>" +
  "<br><br> Для запуска примеров программ и выполнения практических заданий рекомендуется использовать среду Microsoft Visual Studio" +
  "<br><br>Источником материалов является ресурс <a href=\"http://mycsharp.ru\">mycsharp.ru</a>" +
  "<br><br>После изучения разделов курса предлагается пройти итоговую проверку освоенного материала, содержащую 20 тестовых вопросов и 3 практических задания.",

  final: {
    test: {

      annotation: "<h2>Итоговый тест</h2> Для выполнения теста выделите под каждым вопросом варинты ответов, которые вы считаете правильными. " +
      "В каждом вопросе есть хотя-бы один правильный вариант ответа. Для оценивания результатов нажмите на кнопку внизу страницы." +
      "Ответ считается правильным, если выбраны все корректные варианты ответа и не выбрано ни одного неверного.",

      items: [

        {
          text: "Выберите правильный(-ые) вариант(-ы) описания метода - точки входа в программу.",
          answers: [
            {
              text: "public void Main(string[] args)",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "static void Main(string[] arrghh)",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "public static void Main(string args)",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "public static void Main(string[] args)",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Синтаксис тернарного оператора можно записать в виде:",
          answers: [
            {
              text: "condition : value1 | value2",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "condition if value1 else value2",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "condition ? value1 : value2",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Выберите типы данных, представляющие вещественные числа",
          answers: [
            {
              text: "float",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "double",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "short",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "long",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Чему будет равно значение переменной b<br><div class=\"code\">{<br>          &nbsp;&nbsp;  int a = 35;<br>          &nbsp;&nbsp;  short b = 10;<br>          &nbsp;&nbsp;  a = b;<br>          &nbsp;&nbsp;  b = a;<br>        }</div>",
          answers: [
            {
              text: "10",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "35",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "В коде ошибка",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Сколько раз выполнится тело цикла do{...}while(false)?",
          answers: [
            {
              text: "ни разу",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "один раз",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "бесконечное количество раз",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Определите результат логического выражения !((56-(11*(45/9)))<0)&&(false || !((128%2)==0))",
          answers: [
            {
              text: "true",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "false",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "Выражение синтаксически неверно",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Какого типа будет переменная, объявленная следующим образом: var number = 0.5;",
          answers: [
            {
              text: "int",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "float",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "double",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "long",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Выберите верные утверждения",
          answers: [
            {
              text: "С# - компилируемый язык программирования",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "С# - интерпретируемый язык программирвания",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "С# - язык программирования с динамической типизацией",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "C# - язык программирования со строгой типизацией",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Переменная типа bool занимает в логической памяти компьютера...",
          answers: [
            {
              text: "8 бит",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "1 бит",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "1 байт",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "8 байт",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Выберите корректные варианты объявления и инициализации переменной",
          answers: [
            {
              text: "float f = '5';",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "int целое = 0;",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "var t = \"переменная\";",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "char c = 'c';",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Переменная, объявленная c помощью var, НЕ может быть",
          answers: [
            {
              text: "Полем класса",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "Переменной, которой присваивается null",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "Аргументом функции",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "Типом возвращаемого функцией значения",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Выберите варианты объявления цикла for, которые не вызовут ошибок",
          answers: [
            {
              text: "for(int i; i<10;i++)",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "int i = 5;<br>for(;i > 10; --i)",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "for(int i = 0, i<10, i++)",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "int i;<br>for(i=1; i>0; i++)",
              isRight: 1,
              userChoice: 0
            },
          ]
        },

        {
          text: "Какие методы позволяют считать данные, вводимые в консоль с клавиатуры?",
          answers: [
            {
              text: "Console.ReadKey();",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "Console.ReadLine();",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "Console.WriteLine();",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Выберите корректные варианты объявления динамического списка List",
          answers: [
            {
              text: "List<string> teams = new List<string>;",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "List<string> teams = new List<string>() {\"Dynamo\", \"CSKA\" };",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "List<string> teams = new List<string>();",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "List<string> teams = new List<string>() [\"Dynamo\", \"CSKA\" ]",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Какой стандартный класс содержит методы, осуществляющие комплексные математические операции?",
          answers: [
            {
              text: "Math",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "Matan",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "Mathf",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Какую математическую операцию представляет арифметический оператор %?",
          answers: [
            {
              text: "Остаток от целочисленного деления",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "Целочисленное деление",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "Процент первого аргумента относительно второго",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "Процент второго аргумента относительно первого",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Сколько раз выполнится тело цикла while(true){break; continue;}",
          answers: [
            {
              text: "ни разу",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "1 раз",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "бесконечное число раз",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Конкатенация строк в C# осуществляется оператором",
          answers: [
            {
              text: ".",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "+",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "&",
              isRight: 0,
              userChoice: 0
            },
            {
              text: ":",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Выберите правильный(-ые) вариант(-ы) объявления и выделения памяти для массива.",
          answers: [
            {
              text: "int[] array = new int[];",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "string[] seasons = {\"зима\",\"весна\",\"лето\",\"осень\"};",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "int[,,,,] array = new int[1,2,3,4,5];",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "int[] array = new int(5);",
              isRight: 0,
              userChoice: 0
            },
          ]
        },

        {
          text: "Выберите правильный(-ые) вариант(-ы) синтаксиса оператора switch.",
          answers: [
            {
              text:
              "switch(variable){ " +
              "case value1: " +
              "//код " +
              "break; " +
              "case value2: " +
              "//код " +
              "break; " +
              "default: " +
              "//код " +
              "break; " +
              "}",
              isRight: 1,
              userChoice: 0
            },
            {
              text: "switch(variable){ " +
                "case value1{ " +
                "//код " +
                "break;} " +
                "case value2{ " +
                "//код " +
                "break;} " +
                "default{ " +
                "//код " +
                "break;} " +
                "}",
              isRight: 0,
              userChoice: 0
            },
            {
              text: "switch(variable) " +
              "case value1: " +
              "//код " +
              "break; " +
              "case value2: " +
              "//код " +
              "break; " +
              "default: " +
              "//код " +
              "break; " +
              "",
              isRight: 0,
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
        text: "Сколько раз выполнится тело цикла for(int i=0; i<=0; i--)?",
        rightAnswer: "2147483648",
        userAnswer: ""
      },
      {
        text: "Дан выпуклый многоугольник с вершинами в координатах: (-2, 2), (2, 5), (4, 5), (4, 2), (1, -2). Посчитайте площадь.",
        rightAnswer: "24",
        userAnswer: ""
      },
      {
        text: "<p class=\"text\">\n" +
        "Последовательность a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, … , a<sub>n-1</sub>, a<sub>n</sub> называется пилообразной, если она удовлетворяет одному из следующих условий:<br>\n" +
        "</p> 1)\ta1 < a2 > a3 < … > an-1 < an<br>" +
        "2)\ta1 > a2 < a3 > … < an-1 > an <br><br> Дана числовая последовательность 5 7 6 3 4 2 7 1 8 9 4 5 6 3 4 9 0 1 2. Требуется определить длину самой длинной ее пилообразной непрерывной подпоследовательности.",
        rightAnswer: "7",
        userAnswer: ""
      }
    ]

  },

  chapters: [

    {
      title: "Раздел 1: Первая программа, типы данных, арифметические и логические операции в C#",
      materials: "" +
        "<span><h3>Пишем первую программу на Си-шарп</h3> В программировании есть такая традиция – изучение любого языка начинается с написания программы, которая выводит на экран сообщение «Hello, World!». Мы не будем отступать от традиций.<br><br>Запускаем Microsoft Visual C# 2013 Express -&gt; Меню -&gt; Файл -&gt; Новый проект -&gt; В списке выбираем Console Application (Консольное приложение) -&gt; называем проект и жмем ОК. В итоге будет создан проект с одним файлом с расширением *.cs в котором мы и будем писать нашу программу. В этом файле уже есть несколько шаблонных строк кода.<br><br><div class=\"code\">using System;<br>using System.Collections.Generic;<br>using System.Linq;<br>using System.Text;<br><br>namespace HelloWorld<br>{<br>     class Program<br>     {<br>          static void Main(string[] args)<br>          {<br>          }<br>     }<br>}<br></div><br>И это уже готовая программа, только она не делает ничего.<br>Добавим несколько строк кода между фигурными скобками функции Main,  чтобы вывести «Hello, World!» на экран.<br><br><div class=\"code\">using System;<br>using System.Collections.Generic;<br>using System.Linq;<br>using System.Text;<br><br>namespace HelloWorld<br>{<br>     class Program<br>     {<br>          static void Main(string[] args)<br>          {<br>                Console.WriteLine(\"Hello, World!\");<br>                   Console.ReadKey();<br>          }<br>     }<br>}</div><br>Чтобы скомпилировать и запустить программу жмем F5. В итоге, видим на экране наше приветствие. Поздравляю с первой написанной программой на Си-шарп!<br>Детально код разбирать пока не будем, скажем только, что мы имеем класс Program, внутри которого объявлена статическая функция (метод) Main, что делает его главным классом приложения, и такой класс может быть только один. Функция Main является точкой входа программы, и она должна обязательно быть в любой консольной программе. Строка Console.WriteLine(\"Hello, World!\"); выводит сообщение на экран. После этого, чтобы программа не закрылась, и мы смогли увидеть результат, командой Console.ReadKey(); мы ожидаем нажатия клавиши пользователем. После нажатия клавиши приложение соответственно закрывается.</span>" +
      "<span><h3>Переменные,типы данных, константы в Си-шарп </h3><b>Переменная</b> – это именованная область памяти. В переменную можно записывать данные и считывать. Данные, записанные в переменной, называются <b>значением</b> переменной.<br><br><b>Си-шарп</b> – язык жесткой типизации. Каждая переменная должна быть определенного типа данных. Ниже, в таблице наведены встроенные типы данных языка Си-шарп:<br><br><table border=\"1\" cellpadding=\"2\" style=\"border-collapse:collapse;\"><tbody><tr><th>Тип</th><th>Область значений</th><th>Размер</th></tr><tr></tr><tr><td>sbyte</td><td>-128 до 127</td><td>Знаковое 8-бит целое</td></tr><tr></tr><tr><td>byte</td><td>0 до 255</td><td>Беззнаковое 8-бит целое</td></tr><tr></tr><tr><td>char</td><td>U+0000 до U+ffff</td><td>16-битовый символ Unicode</td></tr><tr></tr><tr><td>bool</td><td>true или false</td><td>1 байт*</td></tr><tr></tr><tr><td>short</td><td>-32768 до 32767</td><td>Знаковое 16-бит целое</td></tr><tr></tr><tr><td>ushort</td><td>0 до 65535</td><td>Беззнаковое 16-бит целое</td></tr><tr></tr><tr><td>int</td><td>-2147483648 до 2147483647</td><td>Знаковое 32-бит целое</td></tr><tr></tr><tr><td>uint</td><td>0 до 4294967295</td><td>Беззнаковое 32-бит целое</td></tr><tr></tr><tr><td>long</td><td>-9223372036854775808 до 9223372036854775807</td><td>Знаковое 64-бит целое</td></tr><tr></tr><tr><td>ulong</td><td>0 до 18446744073709551615</td><td>Беззнаковое 64-бит целое</td></tr><tr></tr><tr><td>float</td><td>±1,5*10-45 до ±3,4*1033</td><td>4 байта, точность — 7 разрядов</td></tr><tr></tr><tr><td>double</td><td>±5*10-324 до ±1,7*10306</td><td>8 байтов, точность — 16 разрядов</td></tr><tr></tr><tr><td>decimal</td><td>(-7,9 * 1028 до 7,9 * 1028) / (100–28)</td><td>16 байт, точность — 28 разрядов</td></tr><tr></tr></tbody></table><br><br>*Здесь нет ошибки. Оперативная память - массив байтов, где каждый байт имеет уникальный адрес. Для bool достаточно одного бита: 0 - false, 1 - true, но минимальная адресуемая сущность - байт, поэтому ненулевой байт считается за истину, нулевой - ложью.<br><br>Для того, чтобы использовать переменную, ее сначала нужно объявить:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>    &nbsp;&nbsp;        int a; // объявляем переменную a типа int<br>       &nbsp;&nbsp;     a = 5; // записываем в переменную a число 5<br>     &nbsp;&nbsp;       int b, c; // объявить можно сразу несколько переменных через запятую<br>      &nbsp;&nbsp;      bool d;  // объявляем переменную d типа bool<br>\t&nbsp;&nbsp;    d = true; // записываем в переменную d значение true (истина)<br>\t&nbsp;&nbsp;    long e = 10; // при объявлении переменной можно сразу же задавать ей значение, это называется инициализацией<br>        &nbsp;&nbsp;    float f = 5.5f; // чтобы записать число с плавающей точкой типа float, нужно после значения добавлять суффикс f.<br>        &nbsp;&nbsp;    char g = 'g'; // объявление символьной переменой g с ее инициализацией значением символа 'g'<br>        }</div><br>При использовании переменной, в которую не было записано значение, компилятор выдаст ошибку \"Use of unassigned local variable [variableName]\".<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>       &nbsp;&nbsp;    int a; <br>\t&nbsp;&nbsp;   Console.WriteLine(a); //ошибка <br>        }</div><br>Язык Си-шарп чувствительный к регистру символов. Переменные max и Max это не одно и то же. Не забывайте этого, чтобы не иметь лишних проблем.<br><br>Имя переменной должно отображать суть данных, которые она отображает. Не стоит называть переменные ни о чем не говорящими именами типа a, b, c. Используйте английские слова. Высота – height, возраст – age и т. д.<br><br>НИКОГДА не используйте кириллические символы в именах переменных.<br><br><b>Преобразование встроенных типов данных</b><br><br>Переменные одного типа можно преобразовывать в переменные другого типа.  Преобразование бывает явным и неявным. Неявное преобразование выполняет компилятор.<br><br>Пример неявного преобразования:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>          &nbsp;&nbsp;  int a = 35;<br>          &nbsp;&nbsp;  short b = 10;<br>          &nbsp;&nbsp;  a = b; // неявное преобразование. Так как int большего размера, чем short – утери данных не будет<br>          &nbsp;&nbsp;  b = a; // ошибка компиляции, нельзя тип большего размера неявно преобразовать в тип меньшего размера<br>        }</div><br>При явном преобразовании необходимо непосредственно перед переменной, которую вы хотите преобразовать, указать в скобках тип, к которому приводится переменная.<br><br>Пример явного преобразования:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>           &nbsp;&nbsp; int a = 35000;<br>          &nbsp;&nbsp;  short b = 10;<br>         &nbsp;&nbsp;   b = (short) a; // в этом случае уже ошибки не будет. Так как максимальное значение типа short 32767, здесь будет утеря данных.<br>        }</div><br><b>Константы</b><br><br><b>Константа</b> – это переменная, значение которой нельзя изменить. Константы используются для гарантирования того, что данные в этой переменной не изменятся.<br>Для того, чтобы объявить константу, перед обычным объявлением переменной нужно добавить ключевое слово const:<br><br>        <div class=\"code\">static void Main(string[] args)<br>        {<br>           &nbsp;&nbsp; const int months = 12; // объявление константы<br>          &nbsp;&nbsp;  months = 13; // ошибка компиляции<br>        }</div><br>При объявлении константы она должна обязательно быть проинициализирована значением.<br>Константы также делают ваш код более красивым, читаемым.<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>          &nbsp;&nbsp;  const int months = 12;<br>          &nbsp;&nbsp;  const int monthSalary = 1024;<br>          &nbsp;&nbsp;  int yearSalary = monthSalary * months;<br>        }</div><br>Гораздо понятнее чем:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>          &nbsp;&nbsp;  int yearSalary = 12 * 1024;<br>        }</div><br>Константы могут быть двух типов: простые литералы и строчные:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>           &nbsp;&nbsp; Console.WriteLine(100); // 100 есть 100 и этого не изменить, это константа, а точнее числовой литерал<br>           &nbsp;&nbsp; Console.WriteLine(\"Hello!\"); // строка “Hello!” является строчным литералом<br>        }</div><br>Здесь стоит отличать константы от переменных-констант, последние имеют имя, как в примере с месяцами и зарплатой.<br><br><b>Ключевое слово var</b><br><br>Начиная с версии C# 3.0 в язык было добавлено ключевое слово <b>var</b>, которое позволяет создавать переменные без явного указания типа данных. Тип данных такой переменной определяет компилятор по контексту инициализации.<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>        &nbsp;&nbsp;    var number = 5; // number будет типа int<br>         &nbsp;&nbsp;   var text =\"some text\"; // text будет типа string<br>\t &nbsp;&nbsp;    var number2 = 0.5;  // number2 будет типа double<br>        }</div><br>var сохраняет принцип строгой типизации в Си-шарп. Это означает, что после того, как для переменной уже был определен тип, в нее нельзя записать данные другого типа:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>          &nbsp;&nbsp;  var number = 5;<br>          &nbsp;&nbsp;  number = \"some text\"; // ошибка, number определен как int<br>}</div><br>Ключевое слово var следует использовать в первую очередь с LINQ выражениями (при работе с базами данных)<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>\t&nbsp;&nbsp;var query = from s in bdContext.Students select s;<br>}</div><br>О LINQ мы будем говорить позже.<br><br>Ключевое слово var имеет ограничения по его использованию - var не может быть в качестве:<br><br>- <i>поля класса</i><br>- <i>аргумента функции</i><br>- <i>возвращаемого типа функции</i><br>- <i>переменной, которой присваивается null</i><br><br>Нововведение var является достаточно противоречивым среди разработчиков на C#, некоторые используют его где только возможно, другие его избегают (код становится плохо читаемым).<br><br><b>Ссылочные типы</b><br><br>Все типы данных, о которых мы говорили выше, являются структурными. Также существуют ссылочные типы. Из базовых типов к ссылочным относятся object и string.<br>Тип object является базовым для всех остальных типов данных. Типу string соответствует строка символов Unicode.<br><br>Пример использования типа <a style=\"color:#0000aa\" href=\"http://mycsharp.ru/post/16/2013_05_26_rabota_so_strokami_v_si-sharp_klass_string.html\" target=\"_blank\">string</a>.<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>           &nbsp;&nbsp; string hello = \"Hello!\";<br>           &nbsp;&nbsp; Console.WriteLine(hello);            <br>        }</div><br>Структурные типы данных в Си-шарп хранятся в стеке. Для этих данных зарезервирована область в стеке.<br><br><b>Стек</b> — это структура данных, которая сохраняет элементы по принципу  «последним пришёл — первым вышел» .  Примером из жизни служит стопка тарелок. Скорость работы со стеком гораздо выше, чем с оперативной памятью, следовательно, использование стека повышает скорость работы программы.<br><br>Ссылочные типы хранятся в куче. <br><br><b>Куча</b> — это область динамической памяти, которая выделяется приложению для хранения данных (например объектов). Доступ к данным в куче осуществляется медленнее, чем к стеку.  Переменные ссылочных типов хранят ссылки на данные.<br><br>К ссылочным типам относятся классы, интерфейсы, делегаты и массивы.</span>" +
      "<span><h3>Арифметические и логические операции в Си-шарп </h3>В этом уроке мы поговорим об арифметических и логических операциях, без которых сложно представить любую программу.<br><br>Все операции делятся на два типа: унарные и бинарные. К унарным относятся операции, в которых участвует один операнд. В бинарных операциях – два операнда. Операнд – это данные, которые принимают участие в операции. Например, оператор сложения «+» – бинарный 2+3, здесь операндами являются числа 2 и 3. Список бинарных арифметических операций приведен в таблице:<br><br><table border=\"1\" cellpadding=\"2\" style=\"border-collapse:collapse;\"><tbody><tr><th>Операция</th><th>Запись</th></tr><tr><td>Сложение</td><td>a + b</td></tr><tr><td>Вычитание</td><td>a - b</td></tr><tr><td>Деление</td><td>a / b</td></tr><tr><td>Умножение</td><td>a * b</td></tr><tr><td>Нахождение остатка от деления</td><td>a % b</td></tr></tbody></table><br>При делении двух целых чисел результатом также будет целое число. Например при делении 9/5 результатом будет число 1. Чтобы получить точный результат с десятичной точкой, нужно чтобы делимое и/или делитель были типа float или double. Например,  при делении 9 / 5f (суффикс f указывает, что данная константа типа float) результатом будет 1.8.<br><br><b>Оператор «%»</b> возвращает остаток от деления. Результатом операции 9 % 5 будет 4. Примером применения оператора «%» может быть процесс проверки числа на четность. Для этого мы ищем остаток от деления числа на 2. Если число четное, результатом будет 0, если нечетное – 1.<br><br>Чтобы повысить приоритет операции, используются скобки, как и в обычной арифметике.<br><br>2+2*2=6<br>(2+2)*2=8<br><br>При использовании оператора «+» для строк, он выполняет операцию конкатенации. <b>Конкатенация</b> – объединение нескольких объектов (например строк) в один.<br><br><div class=\"code\"><br>static void Main(string[] args)<br>        {<br>        &nbsp;&nbsp;    string str1 = \"Hello\", str2 = \"World\";<br>          &nbsp;&nbsp;  Console.WriteLine(str1 + \", \" + str2); //выводит на экран \"Hello, World\"<br>        }</div><br><b>Унарные операторы в Си-шарп</b><br><br>Унарных арифметических операторов в Си-шарп есть всего два: инкрементация «++» и декрементация «--»;<br><br>Инкрементация увеличивает операнд на единицу, а декрементация - уменьшает на единицу.<br><br><div class=\"code\"><br>static void Main(string[] args)<br>        {<br>          &nbsp;&nbsp;  int a = 0, b = 5;<br>          &nbsp;&nbsp;  a++; // a=1;<br>          &nbsp;&nbsp;  b--; // b=4<br>        }</div><br>Инкрементация и декрементация может быть префиксной и постфиксной. При Префиксной форме оператор стоит перед операндом, а при постфиксной-после.<br>Префиксная форма сначала увеличивает(уменьшает) значение, и после этого выполняются остальные действия, а при постфиксной форме наоборот - сначала выполнятся все действия, а после увеличится(уменьшится) значение:<br><br><div class=\"code\"><br>static void Main(string[] args)<br>        {<br>           &nbsp;&nbsp; int a = 2, b = 3, c, d = 3;<br>          &nbsp;&nbsp;  c = a + ++b; // c = 6, сначала инкремент, потом сложение<br>          &nbsp;&nbsp;  с = a + d++; // c = 5, сначала сложение, потом инкремент<br>        }</div><br>Везде где можно использовать инкрементацию/декрементацию стоит это делать, так как она работает быстрее оператора сложения/вычитания.<br><br>В Си-шарп также есть возможность использования краткой формы выражения:<br><br><div class=\"code\"><br>static void Main(string[] args)<br>        {<br>           &nbsp;&nbsp; int a = 2, b = 3;<br>            a += b; // равноценно выражению a = a + b;<br>          &nbsp;&nbsp;  a -= b; // равноценно выражению a = a - b;<br>          &nbsp;&nbsp;  a *= b; // равноценно выражению a = a * b;<br>          &nbsp;&nbsp;  a /= b; // равноценно выражению a = a / b;<br>          &nbsp;&nbsp;  a %= b; // равноценно выражению a = a % b;<br>        }</div><br><b>Класс Math</b><br><br>В классе Math собраны все основные тригонометрические функции, функция возведение числа в степень, нахождение квадратного корня и другие.<br><br>Для <b>возведения числа в степень</b>, используется функция Pow([число], [степень]);<br><br><div class=\"code\"><br>static void Main(string[] args)<br>        {<br>          &nbsp;&nbsp;  float a, b = 9;<br>           &nbsp;&nbsp; a = (float) Math.Pow(b, 2); // возводим переменную b в степень 2. Pow() возвращает результат в типе данных double, поэтому мы тут применили явное преобразование. Конечно, можно было обойтись без преобразования, объявив переменную a типа double<br>           &nbsp;&nbsp; Console.WriteLine(a); // выводит на экран число 81<br>          &nbsp;&nbsp;  Console.ReadKey();<br>        }</div><br>Для <b>нахождения квадратного корня</b> служит функция Sqrt([число]); возвращаемый результат также в типе данных double<br><br><div class=\"code\"><br>static void Main(string[] args)<br>        {<br>           &nbsp;&nbsp; double a, b = 9;<br>          &nbsp;&nbsp;  a = Math.Sqrt(b);<br>           &nbsp;&nbsp; Console.WriteLine(a); // выводит на экран число 3<br>           &nbsp;&nbsp; Console.ReadKey();<br>        }</div><br>Для нахождения <b>косинуса</b> и <b>синуса</b> используются cos([угол в радианах]) и sin([угол в радианах]) соответственно.<br><br>180 [градусов] = пи [радиан].<br><br>Чтобы перевести градусы в радианы, необходимо значение в градусах умножить на Пи и разделить на 180. Число Пи объявлено константой в классе Math.<br><br><div class=\"code\"><br>static void Main(string[] args)<br>        {<br>           &nbsp;&nbsp; double a;<br>          &nbsp;&nbsp;  a = Math.Cos(60 * Math.PI / 180); // переводим 60 градусов в радианы<br>         &nbsp;&nbsp;   Console.WriteLine(a); // выводит на экран 0.5<br>         &nbsp;&nbsp;   a = Math.Sin(60 * Math.PI / 180);<br>          &nbsp;&nbsp;  Console.WriteLine(a); // выводит на экран 0.866…<br>          &nbsp;&nbsp;  Console.ReadKey();<br>        }</div><br><b>Логические операторы в Си-шарп</b><br><br>Логические операторы в Си-шарп служат для работы с логическим типом данных (bool), который может принимать только два значения – true или false. Их можно разделить на две категории: простые логические операторы и операторы сравнения.<br><br>В Си-шарп есть следующие логические операторы:<br><br><b>! – оператор «НЕ»</b> является унарным и возвращает противоположное значение операнда.<br><br> <div class=\"code\"><br>static void Main(string[] args)<br>        {<br>         &nbsp;&nbsp;   bool a, b = true, c = false;<br>           &nbsp;&nbsp; a = !b; // a = false<br>          &nbsp;&nbsp;  a = !c; // a = true<br>        }</div><br><b>|| - оператор «ИЛИ»</b> является бинарным и возвращает false только тогда, когда оба операнда равны false, в остальных случаях результат будет true;<br><br><div class=\"code\"><br>static void Main(string[] args)<br>        {<br>           &nbsp;&nbsp; bool a, bTrue = true, bFalse = false;<br>          &nbsp;&nbsp;  a = bFalse || bFalse; // a = false<br>          &nbsp;&nbsp;  a = bFalse || bTrue; // a = true<br>          &nbsp;&nbsp;  a = bTrue || bFalse; // a = true<br>          &nbsp;&nbsp;  a = bTrue || bTrue; // a = true<br>        }</div><br><b>&amp;&amp; - оператор «И»</b> является бинарным и возвращает true только тогда, когда оба операнда равны true, в остальных случаях результат будет false;<br><br><div class=\"code\"><br>static void Main(string[] args)<br>        {<br>          &nbsp;&nbsp;  bool a, bTrue = true, bFalse = false;<br>          &nbsp;&nbsp;  a = bFalse &amp;&amp; bFalse; // a = false<br>          &nbsp;&nbsp;  a = bFalse &amp;&amp; bTrue; // a = false<br>          &nbsp;&nbsp;  a = bTrue &amp;&amp; bFalse; // a = false<br>          &nbsp;&nbsp;  a = bTrue &amp;&amp; bTrue; // a = true<br>        }</div><br>К операторам сравнения относятся:<br><br><table border=\"1\" cellpadding=\"2\" style=\"border-collapse:collapse;\"><tbody><tr><th>Оператор</th><th>Название</th></tr><tr><td>&gt;</td><td>больше</td></tr><tr><td>&lt;</td><td>меньше</td></tr><tr><td>&gt;=</td><td>больше или равно</td></tr><tr><td>&lt;=</td><td>меньше или равно</td></tr><tr><td>==</td><td>равно</td></tr><tr><td>!=</td><td>неравно</td></tr></tbody></table><br><div class=\"code\"><br>static void Main(string[] args)<br>        {<br>          &nbsp;&nbsp;  bool a;<br>          &nbsp;&nbsp;  int b = 2, c = 3, d = 2;<br>          &nbsp;&nbsp;  a = b &gt; c; // a = false<br>          &nbsp;&nbsp;  a = b &lt; c; // a = true<br>          &nbsp;&nbsp;  a = b &gt;= c; // a = false<br>          &nbsp;&nbsp;  a = b &gt;= d; // a = true<br>          &nbsp;&nbsp;  a = b == c; // a = false<br>          &nbsp;&nbsp;  a = b == d; // a = true<br>          &nbsp;&nbsp;  a = b != c; // a = true<br>        }</div></span>",
      questions: "<h2>Контрольные вопросы к разделу 1</h2>" +
      "<br><br>1. Что представляет собой переменная?, константа?" +
      "<br><br>2. Что такое ссылочный тип данных?" +
      "<br><br>3. Что такое стек?, куча?" +
      "<br><br>4. Перечислите основные арифметические операции в C#." +
      "<br><br>5. Какой класс отвечает за особые математические преобразования?" +
      "<br><br>6. Перечислите операторы сравнения и логические операторы.",
      tasks: "<h2>Практические задачи к разделу 1</h2>" +
      "<br><br>Задача 1. Дан прямоугольный треугольник с катетами а=5, b=7. Найдите площадь треугольника, s=?. Используя теорему Пифагора, найдите длину гипотенузы, с=?. Кроме этого, найдите длину гипотенузы еще и с помощью теоремы косинусов.<br>" +
      "<br>Вариант решения:" +
      "<pre class=\"code\"> <br>            double x = 5, y = 7, d1, d2, S;<br>            S = x * y / 2;<br>            Console.WriteLine(\"1.Площадь(S) прямоугольного треугольника равна: \" + S + \".\");<br>            d1 = Math.Pow(x, 2) + Math.Pow(y, 2);<br>            d1 = Math.Sqrt(d1);<br>            Console.WriteLine(\"2.Гипотенуза(d1) через теорему Пифагора равна: \" + d1 + \".\");<br>            d2 = Math.Pow(x, 2) + Math.Pow(y, 2) - 2 * x * y * Math.Cos(90 * Math.PI / 180);<br>            Console.WriteLine(\"3.Гипотенуза(d2) через теорему синусов равна: \" + d2 + \".\");<br>            //Ответ:<br>            string otvet = \"Ответ: S=\" + S + \" ; \" + \"d1=\" + d1 + \" ; \" + \"d2=\" + d2 + \".\";<br>                       Console.WriteLine(otvet);<br>            Console.ReadKey();<br><br></pre>" +
      "<br><br>Задача 2. Дан цилиндр. Запросите у пользователя ввести длину и радиус основания. Выведите площадь поверхности и объем цилиндра." +
      "<br><br>Задача 3. Даны два треугольника. Запросите у пользователя ввести значения трех сторон обоих треугольников. Выведите информацию о подобии этих треугольников.",
    },

    {
      title: "Раздел 2: Условные операторы, массивы, циклы в C#",
      materials: "" +
      "<span><h3>Условные операторы в Си-шарп. Тернарный оператор </h3>Условные операторы служат для ветвления программы. В зависимости от некоторого условия выполняется тот или другой набор команд. <br><br>В Си-шарп есть три условных оператора: «if-else», «switch» и «?:» - тернарный оператор.<br><br><b>Оператор «if-else»</b><br><br>Данный оператор имеет следующую структуру:<br><br><div class=\"code\">if ([условное выражение])<br>{<br>&nbsp;&nbsp;\tБлок кода, который нужно выполнить при удовлетворении условия, &nbsp;&nbsp;[условное выражение] = true (истина)<br>}<br>else<br>{<br>\t&nbsp;&nbsp;Блок кода, который нужно выполнить при неудовлетворении условия, &nbsp;&nbsp;[условное выражение] = false (ложь)<br>}</div><br><br>Часть else не является обязательной и может отсутствовать.<br><br>Пример использования оператора «if-else» в программе, которая проверяет вводимое число на чётность:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>    &nbsp;&nbsp;        int a;<br>    &nbsp;&nbsp;        Console.WriteLine(\"Введите число:\");<br>     &nbsp;&nbsp;       a = Convert.ToInt32(Console.ReadLine()); // вводим данные с клавиатуры*<br>      &nbsp;&nbsp;      if (a % 2 == 0) //проверяем число на чётность путем нахождения остатка от деления числа на 2<br>          &nbsp;&nbsp;  {<br>              &nbsp;&nbsp;&nbsp;&nbsp;  Console.WriteLine(\"Число \" + a + \" - чётное\");<br>         &nbsp;&nbsp;   }<br>         &nbsp;&nbsp;   else<br>         &nbsp;&nbsp;   {<br>           &nbsp;&nbsp;&nbsp;&nbsp;     Console.WriteLine(\"Число \" + a + \" - нечётное\");<br>         &nbsp;&nbsp;   }<br>         &nbsp;&nbsp;   Console.ReadKey();<br>        }</div><br>* Функция Console.ReadLine() позволяет ввести данные с клавиатуры. Данные вводятся как строка, а так как нужно число, мы преобразовываем ее в числовой тип. Для преобразования мы используем функцию Convert.ToInt32().<br><br>Если после if или else необходимо выполнить лишь одну команду, фигурные скобки можно опускать:<br><br>if ([условное выражение])<br>[команда1] // команда1 выполнится лишь если условное выражение истинно<br>[команда2]// команда2 выполнится в любом случае<br><br>Оператор if может иметь несколько условий:<br><br>if ([логическое выражение1])<br>{блок1}<br>else if ([логическое выражение2])<br>{блок2}<br>else <br>{блок3}<br><br>Пример программы, которая определяет, какое из двух введенных чисел больше:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>  &nbsp;&nbsp;          int a, b;<br>  &nbsp;&nbsp;          Console.WriteLine(\"Введите первое число:\");<br>  &nbsp;&nbsp;          a = Convert.ToInt32(Console.ReadLine());<br>  &nbsp;&nbsp;          Console.WriteLine(\"Введите второе число:\");<br>  &nbsp;&nbsp;          b = Convert.ToInt32(Console.ReadLine());<br>    &nbsp;&nbsp;        if (a &gt; b)<br>        &nbsp;&nbsp;&nbsp;&nbsp;        Console.WriteLine(\"Первое число больше второго\");<br>       &nbsp;&nbsp;     else if (a &lt; b)<br>        &nbsp;&nbsp;&nbsp;&nbsp;        Console.WriteLine(\"Второе число больше первого\");<br>     &nbsp;&nbsp;       else<br>          &nbsp;&nbsp;&nbsp;&nbsp;      Console.WriteLine(\"Числа равны\");<br><br>          &nbsp;&nbsp;  Console.ReadKey();<br>        }</div><br>Логическое выражение может быть сложнее. Здесь и используются логические операторы «!», «||» и «&amp;&amp;».<br><br>Пример программы  которая дает совет, что делать, в зависимости от температуры на дворе:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>  &nbsp;&nbsp;          int t;<br>  &nbsp;&nbsp;          Console.WriteLine(\"Введите температуру во дворе\");<br>  &nbsp;&nbsp;          t = Convert.ToInt32(Console.ReadLine());<br>  &nbsp;&nbsp;          if (t &lt; -20 || t &gt; 40) //если температура меньше -20 или больше 40<br>   &nbsp;&nbsp;&nbsp;&nbsp;             Console.WriteLine(\"Вам лучше посидеть дома!\");<br>   &nbsp;&nbsp;         else<br>     &nbsp;&nbsp;&nbsp;&nbsp;           Console.WriteLine(\"Можете идти гулять\");<br>      &nbsp;&nbsp;      Console.ReadKey();<br>        }</div><br><b>Оператор switch</b><br><br>В некоторых случаях удобно использовать условный оператор «switch» вместо «if-else». Он имеет следующую структуру:<br><br>switch (выражение)<br>{<br>  &nbsp;&nbsp;    case значение1: <br>&nbsp;&nbsp;&nbsp;&nbsp;        блок1;<br>  &nbsp;&nbsp;&nbsp;&nbsp;      break;<br>    &nbsp;&nbsp;  case значение2: <br>   &nbsp;&nbsp;&nbsp;&nbsp;     блок2;  <br>   &nbsp;&nbsp;&nbsp;&nbsp;     break;<br>   &nbsp;&nbsp;&nbsp;&nbsp;     ...  <br>    &nbsp;&nbsp;  case значениеN: <br>   &nbsp;&nbsp;&nbsp;&nbsp;     блокN;  <br>    &nbsp;&nbsp;&nbsp;&nbsp;    break;  <br>    &nbsp;&nbsp;  default:  <br>    &nbsp;&nbsp;&nbsp;&nbsp;    блокN+1;<br>    &nbsp;&nbsp;&nbsp;&nbsp;   break;<br>}<br><br>Выражение сравнивается последовательно со значениями. Если выражение равно значению – выполняется соответственный блок кода и при достижении ключевого слова break оператор switch заканчивает работу. Если выражение не будет соответствовать ни одному значению, тогда выполнится блок после default.<br><br>Пример программы с использованием switch, которая выводит на экран название дня недели соответственно вводимому порядковому номер дня:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>  &nbsp;&nbsp;          int a;<br>  &nbsp;&nbsp;          Console.WriteLine(\"Введите порядковый номер дня недели:\");<br> &nbsp;&nbsp;           a = Convert.ToInt32(Console.ReadLine());<br>&nbsp;&nbsp;            switch (a)<br>  &nbsp;&nbsp;          {<br>     &nbsp;&nbsp;&nbsp;&nbsp;           case 1:<br>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              Console.WriteLine(\"Понедельник\");<br>         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           break;<br>        &nbsp;&nbsp;&nbsp;&nbsp;        case 2:<br>      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;              Console.WriteLine(\"Вторник\");<br>       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             break;<br>       &nbsp;&nbsp;&nbsp;&nbsp;         case 3:<br>       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;             Console.WriteLine(\"Среда\");<br>     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               break;<br>       &nbsp;&nbsp;&nbsp;&nbsp;         case 4:<br>        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            Console.WriteLine(\"Четверг\");<br>        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            break;<br>       &nbsp;&nbsp;&nbsp;&nbsp;         case 5:<br>         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           Console.WriteLine(\"Пятница\");<br>          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          break;<br>          &nbsp;&nbsp;&nbsp;&nbsp;      case 6:<br>         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           Console.WriteLine(\"Суббота\");<br>         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           break;<br>         &nbsp;&nbsp;&nbsp;&nbsp;       case 7:<br>         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           Console.WriteLine(\"Воскресенье\");<br>         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;           break;<br>        &nbsp;&nbsp;&nbsp;&nbsp;        default :<br>          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          Console.WriteLine(\"Ошибка\");<br>          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;          break;<br>        &nbsp;&nbsp;&nbsp;&nbsp;    }<br>      &nbsp;&nbsp;&nbsp;&nbsp;      Console.ReadKey();<br>        }</div><br><b>Тернарный оператор «?:»</b><br><br>Этот оператор используется для сокращения объема кода. Им можно заменять простые по сложности операторы if-else. Тернарный оператор имеет такую структуру:<br><br>логическое выражение ? выражение1 : выражение2<br><br>Сначала вычисляется логическое выражение. Если оно истинно, то вычисляется выражение1, в противном случае - вычисляется выражение2.<br><br>Пример использования тернарного оператора «?:» в той же программе для проверки числа на чётность:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>  &nbsp;&nbsp;          int a;<br> &nbsp;&nbsp;           Console.WriteLine(\"Введите число:\");<br>   &nbsp;&nbsp;         a = Convert.ToInt32(Console.ReadLine());<br>   &nbsp;&nbsp;         Console.WriteLine( a % 2 == 0 ? \"Число чётное\" : \"Число нечётное\" );<br>    &nbsp;&nbsp;        Console.ReadKey();<br>        }</div><br>«?:» также можно использовать для присваивания значений. Пример программы, которая находит большее число из двух вводимых:<br><br> <div class=\"code\">       static void Main(string[] args)<br>        {<br>     &nbsp;&nbsp;        int a, b, max;<br>     &nbsp;&nbsp;        Console.WriteLine(\"Введите первое число:\");<br>     &nbsp;&nbsp;        a = Convert.ToInt32(Console.ReadLine());<br>     &nbsp;&nbsp;        Console.WriteLine(\"Введите второе число:\");<br>      &nbsp;&nbsp;       b = Convert.ToInt32(Console.ReadLine());<br>     &nbsp;&nbsp;        max = a &gt; b ? a : b;            <br>        }</div></span>" +
      "<span><h3>Массивы в Си-шарп. Класс List </h3><b>Массив</b> – это набор однотипных данных, которые располагаются в памяти последовательно друг за другом. Доступ к элементам массива осуществляется по индексу (номеру) элемента. Массив может содержать элементы любого типа данных, можно даже создавать массив массивов (ступенчатый массив). Количество элементов в массиве называется размером массива. Массивы относятся к ссылочным <a style=\"color:#0000aa\" href=\"http://mycsharp.ru/post/7/2013_04_15_peremennye_tipy_dannyx_konstanty_v_si-sharp.html\" target=\"_blank\">типам данных</a>.<br><br>Массивы в Си-шарп могут быть одномерными и многомерными. <br><br><b>Одномерные массивы</b><br><br>Одномерный массив по-другому еще называется вектором, и для доступа к его элементам используется только один индекс. Выглядит вектор примерно так:<br><br><img src=\"http://mycsharp.ru/images/vector.png\" alt=\"одномерный массив в Си-шарп\"><br><br>В Си-шарп объявление массива имеет такую структуру:<br><br>тип[] имя_массива = new тип[размер массива];<br><br>Пример:<br><br><div class=\"code\">int[] array = new int[5]; // создаем массив целых чисел<br>string[] seasons = new string[4] {\"зима\",\"весна\",\"лето\",\"осень\"}; //объявление массива строк и его инициализация значениями</div><br>Если происходит инициализация, оператор new можно упускать:<br><br><div class=\"code\">string[] seasons = {\"зима\",\"весна\",\"лето\",\"осень\"}; //корректно<br></div><br>Доступ к элементам осуществляется по индексу. Следует помнить, что индексация начинается с нуля – первый элемент массива имеет индекс 0, а последний n-1, где n – размер массива.<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>   &nbsp;&nbsp;         int[] numbers = new int[5];<br>     &nbsp;&nbsp;       numbers[0] = 5;<br>       &nbsp;&nbsp;     numbers[1] = 2;<br>       &nbsp;&nbsp;     numbers[4] = 3;<br>       &nbsp;&nbsp;     numbers[5] = 2; // ошибка, индекс вне рамок массива<br>        }</div><br>В качестве массива можно представить, например, список студентов в группе (имена), показатели температуры воздуха за последние несколько дней и так далее.<br><br><b>Многомерные массивы</b><br><br>Одним из случаев многомерного массива служит двумерный массив (матрица). В матрице для доступа к элементам необходимо использовать два индекса.<br><br><img src=\"http://mycsharp.ru/images/matrix.png\" alt=\"многомерный массив в Си-шарп\"><br><br>Количеством индексов, используемых для доступа к элементам массива называется <b>размерность массива</b>.<br><br><div class=\"code\">int[,] numbers1 = new int[2, 2]; // объявление двумерного массива<br>int[,,] numbers2 = new int[2, 2 ,3]; // объявление трехмерного массива<br>int[,] numbers3 = new int[3, 2] { {6, 0}, <br>\t\t\t\t    {5, 7}, <br>\t\t\t\t    {8, 9} }; // инициализация двумерного массива<br></div><br>Элементу массива numbers1 с координатами 1,1 присвоим значение 8:<br>numbers1[1, 1] = 8;<br><br>Многомерные массивы используются гораздо реже одномерных.<br><br>Приведу немного бредовый пример данных, которые можно было бы представить в качестве двумерного массива:<br><br>Есть матрица 7*4. Строки, которых семь, будут соответствовать дням недели, а 4 столбца - времени дня (00:00, 06:00, 12:00, 18:00). В качестве данных будет температура воздуха.<br><br>Значение температуры с координатами 2,3 будет соответствовать температуре в среду в 18:00. На практике, конечно, такие данные представлялись бы в другом виде, но для примера подойдет.<br><br><b>Ступенчатые (jagged) массивы в Си-шарп</b><br><br>Ступенчатый (jagged) массив – это массив массивов. В нем длина каждого массива может быть разной. Примерно это выглядит так:<br><br><img src=\"http://mycsharp.ru/images/jagged.png\" alt=\"ступенчатый массив в Си-шарп\"><br><br>Пример объявления ступенчатого массива:<br><br><div class=\"code\">  static void Main(string[] args)<br>        {<br>    &nbsp;&nbsp;        int[][] array = new int[3][]; // объявляем массив, который содержит 3 массива<br>      &nbsp;&nbsp;      array [0] = new int[3]; //создание внутреннего массива<br>      &nbsp;&nbsp;      array [1] = new int[2]; <br>       &nbsp;&nbsp;     array [2] = new int[5];<br>}</div><br>Доступ к элементам осуществляется по тому же принципу, как и с многомерными маcсивами, только тут уже участвуют две пары квадратных скобок (продолжение примера выше):<br><br><div class=\"code\">array [0][1] = 5;<br>array [1][1] = 8;<br>array [1][2] = 5; // ошибка, индекс «2» вне границ массива</div><br>Свойство <b>Length</b><br><br>Все массивы являются объектами и у них есть некоторые свойства.<br>Самым полезным для нас будет свойство Length, которое возвращает количество элементов в массиве (во всех размерностях)<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>       &nbsp;&nbsp;     int[] numbers = new int[5];<br>       &nbsp;&nbsp;     int size = numbers.Length;  // size = 5          <br>        }</div><br><b>Класс List</b><br><br>Класс List служит для работы со списками, о чем и говорит его название. Это такой «навороченный» массив. Главное отличие от простого массива в том, что он динамический – вы можете вставлять и удалять элементы в любое время, в то время как в простом массиве размер указывается при создании и сделать его больше или меньше нельзя.<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>       &nbsp;&nbsp;     List&lt;string&gt; teams = new List&lt;string&gt;(); // создание списка<br>      &nbsp;&nbsp;      teams.Add(\"Barcelona\"); // добавление элемента<br>      &nbsp;&nbsp;      teams.Add(\"Chelsea\");<br>       &nbsp;&nbsp;     teams.Add(\"Arsenal\");<br>         &nbsp;&nbsp;   List&lt;string&gt; teams2 = new List&lt;string&gt;() {\"Dynamo\", \"CSKA\" }; // инициализация<br>        }</div><br><b>Добавление элементов</b><br><br>Для добавления элементов в список в нем реализовано несколько методов:<br><br><table border=\"1\" cellpadding=\"2\" style=\"border-collapse:collapse;\"><tbody><tr><th>Метод</th><th>Описание</th></tr><tr></tr><tr><td>Add([элемент])</td><td>добавляет элемент в конец списка</td></tr><tr></tr><tr><td>AddRange([список элементов])</td><td>добавляет в конец списка элементы указанного списка</td></tr><tr></tr><tr><td>Insert([индекс],[элемент])</td><td>вставляет элемент на позицию соответствующую индексу, все элементы «правее» будут сдвинуты на одну позицию</td></tr><tr></tr><tr><td>InsertRange([индекс], [список элементов])</td><td>то же самое, только вставляется множество элементов</td></tr><tr></tr></tbody></table><br><b>Удаление элементов</b><br><br><table border=\"1\" cellpadding=\"2\" style=\"border-collapse:collapse;\"><tbody><tr><th>Метод</th><th>Описание</th></tr><tr></tr><tr><td>Remove([элемент])</td><td>удаляет первое вхождение указанного элемента из списка</td></tr><tr></tr><tr><td>RemoveRange([индекс], [количество])</td><td>удаляет указанное количество элементов, начиная с указанной позиции</td></tr><tr></tr><tr><td>RemoveAt([индекс])</td><td>удаляет элемент, который находится на указанной позиции</td></tr><tr></tr><tr><td>Clear()</td><td>удаляет все элементы списка</td></tr><tr></tr></tbody></table><br>Свойство Count соответствует свойству обычного массива – Length – количество элементов.<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>        &nbsp;&nbsp;    List&lt;string&gt; teams = new List&lt;string&gt;() { \"Inter\", \"Milan\", \"Bayern\", \"Juventus\"};<br>        &nbsp;&nbsp;    teams.Insert(2,\"Barcelona\"); // вставляем в список элемент \"Barcelona\" на позицию 2<br>        &nbsp;&nbsp;    teams.Remove(\"Milan\"); // удаляем первое вхождение элемента \"Milan\" из списка     <br>         &nbsp;&nbsp;   List&lt;string&gt; newTeams = new List&lt;string&gt;() { \"Liverpool\", \"Roma\", \"Borussia\", \"Valencia\" };<br>         &nbsp;&nbsp;   teams.AddRange(newTeams); // добавляем в конец списка элементы списка newTeams<br>        }</div><br>Стоит помнить, что простые массивы работают быстрее, чем списки List. Если в вашей программе не особо важна производительность и вы не работаете с большими количествами данных, то удобнее использовать список, в противном случае нужно использовать простые массивы.</span>" +
      "<span><b>Циклы</b> служат для многократного повторения некоторого фрагмента кода.<br>В Си-шарп есть четыре оператора циклов: for, while, do-while, foreach.<br><br><b>Цикл for</b><br><br>Этот цикл используется тогда, когда наперед известно, сколько повторений нужно сделать. Он имеет следующую структуру:<br><br><div class=\"code\">for (инициализация счетчика; условие продолжения; итерация) <br>{<br> &nbsp;&nbsp;   //блок кода, который будет повторяться<br>}</div><br><br>Пример программы, которая выводит на экран числа 0, 1, 2, 3, 4:<br><br><div class=\"code\"><br>static void Main(string[] args)<br>        {<br>   &nbsp;&nbsp;          for (int i = 0; i &lt; 5; i++) // цикл выполнится 5 раз<br>   &nbsp;&nbsp;          {<br>    &nbsp;&nbsp; &nbsp;&nbsp;             Console.WriteLine(i);<br>     &nbsp;&nbsp;        }<br>        }</div><br>Сначала происходит создание и инициализация счетчика, i=0.  Дальше идет проверка условия ( i &lt; 5), если результат будет «истина», то дальше выполняется блок кода в теле цикла. В конце итерации происходит изменение значения счетчика (в данном примере увеличение на единицу). После этого вновь происходит проверка условия и так далее. Когда условие будет «ложь», цикл работу завершит.<br><br>Пример программы, которая находит и выводит на экран сумму элементов массива:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>     &nbsp;&nbsp;        int[] numbers = { 4, 7, 1, 23, 43 };<br>     &nbsp;&nbsp;        int s = 0;<br>      &nbsp;&nbsp;       for (int i = 0; i &lt; numbers.Length; i++)<br>        &nbsp;&nbsp;     {<br>       &nbsp;&nbsp; &nbsp;&nbsp;          s += numbers[i];<br>        &nbsp;&nbsp;     }<br>        &nbsp;&nbsp;     Console.WriteLine(s);<br>         &nbsp;&nbsp;    Console.ReadKey();<br>        }</div><br>Пример цикла for, когда счетчик уменьшается после каждой итерации:<br><br><div class=\"code\">for (int i = 5; i &gt; 0; i--) //выполнится 5 раз<br>            {<br>          &nbsp;&nbsp;       Console.WriteLine(i);<br>            }</div><br>Счетчик можно изменять не только на единицу. Пример программы, которая выводит чётные числа (по число 50):<br><br><div class=\"code\">for (int i = 0; i &lt;= 50; i+=2) //выполнится 26 раз<br>            {<br>          &nbsp;&nbsp;       Console.WriteLine(i);<br>            }</div><br><b>Цикл while</b><br><br>Слово while переводится, как «пока», что хорошо его характеризует. Он продолжает выполнятся до тех пор, пока «истинно» некоторое условие. Он имеет такую структуру:<br><br><div class=\"code\">while (условие продолжения)<br>{<br>    &nbsp;&nbsp; //блок кода, который будет повторяться<br>}</div><br>Сначала проверяется условие, а дальше выполняется блок кода.<br><br>Пример той же программы, которая выводит на экран числа 0, 1, 2, 3, 4:<br><br><div class=\"code\">            int i = 0;<br>            while (i &lt; 5)<br>            {<br>       &nbsp;&nbsp;          Console.WriteLine(i);<br>       &nbsp;&nbsp;          i++;<br>            }</div><br>Цикл может выполнятся «вечно», если задать всегда истинное условие:<br><br><div class=\"code\">while (true)<br>            {<br>        &nbsp;&nbsp;         Console.WriteLine(\"Вечный цикл\");<br>            }</div><br><b>Цикл do-while</b><br><br>Этот тот же цикл while, только здесь сначала выполняется блок кода, а уже потом идет проверка условия. Это гарантирует хотя бы один проход цикла.<br><br><div class=\"code\">do<br>{<br>    //блок кода, который будет повторяться<br>}<br>while (условие продолжения);</div><br><br>Пример программы, которая не завершит работу, пока с клавиатуры не введут число 5:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>      &nbsp;&nbsp;       int number;<br>     &nbsp;&nbsp;        do<br>      &nbsp;&nbsp;       {<br>     &nbsp;&nbsp; &nbsp;&nbsp;            Console.WriteLine(\"Введите число 5\");<br>      &nbsp;&nbsp; &nbsp;&nbsp;           number = Convert.ToInt32(Console.ReadLine());<br>      &nbsp;&nbsp;       }<br>       &nbsp;&nbsp;      while (number != 5);           <br>        }</div><br>О цикле <b>foreach</b> мы поговорим в <a style=\"color:#0000aa\" href=\"http://mycsharp.ru/post/12/2013_05_19_operator_cikla_foreach_v_si-sharp.html\" target=\"_blank\">отдельном уроке</a>.<br><br><b>Оператор break</b><br><br>Из любого цикла можно досрочно выйти, используя оператор break. Использовать данный оператор есть смысл после удовлетворения некоторого условия, иначе цикл завершится на первой итерации.<br><br>Пример программы, которая проверяет, есть ли в массиве число кратное 13-ти. Найдя такое число, нет смысла дальше проверять остальные элементы массива, и здесь мы используем оператор break:<br><br><div class=\"code\">static void Main(string[] args)<br>        {<br>     &nbsp;&nbsp;        int[] numbers = { 4, 7, 13, 20, 33, 23, 54 };<br>    &nbsp;&nbsp;         bool b = false;<br>     &nbsp;&nbsp;        for (int i = 0; i &lt; numbers.Length; i++)<br>       &nbsp;&nbsp;      {<br>       &nbsp;&nbsp; &nbsp;&nbsp;          if (numbers[i] % 13 == 0)<br>      &nbsp;&nbsp; &nbsp;&nbsp;           {<br>       &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;              b = true;<br>          &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;           break;<br>         &nbsp;&nbsp; &nbsp;&nbsp;        }<br>        &nbsp;&nbsp;     }<br>        &nbsp;&nbsp;     Console.WriteLine(b ? \"В массиве есть число кратное 13\" : \"В массиве нет числа кратного 13\");<br>        &nbsp;&nbsp;     Console.ReadKey();<br>        }</div><br><b>Оператор continue</b><br><br>Данный оператор позволяет перейти к следующей итерации, не завершив до конца текущую.<br><br>Пример программы, которая находит сумму нечетных элементов массива:<br><br> <div class=\"code\">       static void Main(string[] args)<br>        {<br>       &nbsp;&nbsp;      int[] numbers = { 4, 7, 13, 20, 33, 23, 54 };<br>      &nbsp;&nbsp;       int s = 0;<br>       &nbsp;&nbsp;      for (int i = 0; i &lt; numbers.Length; i++)<br>      &nbsp;&nbsp;       {<br>      &nbsp;&nbsp; &nbsp;&nbsp;           if (numbers[i] % 2 == 0)<br>       &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;              continue; //переход к следующей итерации<br>        &nbsp;&nbsp; &nbsp;&nbsp;         s += numbers[i];<br>      &nbsp;&nbsp; &nbsp;&nbsp;       }<br>       &nbsp;&nbsp;      Console.WriteLine(s);<br>       &nbsp;&nbsp;      Console.ReadKey();<br>        }</div></span>",
      questions: "<h2>Контрольные вопросы к разделу 2</h2>" +
      "<br><br>1. Что собой представляет собой конструкция if(){...}else if{...} else {...}?" +
      "<br><br>2. В каких случаях применяется тернарный оператор?" +
      "<br><br>3. Что такое ступенчатый массив?" +
      "<br><br>4. Что такое динамический массив?" +
      "<br><br>5. В каких случаях применяется цикл do{}while();?" +
      "<br><br>6. Как раобтают операторы break; и continue;?",
      tasks:
      "<h2>Практические задачи к разделу 2</h2>" +
      "<br><br>Задача 1. Вывести на экран 20 элементов последовательности 1, 4, 7, 10, 13…<br>" +
      "<br>Вариант решения:" +
      "<p class='code'> static void Main(string[] args) <br>" +
      "{ <br>" +
      "  int a=1; <br>" +
      "  for (int i = 1; i<= 20; i++) { //выполнение до 20 включительно<br>" +
      "    Console.WriteLine($\"i:{i} , a = \" + a); //  вывод i , а<br>" +
      "    a+= 3; // краткая запись а=а+3 <br>" +
      "  } <br>" +
      "  Console.Read();<br>" +
      "}</p>" +
      "Задача 2. Напишите программу, которая будет «спрашивать» правильный пароль, до тех пор, пока он не будет введен. Правильный пароль пусть будет «root».<br>" +
      "<br>Задача 3. Дано два массива одинаковой длины (по 10 элементов). Создайте третий массив, который будет отображать сумму первых двух массивов. Первый элемент третьего массива равен сумме первых элементов двух первых массивов и так далее.",
    },
  ],

  about: "Здравствуйте! <br><br>Вы используете электронный учебно-методический комплекс для подготовки по диспциплине 'Начало программирования на С#'" +
  "<br>Вам предлагается 2 главы для изучения и итоговый тест для проверки усвоенного материала. Для навигации по программе используйте кнопки в панели заголовка. Кнопка слева открывает доступ к меню навигации по разделам курса, кнопка справа со знаком вопроса открывает/закрывает панель, которую вы наблюдаете сейчас." +
  "<br><br>Программа разработана в качестве зачетного задания студентом Кубанского Государственного Университета <br> Факультета Компьютерных Технологий и Прикладной Математики" +
  "<br>Савиновым Александром" +
  "<br><br>svnvav@mail.ru" +
  "<br><br>Краснодар, 2017"
};