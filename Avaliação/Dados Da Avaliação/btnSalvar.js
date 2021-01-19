var wCnPacFixo = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente","value")
var wProntRandon = fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.ProntuarioRandom","value")
var wdcProv = fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.dcProvisorio","value")


if(wCnPacFixo && wProntRandon != "" && wdcProv =="S"){

if ($('[class = "form-control select2-hidden-accessible border border-danger"]').length !== 0
    || $('[class = "form-control border border-danger"]').length !== 0) {

    //"Tem Borda chama a verificacao




    function Verificacao() {
        //Declaração de variaveis
        var x = 0;
        var Obj2;
        var wResult = []
        var wArray
        //Verifica Borda de Campo normal
        $('[class = "form-control border border-danger"]').each(function () {
            if (!this.value) return x++
        })
        //Verifica Titulo de TP7
        $('[class = "form-control select2-hidden-accessible border border-danger"]').each(function () {

            T = this.id.toLowerCase();
            Obj2 = fProp(T, "value")
            wResult.push(Obj2.length)
            wArray = wResult.sort()
            console.log(wArray)
            return wArray
        })




        console.log(wArray)
        wArray = wArray ? wArray : wArray.push(1)
        var wBloqueio = wArray.indexOf(0)



        if (wBloqueio == 0 || x != 0) {
            //Bloqueia o salvamento
            console.log("Não Vou chamar a função")


        } else {

            function fProntProv() {
                //Libera o salvamento
                console.log("Vou chamar a Funcao")
                
                //Manda os Dados que vão ser salvos

                setTimeout(function () { _cc.loading.show("Carregando os Dados", 1, "w-Carregando-dados"); }, 1100)

                setTimeout(function () { _cc.loading.hide(); }, 2100)



                var parentesco = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.cuidador.doParentescoCuidador", "value")
                var parentesco = parentesco ? parentesco : '0'
                var wJsn = {
                    "nmPaciente": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.nmPaciente", "value"),
                    "caCPF": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.caCPFPaciente", "value"),
                    "dtNascimento": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.dtNascimentoPaciente", "value"),
                    "dcSTS": fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.dcStatus", "value"),
                    "cnConvenio": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.planosaudeconvenio.cnConvenio", "value"),
                    "dmConvenioParentesco": parentesco,
                    "anConvenioPlano": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.planosaudeconvenio.anConvenioPlano", "value"),
                    "dcSexo": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.cuidador.doSexoCuidador", "value"),
                    "cnPaciente": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente", "value"),
                    "cnPacienteProvisorio": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente", "value"),
                    "dcProvisorio": fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.dcProvisorio", "value"),
                    "dcsituacao": fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.dcsituacao", "value")
                }



                wSaveUrl = cc.url.tabela + "tabela=shcPaciente";
                var wSaveMthd = "post"


                wSaveAjx = _cc.ajax(wSaveUrl, wSaveMthd, "application/json", JSON.stringify(wJsn), "", "");

                /* CONSOLE */
                $.when(wSaveAjx).then(
                    function (jsonResp) {
                        /* VALIDACAO DO REST */
                        //console.log(jsonResp)

                        const { cnRetorno } = jsonResp
                        console.log(cnRetorno + "cnRetorno do json")
                        // _cc.validaResultadoAjax(jsonResp, wSaveUrl);

                        if (cnRetorno == 1) {
                            alertify.confirm(' ', 'PACIETE OU PRONTUÁRIO RELACIONADO JÁ CADASTRADO, REVISE O PACIENTE',
                                function () {//Se sim execulta aqui
                                },
                                function () {//Se não execulta aqui 
                                });
                        } else {
                            _cc.msg('Inclusão do prontuario realizada com sucesso', 'success')
                        }
                    })

            }
            fProntProv()




            wResult = []



        }
    }

    Verificacao()



} else {


    //Não tem Borda chama a salvar de vez




   function fProntProv() {
        //Libera o salvamento
        console.log("Vou chamar a Funcao")
        
        //Manda os Dados que vão ser salvos





        setTimeout(function () { _cc.loading.show("Carregando os Dados", 1, "w-Carregando-dados"); }, 1100)

        setTimeout(function () { _cc.loading.hide(); }, 2100)



        var parentesco = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.cuidador.doParentescoCuidador", "value")
        var parentesco = parentesco ? parentesco : '0'
        var wJsn = {
            "nmPaciente": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.nmPaciente", "value"),
            "caCPF": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.caCPFPaciente", "value"),
            "dtNascimento": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.dtNascimentoPaciente", "value"),
            "dcSTS": fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.dcStatus", "value"),
            "cnConvenio": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.planosaudeconvenio.cnConvenio", "value"),
            "dmConvenioParentesco": parentesco,
            "anConvenioPlano": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.planosaudeconvenio.anConvenioPlano", "value"),
            "dcSexo": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.cuidador.doSexoCuidador", "value"),
            "cnPaciente": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente", "value"),
            "cnPacienteProvisorio": fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente", "value"),
            "dcProvisorio": fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.dcProvisorio", "value"),
            "dcsituacao": fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.dcsituacao", "value")
        }



        wSaveUrl = cc.url.tabela + "tabela=shcPaciente";
        var wSaveMthd = "post"


        wSaveAjx = _cc.ajax(wSaveUrl, wSaveMthd, "application/json", JSON.stringify(wJsn), "", "");

        /* CONSOLE */
        $.when(wSaveAjx).then(
            function (jsonResp) {
                /* VALIDACAO DO REST */
                //console.log(jsonResp)

                const { cnRetorno } = jsonResp
                console.log(cnRetorno + "cnRetorno do json")
                // _cc.validaResultadoAjax(jsonResp, wSaveUrl);

                if (cnRetorno == 1) {
                    alertify.confirm(' ', 'PACIETE OU PRONTUÁRIO RELACIONADO JÁ CADASTRADO, REVISE O PACIENTE',
                        function () {//Se sim execulta aqui
                        },
                        function () {//Se não execulta aqui 
                        });
                } else {
                    _cc.msg('Inclusão do prontuário realizada com sucesso', 'success')
                }
            })

    }
    fProntProv()



}
}else{
  _cc.msg('Registro original atualizado', 'success')
}



///////////////////////////////////////




var cnPaciente = fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente","value")        //Recebe
var cnPacProv = fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.ProntuarioRandom","value")        //oFERECE


if(cnPaciente == ""){
  
  
        var seqtemp = await fSequencia("pac_codigo_prov")
        console.log(seqtemp)
        fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.ProntuarioRandom", "value", seqtemp)
        fProp("frmshc.avaliacaopacientes.main.avaliacao.core.paciente.cnPaciente", "value", seqtemp)
        fProp("frmshc.AvaliacaoPacientes.Main.Avaliacao.Core.Paciente.dcProvisorio", "value", 'S')
}