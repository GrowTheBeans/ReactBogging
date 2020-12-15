import PriceList from './components/PriceList/price-list.jsx';
import List from './mock/PriceList.json';
import bg from './images/bg.png';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App_header mb-3">
        <img src={bg} alt="背景图片"></img>
        <h2>React账本项目</h2>
        <p>从设计图到上线，精通组件化思维和组件测试，一步步进行迭代</p>
      </header>
      <div className="container">
        <PriceList PriceList={List}/>
      </div>
    </div>
  );
}

export default App;
