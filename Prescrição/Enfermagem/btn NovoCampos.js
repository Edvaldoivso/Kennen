//Insere o profissional do usuario logado no campo de profissional
setTimeout(function(){fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.cnProfissional","value",cc.global.cnProfissional)},1000)






//Libera o salvamento e remove a mensagem informativa
fProp("frmshc.Prescricao.Main.ModalEnfermagem.Buttons.SayEnfermagem","value","  ")
fProp("frmshc.Prescricao.Main.ModalEnfermagem.Buttons","hidden",0)

//Seta uma data inicial ao criar um NOVO de acordo com a data atual e permite alteração 
fProp("frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.dtInicio","value",WdTf)

      
//cria checkbox padrao
   $('[data-obj-referencia="frmshc.prescricao.main.modalenfermagem.procedimento.controlehorario.periodos.p"]').each(function () {
  
                $(document.getElementById(cLower(this.name))).prop("checked", false)
          
        })
document.getElementById(cLower('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.ControleHorario.HorariosM.CheH')).innerHTML = ' '
        
        
     
for (var c = 0; c < 24; c++) {



    if (c == 24) {

    } else {
       
        document.getElementById(cLower('frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.ControleHorario.HorariosM.CheH')).innerHTML +=    "<div class='Jabinho' style= ' display:inline-block; margin-right: 5px; margin-top:10px'><input style= 'float:left;' type='checkbox' id='" +c + "'name='recCheck' value='" +c +':00' + "'><label for='vehicle1'> " +c +':00' + "</label><br> </div>";

    }

}