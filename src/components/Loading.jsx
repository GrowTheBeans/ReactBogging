import React from 'react';
import './index.css';

class Loading extends React.Component {
  render() {
    return (
      <div class="text-center text-primary ">
        <div class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    )
  }
}

export default Loading;
