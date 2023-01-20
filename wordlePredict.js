function wordKey(word){
    var keys = new Set()
    for (let i = 0; i < 5; i++){
        keys.add(word[i])
        keys.add([word[i],i])
    }
    return keys
}

