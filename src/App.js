import Table from './components/Table.jsx';
import Card from './components/Card.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import bg from './img/bg.svg';
import login from './img/login.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router className="container_box">
      <nav className="nav_container navbar-light justify-content-between">
        <Link className="navbar-brand" to="/">
          <img src={login} width="30" height="30" className="d-inline-block align-top" alt="login" loading="lazy" />
          <span>LOGIN</span>
        </Link>
        {/* <ul> */}
        {/* <li> */}
        {/* <Link to="/login"> */}
        {/* <button type="button" className="btn btn-outline-light">登录</button> */}
        {/* </Link> */}
        {/* </li> */}
        {/* <li> */}
        {/* <Link to="/signup"> */}
        {/* <button type="button" className="btn btn-outline-secondary">注册</button> */}
        {/* </Link> */}
        {/* </li> */}
        {/* </ul> */}
        <div className="dropdown dropleft">
          <button className="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">粽子</button>
          <div className="dropdown-menu menu-containers" aria-labelledby="dropdownMenu2">
            <span className="dropdown-item font-weight-light">个人详情页</span>
            <span className="dropdown-item font-weight-light">简书</span>
            <span className="dropdown-item font-weight-light">EChart</span>
            <div className="dropdown-divider"></div>
            <span className="dropdown-item font-weight-light text-primary">退出</span>
          </div>
        </div>
      </nav>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <div className="row">
              <div className="col-sm col-8 left">
                <img className="bg" src={bg} alt="bg" />
                <button type="button" className="btn btn-primary">写文章</button>
              </div>
              <div className="col-sm col-8">
                <h3 className="content text-center">Table表格演示区域</h3>
                <Table />
              </div>
            </div>
            <hr className="my-4"></hr>
            <Card />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
