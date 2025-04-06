const quizData = {
    "Beginner": [
        { "question": "What keyword defines a function in Python?", "options": ["A) func", "B) def", "C) function"], "answer": "B" },
        { "question": "Which operator is used for exponentiation?", "options": ["A) ^", "B) **", "C) ^^"], "answer": "B" },
        { "question": "Which data type is immutable?", "options": ["A) List", "B) Dictionary", "C) Tuple"], "answer": "C" },
        { "question": "Which method adds an item to a list?", "options": ["A) append()", "B) push()", "C) add()"], "answer": "A" },
        { "question": "How do you get user input in Python?", "options": ["A) input()", "B) scan()", "C) get()"], "answer": "A" },
        { "question": "Which function returns the length of a list?", "options": ["A) size()", "B) length()", "C) len()"], "answer": "C" },
        { "question": "Which loop runs at least once?", "options": ["A) for", "B) while", "C) do-while"], "answer": "C" },
        { "question": "How do you comment in Python?", "options": ["A) //", "B) #", "C) <!-- -->"], "answer": "B" },
        { "question": "Which function converts a string to an integer?", "options": ["A) toInt()", "B) int()", "C) strToInt()"], "answer": "B" },
        { "question": "What is `type(5.0)`?", "options": ["A) int", "B) float", "C) double"], "answer": "B" },
        { "question": "Which method removes the last item from a list?", "options": ["A) remove()", "B) pop()", "C) delete()"], "answer": "B" },
        { "question": "What does `10 % 3` return?", "options": ["A) 1", "B) 3", "C) 10"], "answer": "A" },
        { "question": "Which method converts text to lowercase?", "options": ["A) lower()", "B) toLower()", "C) lowercase()"], "answer": "A" },
        { "question": "What is `10 // 3` in Python?", "options": ["A) 3.33", "B) 3", "C) 4"], "answer": "B" },
        { "question": "What does `not True` return?", "options": ["A) True", "B) False", "C) None"], "answer": "B" },
        { "question": "Which symbol is used for single-line comments?", "options": ["A) //", "B) #", "C) --"], "answer": "B" },
        { "question": "What does `print('Hello' + 'World')` output?", "options": ["A) HelloWorld", "B) Hello World", "C) Hello+World"], "answer": "A" },
        { "question": "Which data type holds key-value pairs?", "options": ["A) List", "B) Dictionary", "C) Set"], "answer": "B" },
        { "question": "What does `bool([])` return?", "options": ["A) True", "B) False", "C) None"], "answer": "B" },
        { "question": "Which function returns the absolute value of a number?", "options": ["A) abs()", "B) absolute()", "C) fabs()"], "answer": "A" },
        { "question": "Which data type represents a sequence of characters?", "options": ["A) List", "B) String", "C) Tuple"], "answer": "B" },
        { "question": "Which method splits a string into a list?", "options": ["A) break()", "B) split()", "C) slice()"], "answer": "B" },
        { "question": "Which of these is a valid Python identifier?", "options": ["A) 2variable", "B) _varName", "C) var-name"], "answer": "B" },
        { "question": "How do you check if `x` is equal to `10`?", "options": ["A) x = 10", "B) x == 10", "C) x === 10"], "answer": "B" },
        { "question": "What does `range(3)` return?", "options": ["A) [1, 2, 3]", "B) [0, 1, 2]", "C) (0, 1, 2, 3)"], "answer": "B" },
        { "question": "What is the result of `3 * 2 ** 3`?", "options": ["A) 24", "B) 18", "C) 48"], "answer": "A" },
        { "question": "Which method returns the index of an item in a list?", "options": ["A) locate()", "B) find()", "C) index()"], "answer": "C" },
        { "question": "Which of the following is a Python boolean value?", "options": ["A) 1", "B) True", "C) truthy"], "answer": "B" },
        { "question": "Which of these is NOT a Python keyword?", "options": ["A) yield", "B) switch", "C) global"], "answer": "B" },
        { "question": "What does `int('10') + int('20')` return?", "options": ["A) '1020'", "B) 30", "C) '30'"], "answer": "B" },
        { "question": "Which operator is used for string concatenation?", "options": ["A) &", "B) +", "C) *"], "answer": "B" },
        { "question": "Which method converts text to uppercase?", "options": ["A) toUpperCase()", "B) upper()", "C) capitalize()"], "answer": "B" },
    
    ],
    "Intermediate": [
        { "question": "Which statement is used to handle exceptions?", "options": ["A) try", "B) catch", "C) error"], "answer": "A" },
    { "question": "What does `list(range(3))` return?", "options": ["A) [0, 1, 2]", "B) (0, 1, 2)", "C) {0, 1, 2}"], "answer": "A" },
    { "question": "Which method is used to replace a substring in a string?", "options": ["A) replace()", "B) swap()", "C) substitute()"], "answer": "A" },
    { "question": "How do you check the type of a variable?", "options": ["A) typeof(x)", "B) x.type()", "C) type(x)"], "answer": "C" },
    { "question": "Which method removes whitespace from a string?", "options": ["A) strip()", "B) trim()", "C) remove()"], "answer": "A" },
    { "question": "What will `bool(0)` return?", "options": ["A) True", "B) False", "C) None"], "answer": "B" },
    { "question": "Which data type is ordered and mutable?", "options": ["A) List", "B) Set", "C) Tuple"], "answer": "A" },
    { "question": "Which keyword is used to define a function?", "options": ["A) def", "B) function", "C) create"], "answer": "A" },
    { "question": "Which method sorts a list in-place?", "options": ["A) sorted()", "B) sort()", "C) arrange()"], "answer": "B" },
    { "question": "Which module is used for regular expressions in Python?", "options": ["A) regex", "B) re", "C) reg"], "answer": "B" },
    { "question": "Which operator is used for floor division?", "options": ["A) /", "B) //", "C) %"], "answer": "B" },
    { "question": "Which keyword creates an empty function?", "options": ["A) void", "B) skip", "C) pass"], "answer": "C" },
    { "question": "Which Python function returns the highest value?", "options": ["A) min()", "B) max()", "C) high()"], "answer": "B" },
    { "question": "How do you check if 'x' is in a list?", "options": ["A) if x in list", "B) if list has x", "C) if x includes list"], "answer": "A" },
    { "question": "Which function converts an integer to a string?", "options": ["A) str()", "B) toString()", "C) string()"], "answer": "A" },
    { "question": "Which symbol is used for unpacking arguments in a function?", "options": ["A) &", "B) *", "C) @"], "answer": "B" },
    { "question": "Which function is used to open a file in Python?", "options": ["A) open()", "B) file()", "C) readFile()"], "answer": "A" },
    { "question": "Which function returns the memory address of a variable?", "options": ["A) id()", "B) address()", "C) location()"], "answer": "A" },
    { "question": "What is the output of `print(2 ** 3)`?", "options": ["A) 6", "B) 8", "C) 9"], "answer": "B" },
    { "question": "Which of these is a mutable data type?", "options": ["A) String", "B) Tuple", "C) List"], "answer": "C" },
    { "question": "What will `bool([])` return?", "options": ["A) True", "B) False", "C) None"], "answer": "B" },
    { "question": "Which method adds an element to the end of a list?", "options": ["A) insert()", "B) append()", "C) extend()"], "answer": "B" },
    { "question": "Which function returns the sum of all elements in a list?", "options": ["A) add()", "B) sum()", "C) total()"], "answer": "B" },
    { "question": "What does `sorted([3, 1, 2])` return?", "options": ["A) [3, 1, 2]", "B) [1, 2, 3]", "C) None"], "answer": "B" },
    { "question": "Which operator is used for logical AND?", "options": ["A) &", "B) and", "C) &&"], "answer": "B" },
    { "question": "Which method removes and returns the last element of a list?", "options": ["A) remove()", "B) pop()", "C) delete()"], "answer": "B" },
    { "question": "Which module provides support for mathematical operations?", "options": ["A) math", "B) numbers", "C) calc"], "answer": "A" },
    { "question": "Which of these is used to create a set?", "options": ["A) {}", "B) set()", "C) []"], "answer": "B" },
    { "question": "Which of these functions creates a tuple?", "options": ["A) list()", "B) set()", "C) tuple()"], "answer": "C" },
    { "question": "Which keyword is used for inheritance in Python?", "options": ["A) extends", "B) inherits", "C) class"], "answer": "C" },
    { "question": "What will `type([])` return?", "options": ["A) list", "B) tuple", "C) dictionary"], "answer": "A" }
    ],
    "Advanced": [
        { "question": "Which of these is NOT a Python web framework?", "options": ["A) Flask", "B) Django", "C) Spring"], "answer": "C" },
    { "question": "What does `@staticmethod` do?", "options": ["A) Defines a static method", "B) Creates a private method", "C) Declares a global function"], "answer": "A" },
    { "question": "Which method sorts a list in-place?", "options": ["A) sorted()", "B) sort()", "C) order()"], "answer": "B" },
    { "question": "Which library is used for data visualization?", "options": ["A) NumPy", "B) Matplotlib", "C) Pandas"], "answer": "B" },
    { "question": "What is the output of `bool('False')`?", "options": ["A) True", "B) False", "C) Error"], "answer": "A" },
    { "question": "Which function reads an entire file?", "options": ["A) readFile()", "B) read()", "C) readline()"], "answer": "B" },
    { "question": "Which method removes duplicate values from a list?", "options": ["A) unique()", "B) set()", "C) distinct()"], "answer": "B" },
    { "question": "What will `zip(*[(1,2,3), (4,5,6)])` return?", "options": ["A) [(1, 4), (2, 5), (3, 6)]", "B) [(1,2,3,4,5,6)]", "C) Error"], "answer": "A" },
    { "question": "Which function returns the length of an object?", "options": ["A) count()", "B) len()", "C) size()"], "answer": "B" },
    { "question": "Which statement is used to exit a loop early?", "options": ["A) continue", "B) pass", "C) break"], "answer": "C" },
    { "question": "What will `int('10', 2)` return?", "options": ["A) 2", "B) 10", "C) 4"], "answer": "B" },
    { "question": "Which Python feature allows multiple inheritance?", "options": ["A) MRO", "B) Decorators", "C) Generators"], "answer": "A" },
    { "question": "Which Python module provides OS-related functions?", "options": ["A) system", "B) os", "C) subprocess"], "answer": "B" },
    { "question": "Which is a valid way to open a file for both reading and writing?", "options": ["A) 'r+'", "B) 'rw'", "C) 'w+'"], "answer": "A" },
    { "question": "Which method returns an iterator of dictionary keys?", "options": ["A) keys()", "B) items()", "C) values()"], "answer": "A" },
    { "question": "Which of the following is a mutable data type?", "options": ["A) String", "B) Dictionary", "C) Tuple"], "answer": "B" },
    { "question": "What is `lambda x: x**2`?", "options": ["A) Anonymous function", "B) Recursive function", "C) Class method"], "answer": "A" },
    { "question": "Which function is used to check memory usage in Python?", "options": ["A) memory()", "B) sys.getsizeof()", "C) checkmem()"], "answer": "B" },
    { "question": "Which of these is used to implement abstraction?", "options": ["A) @abstractmethod", "B) @staticmethod", "C) @classmethod"], "answer": "A" },
    { "question": "Which operator has the highest precedence?", "options": ["A) +", "B) **", "C) and"], "answer": "B" },
    { "question": "What is the correct way to define a class?", "options": ["A) class MyClass:", "B) define MyClass:", "C) new MyClass:"], "answer": "A" },
    { "question": "Which of the following allows you to iterate indefinitely?", "options": ["A) for loop", "B) while True", "C) foreach"], "answer": "B" },
    { "question": "Which function is used to generate random numbers?", "options": ["A) random()", "B) randint()", "C) rand()"], "answer": "B" },
    { "question": "Which of these is used to perform deep copying?", "options": ["A) copy.copy()", "B) copy.deepcopy()", "C) duplicate.copy()"], "answer": "B" },
    { "question": "Which Python built-in function evaluates an expression?", "options": ["A) exec()", "B) eval()", "C) compile()"], "answer": "B" },
    { "question": "Which module is used for working with dates?", "options": ["A) datetime", "B) date", "C) calendar"], "answer": "A" },
    { "question": "Which statement is True about Python memory management?", "options": ["A) Python has manual garbage collection", "B) Python has automatic garbage collection", "C) Python does not manage memory"], "answer": "B" },
    { "question": "Which function is used to serialize Python objects?", "options": ["A) save()", "B) pickle.dump()", "C) json.convert()"], "answer": "B" },
    { "question": "Which of these is NOT a valid Python variable name?", "options": ["A) _var", "B) 2var", "C) var_2"], "answer": "B" },
    { "question": "What is the correct way to write a list comprehension?", "options": ["A) [x for x in range(10)]", "B) {x for x in range(10)}", "C) (x for x in range(10))"], "answer": "A" },
    { "question": "Which of the following is a Python threading module?", "options": ["A) multiprocessing", "B) os.thread", "C) threading"], "answer": "C" }
    ]
};

let currentQuiz = [];
let currentIndex = 0;
let score = 0;

function startQuiz(level) {
    // Initialize the quiz based on the selected difficulty level
    currentQuiz = [...quizData[level]];
    currentIndex = 0;
    score = 0;

    // Hide the main menu and show the quiz container
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");

    loadQuestion();
}

function loadQuestion() {
    // If all questions have been answered, show the final score and a restart button
    if (currentIndex >= currentQuiz.length) {
        document.getElementById("quiz-container").innerHTML = `
            <h2>Game Over! Score: ${score}/${currentQuiz.length}</h2>
            <button onclick="location.reload()">Restart</button>
        `;

        // Show the share buttons after the game ends
        document.getElementById('share-buttons').classList.remove('hidden');
        return;
    }

    // Load the current question and its options
    let q = currentQuiz[currentIndex];
    document.getElementById("question").innerText = q.question;
    document.getElementById("options").innerHTML = q.options.map(
        (opt) => `<button onclick="checkAnswer('${opt.charAt(0)}')">${opt}</button>`
    ).join("");
}

function checkAnswer(selected) {
    // Check if the selected option is correct
    if (selected === currentQuiz[currentIndex].answer) {
        score++;
    }

    // Move to the next question
    currentIndex++;
    loadQuestion();
}

function shareToTwitter() {
    // Share the score on Twitter
    const tweet = `I just scored ${score} points in the Python Quiz Adventure! 🐍🏆 Try to beat my score!`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
    window.open(url, '_blank');
}

function shareToFacebook() {
    // Share the score on Facebook
    const quote = `I scored ${score} points in the Python Quiz Adventure! Think you can do better? 🧠🐍`;
    const url = `https://www.facebook.com/sharer/sharer.php?u=https://pquiz-ten.vercel.app&quote=${encodeURIComponent(quote)}`;
    window.open(url, '_blank');
}
