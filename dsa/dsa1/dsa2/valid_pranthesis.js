function validPranthesis(s){
    var a = {
        
    }
    let b = []
    
    for(let i = 0;i<s.length;i++){
        var c = b.pop()
        if(s[i] == "(" || s[i] == "{" || s[i] == "["){
            b.push(s[i])
        }
        
        
        else if(s[i] == c){
            for(let j = 0;j<b.length;j++){
            if(b[j] == c){
            }
        }
    }
    }
    return b;
}
console.log(validPranthesis("({[]})"))