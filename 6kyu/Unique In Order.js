/* Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other
 and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3] */

function uniqueInOrder(sequence) {
    //if (!Array.isArray(sequence)) {
    //  sequence = sequence.split('');
    //}
    //
    //return sequence.filter((value, index) => value !== sequence[index + 1]);
    
    let result = []
      for(let i = 0; i < 15; i++){
        if(sequence[i+1] !== sequence[i]){
          result.push(sequence[i])
    }
  }
      return result
  }