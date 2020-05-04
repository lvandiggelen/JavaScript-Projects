function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete sentence.";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence ="All work and no play makes Johnny a dull boy."
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function upper_Case() {
    var Phrase = "This phrase is upper case."
    var Section = Phrase.toUpperCase();
    document.getElementById("low").innerHTML = Section;
}

function string_Method() {
    var X=183;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12084.5455466234234
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fixed_Method() {
    var X = 34939.44563
    document.getElementById("Fixed").innerHTML = X.toFixed(2);
}