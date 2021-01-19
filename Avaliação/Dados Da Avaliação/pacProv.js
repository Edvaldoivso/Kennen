//------------------------------------------O FME SÓ SERÁ MONTADO CASO O BTN SEJA CLICADO----------------------------
var wGridReferencia = $(document.getElementById(cLower('frmshc.AvaliacaoPacientes.fmeParaGrid.fmeParaTabela.Tabela')))
fProp("frmshc.AvaliacaoPacientes.fmeParaGrid", "DISABLE", 0);
wGridReferencia.ready(function(){
    setTimeout(() => {
       _cc.modal.show(cLower("frmshc.AvaliacaoPacientes.fmeParaGrid"))
    },1000)
})



$(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.nmPaciente"))).on("focusin",function(){    
var wNome = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.nmPaciente","value")

if(wNome != ""){

    alertify.confirm(' ', 'DESEJA SOBRESCREVER OS DADOS DO PACIENTE ?', 
    async function(){  
      
      //Insere o provisório já que vai limpar o cnPac da Base
      var cnPaciente = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente","value")        //Recebe
      var cnPacProv = fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.ProntuarioRandom","value")        //oFERECE
      
        var seqtemp = await fSequencia("pac_codigo_prov")
        console.log(seqtemp)
        fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.ProntuarioRandom", "value", seqtemp)
        fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente", "value", seqtemp)
        fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.dcProvisorio", "value", 'S')

      
      
      //Limpa os campos da tela de origem pesquisada
        $(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente"))).val("")
        $(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.doSexoPaciente"))).removeAttr('disabled','disabled').val("")
        $(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.dtNascimentoPaciente"))).removeAttr('disabled','disabled').val("")
        $(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.caCPFPaciente"))).removeAttr('disabled','disabled').val("")
        $(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.nmPaciente"))).removeAttr('disabled','disabled').val("")
        $(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.nrIdadePaciente"))).val("")
       
     var seqtempo =   fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.ProntuarioRandom","value")
      fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente","value",seqtempo)
     } , 
    
    function(){  });
}

})