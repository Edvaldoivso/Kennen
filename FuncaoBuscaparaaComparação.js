function fComparaValor(pTabela,pCola,pColb,pCampo1,pCampo2){
	
	
	//Verifica Campos Obrigatorios
			if(pTabela == ""){
				console.log()
				_cc.msg("Informe a tabela",'danger')
			}
	
			
			if(pCola == "" || pColb == ""){
				console.log("Informe as duas Colunas")
				_cc.msg("Informe as Colunas",'danger')
			}
	
		
			
			if(pCampo1 == "" && pCampo2 ==""){
				
				console.log("Informe o Campo")
				_cc.msg("Informe um Campo",'danger')
				
			}
			
//Insere na URL de consulta se os valores estiverem OK e trata o necessário		


			if(pTabela !==""){
			
				urlcompara = cc.url.ccasegd_token + "tabela="+pTabela;
			}


		   if(pCampo1 !== ""){
			
			var wCampo1 = fProp(pCampo1,'value')
			console.log(wCampo1 +" Campo1")
			
            }
		
		    if(pCampo2 !== ""){
			
			var wCampo2 = fProp(pCampo2,'value')
			console.log(wCampo2 +" Campo2")
			
		   }		
			
			
			if(pCola !== ""){
				urlcompara +="&colunas="+pCola+",";
			}
			
			if(pColb !== ""){
				urlcompara +=pColb + "&where="+ pCola + "=" + '"'+wCampo1+'"'+" & "+pColb+"="+wCampo2+"&limit=10";;
			}
			
			
//Faz a busca no DB		
			
			console.log(urlcompara)
	
            $.get(urlcompara).then(function (resBusca) {
                if (resBusca.cnRetorno == 1) {
                    console.log('RETORNO ' + resBusca.cnRetorno)
                    console.log('RETOTNO ' + resBusca.anMensagem)
                    
                    _cc.msg('Erro' + resBusca.anMensagem + '', 'danger')
                    _cc.loading.hide("w-salvando-dados");
                    _cc.msg('Erro durante a operação (Ajax)', 'danger')
                    return;
					
					
					
				}
			})

}//Fim da Funcao

