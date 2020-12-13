import React, { Fragment } from 'react';
import octaon from '../img/x-octagon.svg';

class ListData extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="alert alert-primary w-50 mt-20" role="alert">
          A simple primary !
          <img className="close" src={octaon} alt="删除"/>
        </div>
        <div className="alert alert-primary w-50" role="alert">
          A simple primary !
          <img className="close" src={octaon} alt="删除"/>
        </div>
      </Fragment>
    )
  }
}

export default ListData;
