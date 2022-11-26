import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.scss']
})
export class ReservaComponent implements OnInit {
  nombreCliente?:string="";
  cantidadPersonas: any;
  numeroReserva: any;
  mesas: any;
  main: any;
  mensaje1:any;
  mensaje2:any;
  mensaje3:any;
  checkbox1:any;
  checkbox2:any;
  checkbox3:any;
  checkbox4:any;
  checkbox5:any;
  checkbox6:any;
  checkbox7:any;
  checkbox8:any;
  checkbox9:any;
  checkbox10:any;
  checkbox11:any;
  checkbox12:any;
  Mensaje:any;

  constructor() { }

  ngOnInit(): void {
    this.iniciar();
    this.validar();
  }
  iniciar(){
    this.nombreCliente="Nombre";
    let nombreCliente=document.getElementById("Nombre");
    this.cantidadPersonas="Cantidad";
    let cantidadPersonas=document.getElementById("Cantidad");
    this.numeroReserva="Numero";
    let numeroReserva=document.getElementById("Numero");
    this.mesas="none";
    let mesas=document.getElementById("none");
    this.main="none";
    let main=document.getElementById("main");
    this.mensaje1="mensaje1";
    let mensaje1=document.getElementById("mensaje1");
    this.mensaje2="mensaje2";
    let mensaje2=document.getElementById("mensaje2");
    this.mensaje3="mensaje3";
    let mensaje3=document.getElementById("mensaje3");
    if(this.nombreCliente!=="" && this.cantidadPersonas!="" && this.numeroReserva!=""){
        this.mensaje1.innerHTML="Bienvenido "+nombreCliente;
        if(this.cantidadPersonas<4){
            this.mensaje2.innerHTML="Buscando mesas disponibles para: " + cantidadPersonas
        }else{
            this.mensaje2.innerHTML="No hay mesas para de esa capacidad";
        };
        if(this.numeroReserva<12){
            this.mensaje3.innerHTML="Su mesa esta lista, oprima validar para saber la cantidad de mesas disponibles";
        }else{
            this.mensaje3.innerHTML="Reserva no existente";
        };
        this.mesas.style.display="block";
        this.main.style.display="none";
    }
};
validar() {
  this.checkbox1.checked="1"
  let checkbox1=document.getElementById ("1");
  console.log(checkbox1);
  this.checkbox2.checked="2"
  let checkbox2=document.getElementById ("2");
  console.log(checkbox2);
  this.checkbox3.checked="3"
  let checkbox3=document.getElementById ("3");
  console.log(checkbox3);
  this.checkbox4.checked="4"
  let checkbox4=document.getElementById ("4");
  console.log(checkbox4);
  this.checkbox5.checked="5"
  let checkbox5=document.getElementById ("5");
  console.log(checkbox5);
  this.checkbox6.checked="6"
  let checkbox6=document.getElementById ("6");
  console.log(checkbox6);
  this.checkbox7.checked="7"
  let checkbox7=document.getElementById ("7");
  console.log(checkbox7);
  this.checkbox8.checked="8"
  let checkbox8=document.getElementById ("8");
  console.log(checkbox8);
  this.checkbox9.checked="9"
  let checkbox9=document.getElementById ("9");
  console.log(checkbox9);
  this.checkbox10.checked="10"
  let checkbox10=document.getElementById ("10");
  console.log(checkbox10);
  this.checkbox11.checked="11"
  let checkbox11=document.getElementById ("11");
  console.log(checkbox11);
  this.checkbox12.checked="12"
  let checkbox12=document.getElementById ("12");
  console.log(checkbox12);

      let resultado=" Mesa 1 disponible " + (!checkbox1) +"<br>";
      resultado=resultado+" Mesa 2 disponible " + (!checkbox2) + "<br>";
      resultado=resultado+" Mesa 3 disponible " + (!checkbox3) +"<br>";
      resultado=resultado+" Mesa 4 disponible " + (!checkbox4) + "<br>";
      resultado=resultado+" Mesa 5 disponible " + (!checkbox5) + "<br>"; 
      resultado=resultado+" Mesa 6 disponible " + (!checkbox6) + "<br>";
      resultado=resultado+" Mesa 7 disponible " + (!checkbox7) +"<br>";
      resultado=resultado+" Mesa 8 disponible " + (!checkbox8) + "<br>";
      resultado=resultado+" Mesa 9 disponible " + (!checkbox9) + "<br>";
      resultado=resultado+" Mesa 10 disponible " + (!checkbox10) + "<br>";
      resultado=resultado+" Mesa 11 disponible " + (!checkbox11) + "<br>";
      resultado=resultado+" Mesa 12 disponible " + (!checkbox12) +"<br>";
      this.Mensaje="mensaje";
      this.Mensaje.document.getElementById("mensaje").innerHTML=resultado;
};

}
