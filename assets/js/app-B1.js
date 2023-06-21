// Pisos

function piso1(){
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");

    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/piso1.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;

    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);	
    }
}
function piso2(){
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    
    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/piso2.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;

    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);	
    }
}
function piso3(){
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    
    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/piso3.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    
    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);	
    }
}
function piso4(){
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    
    let pisoEstablecimiento = new Image();
    pisoEstablecimiento.src ="assets/img/img/piso4.png";
    pisoEstablecimiento.addEventListener('load', mostrar_imagen, false);
    
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    
    function mostrar_imagen() {
        contexto.drawImage(pisoEstablecimiento, 0, 0, ancho, alto);	
    }
}

// Limpiar canvas

function limpiar1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    contexto.clearRect(0, 0, mi_canvas.width, mi_canvas.height);
}
function limpiar2() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    contexto.clearRect(0, 0, mi_canvas.width, mi_canvas.height);
}
function limpiar3() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    contexto.clearRect(0, 0, mi_canvas.width, mi_canvas.height);
}
function limpiar4() {
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    var ancho = mi_canvas.width;
    var alto = mi_canvas.height;
    contexto.clearRect(0, 0, mi_canvas.width, mi_canvas.height);
}
function limpiarTodo() {
    limpiar1();
    limpiar2();
    limpiar3();
    limpiar4();
}
    
/* Puntos 

PRIMER PISO:
    1. INGRESO PRINCIPAL                                            :IP
    2. ADMINISTRACION                                               :AYC
    3. SALA DE OPERACIONES MENORES                                  :SOM
    4. SALA DE RECUPERACIONES                                       :SR
    5. HABITACIÓN 1                                                 :B1
    6. HABITACIÓN 2                                                 :B1
    7. ESTAR ESPERA                                                 :B1
    8. BAÑOS                                                        :B1
SEGUNDO PISO:
    1. DESINTROMETRÍA OSEA                                          :DO
    2. SALA DE RAYOS X                                              :RX
    3. ELECTROTERAPIA                                               :ET
    4. RESONANCIA MAGNETÍCA                                         :RM
    5. MECANOTERAPIA                                                :MT
    6. HIDROTERAPIA                                                 :HT
    7. ESTAR ESPERA                                                 :EE2
TERCER PISO:
    1. REABILITACIÓN TECNOLÓGICA                                    :RT
    2. EVALUACIÓN FISIOLÓGICA Y BIOQUÍMICA                          :EFB
    3. CONSULTORIO NUTRICIONISTA                                    :CN
    4. CONSULTORIO ORTOPEDISTA                                      :CO
    5. CONSULTORIO PSICOLOGÍA                                       :CP
    6. CONSULTORIO CARDIOLOGÍA                                      :CC
    7. ESTAR ESPERA                                                 :EE3
CUARTO PISO:
    1. ZONA DE MÁQUINAS PARA EJERCITAR PIERNAS                      :ZP
    2. ZONA DE MÁQUINAS PARA EJERCICIO AEROBICO Y CALENTAMIENTO     :ZAC
    3. ZONA DE MÁQUINAS PARA EJERCITAR BRAZOS                       :ZB
    4. BAÑOS                                                        :B4
*/

// Muestra mensaje, pisos y caminos

    let text2;

function mensaje() {

    let p1;
    p1 = "BAÑOS (1°P)";
    let sel2 = document.getElementById("hacia");
    text2= sel2.options[sel2.selectedIndex].text;
 
    document.getElementById('titulo').innerHTML = "<font size='1'>Recuerde que el punto <font color='red'><em><b>ROJO</b></em></font> es el origen y el punto <font color='blue'><em><b>AZUL</b></em></font> es el destino.</font> <br> A continuación se muestra el camino desde <font color='red'><em><b>" + p1 + "</b></em></font> hacia <font color='blue'><em><b>" + text2 + "</b></em></font>:"

}
function pisos(){
limpiarTodo();
    switch (text2) {
        case "INGRESO PRINCIPAL":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "ADMINISTRACION Y CONTABILIDAD":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "SALA DE OPERACIONES MENORES":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "SALA DE RECUPERACIONES":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "HABITACIÓN 1":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "HABITACIÓN 2":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "ESTAR ESPERA (1°P)":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
        break;
        case "DESINTROMETRÍA OSEA":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "SALA DE RAYOS X":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "ELECTROTERAPIA":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "RESONANCIA MAGNETÍCA":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "MECANOTERAPIA":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "HIDROTERAPIA":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "ESTAR ESPERA (2°P)":
            pisoN1.style.display="block";
            pisoN2.style.display="block";
            pisoN3.style.display="none";
            pisoN4.style.display="none";
            piso1();
            piso2();
        break;
        case "REABILITACIÓN TECNOLÓGICA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "EVALUACIÓN FISIOLÓGICA Y BIOQUÍMICA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "CONSULTORIO NUTRICIONISTA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "CONSULTORIO ORTOPEDISTA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "CONSULTORIO PSICOLOGÍA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "CONSULTORIO CARDIOLOGÍA":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "ESTAR ESPERA (3°P)":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="block";
            pisoN4.style.display="none";
            piso1();
            piso3();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCITAR PIERNAS":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="block";
            piso1();
            piso4();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCICIO AEROBICO Y CALENTAMIENTO":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="block";
            piso1();
            piso4();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCITAR BRAZOS":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="block";
            piso1();
            piso4();
        break;
        case "BAÑOS (4°P)":
            pisoN1.style.display="block";
            pisoN2.style.display="none";
            pisoN3.style.display="none";
            pisoN4.style.display="block";
            piso1();
            piso4();
        break;
    }       
}
function caminos(){
    switch (text2) {
        case "INGRESO PRINCIPAL":
            B1();
            IP();
            B1_IP();
        break;
        case "ADMINISTRACION Y CONTABILIDAD":
            B1();
            AYC();
            B1_AYC();
        break;
        case "SALA DE OPERACIONES MENORES":
            B1();
            SOM();
            B1_SOM();
        break;
        case "SALA DE RECUPERACIONES":
            B1();
            SR();
            B1_SR();
        break;
        case "HABITACIÓN 1":
            B1();
            H1();
            B1_H1();
        break;
        case "HABITACIÓN 2":
            B1();
            H2();
            B1_H2();
        break;
        case "ESTAR ESPERA (1°P)":
            B1();
            EE1();
            B1_EE1();
        break;
        case "DESINTROMETRÍA OSEA":
            B1();
            DO();
            B1_DO();
        break;
        case "SALA DE RAYOS X":
            B1();
            RX();
            B1_RX();
        break;
        case "ELECTROTERAPIA":
            B1();
            ET();
            B1_ET();
        break;
        case "RESONANCIA MAGNETÍCA":
            B1();
            RM();
            B1_RM();
        break;
        case "MECANOTERAPIA":
            B1();
            MT();
            B1_MT();
        break;
        case "HIDROTERAPIA":
            B1();
            HT();
            B1_HT();
        break;
        case "ESTAR ESPERA (2°P)":
            B1();
            EE2();
            B1_EE2();
        break;
        case "REABILITACIÓN TECNOLÓGICA":
            B1();
            RT();
            B1_RT();
        break;
        case "EVALUACIÓN FISIOLÓGICA Y BIOQUÍMICA":
            B1();
            EFB();
            B1_EFB();
        break;
        case "CONSULTORIO NUTRICIONISTA":
            B1();
            CN();
            B1_CN();
        break;
        case "CONSULTORIO ORTOPEDISTA":
            B1();
            CO();
            B1_CO();
        break;
        case "CONSULTORIO PSICOLOGÍA":
            B1();
            CP();
            B1_CP();
        break;
        case "CONSULTORIO CARDIOLOGÍA":
            B1();
            CC();
            B1_CC();
        break;
        case "ESTAR ESPERA (3°P)":
            B1();
            EE3();
            B1_EE3();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCITAR PIERNAS":
            B1();
            ZP();
            B1_ZP();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCICIO AEROBICO Y CALENTAMIENTO":
            B1();
            ZAC();
            B1_ZAC();
        break;
        case "ZONA DE MÁQUINAS PARA EJERCITAR BRAZOS":
            B1();
            ZB();
            B1_ZB();
        break;
        case "BAÑOS (4°P)":
            B1();
            B4();
            B1_B4();
        break;
    }       
}

// Destino primer piso

function B1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 152, y = 280;
        contexto.beginPath();
        contexto.strokeStyle="red"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function IP() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 38, y = 195;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function AYC() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 116, y = 118;
        contexto.beginPath();
        contexto.strokeStyle="BLUE"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function SOM() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 305, y = 115;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function SR() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 310, y = 205;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function H1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 287, y = 275;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function H2() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 322, y = 275;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function EE1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 90, y = 275;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}

// Camino primer piso

function B1_IP() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(47,206);
        contexto.lineTo(116,206);
        contexto.lineTo(116,250);
        contexto.lineTo(152,250);
        contexto.lineTo(152,280);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B1_AYC() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(116,138);
        contexto.lineTo(116,250);
        contexto.lineTo(152,250);
        contexto.lineTo(152,280);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B1_SOM() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(295,125);
        contexto.lineTo(275,125);
        contexto.lineTo(275,250);
        contexto.lineTo(152,250);
        contexto.lineTo(152,280);
        
        contexto.moveTo(275,160);
        contexto.lineTo(116,160);
        contexto.lineTo(116,250);
        contexto.lineTo(152,250);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B1_SR() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(300,215);
        contexto.lineTo(275,215);
        contexto.lineTo(275,250);
        contexto.lineTo(152,250);
        contexto.lineTo(152,280);
        
        contexto.moveTo(275,215);
        contexto.lineTo(275,160);
        contexto.lineTo(116,160);
        contexto.lineTo(116,250);
        contexto.lineTo(152,250);
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B1_H1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(287,275);
        contexto.lineTo(287,250);
        contexto.lineTo(152,250);
        contexto.lineTo(152,280);
        
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B1_H2() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(322,275);
        contexto.lineTo(322,250);
        contexto.lineTo(152,250);
        contexto.lineTo(152,280);
        
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B1_EE1() {
    const mi_canvas = document.getElementById("canvas1");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        contexto.beginPath();
        contexto.strokeStyle="green"
        contexto.lineWidth= 10;
        contexto.moveTo(152,280);
        contexto.lineTo(152,250);
        contexto.lineTo(90,250);
        contexto.lineTo(90,275);
        
        contexto.stroke();
        contexto.closePath();
    }
        const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}

// Destino segundo piso

function DO() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 165, y = 115;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function RX() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 118, y = 280;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function ET() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 283, y = 280;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function RM() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 283, y = 180;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function MT() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 310, y = 240;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function HT() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 310, y = 203;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function EE2() {
    const mi_canvas = document.getElementById("canvas2");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 100, y = 170;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}

// Camino segundo piso

function B1_DO() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(240,250);
        contexto2.lineTo(220,250);
        contexto2.lineTo(220,125);
        contexto2.lineTo(175,125);

        contexto2.moveTo(235,250);
        contexto2.lineTo(235,300);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_RX() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(118,250);
        contexto2.lineTo(118,280);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(118,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_ET() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,280);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_RM() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,200);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_MT() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(300,250);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_HT() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,213);
        contexto2.lineTo(300,213);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_EE2() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas2");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(90,180);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(100,250);
        contexto2.lineTo(100,190);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// Destino tercer piso


function RT() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 165, y = 115;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function EFB() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 168, y = 280;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function CN() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 283, y = 280;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function CP() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 283, y = 180;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function CO() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 310, y = 240;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function CC() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 310, y = 203;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function EE3() {
    const mi_canvas = document.getElementById("canvas3");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 100, y = 170;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}

// Camino tercer piso

function B1_RT() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(240,250);
        contexto2.lineTo(220,250);
        contexto2.lineTo(220,125);
        contexto2.lineTo(175,125);

        contexto2.moveTo(235,250);
        contexto2.lineTo(235,300);
        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_EFB() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(168,250);
        contexto2.lineTo(168,280);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(168,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_CN() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,280);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_CP() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,200);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_CO() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(300,250);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(283,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_CC() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(100,180);
        contexto2.lineTo(100,250);
        contexto2.lineTo(283,250);
        contexto2.lineTo(283,213);
        contexto2.lineTo(300,213);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_EE3() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas3");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(90,180);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(100,250);
        contexto2.lineTo(100,190);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}

// Destino cuarto piso

function ZP() {
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 90, y = 200;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function ZAC() {
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 150, y = 100;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function ZB() {
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 300, y = 210;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
function B4() {
    const mi_canvas = document.getElementById("canvas4");
    const contexto = mi_canvas.getContext("2d");
    function animar_imagen() {
        let x = 335, y = 118;
        contexto.beginPath();
        contexto.strokeStyle="blue"
        contexto.lineWidth= 20;
        contexto.moveTo(x,y);
        contexto.lineTo(x,y + 20);
        contexto.stroke();

    }
    const fx_animar_imagen = requestAnimationFrame(animar_imagen);
}
// Camino cuarto piso

function B1_ZP() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas4");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,180);
        contexto2.lineTo(90,180);
        contexto2.lineTo(90,200);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(90,250);
        contexto2.lineTo(90,220);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_ZAC() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas4");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,160);
        contexto2.lineTo(90,160);
        contexto2.lineTo(90,110);
        contexto2.lineTo(140,110);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,110);
        contexto2.lineTo(160,110);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_ZB() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas4");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,160);
        contexto2.lineTo(90,160);
        contexto2.lineTo(90,110);
        contexto2.lineTo(235,110);
        contexto2.lineTo(235,220);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(235,220);
        contexto2.lineTo(290,220);

        contexto2.moveTo(90,110);
        contexto2.lineTo(90,250);
        contexto2.lineTo(235,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}
function B1_B4() {
    const mi_canvas1 = document.getElementById("canvas1");
    const contexto1 = mi_canvas1.getContext("2d");
    function animar_imagen2() {
        contexto1.beginPath();
        contexto1.strokeStyle="green"
        contexto1.stroke();
        contexto1.lineWidth= 10;
        contexto1.moveTo(152,280);
        contexto1.lineTo(152,250);
        contexto1.lineTo(90,250);
        contexto1.lineTo(90,206);
        contexto1.lineTo(60,206);
        contexto1.lineTo(60,100);
        
        contexto1.moveTo(152,250);
        contexto1.lineTo(190,250);
        contexto1.lineTo(190,300);

        contexto1.stroke();
        contexto1.fillStyle = "RED";
        contexto1.fillRect(38,65,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",40,80);

        contexto1.fillStyle = "RED";
        contexto1.fillRect(190,300,45,20);
        contexto1.font="10pt Verdana";
        contexto1.fillStyle = "WHITE";
        contexto1.fillText("SUBIR",190,315);
        contexto1.closePath();
    }
    const fx_animar_imagen1 = requestAnimationFrame(animar_imagen1);

    const mi_canvas2 = document.getElementById("canvas4");
    const contexto2 = mi_canvas2.getContext("2d");
    function animar_imagen1() {
        contexto2.beginPath();
        contexto2.strokeStyle="green"
        contexto2.stroke();
        contexto2.lineWidth= 10;
        contexto2.moveTo(40,100);
        contexto2.lineTo(40,160);
        contexto2.lineTo(90,160);
        contexto2.lineTo(90,110);
        contexto2.lineTo(275,110);
        contexto2.lineTo(275,160);
        contexto2.lineTo(335,160);
        contexto2.lineTo(335,138);

        contexto2.moveTo(235,300);
        contexto2.lineTo(235,250);
        contexto2.lineTo(235,220);
        contexto2.lineTo(335,220);
        contexto2.lineTo(335,138);

        contexto2.moveTo(90,110);
        contexto2.lineTo(90,250);
        contexto2.lineTo(235,250);

        contexto2.stroke();
    }
    const fx_animar_imagen2 = requestAnimationFrame(animar_imagen2);
}