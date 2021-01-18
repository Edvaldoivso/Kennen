fProp('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos', 'hidden', 0);
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.Buttons.Novo"))).addClass("hidden",1)
$(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMedicamento.GridMedicamento"))).addClass("hidden",1)
fProp('frmshc.Prescricao.Main.ModalMedicamento.dtInicio','value',window.WdTf)


$(cLower("[data-inp-obj-referencia-datagrid='frmshc.Prescricao.Corpo.GridMedicamento.GridMedicamento']")).removeAttr('disabled','disabled');



$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.cnProfissao"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.caConselhoClasse"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.anConselhoClasse"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.caUFConselho"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.cnMaterial"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.cnOrcamento"))).attr('disabled','disabled')

//$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.doViaAdministracao"))).attr('disabled','disabled')

$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.clManipuladoFormula"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.caApresentacao"))).attr('disabled','disabled')


//Insere o profissional do usuario logado no campo de profissional
setTimeout(function(){fProp("frmshc.Prescricao.Main.ModalMedicamento.cnProfissional","value",cc.global.cnProfissional)},1000)


  //Apaga os dados do check box,
      document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmeCheckBox')).innerHTML = "<input type='hidden'>";  
        
        $('[data-obj-referencia="frmshc.prescricao.corpo.gridmedicamento.fmecampos.fmemodalhora.fmebtn.rotina"]').each(function () {
  
                $(document.getElementById(cLower(this.name))).prop("checked", false)
          
        })
        
        //cria checkbox padrao
for (var c = 0; c < 24; c++) {



    if (c == 24) {

    } else {
        document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmeCheckBox')).innerHTML +=
            "<div class='Jabinho' style= ' display:inline-block; margin-right: 5px; margin-top:10px'><input style= 'float:left;' type='checkbox' id='" +c + "'name='recCheck' value='" +c +':00' + "'><label for='vehicle1'> " +c +':00' + "</label><br> </div>";

    }

}