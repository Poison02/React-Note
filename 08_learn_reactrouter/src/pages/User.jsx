import React, {PureComponent} from 'react'
import {withRouter} from "../hoc";

class User extends PureComponent {
  render() {
    const {router} = this.props
    const {query} = router
    return (
      <div>
        <h1>User Page: {query.name}-{query.age}</h1>
      </div>
    )
  }
}

export default withRouter(User)
