//Gif de carregamento da tela para evidenciar a mudanca dos tipos de ação 
_cc.loading.show("Carregando os Medicamentos", 1, "w-Carregando-dados");
  setTimeout(function(){_cc.loading.hide();},1500)
  
fProp("frmshc.Prescricao.Corpo.GridMedicamento.Say","value","<h4>Lista de Medicamentos </h4>")


//Inicia a variavel do where do tipo de prescricao em Medicamento/Dieta
var wPacientePrincipal = fProp("frmshc.Prescricao.Corpo.GridPaciente.cnPaciente","value")


window.wOrigemTP =  '((cnMaterial.cnProdutoTP = 1) and (cnPaciente ='+window.wPacienteWhere+') and (dtFinal >= '+window.wDt+')) or (cnProdutoTP = "1") and (dtFinal >= '+window.wDt+')'
_ccGrd.updateDados(cLower('frmshc.Prescricao.Corpo.GridMedicamento.GridMedicamento', ' ', 'frmshc.Prescricao.Main.ModalMedicamento.DadosPrescricao.ID'));




//window.wCondicaoProduto = 1//Variavel que controla o tipo do medicamento que pode ser usando para cada rotina (1 medicamento / 3 dietas)
window.wCondicaoProduto = 'cnProdutoTP = 1  and not cnProdutoTP = 3 and   cnPrincipioAtivo >= 0 and caProdutoSTS = "S"'
_ccGrd.updateDados('frmshc.Prescricao.Corpo.ModalMedicamento.Grid.grd', ' ', 'frmshc.Prescricao.Corpo.ModalMedicamento.Campos.id');

//CONTROLA AS TELAS
eval(window.wrotinaIncicial)
fProp("frmshc.Prescricao.Corpo.GridMedicamento",'hidden',0)
fProp("frmshc.Prescricao.Corpo",'hidden',0)
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.Buttons.Novo"))).removeClass("hidden",1)
$(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMedicamento.GridMedicamento"))).removeClass("hidden",1)
fProp('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos', 'hidden', 1);
$(document.getElementById(cLower('frmshc.Prescricao.Corpo.MenuLateral.Medicamento'))).css({'background-color': '#BDBDBD'});




//Seta o titulo do botão novo se Dieta ou Medicamento

var wTitulo = $(document.getElementById(cLower("frmshc.prescricao.main.modalmedicamento.buttons.novo"))).has("> i").length
if(wTitulo == 1){
$(document.getElementById(cLower("frmshc.prescricao.main.modalmedicamento.buttons.novo"))).has("> i").text("+ NOVO MEDICAMENTO")
$(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.NovaPrescricao"))).has("> i").text("+ NOVO MEDICAMENTO")
window.wOrigemUso=1

}else{
$(document.getElementById(cLower("frmshc.prescricao.main.modalmedicamento.buttons.novo"))).text("+ NOVO MEDICAMENTO ")
$(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.NovaPrescricao"))).text("+ NOVO MEDICAMENTO")
window.wOrigemUso=1

}


fProp("frmshc.Prescricao.Corpo.ModalMedicamento.fmeTitulo","value","<h4>Medicamento</h4>")

fProp('frmshc.Prescricao.Main.ModalMedicamento.cnMaterial','titulo','Medicamento')

/*----------------- INIBINDO RELATORIO --------*/
$(cLower('[name="frmshc.Prescricao.Corpo.AgendaPrescricao"]')).hide()