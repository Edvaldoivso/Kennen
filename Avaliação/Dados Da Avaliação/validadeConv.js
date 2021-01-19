var wRetornoData = fProp('frmshc.avaliacaopacientes.main.avaliacao.core.planosaudeconvenio.dtConvenioPlanoValidade','value')
var wValidadeFormat = wRetornoData.split("/");
var wValidade = new Date(wValidadeFormat[2], wValidadeFormat[1] - 1, wValidadeFormat[0]);
if(wValidade < new Date()){
    _cc.msg('Data Informada Invalida, Plano de Saúde Vencido',0)
    fProp('frmshc.avaliacaopacientes.main.avaliacao.core.planosaudeconvenio.dtConvenioPlanoValidade','value',' ')
}