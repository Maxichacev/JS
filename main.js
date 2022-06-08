let pizzaIngredientes = ["harina","agua","salsa","queso","tomate","aceite","levadura","jamón","morrones","huevo"]

function contarIngredientes(ingredientes) {
    
    let pares = [];
    let impares = [];
for(let i=0;i<pizzaIngredientes.length;i++){
    let count = pizzaIngredientes[i].length;
    if(count%2===0){
        pares.push(pizzaIngredientes[i]);
    }
    else{
        impares.push(pizzaIngredientes[i]);
    }

    return(
    console.log(`Los ingredientes PARES son ${pares}`),
    console.log(`Los ingredientes IMPARES son ${impares}`)
    );

}

}

contarIngredientes(pizzaIngredientes);
