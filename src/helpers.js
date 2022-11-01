export const dynamicAlert = (budget,remain)=>{
    let classname
    if(budget / 4 > remain){
        classname="alert alert-danger"
    }
    else if(budget / 2 > remain){
        classname= "alert alert-warning"
    }
    else{
        classname = "alert alert-success"
    }
    return classname
}