function isPrime(num, mod){
    if(num == mod){
        return true;
    }
    if(num % mod ==0){
        return false;
    }
    return isPrime(num,mod + 1);

}

isPrime(7,2);