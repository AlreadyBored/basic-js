# Basic JS

⚠️ DO NOT SUBMIT PULL REQUESTS TO THIS REPO ⚠️

## General task description
Your task is to write several functions that are the solution to the tasks. Descriptions of tasks, as well as instructions on how to run tests and submit solutions are below.

---

### **Extended repeater**

Your task is to implement function `repeater(str, options)`.
This function returns a repeating string based on the given parameters:
* `str` is a string to repeat;
* `options` is an object of options, that contains:
  * `repeatTimes` sets the number of repetitions of the `str`;
  * `separator` is a `string` separating repetitions of the `str`;
  * `addition` is an additional `string` that will be added to each repetition of the `str`;
  * `additionRepeatTimes` sets the number of repetitions of the `addition`;
  * `additionSeparator` is a `string` separating repetitions of the `addition`;

The `str` and `addition` parameters are `strings` by default. In the case of a different **type**, they must be converted to a `string`. 

`separator` and `additionSeparator` parameters are `strings`. 

`repeatTimes` and `additionRepeatTimes` are integer `numbers` (in the absence of any of them, the corresponding string is not repeated). 

The only indispensable parameter is `str`, any others may be not defined. `separator` default value is `'+'`. `additionSeparator` default value is `'|'`.

For example: `repeater('STRING', 3, '**', 'PLUS', 3, '00')` => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`

Write your code in `src/extended-repeater.js`.

---

### **Dream team**

Imagine you and your friends decide to create a dream team. This team should have a cool secret name that contains encrypted information about it. For example, these may be the first  letters of the names of its members in upper case sorted alphabetically.
Your task is to implement the `createDreamTeam(members)` function that returns name of a newly made team (`string`) based on the names of its members (`Array`). Good luck!

Names of the members should be `strings`. Values with other **type** should be ignored. In case of wrong `members` **type** function must return `false`.

NB! Team member name may contain **whitespaces**.

For example:

`createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])` => `'ADMM'`

`createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])` => `'LOO'`

Write your code in `src/dream-team.js`.

---

### **Count cats!**

Your task is to count the cats hidden in the backyard (which is presented by two-dimensional Array). Cats hide well, but their ears ("^^") give them away . Your task is to implement the `countCats(backyard)` function that will count cats. Good luck!

Number of cats found should be `number`. If no cats found, function should return `0`;

Write your code in `src/count-cats.js`.

---

### **Carbon dating**

To determine the age of archaeological finds, radioisotope dating is widely used. One of its types is radiocarbon dating.

The approximate age of the sample is calculated by measuring the ratio of the current activity of the C14 isotope to the activity of the same isotope in the sample.

[Read about method](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#section_2)

Your task is to implement function `dateSample(sampleActivity)` that calculates sample approximate age (in years). Please use given `MODERN_ACTIVITY` and `HALF_LIFE_PERIOD`.

Function parameter `sampleActivity` is a `string`. Calculated sample age must be `number`. Age must be **integer**. Age must be **rounded up**. In case of wrong input parameter **type** or **inadequate** activity value or **absence** of argument function must return `false`.

Write your code in `src/carbon-dating.js`.

---

### **What season?**

Your task is to implement function `getSeason(date)` that accepts `Date` object and returns the time of the year that matches it.
Time of the year must be `string`.

if the `date` argument was not passed, the function must return the `string` `'Unable to determine the time of year!'`. If the `date` argument is invalid, the function must throw an `Error`.

Shh! Among the arguments that come into this function, an enemy scout has lurked. He is guided by the famous proverb: “If it looks like a **duck**, swims like a **duck** and quacks like a **duck**, then it probably is a **duck** (who cares what it **really** is)”. He is expertly disguised as a real date, but a clever javascript developer can catch him and `throw` an `Error` just in time!

Write your code in `src/what-season.js`.

---

### **Vigenere cipher**

Cryptography is awesome! Let's try to organize the production of encryption machines. Our machines will use one of the encryption methods that are easy to understand, but also not amenable to simple cryptanalysis - the [**Vigenere cipher**](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

Our machine will have 2 modifications: **direct** and **reverse** (the type of machine is determined at the moment of creation). The **direct** machine encodes and decodes the string that was transmitted to it, and the **reverse** machine, when encoding and decoding, returns an **inverted** string.

Your task is to implement `class` `VigenereCipheringMachine`. `constructor` of this `class` accepts `true` (**or nothing**) to create **direct** machine and `false` to create **reverse** machine.
Each instance of `VigenereCipheringMachine` must have 2 methods: `encrypt` and `decrypt`. 

`encrypt` method accept 2 parameters: `message` (`string` to encode) and `key` (`string`-keyword).

`encrypt` method accept 2 parameters: `encryptedMessage` (`string` to decode) and `key` (`string`-keyword).

These parameters for both functions are **mandatory**. If at least one of them has not been transmitted, an `Error` must be thrown.

---

#### Prerequisites
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: https://github.com/rolling-scopes-school/basic-js/
3. Clone your newly created repo: https://github.com/<%your_github_username%>/basic-js/  
4. Go to folder `basic-js`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm run test` in command line.
7. You will see the number of passing and failing tests. 100% of passing tests is equal to 100p in score  

---

#### Submit to [rs app](https://app.rs.school)
1. Open [rs app](https://app.rs.school) and login
2. Go to [submit task page](https://app.rs.school/course/submit-task?course=rs-2020-q1)
3. Select your task (basic-js)
4. Press the submit button and enjoy

---

#### Notes
1. We recommend you to use nodejs of version 10 or lower. If you using any of features that does not supported by node v10, score won't be submitted.
2. Please be sure that each of your test in limit of 30sec.

---

© [AlreadyBored](https://github.com/alreadybored)
