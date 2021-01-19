var wCepVerifica = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.caEndCEPPaciente","value")

if(wCepVerifica !=""){
async function fAtualizaGeo(){

  var wCepLogradouro = fProp('frmshc.avaliacaopacientes.main.avaliacao.core.paciente.caEndCEPPaciente','value');

  var wGeoLocation = await ccMapGeoLocation(wCepLogradouro);

  fProp('frmshc.avaliacaopacientes.main.avaliacao.core.paciente.anEndLongitudePaciente','value',wGeoLocation.lng);

  fProp('frmshc.avaliacaopacientes.main.avaliacao.core.paciente.anEndLatitudePaciente','value',wGeoLocation.lat);

}
/* CALL FUNCTION */
fAtualizaGeo()
}