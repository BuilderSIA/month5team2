function getProd(prod){
    return localStorage.getItem(prod) ? JSON.parse(localStorage.getItem(prod)): [];
}



function setProd(p){
    let item = p;
    let items = getProd('product');
    items.push(item);
    localStorage.setItem('product',JSON.stringify(items))
}















export default getProd;
