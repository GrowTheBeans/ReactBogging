import React from "react";

const PriceList = ({ PriceList }) => {
  return (
    <>
      <ul className="list-group">
        {PriceList.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item.id}
          >
            <span className="badge badge-primary col-1">
              {item.category.name}
            </span>
            <span className="col-4">{item.title}</span>
            <span className="col-2 font-weight-bolder">
              {item.category.type === "imooc" ? "+" : "-"}
              {item.price}元
            </span>
            <span className="col-2">{item.dete}</span>
            <button
              type="button"
              className="col-1 btn btn-outline-primary btn-sm"
            >
              编辑
            </button>
            <button
              type="button"
              className="col-1 btn btn-outline-danger btn-sm"
            >
              删除
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="my-4 btn btn-outline-secondary btn-sm btn-lg btn-block">创建新的记账记录</button>
    </>
  );
};

export default PriceList;
