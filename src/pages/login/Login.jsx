import { Link } from 'react-router-dom';
import { LogoOctocat } from '../../plugin/ionicons.js';
import './Login.css';

function Login() {
  return (
    <form>
      <h5 className="my-4 text-center">登录我的账号</h5>
      <div className="form-group mb-2 pb-3">
        <label className="mb-3" htmlFor="formGroupExampleInput">邮箱地址</label>
        <input type="text" className="form-control" maxLength="20" placeholder="请输入邮箱地址" />
      </div>
      <div className="form-group mb-2 pb-3">
        <label className="mb-3" htmlFor="formGroupExampleInput">密码</label>
        <input type="password" className="form-control" maxLength="20" placeholder="请输入密码" />
      </div>
      <div className="mb-2">
        <div className="row">
          <div className="col">
            <Link to="/signup" className="text-decoration-none">还没有账户？去注册一个新的吧！</Link>
          </div>
          <div className="col text-right github">
            <LogoOctocat className="align-text-top" beat={true} fontSize="28px" color="#224b8f" />
            <span className="badge badge-light">调转github注册页面</span>
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary pb-3 btn-lg btn-block">登录</button>
    </form>
  )
}

export default Login;
