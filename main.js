function parImpar(){
    const a = parseInt(prompt("ingresa un numero"));
    const b = parseInt(prompt("ingresa un numero"));
    
    var resultado = a + b;
        

    if(resultado%2==0){
        return "el numero es par " +resultado;
        

    }else{
        return "el numero es impar " +resultado;
    }
    


}
alert(parImpar())


