function getProd(prod){
    return localStorage.getItem(prod) ? JSON.parse(localStorage.getItem(prod)): [];
}

export default getProd;


function setProd(){
    
}