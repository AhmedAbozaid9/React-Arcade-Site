// a function that takes a string and formats it to suit a component name 
export const convertName = (name) => {
  // we first need to split the name if it has more than one word
  let wordsList = name.split(' ')
  // then we need to map through the wordslist to capitalize each first letter, then concatinate it with the rest of the words
  wordsList = wordsList.map(word => word.charAt(0).toUpperCase() + word.slice(1))
  //then we join the list back
  const newName = wordsList.join('')

  return newName
}


