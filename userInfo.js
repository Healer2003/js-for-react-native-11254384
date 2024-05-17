const {processArray, formatArrayStrings} = require('./arrayManipulation')

function createUserProfiles(originalName, modifiedName){
    let userProfiles = []
    for(let name = 0; name < originalName.length; name++){
        userProfiles.push({
             originalName: originalName[name],
             modifiedName: modifiedName[name],
             id: name + 1
        })  
    }  
    return userProfiles
}

const originalNames = ["Josh","Bob","James"]
const numbers = [1,2,3]
const processedNumbers = processArray(numbers)
const modifiedName = formatArrayStrings(originalNames,processedNumbers)

const userProfiles = createUserProfiles(originalNames,modifiedName)
console.log(userProfiles)



