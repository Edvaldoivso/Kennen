

var contains = $("#DataTables_Table_1 tbody tr").length
if (contains != 0 ) {
    console.log(contains)
    console.log("TEM")
    _ccInp.limpa('frmshc.Conselho.Main.Profissão.Grid.grd')
    
    _cc.msg('Não é possivel cadastrar mais de uma profissão pra um mesmo conselho','danger')
    
} else {
    console.log("NAO TEM")
}




/*var prof = $(document.getElementById('frmshc.Conselho.Main.Profissão.Core.ConselhoProfissao.Campos.cnProfissao'.toLowerCase())).val()
//var contains = $("a[data-grd-inp-val='" + prof + "']").length
//console.log("prof:" + prof)
//console.log("contains:" + contains)

//if (contains) {
    //console.log('tem')
    //$(document.getElementById('frmshc.Conselho.Main.Profissão.Grid.Buttons.btnNovo'.toLowerCase())).prop("disabled", true)
//}else{
    //console.log('nao')
    //$(document.getElementById('frmshc.Conselho.Main.Profissão.Grid.Buttons.btnNovo'.toLowerCase())).prop("disabled", false)
//}



    if(prof){
        console.log('tem algo')
        $(document.getElementById('frmshc.Conselho.Main.Profissão.Core.ConselhoProfissao.Campos.cnProfissao'.toLowerCase())).val("")
        _cc.msg('Não é possivel cadastrar mais de uma profissão pra um mesmo conselho','danger')
    }else{
        console.log('nao tem')
        
    }*/
