async function fApresentacao() {

  const url = cc.url.ccasegd_token + 'TABELA=shcPrescricaoMaterial&COLUNAS=ID,cnMaterial,caApresentacao,caUnidadeMedida.lsUMRelacionado,caUnidadeMedida&WHERE=ID=11061'

  try {
    const response = await $.ajax({
      method: "GET",
      url
    })

    console.log(array)

    const { data } = response
    var { 0: { caApresentacao, 'caUnidadeMedida.lsUMRelacionado': lsUMRelacionado } } = data

    var lsUM = lsUMRelacionado.split('#')

    var array = lsUM.map((UM,index) => {
      
      var obj = {
        id: index,
        text:UM
      }
     return obj
    })

    console.log(array)
    console.log(data)

    $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.qtVezDia"))).select2({
      data: array
    })

    //console.log(lsUM)
    //console.log(data)   
    //console.log("apresentação:", caApresentacao)   


    fProp('frmshc.Prescricao.Main.ModalMaterial.fmeProfissional.caApresentacao', 'value', caApresentacao)
  } catch (error) {
    fProp('frmshc.Prescricao.Main.ModalMaterial.fmeProfissional.caApresentacao', 'value', " ")
  }
}

fApresentacao() 
