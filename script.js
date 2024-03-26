function carregar (){
    var hora = document.getElementById('hora')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hor = data.getHours();
    var min = data.getMinutes();
    hora.innerText = `Agora são ${hor} horas e ${min} minutos`
    

    if (hor >=0 && hor < 12) {
        foto.src = 'fotomanha.png'
        document.body.style.background = '#fdcb84'
    
    }   else if (hor >= 12 && hor <= 18) {
            foto.src = 'fototarde.png'
            document.body.style.background = '#864f3a'
        
        }   else {
            foto.src = 'fotonoite.png'
            document.body.style.background = '#01244a'
    }
}

 