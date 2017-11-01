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
  const availableImmediatelyFilter = filters.includes('AVAILABLE_IMMEDIATELY');
  const freshGrad = !availableImmediatelyFilter && filters.includes('FRESH_GRAD');

  return candidates.filter(function(candidate) {
      return filters.every(function(filter) {
        // loop through filters
        return candidate.options.some(function(option) {
          const candidateSkills = filter.includes(option)
          if (!availableImmediatelyFilter && !freshGrad && candidateSkills) {
            return true;
          } else if (availableImmediatelyFilter && option === 'AVAILABLE_IMMEDIATELY') {
            return true;
          } else if (freshGrad && option === 'FRESH_GRAD') {
            return true;
          }
        })
      })
  })
}

module.exports = filter;
