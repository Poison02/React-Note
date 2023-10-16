import React, {Component} from 'react'
class App extends Component {

  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      isAgree: false,
      hobbies: [
        {value: "sing", text: "唱", isChecked: false},
        {value: "dance", text: "跳", isChecked: false},
        {value: "rap", text: "rap", isChecked: false}
      ],
      fruit: ["orange"]
    }
  }

  handleSubmitClick(event) {
    // 1. 阻止默认的行为
    event.preventDefault()

    // 2. 获取到所有的表单数据，对数据进行组件
    console.log("获取所有的输入内容：")
    console.log(this.state.username, this.state.password)

    console.log("获取爱好：")
    console.log(
      this.state.hobbies
      .filter(item => item.isChecked)
      .map(item => item.value)
    )

    // 3. 以网络请求的方式，将数据传递给服务器(ajax/fetch/axios)
  }

  /*handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }*/

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleCheckChange(event) {
    this.setState({
      isAgree: event.target.checked
    })
  }

  handleHobbiesChange(event, index) {
    const hobbies = [...this.state.hobbies]
    hobbies[index].isChecked = event.target.checked
    this.setState({hobbies})
  }

  handleSelectChange(event) {
    const option = Array.from(event.target.selectedOptions)
    const value = option.map(item => item.value)
    this.setState({fruit: value})

    const values2 = Array.from(event.target.selectedOptions, item => item.value)
    console.log(values2)
  }

  render() {

    const {username, password, isAgree, hobbies, fruit} = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmitClick(e)}>
          <div>
            {/* 用户名和密码 */}
            <label htmlFor="username">
              用户：
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={e => this.handleInputChange(e)}
              />
            </label>

            <label htmlFor="password">
              用户：
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={e => this.handleInputChange(e)}
              />
            </label>
          </div>

          {/*单选checkbox*/}
          <div>
            <label htmlFor="isAgree">
              <input
                type="checkbox"
                id="isAgree"
                checked={isAgree}
                onChange={e => this.handleCheckChange(e)}
              />
              同意协议
            </label>
          </div>

          {/*多选checkbox*/}
          <div>
            {
              hobbies.map((item, index) => {
                return (
                  <label htmlFor={item.value} key={item.value}>
                    <input
                      type="checkbox"
                      id={item.value}
                      checked={item.isChecked}
                      onChange={e => this.handleHobbiesChange(e, index)}
                    />
                    <span>{item.text}</span>
                  </label>
                )
              })
            }
          </div>

          {/* select */}
          <div>
            <select value={fruit} onChange={e => this.handleSelectChange(e)} multiple>
              <option value="orange">橘子</option>
              <option value="apple">苹果</option>
              <option value="banana">香蕉</option>
            </select>
          </div>

          <button type="submit">注册</button>
        </form>
      </div>
    )
  }
}

export default App
