<?php

class busquedas{

        var $campBuscar = "";
        var $tipoBuscar = "";
        var $expBuscar = "";
        var $cedula = "";
        var $rif = "";
        var $nomProp = "";
        var $apelProp = "";
        var $telefono = "";
        var $direcProp = "";
        var $cedula2 = "";
        var $telefono2 = "";
        var $parrInmue = "";
        var $secInmue = "";
        var $direcInmue = "";
        var $ambInmue = "";
        var $idInmueble = "";
        var $topoConst = "";
        var $formaConst = "";
        var $regInmue = "";
        var $usoConst = "";
        var $tenenConst = "";
        var $ocupConst = "";
        var $dimeConst = "";
        var $idCarac = "";
        var $destConst = "";
        var $estConst = "";
        var $pareTipoInmue = "";
        var $pareAcaInmue = "";
        var $pintConst = "";
        var $estConserv = "";
        var $techoConst ="";
        var $pisosConst = "";
        var $piezConst = "";
        var $ventConst = "";
        var $puertConst = "";
        var $instElect = "";
        var $ambConst = "";
        var $compConst = "";
        var $obsConst = "";
        var $idCaracConst = "";
        var $docDebConst = "";
        var $direcProtConst = "";
        var $numProtConst = "";
        var $tomoProtConst = "";
        var $folioProtConst = "";
        var $protoConst = "";
        var $trimProtConst = "";
        var $dateProtConst = "";
        var $valorProtConst = "";
        var $idProto = "";

    function mostBusqueda(){
        $link= new mysqli("127.0.0.1", "root","","siscast") 
        or die(mysqli_error());
        
        if($this->tipoBuscar=="Expediente"){
            //BUSQUEDA EXPEDIENTE
                $expSql = "SELECT * FROM expediente where n_expediente=".$this->campBuscar."";
                $resBus=$link->query($expSql);
                $expRes = $resBus->fetch_assoc();
                $numExp = $expRes["n_expediente"];
                $idProp = $expRes["fk_propietario"];
                $idInmue = $expRes["fk_inmueble"];
            //BUSQUEDA PROPIETARIO
                $propSql = "SELECT * FROM propietarios where id=".$idProp."";
                $resProp = $link->query($propSql);
                $propRes = $resProp->fetch_assoc();
            //BUSQUEDA INMUEBLE
                $inmueSql = "SELECT * FROM inmueble where id=".$idInmue."";
                $resInmue = $link->query($inmueSql);
                $inmueRes = $resInmue->fetch_assoc();
            //BUSQUEDA CARACTERISTICAS DEL INMUEBLE
                $caracInmueSql = "SELECT * FROM carc_inmueble where id=".$inmueRes["fk_carac_inmuebles"]."";
                $rescaracInmue = $link->query($caracInmueSql);
                $inmueResCarac = $rescaracInmue->fetch_assoc();
            //BUSQUEDA PAGOS
                $pagosSql = "SELECT * FROM pagos where fk_expedient=".$expRes["id"]."";
                $resPago = $link->query($pagosSql);
                $pagoRes = $resPago->fetch_assoc();
            echo'
            <table border="1">
                 <tr>
                     <td colspan="5">
                         <h2>Resultado</h2>
                     </td>
                 </tr>
                 <tr>
                     <td>
                         <b>Propietario</b>
                     </td>
                     <td>
                         <b>Expediente</b>
                     </td>
                     <td>
                         <b>Fecha Pago</b>
                     </td>
                     <td>
                         <b>Uso del Inmueble</b>
                     </td>
                     <td>
                        <b>Acción</b>
                     </td>
                 </tr>
                 <tr>
                     <td>
                         '.$propRes["nombre"].' '.$propRes["apellido"].'
                     </td>
                     <td>
                        '.$this->campBuscar.'
                     </td>
                     <td>';
                    if($pagoRes!=0){
                        echo 'Si ha pagado';
                    }else{
                        echo 'No ha realizado pago';
                    }
                     echo'</td>
                     <td>
                        '.$inmueResCarac["uso"].'
                     </td>
                     <td>
                        <input type"button" value="Ver pagos" class="botones btn btn-primary" />
                        <input type"button" value="Modificar" class="botones btn btn-primary" onclick="mostTipModif()"/>
                        <input type"button" value="Eliminar" class="botones btn btn-primary" />
                        <input type="hidden" value="'.$this->campBuscar.'" id="expBuscar">
                     </td>
                 </tr>
            </table>';
        }
        echo'<div id="MostResult"></div>';
    }
    function mostModif(){
        echo'
            <select id="secciones" onChange="btnFormCambios()">
                <option value="0"></option>
                <option value="Propietario">Datos del Propietario</option>
                <option value="Inmueble">Datos del Inmueble</option>
                <option value="Caract Terreno">Caracteristicas del Terreno</option>
                <option value="Caract Construccion">Caracteristicas de la Construcción</option>
                <option value="Protocolizacion">Datos de Protocolizacion</option>
                <option value="Linderos">Linderos</option>
                <option value="Areas Terreno">Areas del Terreno</option>
                <option value="Servicios">Servicios</option>
                <option value="Inmueble">Datos del Inmueble</option>
                <option value="Inmueble">Datos de la Factura</option>
            </select>
            <div id="modificaciones"></div>';
    }
    function modifInmueble(){
        $link= new mysqli("127.0.0.1", "root","","siscast") 
        or die(mysqli_error());
        //BUSQUEDA DEL EXPEDIENTE
            $expSql = "SELECT * FROM expediente where n_expediente=".$this->expBuscar."";
            $resExp = $link->query($expSql);
            $expRes = $resExp->fetch_assoc();
        //BUSQUEDA DEL INMUEBLE
            $inmuSql = "SELECT * FROM inmueble where id=".$expRes["id"]."";
            $resInmue = $link->query($inmuSql);
            $inmueRes = $resInmue->fetch_assoc();
        echo'
        
        <table border="1px" class="taConst">
            <tr>
                <td colspan="4" class="tiConst">
                    <p class="h1">DATOS DEL INMUEBLE</p>
                </td>
            </tr>
            <tr>
                <td class="tdConst">
                    <div class="campDat">
                        <p class="negritas">Telefono</p>
                        <input type="text" class="codigo2" id="codTelf2"/>
                        <input type="text" class="numText" id="numTelf2"/>
                    </div>
                </td>
                <td >
                    <div class="campDat">
                        <p class="negritas">Parroquia</p>
                        <select onchange="btnCambSec()" id="parrInmue">
                            <option value="0"></option>
                            <option value="Capital">Capital</option>
                            <option value="Dr. Alberto Adriani">Dr. Alberto Adriani</option>
                            <option value="Santo Domingo">Santo Domingo</option>
                        </select>
                    </div>
                </td>
                <td >
                    <div class="campDat">
                        <p class="negritas">Sector</p>
                        <select id="secInmue" >
                         </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div class="campDat">
                        <p class="negritas">Dirección del inmueble</p>
                        <input type="text" value="'.$inmueRes["direccion"].'" class="direc1" id="direcInmue" />
                    </div>
                </td>
                <td>
                    <div class="campDat">
                        <p class="negritas">Ambito inmueble</p>
                        <select id="ambInmue">
                            <option value="nada"></option>
                            <option value="Urbano">Urbano</option>
                            <option value="Rural">Rural</option>
                        </select>
                    </div>
                </td>
            </tr>
        </table>
        <input type="hidden" id="telefono" value="'.$inmueRes["telef"].'"/>
        <input type="hidden" id="parr" value="'.$inmueRes["parroquia"].'" />
        <input type="hidden" id="sector" value="'.$inmueRes["sector"].'"/>
        <input type="hidden" id="ambito" value="'.$inmueRes["ambito"].'"/>
        <input type="hidden" id="idInmueble" value="'.$inmueRes["id"].'"/>
        <div class="btnSig1">
            <input type="button" value="Actualizar" onclick="btnActInmue()" class="botones btn btn-primary" />
        </div>
        
        ';
    }
    function modifcarcTerreno(){
        $link= new mysqli("127.0.0.1", "root","","siscast") 
        or die(mysqli_error());
        //BUSQUEDA DEL EXPEDIENTE
            $expSql = "SELECT * FROM expediente where n_expediente=".$this->expBuscar."";
            $resExp = $link->query($expSql);
            $expRes = $resExp->fetch_assoc();
        //BUSQUEDA DEL INMUEBLE
            $inmuSql = "SELECT * FROM inmueble where id=".$expRes["id"]."";
            $resInmue = $link->query($inmuSql);
            $inmueRes = $resInmue->fetch_assoc();
        //BUSQUEDA CARAC. INMUEBLE
            $inmuCaracSql = "SELECT * FROM carc_inmueble where id=".$inmueRes["fk_carac_inmuebles"]."";
            $inmuCarac = $link->query($inmuCaracSql);
            $caracInmu = $inmuCarac->fetch_assoc();
        echo'
        <input type="hidden" id="topografia" value="'.$caracInmu["topografia"].'"/>
        <input type="hidden" id="forma" value="'.$caracInmu["forma"].'"/>
        <input type="hidden" id="uso" value="'.$caracInmu["uso"].'"/>
        <input type="hidden" id="tenencia" value="'.$caracInmu["tenencia"].'"/>
        <input type="hidden" id="ocupante" value="'.$caracInmu["ocupante"].'"/>
        <input type="hidden" id="dimenciones" value="'.$caracInmu["dimenciones"].'"/>
        <input type="hidden" id="regimen" value="'.$caracInmu["regimen"].'"/>
        <input type="hidden" id="idCarac" value="'.$caracInmu["id"].'"/>
        <table border="1px" class="taConst">
            <tr>
                <td colspan="4" class="tiConst">
                    <p class="h1">CARACTERISTICAS DEL TERRENO</p>
                </td>
            </tr>
            <tr>
                <td class="tdConst">
                    <div class="campDat">
                        <p class="negritas">Topografía</p>
                        <select id="topoConst">
                            <option value="0"></option>
                            <option value="Terreno Llano">Terreno Llano</option>
                            <option value="Terreno Quebrado">Terreno Quebrado</option>
                        </select>
                    </div>
                </td>
                <td >
                    <div class="campDat">
                        <p class="negritas">Forma</p>
                        <select id="formaConst">
                            <option value="0"></option>
                            <option value="Regular">Regular</option>
                            <option value="Irregular">Irregular</option>
                        </select>
                    </div>
                </td>
                <td >
                    <div class="campDat">
                        <p class="negritas">Regimen</p>
                        <select id="regInmue">
                            <option value="0"></option>
                            <option value="Propiedad Horizontal">Propiedad Horizontal</option>
                            <option value="Condominio">Condominio</option>
                            <option value="Sucesion">Sucesion</option>
                        </select>
                    </div>
                </td>
                <td >
                    <div class="campDat">
                        <p class="negritas">Uso</p>
                        <select id="usoConst">
                            <option value="0"></option>
                            <option value="Comercial">Comercial</option>
                            <option value="Residencial">Residencial</option>
                            <option value="Residencial-Comercial">Residencial-Comercial</option>
                            <option value="Industrial">Industrial</option>
                            <option value="Espacios-Publicos">Espacios Publicos</option>
                            <option value="Rural">Rural</option>
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="campDat">
                        <p class="negritas">Tenencia</p>
                        <select id="tenenConst">
                            <option value="0"></option>
                            <option value="Municipio">Municipio</option>
                            <option value="Comunidad">Comunidad</option>
                            <option value="INTU">INTU</option>
                            <option value="INTI">INTI</option>
                            <option value="Propio">Propio</option>
                            <option value="Enfiteusis">Enfiteusis</option>
                            <option value="Ocupado">Ocupado</option>
                            <option value="Otros">Otros</option>
                        </select>
                    </div>
                </td>
                <td >
                    <div class="campDat">
                        <p class="negritas">Ocupante</p>
                        <select id="ocupConst">
                            <option value="0"></option>
                            <option value="Hab. por Prop.">Hab. por Prop.</option>
                            <option value="Hab. por Inquilino">Hab. por Inquilino</option>
                            <option value="Renta Mensual">Renta Mensual</option>
                            <option value="Fecha de Contrato">Fecha de Contrato</option>
                            <option value="Habitantes No">Habitantes No</option>
                            <option value="Ingreso Familiar">Ingreso Familiar</option>
                        </select>
                    </div>
                </td>
                <td >
                    <div class="campDat">
                        <p class="negritas">Dimensiones</p>
                        <select id="dimeConst">
                            <option value="0"></option>
                            <option value="Frente">Frente</option>
                            <option value="Profundidad">Profundidad</option>
                            <option value="Área">Área</option>
                            <option value="Frente tipo">Frente tipo</option>
                            <option value="Prof tipo">Prof tipo</option>
                        </select>
                    </div>
                </td>
                <td >
                </td>
            </tr>
        </table>
        <div class="btnSig1">
            <input type="button" value="Siguiente" onclick="btnActCaracInmue()" class="botones btn btn-primary" />
        </div>
        ';
    }
    
    function modifPropietario(){
        $link= new mysqli("127.0.0.1", "root","","siscast") 
        or die(mysqli_error());
        //BUSCAR EXPEDIENTE
            $busExped = "SELECT * FROM expediente where n_expediente=".$this->expBuscar."";
            $resExped = $link->query($busExped);
            $expedRes = $resExped->fetch_assoc();
            
        //BUSCAR PROPIETARIO
            $propSql = "SELECT * FROM propietarios where id=".$expedRes["fk_propietario"]."";
            $resProp = $link->query($propSql);
            $propRes = $resProp->fetch_assoc();
        echo'
        <input type="hidden" value="'.$propRes["cedula"].'" id="divCedula" />
        <input type="hidden" value="'.$propRes["rif"].'" id="divRif" />
        <input type="hidden" value="'.$propRes["telef"].'" id="divTelf" />
        <table border="1px" class="taConst">
            <tr>
                <td colspan="4" class="tiConst">
                    <p class="h1">DATOS DEL PROPIETARIO</p>
                </td>
            </tr>
            <tr>
                <td class="tdConst">
                    <div class="campDat">
                    <p class="negritas">Cedula:</p>
                        <select class="codigo2" id="cedR">
                            <option value="0"></option>
                            <option value="V">V</option>
                            <option value="E">E</option>
                        </select>
                        <input type="text" class="numText" value="" id="cedConst" />
                    </div>
                    
                </td>
                <td>
                    <div class="campDat">
                        <p class="negritas">Rif:</p>
                        <select class="codigo2" id="rifR">
                            <option value="0"></option>
                            <option value="V">V</option>
                            <option value="J">J</option>
                        </select>
                        <input type="text" class="numText" value="" id="rifN" />
                    </div>
                </td>
                <td >
                    <div class="campDat">
                        <p class="negritas">Nombres</p>
                        <input type="text" value="'.$propRes["nombre"].'" id="nomProp" > 
                    </div>
                </td>
                <td >
                    <div class="campDat">
                        <p class="negritas">Apellido</p>
                        <input type="text" value="'.$propRes["apellido"].'" id="apelProp" />
                    </div>
                    
                </td>
            </tr>
            <tr>
                <td>
                    <div class="campDat">
                        <p class="negritas">Telefono</p>
                        <input type="text" class="codigo2" value="" id="codTelf"/>
                        <input type="text" class="numText" value="" id="numTelf"/>
                    </div>
                </td>
                <td colspan="3">
                    <div class="campDat">
                        <p class="negritas">Dirección del propietario</p>
                        <input type="text" value="'.$propRes["dir_hab"].'" class="direc2" id="direcProp" />
                    </div>
                </td>
            </tr>
        </table>
            <div class="btnSig1">
                    <input type="button" value="Actualizar" onclick="btnActProp()" class="botones btn btn-primary" />
            </div>';
    }
    function modifcarcConstruccion(){
        $link= new mysqli("127.0.0.1", "root","","siscast") 
        or die(mysqli_error());
        //BUSQUEDA DEL EXPEDIENTE
            $expSql = "SELECT * FROM expediente where n_expediente=".$this->expBuscar."";
            $resExp = $link->query($expSql);
            $expRes = $resExp->fetch_assoc();
        //BUSQUEDA DEL INMUEBLE
            $inmuSql = "SELECT * FROM inmueble where id=".$expRes["id"]."";
            $resInmue = $link->query($inmuSql);
            $inmueRes = $resInmue->fetch_assoc();
        //BUSQUEDA CARAC. INMUEBLE
            $inmuCaracSql = "SELECT * FROM caracteristicas_construccion where id=".$inmueRes["fk_carac_construccion"]."";
            $inmuCarac = $link->query($inmuCaracSql);
            $caracInmu = $inmuCarac->fetch_assoc();
        echo'
        <input type="hidden" value="'.$caracInmu["destino"].'" id="destino"/>
        <input type="hidden" value="'.$caracInmu["estructura"].'" id="estructura"/>
        <input type="hidden" value="'.$caracInmu["paredes_tipo"].'" id="paredes_tipo"/>
        <input type="hidden" value="'.$caracInmu["paredes_acabado"].'" id="paredes_acabado"/>
        <input type="hidden" value="'.$caracInmu["pintura"].'" id="pintura"/>
        <input type="hidden" value="'.$caracInmu["techo"].'" id="techo"/>
        <input type="hidden" value="'.$caracInmu["pisos"].'" id="pisos"/>
        <input type="hidden" value="'.$caracInmu["piezas_sanitarias"].'" id="piezas_sanitarias"/>
        <input type="hidden" value="'.$caracInmu["ventanas"].'" id="ventanas"/>
        <input type="hidden" value="'.$caracInmu["puertas"].'" id="puertas"/>
        <input type="hidden" value="'.$caracInmu["insta_electricas"].'" id="insta_electricas"/>
        <input type="hidden" value="'.$caracInmu["complementos"].'" id="complementos"/>
        <input type="hidden" value="'.$caracInmu["estado_conservacion"].'" id="estado_conservacion"/>
        <input type="hidden" value="'.$caracInmu["ambientes"].'" id="ambientes"/>
        <input type="hidden" value="'.$caracInmu["id"].'" id="idCaracConst"/>
        <table border="1px" class="taConst">
            <tr>
                <td colspan="4" class="tiConst">
                    <p class="h1">CARACTERISTICAS DE LAS CONSTRUCCIÓN</p>
                </td>
            </tr>
            <tr>
                <td class="tdConst">
                    <div class="campDat">
                        <p class="negritas">Destino</p>
                        <select id="destConst">
                            <option value="0"></option>
                            <option value="Unifamiliar">Unifamiliar</option>
                            <option value="Bifamiliar">Bifamiliar</option>
                            <option value="Multifamiliar">Multifamiliar</option>
                            <option value="Comercial">Comercial</option>
                            <option value="Industrial">Industrial</option>
                            <option value="Hotel-Posada">Hotel-Posada</option>
                            <option value="Institución Pública">Institución Pública</option>
                            <option value="Espacios Públicos">Espacios Públicos</option>
                        </select>
                    </div>
                </td>
                <td >
                    <div class="campDat">
                        <p class="negritas">Estructura</p>
                        <select id="estConst">
                            <option value="0"></option>
                            <option value="Concreto">Concreto</option>
                            <option value="Acero ">Acero</option>
                            <option value="Concreto-Acero">Concreto-Acero</option>
                            <option value="Paredes-Portantes">Paredes Portantes</option>
                            <option value="Madera">Madera</option>
                            <option value="Prefabricado">Prefabricado</option>
                            <option value="Otros">Otros</option>
                        </select>
                    </div>
                </td>
                <td >
                    <div class="campDat">
                        <p class="negritas">Paredes</p>
                        <select id="pareTipoInmue">
                            <option value="">Tipo</option>
                            <option value="Concreto">Ladrillo</option>
                            <option value="Metalica">Bloque</option>
                            <option value="Madera">Adobe Tapia</option>
                            <option value="Concreto">Bahareque</option>
                            <option value="Metalica">Madera</option>
                            <option value="Madera">Prefabricado</option>
                        </select>
                        <select id="pareAcaInmue">
                            <option value="0">Acabado</option>
                            <option value="Concreto">Lujoso</option>
                            <option value="Metalica">Friso liso</option>
                            <option value="Madera">Friso rustico</option>
                            <option value="Concreto">Obra limpia</option>
                            <option value="Metalica">Sin friso</option>
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="campDat">
                        <p class="negritas">Pintura</p>
                        <select id="pintConst">
                            <option value="0"></option>
                            <option disabled>Pintura C</option>
                            <option value="Caucho">Caucho</option>
                            <option value="Óleo">Óleo</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Abestina">Abestina</option>
                            <option value="Luchada">Luchada</option>
                            <option value="Texturación">Texturación</option>
                            <option disabled>Pintura A</option>
                            <option value="Concreto">Concreto</option>
                            <option value="Metálica">Metálica</option>
                            <option value="Madera">Madera</option>
                            <option value="Varas">Varas</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div class="campDat">
                        <p class="negritas">Estado Conservación</p>
                        <select id="estConserv">
                            <option value="0"></option>
                            <option value="Año de Construcción">Año de Construcción</option>
                            <option value="Año de refacción">Año de refacción</option>
                            <option value="Edad Efectiva">Edad Efectiva</option>
                            <option value="Nro de Planta">Nro de Planta</option>
                            <option value="Nro de Vivienda">Nro de Vivienda</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div class="campDat">
                        <p class="negritas">Techo</p>
                        <select id="techoConst">
                            <option value="0"></option>
                            <option value="Madera-teja">Madera-teja</option>
                            <option value="Placa-teja">Placa-teja</option>
                            <option value="Platabanda">Platabanda</option>
                            <option value="Tejas-riple">Tejas-riple</option>
                            <option value="Aluminio">Aluminio</option>
                            <option value="Acerolit-Asbesto">Acerolit-Asbesto</option>
                            <option value="Paca Tabelon">Paca Tabelon</option>
                            <option value="Placa nevada">Placa nevada</option>
                            <option value="Losacero">Losacero</option>
                            <option value="Zinc">Zinc</option>
                            <option value="Cana teja">Cana teja</option>
                            <option value="Cielo raso">Cielo raso</option>
                            <option value="Raso laminas">Raso laminas</option>
                            <option value="Machimbre">Machimbre</option>
                            <option value="Policarbonato">Policarbonato</option>P
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="campDat">
                        <p class="negritas">Pisos</p>
                        <select id="pisosConst">
                            <option value="0"></option>
                            <option value="Lujoso">Lujoso</option>
                            <option value="Baldosas/Terracota">Baldosas/Terracota</option>
                            <option value="Cerámica">Cerámica</option>
                            <option value="Granito">Granito</option>
                            <option value="Mosaico">Mosaico</option>
                            <option value="Cemento olor">Cemento olor</option>
                            <option value="Cemento rustico">Cemento rustico</option>
                            <option value="Vinil">Vinil</option>
                            <option value="Porcelanato">Porcelanato</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div class="campDat">
                        <p class="negritas">Piezas sanitarias</p>
                        <select id="piezConst">
                            <option value="0"></option>
                            <option value="Porcelana Fina">Porcelana Fina</option>
                            <option value="Porcelana Econ">Porcelana Econ</option>
                            <option value="Bañera">Bañera</option>
                            <option value="Calentador">Calentador</option>
                            <option value="W.C.">W.C.</option>
                            <option value="Bidet">Bidet</option>
                            <option value="Lavamanos">Lavamanos</option>
                            <option value="Ducha">Ducha</option>
                            <option value="Urinario">Urinario</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div class="campDat">
                        <p class="negritas">Ventanas</p>
                        <select id="ventConst">
                            <option value="0"></option>
                            <option value="Vetanal">Vetanal</option>
                            <option value="Celosial">Celosial</option>
                            <option value="Corredora">Corredora</option>
                            <option value="Basculante">Basculante</option>
                            <option value="Batiente">Batiente</option>
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="campDat">
                        <p class="negritas">Puertas</p>
                        <select id="puertConst">
                            <option value="0"></option>
                            <option value="Entamborada Fina">Entamborada Fina</option>
                            <option value="Ent. Economica">Ent. Economica</option>
                            <option value="Madera cepillada">Madera cepillada</option>
                            <option value="Hierro">Hierro</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div class="campDat">
                        <p class="negritas">Instal. Electricas</p>
                        <select id="instElect">
                            <option value="0"></option>
                            <option value="Embutidas">Embutidas</option>
                            <option value="Externa">Externa</option>
                            <option value="Industrial">Industrial</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div class="campDat">
                        <p class="negritas">Ambientes</p>
                        <select id="ambConst">
                            <option value="0"></option>
                            <option value="Dormitorio">Dormitorio</option>
                            <option value="Comedor">Comedor</option>
                            <option value="Sala">Sala</option>
                            <option value="Baños">Baños</option>
                            <option value="Cocina">Cocina</option>
                            <option value="Servicio">Servicio</option>
                            <option value="Oficina">Oficina</option>
                            <option value="Garaje">Garaje</option>
                            <option value="Estacionamiento">Estacionamiento</option>
                        </select>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="campDat">
                        <p class="negritas">Complementos</p>
                        <select id="compConst">
                            <option value="0"></option>
                            <option value="Ascensor">Ascensor</option>
                            <option value="Aire Acondici.">Aire Acondici.</option>
                            <option value="Rejas">Rejas</option>
                            <option value="Closets">Closets</option>
                            <option value="Porcelana">Porcelana</option>
                        </select>
                    </div>
                </td>
                <td>
                    <div class="campDat">
                        <p class="negritas">Observaciones</p>
                        <textarea id="obsConst">'.$caracInmu["observ"].'</textarea>
                    </div>
                </td>
                <td>
                    <div class="btnSig1">
                        <input type="button" value="Actualizar" onclick="btnActConst()" class="botones btn btn-primary" />
                    </div>
                </td>
            </tr>
        </table>';
    }
    function modificarProtocol(){
        $link= new mysqli("127.0.0.1", "root","","siscast") 
        or die(mysqli_error());
        //BUSQUEDA DEL EXPEDIENTE
            $expSql = "SELECT * FROM expediente where n_expediente=".$this->expBuscar."";
            $resExp = $link->query($expSql);
            $expRes = $resExp->fetch_assoc();
        //BUSQUEDA DEL INMUEBLE
            $inmuSql = "SELECT * FROM inmueble where id=".$expRes["id"]."";
            $resInmue = $link->query($inmuSql);
            $inmueRes = $resInmue->fetch_assoc();
        //BUSQUEDA CARAC. INMUEBLE
            $inmuCaracSql = "SELECT * FROM datos_protocolizacion where id=".$inmueRes["fk_protocolizacion"]."";
            $inmuCarac = $link->query($inmuCaracSql);
            $caracInmu = $inmuCarac->fetch_assoc();
        echo'
        <input type="hidden" value="'.$caracInmu["id"].'" id="idProto">
        <table border="1px" class="taConst">
        <tr>
            <td colspan="3">
                <p class="h1">DATOS DE PROTOCOLIZACION DEL INMUEBLE</p>
            </td>
        </tr>
        <tr>
            <td class="tdConst">
                <div class="campDat">
                    <p class="negritas">Documento Debidamente:</p>
                    <input type="text" value="'.$caracInmu["documento"].'" id="docDebConst"/>
                </div>
            </td>
            <td class="tdConst">
                <div class="campDat">
                    <p class="negritas">Dirección:</p>
                    <input type="text" value="'.$caracInmu["direccion"].'" id="direcProtConst"/>
                </div>
            </td>
        </tr>
        <tr>
            <td class="tdConst">
                <div class="campDat">
                    <p class="negritas">Numero:</p>
                    <input type="text" value="'.$caracInmu["numero"].'" id="numProtConst"/>
                </div>
            </td>
            <td class="tdConst">
                <div class="campDat">
                    <p class="negritas">Tomo:</p>
                    <input type="text" value="'.$caracInmu["tomo"].'" id="tomoProtConst"/>
                </div>
            </td>
            <td class="tdConst">
                <div class="campDat">
                    <p class="negritas">Folio:</p>
                    <input type="text" value="'.$caracInmu["folio"].'" id="folioProtConst"/>
                </div>
            </td>
        </tr>
        <tr>
            <td class="tdConst">
                <div class="campDat">
                    <p class="negritas">Protocolo:</p>
                    <input type="text" value="'.$caracInmu["protocolo"].'" id="protoConst"/>
                </div>
            </td>
            <td class="tdConst">
                <div class="campDat">
                    <p class="negritas">Trimestre:</p>
                    <input type="text" value="'.$caracInmu["trimestre"].'" id="trimProtConst"/>
                </div>
            </td>
            <td class="tdConst">
                <div class="campDat">
                    <p class="negritas">Fecha:</p>
                    <input type="date" value="'.$caracInmu["fecha"].'" id="dateProtConst"/>
                </div>
            </td>
        </tr>
        <tr>
            <td class="tdConst">
                <div class="campDat">
                    <p class="negritas">Valor del Inmueble:</p>
                    <input type="text" value="'.$caracInmu["valor_inmueble"].'" id="valorProtConst"/>
                </div>
            </td>
        </tr>
        </table>
        <div class="btnSig1">
            <input type="button" value="Actualizar" onclick="btnActProtocol()" class=" botones btn btn-primary" />
        </div>';
    }
    function modifLinderos(){
        echo'
        <table border="1px" class="taConst">
            <tr>
                <td colspan="2" class="tiConst">
                    <p class="h1">Linderos</p>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="negritas">General:</p>
                    <select onchange="actGeneral()" id="lindGeneral">
                        <option value="0"></option>
                        <option value="si">Si</option>
                        <option value="no">No</option>
                    </select>
                </td>
                <td>
                    <div id="lindActGen"></div>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="negritas">Posible Venta:</p>
                    <select onchange="actPosVenta()" id="posVenta">
                        <option value="0"></option>
                        <option value="si">Si</option>
                        <option value="no">No</option>
                    </select>
                </td>
                <td>
                    <div id="lindPosVenta"></div>
                </td>
            </tr>
            <tr>
                <td>
                    <p class="negritas">Segun Documento:</p>
                    <select onchange="actSecDoc()" id="secDoc">
                        <option value="0"></option>
                        <option value="si">Si</option>
                        <option value="no">No</option>
                    </select>
                </td>
                <td>
                    <div id="lindSecDoc"></div>
                </td>
            </tr>
        </table>
        ';
    }
    function actProp(){
        $link= new mysqli("127.0.0.1", "root","","siscast") 
        or die(mysqli_error());
        $propSql = "UPDATE propietarios SET cedula='".$this->cedula."',rif='".$this->rif."',nombre='".$this->nomProp."',apellido='".$this->apelProp."',telef='".$this->telefono."',dir_hab='".$this->direcProp."' WHERE cedula='".$this->cedula2."' ";
        $link->query($propSql);
        echo 'ACTUALIZADO CON EXITO';
    }
    function actInmue(){
        $link= new mysqli("127.0.0.1", "root","","siscast") 
        or die(mysqli_error());
        $inmueSql = "UPDATE inmueble SET telef='".$this->telefono."',direccion='".$this->direcInmue."',parroquia='".$this->parrInmue."',sector='".$this->secInmue."',ambito='".$this->ambInmue."' WHERE id='".$this->idInmueble."' ";
        $link->query($inmueSql);
        echo 'ACTUALIZADO CON EXITO';
    }
    function actCaracInmue(){
        $link= new mysqli("127.0.0.1", "root","","siscast") 
        or die(mysqli_error());
        $inmueSql = "UPDATE carc_inmueble SET topografia='".$this->topoConst."',forma='".$this->formaConst."',uso='".$this->usoConst."',tenencia='".$this->tenenConst."',ocupante='".$this->ocupConst."',dimenciones='".$this->dimeConst."',regimen='".$this->regInmue."' WHERE id='".$this->idCarac."' ";
        $link->query($inmueSql);
        echo 'ACTUALIZADO CON EXITO';
    }
    function actConst(){
        $link= new mysqli("127.0.0.1", "root","","siscast") 
        or die(mysqli_error());
        $inmueSql = "UPDATE caracteristicas_construccion SET destino='".$this->destConst."',estructura='".$this->estConst."',paredes_tipo='".$this->pareTipoInmue."',paredes_acabado='".$this->pareAcaInmue."',pintura='".$this->pintConst."',techo='".$this->techoConst."',pisos='".$this->pisosConst."',piezas_sanitarias='".$this->piezConst."',ventanas='".$this->ventConst."',puertas='".$this->puertConst."',insta_electricas='".$this->instElect."',complementos='".$this->compConst."',estado_conservacion='".$this->estConserv."',ambientes='".$this->ambConst."',observ='".$this->obsConst."' WHERE id='".$this->idCaracConst."' ";
        $link->query($inmueSql);
        echo 'ACTUALIZADO CON EXITO';
    }
    function actProtocol(){
        $link= new mysqli("127.0.0.1", "root","","siscast") 
        or die(mysqli_error());
        $inmueSql = "UPDATE datos_protocolizacion SET documento='".$this->docDebConst."',direccion='".$this->direcProtConst."',numero='".$this->numProtConst."',tomo='".$this->tomoProtConst."',folio='".$this->folioProtConst."',protocolo='".$this->protoConst."',trimestre='".$this->trimProtConst."',fecha='".$this->dateProtConst."',valor_inmueble='".$this->valorProtConst."' WHERE id='".$this->idProto."' ";
        $link->query($inmueSql);
        echo 'ACTUALIZADO CON EXITO';
    }
}


?>