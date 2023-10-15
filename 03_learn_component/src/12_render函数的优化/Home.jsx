import React, {PureComponent} from 'react'

// 使用PureComponent就可以是 只有当前需要用到的props或者state修改了才会重新渲染
class Home extends PureComponent {
  render() {
    const {message} = this.props
    return (
      <div>
        home: {message}
      </div>
    )
  }
}

export default Home
