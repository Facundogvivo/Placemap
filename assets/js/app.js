function cargarDesde() {
    var array = ["Baño principal", "Baño 1", "Baño de visitas", "Cocina", "Comedor","Dormitorio principal", "Dormitorio 1", "Dormitorio 2", "Dormitorio 3", "Exterior", "Living"];
    addOptions("desde", array);
}
function addOptions(domElement, array) {
    var selector = document.getElementsByName(domElement)[0];
    for (desdeLugar in array) {
        var opcion = document.createElement("option");
        opcion.text = array[desdeLugar];
        opcion.value = array[desdeLugar].toLowerCase()
        selector.add(opcion);
    }
}
function cargarHacia() {
    var listaHacia= {
        "baño principal": [ "Baño 1", "Baño de visitas", "Cocina", "Comedor","Dormitorio principal", "Dormitorio 1", "Dormitorio 2", "Dormitorio 3", "Exterior", "Living"],
        "baño 1": ["Baño principal", "Baño de visitas", "Cocina", "Comedor","Dormitorio principal", "Dormitorio 1", "Dormitorio 2", "Dormitorio 3", "Exterior", "Living"],
        "baño de visitas": ["Baño principal", "Baño 1", "Cocina", "Comedor","Dormitorio principal", "Dormitorio 1", "Dormitorio 2", "Dormitorio 3", "Exterior", "Living"],
        "cocina": ["Baño principal", "Baño 1", "Baño de visitas", "Comedor","Dormitorio principal", "Dormitorio 1", "Dormitorio 2", "Dormitorio 3", "Exterior", "Living"],
        "comedor": ["Baño principal", "Baño 1", "Baño de visitas", "Cocina","Dormitorio principal", "Dormitorio 1", "Dormitorio 2", "Dormitorio 3", "Exterior", "Living"],
        "dormitorio principal": ["Baño principal", "Baño 1", "Baño de visitas", "Cocina", "Comedor", "Dormitorio 1", "Dormitorio 2", "Dormitorio 3", "Exterior", "Living"],
        "dormitorio 1": ["Baño principal", "Baño 1", "Baño de visitas", "Cocina", "Comedor","Dormitorio principal", "Dormitorio 2", "Dormitorio 3", "Exterior", "Living"],
        "dormitorio 2": ["Baño principal", "Baño 1", "Baño de visitas", "Cocina", "Comedor","Dormitorio principal", "Dormitorio 1", "Dormitorio 3", "Exterior", "Living"],
        "dormitorio 3": ["Baño principal", "Baño 1", "Baño de visitas", "Cocina", "Comedor","Dormitorio principal", "Dormitorio 1", "Dormitorio 2", "Exterior", "Living"],
        "exterior": ["Baño principal", "Baño 1", "Baño de visitas", "Cocina", "Comedor","Dormitorio principal", "Dormitorio 1", "Dormitorio 2", "Dormitorio 3", "Living"],
        "living": ["Baño principal", "Baño 1", "Baño de visitas", "Cocina", "Comedor","Dormitorio principal", "Dormitorio 1", "Dormitorio 2", "Dormitorio 3", "Exterior"]
    }
    
    var desde1 = document.getElementById('desde')
    var hacia1 = document.getElementById('hacia')
    var desdeSeleccionada = desde1.value
    hacia1.innerHTML = '<option value="">Seleccione Hacia...</option>'
    
    if(desdeSeleccionada !== ''){
      desdeSeleccionada = listaHacia[desdeSeleccionada]
    
      desdeSeleccionada.forEach(function(hacia2){
        let opcion = document.createElement('option')
        opcion.value = hacia2
        opcion.text = hacia2
        hacia1.add(opcion)
      });
    }
   
  }
  
cargarDesde();

    let text1, text2

// Muestra mensaje, pisos y caminos

function mensaje() { 
 
    
    let sel1 = document.getElementById("desde");
    let sel2 = document.getElementById("hacia");
    text1= sel1.options[sel1.selectedIndex].text;
    text2= sel2.options[sel2.selectedIndex].text;
 
    document.getElementById('titulo').innerHTML = "<font size='1'>Recuerde que el punto <font color='red'><em><b>ROJO</b></em></font> es el origen y el punto <font color='blue'><em><b>AZUL</b></em></font> es el destino.</font> <br> A continuación se muestra el camino desde <font color='red'><em><b>" + text1 + "</b></em></font> hacia <font color='blue'><em><b>" + text2 + "</b></em></font>:"

}
function pisos(){

    switch (text1) {
        case "Baño principal":
            switch (text2) {
                case "Baño 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Baño de visitas":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Cocina":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Comedor":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Dormitorio principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Dormitorio 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Dormitorio 2":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Dormitorio 3":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Exterior":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Living":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
            
        break;
        case "Baño 1":
            switch (text2) {
                case "Baño principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Baño de visitas":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Cocina":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Comedor":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Dormitorio principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Dormitorio 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Dormitorio 2":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Dormitorio 3":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Exterior":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Living":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
            
        break;
        case "Baño de visitas":
            switch (text2) {
                case "Baño principal":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Baño 1":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Cocina":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Comedor":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Dormitorio principal":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Dormitorio 1":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Dormitorio 2":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Dormitorio 3":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Exterior":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Living":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
              
        break;
        case "Cocina":
            switch (text2) {
                case "Baño principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Baño 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Baño de visitas":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Comedor":
                    pisoN1.style.display="none";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso3();
                break;
                case "Dormitorio principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Dormitorio 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Dormitorio 2":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Dormitorio 3":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Exterior":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Living":
                    pisoN1.style.display="none";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso3();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                
        break;
        case "Comedor":
            switch (text2) {
                case "Baño principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Baño 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Baño de visitas":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Cocina":
                    pisoN1.style.display="none";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso3();
                break;
                case "Dormitorio principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Dormitorio 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Dormitorio 2":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Dormitorio 3":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Exterior":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Living":
                    pisoN1.style.display="none";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso3();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                  
        break;
        case "Dormitorio principal":
            switch (text2) {
                case "Baño principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Baño 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Baño de visitas":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Cocina":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Comedor":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Dormitorio 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Dormitorio 2":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Dormitorio 3":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Exterior":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Living":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                    
        break;
        case "Dormitorio 1":
            switch (text2) {
                case "Baño principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Baño 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Baño de visitas":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Cocina":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Comedor":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Dormitorio principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso2();
                break;
                case "Dormitorio 2":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();  
                break;
                case "Dormitorio 3":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();       
                break;
                case "Exterior":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();          
                break;
                case "Living":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                      
        break;
        case "Dormitorio 2":
            switch (text2) {
                case "Baño principal":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Baño 1":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Baño de visitas":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Cocina":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Comedor":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Dormitorio principal":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Dormitorio 1":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Dormitorio 3":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Exterior":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Living":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                      
        break;
        case "Dormitorio 3":
            switch (text2) {
                case "Baño principal":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Baño 1":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Baño de visitas":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Cocina":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Comedor":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Dormitorio principal":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Dormitorio 1":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Dormitorio 2":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Exterior":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Living":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                      
        break;
        case "Exterior":
            switch (text2) {
                case "Baño principal":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Baño 1":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Baño de visitas":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Cocina":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Comedor":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Dormitorio principal":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Dormitorio 1":
                    pisoN1.style.display="block";
                    pisoN2.style.display="block";
                    pisoN3.style.display="none";
                    piso1();
                    piso2();
                break;
                case "Dormitorio 2":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Dormitorio 3":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="none";
                    piso1();
                break;
                case "Living":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                      
        break;
        case "Living":
            switch (text2) {
                case "Baño principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Baño 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Baño de visitas":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Cocina":
                    pisoN1.style.display="none";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso3();
                break;
                case "Comedor":
                    pisoN1.style.display="none";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso3();
                break;
                case "Dormitorio principal":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Dormitorio 1":
                    pisoN1.style.display="none";
                    pisoN2.style.display="block";
                    pisoN3.style.display="block";
                    piso2();
                    piso3();
                break;
                case "Dormitorio 2":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Dormitorio 3":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                case "Exterior":
                    pisoN1.style.display="block";
                    pisoN2.style.display="none";
                    pisoN3.style.display="block";
                    piso1();
                    piso3();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
        break;
        default:
            alert("No has seleccionado desde")
            document.getElementById('titulo').innerHTML = ""     
        break;
      }

}
function caminos(){
    switch (text1) {
        case "Baño principal":
            switch (text2) {
                case "Baño 1":
                    desdeBP();
                    haciaB1();
                    BP_B1();
                break;
                case "Baño de visitas":
                    desdeBP();
                    haciaBV();
                    BP_BV();
                break;
                case "Cocina":
                    desdeBP();
                    haciaCC();
                    BP_CC();
                break;
                case "Comedor":
                    desdeBP();
                    haciaCM();
                    BP_CM();
                break;
                case "Dormitorio principal":
                    desdeBP();
                    haciaDP();
                    BP_DP();
                break;
                case "Dormitorio 1":
                    desdeBP();
                    haciaD1();
                    BP_D1();
                break;
                case "Dormitorio 2":
                    desdeBP();
                    haciaD2();
                    BP_D2();
                break;
                case "Dormitorio 3":
                    desdeBP();
                    haciaD3();
                    BP_D3();
                break;
                case "Exterior":
                    desdeBP();
                    haciaEX();
                    BP_EX();
                break;
                case "Living":
                    desdeBP();
                    haciaLV();
                    BP_LV();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
            
        break;
        case "Baño 1":
            switch (text2) {
                case "Baño principal":
                    desdeB1();
                    haciaBP();
                    BP_B1();
                break;
                case "Baño de visitas":
                    desdeB1();
                    haciaBV();
                    B1_BV();
                break;
                case "Cocina":
                    desdeB1();
                    haciaCC();
                    B1_CC();
                break;
                case "Comedor":
                    desdeB1();
                    haciaCM();
                    B1_CM();
                break;
                case "Dormitorio principal":
                    desdeB1();
                    haciaDP();
                    B1_DP();
                break;
                case "Dormitorio 1":
                    desdeB1();
                    haciaD1();
                    B1_D1();
                break;
                case "Dormitorio 2":
                    desdeB1();
                    haciaD2();
                    B1_D2();
                break;
                case "Dormitorio 3":
                    desdeB1();
                    haciaD3();
                    B1_D3();
                break;
                case "Exterior":
                    desdeB1();
                    haciaEX();
                    B1_EX();
                break;
                case "Living":
                    desdeB1();
                    haciaLV();
                    B1_LV();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
            
        break;
        case "Baño de visitas":
            switch (text2) {
                case "Baño principal":
                    desdeBV();
                    haciaBP();
                    BV_BP();
                break;
                case "Baño 1":
                    desdeBV();
                    haciaB1();
                    BV_B1();
                break;
                case "Cocina":
                    desdeBV();
                    haciaCC();
                    BV_CC();
                break;
                case "Comedor":
                    desdeBV();
                    haciaCM();
                    BV_CM();
                break;
                case "Dormitorio principal":
                    desdeBV();
                    haciaDP();
                    BV_DP();
                break;
                case "Dormitorio 1":
                    desdeBV();
                    haciaD1();
                    BV_D1();
                break;
                case "Dormitorio 2":
                    desdeBV();
                    haciaD2();
                    BV_D2();
                break;
                case "Dormitorio 3":
                    desdeBV();
                    haciaD3();
                    BV_D3();
                break;
                case "Exterior":
                    desdeBV();
                    haciaEX();
                    BV_EX();
                break;
                case "Living":
                    desdeBV();
                    haciaLV();
                    BV_LV();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
              
        break;
        case "Cocina":
            switch (text2) {
                case "Baño principal":
                    desdeCC();
                    haciaBP();
                    CC_BP();
                break;
                case "Baño 1":
                    desdeCC();
                    haciaB1();
                    CC_B1();
                break;
                case "Baño de visitas":
                    desdeCC();
                    haciaBV();
                    CC_BV();
                break;
                case "Comedor":
                    desdeCC();
                    haciaCM();
                    CC_CM();
                break;
                case "Dormitorio principal":
                    desdeCC();
                    haciaDP();
                    CC_DP();
                break;
                case "Dormitorio 1":
                    desdeCC();
                    haciaD1();
                    CC_D1();
                break;
                case "Dormitorio 2":
                    desdeCC();
                    haciaD2();
                    CC_D2();
                break;
                case "Dormitorio 3":
                    desdeCC();
                    haciaD3();
                    CC_D3();
                break;
                case "Exterior":
                    desdeCC();
                    haciaEX();
                    CC_EX();
                break;
                case "Living":
                    desdeCC();
                    haciaLV();
                    CC_LV();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                
        break;
        case "Comedor":
            switch (text2) {
                case "Baño principal":
                    desdeCM();
                    haciaBP();
                    CM_BP();
                break;
                case "Baño 1":
                    desdeCM();
                    haciaB1();
                    CM_B1();
                break;
                case "Baño de visitas":
                    desdeCM();
                    haciaBV();
                    CM_BV();
                break;
                case "Cocina":
                    desdeCM();
                    haciaCC();
                    CM_CC();
                break;
                case "Dormitorio principal":
                    desdeCM();
                    haciaDP();
                    CM_DP();
                break;
                case "Dormitorio 1":
                    desdeCM();
                    haciaD1();
                    CM_D1();
                break;
                case "Dormitorio 2":
                    desdeCM();
                    haciaD2();
                    CM_D2();
                break;
                case "Dormitorio 3":
                    desdeCM();
                    haciaD3();
                    CM_D3();
                break;
                case "Exterior":
                    desdeCM();
                    haciaEX();
                    CM_EX();
                break;
                case "Living":
                    desdeCM();
                    haciaLV();
                    CM_LV();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                  
        break;
        case "Dormitorio principal":
            switch (text2) {
                case "Baño principal":
                    desdeDP();
                    haciaBP();
                    DP_BP();
                break;
                case "Baño 1":
                    desdeDP();
                    haciaB1();
                    DP_B1();
                break;
                case "Baño de visitas":
                    desdeDP();
                    haciaBV();
                    DP_BV();
                break;
                case "Cocina":
                    desdeDP();
                    haciaCC();
                    DP_CC();
                break;
                case "Comedor":
                    desdeDP();
                    haciaCM();
                    DP_CM();
                break;
                case "Dormitorio 1":
                    desdeDP();
                    haciaD1();
                    DP_D1();
                break;
                case "Dormitorio 2":
                    desdeDP();
                    haciaD2();
                    DP_D2();
                break;
                case "Dormitorio 3":
                    desdeDP();
                    haciaD3();
                    DP_D3();
                break;
                case "Exterior":
                    desdeDP();
                    haciaEX();
                    DP_EX();
                break;
                case "Living":
                    desdeDP();
                    haciaLV();
                    DP_LV();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                    
        break;
        case "Dormitorio 1":
            switch (text2) {
                case "Baño principal":
                    desdeD1();
                    haciaBP();
                    D1_BP();
                break;
                case "Baño 1":
                    desdeD1();
                    haciaB1();
                    D1_B1();
                break;
                case "Baño de visitas":
                    desdeD1();
                    haciaBV();
                    D1_BV();
                break;
                case "Cocina":
                    desdeD1();
                    haciaCC();
                    D1_CC();
                break;
                case "Comedor":
                    desdeD1();
                    haciaCM();
                    D1_CM();
                break;
                case "Dormitorio principal":
                    desdeD1();
                    haciaDP();
                    D1_DP();
                break;
                case "Dormitorio 2":
                    desdeD1();
                    haciaD2();
                    D1_D2();     
                break;
                case "Dormitorio 3":
                    desdeD1();
                    haciaD3();
                    D1_D3();         
                break;
                case "Exterior":
                    desdeD1();
                    haciaEX();
                    D1_EX();           
                break;
                case "Living":
                    desdeD1();
                    haciaLV();
                    D1_LV();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                      
        break;
        case "Dormitorio 2":
            switch (text2) {
                case "Baño principal":
                    desdeD2();
                    haciaBP();
                    D2_BP();
                break;
                case "Baño 1":
                    desdeD2();
                    haciaB1();
                    D2_B1();
                break;
                case "Baño de visitas":
                    desdeD2();
                    haciaBV();
                    D2_BV();
                break;
                case "Cocina":
                    desdeD2();
                    haciaCC();
                    D2_CC();
                break;
                case "Comedor":
                    desdeD2();
                    haciaCM();
                    D2_CM();
                break;
                case "Dormitorio principal":
                    desdeD2();
                    haciaDP();
                    D2_DP();
                break;
                case "Dormitorio 1":
                    desdeD2();
                    haciaD1();
                    D2_D1();
                break;
                case "Dormitorio 3":
                    desdeD2();
                    haciaD3();
                    D2_D3();
                break;
                case "Exterior":
                    desdeD2();
                    haciaEX();
                    D2_EX();
                break;
                case "Living":
                    desdeD2();
                    haciaLV();
                    D2_LV();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                      
        break;
        case "Dormitorio 3":
            switch (text2) {
                case "Baño principal":
                    desdeD3();
                    haciaBP();
                    D3_BP();
                break;
                case "Baño 1":
                    desdeD3();
                    haciaB1();
                    D3_B1();
                break;
                case "Baño de visitas":
                    desdeD3();
                    haciaBV();
                    D3_BV();
                break;
                case "Cocina":
                    desdeD3();
                    haciaCC();
                    D3_CC();
                break;
                case "Comedor":
                    desdeD3();
                    haciaCM();
                    D3_CM();
                break;
                case "Dormitorio principal":
                    desdeD3();
                    haciaDP();
                    D3_DP();
                break;
                case "Dormitorio 1":
                    desdeD3();
                    haciaD1();
                    D3_D1();
                break;
                case "Dormitorio 2":
                    desdeD3();
                    haciaD2();
                    D3_D2();
                break;
                case "Exterior":
                    desdeD3();
                    haciaEX();
                    D3_EX();
                break;
                case "Living":
                    desdeD3();
                    haciaLV();
                    D3_LV();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                      
        break;
        case "Exterior":
            switch (text2) {
                case "Baño principal":
                    desdeEX();
                    haciaBP();
                    EX_BP();
                break;
                case "Baño 1":
                    desdeEX();
                    haciaB1();
                    EX_B1();
                break;
                case "Baño de visitas":
                    desdeEX();
                    haciaBV();
                    EX_BV();
                break;
                case "Cocina":
                    desdeEX();
                    haciaCC();
                    EX_CC();
                break;
                case "Comedor":
                    desdeEX();
                    haciaCM();
                    EX_CM();
                break;
                case "Dormitorio principal":
                    desdeEX();
                    haciaDP();
                    EX_DP();
                break;
                case "Dormitorio 1":
                    desdeEX();
                    haciaD1();
                    EX_D1();
                break;
                case "Dormitorio 2":
                    desdeEX();
                    haciaD2();
                    EX_D2();
                break;
                case "Dormitorio 3":
                    desdeEX();
                    haciaD3();
                    EX_D3();
                break;
                case "Living":
                    desdeEX();
                    haciaLV();
                    EX_LV();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
                      
        break;
        case "Living":
            switch (text2) {
                case "Baño principal":
                    desdeLV();
                    haciaBP();
                    LV_BP();
                break;
                case "Baño 1":
                    desdeLV();
                    haciaB1();
                    LV_B1();
                break;
                case "Baño de visitas":
                    desdeLV();
                    haciaBV();
                    LV_BV();
                break;
                case "Cocina":
                    desdeLV();
                    haciaCC();
                    LV_CC();
                break;
                case "Comedor":
                    desdeLV();
                    haciaCM();
                    LV_CM();
                break;
                case "Dormitorio principal":
                    desdeLV();
                    haciaDP();
                    LV_DP();
                break;
                case "Dormitorio 1":
                    desdeLV();
                    haciaD1();
                    LV_D1();
                break;
                case "Dormitorio 2":
                    desdeLV();
                    haciaD2();
                    LV_D2();
                break;
                case "Dormitorio 3":
                    desdeLV();
                    haciaD3();
                    LV_D3();
                break;
                case "Exterior":
                    desdeLV();
                    haciaEX();
                    LV_EX();
                break;
                default:
                    alert("No has seleccionado hacia")
                    document.getElementById('titulo').innerHTML = ""
                break;
              }       
        break;
        default:
            alert("No has seleccionado desde")
            document.getElementById('titulo').innerHTML = ""     
        break;
      }

}

// Pisos

function piso1(){
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");

    let clinica = new Image();
    clinica.src ="assets/img/Casas/piso1.jpg";
    clinica.addEventListener('load', mostrar_imagen, false);
    
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;

    function mostrar_imagen() {
        contexto.drawImage(clinica, 0, 0, ancho, alto);	
    }
}
function piso2(){
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    
    let clinica = new Image();
    clinica.src ="assets/img/Casas/piso2.jpg";
    clinica.addEventListener('load', mostrar_imagen, false);
    
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;

    function mostrar_imagen() {
        contexto.drawImage(clinica, 0, 0, ancho, alto);	
    }
}
function piso3(){
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    
    let clinica = new Image();
    clinica.src ="assets/img/Casas/piso3.jpg";
    clinica.addEventListener('load', mostrar_imagen, false);
    
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    
    function mostrar_imagen() {
        contexto.drawImage(clinica, 0, 0, ancho, alto);	
    }
}

// Puntos desde y hacia

// BP: BAÑO PRINCIPAL
// DP: DORMITORIO PRINCIPAL
// B1: BAÑO 1
// D1: DORMITORIO 1
// D2: DORMITORIO 2
// D3: DORMITORIO 3
// BV: BAÑO DE VISITAS
// EX: EXTERIOR
// CC: COCINA
// CM: COMEDOR
// LV: LIVING

function desdeBP() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 120, y = 255;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function haciaBP() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 120, y = 255;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function desdeB1() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 225, y = 300;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function haciaB1() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 225, y = 300;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function desdeBV() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 130, y = 210;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function haciaBV() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 130, y = 210;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function desdeCC() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 80, y = 285;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function haciaCC() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 80, y = 285;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function desdeCM() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 105, y = 85;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function haciaCM() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 105, y = 85;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function desdeDP() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 180, y = 220;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function haciaDP() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 180, y = 220;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function desdeD1() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 225, y = 180;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function haciaD1() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 225, y = 180;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function desdeD2() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 175, y = 175;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function haciaD2() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 175, y = 175;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function desdeD3() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 220, y = 175;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function haciaD3() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 220, y = 175;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function desdeEX() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 200, y = 340;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function haciaEX() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 200, y = 340;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function desdeLV() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 260, y = 85;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function haciaLV() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 260, y = 85;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 10;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 10);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}

//Caminos

// DESDE Y HACIA BP

function BP_B1() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(120,255);
        contexto.lineTo(120,220);
        contexto.lineTo(225,220);
        contexto.lineTo(225,300);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B1_BP() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(120,255);
        contexto.lineTo(120,220);
        contexto.lineTo(225,220);
        contexto.lineTo(225,300);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function BP_BV() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,215);
        contexto1.lineTo(135,215);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BV_BP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(295,220);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(135,215);
        contexto1.lineTo(175,215);
        contexto1.lineTo(175,265);
        contexto1.lineTo(315,265);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BP_CC() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CC_BP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BP_CM() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CM_BP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BP_DP() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(120,255);
        contexto.lineTo(120,225);
        contexto.lineTo(175,225);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function DP_BP() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(175,225);
        contexto.lineTo(120,225);
        contexto.lineTo(120,255);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function BP_D1() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(120,255);
        contexto.lineTo(120,220);
        contexto.lineTo(225,220);
        contexto.lineTo(225,190);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function D1_BP() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(225,190);
        contexto.lineTo(225,220);
        contexto.lineTo(120,220);
        contexto.lineTo(120,255);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function BP_D2() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,185);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D2_BP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,185);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BP_D3() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(220,265);
        contexto1.lineTo(220,185);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D3_BP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(220,265);
        contexto1.lineTo(220,185);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BP_EX() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(200,265);
        contexto1.lineTo(200,340);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function EX_BP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(200,265);
        contexto1.lineTo(200,340);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BP_LV() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function LV_BP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(120,255);
        contexto2.lineTo(120,220);
        contexto2.lineTo(225,220);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// DESDE Y HACIA B1

function B1_BV() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,215);
        contexto1.lineTo(135,215);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BV_B1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,215);
        contexto1.lineTo(135,215);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_CC() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CC_B1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_CM() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CM_B1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_DP() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(225,300);
        contexto.lineTo(225,225);
        contexto.lineTo(185,225);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function DP_B1() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(225,300);
        contexto.lineTo(225,225);
        contexto.lineTo(185,225);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B1_D1() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(225,300);
        contexto.lineTo(225,190);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function D1_B1() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(225,300);
        contexto.lineTo(225,190);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B1_D2() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,185);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D2_B1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,185);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_D3() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(220,265);
        contexto1.lineTo(220,185);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D3_B1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(220,265);
        contexto1.lineTo(220,185);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_EX() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(200,265);
        contexto1.lineTo(200,340);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function EX_B1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,220);
        contexto2.lineTo(315,220);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(200,265);
        contexto1.lineTo(200,340);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_LV() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function LV_B1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,300);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// DESDE Y HACIA BV


function BV_CC() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,215);
        contexto2.lineTo(135,215);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CC_BV() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,215);
        contexto2.lineTo(135,215);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BV_CM() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,215);
        contexto2.lineTo(135,215);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CM_BV() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,215);
        contexto2.lineTo(135,215);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BV_DP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,215);
        contexto1.lineTo(135,215);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function DP_BV() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,215);
        contexto1.lineTo(135,215);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BV_D1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,215);
        contexto1.lineTo(135,215);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D1_BV() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,215);
        contexto1.lineTo(135,215);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function BV_D2() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(175,185);
        contexto.lineTo(175,215);
        contexto.lineTo(135,215);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function D2_BV() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(175,185);
        contexto.lineTo(175,215);
        contexto.lineTo(135,215);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function BV_D3() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(220,185);
        contexto.lineTo(220,215);
        contexto.lineTo(135,215);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function D3_BV() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(220,185);
        contexto.lineTo(220,215);
        contexto.lineTo(135,215);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function BV_EX() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(135,215);
        contexto.lineTo(200,215);
        contexto.lineTo(200,340);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function EX_BV() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(135,215);
        contexto.lineTo(200,215);
        contexto.lineTo(200,340);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function BV_LV() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,215);
        contexto2.lineTo(135,215);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function LV_BV() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,215);
        contexto2.lineTo(135,215);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// DESDE Y HACIA CC

function CC_CM() {
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(80,285);
        contexto1.lineTo(80,180);
        contexto1.lineTo(105,180);
        contexto1.lineTo(105,95);
        contexto1.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CM_CC() {
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(80,285);
        contexto1.lineTo(80,180);
        contexto1.lineTo(105,180);
        contexto1.lineTo(105,95);
        contexto1.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CC_DP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(225,225);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function DP_CC() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(225,225);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CC_D1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D1_CC() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CC_D2() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,185);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D2_CC() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,185);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D3_CC() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(220,265);
        contexto2.lineTo(220,185);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CC_D3() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(220,265);
        contexto2.lineTo(220,185);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CC_EX() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(200,265);
        contexto2.lineTo(200,340);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function EX_CC() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(200,265);
        contexto2.lineTo(200,340);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,355);
        contexto1.lineTo(80,355);
        contexto1.lineTo(80,295);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CC_LV() {
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(80,285);
        contexto1.lineTo(80,180);
        contexto1.lineTo(205,180);
        contexto1.lineTo(205,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function LV_CC() {
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(80,285);
        contexto1.lineTo(80,180);
        contexto1.lineTo(205,180);
        contexto1.lineTo(205,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// DESDE Y HACIA CM

function CM_DP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(225,225);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function DP_CM() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(225,225);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CM_D1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D1_CM() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CM_D2() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,185);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D2_CM() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,185);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CM_D3() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(220,265);
        contexto2.lineTo(220,185);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D3_CM() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(220,265);
        contexto2.lineTo(220,185);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CM_EX() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(200,265);
        contexto2.lineTo(200,340);;
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function EX_CM() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(200,265);
        contexto2.lineTo(200,340);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,150);
        contexto1.lineTo(105,150);
        contexto1.lineTo(105,95);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function CM_LV() {
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(105,95);
        contexto1.lineTo(105,180);
        contexto1.lineTo(205,180);
        contexto1.lineTo(205,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function LV_CM() {
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(105,95);
        contexto1.lineTo(105,180);
        contexto1.lineTo(205,180);
        contexto1.lineTo(205,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// DESDE Y HACIA DP

function DP_D1() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.lineTo(225,190);
        contexto.lineTo(225,225);
        contexto.lineTo(185,225);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function D1_DP() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.lineTo(225,190);
        contexto.lineTo(225,225);
        contexto.lineTo(185,225);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function DP_D2() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,185);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D2_DP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,185);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function DP_D3() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(220,265);
        contexto1.lineTo(220,185);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D3_DP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(220,265);
        contexto1.lineTo(220,185);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function DP_EX() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(200,265);
        contexto1.lineTo(200,340);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function EX_DP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(200,265);
        contexto1.lineTo(200,340);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function DP_LV() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(225,225);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function LV_DP() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(185,225);
        contexto2.lineTo(225,225);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// DESDE Y HACIA D1

function D1_D2() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,185);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D2_D1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(175,265);
        contexto1.lineTo(175,185);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D1_D3() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(220,265);
        contexto1.lineTo(220,185);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D3_D1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(220,265);
        contexto1.lineTo(220,185);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D1_EX() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,195,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Bajar",280,210);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(200,265);
        contexto1.lineTo(200,340);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function EX_D1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,225);
        contexto2.lineTo(315,225);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,265);
        contexto1.lineTo(200,265);
        contexto1.lineTo(200,340);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,240,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Subir",280,255);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function D1_LV() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function LV_D1() {
    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(225,190);
        contexto2.lineTo(225,265);
        contexto2.lineTo(315,265);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// DESDE Y HACIA D2

function D2_D3() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(175,185);
        contexto.lineTo(175,220);
        contexto.lineTo(220,220);
        contexto.lineTo(220,185);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function D3_D2() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(175,185);
        contexto.lineTo(175,220);
        contexto.lineTo(220,220);
        contexto.lineTo(220,185);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function D2_EX() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(175,185);
        contexto.lineTo(175,250);
        contexto.lineTo(200,250);
        contexto.lineTo(200,340);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function EX_D2() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(175,185);
        contexto.lineTo(175,250);
        contexto.lineTo(200,250);
        contexto.lineTo(200,340);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function D2_LV() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,185);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function LV_D2() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(175,265);
        contexto2.lineTo(175,185);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// DESDE Y HACIA D3

function D3_EX() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(220,185);
        contexto.lineTo(220,250);
        contexto.lineTo(200,250);
        contexto.lineTo(200,340);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function EX_D3() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(220,185);
        contexto.lineTo(220,250);
        contexto.lineTo(200,250);
        contexto.lineTo(200,340);
        contexto.stroke();
        contexto.closePath();
    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function D3_LV() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(220,265);
        contexto2.lineTo(220,185);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function LV_D3() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(220,265);
        contexto2.lineTo(220,185);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// DESDE Y HACIA EX

function EX_LV() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(200,265);
        contexto2.lineTo(200,340);
        contexto2.stroke();
        contexto2.fillStyle = "white";
        contexto2.fillRect(275,240,45,20);
        contexto2.font="10pt Verdana";
        contexto2.fillStyle = "blue";
        contexto2.fillText("Subir",280,255);
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    
    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.closePath();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function LV_EX() {
    const mi_canvas2 = document.getElementById("canvas1");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(295,265);
        contexto2.lineTo(200,265);
        contexto2.lineTo(200,340);
        contexto2.stroke();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas1 = document.getElementById("canvas3");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(295,220);
        contexto1.lineTo(200,220);
        contexto1.lineTo(200,90);
        contexto1.lineTo(255,90);
        contexto1.stroke();
        contexto1.fillStyle = "white";
        contexto1.fillRect(275,195,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "blue";
        contexto1.fillText("Bajar",280,210);
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
