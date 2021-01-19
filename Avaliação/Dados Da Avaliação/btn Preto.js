//_cc.modal.show(cLower("frmshc.AvaliacaoPacientes.fmeParaGrid.FmeGrid"))

//--------------------------------------CODIGO PARA DESATIVACAO DO DISABLE E ATIVACAO DO MODAL---------------------//
var wGridReferencia = $(document.getElementById(cLower('frmshc.AvaliacaoPacientes.fmeParaGrid.FmeGrid.Tabela')))
fProp("frmshc.AvaliacaoPacientes.HospitalGrid", "DISABLE", 0);
wGridReferencia.ready(function(){
    setTimeout(() => {
        console.log("CARREGANDO")
        _cc.modal.show(cLower("frmshc.AvaliacaoPacientes.HospitalGrid"))
    },1000)
})

 $(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.localavaliacaohospital.dsHospital"))).on("focusin",function(){    
var wHospital = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.localavaliacaohospital.dsHospital","value")
var campos = ['frmshc.avaliacaopacientes.main.avaliacao.core.localavaliacaohospital.anEndCidadeHospital','frmshc.avaliacaopacientes.main.avaliacao.core.localavaliacaohospital.cnHospital','frmshc.avaliacaopacientes.main.avaliacao.core.localavaliacaohospital.doEndUFHospital','frmshc.avaliacaopacientes.main.avaliacao.core.localavaliacaohospital.caEndCEPHospital','frmshc.avaliacaopacientes.main.avaliacao.core.localavaliacaohospital.anEndLogradouroHospital','frmshc.avaliacaopacientes.main.avaliacao.core.localavaliacaohospital.anEndNumeroHospital','frmshc.avaliacaopacientes.main.avaliacao.core.localavaliacaohospital.anEndBairroHospital']
if(wHospital != " "){

    alertify.confirm(' NÃO E POSSIVEL ALTERAR DADOS DE PACIENTE JÁ CADASTRADO.', 'DESEJA INSERIR NOVO ?', 
    function(){  
          campos.forEach(fDesbloq)
       fProp("frmshc.avaliacaopacientes.main.avaliacao.core.localavaliacaohospital.dsHospital","value", " ")
     } , 
    
    function(){  });
}

})

/////////////////////////////////////////////////



//_cc.modal.show(cLower("frmshc.AvaliacaoPacientes.fmeIndicacao"))
//-------------------------------------------------------DESABILITA O DESABLE E MOSTRA O MODAL-----------------------------//
var wGridReferencia = $(document.getElementById(cLower('frmshc.AvaliacaoPacientes.fmeIndicacao.grd')))
fProp("frmshc.AvaliacaoPacientes.fmeIndicacao", "DISABLE", 0);
wGridReferencia.ready(function(){
    setTimeout(() => {
        console.log("CARREGANDO")
        _cc.modal.show(cLower("frmshc.AvaliacaoPacientes.fmeIndicacao"))
    },1000)
})

$(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.nmProfissionalIndicacao"))).on("focusin", function () {
  var wProf = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.nmProfissionalIndicacao", "value")
  var campos = ['frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.cnProfissaoIndicacao','frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.doUFConselhoIndicacao', 'frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.PlanoSaudeConvenio.anRegistroConcelho', 'frmshc.avaliacaopacientes.main.avaliacao.core.localavaliacaohospital.caEndCEPHospital', 'frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.anRelatorioClinico','frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.cnProfissaoIndicacao','frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.cnConselhoIndicacao']
  if (wProf != " ") {

    alertify.confirm(' NÃO E POSSIVEL ALTERAR DADOS DE PACIENTE JÁ CADASTRADO.', 'DESEJA INSERIR NOVO ?',
      function () {
        fProp('frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.cnProfissaoIndicacao','value',' ')
        campos.forEach(fDesbloq)
        fProp("frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.nmProfissionalIndicacao", "value", " ")
      },

      function () { });
  }

})