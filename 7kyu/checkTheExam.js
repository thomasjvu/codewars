// (7 kyu) Check the Exam
/* Instructions
 * The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0

*/

function checkExam(array1, array2) {
    let score = 0
    for (let i = 0; i < array2.length; i++) {
      if (array[i] === array2[i]){
        score += 4
    } else if (array2[i] === '') {
        score += 0
    } else if (array1[i] !== array2[i]) {
        score -= 1
    } return (score < 0) ? 0 : score
}
}

/* Explanation
 * We want to start the score off at 0
 * Then, we want to loop through each of the elements of array1 and check the validity compared to array1 using the provided factors.
 * If the score is less than 0, we will return 0, otherwise we will return the actual score.
