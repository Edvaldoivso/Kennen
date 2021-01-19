//Seta o valor do campo de Qauntidade de dias como 1 se for colocado o item de dose unica

/*
var qtVezDia = fProp('frmshc.Prescricao.Main.ModalMaterial.qtVezDia','value')

var freq = fProp('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.cnFrequencia','value')

if(qtVezDia > 1 && freq=="1" ){
 fProp('frmshc.Prescricao.Main.ModalMaterial.qtVezDia','value',1)
  
  //console.log(' dose unica')
}

if(freq === "4") fProp('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.nrDiasDuracao','titulo','Quinzena')

if(freq === "3") fProp('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.nrDiasDuracao','titulo','Semanas')

if(freq === "2") fProp('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.nrDiasDuracao','titulo','Dias')

if(freq === "5") fProp('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.nrDiasDuracao','titulo','Meses')


if(freq === "1") fProp('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.nrDiasDuracao','titulo','Dia')



*/


var WfreqDose = fProp('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.cnFrequencia','value')



if(WfreqDose == '1'   ){
  
  fProp('frmshc.Prescricao.Corpo.GridMaterial.fmeCtd.fmeProcedimento.qtDose','value',1)
fProp('frmshc.Prescricao.Main.ModalMaterial.qtVezDia','value',1) 
  
  
}else{}



/*------------------ CHAMADA DA FUNÇÃO DE CONCATENAÇÃO DE FREQUENCIA EM MATERIAL ----------------------*/
fConcatenaInstrucaoMaterial()