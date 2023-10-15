import React, {PureComponent} from 'react';

class App extends PureComponent {
  constructor() {
    super();

    this.state = {
      books: [
        {name: "你不知道JS", price: 99, count: 1},
        {name: "JS高级程序设计", price: 88, count: 1},
        {name: "React高级设计", price: 78, count: 2},
        {name: "Vue高级设计", price: 95, count: 3},
      ],
      friend: {
        name: "kobe"
      },
      message: "Hello World"
    }
  }

  addNewBook() {
    const newBook = { name: "Angular高级设计", price: 88, count: 1 }

    const books = [...this.state.books]
    books.push(newBook)
    this.setState({books: books})
  }

  addBookCount(index) {
    const books = [...this.state.books]
    books[index].count++
    this.setState({books: books})
  }

  render() {
    const {books} = this.state
    return (
      <div>
        <h2>数据列表</h2>
        <ul>
          {
            books.map((item, index) => {
              return (
                <li key={index}>
                  <span>name:{item.name}-price:{item.price}-count:{item.count}</span>
                  <button onClick={e => this.addBookCount(index)}>+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e => this.addNewBook()}>添加新书籍</button>
      </div>
    );
  }
}

export default App;
