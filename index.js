function receivesAFunction(spy){
    return spy()
}
receivesAFunction();
function returnsANamedFunction(){
    return function Ali(){  
    }
}
function returnsAnAnonymousFunction(){
    return()=>{

    }
}
returnsAnAnonymousFunction()