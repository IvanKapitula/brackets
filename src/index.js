module.exports = function check(str, bracketsConfig) {
  let arr = bracketsConfig.map(function(item){
    return item.join('');
  }
  );
  let strArray = str.split('');
  for(let k = 0; k < arr.length;k++){
    for(let i = 0; i < strArray.length;i++){
      if(strArray.join('').indexOf(arr[k]) !== -1){
        strArray.splice(strArray.join('').indexOf(arr[k]),2)
      }
    }
  }

  if(strArray.join('') !== ''){
    for(let k = 0; k < arr.length;k++){
      for(let i = 0; i < strArray.length;i++){
        if(strArray.join('').indexOf(arr[k]) !== -1){
          strArray.splice(strArray.join('').indexOf(arr[k]),2)
        }
      }
    }
  }
  if(strArray.join('') !== ''){
    for(let k = 0; k < arr.length;k++){
      for(let i = 0; i < strArray.length;i++){
        if(strArray.join('').indexOf(arr[k]) !== -1){
          strArray.splice(strArray.join('').indexOf(arr[k]),2)
        }
      }
    }
  }
 /*  Comment */
  if(strArray.join('') !== ''){
    for(let k = 0; k < arr.length;k++){
      for(let i = 0; i < strArray.length;i++){
        if(strArray.join('').indexOf(arr[k]) !== -1){
          strArray.splice(strArray.join('').indexOf(arr[k]),2)
        }
      }
    }
  }
  if(strArray.join('') !== ''){
    for(let k = 0; k < arr.length;k++){
      for(let i = 0; i < strArray.length;i++){
        if(strArray.join('').indexOf(arr[k]) !== -1){
          strArray.splice(strArray.join('').indexOf(arr[k]),2)
        }
      }
    }
  }
  if(strArray.join('') !== ''){
    for(let k = 0; k < arr.length;k++){
      for(let i = 0; i < strArray.length;i++){
        if(strArray.join('').indexOf(arr[k]) !== -1){
          strArray.splice(strArray.join('').indexOf(arr[k]),2)
        }
      }
    }
  }
  if(strArray.join('') !== ''){
    for(let k = 0; k < arr.length;k++){
      for(let i = 0; i < strArray.length;i++){
        if(strArray.join('').indexOf(arr[k]) !== -1){
          strArray.splice(strArray.join('').indexOf(arr[k]),2)
        }
      }
    }
  }
  if(strArray.join('') !== ''){
    for(let k = 0; k < arr.length;k++){
      for(let i = 0; i < strArray.length;i++){
        if(strArray.join('').indexOf(arr[k]) !== -1){
          strArray.splice(strArray.join('').indexOf(arr[k]),2)
        }
      }
    }
  }
  if(strArray.join('') === ''){
    return true;
  } else {
return false;
  }
  // your solution
}
