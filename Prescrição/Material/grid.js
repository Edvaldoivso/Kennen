eval(window.wrotinaIncicial)
fProp("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd","hidden",0)

//Este codigo controla bloqueio de acordo com audição do reg
//está documentado pois material não tem a necessidade de ser auditado Att:Edvaldo 05/01/2020
/*
var wAuditado = fProp("frmshc.Prescricao.Main.ModalMaterial.doAuditado","value");

if(wAuditado == "S"){
$(cLower("[data-inp-obj-referencia-datagrid='frmshc.Prescricao.Corpo.GridMaterial.grd']")).attr('disabled','disabled');
fProp('frmshc.Prescricao.Main.ModalMedicamento.qtVezDia','readonly',1)

}else{
  $(cLower("[data-inp-obj-referencia-datagrid='frmshc.Prescricao.Corpo.GridMaterial.grd']")).removeAttr('disabled','disabled');
}

*/