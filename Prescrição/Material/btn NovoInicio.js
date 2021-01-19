eval(window.wrotinaIncicial)
fProp("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd", "hidden", 0)
fProp("frmshc.Prescricao.Main.ModalMaterial.fmeDadosItr.cnProdutoTP", "value", 2)
$(document.getElementById(cLower('frmshc.Prescricao.Corpo.MenuLateral.Material'))).css({ 'background-color': '#BDBDBD' });

//Seta o profissional no campo de profissional de acordo com o profissional logado no sistema
fProp('frmshc.Prescricao.Main.ModalMedicamento.dtInicio', 'value', window.WdTf)


//Insere o profissional do usuario logado no campo de profissional
setTimeout(function () { fProp("frmshc.Prescricao.Main.ModalMaterial.cnProfissional", "value", cc.global.cnProfissional) }, 1000)

$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMaterial.fmeProfissional.caApresentacao"))).attr('disabled', 'disabled')

fProp('frmshc.Prescricao.Main.ModalMaterial.boInativo', 'value', 1)


//Seta uma data inicial ao criar um NOVO de acordo com a data atual e permite alteração 
fProp("frmshc.Prescricao.Main.ModalMaterial.dtInicio", "value", WdTf)


//cria checkbox padrao
document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.ControleH.Combobox.Periodos.Horas')).innerHTML = "<input type='hidden'>";


$('[data-obj-referencia="frmshc.prescricao.corpo.gridmaterial.fmectd.fmeprocedimento.controleh.combobox.periodos"]').each(function () {

  $(document.getElementById(cLower(this.name))).prop("checked", false)

})
for (var c = 0; c < 24; c++) {



  if (c == 24) {

  } else {
    document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.ControleH.Combobox.Periodos.Horas')).innerHTML += "<div class='Jabinho' style= ' display:inline-block; margin-right: 5px; margin-top:10px'><input style= 'float:left;' type='checkbox' id='" + c + "'name='recCheck' value='" + c + ':00' + "'><label for='vehicle1'> " + c + ':00' + "</label><br> </div>";

  }

}