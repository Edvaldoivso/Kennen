eval(window.wBloqueioLateral)
fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core","hidden",0);
fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Cuidador.Buttons.btnNovo",'hidden',1)
fProp("frmshc.AvaliacaoPacientes.fmeInformacao.sayT","value"," ");
   
   //Set o valor do campo Status da Avaliação
   fProp('frmshc.avaliacaopacientes.main.avaliacao.core.solicitante.doAvaliacaoSTS','value',7)
var data = new Date();
var dia     = data.getDate() 
var mes     = data.getMonth()+1
var wano_atual = data.getFullYear();



var hora    = data.getHours()
var min     = data.getMinutes()



fProp("frmshc.avaliacaopacientes.main.avaliacao.core.solicitante.dtAvaliacao","value",dia+"/"+mes+"/"+wano_atual+  " " +hora+":"+min+":00")


//Insere a empresa no campo 'EMPRESA FILIAL' como sugestão 

setTimeout(function(){fProp("frmshc.avaliacaopacientes.main.avaliacao.core.empresa.cnEmpresa","value",cc.global.cnProfissional)},1000)




 //Limpar o campo de provisório para que ele não insira este registro no prontuário já que o paciente está sendo delecionado via base de dados e não como provisório
 
 $(document.getElementById(cLower("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.ProntuarioRandom"))).val("")
 fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.dcProvisorio","value",'N')