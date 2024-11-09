for(i=1;i<products.length;i++){
    document.getElementById('select1').innerHTML +=`
    <option value=${i}>${products[i].title} </option>
    `
}
for(i=1;i<products.length;i++){
    document.getElementById('select2').innerHTML +=`
    <option value=${i}>${products[i].title} </option>
    `
}

function item1(a){
    let select2=document.getElementById("select2").value;
    if(a!=select2){
    document.getElementById('img1').src=products[a].image;
   document.getElementById('brand1').innerHTML=products[a].brand;
    document.getElementById('dollar1').innerHTML="$" + products[a].dollar;
    document.getElementById('desc1').innerHTML=products[a].description;
    }
    else{
        document.getElementById('img1').src=products[0].image;
        document.getElementById('brand1').innerHTML=products[0].brand;
         document.getElementById('dollar1').innerHTML=products[0].dollar;
         document.getElementById('desc1').innerHTML=products[0].description;
    }
}


function item2(a){
    let select1=document.getElementById("select1").value;
    if(a!=select1){
        document.getElementById('img2').src=products[a].image;
    document.getElementById('brand2').innerHTML=products[a].brand;
    document.getElementById('dollar2').innerHTML="$" + products[a].dollar;
    document.querySelector('.desc2').innerHTML=products[a].description; 
    }
    else{
        document.getElementById('img2').src=products[0].image;
        document.getElementById('brand2').innerHTML=products[0].brand;
        document.getElementById('dollar2').innerHTML= products[0].dollar;
        document.querySelector('.desc2').innerHTML=products[0].description; 
    }
}




