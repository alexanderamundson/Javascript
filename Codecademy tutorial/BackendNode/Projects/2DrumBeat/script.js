// Drum Arrays
let kicks = new Array(16).fill(false);
let snares = new Array(16).fill(false);
let hiHats = new Array(16).fill(false);
let rideCymbals = new Array(16).fill(false);

  
 const toggleDrum = (drumArrayName, index) => {
   const drums = getDrumArrayByName(drumArrayName);
   if (!drums || index > 15 || index < 0) {
     return;
   }
   drums[index] = !drums[index];
};

const getDrumArrayByName = (name) => {
    switch (name) {
      case 'kicks':
        return kicks;
      case 'snares':
        return snares;
      case 'hiHats':
        return hiHats;
      case 'rideCymbals':
        return rideCymbals;
      default:
        return;
    }
};

const clear = function(arrayName ) {
    let drumArray = getDrumArrayByName(arrayName);
    if (drumArray) {
       drumArray.fill(false);
    }
};

const invert = function(arrayName) {
    let drumArray = getDrumArrayByName(arrayName);
    if (drumArray) {
        for (let i = 0; i < drumArray.length; i++) {
            drumArray[i] = !drumArray[i];
          }
    }
};

const getNeighborPads = (x, y, size) => {
    const neighborPads = [];
    if (x >= size || y >= size || x < 0 || y < 0 || size < 1) {
      return neighborPads;
    }
    neighborPads.push([x - 1, y]);
    neighborPads.push([x, y - 1]);
    neighborPads.push([x + 1, y]);
    neighborPads.push([x, y + 1]);
    return neighborPads.filter((neighbor) => {
      return neighbor.every((val) => {
        return val >= 0 && val < size;
      });
    });
  };