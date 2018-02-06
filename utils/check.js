const checkPhone = target =>{
  const pattern = /0?(13|14|15|18)[0-9]{9}/;
  return pattern.test(target);
}


module.exports = {
  checkPhone: checkPhone
}
