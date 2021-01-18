function ControlaDatas() {


  var wDataTelaInit = fProp('frmshc.Prescricao.Main.ModalMedicamento.dtInicio', 'value')  //Data Inicial
  var wDiaDuracao = fProp("frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.nrDiasDuracao", "value") //Quantidades de Dias 
  var wDiasFinal = fProp("frmshc.Prescricao.Main.ModalMedicamento.dtFinal", "value")//Valor de Data Final

  wDataTelaInit = wDataTelaInit ? wDataTelaInit : WdTf //Tratando a Data se tiver a data ela fica com o valor inserido ou fica a de  sugestao


  if (wDiaDuracao) { //Pegar os dias de duração e oferecer um Fim


    fProp('frmshc.Prescricao.Main.ModalMedicamento.dtInicio', 'value', wDataTelaInit)
    console.log('Pegar os dias de duração e oferecer um Fim' + wDataTelaInit)
    var t = fProp('frmshc.Prescricao.Main.ModalMedicamento.dtInicio', 'value', wDataTelaInit)
    var t = moment(wDataTelaInit, 'DD/MM/YYYY');
    console.log(t + "Valor do T")
    var wDataFinal = moment(t).add(wDiaDuracao, 'days').format('DD/MM/YYYY');
    
    console.log(wDataFinal + " Teste final aqui foi")
    fProp("frmshc.Prescricao.Main.ModalMedicamento.dtFinal", "value",wDataFinal)
  }


  if (wDataTelaInit && wDiasFinal) { //Trabalha o Intervalo de datas criando a quantidade de dias

    console.log("Trabalha o Intervalo de datas criando a quantidade de dias")

    var wDataTelaInit = fProp('frmshc.Prescricao.Main.ModalMedicamento.dtInicio', 'value')
    var wDiasFinal = fProp("frmshc.Prescricao.Main.ModalMedicamento.dtFinal", "value")
    console.log(wDataTelaInit)
    console.log(wDiasFinal)
    var a = moment(wDataTelaInit, "DD/MM/YYYY")
    var b = moment(wDiasFinal, "DD/MM/YYYY")
    var wDiferenca = b.diff(a, 'days')
    var wDiferenca = wDiferenca
    console.log(wDiferenca + 'final')
    fProp('frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.nrDiasDuracao', 'value', wDiferenca)


    wDiferenca = "",
      wDataTelaInit = "";
    wDiaDuracao = "";
    wDiasFinal = "";

  }

}

ControlaDatas()

