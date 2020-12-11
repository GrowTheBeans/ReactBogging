/**
 * 验证邮箱
 */
/**
 * 
 * @param {邮箱} mail 
 */
export function MailBox(mail) {
  const reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
  return reg.test(mail)
}

export function ValueBox(value) {
  const reg = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5\@\.]/g;
  return reg.test(value);
}
