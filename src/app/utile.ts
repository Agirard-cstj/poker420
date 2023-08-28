export function tr(msg:string, dialogue:boolean =false, con:boolean =true){
    if(dialogue)
        alert(msg);
    if(con)
        console.log(msg);
}