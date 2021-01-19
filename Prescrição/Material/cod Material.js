//codigos referentes aos campos de materiais


async function fApresentacao() {
  var cnMaterial  = fProp('frmshc.Prescricao.Main.ModalMaterial.fmeProfissional.cnMaterial','value')
    const url = cc.url.ccasegd_token + 'TABELA=shcProduto&COLUNAS=ID,cnProduto,caUMapresentacao,caUM&WHERE=cnProduto='+cnMaterial
  
    try {
      const response = await $.ajax({
        method: "GET",
        url
      })
  
      const { data } = response
      var { 0: { /*caApresentacao, */caUM:Unidade } } = data
  
  
     
      const url2 = cc.url.ccasegd_token + 'TABELA=shcProdutoUnidadeMedida&COLUNAS=ID,caUM,lsUMRelacionado&WHERE=caUM=' + "'"+ Unidade + "'"
  
      const response2 = await $.ajax({
        method: "GET",
        url:url2
      })
  
      var { data:data2 } = response2
      var { 0: { caUM, lsUMRelacionado} } = data2
  
      if(caUM){
        var arrayLs = []
  
        arrayLs.push({
          id: arrayLs.length,
          text: Unidade
        })
        console.debug('arrayls1', arrayLs)
      }
  
  
  
      if (lsUMRelacionado) {
        var lsUM = lsUMRelacionado.split('#')
        lsUM.map((UM) => {
          arrayLs.push({
            id: arrayLs.length,
            text: UM
          })
          //console.log(UM, index)
        })
      }
      // console.log(array.length)
      //console.log(data)
  
      $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMaterial.caUnidadeMedida"))).select2({
        data: arrayLs
      })
  
  
      console.debug('arrayls2', arrayLs)
  
      console.log(lsUM)
      console.log(data)   
      console.log(data2) 
     // console.log("apresentação:", caApresentacao)   
  
  
      //fProp('frmshc.Prescricao.Main.ModalMaterial.fmeProfissional.caApresentacao', 'value', caApresentacao)
      return arrayLs
    } catch (error) {
      fProp('frmshc.Prescricao.Main.ModalMaterial.fmeProfissional.caApresentacao', 'value', " ")
    }
  }
  
  fApresentacao()
  
  
  
  /*------------------ CHAMADA DA FUNÇÃO DE CONCATENAÇÃO DE FREQUENCIA EM MATERIAL ----------------------*/
  fConcatenaInstrucaoMaterial()


//cod do fornecedor

  const Fornecedor = fProp('frmshc.Prescricao.Main.ModalMaterial.fmeDadosItr.doFornecedorTP','value')
const Pac = fProp('frmshc.Prescricao.Corpo.GridPaciente.cnPaciente','value')

if(Fornecedor == '1'){
  ajax()
  
}else{
    $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMaterial.Buttons.btnSalvar"))).removeAttr("disabled", "disabled");
}

async function ajax() {
  
  const url = cc.url.ccasegd_token + 'TABELA=shcOrcamento&COLUNAS=ID,cnPaciente,doSTS,doSituacao,cnProduto&WHERE=CnPaciente=' + Pac +' &LIMIT=1&ORDERBY=ID desc'

  try {
    const response = await $.ajax({
      method: "GET",
      url
    })

    const { data } = response

    const { 0: { doSTS,doSituacao,cnProduto,cnPaciente } } = data

    //console.log('Status:${doSTS}, Situação:${doSituacao}, Produto:${cnProduto}, Paciente:${cnPaciente}')
    
    if(doSTS == "3" || doSTS == "1" || doSTS == "4"){
      
      $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMaterial.Buttons.btnSalvar"))).attr("disabled", "disabled");
    }
    


  } catch (error) {
    console.log(error)
  }

}