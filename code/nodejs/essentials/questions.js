const questions = [ 
    "what is your name?",
    "what would your rather be doing?",
    "what is your favorite programming language?",
]

const ask = ( i = 0 ) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(' > \n')
};

ask();

const answers = [];

process.stdin.on("data", data => {
    answers.push(data.toString().trim());
    
    if (answers.length < questions.length) {
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {

    const [name, activity, lang] = answers;

console.log(`

    go ${activity} ${name}, you can write ${lang} later!!

`)

      
});
