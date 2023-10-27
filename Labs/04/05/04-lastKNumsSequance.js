function lastNumSeq(n,k){
    let seq = [1];
    for(let current =1;current <n;current++){
        let start = Math.max(current-k,0);
        let end = current -1;
        let sum = 0;
        for (let i = start; i <= end; i++) {
            sum += seq[i];
        }

        seq[current]=sum;
    }
    console.log(seq.join(' '));
}