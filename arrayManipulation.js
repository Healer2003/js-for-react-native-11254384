function processArray(array){
    let newArray = []
    for (let i = 0; i<array.length; i++){
        if(array[i] % 2 ===0){
           newArray.push(array[i]**2)
        }
        else{
            newArray.push(array[i]*3)
        }
    }
    return newArray
}


function formatArrayStrings(strings,proNumbers){
    let newArray = []
    for(let word = 0; word < strings.length; word++){
        if(proNumbers[word] % 2 === 0){
            newArray.push(strings[word].toUpperCase())
        }
        else{
            newArray.push(strings[word].toLowerCase())
        }
    }
    return newArray
}


module.exports = {
    processArray,
    formatArrayStrings

}