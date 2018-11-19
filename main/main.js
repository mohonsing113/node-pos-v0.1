module.exports = function main(inputs) {
    var itemList =[]
    for(var i = 0; i <inputs.length; i++){
        var item = find(itemList, inputs[i].barcode);
        if(typeof item != 'undefined'){
            item.count++
        }else{
            itemList.push({barcode:inputs[i].barcode, name:inputs[i].name, count:1, unit:inputs[i].unit, price:inputs[i].price})
        }
    }
    return print(itemList)
};


function find(arr, bar){
      for (var i=0; i<arr.length; i++) {
        if (arr[i].barcode === bar) return arr[i];
      }
}


function print(itemList){
    var text=""
    var total =0;
    text+='***<没钱赚商店>购物清单***\n'
    for(var i = 0; i <itemList.length; i++){
        text+="名称："+itemList[i].name+"，"
        text+="数量："+itemList[i].count+itemList[i].unit+"，"
        text+="单价："+itemList[i].price.toFixed(2)+"(元)，"
        var smallTotal = itemList[i].price*itemList[i].count
        text+="小计："+smallTotal.toFixed(2)+"(元)\n"
        total+=smallTotal
    }
    text+= '----------------------\n' +'总计：'+total.toFixed(2)+'(元)\n' + '**********************'
    return text
}