

let cart =[]


function addToCard(name,price,amount,category){
    

    let obj ={
        id:Math.floor(Math.random() * 1000),
        name:name,
        price:price,
        amount:amount,
        sum:price*amount,
        category:category,
    }


    cart.push(obj)

   

}


addToCard(name=prompt('Введите наименование товара:'), price=prompt('Введите стоимость товара:'), amount=prompt('Введите количество товара:'), category=prompt('Введите категорию товара:'))


console.log(cart)



