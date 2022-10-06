
let arr =[2,3,5,25,1,78,6,7,105,15,87,-18,16,-3,-14,37,88,99,-15,20];

function maxNum(a){

    let max=a[0];

    for(let i=0;i<a.length;i++){
        if(a[i]>max){
            max= a[i]
        }        
    }

    console.log('Максимальное значение в массиве:',max)
}

maxNum(arr)



function minNum(a){

    let min=a[0];

    for(let i=0;i<a.length;i++){
        if(a[i]<min){
            min= a[i]
        }        
    }
    
    console.log('Минимальное значение в массиве:',min)
}

minNum(arr)

