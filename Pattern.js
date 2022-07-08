function pattern(line){
    if(line ==0){ return ; }
    pattern(line-1); 
    var stars = star(line, "");
    console.log(stars);
}
function star(noOfStar, val){
    if(noOfStar == 0){return val;}
    val = val + "*";
    return star(noOfStar-1, val);
}
var line = 5;
pattern(line);