// Pegando valor da variavel para fazer where no ajax
var wCnProcedimento = fProp("frmshc.Prescricao.Main.ModalEnfermagem.Procedimento.cnEnfermagemProcedimento","value")
if (wCnProcedimento) {
    var url =cc.url.ccasegd_token+'TABELA=shcenfermagemProcedimento&COLUNAS=0,cnEnfermagemProcedimento,dsEnfermagemProcedimento,cnEnfermagemGrupo&WHERE=cnEnfermagemProcedimento=' + wCnProcedimento
async function ajax (){
  try{
     const response = await $.ajax({
      method: "GET",
      url: url,      
     })  
    var {data} = response
    //   ARMAZENANDO E FALANDO QUE O INPUT RECEBE O VALOR
    var wCnGrupo = (data[0].cnEnfermagemGrupo)
    fProp('frmshc.Prescricao.Main.ModalEnfermagem.DadosInternacao.InpGrupo','value',wCnGrupo)
  }catch(error){
     console.log(error)
   }
}

ajax()
} else {
    fProp('frmshc.Prescricao.Main.ModalEnfermagem.DadosInternacao.InpGrupo','value', ' ')
}