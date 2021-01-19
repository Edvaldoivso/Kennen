//Dinamica de Hidden de Telas
fProp('frmshc.evolucao.Main.paciente','hidden',1);
fProp('frmshc.evolucao.Main.CampoEvolucao','hidden',0)
//apaga evento assistencial
$('[id="frmshc.evolucao.main.campoevolucao.eventoassistencial"]').html("");
//click para limpar os campos de imagem
 $(document.getElementById(cLower('frmshc.evolucao.Main.CampoEvolucao.ImagemEvolucao.Botoes.Novo'))).click()
    
//Alteração da indicacao de BTN
$(document.getElementById(cLower('frmshc.evolucao.Main.MnuLateral.Paciente'))).css({'background-color': '#155fa0'});
//Set o valor do campo de Origem
fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.dmSHCOrigem','value','W')
fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.hrmov_origem','value','W')

//Reseta o valor do input de Imagem da tabela que trabalha com ação manual
var wIdControle = fProp("frmshc.evolucao.Main.CampoEvolucao.ImagemEvolucao.Campo.fmeInputs.id","value")
   //Grid p:wGridReferencia
 var wGridReferencia = 'frmshc.evolucao.Main.CampoEvolucao.ImagemEvolucao.Campo.fmeGrdImagem.grd'
 _ccInp.limpa(wGridReferencia);
  //_ccInp.readonly(wGridReferencia, 0)

//Desbloqueia os campos para inclusão dos dados
$(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Dados.dmSHCEvolucaoTP"))).removeAttr("disabled")
$(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnProfissional"))).removeAttr("disabled")



//Set o valor do campo paciente judicializado
//fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.dmSHCJudicializado','value',1)

//Exibe um placeholder no botão de salvar enquanto bloqueado
$(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Botoes.Salvar"))).attr({
        'data-toggle': 'tooltip',
        'data-placement': 'top',
        'title':'Histórico minimo 20 caracteres para salvar a evolução'
    })

//Desabilita o botão de Salvar e faz o controle de caracteres na decrição da evolução que é no minimo 20 caracteres  permitido
$(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Dados.anObservacao"))).on( "keydown", function(e){
if( e.which > 0){
  var wAnObs =  $(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Dados.anObservacao"))).val().length
    if(wAnObs <= 19 ){
      $(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Botoes.Salvar"))).attr("disabled","disabled")
    }else{
      $ (document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Botoes.Salvar"))).removeAttr("disabled","disabled")
      $(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Botoes.Salvar"))).removeAttr({
        'data-toggle': 'tooltip',
        'data-placement': 'top',
        'title': 'Histórico minimo 20 caracteres para salvar a evolução'
           })
       }
  };

  $(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Botoes"))).hover(function(){
    var wValCampo =  $(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Dados.anObservacao"))).val().length
      if(wValCampo <= 19 ){
         $(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Botoes.Salvar"))).attr("disabled","disabled")
     }else{
      
          $(document.getElementById(cLower("frmshc.evolucao.Main.CampoEvolucao.Input.Botoes.Salvar"))).removeAttr("disabled","disabled")
      }
  })
  

});



$(document.getElementById(cLower('frmshc.evolucao.Main.CampoEvolucao.Input.Botoes.Salvar'))).attr('disabled',"disabled");

//Busca dos Dados do Paciente Judicializado para o campo na tela

var cnPac = fProp('frmshc.evolucao.Main.paciente.cnPaciente','value')

var url =cc.url.ccasegd_token+"TABELA=shcOrcamento&COLUNAS=0,doLiminar,nmPaciente,cnPaciente&WHERE=cnPaciente="+cnPac

async function ajax (){
  
    const response = await $.ajax({
      method: "GET",
      url: url,
      
     })
  
   var{data} = response
   
   var {0:{doLiminar}} = data

   console.log('o jud é:'+ doLiminar)
   if(doLiminar == "N"){
     fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.dmSHCJudicializado','value',1)
   }else if(doLiminar == "S"){
     fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.dmSHCJudicializado','value',2)
   }else{
     fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.dmSHCJudicializado','value'," ")
   }
   
}
ajax()
  fProp("frmshc.evolucao.Main.MnuLateral.Paciente",'hidden', 0)
//Exportação do valor do profissional em uso na tela
window.wProf = $(document.getElementById('frmshc.evolucao.main.campoevolucao.input.dados.cnprofissional')).val()




  //--------------------------------------------SETANDO O VALOR PARA OS DOMINIOS SEMPRE SER (NÃO)-------------------------------//
  fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.dmSHCAuditoria','value',1) //ESTE CAMPO TRABALHA COM VALOR INT
  fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.boAuditadoMedico','value','N')
  fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.boAuditadoEnfermagem','value','N')
  fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.boAuditadoContas','value','N')
    
    
   // --------------------------------------------- CODIGO REFERENTE AO CONTROLE DE AUDITORIA------------------------------------------//
    $(cLower("[data-inp-obj-referencia-datagrid='frmshc.evolucao.main.campoevolucao.input.grid.grd']")).removeAttr('disabled','disabled');
    $(document.getElementById(cLower('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnProfissao'))).attr("readonly");
    $(document.getElementById(cLower('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnProfissao'))).attr("disabled","disabled");
    $(document.getElementById(cLower('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.qtProcedimento'))).attr("readonly");
    $(document.getElementById(cLower('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.qtProcedimento'))).attr("disabled","disabled");
    $(document.getElementById(cLower('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.dmSHCJudicializado'))).attr("readonly");
    $(document.getElementById(cLower('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.dmSHCJudicializado'))).attr("disabled","disabled")
    $(document.getElementById(cLower('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.csFrequenciaMulti'))).attr("readonly");  
    $(document.getElementById(cLower('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.csFrequenciaMulti'))).attr("disabled","disabled")  
    
    //Insere o profissional relacionado ao usuario logado no sistema
    
    
    
    //Insere o profissional do usuario logado no campo de profissional
setTimeout(function(){fProp("frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnProfissional","value",cc.global.cnProfissional)},2000)


//Inicia a função de Eventos Assistenciais

//wInputsAuditoria = ['frmshc.evolucao.main.campoevolucao.input.dados.dmshcauditoria','frmshc.evolucao.main.campoevolucao.input.dados.boauditadomedico','frmshc.evolucao.main.campoevolucao.input.dados.boauditadoenfermagem','frmshc.evolucao.main.campoevolucao.input.dados.boauditadocontas']
/* CALL FUNCTION*/
//_ccEvt.inicia.referencia("frmshc.evolucao.Main.CampoEvolucao.EventoAssistencial",wInputsAuditoria);
/*  CODIGO DO PACIENTE   */
//$("[name='formulario-paciente']").val(fProp("frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnPaciente","VALUE"));
/*  CODIGO DA EVOLUCAO,AVALIACAO,PRONTUARIO   */
//$("[name='formulario-item']").val(fProp("frmshc.evolucao.Main.CampoEvolucao.Input.Dados.csPacienteEvolucao","VALUE"));
/*  Código da Transação de origem (1-Prontuário; 2-Avaliação; 3-Evolução; 4-Central de Urgência; 5-....) */
//$("[name='formulario-transacao']").val(3);




Objeto [frmshc.Alergia.Main.Controle.Grid.grd] está sendo usando em outras propriedade e por essa razão não poderá ser removido.
[frmshc.Alergia.Main.Controle.Grid.Buttons.btnNovo,
frmshc.Alergia.Main.Controle.Core.Alergia.Buttons.btnSalvar,
frmshc.Alergia.Main.Controle.Core.Alergia.Buttons.btnExcluir]



Objeto [frmshc.prontuario.corpo.acomodacao.grid.grd] está sendo usando em outras propriedade e por essa razão não poderá ser removido.
[frmshc.Prontuario.Corpo.Acomodacao.Botoes.Salvar,
frmshc.Prontuario.Corpo.Acomodacao.Botoes.Novo,
frmshc.Prontuario.Corpo.Acomodacao.Botoes.Excluir]