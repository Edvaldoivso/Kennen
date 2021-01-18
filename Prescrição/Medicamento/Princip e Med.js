window.wPrincipiTela = fProp("frmshc.Prescricao.Main.ModalMedicamento.cnPrincipioAtivo","value")
var wPrincipioGrid = fProp("frmshc.Prescricao.Corpo.ModalMedicamento.Campos.cnPrincipioAtivo","value")

if(window.wPrincipiTela == wPrincipioGrid){

}else{
     fProp("frmshc.Prescricao.Main.ModalMedicamento.cnMaterial","value",0)//Campo que recebe o cn e mostra a descrição

}




//Ajax do Principio Ativo
//função de demanda do grid modal de medicamento relacionado ao principio ativo

window.wPrincipiTela = fProp("frmshc.Prescricao.Main.ModalMedicamento.cnPrincipioAtivo","value")

function Principio(){
  if(window.wPrincipiTela == "" || window.wPrincipiTela == undefined){
    window.wCondicaoProduto = "cnPrincipioAtivo >= 0"
       _ccGrd.updateDados('frmshc.Prescricao.Corpo.ModalMedicamento.Grid.grd', ' ', 'frmshc.Prescricao.Corpo.ModalMedicamento.Campos.id');
             
  }else{
    
    
    window.wCondicaoProduto =  window.wPrincipiTela

       _ccGrd.updateDados('frmshc.Prescricao.Corpo.ModalMedicamento.Grid.grd', ' ', 'frmshc.Prescricao.Corpo.ModalMedicamento.Campos.id');
    }
  }
  


Principio()

//codigo do grid de med///////


//Abre o modal e organiza os nomes dos campos
//_cc.modal.close(cLower('frmshc.Prescricao.Corpo.ModalMedicamento')) //Se voce nao sentiu a necessidade desta acao delete este codigo

//Inser o principio Ativo e a U.M e o Medicamento nos campos da tela
var wtxtIntru = fProp("frmshc.Prescricao.Corpo.ModalMedicamento.anInstrucao",'value')

var wclManipulado = fProp ('frmshc.Prescricao.Corpo.ModalMedicamento.Campos.clManipuladoFormula','value')

var wcnProduto = fProp("frmshc.Prescricao.Corpo.ModalMedicamento.Campos.cnProduto","value")

var wcnPrinc = fProp("frmshc.Prescricao.Corpo.ModalMedicamento.Campos.cnPrincipioAtivo","value")

var wcaUM = fProp("frmshc.Prescricao.Corpo.ModalMedicamento.caUM","value")

var wConc = fProp("frmshc.Prescricao.Corpo.ModalMedicamento.Campos.qtConcentracao","value")


fProp("frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.Concentrado","value",wConc)

fProp("frmshc.Prescricao.Main.ModalMedicamento.cnMaterial","value", wcnProduto)

fProp("frmshc.Prescricao.Main.ModalMedicamento.cnPrincipioAtivo","value",wcnPrinc)



fProp("frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.clManipuladoFormula","value",wclManipulado)

//fProp("frmshc.Prescricao.Main.ModalMedicamento.caUnidadeMedida","value",wcaUM)

fProp('frmshc.Prescricao.Main.ModalMedicamento.anInstrucaoFrequencia','value',wtxtIntru)

// FECHA O MODAL APÓS SELECIONAR O MEDICAMENTO
_cc.modal.close("frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.ModalAdministracao")


//Codigo de Via de administração, o codigo abaixo basicamente controla o "where" do grid de via de adm de acordo com o medicamento
//

var cnMaterial = fProp('frmshc.Prescricao.Main.ModalMedicamento.cnMaterial','value') 





///
$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.caUnidadeMedida"))).empty().trigger("change");

$(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.doViaAdministracao"))).empty().trigger("change");

if(cnMaterial){ // o grid de via de administração é relacionado com o medicamento, caso algum valor no campo exista, este codigo da função ajax() é executada
  fProp('frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.doViaAdministracao','value', ' ') 
  fProp('frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.caApresentacao','value',' ')
  ajax()
  //fAjaxMat(cnMaterial)
  ajax2()
  
  
}else{
    fProp('frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.caApresentacao','value',' ')
    /* LINPANDO INP DE APRESENTAÇÃO DE FORMA MANUAL POIS ELE NÃO TEM RELACIONAMENTO COM GRID*/  
    fProp('frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.Apres','value',' ')
    window.wWherePres = "CNREGTP = 1 and cnDominio = 0" // caso nao exista algum valor, por default o where do grid fica como "CNREGTP = 1 and cnDominio = 0"
    _ccGrd.updateDados('frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.ModalAdministracao.grd', ' ', 'frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.ModalAdministracao.Campos.id');
}

async function ajax() {

  var url = cc.url.ccasegd_token + "TABELA=shcProduto&COLUNAS=id,cnProduto,lsViaAdm,caUMapresentacao&WHERE=cnProduto="+cnMaterial 

  try {
    const response = await $.ajax({
      method: "GET",
      url: url
    })

    const { data } = response

    var { 0: { lsViaAdm, caUMapresentacao } } = data  //Na variavel lsViaAdm contém o numero/letra q indica a via de adm daquele medicamento, como por exemplo: " 1#3#A#B "

    //console.debug("vias de adm",lsViaAdm)
    if(caUMapresentacao){
    fProp('frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.Apres','value',caUMapresentacao)
  }else{
    fProp('frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.Apres','value',' ')
  }
  
  

  var arrayVia = lsViaAdm.split('#') //com o split, é criado um array com cada item do array sendo uma letra/numero q foi separada por " # " exemplo:  " 1,3,A,B"
  //console.log(arrayVia)

    var tam = arrayVia.length //linha q verifica o tamanho do array
    

    var newArray = []

    if (tam > 1) { 
      
      // existe uma logica bem especifica para o where do grid funcionar:
    
//A logica consiste em criar registros para cada item daquele array, mas o where fica diferente se houver apenas 1 registro, por exemplo:

//vamos supor que exista apenas um registro, neste caso ficaria assim: " CaDominioItem = A  "

// Mas e se o array ter mais um registro? ficaria assim: " CaDominioItem = A or CaDominioItem = B "  

//veja que existe um "OR" ali, isso pq ele é necessario pra trazer o registro que contém aquele codigo do Item, q nesse caso é o "b", isso vale pra mais registros tbm

// como por exemplo :  " CaDominioItem = A or CaDominioItem = B or CaDominioItem = C or CaDominioItem = 1"

// Ou seja, para cada registro DEPOIS do primeiro item, foi criado um " or CaDominioItem = "


      var viaInicio = arrayVia.shift() //pega o primeiro item do array
      window.inicio = "caDominioItem = " + "'"+ viaInicio + "'"  // adiciona um " CaDominioItem = "
      

      arrayVia.forEach((via) => {
        window.domResto = " or caDominioItem =" + "'"+ via + "'"  //agora para cada novo item além do primeiro, é criado um " or CaDominioItem = "" "
      
        newArray.push(window.domResto) // pra cada " or CaDominioItem ", adiciona no array newArray
      })
      var re = /,/gi; // retira a virgula

      window.whereFinal = window.inicio + newArray.toString().replace(re, ' ') // o resultado é armazenado na variavel whereFinal
  
    
      window.wWherePres = "CNREGTP = 1 and cnDominio = 513 and ("+ window.whereFinal + ")" //resultado por exemplo: "CNREGTP = 1 and cnDominio = 513 and CaDominioItem = A or CaDominioItem = B"
 var ulr2 = cc.url.ccasegd_token + "TABELA=tidominio&COLUNAS=id,dsdominio,cadominioitem&WHERE="+window.wWherePres
      var response2 = await $.ajax({
        method: "GET",
        url: ulr2
      })
      var { data:data2} = response2

      console.log(data2)
      var arrayLs = []

      data2.forEach((via) => {
        var { dsdominio, cadominioitem} = via
        var obj = {
          id:cadominioitem,
          text: dsdominio
        }
        arrayLs.push(obj)
        
      })
      $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.doViaAdministracao"))).select2({
        data: arrayLs
      })
   //   console.debug('arraylsvia',arrayLs)
    }else{
      //a partir daqui, é se por acaso não exister mais de 1 item naquele array
    
       var viaInicio = arrayVia.shift() // pega o primeiro item do array
       //console.debug('via inicio',viaInicio)
       
       if(!viaInicio){ // caso nao existe algum item no array
     $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.doViaAdministracao"))).empty().trigger("change");

       }else{
         
         window.inicio = "caDominioItem = " + "'"+ viaInicio + "'"  // caso exista algum item, o where fica desse jeito por exemplo : CaDominioItem = A
         window.whereFinal = window.inicio
         
      var ulr4 = cc.url.ccasegd_token + "TABELA=tidominio&COLUNAS=id,dsdominio,cadominioitem&WHERE="+window.whereFinal

      var response4 = await $.ajax({
        method: "GET",
        url: ulr4
      })
      var { data:data4} = response4

   //   console.log(data4)
      var arrayLs4 = []

      data4.forEach((via) => {
        var { dsdominio, cadominioitem} = via
        var obj = {
          id:cadominioitem,
          text: dsdominio
        }
        arrayLs4.push(obj)
        
      })

      $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.GrupoExtra.doViaAdministracao"))).select2({
        data: arrayLs4
      })

  //    console.debug('arrayls4',arrayLs4)
       }
      
      
      
    }
  

  } catch (error) {
 
  }
} 



/* FUNÇÃO PARA CONCATENAÇÃO DA INSTRUÇÃO*/
window.fConcatenaInstrucao()


///Função que controla as unidade de medida

async function ajax2() {
  
  
  const url =cc.url.ccasegd_token + 'TABELA=shcProduto&COLUNAS=ID,cnProduto,caUMapresentacao,caUM&WHERE=cnProduto='+cnMaterial // url para trazer apresentação e unidade de medida
try{
  var response = await $.ajax({
      method: "GET",
      url
    })

    var { data } = response
    var { 0: { /*caApresentacao,*/ caUM:Unidade } } = data

//////////////////////////////////

    var url2 = cc.url.ccasegd_token + 'TABELA=shcProdutoUnidadeMedida&COLUNAS=ID,caUM,lsUMRelacionado&WHERE=caUM=' + "'"+ Unidade + "'" //url para unidade de medida relacionada


    var response2 = await $.ajax({
      method: "GET",
      url:url2
    })

    var { data:data2 } = response2
    var { 0: { caUM, lsUMRelacionado} } = data2

    if(caUM){
      var arrayLs = []
// a estrutura para utilizar o select2 tem q ser bem especica, cada item no inputTP 7 corresponde um obj com prop ID e text

      arrayLs.push({
        id: Unidade, //o select2 exige q cada id tem q ser unico, no caso o id aqui é o tamanho do array quando o obj esta sendo inserido
        text: Unidade
      })
      //console.debug('arrayls1', arrayLs)  //Nessas linhas, é criado um array vazio e realizado um push dentro desse array
      //o obj q vai dentro desse array é o nome da unidade de medida principal do medicamento
      //exemplo: 
      /**
       * [
       *  { id:0,
       *    text:UN,
       *   }
       * ]
       */
    }



    if (lsUMRelacionado) {  //a variavel lsUMRelacionado é uma string separada por '#' exemplo: " L#ML#U "
      var lsUM = lsUMRelacionado.split('#') //com o split, é criado uma array e cada item é uma string q foi separada pelo #
      lsUM.forEach((UM) => { //para cada medida relacionada é criado um obj q vai ser inserido no array do select2 
        arrayLs.push({
          id: UM,
          text: UM
        })
        //console.log(UM, index)
      })
    }

    //console.log(data)
    //console.log(data2)

    $(document.getElementById(cLower("frmshc.Prescricao.Main.ModalMedicamento.caUnidadeMedida"))).select2({
      data: arrayLs  //informa q os itens do inputTP 7 vai ser as medidas relacionadas q contém no arrayLs
    })


   // console.debug('arrayls unidade', arrayLs)

   // console.log(lsUM)
    //console.log(data)   
    //console.log("apresentação:", caApresentacao)   


   // fProp('frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.caApresentacao', 'value', caApresentacao)
    return arrayLs
  } catch (error) {
    fProp('frmshc.Prescricao.Main.ModalMedicamento.GrupoMedicamento.DadosMedicamento.caApresentacao', 'value', " ")
  }
}