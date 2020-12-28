function titleCaseEdit(title) {
  return title
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;