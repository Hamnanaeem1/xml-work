for(let i=1;i<products.length;i++){
    document.getElementById('select1').innerHTML +=`
    <option value="${i}">${products[i].title}</option>
    `
}

for(let i=1;i<products.length;i++){
    document.getElementById('select2').innerHTML +=`
    <option value="${i}">${products[i].title}</option>
    `
}

function item1(i){
    document.getElementById('img1').src = products[i].image
    document.getElementById('price1').innerHTML = products[i].price
    document.getElementById('brand1').innerHTML = products[i].brand
    document.getElementById('desc1').innerHTML = products[i].desc
}

function item2(i){
    document.getElementById('img2').src = products[i].image
    document.getElementById('price2').innerHTML = products[i].price
    document.getElementById('brand2').innerHTML = products[i].brand
    document.getElementById('desc2').innerHTML = products[i].desc
}