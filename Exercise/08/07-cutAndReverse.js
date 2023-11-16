function cutAndReverse(str){
    let index = str.length/2;

    let leftHalf = str.slice(0,index).split('').reverse().join('');
    let rightHalf=str.slice(index).split('').reverse().join('');
    console.log(leftHalf);
    console.log(rightHalf);
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
// cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');