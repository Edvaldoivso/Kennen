eval(window.wBloqueioLateral)
$(document.getElementById(cLower('frmshc.AvaliacaoPacientes.Main.Avaliacao.Menu.Avaliacao'))).css({'background-color': '#BDBDBD'});
fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core","hidden",0);
/* HIDDEN GRID */
fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Grid","hidden",1);
//AvisoGrid("frmshc.avaliacaopacientes.main.avaliacao.core.avaliacao.ID","frmshc.AvaliacaoPacientes.Main.Avaliacao.Grid.grd","frmshc.AvaliacaoPacientes.Main.Avaliacao.Grid.SayAvaliação")


/*Insere os dados do paciente em uso na barra superior do systema */

var wCnPac = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente","value")
var wAvalPaciente = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.nmPaciente","value")
  fProp("frmshc.AvaliacaoPacientes.fmeInformacao.sayT","value","<h4>PACIENTE: "+wCnPac +" -  " + wAvalPaciente +"    </h4>");
  fProp('frmshc.AvaliacaoPacientes.fmeInformacao','hidden',0)

fProp("frmshc.avaliacaopacientes.main.avaliacao.core.avaliador.cnProfissionalAvaliador","readonly",1);
$(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.avaliador.cnProfissionalAvaliador"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnReligiaoPaciente"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.cnProfissaoIndicacao"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.nmProfissionalIndicacao"))).attr('disabled','disabled')

//Dinamica de controle de disabled em produção
/*
var wTamObj1 = $(document.getElementById(cLower("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Cuidador"))).find("div").length

var wTamObj2 = $(document.getElementById(cLower("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Solicitante"))).find("div").length

var wTamObj3 = $(document.getElementById(cLower("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente"))).find("div").length

var wTamObj4 = $(document.getElementById(cLower("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.IndicacaoClinica"))).find("div").length

var wTamObj5 = $(document.getElementById(cLower("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core"))).find("div").length


if(wTamObj5 >= 192){

console.log(wTamObj5)
console.log("Maiores que 0")
$("[data-grd='" + cLower("frmshc.AvaliacaoPacientes.Main.Avaliacao.Grid.grd") + "'] .cc-tabela-tr-selecionada a").click()
}else{
fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core","disable",0);  

console.log("Menores que 0")

//$("[data-grd='" + cLower("frmshc.AvaliacaoPacientes.Main.Avaliacao.Grid.grd") + "'] .cc-tabela-tr-selecionada a").click()


setTimeout($(document.getElementById(cLower("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core"))).ready(function(){console.log("Terminou?");
  
  console.log(wTamObj5 +"Tamanho else")
  
}),2000)

//--------------------------------CLICK MONDAL PLANO----

  
  
}*/
  /* RICHARD 09-10-2020 EVENTO ASSISTANCIAIS*/
  _ccEvt.inicia.referencia("frmshc.AvaliacaoPacientes.Main.Avaliacao.EventoAssistencial","","frmshc.AvaliacaoPacientes.Main.Avaliacao.Grid.BtnAvaliacao");
  /*  CODIGO DO PACIENTE   */
  $("[name='formulario-paciente']").val(fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente","VALUE"));
  /*  CODIGO DA EVOLUCAO,AVALIACAO,PRONTUARIO   */
  $("[name='formulario-item']").val(fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Solicitante.cnAvaliacao","VALUE"));
  /*  Código da Transação de origem (1-Prontuário; 2-Avaliação; 3-Evolução; 4-Central de Urgência; 5-....) */
  $("[name='formulario-transacao']").val(2);
  
  
  window.FcollapseVermelho(2)