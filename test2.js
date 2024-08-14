const N = 25;


function findSeq(N) {
    if(N == 1 ) {
        return 1;
    }
    return 1 + findSeq(N - findSeq(findSeq(N - 1)));
}

for(let i=1; i<N; i++) {
    let gSeq = findSeq(i);
    console.log(gSeq);
}