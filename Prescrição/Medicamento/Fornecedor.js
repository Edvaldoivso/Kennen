//codigo q bloqueia prescrição dependendo do status

const Fornecedor = fProp('frmshc.Prescricao.Main.ModalMedicamento.doFornecedorTP','value')

const Pac = fProp('frmshc.Prescricao.Corpo.GridPaciente.cnPaciente','value')

if(Fornecedor == '1'){
  ajax()

}else{
    $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.Buttons.NovoMedicamento"))).removeAttr("disabled", "disabled");
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

   // console.log('Status:${doSTS}, Situação:${doSituacao}, Produto:${cnProduto}, Paciente:${cnPaciente}')
    
    if(doSTS == "3" || doSTS == "1" || doSTS == "4"){
      
      $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.Buttons.NovoMedicamento"))).attr("disabled", "disabled");
    }
    


  } catch (error) {
    console.log(error)
  }

}