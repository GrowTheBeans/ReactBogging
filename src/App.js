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
          <Link to="/" className="nav-link active">Active</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">Link</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">Disabled</Link>
        </li>
      </ul>
      <div className="container">
        {/* onEditorItem={Editor} onDeleteItem={Delete} */}
        <PriceList PriceList={List} />
      </div>
    </div>
  );
}

export default App;
