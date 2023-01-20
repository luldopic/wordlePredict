function wordKey(word){
    var keys = new Set()
    for (let i = 0; i < 5; i++){
        keys.add(word[i])
        keys.add([word[i],i])
    }
    return keys
}

function union(setA, setB){
    const union = new Set(setA)

    for (const elem of setB) {
        union.add(elem)
    }

    return union
}

function intersection(setA, setB){
    let a = new Set(setA)
    let b = new Set(setB)
    let intersect = new Set([...a].filter(i => b.has(i)));
    return intersect
}
function compareKeys(guess,target){
    guessKey = wordKey(guess)
    targetKey = wordKey(target)
    correctKeys = intersection(guessKey,targetKey)
    incorrectKeys = guessKey - targetKey
    return [correctKeys,incorrectKeyss]
}