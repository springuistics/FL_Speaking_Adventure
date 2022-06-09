//Holds the data for prompts for each stage. Maybe there is a better way to do this, but I am, admittedly, an idiot, so here it is in the JS iteslf.
const prompt_1 = "Our police officers have been asking about the thief. We heard that she is planning to go to either America or France next. However, when we got close to her apartment, she heard us coming and ran away. But, she left behind lots of things on her desk. Can you help us look for clues?";
const prompt_1_help = "I recommend searching her journal, checking her bag, and looking under the desk.";
const loc1_journal = "The last entry in her journal says that she is looking forward to soon eating some fine cheese and bread.";
const loc1_bag = "In her bag there is a book about judging expensive wine.";
const loc1_desk = "I found some world travel guidebooks. She circled several passages about the Eiffel Tower.";
const prompt_2_fail = "We're here in America looking everywhere for her. However, we can't find any trace of her and no new clues! I think you must have picked the wrong location.";
const prompt_2 = "Good work! As soon as we called the French police, they noticed her in a cafe. She quickly ran away, but we heard from witnesses that she is thinking about going to either England, Mexico, or Korea next! Can you help us look for clues at the café?";
const prompt_2_help = "I recommend searching her table, checking inside, and looking behind the tree.";
const loc2_table = "It seems that she left a very expensive swimsuit that she had just bought.";
const loc2_inside = "The waiter says that she complained because the food wasn't spicy enough. Apparently, she is looking forward to eating spicy food at her next destination.";
const loc2_tree = "Someone seems to have dropped a Spanish to English dictionary behind the tree.";
const prompt_3_fail_uk = "We're here in London looking everywhere for her. However, we can't find any trace of her and no new clues! I think you must have picked the wrong location.";
const prompt_3_fail_korea = "We're here in Korea looking everywhere for her. However, we can't find any trace of her and no new clues! I think you must have picked the wrong location.";
const prompt_3 = "Thank goodness you're here! We found the thief in her hotel room here in Cancun! She just ran away, but I think you might be able to see her! Which way do you think we should go? Please tell us what we should do!";
const prompt_4 = "Good job! Where should we go next?"
const prompt_5 = "We almost have her! Which room did she go into?"
const prompt_3_help = "Use a phrasal verb with the word run to tell us which way to go! Be sure to use the word beach as well!";
const prompt_3_help2 = "Use a phrasal verb to tell us which way to go! Be sure to use the word stairs.";
const prompt_3_help3 = "Use a phrasal verb to tell us which room to enter! Be sure to say the name of the room!"

//Progress counter 0 = start, 1 = France, 2 = Mexico, 3 = Mexico_Pt2, 4 = Final, 5 = fail America, 6 = fail UK, 7 = fail Korea
var progress_counter = 0;

//Boolean that determines whether something is a direction to a new location or a search for clues.
var clues = true;

var language_var = 'en-US';

//Starts the game from the first stage
function StartGame(){
    document.getElementById('home').style.display="none";
    document.getElementById('Command_Center').style.display="block";
    document.getElementById('Stage1').style.display="block";
    TTS(prompt_1);
}

function ResetPictures() {
    document.getElementById('success_screen').style.display="none";
    document.getElementById('home').style.display="none";
    document.getElementById('Command_Center').style.display="none";
    document.getElementById('Stage1').style.display="none";
    document.getElementById('Stage2_America').style.display="none";
    document.getElementById('Stage2_France').style.display="none";
    document.getElementById('Stage3_England').style.display="none";
    document.getElementById('Stage3_Korea').style.display="none";
    document.getElementById('Stage3_Mexico').style.display="none";
    document.getElementById('Stage4_2').style.display="none";
    document.getElementById('Stage4_3').style.display="none";
    document.getElementById('fail_screen').style.display="none";
}

//Resets everything and sends user back to initial screen
function GameOver(){
    progress_counter = 0;
    speechSynthesis.cancel();
    ResetPictures();
    document.getElementById('home').style.display="block";

}

//Sets what to do in France
function PrepStage2() {
    progress_counter = 1;
    ResetPictures ();
    document.getElementById('Command_Center').style.display="block";
    document.getElementById('Stage2_France').style.display="block";
    TTS(prompt_2);
}

//Sets what to do in Mexico part 1
function PrepStage3() {
    progress_counter = 2;
    ResetPictures();
    document.getElementById('Command_Center').style.display="block";
    document.getElementById('Stage3_Mexico').style.display="block";
    TTS(prompt_3);
    Thief1();
}
var moveid = null;
function Thief1 (){
    document.getElementById('thief').style.display="inline";
    var movethief = document.getElementById('container2');
    var ypos = 200;
    var xpos = 280;
    clearInterval(moveid);
    moveid = setInterval(frame, 10);
    function frame() {
        if (ypos == 350) {
            clearInterval(moveid);
        } else {
            ypos++;
            xpos++;
            movethief.style.bottom = ypos + 'px';
            movethief.style.right = (xpos*0.3) + 'px';
        }
    }  
}

//Sets what to do in Mexico part 2
function PrepStage4() {
    progress_counter = 3;
    ResetPictures();
    document.getElementById('Command_Center').style.display="block";
    document.getElementById('Stage4_2').style.display="block";
    TTS(prompt_4);
    Thief2();
}

function Thief2 (){
    document.getElementById('thief2').style.display="inline";
    var movethief2 = document.getElementById('container3');
    var ypos = 180;
    var xpos = 190;
    clearInterval(moveid);
    moveid = setInterval(frame, 10);
    function frame() {
        if (ypos == 380) {
            clearInterval(moveid);
        } else {
            ypos++;
            xpos++;
            movethief2.style.bottom = (ypos*0.75) + 'px';
            movethief2.style.left = xpos + 'px';
        }
    }  
}

//Sets what to do in Mexico part 2
function PrepStage5() {
    progress_counter = 4;
    ResetPictures();
    document.getElementById('Command_Center').style.display="block";
    document.getElementById('Stage4_3').style.display="block";
    TTS(prompt_5);
    Thief3();
}

function Thief3 (){
    document.getElementById('thief3').style.display="inline";
    var movethief2 = document.getElementById('container4');
    movethief2.style.top= '200px';
    var pos = 320;
    clearInterval(moveid);
    moveid = setInterval(frame, 10);
    function frame() {
        if (pos == 600) {
            clearInterval(moveid);
        } else {
            pos++;
            movethief2.style.right = pos + 'px';
        }
    }

}

//Sets what to do in America on fail
function PrepFailAmerica() {
    ResetPictures();
    document.getElementById('Stage2_America').style.display="block";
    document.getElementById('fail_screen').style.display="block";
    TTS(prompt_2_fail);
}


//Sets what to do in UK on fail
function PrepFailUK() {
    progress_counter = 6;
    ResetPictures ();
    document.getElementById('Stage3_England').style.display="block";
    document.getElementById('fail_screen').style.display="block";
    TTS(prompt_3_fail_uk);
}

//Sets what to do in Korea on fail
function PrepFailKorea() {
    progress_counter = 7;
    ResetPictures();
    document.getElementById('Stage3_Korea').style.display="block";
    document.getElementById('fail_screen').style.display="block";
    TTS(prompt_3_fail_korea);
}

//Runs TTS based on utterance, as determined by progress
function TTS(utterance) {
    speechSynthesis.cancel();
    let utter = new SpeechSynthesisUtterance();
    utter.lang=language_var;
    utter.text = utterance;
    window.speechSynthesis.speak(utter);
}

//What to do if user pushes "relisten" button
function ReListen(){
    if (progress_counter == 0) {
        utterance = prompt_1;
    } else if (progress_counter == 1) {
        utterance = prompt_2;
    } else if (progress_counter == 2) {
        utterance = prompt_3;
    } else if (progress_counter == 3) {
        utterance = prompt_4;
    } else if (progress_counter == 4) {
        utterance = prompt_5;
    }
    TTS(utterance);
}

//What to do if user pusehs "get help button"
function GetHelp() {
    if (progress_counter == 0) {
        utterance = prompt_1_help;
    } else if (progress_counter == 1) {
        utterance = prompt_2_help;
    } else if (progress_counter == 2) {
        utterance = prompt_3_help;
    } else if (progress_counter == 3) {
        utterance = prompt_3_help2;
    } else if (progress_counter == 4) {
        utterance = prompt_3_help3;
    }
    TTS(utterance);
}

//Initializes ASR
function SpeakNow() {
    speechSynthesis.cancel();
    document.getElementById('speech_output').innerHTML = "(Awaiting Command)";
    window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
    recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.lang = language_var;
    recognition.interimResults = true;
    recognition.onresult = disp;
    recognition.start();
}
//handles response - provides interim results and sends final result to "JudgeSpeech" upon completion
function disp(event) {
    var interim_transcript = '';
    var results = event.results;
    document.getElementById('speech_output').style.color = "white";
    for (var i = event.resultIndex; i < results.length; ++i) {
        if (results[i].isFinal) {
            JudgeSpeech(results[i][0].transcript);
            document.getElementById('speech_output').style.color = "red";
        } else {
            interim_transcript +=event.results[i][0].transcript;
            document.getElementById('speech_output').innerHTML = interim_transcript;
        }
    }
}

//Judges what to do based on speech result, progress counter, and whether or not user was looking for clues.
function JudgeSpeech(result) {
    if (progress_counter == 0) {
        if (clues == true) {
            if (result.includes("journal")) {
                document.getElementById('speech_output').innerHTML = "Search her journal";
                TTS(loc1_journal);
            } else if (result.includes("bag")) {
                document.getElementById('speech_output').innerHTML = "Search her bag";
                TTS(loc1_bag);
            } else if (result.includes("desk")) {
                document.getElementById('speech_output').innerHTML = "Look under the desk";
                TTS(loc1_desk);
            } else {document.getElementById('speech_output').innerHTML = "I don't understand what to do - please try again.";}
        } 
        
        else {
            if (result.includes("France")){
                document.getElementById('speech_output').innerHTML = "Follow the thief to France.";
                PrepStage2();
            } else if (result.includes("America")){
                document.getElementById('speech_output').innerHTML = "I don't understand what to do - please try again.";
                PrepFailAmerica();
            } else {document.getElementById('speech_output').innerHTML = "I don't understand what to do - please try again.";}
        }
    }  
    if (progress_counter == 1) {
        if (clues == true) {
            if (result.includes("table")) {
                document.getElementById('speech_output').innerHTML = "Search her table";
                TTS(loc2_table);
            } else if (result.includes("inside")) {
                document.getElementById('speech_output').innerHTML = "Check inside";
                TTS(loc2_inside);
            } else if (result.includes("tree")) {
                document.getElementById('speech_output').innerHTML = "Look behind the tree";
                TTS(loc2_tree);
            } else {document.getElementById('speech_output').innerHTML = "I don't understand what to do - please try again.";}
        } 
        else {
            if (result.includes("Mexico")){
                document.getElementById('speech_output').innerHTML = "Follow the thief to Mexico.";
                PrepStage3();
            } else if (result.includes("England") || result.includes("the UK")){
                document.getElementById('speech_output').innerHTML = "Follow the thief to England.";
                PrepFailUK();
            } else if (result.includes("Korea")) {
                document.getElementById('speech_output').innerHTML = "Follow the thief to Korea.";
                PrepFailKorea();
            } else {document.getElementById('speech_output').innerHTML = "I don't understand what to do - please try again.";}
        }
    }
    if (progress_counter == 2) {
        if (result.includes("run") && result.includes("beach")) {
            document.getElementById('speech_output').innerHTML = "run along/up/down the beach";
            PrepStage4();
        } else {
            document.getElementById('speech_output').innerHTML = "I don't understand what to do - please try again.";
        }
    }
    if (progress_counter == 3) {
        if (result.includes("up") && result.includes("stairs") || result.includes("up") && result.includes("steps")) {
            document.getElementById('speech_output').innerHTML = "run up the stairs/steps";
            PrepStage5();
        } else {
            document.getElementById('speech_output').innerHTML = "I don't understand what to do - please try again.";
        }
    }
    if (progress_counter == 4) {
        if (result.includes("in") && result.includes("dining room")) {
            document.getElementById('speech_output').innerHTML = "barge into the dining room";
            Success();
        } else if (result.includes("living room")) {
            document.getElementById('speech_output').innerHTML = "barge into the living room";
            alert("The thief crashed through the window and got away! Press 'ok' to start over.");
            GameOver();
        } else {
            document.getElementById('speech_output').innerHTML = "I don't understand what to do - please try again.";
        }
    }
}

//Handles look for clues button and sends to pipeline
function MakeCommand() {
    clues = true;
    SpeakNow();
}

//Hanldes make a decision about location button and sends to pipeline
function MakeDecision () {
    clues = false;
    SpeakNow();
}

function ChooseLanguage() {
    language_var = document.getElementById('select_ln').value;
}

function Success(){
    ResetPictures();
    document.getElementById('success_screen').style.display="block";
}