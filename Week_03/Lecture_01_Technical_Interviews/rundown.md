# Three Types of Technical Interviews

For all types of technical interviews, it's not uncommon to have multiple rounds, increasing in complexity and intensity with each consecutive round. 

## 1. Take Home Assessment
This is like your assignments here. You'll be given some coding challenge. They'll pose a problem to you, and ask you to implement a solution. This is sometimes done in some web environment like codepen, but can also be just files you create and write. Generally, take home assessments are going to be a bit more complex because you're given more time, and provided with resources such as the internet. 

## 2. Live Technical Interview
In the days of old, this was referred to as a whiteboard interview. You're given a programming task to complete, and you must do so while the interviewer(s) observe you. Post-COVID, this has also happened commonly online through environments like codepen and others. Often times, the tasks given to you won't be anything you'd actually implement on the job. They're often just logic problems in a code costume. In live interviews where the programming task is more of a general logic problem, it is not recommended that you use built-in functions. 

## 3. Automated Technical Interview
Some companies want as little "hands-on" time with candidates as possible. So they'll use things like Code Wars, Leet Code, etc. to "weed out" the less qualified developers.

# Strategies for Nailing the Technical Interview
For all of the following strategies, I recommend that you do them verbally.

- Ask questions to confirm understanding
  - Don't ask "how do I do that," but ask clarifying questions.
- Ask about inputs and edge cases
  - Identify the potential inputs and edge cases
  - Ask for guidance on what to return as a result of invalid inputs
- Write pseudocode
  - Jot down the basic logical steps that you wish to take (and say them out loud)
- Write the code itself
  - Step by step, create the syntax for the pseudocode steps
- Test the code
  - This is a little bit harder if you're doing a whiteboard interview. But that's what T charts are for.
  - 
  ```js
    function squareNum(num) {
      if(typeof num !== "number" || isNaN(num)) return false;
      
      const result = num * num;
      return result;
    } 
  ```
- Reflect
  - Don't reflect as in "wow that was such an enlightening experience."
  - Reflect by talking about ways you could potentially improve the function
  - Talk about any other edge cases you could come up with but maybe just didn't have enough time/resources/experience to implement
  - Recognize the weaknesses and strengths of your solution
  - Discuss any other data structures that could have been used