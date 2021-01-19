var cnProf = fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.cnProfissional", "value")
var url = cc.url.ccasegd_token + "TABELA=shcProfissional&COLUNAS=0,cnProfissional,nmProfissional,cnProfissao,cnProfissao.nmProfissao,anConselhoClasse,doSTS,caConselhoClasse.caConselho,caConselhoClasse.UF&AND&WHERE=cnProfissional=" + cnProf

if (cnProf){
  ajax()
}else{
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.nmProfissional", "value", ' ')  
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.cnProfissao", "value", ' ')
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.caConselhoClasse", "value", ' ')
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.anConselhoClasse", "value", ' ')
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.caUFConselho", "value", ' ')

}

async function ajax() {

  try {
    const response = await $.ajax({
      method: "GET",
      url: url,
    })

    var { data } = response
   
    if (data) {

      var { 0: { anConselhoClasse, cnProfissao, nmProfissional,"cnProfissao.nmProfissao": nmProfissao , 'caConselhoClasse.UF': UF, "caConselhoClasse.caConselho": caConselho } } = data


      var wUf = (UF) ? UF : ' ';
      var wCaConselho = (caConselho) ? caConselho : ' ';
      var wAnConselho = (anConselhoClasse) ? anConselhoClasse : ' ';



      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.cnProfissao", "value", cnProfissao)
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.nmProfissional","value", nmProfissional)
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.dsProfissao","value", nmProfissao)
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.caConselhoClasse", "value", wCaConselho)
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.anConselhoClasse", "value", wAnConselho)
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.caUFConselho", "value", wUf)

    } else {

      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.cnProfissao", "value", ' ')
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.caConselhoClasse", "value", ' ')
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.anConselhoClasse", "value", ' ')
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.caUFConselho", "value", ' ')
      fProp("frmshc.Prescricao.Main.ModalEnfermagem.ProfissionalEnfermagem.dsProfissao", "value", ' ')

    }

  } catch (error) {
    console.log(error)
  }

}