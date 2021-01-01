import React, {Fragment, Component} from "react";
import {Link} from "react-router-dom";
import "./TodoList.css";
import Left from "../../img/arrow-left-square.svg";
// import ListData from '../../components/ListData.jsx';
import PriceList from "../../containers/Accounts/PriceList/price-list.jsx";
import {IosCloseCircleOutline} from "../../plugin/ionicons";
import {getStorage, setStorage} from '../../utils/Storage';

class TodoList extends Component {
  state = {
    OnInputValue: '',
    todoList: []
  }
  OnInputValue = (e) => {
    this.setState({
      OnInputValue: e.target.value
    })
  }
  addListItem = () => {
    const {OnInputValue} = this.state
    // const _Obj = {
    //   id: new Date().getTime(),
    //   text: OnInputValue
    // }
    //
    // todoList.push(_Obj)

    this.setState({
      todoList: setStorage({
        id: new Date().getTime(),
        text: OnInputValue
      })
    })
  }
  componentDidMount() {
    this.setState({
      todoList: getStorage() || []
    })
  }

  removeListItem = (id) => {
    // const {todoList} = this.state
    // const newList = todoList.filter(item => item.id !== id)
    this.setState({
      todoList: setStorage(null, id)
    })
  }

  render() {
    const {todoList} = this.state
    return (
      <Fragment>
        <div className="d-flex bd-highlight mb-2">
          <div className="p-2 flex-shrink-1 bd-highlight">
            <Link to="/">
              <img width={30} src={Left} alt="左箭头"/>
            </Link>
          </div>
          <div className="p-2 w-100 bd-highlight text-primary text-center d-flex align-items-center">
            TodoList页面展示
          </div>
        </div>
        <div className="todo-containers p-2">
          <div className="row">
            <div className="col">
              <div className="d-flex bd-highlight">
                <div className="p-2 w-50 bd-highlight">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="请输入相应的文字..."
                    maxLength={10}
                    onChange={this.OnInputValue}
                  />
                </div>
                <div className="p-2 w-20 bd-highlight">
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={this.addListItem}
                  >
                    提交
                  </button>
                </div>
              </div>
              {
                todoList && todoList.map((item, index) => {
                  return (
                    <div key={index} className="alert alert-primary w-50 mt-20 d-flex justify-content-between"
                         role="alert">
                      <span className="d-flex align-items-center">{item.text}</span>
                      <IosCloseCircleOutline
                        color="#1b315e"
                        fontSize="28px"
                        onClick={this.removeListItem.bind(this, item.id)}
                      />
                    </div>
                  )
                })
              }
            </div>
            <div className="col">
              <PriceList/>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TodoList;
