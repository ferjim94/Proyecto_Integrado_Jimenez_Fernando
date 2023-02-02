

document.getElementById("boton 1").addEventListener ("click",function () {
    console.log ("Estas viendo los datos personales de Walter Fernández")
    document.getElementById("datos personales").style.opacity = "1" 
    document.getElementById("experiencia laboral").style.opacity ="0"
    document.getElementById("contacto").style.opacity ="0"
})

document.getElementById("boton 2").addEventListener ("click",function () {
    console.log ("Estas viendo la experiencia laboral de Walter Fernández")
    document.getElementById("datos personales").style.opacity ="0" 
    document.getElementById("experiencia laboral").style.opacity ="1"
    document.getElementById("contacto").style.opacity ="0"
})

document.getElementById("boton 3").addEventListener ("click",function () {
    console.log ("Estas viendo los datos personales de Walter Fernández")
    document.getElementById("datos personales").style.opacity ="0" 
    document.getElementById("experiencia laboral").style.opacity ="0"
    document.getElementById("contacto").style.opacity ="1"
})

