/**
 * 设置存储方式 使用 localStorage 进行存储 （永久保存在浏览器中）
 * 四个API
 * 1: 使用 setItem 进行添加一个数据
 * 2：使用 getItem 进行获取一个数据
 * 3：使用 removeItem 进行移除
 * 4：使用 clear 移除所有
 */


export function getStorage() {
  const dataStr = localStorage.getItem('todoList');
  return JSON.parse(dataStr) || [];     // 把字符串转换成字符串， 可能为空
}

export function setStorage(item, id) {
  const listData = JSON.parse(localStorage.getItem('todoList')) || [];
  if (id) {
    listData.splice(item, 1)
  } else {
    listData.push(item)
  }
  localStorage.setItem('todoList', JSON.stringify(listData))
  return listData
}

