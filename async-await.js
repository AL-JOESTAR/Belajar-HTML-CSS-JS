// const coba =  new Promise(resolve => {
//     setTimeout (() => {
//         resolve('selesai');
//     },2000);
// });
// coba.then(() => console.log(coba))

function cobaPromise() {
    return new Promise (resolve => {
    setTimeout (() => {
        resolve('selesai');
    },2000);
});
}

async function cobaAsync(){
    const coba = await cobaPromise();
    console.log(coba);
}

cobaAsync();

// try => untuk resolve
// catch => untuk reject
