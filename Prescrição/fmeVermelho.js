window.wrotinaIncicial = (
  "fProp('frmshc.Prescricao.Corpo.GridPaciente', 'hidden', 1);"
  + "fProp('frmshc.Prescricao.Corpo.Alergia','hidden',1);"
  + "fProp('frmshc.Prescricao.Corpo.GridMedicamento', 'hidden', 1);"
  + "fProp('frmshc.Prescricao.Corpo.GridDieta','hidden',1);"
  + "fProp('frmshc.Prescricao.Corpo.GridMaterial','hidden',1);"
  + "fProp('frmshc.Prescricao.Main.ModalEnfermagem','hidden',1);;"
  + "fProp('frmshc.Prescricao.Main.ModalDieta','hidden',1);"
  + "fProp('frmshc.Prescricao.Main','hidden',1);"
  + "fProp('frmshc.Prescricao.Corpo.GridEnfermagem','hidden',1);"
  + "fProp('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd','hidden',1);"


  + "$(document.getElementById(cLower('frmshc.Prescricao.Corpo.MenuLateral.Paciente'))).css({'background-color': '#155fa0'});"
  + "$(document.getElementById(cLower('frmshc.Prescricao.Corpo.MenuLateral.Medicamento'))).css({'background-color': '#155fa0'});"
  + "$(document.getElementById(cLower('frmshc.Prescricao.Corpo.MenuLateral.Dieta'))).css({'background-color': '#155fa0'});"
  + "$(document.getElementById(cLower('frmshc.Prescricao.Corpo.MenuLateral.Material'))).css({'background-color': '#155fa0'});"
  + "$(document.getElementById(cLower('frmshc.Prescricao.Corpo.MenuLateral.Enfermagem'))).css({'background-color': '#155fa0'});"
  + "$(document.getElementById(cLower('frmshc.Prescricao.Corpo.MenuLateral.Alergia'))).css({'background-color': '#155fa0'});"
  + "$(document.getElementById(cLower('frmshc.Prescricao.Corpo.MenuLateral.AgendaPrescricao'))).css({'background-color': '#155fa0'});"


)

eval(window.wrotinaIncicial)



/*Controle de Bloqueio dos Botões de Acesso*/

function BlocPresc() {


  var wValCnPac = $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridPaciente.cnPaciente"))).val();
  var wValNmPac = $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridPaciente.nmPaciente"))).val();

  if (wValCnPac == "" && wValNmPac == "") {


    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.Medicamento"))).attr("disabled", "disabled");
    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.Dieta"))).attr("disabled", "disabled");
    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.Material"))).attr("disabled", "disabled");
    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.Enfermagem"))).attr("disabled", "disabled");
    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.Alergia"))).attr("disabled", "disabled");
    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.AgendaPrescricao"))).attr("disabled", "disabled");
    $(document.getElementById(cLower('frmshc.Prescricao.Corpo.MenuLateral.Paciente'))).css({ 'background-color': '#BDBDBD' });

  } else {


    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.Medicamento"))).removeAttr("disabled", "disabled");
    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.Dieta"))).removeAttr("disabled", "disabled");
    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.Material"))).removeAttr("disabled", "disabled");
    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.Enfermagem"))).removeAttr("disabled", "disabled");
    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.Alergia"))).removeAttr("disabled", "disabled");
    $(document.getElementById(cLower("frmshc.Prescricao.Corpo.MenuLateral.AgendaPrescricao"))).removeAttr("disabled", "disabled");
  }

}

BlocPresc()
$(document.getElementById(cLower("frmshc.Prescricao"))).on('mouseover', BlocPresc)

//Variavel de controle de registro para o grid de medicamento
var dNow = new Date()
var dt = dNow.getDate()
var dtI = (dt < 10) ? '0' + dt : dt

window.WdTf = dtI + '/' + (dNow.getMonth() + 1) + '/' + dNow.getFullYear()
//fProp('frmshc.Prescricao.Main.ModalMedicamento.dtInicio','value',window.wDt)
window.wDt = '"' + WdTf + '"'

/*--------------------- FUNÇÃO PARA CONCATENAÇÃO DA INSTRUÇÃO AUTOMATICA EM MEDICAMENTO E DIETA -------------------------*/
window.fConcatenaInstrucao = function fConcatenaInstrucao() {
  var wProdutoNome = fProp('frmshc.Prescricao.Corpo.ModalMedicamento.Campos.nmProduto', 'value')
  var wViaAdministracao = $(document.getElementById(cLower('select2-frmshcprescricaomainmodalmedicamentogrupoextradoviaadministracao-container'))).text()
  var wDose = fProp('frmshc.Prescricao.Main.ModalMedicamento.qtDose', 'value')
  var wQtdVezDia = fProp('frmshc.Prescricao.Main.ModalMedicamento.qtVezDia', 'value')
  var wUnidadeMedida = $(document.getElementById(cLower('select2-frmshcprescricaomainmodalmedicamentocaunidademedida-container'))).text()
  var wFrequenciaTP = $(document.getElementById(cLower('select2-frmshcprescricaomainmodalmedicamentodofrequenciatp-container'))).text()
  if (wProdutoNome.length != 0 && wViaAdministracao.length != 0 && wDose.length != 0 && wQtdVezDia.length != 0 && wUnidadeMedida.length != 0 && wFrequenciaTP != 'Selecione') {
    var wInstrucao = cLower('${wProdutoNome}, ${wViaAdministracao},  ${wDose}, ${wUnidadeMedida} ${wQtdVezDia} Vezes por ${wFrequenciaTP}')
    fProp('frmshc.Prescricao.Main.ModalMedicamento.anInstrucaoFrequencia', 'value', wInstrucao)
  }
}


/*--------------------- FUNÇÃO PARA CONCATENAÇÃO DA INSTRUÇÃO AUTOMATICA EM MATERIAL ------------------------*/
window.fConcatenaInstrucaoMaterial = function fConcatenaInstrucaoMaterial() {
  var wProdutoNome = $(document.getElementById(cLower('select2-frmshcprescricaomainmodalmaterialfmeprofissionalcnmaterial-container'))).text()
  var wDose = fProp('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.qtDose', 'value')
  var wQtdVezDia = fProp('frmshc.Prescricao.Main.ModalMaterial.qtVezDia', 'value')
  var wUnidadeMedida = $(document.getElementById(cLower('select2-frmshcprescricaomainmodalmaterialcaunidademedida-container'))).text()
  var wFrequenciaTP = $(document.getElementById(cLower('select2-frmshcprescricaocorpogridmaterialfmectdfmeprocedimentocnfrequencia-container'))).text()
  if (wProdutoNome.length != 0 && wDose.length != 0 && wQtdVezDia.length != 0 && wUnidadeMedida.length != 0 && wFrequenciaTP != 'Selecione') {
    var wInstrucao = cLower(wProdutoNome + ', ' + wDose + ' ' + wUnidadeMedida + ' ' + wQtdVezDia + ' Vezes por ' + wFrequenciaTP)
    fProp('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.anInstrucaoFrequencia', 'value', wInstrucao)
  }
}


fConcatenaInstrucaoMaterial()










window.fCalculaHorariosCheckBox = async function fCalculaHorariosCheckBox() {


  //Variavel Tempo Inicial 
  var WTempoInicial = fProp('frmshc.Prescricao.Main.ModalMedicamento.hrInicio', 'value')
  //Trasformando a String em tipo float, usando o split 
  var TempoINIT = WTempoInicial
  WTempoInicial = WTempoInicial.split(':')

  //Variavel de Quantidade de vezes o remedios vai ser ingerido
  var Wquantidade = fProp('frmshc.Prescricao.Main.ModalMedicamento.qtVezDia', 'value')

  //pegando a hora inicioa para fazer a validação 
  var HoraInicio = WTempoInicial[0] + '.' + WTempoInicial[1]

  //if para validar campos 

  //if para validar campos 
  var WcampoHorafinal = fProp('frmshc.Prescricao.Main.ModalMedicamento.hrFinal', 'value')
  WcampoHorafinal = WcampoHorafinal.split(':')
  WcampoHorafinal = WcampoHorafinal[0] + '.' + WcampoHorafinal[1]


  var Wfrenquencia = fProp('frmshc.Prescricao.Main.ModalMedicamento.doFrequenciaTP', 'value')
  var resultadodaconta = WcampoHorafinal - HoraInicio

  resultadodaconta = resultadodaconta / Wquantidade



  var resultadoHora = parseInt(resultadodaconta).toFixed(2).split('.')


  if (Wfrenquencia == 'D') {
    document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmeCheckBox')).innerHTML = " "
    if (resultadoHora[1] == 0 && resultadoHora[0] == 0) {
    } else {

      if (resultadoHora[0] < 60) {

        await fProp('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmecalcula.hrFinal', 'value', resultadoHora[0] + ':' + resultadoHora[1])


        //Variavel Tempo De intervalo
        var WIntervaloTempo = fProp('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmecalcula.hrFinal', 'value')
        var WtempoFIM = WIntervaloTempo
        //Trasformando a String em tipo float, usando o split 
        WIntervaloTempo = WIntervaloTempo.split(':')
        //pegando o intervalo de hora 
        var HoraFinal = WIntervaloTempo[0] + '.' + WIntervaloTempo[1]
        var WhoraT = 0
        //Varialvel que está recebendo o Minutos total
        var WMinuto = 0


        //conferindo se o valor vai passar de 24 horas 
        var Wresultado = HoraFinal * Wquantidade
        var Wtira = 25.00 - HoraInicio

        if (WTempoInicial && WIntervaloTempo && Wquantidade) {







          //if para validar resultado, se não for maior que 24 horas o if vai para o else. obvio !
          if (Wtira >= Wresultado && WTempoInicial != '' && Wquantidade != '' && WIntervaloTempo != '' && Wquantidade < 24) {
            fProp('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmecalcula.Botao.btnLimpa', 'hidden', 0)
            //array que vai armazenar  os numero de checkbox 
            var WOrdem = []
            var WInter = []
            //for que vai construir os checkbox e os intervalos de tempos
            for (var i = 0; i <= 23; i++) {

              // if para caso o total de checkbox estiver no intervalo 
              if (parseFloat(WTempoInicial[0]) == i) {
                //for para calcular a quantidade de intervalos possiveis 
                for (var WD = 0; WD < Wquantidade; WD++) {
                  // if para retirar a multiplicação por zero, fazendo assim que o horario começe da hora digitada no campo hora inicial 
                  if (WD == 0) {
                    //pegando a hora inicial e transformando em float 
                    WhoraT = parseFloat(WTempoInicial[0])
                    // pegando os minutos e transformando em float 
                    WMinuto = parseFloat(WTempoInicial[1])
                  } else {
                    //pegando a hora inicial e transformando em float 
                    WhoraT = WhoraT + parseFloat(WIntervaloTempo[0])

                    // pegando os minutos e transformando em float 
                    WMinuto = WMinuto + parseFloat(WIntervaloTempo[1])


                  }

                  // If para retirar minutos Irregulares 
                  if (WMinuto >= 60) {

                    //hora = hora + 1
                    WhoraT = WhoraT + 1

                    var Wfinal = WhoraT + '.' + (WMinuto = WMinuto - 60)





                    //adicionando o resultado dentro de uma variavel, tanto as horas e os  minutos 

                    //adicionando tudo dentro do array 
                    WInter.push('' + Wfinal + '')

                  } else {
                    // se não tiver nenhuma particularidade mostra o resultado fechado
                    //adicionando Checkbox de acordo com o if
                    //document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmeCheckBox')).innerHTML += "<div class='Jabinho'><input type='checkbox' id='" + WhoraT + "' name='vehicle1' value='Bike'><label for='vehicle1'> " + WhoraT + ':' + WMinuto + "</label><br> </div>";
                    //  $("[id='" + WhoraT + "']").attr("checked", "checked")


                    if (WMinuto == '0') {

                      var Wfinal = WhoraT + '.' + WMinuto

                      WInter.push('' + Wfinal + '0')
                    } else {

                      var Wfinal = WhoraT + '.' + WMinuto

                      WInter.push('' + Wfinal + '')

                    }





                  }

                }
              }
              //Verificando se  o id do check box ja existe, se não ele cria um novo 
              //var Wtamanho = $("[id='" + i + "']").length
              //if (Wtamanho == 0) {
              //Criando checkbox
              //document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmeCheckBox')).innerHTML += "<div class='CheckWet'><input type='checkbox' id='" + i + "' name='vehicle1' value='Bike'><label for='vehicle1'>  " + i + "</label><br> </div>";
              //Adicionando horarios que não estão dentro do intervalo
              WOrdem.push('' + i + '.00')
            }

            //concatenando Arrays
            var alphaNumeric = WOrdem.concat(WInter);
            //Ordedando o array para ordem crescente 
            alphaNumeric.sort((a, b) => a - b)
            //tirando valores Repetidos 
            var novaArr = alphaNumeric.filter((este, i) => alphaNumeric.indexOf(este) == i);

            //for para verificar se existe horarios validos e criando os horarios se eles existirem 
            for (var c = 0; c < novaArr.length; c++) {

              var result = novaArr[c].replace(".", ":")

              if (novaArr[c] == 24) {

              } else {
                document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmeCheckBox')).innerHTML +=
                  "<div class='Jabinho' style= ' display:inline-block; margin-right: 5px; margin-top:10px'><input style= 'float:left;' type='checkbox' id='" + novaArr[c] + "'name='recCheck' value='" + result + "'><label for='vehicle1'> " + result + "</label><br> </div>";

              }

            }
            //for para Checar os checkboxs 
            for (var d = 0; d <= WInter.length; d++) {
              if (WInter[d] == "24.00") {
                $('[id="0.00"]').attr('checked', 'checked')

              } else {
                $("[id='" + WInter[d] + "']").attr('checked', 'checked')
              }


            }
          } else {


            if (Wtira <= Wresultado || Wquantidade > 24) {

            }







          }
        }
      } else { }
    }


  }

}



//funcao teste não apagar 


window.FcalculaHorariosCr = function FcalculaHorariosCr(wCheckBox, wLshorarios, WobjeRefc) {

  var WlsHorarios = fProp(wLshorarios, 'value')
  if (WlsHorarios != "") {
    WlsHorarios = WlsHorarios.split('#')
    if (WlsHorarios[0] == 'Madrugada' || WlsHorarios[0] == 'Manha' || WlsHorarios[0] == 'Noite' || WlsHorarios[0] == 'Tarde') {
      var cont = -1
      $('[data-obj-referencia="' + WobjeRefc + '"]').each(function () {
        cont++
        if (WlsHorarios[cont] == this.value) {
          $(document.getElementById(cLower(this.name))).prop("checked", "true")

        } else {

        }
      })
    } else {

      if (fProp(wLshorarios, 'value')) {
        var HorarioFormatado = []
        var ValorHoras = []
        for (var i = 0; i <= 23; i++) {
          ValorHoras.push('' + i + '.00')
          if (i < WlsHorarios.length) {
            var Wt = WlsHorarios[i].replace(":", ".")
            HorarioFormatado.push(Wt)
          }
        }
        var HorasFinais = ValorHoras.concat(HorarioFormatado);
        HorasFinais.sort((a, b) => a - b)
        HorasFinaiss = HorasFinais.filter((este, i) => HorasFinais.indexOf(este) == i);
        for (var i = 0; i < HorasFinaiss.length; i++) {
          var result = HorasFinaiss[i].replace(".", ":")
          if (result != '' && result != ' ')
            document.getElementById(cLower(wCheckBox)).innerHTML +=
              "<div class='Jabinho' style= ' display:inline-block; margin-right: 5px; margin-top:10px'><input style= 'float:left;' type='checkbox' id='" + HorasFinaiss[i] + "'name='recCheck' value='" + result + "'><label for='vehicle1'> " + result + "</label><br> </div>";
        }
        for (var i = 0; i < HorarioFormatado.length; i++) {
          if (HorarioFormatado[i] == "24.00") {
            $('[id="0.00"]').attr('checked', 'checked')
          } else {
            $("[id='" + HorarioFormatado[i] + "']").attr('checked', 'checked')
          }
        }
      }

    }
  }
}