import React, { Fragment } from 'react';
import { IosCloseCircleOutline } from '../plugin/ionicons.js'

class ListData extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="alert alert-primary w-50 mt-20 d-flex justify-content-between" role="alert">
          <span className="d-flex align-items-center">A simple primary 111 !</span>
          <IosCloseCircleOutline color="#1b315e" fontSize="28px" />
        </div>
        <div className="alert alert-primary w-50 mt-20 d-flex justify-content-between" role="alert">
          <span className="d-flex align-items-center">A simple primary 111 !</span>
          <IosCloseCircleOutline color="#1b315e" fontSize="28px" />
        </div>
        <div className="alert alert-primary w-50 mt-20 d-flex justify-content-between" role="alert">
          <span className="d-flex align-items-center">A simple primary 111 !</span>
          <IosCloseCircleOutline color="#1b315e" fontSize="28px" />
        </div>
        <div className="alert alert-primary w-50 mt-20 d-flex justify-content-between" role="alert">
          <span className="d-flex align-items-center">A simple primary 111 !</span>
          <IosCloseCircleOutline color="#1b315e" fontSize="28px" />
        </div>
      </Fragment>
    )
  }
}

export default ListData;
