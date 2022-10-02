
//функция JavaScript, которая переворачивает число.

function reverse(num){
    let a=String(num);
    let b='';
    for(i=a.length-1;i>=0;i-- ){
        b+=a[i]       
        
    }
    console.log(b);
}

reverse(123456789);
reverse(111222333);



// функция JavaScript, чтобы получить имя функции.




function returnName(num) {
	console.log((num).name);
}

returnName(reverse);
returnName(name1);
returnName(name2);



function name1(){

}
function name2(){
    
}