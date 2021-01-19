cnProf = fProp("frmshc.Prescricao.Main.ModalMaterial.cnProfissional","value")
var url = cc.url.ccasegd_token + "TABELA=shcProfissional&COLUNAS=0,cnProfissional,cnProfissao,anConselhoClasse,doSTS,caConselhoClasse.caConselho,caConselhoClasse.UF&AND&WHERE=cnProfissional=" + cnProf

async function ajax(){
  
  try{
    const response = await $.ajax({
      method:"GET",
      url : url,
    })
    
  var {data} = response
  //console.log(data)
  if(data){
    
    var {0: {anConselhoClasse,cnProfissao,'caConselhoClasse.UF':UF, "caConselhoClasse.caConselho":caConselho}} = data

    //console.log(UF)
    //console.log(caConselho)
   
    var wUf = (UF)? UF: ' '

  var wCaConselho = (caConselho) ? caConselho : ' '
  
  var wAnConselho = (anConselhoClasse) ? anConselhoClasse : ' '
  
  
    //let conselhoClasse = caConselho ? caConselho : 'nao tem'

   // var caConselho = data[0]['caConselhoClasse.caConselho']
    var caConselho = (caConselho)?caConselho : "";
    var anConselhoClasse = (anConselhoClasse)?anConselhoClasse : "";
    var caConselhoClasse = (caConselhoClasse)?caConselhoClasse : "";
    
    fProp("frmshc.Prescricao.Main.ModalMaterial.cnProfissao","value",cnProfissao)
    fProp("frmshc.Prescricao.Main.ModalMaterial.caConselhoClasse","value",wCaConselho)
    fProp("frmshc.Prescricao.Main.ModalMaterial.anConselhoClasse","value",anConselhoClasse)
    fProp("frmshc.Prescricao.Main.ModalMaterial.caUFConselho","value",wUf)
    //fProp("frmshc.Prescricao.Main.ModalMedicamento.cnProfissao","value",cnProfissao)
    //fProp("frmshc.Prescricao.Main.ModalMedicamento.caConselhoClasse","value",caConselho)
  }else{
 
    fProp("frmshc.Prescricao.Main.ModalMaterial.cnProfissao","value",' ')
    fProp("frmshc.Prescricao.Main.ModalMaterial.caConselhoClasse","value",' ')
    fProp("frmshc.Prescricao.Main.ModalMaterial.anConselhoClasse","value",' ')
    fProp("frmshc.Prescricao.Main.ModalMaterial.caUFConselho","value",' ')
    //fProp("frmshc.Prescricao.Main.ModalMedicamento.cnProfissao","value",' ')
  }
    
  }catch(error){
    console.log(error)
  }
  
}

ajax();

/*-------------PEGA O VALOR DO INPUT TP7 E JOGA NO INPUT-------------*/
var wNomeProfissional = $(document.getElementById(cLower("select2-frmshcprescricaomainmodalmaterialcnprofissional-container"))).html()
fProp("frmshc.Prescricao.Main.ModalMaterial.fmeProfissional.nmProfissional","value",wNomeProfissional)




/*----------------JOGA VALOR DO INPUT TP7 NO INPUT DO NOME--------------*/
var wNomeProfissao = $(document.getElementById(cLower("select2-frmshcprescricaomainmodalmaterialcnprofissao-container"))).html()
fProp("frmshc.Prescricao.Main.ModalMaterial.dsProfissao","value",wNomeProfissao)



