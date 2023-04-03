const getResFromMaskAndStr = (str,mask) => {
  let res = 0
  let current = parseInt(str[0])
  for(let i = 0; i < mask.length; i ++){
    if(!parseInt(mask[i])){
      current = current * 10 + parseInt(str[i + 1])
      continue
    }
    res += current
    current = parseInt(str[i + 1])
    current = mask[i] === '2' ? -current : current
  }
  res += current
  return res
}

const getStringFromMaskAndStr = (str,mask) => {
  let res = str[0]
  for(let i = 0; i < mask.length; i++){
    switch(mask[i]){
      case '1':
        res += '+'
        break
      case '2':
        res += '-'
        break
      default:
    }
    res += str[i + 1]
  }
  return res
}
const getStrings = (str,success) => {
  const resArr = []
  for(let i = 0; i < 3**(str.length -1);i ++){
    let mask = i.toString(3)
    while(mask.length < str.length - 1){
      mask = '0' + mask
    }
    const res = getResFromMaskAndStr(str,mask)
    if(res === success){
      resArr.push(getStringFromMaskAndStr(str,mask))
    }
  }
  return resArr
}

console.log(getStrings('9876543210',200))