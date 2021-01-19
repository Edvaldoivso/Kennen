var wLatitude = $(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.anEndLongitudePaciente"))).val()
var wLongitude = $(document.getElementById(cLower("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.anEndLatitudePaciente"))).val()

if(!wLatitude || !wLongitude){

fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.CamposEndereco.MapaEndPac.Aviso","hidden",0)
fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.CamposEndereco.MapaEndPac.Aviso","value","<h4>Sem Informações de Latitude ou Longitude</h4>")

}else{
fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.CamposEndereco.MapaEndPac.Aviso","hidden",0)
fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.CamposEndereco.MapaEndPac.Aviso","value"," ")


}