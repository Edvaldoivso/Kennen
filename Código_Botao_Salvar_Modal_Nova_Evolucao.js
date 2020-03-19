var procura = $("*").hasClass("border-danger") // variavel utilizada para encontar algum campo requerido através da classe "border-danger"

console.log(procura)
if (procura == false) {
    // hasClass retorna true/false quando tenta encontrar algum elemento que contém a classe que foi passada

    //fProp("frmshc.evolucao.main.tabs.fldImagens", "hidden", 0)
    $("li:contains('Imagens')").addClass('cc-fld-lista-item')
    
    

    function valor() {
        
        window.csPacEvo = fProp('frmshc.evolucao.main.tabs.fldEvolucao.FMEevolucao.csPacienteEvolucao', 'value')
        console.log(csPacEvo)
        $(document.getElementById('frmshc.evolucao.main.tabs.fldimagens.core.cspacienteevolucao')).val(csPacEvo);
        //$(document.getElementById('frmshc.evolucao.main.tabs.fldimagens.Core.cnpaciente')).val(wPaciente);
        fProp('frmshc.evolucao.main.tabs.fldImagens.Core.cnPaciente', 'value', wPaciente)


        console.log(wPaciente)
        console.log(wPac)
        
        
         fProp('frmshc.evolucao.main.tabs.fldEvolucao.FMEevolucao.Botoes.Salvar','hidden',0);


    }
    setTimeout(valor, 3000); //foi setada para a função valor ser executada 4 segundos depois de clicar no botão salvar6
    
} else {

    console.log("é true")
    
}