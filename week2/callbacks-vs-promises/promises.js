
const doWorkPromise= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        // resolve([1,2,3]);
        reject("things went wrong!")
    },2000)
})  


//only gets executed when things go well (if resolve was executed)
doWorkPromise.then((result)=>{
    console.log("Success!",result);
}).catch((err)=>{console.log(err)})
//catch only gets executed when things go wrong (if reject was executed)
