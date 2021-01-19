function ControlaDatas() {


  var wDataTelaInit = fProp('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.dtInicio', 'value')  //Data Inicial
  var wDiaDuracao = fProp("frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.nrDiasDuracao", "value") //Quantidades de Dias 
  var wDiasFinal = fProp("frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.dtFinal", "value")//Valor de Data Final

  wDataTelaInit = wDataTelaInit ? wDataTelaInit : WdTf //Tratando a Data se tiver a data ela fica com o valor inserido ou fica a de  sugestao


  if (wDiaDuracao) { //Pegar os dias de duração e oferecer um Fim


    fProp('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.dtInicio', 'value', wDataTelaInit)
    //console.log('Pegar os dias de duração e oferecer um Fim' + wDataTelaInit)
    var t = fProp('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.dtInicio', 'value', wDataTelaInit)
    var t = moment(wDataTelaInit, 'DD/MM/YYYY');
    console.log(t + "Valor do T")
    var wDataFinal = moment(t).add(wDiaDuracao, 'days').format('DD/MM/YYYY');
    
    //console.log(wDataFinal + " Teste final aqui foi")
    fProp("frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.dtFinal", "value",wDataFinal)
  }

}

ControlaDatas()