//Controla a dinamica da Hidden das telas
eval(window.wrotinaIncicial)
fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Grid','hidden',0)

//Controla a dinamica de destaque dos botões
$(document.getElementById(cLower('frmshc.evolucao.Main.MnuLateral.Paciente'))).css({'background-color': '#BDBDBD'});

/*Apresenta o paciente que está sendo usado na tela*/
window.wPaciente = fProp("frmshc.evolucao.Main.paciente.cnPaciente","value")
var wNmPac =fProp("frmshc.evolucao.Main.paciente.nmPaciente","value")
fProp("frmshc.evolucao.Main.Vizualizador.ViewEvolucao","value","<h4>PACIENTE: " + window.wPaciente +" - "+wNmPac+"</h4>")


//Mostra o Botão de Nova evolução na tela(controle necessário para o carregamento da tela de dados e evitar o problema de carga de FK)
setTimeout(
  function(){ fProp("frmshc.evolucao.Main.CampoEvolucao.Input.Grid.BtnNovo","hidden",0);
    
    _cc.loading.show("Carregando Evoluções", 1, "w-salvando-dados");
  } ,1000)

  setTimeout(function(){_cc.loading.hide();},1000)

/*
//Carrega os modulos de dados da evolução
var wTam = $(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input"))).find("div").length 
var wObjReferenciaDataGrid = "frmshc.evolucao.Main.CampoEvolucao.Input.Grid.grd"
 
if(wTam < 1 ){

fProp("frmshc.evolucao.Main.CampoEvolucao", "DISABLE", 0);
fProp("frmshc.evolucao.Main.Frequencia", "DISABLE", 0);
//$("[data-grd='" + cLower(wObjReferenciaDataGrid) + "'] .cc-tabela-tr-selecionada a").click()
}
*/


AvisoGrid("frmshc.evolucao.Main.Frequencia.Corpo.Campos.id","frmshc.evolucao.main.frequencia.corpo.grd","frmshc.evolucao.Main.Frequencia.Corpo.SayAviso")




//Prepara valor para o grid de Agenda Mult
window.wProfissional= fProp("frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnProfissional","value")
if(wProfissional == ""){
wProfissional = 0;
  
}

//A função de animação causa no objeto um flutuamento sobrepondo todos os objetos da tela 
//animaçao
/*
var div =  $("[name='frmshc.evolucao.main.campoevolucao.input.grid']")
var wHeigth = div.height()
var wWidth = div.width()

div.animate({height: '600px', opacity: '0.4'}, "slow");
div.animate({width: '600px', opacity: '0.8'}, "slow");
div.animate({height: wHeigth, opacity: '0.4'}, "slow");
div.animate({width: wWidth, opacity: '0.9'}, "slow");
*/