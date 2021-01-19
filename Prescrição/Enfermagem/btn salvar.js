/*--------------VALIDAÇÃO DE CAMPOS---------*/
// Caso todos estejam preenchidos o usuário será redirecionado para o grid.

if($('[class = "form-control select2-hidden-accessible border border-danger"]').length ==  0  && $('[class = "form-control border border-danger"]').length == 0) {

  $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.Buttons.Novo"))).removeClass("hidden",1)

  $(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMedicamento.GridMedicamento"))).removeClass("hidden",1)

  fProp("frmshc.Prescricao.Main.ModalEnfermagem","hidden",1)
  
  fProp("frmshc.Prescricao.Corpo.GridEnfermagem","hidden",0)

}