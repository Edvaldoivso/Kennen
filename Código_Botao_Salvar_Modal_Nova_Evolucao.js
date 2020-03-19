var wProcura = $("*").hasClass("border-danger"); // variavel utilizada para encontar algum campo requerido através da classe "border-danger"
console.log(wProcura);
if (wProcura == false){

    // hasClass retorna true/false quando tenta encontrar algum elemento que contém a classe que foi passada
    $("li:contains('Imagens')").addClass("cc-fld-lista-item");


    var wLoad = document.getElementsByClassName("cc-loading-fade").length
    console.log(wLoad)
                if (wLoad == 0){

                 valor();   
               
    }else{

        setTimeout(valor, 4000); //foi setada para a função valor ser executada 4 segundos depois de clicar no botão salvar6

       

        }
       



   
} else {

    console.log("Campo requerido na tela");

}


                    function valor() {
                        console.log("Encontrei o campo");
                        window.csPacEvo = fProp('frmshc.evolucao.main.tabs.fldEvolucao.FMEevolucao.csPacienteEvolucao', 'value');
                        console.log(csPacEvo);
                        $(document.getElementById('frmshc.evolucao.main.tabs.fldimagens.core.cspacienteevolucao')).val(csPacEvo);
                        $(document.getElementById('frmshc.evolucao.main.tabs.fldimagens.core.cnpaciente')).val(wPaciente);
                        //fProp('frmshc.evolucao.main.tabs.fldImagens.Core.cnPaciente', 'value', wPaciente)
                        console.log(wPaciente);
                       fProp('frmshc.evolucao.main.tabs.fldEvolucao.FMEevolucao.Botoes.Salvar', 'hidden', 0);
                    } //fecha funcao execulta apos terminar a carga da tela.
