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

function generateGuessKeys(guess,green,orange,grey){
    correctKeys = new Set()
    wrongKeys = new Set()

    for (i = 0; i<5; i++){
        if (green[i] == true){
            correctKeys.add(guess[i])
            correctKeys.add([guess[i],i])
        }
        if (orange[i]  == true){
            correctKeys.add(guess[i])
            wrongKeys.add([guess[i],i])
        }
        if (grey[i]==true){
            wrongKeys.add(guess[i])
            wrongKeys.add([guess[i],i])
        }
    }
    
    return [correctKeys,wrongKeys]
}

function possibleAnswer(keys,possible){
    AllGuess = new Set()
    possibleAnswer = new Set()
    listKey = []
    for (key in keys){
        //test out keys in possible
    }
}