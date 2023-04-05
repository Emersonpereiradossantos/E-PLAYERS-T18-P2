//alert("esta funcionando o js")

function cadastrarNewsletter(){
  let email= document.getElementById("campo-email").Value
  alert('email')
}

function mostrarMenu($event){
    //identificar o elemento menu
    let menu = document.getElementById("menu")

    if(getComputedStyle(menu).display == "none"){
      menu.style.display = "flex"
    }
    else{
      menu.style.display = "none"
    }
  
    event.preventDefault()
}