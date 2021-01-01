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

// 只能输入数字和文字
