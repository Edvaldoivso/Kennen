fProp('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos', 'hidden', 0);
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.Buttons.Novo"))).addClass("hidden",1);
$(document.getElementById(cLower("frmshc.Prescricao.Corpo.GridMedicamento.GridMedicamento"))).addClass("hidden",1);
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.caUnidadeMedida"))).attr('disable','disable')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.lsHorario"))).attr('disable','disable')



var dNow = new Date();
var dt = dNow.getDate();
var dtI = (dt.length < 2)?'0'+dt : dt;
var WdTf= dtI + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear();
var wAuditado = fProp("frmshc.Prescricao.Main.ModalMedicamento.doAuditado","value");
var dtFinal = fProp('frmshc.Prescricao.Main.ModalMedicamento.dtFinal','value')


 function compare(dataHj, dataCampo) {
    var dateNow = moment(dataHj,"DD/MM/YYYY"); //data de Hj
    var dateCampo = moment(dataCampo,"DD/MM/YYYY");
    if (dateNow > dateCampo) return true;
    else if (dateNow < dateCampo) return false;
    else return 0;
}

var ReturnCompare = compare(WdTf,dtFinal)
//console.log(ReturnCompare)
  


if(ReturnCompare == true || wAuditado == "S"){
$(cLower("[data-inp-obj-referencia-datagrid='frmshc.Prescricao.Corpo.GridMedicamento.GridMedicamento']")).attr('disabled','disabled');
$(document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmeBtn.btnConfirm'))).attr('disabled','disabled')
$(document.getElementById(cLower('frmshc.prescricao.main.modalmedicamento.grupomedicamento.dadosmedicamento.btnmedicamento'))).prop('disabled',true)
$(document.getElementById(cLower('frmshc.prescricao.main.modalmedicamento.grupoextra.btn'))).prop('disabled',true)
$(document.getElementById(cLower('frmshc.Prescricao.Main.ModalMedicamento.Buttons.NovoMedicamento'))).prop('disabled',true)
$('[data-inp-tp="checkbox"]').prop('disabled',true)
}else{
  $(cLower("[data-inp-obj-referencia-datagrid='frmshc.Prescricao.Corpo.GridMedicamento.GridMedicamento']")).removeAttr('disabled','disabled');
  $(document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMedicamento.fmeCampos.fmeModalHora.fmeBtn.btnConfirm'))).removeAttr('disabled','disabled')
  $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.cnProfissao"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.caConselhoClasse"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.anConselhoClasse"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.caUFConselho"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.cnMaterial"))).attr('disabled','disabled')
//$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.clManipuladoFormula"))).attr('disabled','disabled')
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.caApresentacao"))).attr('disabled','disabled')
fProp('frmshc.Prescricao.Main.ModalMedicamento.qtVezDia','readonly',0)
$(document.getElementById(cLower('frmshc.prescricao.main.modalmedicamento.grupomedicamento.dadosmedicamento.btnmedicamento'))).prop('disabled',false)
$(document.getElementById(cLower('frmshc.prescricao.main.modalmedicamento.grupoextra.btn'))).prop('disabled',false)
$(document.getElementById(cLower('frmshc.Prescricao.Main.ModalMedicamento.Buttons.NovoMedicamento'))).prop('disabled',false)
$('[data-inp-tp="checkbox"]').prop('disabled',false)
}