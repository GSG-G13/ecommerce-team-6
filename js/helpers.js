function deleteItem(array, index) {
  return array.splice(index, 1);
}

// Make Function Puer
let deleteRecord = (arr, index) => {
  const newArray =  arr.filter((e, i) => i != index );
  return newArray;
}


module.exports = {deleteItem, deleteRecord};
