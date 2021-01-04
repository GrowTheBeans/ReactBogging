import PriceList from './components/PriceList/price-list.jsx';
import List from './mock/PriceList.json';
import bg from './images/bg.png';
import { Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App_header mb-4">
        <img src={bg} alt="背景图片"></img>
        <h2>React账本项目</h2>
        <p>从设计图到上线，精通组件化思维和组件测试，一步步进行迭代</p>
      </header>
      <ul className="nav container nav-header justify-content-center">
        <li className="nav-item">
          <Link to="/" className="nav-link active">列表模式</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">图表模式</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">TODO表单</Link>
        </li>
      </ul>
      <div className="jumbotron container border border-info">
        <h1 className="display-12 text-center font-weight-bolder">Keep 记账</h1>
        <p className="lead">实时记录每天和每月账单信息并且做一定的汇总</p>
        <hr className="my-2" />
        <p className="text-secondary font-weight-bolder">选择月份</p>
        <div className="d-flex align-items-center justify-content-between">
          <button type="button" className="btn btn-primary">Primary</button>
          <div className="sum-money text-right align-middle">
            <span className="col px-md-5"><b className="text-info">收入：</b> 90</span>
            <span><b className="text-info">支出：</b> 200</span>
          </div>
        </div>
      </div>
      <div className="container">
        {/* onEditorItem={Editor} onDeleteItem={Delete} */}
        <PriceList PriceList={List} />
      </div>
    </div>
  );
}

export default App;
