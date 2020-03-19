try{
//Edvaldo Alterou aqui o arquivo
    //Variaveis Globais
    
      
        //---------------------------------------------------  Campos Antigos----------------------------------------------
        window.wPaciente = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.paciente")).val();
        window.wPeriodoInicio = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.dtperiodoinicio")).val();
        window.wPeriodoFinal = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.dtperiodofinal")).val();
        window.wTipo = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.dotp")).val();
        window.wAuditado = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.doauditado")).val();
        window.wProfissional = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.cnprofissional")).val();
    //-----------------------------------------------------Novos Campos--------------------------------------------------
        window.wdtIncSysInicio = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.dtincsysinicial")).val();    
        window.wdtIncSysFim = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.dtincsysfim")).val(); 
        window.wPacJud = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.pacjudicializado")).val();
        window.wProfissao = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.profissao")).val();    
        window.wFilial = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.filial")).val();
        window.wConvenio = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.convenio")).val();
        window.csFrequenciaMulti = $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.csagendamulti")).val();
    
        var wCampos=[csFrequenciaMulti,wConvenio,wFilial,wProfissao,wPacJud,wdtIncSysFim,wdtIncSysInicio,wProfissional,wAuditado,wTipo,wPeriodoFinal,wPeriodoInicio,wPaciente];
    
    
    //-----------------------------------------------------Inicio das Rotinas------------------------------------------------
    
    
    
    
        if(wPeriodoInicio =="" && wPeriodoFinal ==""){
            _cc.msg('Escolha um periodo de Entrada e Saida','danger');
    
    
            }else{
    
    
                console.log(wCampos + "  Este foi o seu array  ");
                _cc.msg('Pesquisando entre: '+ wPeriodoInicio +' a '+  wPeriodoFinal ,'success');
                Filtro();    
                _ccGrd.updateDados('frmshc.evolucao.CorpoFiltro.Campo.Grid.grd',' wConteudoWhere ', 'frmshc.evolucao.CorpoFiltro.Campo.Visualizacao.ID');
                fProp('frmshc.evolucao.CorpoFiltro.Campo.Grid','hidden',0);
        
                var Teste  = $(document.getElementById("frmshc.evolucao.CorpoFiltro.Campo.Grid.grd")).has()("span");
    
    
               
    
            }
            
    
    
    
    
    
    //------------------------------Abaixo a funcao do filtro que só será chamada se as condições acima forem válidas.----------------------
    
    
    function Filtro() {
    
    
           console.log(wTipo)  // nao funciona no filtro pois é dmCaractere
           console.log(wAuditado)   //   nao funciona no filtro pois é dmCaractere
           console.log(wPaciente)
           console.log(wPeriodoInicio)
           console.log(wPeriodoFinal)
           console.log(wFilial) 
           console.log(wConvenio)  
           console.log(wProfissional) 
           console.log(wProfissao)  
        //-------------------------------------------------------------------------------------------------
         console.log(wdtIncSysInicio)   //ok   ambos fazem parte da consulta do dtIncSys uma comparacao
         console.log(wdtIncSysFim)
        //---------------------------------------------------------------------------------------------------
        console.log(wPacJud)    // pac_judicializado de :  see_hora_movimentacao
        console.log(csFrequenciaMulti)  
     //-------------------------------------------------------------------------------------------------
        window.wConteudoWhere =" ";  
         
        
        wPaciente = (wPaciente == "" || wPaciente ==null)? 0 : wPaciente;
       
           
        
        if(wPaciente == 0){
             wConteudoWhere += " cnPaciente >='" + wPaciente + "'";
             
             
        }else if(wPaciente !== 0 && wPaciente!== "" && wPaciente !==null){
            wConteudoWhere += " cnPaciente ='" + wPaciente + "'";
        }
        
       if(wPeriodoInicio !=="" && wPeriodoFinal !== ""){
            wConteudoWhere += " and dtEntrada > '" +  wPeriodoInicio + "' and dtSaida < '" + wPeriodoFinal + "'";
        }
           
        if(wFilial !== "" && wFilial !== 0){
            wConteudoWhere += " and cnpaciente.cnempresa="+ wFilial+ " ";
        }
        
        if(wConvenio !=="" && wConvenio !== 0){
            wConteudoWhere += " and cnpaciente.cnconvenio="+ wConvenio + " ";
        }
        
        if(wProfissional !== "" && wProfissional !== "" ){
            wConteudoWhere += " and cnProfissional="+ wProfissional +" ";
        }
        
        if(wProfissao !=="" && wProfissao !==0){
            wConteudoWhere += "and cnprofissao="+ wProfissao + " ";
        }
        
        if(wdtIncSysInicio !=="" && wdtIncSysFim !==""){
          wConteudoWhere +=" and dtincsys > '"+ wdtIncSysInicio +"' and dtincsys < '" + wdtIncSysFim + "'";
        }
    //----------------------------------Campo que não pode ser testado pois a tabela não possui em desenv este campo------------------------------
        /*if(wPacJud !=="" && wPacJud !==""){
            wConteudoWhere += "and pac_judicializado="+wProfissao + " ";
        }
    */
        if(csFrequenciaMulti !=="" && csFrequenciaMulti !==0){  //Este campo vem de uma outra tabela.
            wConteudoWhere += "and csFrequenciaMulti= "+ csFrequenciaMulti + " ";
        }
    
        wConteudoWhere += "order by dtperiodofinal desc";
    
    //--------------------------------------------------------------------------------------------------------------------------------------------
    
    
    
                                            
        window.wConteudoURL = cc.url.ccasegd_token +"TABELA=shcPacienteEvolucao&colunas=cnpaciente,dtperiodoinicio,dtperiodofinal,dtEntrada,dtSaida,cnpaciente.cnconvenio,cnpaciente.cnempresa,dtincsys,cnprofissao,cnProfissional&where=" 
        
        wConteudoURL+=wConteudoWhere;
        console.log(wConteudoURL)
         _cc.msg('Busca Concluida', 'success');
        console.log( "aqui é conteudo WHERE P/o grid" + wConteudoWhere); 
        
    
        
        //----------------------------------Conteudo URL estilo res(Apenas Para possiveis substituições)----------------------------------------
        /*
        wAjax = wConteudoURL;
        $.get(wAjax).then(function (res) {
            if (res.cnRetorno == 1) {
                console.log('RETORNO' + res.cnRetorno);
                console.log('RETOTNO' + res.anMensagem);
                _cc.msg('Erro' + res.anMensagem + '','danger');
                _cc.loading.hide("w-salvando-dados");
                _cc.msg('Erro durante a operação (Ajax)','danger');
            }else{
        
                console.log(wAjax + "do ajax");
               teste =  res["data"][0];
               item_cnPaciente = teste["cnpaciente"];
               item_cnProfissao = teste["cnprofissao"];
               console.log(item_cnPaciente +" Paciente " + item_cnProfissao + " Profissao ");
    
            }
        });
       
    */
    
        //--------------------------------Reseta os Valores dos Filtros na Tela para Proxima pesquisa sem influencias-----------------------------------------------------------
       
    
    
       $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.dtperiodoinicio")).val("");
       $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.dtperiodofinal")).val("");
       $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.dtincsysinicial")).val("");    
        $(document.getElementById("frmshc.evolucao.corpofiltro.telafiltro.dtincsysfim")).val(""); 
      
          
        
       
       
    
    
    
    
        
    }//Fechamento da Função
        
        
       
    
    
    }catch (error) {
        console.log("error De Pesquisa");
        
    
    };//Fim do Try e catch
    
    //---------------------------------------------------------------------------Fim da Função Filtro----------------------------------
