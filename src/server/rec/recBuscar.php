<?php

include('../busquedas.php');

$bus = new busquedas;

if(isset($_POST['accion'])){
    $accion= $_POST['accion'];
}else{
    $accion= "nada";
}
if(isset($_POST['tipoBuscar'])){
    $bus->tipoBuscar= $_POST['tipoBuscar'];
}else{
    $bus->tipoBuscar= "nada";
}
if(isset($_POST['campBuscar'])){
    $bus->campBuscar= $_POST['campBuscar'];
}else{
    $bus->campBuscar= "nada";
}
if(isset($_POST["secciones"])){
    $secciones = $_POST["secciones"];
}else{
    $secciones = "nada";
}
if(isset($_POST["expBuscar"])){
    $bus->expBuscar = $_POST["expBuscar"];
}else{
    $bus->expBuscar = "nada";
}
if(isset($_POST["cedula"])){
    $bus->cedula = $_POST["cedula"];
}else{
    $bus->cedula = "nada";
}
if(isset($_POST["rif"])){
    $bus->rif = $_POST["rif"];
}else{
    $bus->rif = "nada";
}
if(isset($_POST["nomProp"])){
    $bus->nomProp = $_POST["nomProp"];
}else{
    $bus->nomProp = "nada";
}
if(isset($_POST["apelProp"])){
    $bus->apelProp = $_POST["apelProp"];
}else{
    $bus->apelProp = "nada";
}
if(isset($_POST["telefono"])){
    $bus->telefono = $_POST["telefono"];
}else{
    $bus->telefono = "nada";
}
if(isset($_POST["direcProp"])){
    $bus->direcProp = $_POST["direcProp"];
}else{
    $bus->direcProp = "nada";
}
if(isset($_POST["cedula2"])){
    $bus->cedula2 = $_POST["cedula2"];
}else{
    $bus->cedula2 = "nada";
}
if(isset($_POST["telefono2"])){
    $bus->telefono2 = $_POST["telefono2"];
}else{
    $bus->telefono2 = "nada";
}
if(isset($_POST["parrInmue"])){
    $bus->parrInmue = $_POST["parrInmue"];
}else{
    $bus->parrInmue = "nada";
}
if(isset($_POST["secInmue"])){
    $bus->secInmue = $_POST["secInmue"];
}else{
    $bus->secInmue = "nada";
}
if(isset($_POST["direcInmue"])){
    $bus->direcInmue = $_POST["direcInmue"];
}else{
    $bus->direcInmue = "nada";
}
if(isset($_POST["ambInmue"])){
    $bus->ambInmue = $_POST["ambInmue"];
}else{
    $bus->ambInmue = "nada";
}
if(isset($_POST["idInmueble"])){
    $bus->idInmueble = $_POST["idInmueble"];
}else{
    $bus->idInmueble = "nada";
}
if(isset($_POST["topoConst"])){
    $bus->topoConst = $_POST["topoConst"];
}else{
    $bus->topoConst = "nada";
}
if(isset($_POST["formaConst"])){
    $bus->formaConst = $_POST["formaConst"];
}else{
    $bus->formaConst = "nada";
}
if(isset($_POST["regInmue"])){
    $bus->regInmue = $_POST["regInmue"];
}else{
    $bus->regInmue = "nada";
}
if(isset($_POST["usoConst"])){
    $bus->usoConst = $_POST["usoConst"];
}else{
    $bus->usoConst = "nada";
}
if(isset($_POST["tenenConst"])){
    $bus->tenenConst = $_POST["tenenConst"];
}else{
    $bus->tenenConst = "nada";
}
if(isset($_POST["ocupConst"])){
    $bus->ocupConst = $_POST["ocupConst"];
}else{
    $bus->ocupConst = "nada";
}
if(isset($_POST["dimeConst"])){
    $bus->dimeConst = $_POST["dimeConst"];
}else{
    $bus->dimeConst = "nada";
}
if(isset($_POST["idCarac"])){
    $bus->idCarac = $_POST["idCarac"];
}else{
    $bus->idCarac = "nada";
}


if($accion =="busExp"){
    $bus->mostBusqueda();
}
if($accion == "mostRest"){
    $bus->mostModif();
}
if($secciones=="Propietario"){
    $bus->modifPropietario();
}
if($secciones=="Inmueble"){
    $bus->modifInmueble();
}
if($secciones == "Caract Terreno"){
    $bus->modifcarcTerreno();
}
if($accion == "actProp"){
    $bus->actProp();
}
if($accion == "cambSecMod"){
    $bus->cambSecMod();
}
if($accion == "actInmue"){
    $bus->actInmue();
}
if($accion=="actCaracInmue"){
    $bus->actCaracInmue();
}
if($_POST["parrInmue2"]=="Capital"){
    $bus->cambSecMod();
}
if($_POST["parrInmue2"]=="Dr. Alberto Adriani"){
    $bus->cambSecMod();
}
?>