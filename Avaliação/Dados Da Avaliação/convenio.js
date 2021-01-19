//Seta o convenio no campo de convenio solicitante

var wcnConv = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.planosaudeconvenio.cnConvenio","value")   //RECEBE valor
var wcnConvSolict = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.solicitante.cnConvenioSolicitante","value")   //ENVIA valor

if(wcnConv != wcnConvSolict){

  fProp("frmshc.avaliacaopacientes.main.avaliacao.core.planosaudeconvenio.cnConvenio","value",wcnConvSolict) 

}