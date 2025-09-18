export function containsAnyClassFromArray(element, classArray) {
  for (let i = 0; i < classArray.length; i++) {
    if (element.classList.contains(classArray[i])) {
      return true;
    }
  }
  return false;
}