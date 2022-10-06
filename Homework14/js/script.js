
let obj1 = {
    name: 'Dima',
    age: 20,
    hair: 'white',
    habitats:{
        isSmoking: false,
        isDrinking: true,
        isGay: true,
        isLearning: true,
    },
};


let obj2 = {
    name: 'Dima',
    age: 20,
    hair: 'white',
    habitats:{
        isSmoking: false,
        isDrinking: true,
        isGay: true,
        isLearning: true,
    },
};



function compare(a,b){

    let keysObj1 = String(Object.keys(a))
    let keysObj2 = String(Object.keys(b))
    let valuesObj1 = String(Object.values(a))
    let valuesObj2 = String(Object.values(b))

    if(keysObj1 == keysObj2){
        if(valuesObj1 == valuesObj2){
            console.log('Обьекты равны !')
        }else{
            console.log('Обьекты не равны, разные значения !')
        }    

    }else{
        console.log('Обьекты не равны, разные ключи !')
    }

}

compare(obj1,obj2)

console.log(obj1 == obj2)
