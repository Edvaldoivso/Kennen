fProp("frmshc.Prescricao.Corpo.GridMaterial","hidden",0)
fProp("frmshc.Prescricao.Corpo.GridMaterial.fmeCtd","hidden",1)

//CheckBox
 document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.ControleH.Combobox.Periodos.Horas')).innerHTML = "<input type='hidden'>";

 
         $('[data-obj-referencia="frmshc.prescricao.corpo.gridmaterial.fmectd.fmeprocedimento.controleh.combobox.periodos"]').each(function () {
  
                $(document.getElementById(cLower(this.name))).prop("checked", false)
          
        })
  for (var c = 0; c < 24; c++) {



    if (c == 24) {

    } else {
        document.getElementById(cLower('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.ControleH.Combobox.Periodos.Horas')).innerHTML += "<div class='Jabinho' style= ' display:inline-block; margin-right: 5px; margin-top:10px'><input style= 'float:left;' type='checkbox' id='" +c + "'name='recCheck' value='" +c +':00' + "'><label for='vehicle1'> " +c +':00' + "</label><br> </div>";

    }

}