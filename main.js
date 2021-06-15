function $(el){
  return document.querySelector(el);
}

let content = $(".content"),
    author = $(".author"),
    btn_new = $(".new"),
    mShow = $(".mShow"),
    overlay = $(".overlay");
    
    function random_quotes(){
      
      fetch("https://api.quotable.io/random").then((response) =>{
        
        return response.json();
        
      }).then((data) => {
        
        content.innerText = "\“" + data.content + "\„";
        author.innerText = data.author;
        
      }).catch((erro) => {
        
        alert("An Error Occurred " + erro);
        
        content.innerText = "\“You make a living by what you earn; you make a life by what you give.\„"
        author.innerText = "Salaudeen Jamiu"
        
      })
    }
    
    btn_new.onclick = () =>{
      
      random_quotes();
      
    }
    
    mShow.onclick = () =>{
      
      overlay.style.width = "100vw"
      
    }
    overlay.onclick = () =>{
      
      overlay.style.width = "0vw"
    }