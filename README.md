# BasicJS

⚠️ DO NOT SUBMIT PULL REQUESTS TO THIS REPO ⚠️

## General task description
Your task is to write several functions that are the solution to the subtasks. Subtasks descriptions, as well as instructions on how to run tests and submit solutions are below.

---

### **Count cats!**

Your task is to count the cats hidden in the backyard (presented by two-dimensional `Array`). Cats hide well, but their **ears** (`"^^"`) are clearly visible. Your task is to implement the `countCats(backyard)` function that will count cats. Good luck!

Number of cats found should be `number`. If no cats found, function should return `0`.

For example:

`countCats([
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', 1, 2]
  ]) => 3`

Write your code in `src/count-cats.js`.

---

### **Carbon dating**

To determine the age of archaeological finds, **radioisotope dating** is widely used. One of its types is **radiocarbon dating**.

The approximate age of the sample is calculated by measuring the **ratio** of the **modern** activity of the C14 isotope to the activity of the same isotope in the **sample**.

[Read about method](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#section_2)

---
<details>

  <summary>About calculations</summary>
  You can use the formula from the article at the link above. 0.693 is an approximation of the natural logarithm of two.

</details>

---

Your task is to implement the function `dateSample(sampleActivity)` that calculates sample approximate age (in years). Please use given `MODERN_ACTIVITY` and `HALF_LIFE_PERIOD`.

Function parameter `sampleActivity` is a `string`. Calculated sample age must be `number`.

Age must be **integer**. Age must be **rounded up** (ceiling). In case of wrong input parameter **type** or **inadequate** activity value or **absence** of argument function must return `false`.

For example:

`dateSample('1') => 22387` (or `22392` depending on formula used)

`dateSample('WOOT!') => false`

Write your code in `src/carbon-dating.js`.

---

### **Dream team**

Imagine you and your friends decide to create a **dream team**. This team should have a cool secret name that contains encrypted information about it. For example, these may be the **first letters** of the names of its members in **upper case** **sorted alphabetically**.
Your task is to implement the `createDreamTeam(members)` function that returns name of a newly made team (`string`) based on the names of its members (`Array`). Good luck!

Names of the members should be `strings`. Values with other **type** should be **ignored**. In case of wrong `members` **type** function must return `false`.

NB! Team member name may contain **whitespaces**.

For example:

`createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])` => `'ADMM'`

`createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])` => `'LOO'`

Write your code in `src/dream-team.js`.

---

### **What season?**

Your task is to implement the function `getSeason(date)` that accepts `Date` object and returns the time of the year that matches it.
Time of the year must be `string`.

---
<details>

<summary>Seasons in English</summary>
The names of the seasons in English are: spring, summer, autumn (fall), winter.

</details>

---

If the `date` argument was not passed, the function must return the `string` `'Unable to determine the time of year!'`. If the `date` argument is **invalid**, the function must throw an `Error`.

Shh! An enemy scout has lurked among the arguments that come into this function.

![Disguised](https://www.famousbirthdays.com/faces/disguised-toast-image.jpg)

He is guided by the famous proverb: “If it looks like a **duck**, swims like a **duck** and quacks like a **duck**, then it probably is a **duck** (who cares what it **really** is)”. He is **expertly disguised** as a real date, but a clever javascript developer can catch him and `throw` an `Error` just in time!

For example:

`const springDate = new Date(2020, 02, 31)`

`getSeason(springDate) => 'spring'`

Write your code in `src/what-season.js`.

---

### **Tower of Hanoi**

![Tower of hanoi visualisation](https://ioecapsule.com/wp-content/uploads/2019/08/tower_of_hanoi_3_disks.gif)

[Tower of Hanoi](https://www.britannica.com/topic/Tower-of-Hanoi) is famous mathematical puzzle of the 18th century.
It consists of three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to another rod, obeying the following simple **rules**:
* Only **one** disk can be moved at a time.
* Each move consists of taking the **upper** disk from one of the stacks and placing it on **top** of another stack or on an empty rod.
* No **larger** disk may be placed on top of a **smaller** disk.

Your task is much easier than coming up with an algorithm that solves this puzzle :)

Implement the function `calculateHanoi` that accepts `diskNumber` and `turnsSpeed` parameters. `diskNumber` is a number of **disks** and `turnsSpeed` is the speed of moving discs (in **turns** per **hour**).
Both parameters are `numbers`.

`calculateHanoi` function returns an object with 2 properties:
* `turns` (minimum `number` of turns to solve the puzzle)
* `seconds` (minimum `number` of **seconds** to solve the puzzle at a given `turnsSpeed`, seconds must be an integer, obtained  from **rounded down** (floor) calculation result)

You don't need to validate parameters.

For example:

`calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }`

Write your code in `src/hanoi-tower.js`.

---

### **Transform array**

Your task is to implement the function `transform(arr)` that takes an `array` and returns **transformed** array, based on the **control sequences** that `arr` contains.
**Control sequences** are defined `string` elements of the mentioned `array`:
* `--discard-next` excludes the next element of the array from the transformed array.
* `--discard-prev` excludes the previous element of the array from the transformed array.
* `--double-next` doubles the next element of the array in the transformed array.
* `--double-prev` doubles the previous element of the array in the transformed array.

For example:

`transform([1, 2, 3, '--double-next', 4, 5])` => `[1, 2, 3, 4, 4, 5]`

`transform([1, 2, 3, '--discard-prev', 4, 5])` => `[1, 2, 4, 5]`

The function must not affect inital array. Control sequences are applied **from left to right** to initial array elements. Control sequences **do not fall** into the transformed array. Control sequences in initial array don't occur in a row. If there is **no element** next to the control sequence **to which it can be applied** in the initial array, or this element was previously deleted, **it does nothing**. The function should throw an `Error` if the `arr` is not an `Array`.

Write your code in `src/transform-array.js`.

---

### **Chain maker**
Let's practice in [chaining](https://en.wikipedia.org/wiki/Method_chaining)!

Your task is to create the object `chainMaker` that creates chains. The finished chain is a `string` and looks like this: `'( value1 )~~( value2 )~~( value3 )'`.
The `chainMaker` has several **methods** for creating chains and modifying them:
* `getLength` returns the current chain length as a number;
* `addLink(value)` adds a link containing a `string` representation of the `value` to the chain;
* `removeLink(position)` removes a chain link in the specified position;
* `reverseChain` reverses the chain;
* `finishChain` ends the chain and `returns` it.

`addLink`, `reverseChain` and `removeLink` methods are **chainable**, while the another ones are not. If `addLink` is called with no arguments, it adds an empty link (`'(  )'`) to the chain. If `removeLink` accepts **invalid** `position` (e.g. not a number, or a fractional number, or corresponding to a nonexistent link), it must throw an `Error`. After calling the `finishChain` method, the existing chain must be deleted, as if an `Error` was thrown.

For example:

`chainMaker.addLink(1).addLink(2).addLink(3).finishChain()` => `'( 1 )~~( 2 )~~( 3 )'`

`chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()` => `'( 2 )~~( 3 )'`

`chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()` => `'( 2 )~~( 1 )~~( 3 )'`

Write your code in `src/simple-chain.js`.

---

### **Recursive depth calculator**
![Go deeper](https://i.imgur.com/k7lADiM.jpg)

Your task is to implement the class `DepthCalculator` with method `calculateDepth` that takes an `array` and returns its depth.

`calculateDepth` method must pass the given array **recursively**. Depth of a **flat** array is 1. Method must correctly work with `arrays` that contain no elements or contain empty `arrays`.

For example:

`const depthCalc = new DepthCalculator();`

`depthCalc.calculateDepth([1, 2, 3, 4, 5])` => `1`

`depthCalc.calculateDepth([1, 2, 3, [4, 5]])` => `2`

`depthCalc.calculateDepth([[[]]])` => `3`

Write your code in `src/recursive-depth.js`.

---
### **Extended repeater**

Your task is to implement the function `repeater(str, options)`.
This function returns a repeating `string` based on the given parameters:
* `str` is a `string` to repeat;
* `options` is an `object` of options, that contains properties:
  * `repeatTimes` sets the `number` of repetitions of the `str`;
  * `separator` is a `string` separating repetitions of the `str`;
  * `addition` is an additional `string` that will be added to each repetition of the `str`;
  * `additionRepeatTimes` sets the `number` of repetitions of the `addition`;
  * `additionSeparator` is a `string` separating repetitions of the `addition`.

The `str` and `addition` parameters are `strings` by default. In case when **type** of these parameters is different, they must be converted to a `string`.

`separator` and `additionSeparator` parameters are `strings`. 

`repeatTimes` and `additionRepeatTimes` are integer `numbers` (in the absence of any of them, the corresponding string is not repeated).

The only indispensable parameter is `str`, any others may be not defined. `separator` default value is `'+'`. `additionSeparator` default value is `'|'`.

For example: `repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })` => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`

Write your code in `src/extended-repeater.js`.

---

### **Vigenere cipher**

Cryptography is awesome! Let's try to organize production of encryption machines. Our machines will use one of the encryption methods that are easy to understand, but also not amenable to simple cryptanalysis - the [**Vigenere cipher**](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher).

Our machine will have 2 modifications: **direct** and **reverse** (the type of machine is determined at the moment of creation). The **direct** machine simply encodes and decodes the string that was transmitted to it, and the **reverse** machine returns an **inverted** string after encoding and decoding.

Your task is to implement the class `VigenereCipheringMachine`. `constructor` of this `class` accepts `true` (**or nothing**) to create **direct** machine and `false` to create **reverse** machine.
Each instance of `VigenereCipheringMachine` must have 2 methods: `encrypt` and `decrypt`. 

`encrypt` method accepts 2 parameters: `message` (`string` to encode) and `key` (`string`-keyword).

`decrypt` method accepts 2 parameters: `encryptedMessage` (`string` to decode) and `key` (`string`-keyword).

These parameters for both methods are **mandatory**. If at least one of them has not been given, an `Error` must be thrown. The text returned by these methods must be **uppercase**. Machines encrypt and decrypt **only latin alphabet** (all other symbols remain unchanged).

You don't need to validate value sent to `constructor` and to `encrypt` and `decrypt` methods (except throwing an `Error` on absence of argument for these methods).

For example:

`const directMachine = new VigenereCipheringMachine();`

`const reverseMachine = new VigenereCipheringMachine(false);`

`directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'`

`directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'`

`reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'`

`reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'`

Write your code in `src/vigenere-cipher.js`.

---

#### Prerequisites
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: https://github.com/AlreadyBored/basic-js
3. Clone your newly created repo: https://github.com/<%your_github_username%>/basic-js/  
4. Go to folder `basic-js`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm run test` in command line.
7. You will see the number of pending, passing and failing tests. 100% of passing tests is equal to 100p in score  

---

#### Submit to [rs app](https://app.rs.school)
1. Open [rs app](https://app.rs.school) and login
2. Go to [submit task page](https://app.rs.school/course/student/auto-test?course=rs-2020-q3)
3. Select your task (BasicJS)
4. Press the submit button and enjoy

---

#### Notes
1. We recommend you to use nodejs of version 12 or lower. If you use any of features, that does not supported by node v12, there may be problems with task submit.
2. Please, be sure that each of your tests is limited to 30 sec.

---

© [AlreadyBored](https://github.com/alreadybored)

& Thanks [mikhama](https://github.com/mikhama) for assistance!