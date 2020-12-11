import React, { Component, Fragment } from 'react'
import axios from 'axios';
import './index.css';

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      list: []
    })
  }
  componentDidMount() {
    axios.get('/api/columns').then(res => {
      if (res.data.code === 0) {
        const columnsList = res.data.data.list
        this.setState({
          list: columnsList
        })
      }
    })
      .catch(error => {
        return error
      })
  }
  onColumnsList = () => {
    console.log(23)
  }
  render() {
    return (
      <Fragment>
        <div className="row text-center">
          {
            this.state.list.map(item =>
              <div className="col-sm col-6 col-md-4" key={item._id}>
                <div className="card vh-100 shadow p-3 mb-5 bg-white rounded">
                  <img src={item.avatar.url} className="card-img-top rounded-circle border border-info" alt="..." />
                  <p className="h5 font-weight-bolder mt-3 text-info">{item.title}</p>
                  <p className="font-italic text-danger">{item.createdAt}</p>
                  <div className="card-body">
                    <p className="font-weight-light text-secondary">{item.description}</p>
                  </div>
                  <button type="button" className="btn btn-outline-info btn-sm" onClick={this.onColumnsList}>进入专栏</button>
                </div>
              </div>
            )
          }
        </div>
      </Fragment>
    )
  }
}

export default Card;
