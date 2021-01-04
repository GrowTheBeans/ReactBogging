import Table from './components/Table.jsx';
import Card from './components/Card.jsx';
import Login from './pages/login/Login.jsx';
import Signup from './pages/signup/Signup.jsx';
import ColumnsList from './pages/ColumnsList/ColumnsList.jsx';
import {TodoListHook} from './pages/TodoList/hook/TodoList.jsx';
import Loading from './components/Loading.jsx';
import Create from './pages/create/index.jsx';
import bg from './img/bg.svg';
import { LogoXbox, IosCopy } from './plugin/ionicons.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';
import './App.css';
function App() {
  function article() {
    console.log(this);
  }
  return (
    <Router className="container_box">
      <nav className="nav_container navbar-light justify-content-between">
        <Link className="navbar-brand" to="/">
          <LogoXbox color="#cde6c7" fontSize="32px" rotate={true} />
          <span>LOGIN</span>
        </Link>
        <ul>
          <li>
            <Link to="/login">
              <button type="button" className="btn btn-outline-light">登录</button>
            </Link>
          </li>
          <li>
            <Link to="/signup">
              <button type="button" className="btn btn-outline-secondary">注册</button>
            </Link>
          </li>
        </ul>
        {/* <div className="dropdown dropleft"> */}
        {/* <button className="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown">粽子</button> */}
        {/* <div className="dropdown-menu menu-containers" aria-labelledby="dropdownMenu2"> */}
        {/* <span className="dropdown-item font-weight-light">个人详情页</span> */}
        {/* <span className="dropdown-item font-weight-light">简书</span> */}
        {/* <span className="dropdown-item font-weight-light">EChart</span> */}
        {/* <div className="dropdown-divider"></div> */}
        {/* <span className="dropdown-item font-weight-light text-primary">退出</span> */}
        {/* </div> */}
        {/* </div> */}
      </nav>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <div className="row">
              <div className="col-sm col-8 left">
                <p className="title">
                  <IosCopy fontSize="20px" color="#17a2b8" />
                  <Link to="/todolist" className="badge badge-pill badge-info">TODO展示</Link>
                </p>
                <img className="bg" src={bg} alt="bg" />
                <button type="button" className="btn btn-primary" onClick={article}>写文章</button>
              </div>
              <div className="col-sm col-8">
                <h3 className="content text-center">Table表格演示区域</h3>
                <Table />
              </div>
            </div>
            <hr className="my-4"></hr>
            <Card />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/columns/:id" component={ColumnsList}/>
          <Route path="/todolist" component={TodoListHook} />
          <Route path="/create" component={Create} />
          <Route path='/loading' component={Loading}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
