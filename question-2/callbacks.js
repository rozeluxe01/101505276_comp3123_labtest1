
function resolvedPromise(){

    return new Promise((res) => {
    
        setTimeout(() => {
            res({message: "resolved promise success!"});
        },500);
    
    });

}


function rejectedPromise(){

    return new Promise((res, rej) => {
    
        setTimeout(() => {
            rej(new Error("error: rejected promise!"));
        },500);

    });

}

resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));