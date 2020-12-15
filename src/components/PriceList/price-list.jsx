import React from 'react';

const PriceList = ({PriceList}) => {
  return (
    <ul>
      {
        PriceList.map(item => <li key={item.id}>{item.title}</li>)
      }
    </ul>
  )
}

export default PriceList;
