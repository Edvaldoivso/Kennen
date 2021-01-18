//aqui fica armazenado todos os codigos referentes aos campos de dados de profissional

var cnProf = fProp("frmshc.Prescricao.Main.ModalMedicamento.cnProfissional","value")
var url = cc.url.ccasegd_token + "TABELA=shcProfissional&COLUNAS=0,cnProfissional,cnProfissao,anConselhoClasse,doSTS,caConselhoClasse.caConselho,caUFConselho&AND&WHERE=cnProfissional=" + cnProf

async function ajax(){
  
  try{
    const response = await $.ajax({
      method:"GET",
      url : url,
    })
  
  var {data} = response
    
  if(data != null){
    
    var {0: {"anConselhoClasse":anConselhoClasse,cnProfissao,'caUFConselho':UF, "caConselhoClasse.caConselho":caConselho}} = data


   
    var wUf = (UF)?UF:' '
    var wCaConselho = caConselho ? caConselho : ' '
    var wanConselhoClasse = anConselhoClasse ? anConselhoClasse : ' '
    //let conselhoClasse = caConselho ? caConselho : 'nao tem'

   // var caConselho = data[0]['caConselhoClasse.caConselho']
    /*var caConselho = (caConselho)?caConselho : "";
    var anConselhoClasse = (anConselhoClasse)?anConselhoClasse : "";
    var caConselhoClasse = (caConselhoClasse)?caConselhoClasse : "";*/
    
    fProp("frmshc.Prescricao.Main.ModalMedicamento.cnProfissao","value",cnProfissao)
    fProp("frmshc.Prescricao.Main.ModalMedicamento.caConselhoClasse","value",wCaConselho)
    fProp("frmshc.Prescricao.Main.ModalMedicamento.anConselhoClasse","value",wanConselhoClasse)
    fProp("frmshc.Prescricao.Main.ModalMedicamento.caUFConselho","value",wUf)
    fProp("frmshc.Prescricao.Main.ModalMedicamento.cnProfissao","value",cnProfissao)
    //fProp("frmshc.Prescricao.Main.ModalMedicamento.caConselhoClasse","value",caConselho)
  }else{
    fProp("frmshc.Prescricao.Main.ModalMedicamento.cnProfissao","value",' ')
    fProp("frmshc.Prescricao.Main.ModalMedicamento.caConselhoClasse","value",' ')
    fProp("frmshc.Prescricao.Main.ModalMedicamento.anConselhoClasse","value",' ')
    fProp("frmshc.Prescricao.Main.ModalMedicamento.caUFConselho","value",' ')
    fProp("frmshc.Prescricao.Main.ModalMedicamento.cnProfissao","value",' ')
  }
    
  }catch(error){

  }

}

ajax();


//PEGA O NOME DO PROFISSIONAL QUE É DO INPUT TP7 E INSERE NO INPUT
var wNomeProfissional = $(document.getElementById(cLower("select2-frmshcprescricaomainmodalmedicamentocnprofissional-container"))).html()
fProp("frmshc.Prescricao.Main.ModalMedicamento.DadosProfissional.nmProfissional","value",wNomeProfissional)



/*---------------PEGANDO VALOR DO INPUT TP7 E JOGANDO NO INPUT DE NOME DA PROFISSAO----------------*/
var wNomeProfissao = $(document.getElementById(cLower("select2-frmshcprescricaomainmodalmedicamentocnprofissao-container"))).html()
fProp("frmshc.Prescricao.Main.ModalMedicamento.DadosProfissional.dsProfissao","value",wNomeProfissao)


