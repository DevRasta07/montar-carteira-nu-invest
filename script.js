// O argumento "rendaFixa" é o percentual de renda fixa que o investidor deseja ter na sua carteira
// O usuário deve executar o código na página de acompanhamento dos investimentos https://www.nuinvest.com.br/acompanhar/investimentos

function montarCarteira(rendaFixa){
    let capitalText = document.querySelector(".klexzx")
    .innerText
    .replace("R$", "")
    .replace(".", "")
    .replace(",", ".")
    
    let capital = Number(capitalText)
    let percentualRF = rendaFixa / 100

    let parteFixa = (capital * percentualRF).toFixed(2)
    let parteVariavel = (capital - parteFixa).toFixed(2)

    let parteFixaText = parteFixa.replace(".", ",")
    let parteVariavelText = parteVariavel.replace(".", ",")

    console.log(`Você vai investir:\n\n - ${rendaFixa}% em Renda Fixa: R$ ${parteFixaText}\n - ${100-rendaFixa}% em Renda Variável: R$ ${parteVariavelText}`)
}
