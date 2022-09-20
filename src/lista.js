let lista = [];


 export function hozzad(szam){
    if(szam < 0){
        console.log("Hibás bevitel")
    }else{
        lista.push(szam);
    }
 }

  export function atlag(){
    let sum = 0;
    for (let i = 0; i < lista.length; i++) {
        sum += lista[i];

        
    }
    return sum / lista.length;
 }