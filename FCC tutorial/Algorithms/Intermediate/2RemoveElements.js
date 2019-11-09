/*Remove all elements from the initial array that are of the same value as these arguments.
*/
function arrayRemove(arr) {
    var args = Array.prototype.slice.call(arguments);
    return arr.filter(function(element){
      return !(args.includes(element));  
    });
  }
  arrayRemove([3, 5, 1, 2, 2], 2, 3, 5);// should return [1]
  arrayRemove([2, 3, 2, 3], 2, 3);// should return [].
  arrayRemove(["tree", "hamburger", 53], "tree", 53);// should return ["hamburger"].
  arrayRemove(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", 
  "bugati", "trojan", "yacht"], 
  "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");
  // should return [12,92,65].