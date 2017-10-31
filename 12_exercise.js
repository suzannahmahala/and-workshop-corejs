/**
 *  AVAILABLE FILTERS:
 *  ["AVAILABLE_IMMEDIATELY", "FRESH_GRAD", "JUNIOR", "JAVASCRIPT", "PHP", "AWS", "REACT", "JAVA"]
 *
 *  "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" will override all the other filters if specified
 *
 *  if "AVAILABLE_IMMEDIATELY" and "FRESH_GRAD" are both specified as filter, "FRESH_GRAD" will be ignored
 *
 *
 *  Exercise: refactor this code
 *  - take care of naming variables
 *  - get rid of the 'for loops'
 *  - move it to modern JS!
 *  - oh, there are missing tests/scenario
 *
 *   happy refactory :)
 */

function filter(candidates, filters) {
  const filteredResults = [];
  let hasOptions;
  let availableImmediatelyFilter = false;

  let freshGrad = false;

  if (!filters.length) {
    return candidates;
  }



  if (filters.includes('AVAILABLE_IMMEDIATELY')) {
    availableImmediatelyFilter = true;
  } else if (filters.includes('FRESH_GRAD')) {
    freshGrad = true;
  }




  for (var i = candidates.length; i--;) {
    hasOptions = candidates[i].options && candidates[i].options.length > 0; //has.options

    if (candidates[i].options) {
      for (var k = filters.length; k--;) {
        // loop through filters
        var hasFilter = false;


        candidates[i].options.forEach(function(option){
          let candidateSkills = filters[k].indexOf(option) !== -1
          if (!availableImmediatelyFilter && !freshGrad && candidateSkills) {
              hasFilter = true;
          } else if (
            availableImmediatelyFilter &&
            option === 'AVAILABLE_IMMEDIATELY'
          ) {
            hasFilter = true;
          } else if (freshGrad && option === 'FRESH_GRAD') {
            hasFilter = true;
          }
        })



        hasOptions = hasOptions && hasFilter;
      }
    }
    if (hasOptions) {
      filteredResults.unshift(candidates[i]);
    }
  }

  return filteredResults;
}

module.exports = filter;
