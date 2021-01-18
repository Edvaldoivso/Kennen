$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.Buttons.Novo"))).removeClass("hidden", 1)



$(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMedicamento.GridMedicamento"))).removeClass("hidden", 1)
fProp('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos', 'hidden', 1);

//Apaga checkbox
document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmeCheckBox')).innerHTML = "<input type='hidden'>";

$('[data-obj-referencia="frmshc.prescricao.corpo.gridmedicamento.fmecampos.fmemodalhora.fmebtn.rotina"]').each(function () {

  $(document.getElementById(cLower(this.name))).prop("checked", false)

})

//cria checkbox padrao
for (var c = 0; c < 24; c++) {



  if (c == 24) {

  } else {
    document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmeCheckBox')).innerHTML +=
      "<div class='Jabinho' style= ' display:inline-block; margin-right: 5px; margin-top:10px'><input style= 'float:left;' type='checkbox' id='" + c + "'name='recCheck' value='" + c + ':00' + "'><label for='vehicle1'> " + c + ':00' + "</label><br> </div>";

  }

}