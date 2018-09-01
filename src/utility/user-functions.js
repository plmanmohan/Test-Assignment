/**
 * It search for the particular element with the id and removes the element from the Object
 * @param {*Object} state 
 * @param {*number} id 
 */
export function removeUser (state, id) {
    const remainder = state.users.filter((user) => (user.id !== id) ? user : null)
    return remainder;
}
/**
 * It merges both of the arrays and removes the duplicate elements
 * @param {*} oldUserList 
 * @param {*} newUserList 
 */
export function removeDuplicateUsers(oldUserList, newUserList) {
    console.log('State.user :: ',oldUserList);
    var newData = oldUserList.concat(newUserList);
    console.log('Concat :: ',newData);
    var finalData = Array.from(new Set(newData.map(JSON.stringify))).map(JSON.parse);
    console.log('AfterMerge :: ',finalData);
    return finalData;
  }