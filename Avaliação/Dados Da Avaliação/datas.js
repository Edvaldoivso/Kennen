let wCampo1 = "frmshc.avaliacaopacientes.main.avaliacao.core.avaliador.dtAgendadoAvaliador"
let wCampo2 = "frmshc.avaliacaopacientes.main.avaliacao.core.avaliador.dtRealizadoAvaliador"
let wOperador = ">"
_cc.string.comparaValorInput(wCampo1, wOperador, wCampo2, "AGENDAMENTO não pode posterior a REALIZAÇÃO", true)
