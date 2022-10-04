function reajustarSalario(){
    let salario = parseFloat(document.querySelector("#salarioEntrada").value);
   
    
    let string = ["Salário antes do ajuste: R$ ","Percentual de aumento aplicado: ","Valor do aumento: R$ ","Novo Salário, após aumento: R$ "];

    if(salario<=280){
        let reajuste = salario*0.2
        resposta.innerHTML = `${string[0]}${salario}\n${string[1]}20% \n${string[2]}${reajuste}\n${string[3]}${salario+reajuste}`
    }
    else if(salario<700){
        let reajuste = salario*0.15
        resposta.innerHTML = `${string[0]}${salario}\n${string[1]}15% \n${string[2]}${reajuste}\n${string[3]}${salario+reajuste}`
    }
    else if(salario<1500){
        let reajuste = salario*0.1
        resposta.innerHTML = `${string[0]}${salario}\n${string[1]}10% \n${string[2]}${reajuste}\n${string[3]}${salario+reajuste}`
    }
    else if(salario>=1500){
        let reajuste = salario*0.05
        resposta.innerHTML = `${string[0]}${salario}\n${string[1]}5% \n${string[2]}${reajuste}\n${string[3]}${salario+reajuste}`
    }
    
   
}



