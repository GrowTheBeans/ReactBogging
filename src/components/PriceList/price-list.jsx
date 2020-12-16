import React from 'react';

const PriceList = ({PriceList}) => {
  return (
    <ul className="list-group">
      {
        PriceList.map(item => <li className='list-group-item d-flex justify-content-between align-items-center' key={item.id}>
          <span className='badge badge-primary col-1'>{item.category.name}</span>
          <span className='col-4'>{item.title}</span>
          <span className='col-2 font-weight-bolder'>
            {
              item.category.type === 'imooc' ? '+' : '-'
            }
            {item.price}元
          </span>
          <span className='col-2'>{item.dete}</span>
          <button type="button" className="col-1 btn btn-outline-primary btn-sm" onClick={onEditorItem(33333)}>编辑</button>
          <button type="button" className="col-1 btn btn-outline-danger btn-sm" onClick={onDeleteItem(444)}>删除</button>
        </li>)
      }
    </ul>
  )
}

export default PriceList;
