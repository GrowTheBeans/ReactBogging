import React from 'react';

class PriceList extends React.Component {
  render() {
    const {PriceList} = this.props
    return (
      <ul>
        {
          PriceList.map(item => <li key={item.id}>{item.title}</li>)
        }
      </ul>
    )
  }
}

export default PriceList;
