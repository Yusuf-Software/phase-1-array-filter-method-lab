function findMatching(arr, driverName) {
    const matchingNames = arr.filter(
      (name) => name.toLowerCase() == driverName.toLowerCase()
    );
    return matchingNames;
  }
  
  function fuzzyMatch(arr, driverName) {
    let str = driverName.charAt(0);
    const firstLetterMatched = arr.filter((name) => str == name.charAt(0));
    return firstLetterMatched;
  }
  
  function matchName(obj, string) {
    const matched = obj.filter((el) => el.name == string);
    return matched;
  }  