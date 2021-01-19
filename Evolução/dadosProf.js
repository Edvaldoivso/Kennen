$(document.getElementById('frmshc.evolucao.main.campoevolucao.input.dados.csfrequenciamulti')).click(function () {
  _cc.modal.show("frmshc.evolucao.main.frequencia.corpo")
  
})



window.wProff = fProp("frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnProfissional","value")



if(window.wProff){
  
window.wWhere = "cnPaciente="+ "'" + window.wPaciente + "'" + "and dtAgendaMulti = "  + window.wDataMulti + " and cnProfissional = " + "'" + window.wProff + "'"
//.wProfissional = fProp("frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnProfissional","value")

// window.wWhere = 'cnPaciente='+ "'" + [window.wPaciente] + "'" + ' and dtAgendaMulti = ' + "'" + [window.wDataMulti] +  "'"  + ' and cnProfissional = ' + '5'

_ccGrd.updateDados('frmshc.evolucao.Main.Frequencia.Corpo.grd', ' ', 'frmshc.evolucao.Main.Frequencia.Corpo.Campos.id');

}else{
window.wWhere = 'cnPaciente="0"' 
console.log(window.wWhere)
console.log(window.wProff)
_ccGrd.updateDados('frmshc.evolucao.Main.Frequencia.Corpo.grd', ' ', 'frmshc.evolucao.Main.Frequencia.Corpo.Campos.id');
//console.log('nao existe wProfissional')
  $(document.getElementById('frmshc.evolucao.main.campoevolucao.input.dados.csfrequenciamulti')).attr('data-inp-readonly', 1);
  $(document.getElementById('frmshc.evolucao.main.campoevolucao.input.dados.csfrequenciamulti')).prop("disabled", true);
}


/*

//Fixa valores nos campos de origem e judicializado.
$(document.getElementById(cLower("frmshc.evolucao"))).on("mouseover",function(){  
fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.dmSHCOrigem','value','W')
fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.hrmov_origem','value','W')

})
*/



//Ajax de busca das informações da profissão do profissional escolhido na tela
async function ajax (){
try{
const response = await $.ajax({
method: "GET",
url: url,

})


var {data} = response
console.log(data)
if(data != null){


var {0:{cnProfissao}} = data
fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnProfissao','value',cnProfissao)

}else{
fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnProfissao','value',' ')
}
}catch(error){
//console.log('sem resposta no ajax')
}
}



//Controle de profissão de acordo com o profissional escolhido
var cnProf = fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnProfissional','value')
var url =cc.url.ccasegd_token + "TABELA=shcProfissional&COLUNAS=0,cnProfissional,cnProfissao,nmProfissional,doSTS&AND&WHERE=cnProfissional="+cnProf


if(cnProf){  
ajax()  
}else{
fProp('frmshc.evolucao.Main.CampoEvolucao.Input.Dados.cnProfissao','value',' ')
}