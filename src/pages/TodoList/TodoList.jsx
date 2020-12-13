import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './TodoList.css';
import Left from '../../img/arrow-left-square.svg';
import ListData from '../../components/ListData.jsx';
import PriceList from '../../containers/Accounts/PriceList/price-list.jsx'

function TodoList() {
  return (
    <Fragment>
      <div className="d-flex bd-highlight mb-2">
        <div className="p-2 flex-shrink-1 bd-highlight">
          <Link to="/">
            <img width={30} src={Left} alt="左箭头" />
          </Link>
        </div>
        <div className="p-2 w-100 bd-highlight text-primary text-center d-flex align-items-center">TodoList页面展示</div>
      </div>
      <div className="todo-containers p-2">
        <div className="row">
          <div className="col">
            <div className="d-flex bd-highlight">
              <div className="p-2 w-50 bd-highlight">
                <input type="text" className="form-control" placeholder="请输入相应的文字..." />
              </div>
              <div className="p-2 w-20 bd-highlight">
                <button type="button" className="btn btn-info disabled">提交</button>
              </div>
            </div>
            <ListData />
          </div>
          <div className="col">
            <PriceList/>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default TodoList;
