class constancias{

    construct(){

        this.cedR = cedR
        this.cedConst = cedConst
        this.cedFul = cedFul
        this.rifR = rifR
        this.rifN = rifN
        this.rifConst = rifConst
        this.nomProp = nomProp
        this.apelProp = apelProp
        this.codTelf = codTelf
        this.numText = numText
        this.direcProp = direcProp
        this.codTelf2 = codTelf2
        this.numTelf2 = numTelf2
        this.parrInmue = parrInmue
        this.secInmue = secInmue
        this.direcInmue = direcInmue
        this.topoConst = topoConst
        this.formaConst = formaConst
        this.servPublic = servPublic
        this.usoConst = usoConst
        this.tenenConst = tenenConst
        this.destConst= destConst
        this.estConst = estConst
        this.pareAcaInmue = pareAcaInmue
        this.pareTipoInmue = pareTipoInmue
        this.pintConst = pintConst
        this.techoConst = techoConst
        this.pisosConst = pisosConst
        this.piezConst = piezConst
        this.ventConst =ventConst
        this.puertConst = puertConst
        this.instElect = instElect
        this.ambConst = ambConst
        this.compConst = compConst
        this.estConserv = estConserv
        this.obsConst = obsConst
        this.docDebConst = docDebConst
        this.direcProtConst = direcProtConst
        this.numProtConst = numProtConst
        this.tomoProtConst = tomoProtConst
        this.folioProtConst = folioProtConst
        this.protoConst = protoConst
        this.trimProtConst = trimProtConst
        this.dateProtConst = dateProtConst
        this.valorProtConst = valorProtConst
        this.nortGen = nortGen
        this.alindNort = alindNort
        this.surGen = surGen
        this.alindSur = alindSur
        this.esteGen = esteGen
        this.alindEste = alindEste
        this.oesteGen = oesteGen
        this.alindOeste = alindOeste
        this.nortPosVenta = nortPosVenta
        this.alindPosNort = alindPosNort
        this.surPosVenta = surPosVenta
        this.alindPosSur = alindPosSur
        this.estePosVenta = estePosVenta
        this.alindPosEste = alindPosEste
        this.oestePosVenta = oestePosVenta
        this.alindPosOeste = alindPosOeste
        this.nortSecDoc = nortSecDoc
        this.alindSecNorte = alindSecNorte
        this.surSecDoc = surSecDoc
        this.alindSecSur = alindSecSur
        this.esteSecDoc = esteSecDoc
        this.alindSecEste = alindSecEste
        this.oesteSecDoc = oesteSecDoc
        this.alindSecOeste = alindSecOeste
        this.arTotal = arTotal
        this.NivConstTotal = NivConstTotal
        this.arConstTotal = arConstTotal
        this.parte2 = parte2
        this.parte1 = parte1
        this.arTotalVenta= arTotalVenta
        this.arRestante = arRestante
        this.valorTerreno = valorTerreno
        this.valorInmueble = valorInmueble
        this.valorConstruc = valorConstruc
        this.nuExp = nuExp
        this.montoFact = montoFact
        this.fechFact = fechFact
        this.idInmueble = idInmueble
        this.telfFul = telfFul
        this.telfFul2 = telfFul2
        this.regInmue = regInmue
        this.Acue = Acue
        this.AcueRural = AcueRural
        this.AguasSub = AguasSub
        this.AguasServ = AguasServ
        this.PavFlex = PavFlex
        this.PavRig = PavRig
        this.viaEngran = viaEngran
        this.acera = acera
        this.AlumPublico = AlumPublico
        this.aseo = aseo
        this.transPublic = transPublic
        this.pozoSept = pozoSept
        this.ElectResidencial = ElectResidencial
        this.ElectriIndust = ElectriIndust
        this.linTelf = linTelf
        this.empadro = empadro
        this.multa = multa
        this.idProp = idProp
        this.numFact = numFact
        this.ambInmue = ambInmue
        this.arTotal3= arTotal3
        this.NivConstTotal3= NivConstTotal3
        this.arConstTotal3= arConstTotal3
        this.arTotal2 = arTotal2
        this.NivConstTotal2 = NivConstTotal2
        this.arConstTotal2 = arConstTotal2
        this.uniNorte = uniNorte
        this.uniSur = uniSur
        this.uniEste = uniEste
        this.uniOeste = uniOeste
        this.uniNorte2 = uniNorte2
        this.uniSur2 = uniSur2
        this.uniEste2= uniEste2
        this.uniOeste2 = uniOeste2
        this.uniNorte3 = uniNorte3
        this.uniSur3 = uniSur3
        this.uniEste3 = uniEste3
        this.uniOeste3 = uniOeste3
        this.operacion = operacion
        this.campBuscar = campBuscar
        this.expVerificado= expVerificado
        this.uniAreaConst3 = uniAreaConst3
        this.uniAreaConst2 = uniAreaConst2
        this.uniAreaConst = uniAreaConst
        this.uniAreaT3 = uniAreaT3
        this.uniAreaT2 = uniAreaT2
        this.uniAreaT = uniAreaT
        this.puntoNorte = puntoNorte
        this.puntoSur = puntoSur
        this.puntoEste = puntoEste
        this.puntoOeste = puntoOeste
        this.puntoNorte2 = puntoNorte2
        this.puntoSur2 = puntoSur2
        this.puntoEste2 = puntoEste2
        this.puntoOeste2 = puntoOeste2
        this.puntoNorte3 = puntoNorte3
        this.puntoSur3 = puntoSur3
        this.puntoEste3 = puntoEste3
        this.puntoOeste3 = puntoOeste3
        this.telfFull = telfFull
        this.telfFull2 = telfFull2

    }
    testProp(){
        if(!ex_nac.test(this.cedR)){
            alert("Error en el formato de Nacionalidad");
            return false;
        }
        if(!ex_cedula.test(this.cedConst)){
            alert("Error en el formato de numero de Cedula");
            return false;
        }
        if(!ex_nac.test(this.rifR)){
            alert("Error en el formato de tipo de Rif");
            return false;
        }
        if(!ex_cedula.test(this.rifN)){
            alert("Error en el formato de numero de Rif");
            return false;
        }
        if(!er_areas.test(this.nomProp)){
            alert("Error en el formato de Nombre");
            return false;
        }
        if(!er_areas.test(this.apelProp)){
            alert("Error en el formato de Apellido");
            return false;
        }
        if(!er_areas.test(this.direcProp)){
            alert("Error en el formato de direccion del propietario");
            return false;
        }
        return true
    }
    veriInmue(){
        if(!ex_datcort.test(this.parrInmue)){
            alert("Error en el formato de Parroquia");
            return false;
        }
        if(!ex_datcort.test(this.secInmue)){
            alert("Error en el formato de Sector");
            return false;
        }
        if(!ex_datcort.test(this.ambInmue)){
            alert("Error en el formato de Ambito")
            return false
        }
        if(!er_areas.test(this.direcInmue)){
            alert("Error en el formato de Dirección del Inmueble");
            return false;
        }
        return true
    }
    veriguarCarTerr(){
        if(!ex_datcort.test(this.topoConst)){
            alert("Error en el formato de Topografia");
            return false;
        }
        if(!ex_datcort.test(this.formaConst)){
            alert("Error en el formato de Forma");
            return false;
        }
        if(!ex_datcort.test(this.tenenConst)){
            alert("Error en el formato de Tenencia");
            return false;
        }
        if(!ex_datcort.test(this.usoConst)){
            alert("Error en el formato de Uso");
            return false;
        }
        return true;
    }
    veriConst(){
        if(!ex_datcort.test(this.destConst)){
            alert("Error en el formato de Destino");
            return false;
        }
        if(!ex_datcort.test(this.estConst)){
            alert("Error en el formato de Estructura");
            return false;
        }
        if(!ex_datcort.test(this.pareAcaInmue)){
            alert("Error en el formato de Paredes - Tipo");
            return false;
        }
        if(!ex_datcort.test(this.pareTipoInmue)){
            alert("Error en el formato de Paredes - Lujoso");
            return false;
        }
        if(!ex_datcort.test(this.pintConst)){
            alert("Error en el formato de Pintura");
            return false;
        }
        if(!ex_datcort.test(this.techoConst)){
            alert("Error en el formato de Techo");
            return false;
        }
        if(!ex_datcort.test(this.pisosConst)){
            alert("Error en el formato de Piso");
            return false;
        }
        if(!ex_datcort.test(this.regInmue)){
            alert("Error en el formato de Piso");
            return false;
        }
        if(!ex_datcort.test(this.ventConst)){
            alert("Error en el formato de Ventanas");
            return false;
        }
        if(!ex_datcort.test(this.instElect)){
            alert("Error en el formato de Instalaciones electricas");
            return false;
        }
        if(!ex_datcort.test(this.obsConst)){
            alert("Error en el formato de Observación");
            return false;
        }
        return true
    }
    veriProt(){
        
        if(!ex_datcort.test(this.docDebConst)){
            alert("Error en el formato de Documento debidamente");
            return false;
        }
        if(!ex_datcort.test(this.direcProtConst)){
            alert("Error en el formato de Dirección de protocolización");
            return false;
        }
        if(!ex_carnet.test(this.numProtConst)){
            alert("Error en el formato de Numero de protocolización");
            return false;
        }
        if(!ex_trayec.test(this.tomoProtConst)){
            alert("Error en el formato de Tomo");
            return false;
        }
        if(!ex_fecha.test(this.folioProtConst)){
            alert("Error en el formato de Folio");
            return false;
        }
        if(!ex_trayec.test(this.protoConst)){
            alert("Error en el formato de Protocolo");
            return false;
        }
        if(!ex_trayec.test(this.trimProtConst)){
            alert("Error en el formato de Trimestre");
            return false;
        }
        if(!ex_fecha.test(this.dateProtConst)){
            alert("Error en el formato de Fecha");
            return false;
        }
        if(!ex_money.test(this.valorProtConst)){
            alert("Error en el formato de Valor del inmueble");
            return false;
        }
        return true
    }
    veriGen(){
        if(!ex_datcort.test(this.nortGen)){
            alert("Error en el formato de Mts Norte general");
            return false;
        }
        if(!ex_datcort.test(this.alindNort)){
            alert("Error en el formato de Alinderado Norte");
            return false;
        }
        if(!ex_datcort.test(this.surGen)){
            alert("Error en el formato de Mts Sur");
            return false;
        }
        if(!ex_datcort.test(this.alindSur)){
            alert("Error en el formato de Alinderado Sur");
            return false;
        }
        if(!ex_datcort.test(this.esteGen)){
            alert("Error en el formato de Mts Este");
            return false;
        }
        if(!ex_datcort.test(this.alindEste)){
            alert("Error en el formato de Alinderado Este");
            return false;
        }
        if(!ex_datcort.test(this.oesteGen)){
            alert("Error en el formato de Mts Oeste");
            return false;
        }
        if(!ex_datcort.test(this.alindOeste)){
            alert("Error en el formato de Alinderado Oeste");
            return false;
        }
        if(!ex_datcort.test(this.arTotal)){
            alert("Error en el formato de Área Total");
            return false;
        }
        if(!niveles.test(this.NivConstTotal)){
            alert("Error en el formato de Niveles de Construcción");
            return false;
        }
        if(!ex_datcort.test(this.arConstTotal)){
            alert("Error en el formato de Área de Construcción");
            return false;
        }
        if(!ex_datcort.test(this.uniNorte)){
            alert("Error en el formato de Unidad de Norte");
            return false;
        }
        if(!ex_datcort.test(this.puntNorte)){
            alert("Error en el formato de Norte o NorEste");
            return false;
        }
        if(!ex_datcort.test(this.uniSur)){
            alert("Error en el formato de Unidad de Sur");
            return false;
        }
        if(!ex_datcort.test(this.puntSur)){
            alert("Error en el formato de Sur o SurEste");
            return false;
        }
        if(!ex_datcort.test(this.puntEste)){
            alert("Error en el formato de Este o SurOeste");
            return false;
        }
        if(!ex_datcort.test(this.uniEste)){
            alert("Error en el formato de Unidad de Este");
            return false;
        }
        if(!ex_datcort.test(this.puntOeste)){
            alert("Error en el formato de Oeste o NorOeste");
            return false;
        }
        if(!ex_datcort.test(this.uniOeste)){
            alert("Error en el formato de Unidad de Oeste");
            return false;
        }
        if(!ex_money.test(this.arTotal)){
            alert("Error en el formato de Area Total");
            return false;
        }
        if(!ex_datcort.test(this.uniAreaT)){
            alert("Error en el formato de Unidad de Area Total");
            return false;
        }
        if(!ex_datcort.test(this.NivConstTotal)){
            alert("Error en el formato de Nivel de construcción");
            return false;
        }
        if(!ex_datcort.test(this.arConstTotal)){
            alert("Error en el formato de Nivel de construcción");
            return false;
        }
        return true
    }
    veriSecDoc(){
        if(!ex_datcort.test(this.nortSecDoc)){
            alert("Error en el formato de Mts Norte Segun Documento");
            return false;
        }
        if(!ex_datcort.test(this.alindSecNorte)){
            alert("Error en el formato de Alinderado Norte Segun Documento");
            return false;
        }
        if(!ex_datcort.test(this.surSecDoc)){
            alert("Error en el formato de Mts Sur Segun Documento");
            return false;
        }
        if(!ex_datcort.test(this.alindSecSur)){
            alert("Error en el formato de Alinderado Sur Segun Documento");
            return false;
        }
        if(!ex_datcort.test(this.esteSecDoc)){
            alert("Error en el formato de Mts Este Segun Documento");
            return false;
        }
        if(!ex_datcort.test(this.alindSecEste)){
            alert("Error en el formato de Alinderado Este Segun Documento");
            return false;
        }
        if(!ex_datcort.test(this.oesteSecDoc)){
            alert("Error en el formato de Mts Oeste Segun Documento");
            return false;
        }
        if(!ex_datcort.test(this.alindSecOeste)){
            alert("Error en el formato de Alinderado Oeste Segun Documento");
            return false;
        }
        if(!ex_datcort.test(this.puntNorte3)){
            alert("Error en el formato de Norte o NorEste");
            return false;
        }
        if(!ex_datcort.test(this.uniNorte3)){
            alert("Error en el formato de Unidad Norte");
            return false;
        }
        if(!ex_datcort.test(this.puntSur3)){
            alert("Error en el formato de Sur o SurEste");
            return false;
        }
        if(!ex_datcort.test(this.uniSur3)){
            alert("Error en el formato de Unidad Sur");
            return false;
        }
        if(!ex_datcort.test(this.puntEste3)){
            alert("Error en el formato de Este o SurOeste");
            return false;
        }
        if(!ex_datcort.test(this.uniEste3)){
            alert("Error en el formato de Unidad de Este");
            return false;
        }
        if(!ex_datcort.test(this.puntOeste3)){
            alert("Error en el formato de Oeste o NorOeste");
            return false;
        }
        if(!ex_datcort.test(this.uniOeste3)){
            alert("Error en el formato de Unidad de Oeste");
            return false;
        }
        if(!ex_datcort.test(this.arTotal3)){
            alert("Error en el formato de Area Total");
            return false;
        }
        if(!ex_datcort.test(this.uniAreaT3)){
            alert("Error en el formato de Unidad Area Total");
            return false;
        }
        if(!ex_datcort.test(this.NivConstTotal3)){
            alert("Error en el formato de Niveles de Construcción");
            return false;
        }
        if(!ex_datcort.test(this.arConstTotal3)){
            alert("Error en el formato de Area de Construcción");
            return false;
        }
        if(!ex_datcort.test(this.uniAreaConst3)){
            alert("Error en el formato de Area de Construcción");
            return false;
        }
        return true
    }
    veriPosVenta(){
        if(!ex_datcort.test(this.nortPosVenta)){
            alert("Error en el formato de Mts Norte posible Venta");
            return false;
        }
        if(!ex_datcort.test(this.alindPosNort)){
            alert("Error en el formato de Alinderado Norte posible Venta");
            return false;
        }
        if(!ex_datcort.test(this.surPosVenta)){
            alert("Error en el formato de Mts Sur posible Venta");
            return false;
        }
        if(!ex_datcort.test(this.alindPosSur)){
            alert("Error en el formato de Alinderado Sur posible Venta");
            return false;
        }
        if(!ex_datcort.test(this.estePosVenta)){
            alert("Error en el formato de Mts Este posible Venta");
            return false;
        }
        if(!ex_datcort.test(this.alindPosEste)){
            alert("Error en el formato de Alinderado Este posible Venta");
            return false;
        }
        if(!ex_datcort.test(this.oestePosVenta)){
            alert("Error en el formato de Mts Oeste posible Venta");
            return false;
        }
        if(!ex_datcort.test(this.alindPosOeste)){
            alert("Error en el formato de Alinderado Oeste posible Venta");
            return false;
        }
        if(!ex_datcort.test(this.puntNorte2)){
            alert("Error en el formato de Norte o NorEste");
            return false;
        }
        if(!ex_datcort.test(this.uniNorte2)){
            alert("Error en el formato de Unidad de Norte");
            return false;
        }
        if(!ex_datcort.test(this.puntSur2)){
            alert("Error en el formato de Sur o SurEste");
            return false;
        }
        if(!ex_datcort.test(this.uniSur2)){
            alert("Error en el formato de Unidad de Sur");
            return false;
        }
        if(!ex_datcort.test(this.puntEste2)){
            alert("Error en el formato de Este o SurOeste");
            return false;
        }
        if(!ex_datcort.test(this.uniEste2)){
            alert("Error en el formato de Unidad de Este");
            return false;
        }
        if(!ex_datcort.test(this.puntOeste2)){
            alert("Error en el formato de Oeste o NorOeste");
            return false;
        }
        if(!ex_datcort.test(this.uniOeste2)){
            alert("Error en el formato de Unidad de Oeste");
            return false;
        }
        if(!ex_datcort.test(this.arTotal2)){
            alert("Error en el formato de Area Total");
            return false;
        }
        if(!ex_datcort.test(this.uniAreaT2)){
            alert("Error en el formato de Unidad de Area Total");
            return false;
        }
        if(!ex_datcort.test(this.NivConstTotal2)){
            alert("Error en el formato de Niveles de Construcción");
            return false;
        }
        if(!ex_datcort.test(this.arConstTotal2)){
            alert("Error en el formato de Area de Construcción");
            return false;
        }
        if(!ex_datcort.test(this.uniAreaConst2)){
            alert("Error en el formato de Unidad de Area de Construcción");
            return false;
        }
        return true
    }
    test3(){
        
        
        
        
        if(!expediente.test(this.nuExp)){
            alert("Error en el formato de Expediente");
            return false;
        }
        if(this.nuExp == this.expVerificado){
            alert("Numero de Expediente ya se encuentra registrado");
            return false;
        }
        return true
    }
    veriInmu(){
        if(!ex_money.test(this.montoFact)){
            alert("Error en el formato de Monto de factura");
            return false;
        }
        if(!ex_fecha.test(this.fechFact)){
            alert("Error en el formato de la fecha ");
            return false;
        }
        let numFactura = document.getElementById("numFactura").value
        if(numFactura == this.numFact){
            alert("Numero de factura ya se encuentra registrado");
            return false
        }
        return true
    }
    formConst(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campGeneral');
        var divsitiomaterial = document.getElementById('campGeneral');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send("&accion=fProp"); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    cambSect(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('secInmue');
        var divsitiomaterial = document.getElementById('secInmue');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`parrInmue=${this.parrInmue}&accion=cambSect`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    fCarac(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campGeneral');
        var divsitiomaterial = document.getElementById('campGeneral');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send("cedFul="+this.cedFul+"&rifConst="+this.rifConst+"&nomProp="+this.nomProp+"&apelProp="+this.apelProp+"&codTelf="+this.codTelf+"&numText="+this.numText+"&direcProp="+this.direcProp+"&codTelf2="+this.codTelf2+"&numTelf2="+this.numTelf2+"&parrInmue="+this.parrInmue+"&secInmue="+this.secInmue+"&direcInmue="+this.direcInmue+"&topoConst="+this.topoConst+"&formaConst="+this.formaConst+"&usoConst="+this.usoConst+"&tenenConst="+this.tenenConst+"&ambInmue="+this.ambInmue+"&accion=fCarac"); 
        ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
                    
			     }
	       	}
    }
    fActGeneral(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send("&accion=fActGeneral"); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
                    
			     }
	       	}
    }
    factPosVenta(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send("&accion=factPosVenta"); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
                    
			     }
	       	}
    }
    factSecDoc(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send("&accion=factSecDoc"); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
                    
			     }
	       	}
    }
    fLind(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campGeneral');
        var divsitiomaterial = document.getElementById('campGeneral');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`destConst=${this.destConst}&estConst=${this.estConst}&pareTipoInmue=${this.pareTipoInmue}&pareAcaInmue=${this.pareAcaInmue}&pintConst=${this.pintConst}&techoConst=${this.techoConst}&pisosConst=${this.pisosConst}&piezConst=${this.piezConst}&ventConst=${this.ventConst}&puertConst=${this.puertConst}&instElect=${this.instElect}&ambConst=${this.ambConst}&compConst=${this.compConst}&estConserv=${this.estConserv}&obsConst=${this.obsConst}&docDebConst=${this.docDebConst}&direcProtConst=${this.direcProtConst}&numProtConst=${this.numProtConst}&tomoProtConst=${this.tomoProtConst}&folioProtConst=${this.folioProtConst}&protoConst=${this.protoConst}&trimProtConst=${this.trimProtConst}&dateProtConst=${this.dateProtConst}&valorProtConst=${this.valorProtConst}&regInmue=${this.regInmue}&parte1=${this.parte1}&accion=fLid`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
                    
			     }
	       	}
    }
    GuardConst(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campGeneral');
        var divsitiomaterial = document.getElementById('campGeneral');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`nortGen=${this.nortGen}&alindNort=${this.alindNort}&surGen=${this.surGen}&alindSur=${this.alindSur}&esteGen=${this.esteGen}&alindEste=${this.alindEste}&oesteGen=${this.oesteGen}&alindOeste=${this.alindOeste}&nortPosVenta=${this.nortPosVenta}&alindPosNort=${this.alindPosNort}&surPosVenta=${this.surPosVenta}&alindPosSur=${this.alindPosSur}&estePosVenta=${this.estePosVenta}&alindPosEste=${this.alindPosEste}&oestePosVenta=${this.oestePosVenta}&alindPosOeste=${this.alindPosOeste}&nortSecDoc=${this.nortSecDoc}&alindSecNorte=${this.alindSecNorte}&surSecDoc=${this.surSecDoc}&alindSecSur=${this.alindSecSur}&esteSecDoc=${this.esteSecDoc}&alindSecEste=${this.alindSecEste}&oesteSecDoc=${this.oesteSecDoc}&alindSecOeste=${this.alindSecOeste}&arTotal=${this.arTotal}&NivConstTotal=${this.NivConstTotal}&arConstTotal=${this.arConstTotal}&parte2=${this.parte2}&parte1=${this.parte1}&cedFul=${this.cedFul}&rifConst=${this.rifConst}&nomProp=${this.nomProp}&apelProp=${this.apelProp}&telfFul=${this.telfFul}&direcProp=${this.direcProp}&telfFul2=${this.telfFul2}&parrInmue=${this.parrInmue}&secInmue=${this.secInmue}&direcInmue=${this.direcInmue}&topoConst=${this.topoConst}&formaConst=${this.formaConst}&usoConst=${this.usoConst}&tenenConst=${this.tenenConst}&regInmue=${this.regInmue}&destConst=${this.destConst}&estConst=${this.estConst}&pareTipoInmue=${this.pareTipoInmue}&pareAcaInmue=${this.pareAcaInmue}&pintConst=${this.pintConst}&techoConst=${this.techoConst}&pisosConst=${this.pisosConst}&piezConst=${this.piezConst}&ventConst=${this.ventConst}&puertConst=${this.puertConst}&instElect=${this.instElect}&ambConst=${this.ambConst}&compConst=${this.compConst}&estConserv=${this.estConserv}&obsConst=${this.obsConst}&docDebConst=${this.docDebConst}&direcProtConst=${this.direcProtConst}&numProtConst=${this.numProtConst}&tomoProtConst=${this.tomoProtConst}&folioProtConst=${this.folioProtConst}&protoConst=${this.protoConst}&trimProtConst=${this.trimProtConst}&dateProtConst=${this.dateProtConst}&valorProtConst=${this.valorProtConst}&Acue=${this.Acue}&AcueRural=${this.AcueRural}&AguasSub=${this.AguasSub}&AguasServ=${this.AguasServ}&PavFlex=${this.PavFlex}&PavRig=${this.PavRig}&viaEngran=${this.viaEngran}&acera=${this.acera}&AlumPublico=${this.AlumPublico}&aseo=${this.aseo}&transPublic=${this.transPublic}&pozoSept=${this.pozoSept}&ElectResidencial=${this.ElectResidencial}&ElectriIndust=${this.ElectriIndust}&linTelf=${this.linTelf}&multa=${this.multa}&ambInmue=${this.ambInmue}&arTotal2=${this.arTotal2}&NivConstTotal2=${this.NivConstTotal2}&arConstTotal2=${this.arConstTotal2}&arTotal3=${this.arTotal3}&NivConstTotal3=${this.NivConstTotal3}&arConstTotal3=${this.arConstTotal3}&uniNorte=${this.uniNorte}&uniSur=${this.uniSur}&uniEste=${this.uniEste}&uniOeste=${this.uniOeste}&uniNorte2=${this.uniNorte2}&uniSur2=${this.uniSur2}&uniEste2=${this.uniEste2}&uniOeste2=${this.uniOeste2}&uniNorte3=${this.uniNorte3}&uniSur3=${this.uniSur3}&uniEste3=${this.uniEste3}&uniOeste3=${this.uniOeste3}&nuExp=${this.nuExp}&uniAreaT=${this.uniAreaT}&uniAreaT2=${this.uniAreaT2}&uniAreaT3=${this.uniAreaT3}&uniAreaConst3=${this.uniAreaConst3}&uniAreaConst2=${this.uniAreaConst2}&uniAreaConst=${this.uniAreaConst}&puntNorte=${this.puntNorte}&puntSur=${this.puntSur}&puntEste=${this.puntEste}&puntOeste=${this.puntOeste}&puntNorte2=${this.puntNorte2}&puntSur2=${this.puntSur2}&puntEste2=${this.puntEste2}&puntOeste2=${this.puntOeste2}&puntNorte3=${this.puntNorte3}&puntSur3=${this.puntSur3}&puntEste3=${this.puntEste3}&puntOeste3=${this.puntOeste3}&accion=guardConst`)
        ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
                    
			     }
	       	}
    }
    imprConst(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campGeneral');
        var divsitiomaterial = document.getElementById('campGeneral');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`operacion=${this.operacion}&montoFact=${this.montoFact}&fechFact=${this.fechFact}&idProp=${this.idProp}&idInmueble=${this.idInmueble}&numFact=${this.numFact}&nuExp=${this.nuExp}&accion=imprConst2`);
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText;
                    let rutaPdf = document.getElementById("rutaPdf").value
                    document.getElementById("enlacePdf").innerHTML=`<div class='campDat'><embed id="embedPdf" src="${rutaPdf}" type="application/pdf"></div>`;
			     }
	       	}
    }
    imprConst1(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campGeneral');
        var divsitiomaterial = document.getElementById('campGeneral');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`operacion=${this.operacion}&montoFact=${this.montoFact}&fechFact=${this.fechFact}&idProp=${this.idProp}&idInmueble=${this.idInmueble}&numFact=${this.numFact}&nuExp=${this.nuExp}&accion=imprConst1`);
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText;
                    let nuExp = document.getElementById("numExp").value
                    let rutaPdf = document.getElementById("rutaPdf").value
                    document.getElementById("enlacePdf").innerHTML=`<div class='campDat'><embed id="embedPdf" src="${rutaPdf}" type="application/pdf"></div>`;
			     }
	       	}
    }
    imprConst3(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campGeneral');
        var divsitiomaterial = document.getElementById('campGeneral');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`operacion=${this.operacion}&montoFact=${this.montoFact}&fechFact=${this.fechFact}&idProp=${this.idProp}&idInmueble=${this.idInmueble}&numFact=${this.numFact}&nuExp=${this.nuExp}&accion=imprConst3`);
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText;
                    let nuExp = document.getElementById("numExp").value
                    let rutaPdf = document.getElementById("rutaPdf").value
                    document.getElementById("enlacePdf").innerHTML=`<div class='campDat'><embed id="embedPdf" src="${rutaPdf}" type="application/pdf"></div>`;
			     }
	       	}
    }
    imprConstEmpa(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campGeneral');
        var divsitiomaterial = document.getElementById('campGeneral');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`operacion=${this.operacion}&montoFact=${this.montoFact}&fechFact=${this.fechFact}&idProp=${this.idProp}&idInmueble=${this.idInmueble}&numFact=${this.numFact}&nuExp=${this.nuExp}&accion=imprConstEmpa`);
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText;
                    let nuExp = document.getElementById("numExp").value
                    let rutaPdf = document.getElementById("rutaPdf").value
                    document.getElementById("enlacePdf").innerHTML=`<div class='campDat'><embed id="embedPdf" src="${rutaPdf}" type="application/pdf"></div>`;
			     }
	       	}
    }
    revUsuario(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campGeneral2');
        var divsitiomaterial = document.getElementById('campGeneral2');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`cedFul=${this.cedFul}&accion=revUsuario`);
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText;
                    setTimeout(()=>{
                        mostProp()
                    },500)
                    
			     }
	       	}
    }
    formImpri(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campGeneral');
        var divsitiomaterial = document.getElementById('campGeneral');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send("accion=formImpri"); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    veriImpr(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campGeneral');
        var divsitiomaterial = document.getElementById('campGeneral');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`campBuscar=${this.campBuscar}&accion=veriImpr`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    busExpediente(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campOculto');
        var divsitiomaterial = document.getElementById('campOculto');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`nuExp=${this.nuExp}&accion=busExpediente`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    veriFact(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('campOculto');
        var divsitiomaterial = document.getElementById('campOculto');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`numFact=${this.numFact}&accion=busFactura`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    //PROPIETARIO
    formProp(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=formProp`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    guardProp(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`cedFul=${this.cedFul}&rifConst=${this.rifConst}&nomProp=${this.nomProp}&apelProp=${this.apelProp}&telfFull=${this.telfFull}&direcProp=${this.direcProp}&telfFull2=${this.telfFull2}&accion=guardProp`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    //INMUEBLE
    formInmue(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=formInmue`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    guarInmue(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`parrInmue=${this.parrInmue}&secInmue=${this.secInmue}&ambInmue=${this.ambInmue}&direcInmue=${this.direcInmue}&accion=guarInmue`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    //CARACTERISTICAS DEL TERRENO
    formCarTerr(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=formCarTerr`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    guarCarTerr(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`topoConst=${this.topoConst}&formaConst=${this.formaConst}&usoConst=${this.usoConst}&tenenConst=${this.tenenConst}&accion=guarCarTerr`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    //CARACTERISTICAS DE LA CONSTRUCCIÓN
    fcaracConst(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=fcaracConst`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    guarCaracConst(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`destConst=${this.destConst}&estConst=${this.estConst}&pareTipoInmue=${this.pareTipoInmue}&pareAcaInmue=${this.pareAcaInmue}&pintConst=${this.pintConst}&techoConst=${this.techoConst}&pisosConst=${this.pisosConst}&ventConst=${this.ventConst}&instElect=${this.instElect}&regInmue=${this.regInmue}&obsConst=${this.obsConst}&accion=guarCaracConst`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    //PROTOCOLIZACION DEL INMUEBLE
    fprotInmue(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=fprotInmue`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    guarProt(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`docDebConst=${this.docDebConst}&direcProtConst=${this.direcProtConst}&numProtConst=${this.numProtConst}&tomoProtConst=${this.tomoProtConst}&folioProtConst=${this.tomoProtConst}&protoConst=${this.protoConst}&trimProtConst=${this.trimProtConst}&dateProtConst=${this.dateProtConst}&valorProtConst=${this.valorProtConst}&accion=guarProtInmue`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    //LINDEROS SEGUN INSPECCION
    guarGeneral(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`puntNorte=${this.puntNorte}&nortGen=${this.nortGen}&uniNorte=${this.uniNorte}&alindNort=${this.alindNort}&puntSur=${this.puntSur}&surGen=${this.surGen}&uniSur=${this.surGen}&uniSur=${this.uniSur}&alindSur=${this.alindSur}&puntEste=${this.puntEste}&esteGen=${this.esteGen}&uniEste=${this.uniEste}&alindEste=${this.alindEste}&puntOeste=${this.puntOeste}&oesteGen=${this.oesteGen}&uniOeste=${this.uniOeste}&alindOeste=${this.alindOeste}&arTotal=${this.arTotal}&uniAreaT=${this.uniAreaT}&NivConstTotal=${this.NivConstTotal}&arConstTotal=${this.arConstTotal}&accion=guarGeneral`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    //LINDEROS SEGUN DOCUMENTO
    guarSecDoc(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`puntNorte3=${this.puntNorte3}&nortSecDoc=${this.nortSecDoc}&uniNorte3=${this.uniNorte3}&alindSecNorte=${this.alindSecNorte}&puntSur3=${this.puntSur3}&surSecDoc=${this.surSecDoc}&uniSur3=${this.uniSur3}&alindSecSur=${this.alindSecSur}&puntEste3=${this.puntEste3}&esteSecDoc=${this.esteSecDoc}&uniEste3=${this.uniEste3}&alindSecEste=${this.alindSecEste}&puntOeste3=${this.puntOeste3}&oesteSecDoc=${this.oesteSecDoc}&uniOeste3=${this.uniOeste3}&alindSecOeste=${this.alindSecOeste}&arTotal3=${this.arTotal3}&uniAreaT3=${this.uniAreaT3}&NivConstTotal3=${this.NivConstTotal3}&arConstTotal3=${this.arConstTotal3}&uniAreaConst3=${this.uniAreaConst3}&accion=guarSecDoc`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    //LINDEROS POSIBLE VENTA
    guarPosVenta(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`puntNorte2=${this.puntNorte2}&nortPosVenta=${this.nortPosVenta}&uniNorte2=${this.uniNorte2}&alindPosNort=${this.alindPosNort}&puntSur2=${this.puntSur2}&surPosVenta=${this.surPosVenta}&uniSur2=${this.uniSur2}&alindPosSur=${this.alindPosSur}&puntEste2=${this.puntEste2}&estePosVenta=${this.estePosVenta}&uniEste2=${this.uniEste2}&alindPosEste=${this.alindPosEste}&puntOeste2=${this.puntOeste2}&oestePosVenta=${this.oestePosVenta}&uniOeste2=${this.uniOeste2}&alindPosOeste=${this.alindPosOeste}&arTotal2=${this.arTotal2}&uniAreaT2=${this.uniAreaT2}&NivConstTotal2=${this.NivConstTotal2}&arConstTotal2=${this.arConstTotal2}&uniAreaConst2=${this.uniAreaConst2}&accion=guarPosVenta`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    fConserv(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=fConserv`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    fPiezSant(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=fPiezSant`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    fPuertas(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=fpuertas`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    fAmbi(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=fAmbi`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    fComple(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=fComple`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    fServicios(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=fServicios`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    fExpedient(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=fExpedient`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
    fFactura(){
        var ajax = new objetoAjax();
		var divsitioform = document.getElementById('formsInscrip');
        var divsitiomaterial = document.getElementById('formsInscrip');
		divsitioform.innerHTML="<img src='assets/cargando.gif'> cargando";
        divsitiomaterial.innerHTML="";
		ajax=objetoAjax();
		ajax.open("POST", "src/server/rec/recConst.php",true);
		ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send(`accion=fFactura`); 
		ajax.onreadystatechange=function()
            {
			if (ajax.readyState==4) 
                {
                    divsitioform.innerHTML = ajax.responseText; 
			     }
	       	}
    }
}
function btnFormConst(){
    let consta = new constancias();
    consta.formConst();
}
//PROPIETARIO
function btnFormProp(){
    let consta = new constancias
    consta.formProp()
}
function btnGuarProp(){
    let consta = new constancias();
    consta.cedR= document.getElementById("cedR").value;
    consta.cedConst= document.getElementById("cedConst").value;
    consta.rifR= document.getElementById("rifR").value;
    consta.rifN= document.getElementById("rifN").value;
    consta.rifConst= consta.rifR+"-"+consta.rifN;
    consta.cedFul= consta.cedR+"-"+consta.cedConst;
    consta.nomProp= document.getElementById("nomProp").value;
    consta.apelProp = document.getElementById("apelProp").value;
    codTelf= document.getElementById("codTelf").value;
    numTelf= document.getElementById("numTelf").value;
    consta.telfFull= `(${codTelf})-${numTelf}`
    consta.direcProp= document.getElementById("direcProp").value;
    codTelf2 = document.getElementById("codTelf2").value;
    numTelf2 = document.getElementById("numTelf2").value;
    consta.telfFull2= `(${codTelf2})-${numTelf2}`
    if(consta.testProp()==true){
        consta.guardProp();
    }
}
//INMUEBLE
function btnFormInmue(){
    let consta = new constancias
    consta.formInmue()
}
function btnGuarInmue(){
    let consta = new constancias
    consta.parrInmue = document.getElementById("parrInmue").value
    consta.secInmue = document.getElementById("secInmue").value
    consta.ambInmue = document.getElementById("ambInmue").value
    consta.direcInmue = document.getElementById("direcInmue").value
    if(consta.veriInmue()==true){
        consta.guarInmue()
    }
}
//CARACTERISTICAS DEL TERRENO
function btnfCarTerreno(){
    let consta = new constancias
    consta.formCarTerr()
}
function btnGuarCarTerr(){
    let consta = new constancias
    consta.topoConst = document.getElementById("topoConst").value
    consta.formaConst = document.getElementById("formaConst").value
    consta.usoConst = document.getElementById("usoConst").value
    consta.tenenConst = document.getElementById("tenenConst").value
    if(consta.veriguarCarTerr()==true){
        consta.guarCarTerr()
    }
}
//CARACTERISTICAS DE LA CONSTRUCCIÓN
function btnfcaracConst(){
    let consta = new constancias
    consta.fcaracConst()
}
function btnGuarCaracConst(){
    let consta = new constancias
    consta.destConst = document.getElementById("destConst").value
    consta.estConst = document.getElementById("estConst").value
    consta.pareTipoInmue = document.getElementById("pareTipoInmue").value
    consta.pareAcaInmue = document.getElementById("pareAcaInmue").value
    consta.pintConst = document.getElementById("pintConst").value
    consta.techoConst = document.getElementById("techoConst").value
    consta.pisosConst = document.getElementById("pisosConst").value
    consta.ventConst = document.getElementById("ventConst").value
    consta.instElect = document.getElementById("instElect").value
    consta.regInmue = document.getElementById("regInmue").value
    consta.obsConst = document.getElementById("obsConst").value
    if(consta.veriConst()==true){
        consta.guarCaracConst()
    }
}
//PROTOCOLIZACION DEL INMUEBLE
function btnfprotInmue(){
    let consta = new constancias
    consta.fprotInmue()
}
function btnGuarProt(){
    let consta = new constancias
    consta.docDebConst = document.getElementById("docDebConst").value
    consta.direcProtConst = document.getElementById("direcProtConst").value
    consta.numProtConst = document.getElementById("numProtConst").value
    consta.tomoProtConst = document.getElementById("tomoProtConst").value
    consta.folioProtConst = document.getElementById("folioProtConst").value
    consta.protoConst = document.getElementById("protoConst").value
    consta.trimProtConst = document.getElementById("trimProtConst").value
    consta.dateProtConst = document.getElementById("dateProtConst").value
    consta.valorProtConst = document.getElementById("valorProtConst").value
    if(consta.veriProt()==true){
        consta.guarProt()
    }
}
function btnfConserv(){
    let consta = new constancias
    consta.fConserv();
}
function btnfPiezSant(){
    let consta = new constancias
    consta.fPiezSant();
}
function btnfpuertas(){
    let consta = new constancias
    consta.fPuertas()
}
function btnfAmbi(){
    let consta = new constancias
    consta.fAmbi();
}
function btnfComple(){
    let consta = new constancias
    consta.fComple();
}
function btnfServicios(){
    let consta = new constancias
    consta.fServicios()
}
function btnfexpedient(){
    let consta = new constancias 
    consta.fExpedient();
}
function btnfFactura(){
    let consta = new constancias
    consta.fFactura()
}
function btnfCarac(){
    
    consta.parrInmue = document.getElementById("parrInmue").value;
    consta.secInmue = document.getElementById("secInmue").value;
    consta.direcInmue= document.getElementById("direcInmue").value;
    consta.topoConst = document.getElementById("topoConst").value;
    consta.formaConst= document.getElementById("formaConst").value;
    consta.usoConst= document.getElementById("usoConst").value;
    consta.tenenConst= document.getElementById("tenenConst").value;
    consta.ambInmue = document.getElementById("ambInmue").value;
    if(consta.test1()==true){
        consta.fCarac();
    }
    
}
//LINDEROS SEGUN INSPECCIÓN
function actGeneral(){
    let consta = new constancias();
    consta.fActGeneral();
}
function btnGuarGeneral(){
    let consta = new constancias
    consta.puntNorte = document.getElementById("puntNorte").value //LISTO
    consta.nortGen = document.getElementById("nortGen").value //LISTO
    consta.uniNorte = document.getElementById("uniNorte").value //LISTO
    consta.alindNort = document.getElementById("alindNort").value //LISTO
    consta.puntSur = document.getElementById("puntSur").value //LISTO
    consta.surGen = document.getElementById("surGen").value //LISTO
    consta.uniSur = document.getElementById("uniSur").value //LISTO
    consta.alindSur = document.getElementById("alindSur").value //LISTO
    consta.puntEste = document.getElementById("puntEste").value //LISTO
    consta.esteGen = document.getElementById("esteGen").value //LISTO
    consta.uniEste = document.getElementById("uniEste").value //LISTO
    consta.alindEste = document.getElementById("alindEste").value //LISTO
    consta.puntOeste = document.getElementById("puntOeste").value //LISTO
    consta.oesteGen = document.getElementById("oesteGen").value //LISTO
    consta.uniOeste = document.getElementById("uniOeste").value //LISTO
    consta.alindOeste = document.getElementById("alindOeste").value //LISTO
    consta.arTotal = document.getElementById("arTotal").value //LISTO
    consta.uniAreaT = document.getElementById("uniAreaT").value //LISTO
    consta.NivConstTotal = document.getElementById("NivConstTotal").value //LISTO
    consta.arConstTotal = document.getElementById("arConstTotal").value //LISTO
    if(consta.veriGen()==true){
        consta.guarGeneral()
    }
}
//LINDEROS POSIBLE VENTA
function actPosVenta(){
    let consta = new constancias
    consta.factPosVenta();
}
function btnGuarPosVenta(){
    let consta = new constancias
    consta.puntNorte2 = document.getElementById("puntNorte2").value //LISTO
    consta.nortPosVenta = document.getElementById("nortPosVenta").value //LISTO
    consta.uniNorte2 = document.getElementById("uniNorte2").value //LISTO
    consta.alindPosNort = document.getElementById("alindPosNort").value //LISTO
    consta.puntSur2 = document.getElementById("puntSur2").value //LISTO
    consta.surPosVenta = document.getElementById("surPosVenta").value //LISTO
    consta.uniSur2 = document.getElementById("uniSur2").value //LISTO
    consta.alindPosSur = document.getElementById("alindPosSur").value //LISTO
    consta.puntEste2 = document.getElementById("puntEste2").value //LISTO
    consta.estePosVenta = document.getElementById("estePosVenta").value //LISTO
    consta.uniEste2 = document.getElementById("uniEste2").value //LISTO
    consta.alindPosEste = document.getElementById("alindPosEste").value //LISTO
    consta.puntOeste2 = document.getElementById("puntOeste2").value //LISTO
    consta.oestePosVenta = document.getElementById("oestePosVenta").value //LISTO
    consta.uniOeste2 = document.getElementById("uniOeste2").value //LISTO
    consta.alindPosOeste = document.getElementById("alindPosOeste").value //LISTO
    consta.arTotal2 = document.getElementById("arTotal2").value //LISTO
    consta.uniAreaT2 = document.getElementById("uniAreaT2").value //LISTO
    consta.NivConstTotal2 = document.getElementById("NivConstTotal2").value //LISTO
    consta.arConstTotal2 = document.getElementById("arConstTotal2").value //LISTO
    consta.uniAreaConst2 = document.getElementById("uniAreaConst2").value
    if(consta.veriPosVenta()==true){
        consta.guarPosVenta()
    }

}
//LINDEROS SEGUN DOCUMENTO
function actSecDoc(){
    let consta = new constancias()
    consta.factSecDoc();
}
function btnGuarSecDoc(){
    let consta = new constancias
    consta.puntNorte3 = document.getElementById("puntNorte3").value //LISTO
    consta.nortSecDoc = document.getElementById("nortSecDoc").value //LISTO
    consta.uniNorte3 = document.getElementById("uniNorte3").value //LISTO
    consta.alindSecNorte = document.getElementById("alindSecNorte").value //LISTO
    consta.puntSur3 = document.getElementById("puntSur3").value // LISTO
    consta.surSecDoc = document.getElementById("surSecDoc").value //LISTO
    consta.uniSur3 = document.getElementById("uniSur3").value //LISTO
    consta.alindSecSur = document.getElementById("alindSecSur").value //LISTO
    consta.puntEste3 = document.getElementById("puntEste3").value //LISTO
    consta.esteSecDoc = document.getElementById("esteSecDoc").value //LISTO
    consta.uniEste3 = document.getElementById("uniEste3").value //LISTO
    consta.alindSecEste = document.getElementById("alindSecEste").value //LISTO
    consta.puntOeste3 = document.getElementById("puntOeste3").value //LISTO
    consta.oesteSecDoc = document.getElementById("oesteSecDoc").value //LISTO
    consta.uniOeste3 = document.getElementById("uniOeste3").value //LISTO
    consta.alindSecOeste = document.getElementById("alindSecOeste").value //LISTO
    consta.arTotal3 = document.getElementById("arTotal3").value //LISTO
    consta.uniAreaT3 = document.getElementById("uniAreaT3").value //LISTO
    consta.NivConstTotal3 = document.getElementById("NivConstTotal3").value //LISTO
    consta.arConstTotal3 = document.getElementById("arConstTotal3").value //LISTO
    consta.uniAreaConst3 = document.getElementById("uniAreaConst3").value //LISTO
    if(consta.veriSecDoc()==true){
        consta.guarSecDoc()
    }
}
function btnfLind(){
    let consta = new constancias()
    consta.destConst = document.getElementById("destConst").value
    consta.estConst = document.getElementById("estConst").value
    consta.pareTipoInmue = document.getElementById("pareTipoInmue").value
    consta.pareAcaInmue = document.getElementById("pareAcaInmue").value
    consta.pintConst = document.getElementById("pintConst").value
    consta.techoConst = document.getElementById("techoConst").value
    consta.pisosConst = document.getElementById("pisosConst").value
    consta.piezConst = document.getElementById("piezConst").value
    consta.ventConst = document.getElementById("ventConst").value
    consta.puertConst = document.getElementById("puertConst").value
    consta.instElect = document.getElementById("instElect").value
    consta.ambConst = document.getElementById("ambConst").value
    consta.compConst = document.getElementById("compConst").value
    consta.estConserv= document.getElementById("estConserv").value
    consta.obsConst = document.getElementById("obsConst").value
    consta.regInmue = document.getElementById("regInmue").value;
    consta.docDebConst = document.getElementById("docDebConst").value
    consta.direcProtConst = document.getElementById("direcProtConst").value
    consta.numProtConst = document.getElementById("numProtConst").value
    consta.tomoProtConst = document.getElementById("tomoProtConst").value
    consta.folioProtConst = document.getElementById("folioProtConst").value
    consta.protoConst = document.getElementById("protoConst").value
    consta.trimProtConst = document.getElementById("trimProtConst").value
    consta.dateProtConst = document.getElementById("dateProtConst").value
    consta.valorProtConst = document.getElementById("valorProtConst").value
    consta.parte1 = document.getElementById("parte1").value
    if(consta.test2()==true){
        consta.fLind()
    }
    
}
function calLind(){
    norte = document.getElementById("nortGen").value
    sur = document.getElementById("surGen").value
    este = document.getElementById("esteGen").value
    oeste = document.getElementById("oesteGen").value
    norSur = (parseInt(norte) + parseInt(sur))/2
    estOest = (parseInt(este)+parseInt(oeste))/2
    area2 = norSur*estOest
    document.getElementById("arTotal").value=area2
}
function calLindVenta(){
    norte = document.getElementById("nortPosVenta").value
    sur = document.getElementById("surPosVenta").value
    este = document.getElementById("estePosVenta").value
    oeste = document.getElementById("oestePosVenta").value
    norSur = (parseInt(norte) + parseInt(sur))/2
    estOest = (parseInt(este)+parseInt(oeste))/2
    area2 = norSur*estOest
    document.getElementById("arTotal2").value=area2
}
function calLindDoc(){
    norte = document.getElementById("nortSecDoc").value
    sur = document.getElementById("surSecDoc").value
    este = document.getElementById("esteSecDoc").value
    oeste = document.getElementById("oesteSecDoc").value
    norSur = (parseInt(norte) + parseInt(sur))/2
    estOest = (parseInt(este)+parseInt(oeste))/2
    area2 = norSur*estOest
    document.getElementById("arTotal3").value=area2
}
function btnGuardConst(){
    let consta = new constancias()
    lindGeneral = document.getElementById("lindGeneral").value
    if(lindGeneral =="si"){
        consta.puntNorte = document.getElementById("puntNorte").value
        consta.puntSur = document.getElementById("puntSur").value
        consta.puntEste = document.getElementById("puntEste").value
        consta.puntOeste = document.getElementById("puntOeste").value
        consta.nortGen = document.getElementById("nortGen").value
        consta.alindNort = document.getElementById("alindNort").value
        consta.surGen = document.getElementById("surGen").value
        consta.alindSur = document.getElementById("alindSur").value
        consta.esteGen = document.getElementById("esteGen").value
        consta.alindEste = document.getElementById("alindEste").value
        consta.oesteGen = document.getElementById("oesteGen").value
        consta.alindOeste = document.getElementById("alindOeste").value
        consta.arTotal = document.getElementById("arTotal").value
        consta.NivConstTotal = document.getElementById("NivConstTotal").value
        consta.arConstTotal = document.getElementById("arConstTotal").value
        consta.uniNorte = document.getElementById("uniNorte").value
        consta.uniSur = document.getElementById("uniSur").value
        consta.uniEste = document.getElementById("uniEste").value
        consta.uniOeste = document.getElementById("uniOeste").value
        consta.uniAreaT = document.getElementById("uniAreaT").value
        consta.uniAreaConst = document.getElementById("uniAreaConst").value
    }else{
        consta.puntNorte = "nada"
        consta.puntSur = "nada"
        consta.puntEste = "nada"
        consta.puntOeste = "nada"
        consta.nortGen = "nada"
        consta.alindNort = "nada"
        consta.surGen = "nada"
        consta.alindSur = "nada"
        consta.esteGen = "nada"
        consta.alindEste = "nada"
        consta.oesteGen = "nada"
        consta.alindOeste = "nada"
        consta.arTotal = "nada"
        consta.NivConstTotal = "nada"
        consta.arConstTotal = "nada"
        consta.uniNorte= "nada"
        consta.uniSur = "nada"
        consta.uniEste= "nada"
        consta.uniOeste = "nada"
        consta.uniAreaT = "nada"
        consta.uniAreaConst = "nada"
    }
    posVenta = document.getElementById("posVenta").value
    if(posVenta =="si"){
        consta.puntNorte2 = document.getElementById("puntNorte2").value
        consta.puntSur2 = document.getElementById("puntSur2").value
        consta.puntEste2 = document.getElementById("puntEste2").value
        consta.puntOeste2 = document.getElementById("puntOeste2").value
        consta.nortPosVenta = document.getElementById("nortPosVenta").value
        consta.alindPosNort = document.getElementById("alindPosNort").value
        consta.surPosVenta = document.getElementById("surPosVenta").value
        consta.alindPosSur = document.getElementById("alindPosSur").value
        consta.estePosVenta = document.getElementById("estePosVenta").value
        consta.alindPosEste = document.getElementById("alindPosEste").value
        consta.oestePosVenta = document.getElementById("oestePosVenta").value
        consta.alindPosOeste = document.getElementById("alindPosOeste").value
        consta.arTotal2 = document.getElementById("arTotal2").value
        consta.NivConstTotal2= document.getElementById("NivConstTotal2").value
        consta.arConstTotal2 = document.getElementById("arConstTotal2").value
        consta.uniNorte2 = document.getElementById("uniNorte2").value
        consta.uniSur2 = document.getElementById("uniSur2").value
        consta.uniEste2 = document.getElementById("uniEste2").value
        consta.uniOeste2 = document.getElementById("uniOeste2").value
        consta.uniAreaT2 = document.getElementById("uniAreaT2").value
        consta.uniAreaConst2 = document.getElementById("uniAreaConst2").value
    }else{
        consta.puntNorte2 = "nada"
        consta.puntSur2 = "nada"
        consta.puntEste2 = "nada"
        consta.puntOeste2 = "nada"
        consta.posVent = "0"
        consta.nortPosVenta = "nada"
        consta.alindPosNort = "nada"
        consta.surPosVenta = "nada"
        consta.alindPosSur = "nada"
        consta.estePosVenta = "nada"
        consta.alindPosEste = "nada"
        consta.oestePosVenta = "nada"
        consta.alindPosOeste = "nada"
        consta.arTotal2 = "nada"
        consta.NivConstTotal2= "nada"
        consta.arConstTotal2 = "nada"
        consta.uniNorte2 = "nada"
        consta.uniSur2 = "nada"
        consta.uniEste2 = "nada"
        consta.uniOeste2= "nada"
        consta.uniAreaT2 = "nada"
        consta.uniAreaConst2 = "nada"
    }
    secDoc = document.getElementById("secDoc").value
    if(secDoc == "si"){
        consta.puntNorte3 = document.getElementById("puntNorte3").value
        consta.puntSur3 = document.getElementById("puntSur3").value
        consta.puntEste3 = document.getElementById("puntEste3").value
        consta.puntOeste3 = document.getElementById("puntOeste3").value
        consta.nortSecDoc = document.getElementById("nortSecDoc").value
        consta.alindSecNorte = document.getElementById("alindSecNorte").value
        consta.surSecDoc = document.getElementById("surSecDoc").value
        consta.alindSecSur = document.getElementById("alindSecSur").value
        consta.esteSecDoc = document.getElementById("esteSecDoc").value
        consta.alindSecEste = document.getElementById("alindSecEste").value
        consta.oesteSecDoc = document.getElementById("oesteSecDoc").value
        consta.alindSecOeste = document.getElementById("alindSecOeste").value
        consta.arTotal3= document.getElementById("arTotal3").value
        consta.NivConstTotal3 = document.getElementById("NivConstTotal3").value
        consta.arConstTotal3 = document.getElementById("arConstTotal3").value
        consta.uniNorte3 = document.getElementById("uniNorte3").value
        consta.uniSur3 = document.getElementById("uniSur3").value
        consta.uniEste3= document.getElementById("uniEste3").value
        consta.uniOeste3 = document.getElementById("uniOeste3").value
        consta.uniAreaT3 = document.getElementById("uniAreaT3").value
        consta.uniAreaConst3 = document.getElementById("uniAreaConst3").value
    }else{
        consta.puntNorte3 = "nada"
        consta.puntSur3 = "nada"
        consta.puntEste3 = "nada"
        consta.puntOeste3 = "nada"
        consta.secDocument = "0"
        consta.nortSecDoc = "nada"
        consta.alindSecNorte ="nada"
        consta.surSecDoc = "nada"
        consta.alindSecSur = "nada"
        consta.esteSecDoc = "nada"
        consta.alindSecEste = "nada"
        consta.oesteSecDoc = "nada"
        consta.alindSecOeste = "nada"
        consta.arTotal3= "nada"
        consta.NivConstTotal3 = "nada"
        consta.arConstTotal3 = "nada"
        consta.uniNorte3 ="nada"
        consta.uniSur3 = "nada"
        consta.uniEste3 = "nada"
        consta.uniOeste3 = "nada"
        consta.uniAreaT3 = "nada"
        consta.uniAreaConst3 = "nada"
    }
    parte2 = document.getElementById("parte2").value
    parte1 = document.getElementById("parte1").value
    datos2 = parte2.split("|")
    datos1= parte1.split("|")
    consta.cedFul = datos1[0]
    consta.rifConst = datos1[1]
    consta.nomProp = datos1[2]
    consta.apelProp = datos1[3]
    consta.telfFul = `(${datos1[4]})-${datos1[5]}`
    consta.direcProp = datos1[6]
    consta.telfFul2 = `(${datos1[7]})-${datos1[8]}`
    consta.parrInmue = datos1[9]
    consta.secInmue = datos1[10]
    consta.direcInmue= datos1[11]
    consta.topoConst = datos1[12]
    consta.formaConst = datos1[13]
    consta.usoConst = datos1[14]
    consta.tenenConst = datos1[15]
    consta.ambInmue = datos1[16]
    consta.destConst = datos2[0]
    consta.estConst = datos2[1]
    consta.pareAcaInmue = datos2[3]
    consta.pareTipoInmue = datos2[2]
    consta.pintConst = datos2[4]
    consta.techoConst = datos2[5]
    consta.pisosConst = datos2[6]
    consta.piezConst = datos2[7]
    consta.ventConst = datos2[8]
    consta.puertConst = datos2[9]
    consta.instElect = datos2[10]
    consta.ambConst = datos2[11]
    consta.compConst = datos2[12]
    consta.estConserv = datos2[13]
    consta.obsConst = datos2[14]
    consta.docDebConst = datos2[15]
    consta.direcProtConst = datos2[16]
    consta.numProtConst = datos2[17]
    consta.tomoProtConst = datos2[18]
    consta.folioProtConst = datos2[19]
    consta.protoConst = datos2[20]
    consta.trimProtConst = datos2[21]
    consta.dateProtConst = datos2[22]
    consta.valorProtConst = datos2[23]
    consta.regInmue = datos2[24]
    consta.Acue = document.getElementById("Acue").value
    consta.AcueRural = document.getElementById("AcueRural").value
    consta.AguasSub = document.getElementById("AguasSub").value
    consta.AguasServ = document.getElementById("AguasServ").value
    consta.PavFlex = document.getElementById("PavFlex").value
    consta.PavRig = document.getElementById("PavRig").value
    consta.viaEngran = document.getElementById("viaEngran").value
    consta.acera = document.getElementById("acera").value
    consta.AlumPublico = document.getElementById("AlumPublico").value
    consta.aseo = document.getElementById("aseo").value
    consta.transPublic = document.getElementById("transPublic").value
    consta.pozoSept = document.getElementById("pozoSept").value
    consta.ElectResidencial = document.getElementById("ElectResidencial").value
    consta.ElectriIndust = document.getElementById("ElectriIndust").value
    consta.linTelf = document.getElementById("linTelf").value
    consta.multa = document.getElementById("multa").value
    consta.nuExp = document.getElementById("nuExp").value
    consta.expVerificado = document.getElementById("expVerificado").value
    if(consta.test3()==true){
        consta.GuardConst()
    }
}
function btnImprConst(){
    let consta = new constancias
    consta.montoFact = document.getElementById("montoFact").value
    consta.fechFact = document.getElementById("fechFact").value
    consta.idInmueble = document.getElementById("idInmueble").value
    consta.idProp =document.getElementById("idProp").value
    consta.numFact= document.getElementById("numFact").value
    consta.operacion = document.getElementById("operacion").value
    consta.nuExp = document.getElementById("nuExp").value
    if(consta.veriInmu() == true){
        consta.imprConst()
    }
}
function btnImprConst1(){
    let consta = new constancias
    consta.montoFact = document.getElementById("montoFact").value
    consta.fechFact = document.getElementById("fechFact").value
    consta.idInmueble = document.getElementById("idInmueble").value
    consta.idProp =document.getElementById("idProp").value
    consta.numFact= document.getElementById("numFact").value
    consta.operacion = document.getElementById("operacion").value
    consta.nuExp = document.getElementById("nuExp").value
    if(consta.veriInmu() == true){
        consta.imprConst1()
    }
}
function btnImprConst3(){
    let consta = new constancias
    consta.montoFact = document.getElementById("montoFact").value
    consta.fechFact = document.getElementById("fechFact").value
    consta.idInmueble = document.getElementById("idInmueble").value
    consta.idProp =document.getElementById("idProp").value
    consta.numFact= document.getElementById("numFact").value
    consta.operacion = document.getElementById("operacion").value
    consta.nuExp = document.getElementById("nuExp").value
    if(consta.veriInmu() == true){
        consta.imprConst3()
    }
}
function btnImprEmpa(){
    let consta = new constancias
    consta.montoFact = document.getElementById("montoFact").value
    consta.fechFact = document.getElementById("fechFact").value
    consta.idInmueble = document.getElementById("idInmueble").value
    consta.idProp =document.getElementById("idProp").value
    consta.numFact= document.getElementById("numFact").value
    consta.operacion = document.getElementById("operacion").value
    consta.nuExp = document.getElementById("nuExp").value
    if(consta.veriInmu() == true){
        consta.imprConstEmpa()
    }
}
function btnRevUsuario(){
    let consta = new constancias
    let cedR = document.getElementById("cedR").value
    let cedConst = document.getElementById("cedConst").value
    consta.cedFul = cedR+"-"+cedConst
    consta.revUsuario()
}
function mostProp(){
    let cedula = document.getElementById("cedula").value
    if(cedula!=0){
        rifBus = document.getElementById("rifBus").value
        divRif = rifBus.split("-")
        if(divRif[0]=="V"){
            document.getElementById("rifR").selectedIndex=1
        }
        if(divRif[0]=="J"){
            document.getElementById("rifR").selectedIndex=2
        }
        document.getElementById("rifN").value=divRif[1]

        let nombreRes = document.getElementById("nombreRes").value
        document.getElementById("nomProp").value=nombreRes
        let apellido = document.getElementById("apellido").value
        document.getElementById("apelProp").value=apellido
        let telef = document.getElementById("telef").value
        divTelef = telef.split("-")
        document.getElementById("codTelf").value=divTelef[0]
        document.getElementById("numTelf").value=divTelef[1]
        let telef2 = document.getElementById("telf_hab").value
        divTelef2 = telef2.split("-")
        document.getElementById("codTelf2").value = divTelef2[0]
        document.getElementById("numTelf2").value = divTelef2[1]
        let dir_hab = document.getElementById("dir_hab").value
        document.getElementById("direcProp").value=dir_hab
    }else{
        document.getElementById("rifR").selectIndex=0
        document.getElementById("rifN").value=""
        document.getElementById("nomProp").value=""
        document.getElementById("apelProp").value=""
        document.getElementById("codTelf").value=""
        document.getElementById("numTelf").value=""
        document.getElementById("direcProp").value=""

    }
    
    
}
function veriExpediente(){
    let consta = new constancias
    consta.nuExp = document.getElementById("nuExp").value
    consta.busExpediente();
}
function btnVeriFact(){
    let consta = new constancias
    consta.numFact = document.getElementById("numFact").value
    consta.veriFact()
}
//IMPRIMIR
function btnFormImpri(){
    let consta = new constancias
    consta.formImpri()
}
function btnVeriImpr(){
    let consta = new constancias
    consta.campBuscar = document.getElementById("campBuscar").value
    consta.veriImpr()
}
/**EVENTOS */
function btnCambSec(){
        let consta = new constancias()
        consta.parrInmue = document.getElementById("parrInmue").value
        consta.cambSect()
}
