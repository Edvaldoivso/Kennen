var wChecado = fProp("frmshc.Prescricao.Main.ModalMaterial.doSeNecessario", "value")

if (wChecado == "S") {

  /*$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.dmSHCViaAdministracao"))).removeAttr('required','required')
  $("[data-name='frmshc.prescricao.main.modalmedicamento.grupoextra.dmshcviaadministracao']").removeClass('text-danger')
  $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.dmSHCViaAdministracao"))).removeClass('border-danger')
  */
  $(document.getElementById(cLower("frmshc.prescricao.main.modalMaterial.caunidadeMedida"))).removeAttr('required', 'required')
  $("[data-name='frmshc.prescricao.main.modalmaterial.caunidademedida']").removeClass('text-danger')
  $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMaterial.caUnidadeMedida"))).removeClass('border-danger')


  $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.qtDose"))).removeAttr('required', 'required')
  $("[data-name='frmshc.prescricao.corpo.gridmaterial.fmectd.fmeprocedimento.qtdose']").removeClass('text-danger')
  $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.qtDose"))).removeClass('border-danger')



  $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMaterial.qtVezDia"))).removeAttr('required', 'required')
  $("[data-name='frmshc.prescricao.main.modalmaterial.qtvezdia']").removeClass('text-danger')
  $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMaterial.qtVezDia"))).removeClass('border-danger')

  $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.cnFrequencia"))).removeAttr('required', 'required')
  $("[data-name='frmshc.prescricao.corpo.gridmaterial.fmectd.fmeprocedimento.cnfrequencia']").removeClass('text-danger')
  $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.cnFrequencia"))).removeClass('border-danger')

  $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.nrDiasDuracao"))).removeAttr('required', 'required')
  $("[data-name='frmshc.prescricao.corpo.gridmaterial.fmectd.fmeprocedimento.nrdiasduracao']").removeClass('text-danger')
  $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.nrDiasDuracao"))).removeClass('border-danger')




} else {


  $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMaterial.qtVezDia"))).attr('required', 'required')


  $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.cnFrequencia"))).attr('required', 'required')


  $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.qtDose"))).attr('required', 'required')

  // $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.dmSHCViaAdministracao"))).attr('required','required')

  $(document.getElementById(cLower("frmshc.prescricao.main.modalMaterial.caunidadeMedida"))).attr('required', 'required')



  $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.nrDiasDuracao"))).attr('required', 'required')




}