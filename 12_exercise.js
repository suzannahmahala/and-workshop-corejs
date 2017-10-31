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
  let availableImmediatelyFilter = filters.includes('AVAILABLE_IMMEDIATELY');
  let freshGrad = !availableImmediatelyFilter && filters.includes('FRESH_GRAD');

  return candidates.filter(function(candidate) {
    let hasOptions = candidate.options && candidate.options.length > 0; //has.options


      filters.forEach(function(filter) {
        // loop through filters
        let hasFilter = candidate.options.some(function(option) {
          let candidateSkills = filter.includes(option)
          if (!availableImmediatelyFilter && !freshGrad && candidateSkills) {
            return true;
          } else if (availableImmediatelyFilter && option === 'AVAILABLE_IMMEDIATELY') {
            return true;
          } else if (freshGrad && option === 'FRESH_GRAD') {
            return true;
          }
        })
        hasOptions = hasOptions && hasFilter;
      })

    if (hasOptions) {
      return true;
    }
  })
}

module.exports = filter;
