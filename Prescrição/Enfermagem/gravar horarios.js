var Wdias = []



function WvalidacheckBox() {
  var Wsl = false
  var Wsl2 = false
  var Wsl3 = false

  var WPeriodo = []
  var WQuantidade = fProp('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.qtVezDia', 'value')
  var WVerificaqty = 0
  var Wvalide = 0
  $(cLower('[data-obj-referencia="frmshc.prescricao.main.modalenfermagem.procedimento.controlehorario.periodos.p"]')).each(function () {
    var WPega = this.checked
    if (WPega == true) {
      WPeriodo.push(this.value)
      WVerificaqty++
      Wvalide++
    }
    
  })
  var WCheck = []
  var Wvalide2 = 0
  $("[name='recCheck']").each(function () {
    var WPega2 = this.checked
    if (WPega2 == true) {
      WCheck.push(this.value)
      Wvalide2++
    }
  })
  if (Wvalide >= 1 && Wvalide2 >= 1) {
    alertify.alert('Alerta', 'Você não pode Usar os Horarios e os Periodos ao Mesmo Tempo !', function () { });
    Wsl = false

  } else {
    Wsl = true
    if (WQuantidade != WVerificaqty && Wvalide != 0 || Wvalide2 != WQuantidade && Wvalide2 != 0) {
      alertify.alert('Alerta', 'A Quantidade e Diferente dos Horários Selecionados !', function () { });
      Wsl2 = false
    } else {
      Wsl2 = true
      if (Wvalide != 0) {
        fProp('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.hrFim', 'value', ' ')
        fProp('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.ControleHorario.DiasdaSemana.lsHorario', 'value', WPeriodo.join([separador = '#']))

      } else {

        fProp('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.ControleHorario.DiasdaSemana.lsHorario', 'value', WCheck.join([separador = '#']))

      }
    }
  }
  if (Wvalide == 0 && Wvalide2 == 0) {
    alertify.alert('Alerta', 'Adicione Alguma data Valida  !', function () { });
    Wsl3 = false
    fProp('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.ControleHorario.DiasdaSemana.lsHorario', 'value', ' ')
  } else {
    Wsl3 = true

  }

  if (Wsl == true && Wsl2 == true && Wsl3 == true) return _cc.msg('Controle de Horas Salvo', 1)

}

WvalidacheckBox()