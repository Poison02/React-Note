import {useLocation, useNavigate, useParams, useSearchParams} from "react-router-dom"

function withRouter(WrapperComponent) {
  return function (props) {
    // 导航
    const navigate = useNavigate()
    // 动态路由 detail/:id
    const params = useParams()
    // 查询字符串 use?name=hhh&age=18
    const location = useLocation()
    const [searchParams] = useSearchParams()
    const query = Object.fromEntries(searchParams)
    const router = { navigate, params, location, query }

    return <WrapperComponent {...props} router={router}/>
  }
}

export default withRouter
