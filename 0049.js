var gr = function(strs) {
    let res = {};
    for (const element of strs) {
        let i = element.split('').sort().join('');
        if (res[i] == null){
          res[i] = [element];
        }else{
          res[i].push(element);
        }
            
    }
    return Object.values(res);
};