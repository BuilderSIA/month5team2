export default function getProd(prod){
    return localStorage.getItem(prod) ? JSON.parse(localStorage.getItem(prod)): [];
}



export function setProd(p){
    let item = p;
    let items = getProd('product');
    items.push(item);
    localStorage.setItem('product',JSON.stringify(items))
}











