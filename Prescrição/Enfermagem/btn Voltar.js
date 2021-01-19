fProp("frmshc.Prescricao.Main.ModalEnfermagem", "hidden", 1)
fProp("frmshc.Prescricao.Corpo.GridEnfermagem", "hidden", 0)



//Este cód está sob análise de Uso apagar se não for necessário 13/01/2020 Edvaldo
/*
$('[data-obj-referencia="frmshc.prescricao.main.modalenfermagem.procedimento.controlehorario.periodos.p"]').each(function (teste) {
  
   
        $(document.getElementById(cLower(this.name))).prop("checked", false)
    
    

})
*/
document.getElementById(cLower('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.ControleHorario.HorariosM.CheH')).innerHTML = ' '



for (var c = 0; c < 24; c++) {



  if (c == 24) {

  } else {

    document.getElementById(cLower('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.ControleHorario.HorariosM.CheH')).innerHTML += "<div class='Jabinho' style= ' display:inline-block; margin-right: 5px; margin-top:10px'><input style= 'float:left;' type='checkbox' id='" + c + "'name='recCheck' value='" + c + ':00' + "'><label for='vehicle1'> " + c + ':00' + "</label><br> </div>";

  }

}