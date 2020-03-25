function fComparaValor(pNumComparar,pTabela, pCola, pColb, pCampo1, pCampo2){

	
    //Verifica Campos Obrigatorios
	if(pNumComparar == ""){
		console.log("Insira a quantidade para comparar")
			
	}
		
	
    if (pTabela == "") {
        console.log("Insira a tabela")
        _cc.msg("Informe a tabela", 'danger')
    }


    if (pCola == "" && pColb == "") {
        console.log("Informe uma Coluna")
        _cc.msg("Informe uma Colunas", 'danger')
    }



    if (pCampo1 == "" && pCampo2 == "") {
        console.log("Informe o Campo")
        _cc.msg("Informe um Campo", 'danger')

    }




//Para comparando 2 colunas
	if(pNumComparar == 2){
	console.log("Comparando 2 valores")

    //Insere na URL de consulta se os valores estiverem OK e trata o necessário		


    if (pTabela !== "") {

        urlcompara = cc.url.ccasegd_token + "tabela=" + pTabela;
    }


    if (pCampo1 !== "") {

        var wCampo1 = fProp(pCampo1, 'value')
        console.log(wCampo1 + " Campo1")

    }

    if (pCampo2 !== "") {

        var wCampo2 = fProp(pCampo2, 'value')
        console.log(wCampo2 + " Campo2")

    }


    if (pCola !== "") {
        urlcompara += "&colunas=" + pCola + ",";
    }
	
    if (pColb !== "") {
        urlcompara += pColb + "&where=" + pCola + "=" + '"' + wCampo1 + '"' + " & " + pColb + "=" + wCampo2 + "&limit=10";;
    }

	}
	
//Comparando 1 Coluna
	
	if(pNumComparar == 1){
	console.log("Comparando 1 valor")
//Insere na URL de consulta se os valores estiverem OK e trata o necessário		


    if (pTabela !== "") {

      var  urlcompara = cc.url.ccasegd_token + "tabela=" + pTabela;
    }



	if(pCampo1 == ""){
		pCampo1 = pCampo2;
		console.log(pCampo1+ "campo 1 cima")
	}else{
		pCampo1 = pCampo1
		console.log(pCampo1 + " campo1 baixo")
	}

    if (pCampo1 !== "") {

        var wCampo1 = fProp(pCampo1, 'value')
        console.log(wCampo1 + " Campo1")

    }

	if(pCola == ""){
		pCola = pColb;
	}else{
		pCola = pCola;
	}


    if (pCola !== "") {
        urlcompara += "&colunas=" + pCola + "&where=" + pCola + "=" + '"' + wCampo1 + '"' + "&limit=10";
    }
	
    

	}



    //Faz a busca no DB		

    console.log("Url " + urlcompara)

    $.get(urlcompara).then(function (resBusca) {
        if (resBusca.cnRetorno == 1) {
            console.log('RETORNO ' + resBusca.cnRetorno)
            console.log('RETOTNO ' + resBusca.anMensagem)

            _cc.msg('Erro' + resBusca.anMensagem + '', 'danger')
            _cc.loading.hide("w-salvando-dados");
            _cc.msg('Erro durante a operação (Ajax)', 'danger')


        } else {

            if(resBusca.data.length == 0){
                console.log("Valor não Existe")
				return false;
            }else{
               console.log("Valor Já Existe")
			   return true;
            }
            
            


            

            

        }

    })

	

}//Fim da Funcao

