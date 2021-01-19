var cnProf2 = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.cnProfissaoIndicacao","value")
var url =cc.url.ccasegd_token+'TABELA=shcConselho&COLUNAS=0,UF,caConselho,caConselho.cnProfissao,caConselho.nmProfissao  &WHERE=caConselho.cnProfissao=' + cnProf2 

if(cnProf2 !=="" || cnProf2 !== undefined) { 
  
async function ajax (){
  try{
     const response = await $.ajax({
      method: "GET",
      url: url,      
     })  
   var {data} = response   
  if(data != null){
   var {0:{caConselho, UF}} = data

   caConselho = (caConselho)? caConselho: " "; 
   UF = (UF)? UF : " "; 


   fProp('frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.doUFConselhoIndicacao','value',UF)  
   fProp('frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.cnConselhoIndicacao','value',caConselho)    
  // fProp('frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.PlanoSaudeConvenio.anRegistroConcelho','value'," ")

  }
   
  }catch(error){
     console.log(' ')
   }
}
  ajax() 
  
}else{
    // fProp('frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.PlanoSaudeConvenio.anRegistroConcelho','value'," ")
    fProp('frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.doUFConselhoIndicacao','value'," ") 
    fProp('frmshc.avaliacaopacientes.main.avaliacao.core.indicacaoclinica.cnConselhoIndicacao','value'," ")    
    
}