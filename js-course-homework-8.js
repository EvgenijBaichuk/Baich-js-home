function Question =  (ask, answers, correctVariant) {
    this.ask = ask,
    this.answers = answers,
    this.correctVariant = correctVariant
 };

 var Question1 = new Question ('Who is the president of Belarus?', ['mr.Lukashenko', 'mr.Sheiman', 'mr.Myasnikovich'], this.answers[0]);

var Question2 = new Question('What is the capital of Belarus', ['Grodno', 'Minsk', 'Gomel'], this.answers[1]);

var Question3 = new Question('What is the population of Belarus?', ['10 million', '1 million', '1 billion'], this.answers[0]);

var Questionnaire = [Question1, Question2, Question3];

console.log(Questionnaire[i], this.answers);
