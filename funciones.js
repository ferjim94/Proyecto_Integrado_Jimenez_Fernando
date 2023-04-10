
let formacion_academica = document.getElementById ("datos_personales");

document.getElementById("boton 1").addEventListener ("click",function () {
    console.log ("Estas viendo los datos personales de Walter Fernández")
    document.getElementById("datos_personales").style.visibility = "visible" 
    document.getElementById("perfil_profesional").style.visibility ="hidden"
    document.getElementById("formacion_academica").style.visibility ="hidden" 
    document.getElementById("habilidades").style.visibility ="hidden"
    document.getElementById("experiencia_laboral").style.visibility ="hidden"
    document.getElementById("contacto").style.visibility ="hidden"

})

document.getElementById("boton 2").addEventListener ("click",function () {
    console.log ("Estas viendo el perfil profesional de Walter Fernández")
    document.getElementById("datos_personales").style.visibility = "hidden" 
    document.getElementById("perfil_profesional").style.visibility ="visible"
    document.getElementById("formacion_academica").style.visibility ="hidden" 
    document.getElementById("habilidades").style.visibility ="hidden" 
    document.getElementById("experiencia_laboral").style.visibility ="hidden"
    document.getElementById("contacto").style.visibility ="hidden"
})

document.getElementById("boton 3").addEventListener ("click",function () {
    console.log ("Estas viendo la formación académica de Walter Fernández")
    document.getElementById("datos_personales").style.visibility = "hidden" 
    document.getElementById("perfil_profesional").style.visibility ="hidden"
    document.getElementById("formacion_academica").style.visibility ="visible" 
    document.getElementById("habilidades").style.visibility ="hidden" 
    document.getElementById("experiencia_laboral").style.visibility ="hidden"
    document.getElementById("contacto").style.visibility ="hidden"})
 
document.getElementById("boton 4").addEventListener ("click",function () {
    console.log ("Estas viendo las habilidades de Walter Fernández")
    document.getElementById("datos_personales").style.visibility = "hidden" 
    document.getElementById("perfil_profesional").style.visibility ="hidden"
    document.getElementById("formacion_academica").style.visibility ="hidden" 
    document.getElementById("habilidades").style.visibility ="visible" 
    document.getElementById("experiencia_laboral").style.visibility ="hidden"
    document.getElementById("contacto").style.visibility ="hidden"})

    
document.getElementById("boton 5").addEventListener ("click",function () {
    console.log ("Estas viendo la experiencia laboral de Walter Fernández")
    document.getElementById("datos_personales").style.visibility = "hidden" 
    document.getElementById("perfil_profesional").style.visibility ="hidden"
    document.getElementById("formacion_academica").style.visibility ="hidden" 
    document.getElementById("habilidades").style.visibility ="hidden" 
    document.getElementById("experiencia_laboral").style.visibility ="visible"
    document.getElementById("contacto").style.visibility ="hidden"})



    document.getElementById("boton 6").addEventListener ("click",function () {
        console.log ("Estas viendo como contactar a Walter Fernández")
        document.getElementById("datos_personales").style.visibility = "hidden" 
        document.getElementById("perfil_profesional").style.visibility ="hidden"
        document.getElementById("formacion_academica").style.visibility ="hidden" 
        document.getElementById("habilidades").style.visibility ="hidden" 
        document.getElementById("experiencia_laboral").style.visibility ="hidden"
        document.getElementById("contacto").style.visibility ="visible"})