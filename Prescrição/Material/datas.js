let wCampo1 = "frmshc.Prescricao.Main.ModalMaterial.dtInicio"
let wCampo2 = "frmshc.Prescricao.Main.ModalMaterial.dtFinal"
let wOperador = ">"
_cc.string.comparaValorInput(wCampo1, wOperador, wCampo2, "Data de inicio deve ser Maior que Final", true)




function ControlaDatas() {


  var wDataTelaInit = fProp('frmshc.Prescricao.Main.ModalMaterial.dtInicio', 'value')  //Data Inicial
  var wDiaDuracao = fProp("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.nrDiasDuracao", "value") //Quantidades de Dias 
  var wDiasFinal = fProp("frmshc.Prescricao.Main.ModalMaterial.dtFinal", "value")//Valor de Data Final

  wDataTelaInit = wDataTelaInit ? wDataTelaInit : WdTf //Tratando a Data se tiver a data ela fica com o valor inserido ou fica a de  sugestao


  if (wDiaDuracao) { //Pegar os dias de duração e oferecer um Fim


    fProp('frmshc.Prescricao.Main.ModalMaterial.dtInicio', 'value', wDataTelaInit)
    var t = fProp('frmshc.Prescricao.Main.ModalMaterial.dtInicio', 'value', wDataTelaInit)
    var t = moment(wDataTelaInit, 'DD/MM/YYYY');
    var wDataFinal = moment(t).add(wDiaDuracao, 'days').format('DD/MM/YYYY');
    
    fProp("frmshc.Prescricao.Main.ModalMaterial.dtFinal", "value",wDataFinal)
  }


  if (wDataTelaInit && wDiasFinal) { //Trabalha o Intervalo de datas criando a quantidade de dias


    var wDataTelaInit = fProp('frmshc.Prescricao.Main.ModalMaterial.dtInicio', 'value')
    var wDiasFinal = fProp("frmshc.Prescricao.Main.ModalMaterial.dtFinal", "value")
    var a = moment(wDataTelaInit, "DD/MM/YYYY")
    var b = moment(wDiasFinal, "DD/MM/YYYY")
    var wDiferenca = b.diff(a, 'days')
    var wDiferenca = wDiferenca
    fProp("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.nrDiasDuracao", 'value', wDiferenca)


    wDiferenca = "",
      wDataTelaInit = "";
    wDiaDuracao = "";
    wDiasFinal = "";

  }

}

ControlaDatas()



//Funcao que administra as datas e a dinamica de preenchimento de periodos e data final
function ControlaDatas() {


  var wDataTelaInit = fProp('frmshc.Prescricao.Main.ModalMaterial.dtInicio', 'value')  //Data Inicial
  var wDiaDuracao = fProp("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.nrDiasDuracao", "value") //Quantidades de Dias 
  var wDiasFinal = fProp("frmshc.Prescricao.Main.ModalMaterial.dtFinal", "value")//Valor de Data Final

  wDataTelaInit = wDataTelaInit ? wDataTelaInit : WdTf //Tratando a Data se tiver a data ela fica com o valor inserido ou fica a de  sugestao


  if (wDiaDuracao) { //Pegar os dias de duração e oferecer um Fim


    fProp('frmshc.Prescricao.Main.ModalMaterial.dtInicio', 'value', wDataTelaInit)
    var t = fProp('frmshc.Prescricao.Main.ModalMaterial.dtInicio', 'value', wDataTelaInit)
    var t = moment(wDataTelaInit, 'DD/MM/YYYY');
    var wDataFinal = moment(t).add(wDiaDuracao, 'days').format('DD/MM/YYYY');
    fProp("frmshc.Prescricao.Main.ModalMaterial.dtFinal", "value",wDataFinal)
  }


}

ControlaDatas()