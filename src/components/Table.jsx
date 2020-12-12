import React, { Fragment } from 'react';
import axios from 'axios';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tabUser: []
    }
  }
  componentDidMount() {
    axios.get('/user').then(res => {
      if (res.status === 200) {
        const tabList = res.data.data;
        this.setState({
          tabUser: tabList
        })
      }
    }).catch(error => {
      return error;
    })
  }
  render() {
    return (
      <Fragment>
        <table className="table table-bordered table-hover">
          <thead className="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">性别</th>
              <th scope="col">积分</th>
              <th scope="col">评分</th>
              <th scope="col">职业</th>
              <th scope="col">财富</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.tabUser.map(item => <tr key={item.id}>
                <th scope="row">{item.id}</th>
                <td>{item.sex}</td>
                <td>{item.experience}</td>
                <td>{item.score}</td>
                <td>{item.classify}</td>
                <td>{item.wealth}</td>
              </tr>)
            }
          </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item active page-link disabled">
              <span>&laquo;</span>
            </li>
            <li className="page-item active">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <span className="page-link">2</span>
            </li>
            <li className="page-item">
              <span className="page-link">3</span>
            </li>
            <li className="page-item">
              <span className="page-link">4</span>
            </li>
            <li className="page-item page-link">
              <span>&raquo;</span>
            </li>
          </ul>
        </nav>
      </Fragment>
    )
  }
}

export default Table;

