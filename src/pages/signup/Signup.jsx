import { Link } from 'react-router-dom';
import './Signup.css';

function Signup() {
  return (
    <div className="signup_container">
      <form>
        <h5 className="title my-4 text-center">请注册账户</h5>
        <div className="form-group mb-2 pb-3">
          <label className="mb-3" htmlFor="formGroupExampleInput">邮箱地址</label>
          <input type="text" className="form-control" maxLength="20" placeholder="请输入邮箱地址" />
        </div>
        <div className="form-group mb-2 pb-3">
          <label className="mb-3" htmlFor="formGroupExampleInput">昵称</label>
          <input type="text" className="form-control" maxLength="20" placeholder="请输入昵称" />
        </div>
        <div className="form-group mb-2 pb-3">
          <label className="mb-3" htmlFor="formGroupExampleInput">密码</label>
          <input type="password" className="form-control" maxLength="20" placeholder="请输入密码" />
        </div>
        <div className="form-group mb-2 pb-3">
          <label className="mb-3" htmlFor="formGroupExampleInput">重复密码</label>
          <input type="password" className="form-control" maxLength="20" placeholder="请再次输入密码" />
        </div>
        <div className="pb-8 mb-2">
          <Link className="register" to="/login">已经有账户了？去登录！</Link>
        </div>
        <button type="submit" className="btn btn-primary pb-3 btn-lg btn-block">注册新用户</button>
      </form>
    </div>
  )
}

export default Signup;
