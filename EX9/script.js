let numeroMaca = parseFloat(prompt("Quantas maças você vai querer ?"))


if (numeroMaca>=12)

    {document.write(`O valor da compra é de R$${(numeroMaca * 0.25).toFixed(2)}.`)}
    

else
        {document.write(`O valor da compra é de R$${(numeroMaca * 0.30).toFixed(2)}.`)}



    