//Holds the data for prompts for each stage. Maybe there is a better way to do this, but I am, admittedly, an idiot, so here it is in the JS iteslf.
const data = [
    {
      "location": "England",
      "talk": "As soon as we called the British police, they noticed her sightseeing in London. She ran away, but we heard from witnesses that she is thinking about going to either",
      "hint": "I recommend looking in the bus, checking the castle, and searching around the clock tower.",
      "look1": "the bus",
      "look2": "the castle",
      "look3": "around the clock tower",
      "clue1_s": "We searched the bus carefully. She was definitely here, and ",
      "clue1_a": "We found a journal. There is an entry that says she plans on visiting Europe.",
      "clue2_s": "It seems that the thief visited the castle and was talking about food, and ",
      "clue2_a": "We hear that she can't wait to eat fish and chips ",
      "clue3_s": "Big Ben is a famous tourist attraction, but we think we found something that belongs to the thief, and ",
      "clue3_a": "It is a book called how to converse with native English speakers."
    },
    {
      "location": "Mexico",
      "talk": "As soon as we called the Mexican police, they noticed her in the pool at a resort hotel. She ran away, but we heard from witnesses that she is thinking about going to either",
      "hint": "I recommend looking in the hotel, checking the restaurant, and searching around the beach.",
      "look1": "the hotel",
      "look2": "the restaurant",
      "look3": "around the beach",
      "clue1_s": "We checked the hotel and found her room, and ",
      "clue1_a": "It seems the thief left behind an expensive swimsuit that she had just bought.",
      "clue2_s": "We talked to the staff at the restaurant, and ",
      "clue2_a": "Apparently, she is looking forward to eating spicy food at her next destination.",
      "clue3_s": "Someone dropped something in the sand, and ",
      "clue3_a": "It is a Spanish to English dictionary."
    },
    {
      "location": "Korea",
      "talk": "As soon as we called the Korean police, they noticed her in the city. She ran away, but we heard from witnesses that she is thinking about going to either",
      "hint": "I recommend searching the street, checking the coffee shop, and looking behind the car.",
      "look1": "the street",
      "look2": "the coffee shop",
      "look3": "behind the car",
      "clue1_s": "We looked around the street, and ",
      "clue1_a": "We found a journal. There is an entry that says she wants to visit the location of her favorite television drama ",
      "clue2_s": "We talked to the staff at the coffee shop, and ",
      "clue2_a": "Apparently, she is looking forward to eating spicy food at her next destination ",
      "clue3_s": "Someone dropped something behind the car, and ",
      "clue3_a": "It is the results of a blood type test. Maybe she will need to talk about it at her next destination."
    },
    {
      "location": "France",
      "talk": "As soon as we called the French police, they noticed her in a cafe. She quickly ran away, but we heard from witnesses that she is thinking about going to either",
      "hint": "I recommend searching her table, checking in the cafe, and looking behind the tree.",
      "look1": "the table",
      "look2": "the cafe",
      "look3": "behind the tree",
      "clue1_s": "We looked under her table, and ",
      "clue1_a": "We found a journal entry that says she plans on visiting Europe.",
      "clue2_s": "The waiter says that she was excited to try some different food, and ",
      "clue2_a": "We heard that she is looking forward to fine cheese and wine.",
      "clue3_s": "Someone seems to have dropped something behind the tree, and ",
      "clue3_a": "It is a guidebook. There are several articles about the Eiffel Tower circled."
    },
    {
      "location": "America",
      "talk": "We called the American police and they found her hiding in the countryside. She quickly ran away, but we heard from witnesses that she is thinking about going to either",
      "hint": "I recommend searching the tractor, checking in the barn, and looking behind the tree.",
      "look1": "the tractor",
      "look2": "the barn",
      "look3": "behind the tree",
      "clue1_s": "We searched the tractor. We are sure she used it, and ",
      "clue1_a": "It seems that the thief left behind a brochure for the Grand Canyon.",
      "clue2_s": "We talked to the workers in the barn. They said the thief kept talking about food, and  ",
      "clue2_a": "We heard that she will be able to eat a lot of barbecue at her next location.",
      "clue3_s": "Someone seems to have dropped something behind the tree, and ",
      "clue3_a": "It is a book called how to converse with native English speakers."
    },
    {
      "location": "Brazil",
      "talk": "As soon as we called the Brazilian police, they noticed her near a large city. She ran away, but we heard from witnesses that she is thinking about going to either",
      "hint": "I recommend checking the jungle, searching the city, and looking near the statue.",
      "look1": "the jungle",
      "look2": "the city",
      "look3": "near the statue",
      "clue1_s": "We cheked the edge of the jungle, and ",
      "clue1_a": "It seems the thief left behind equipment for traveling in a rain forrest ",
      "clue2_s": "We talked to people in the city about her dining habits, and ",
      "clue2_a": "We heard that she will be able to eat a lot of barbecue at her next location.",
      "clue3_s": "This statue is a very popular tourist spot in Brazil. However, we think we found a clue, and ",
      "clue3_a": "It is a Portugese to English dictionary."
    },
    {
      "location": "Australia",
      "talk": "We called the Australian police and they found her sightseeing in Sydney. She ran away, but we heard from witnesses that she is thinking about going to either",
      "hint": "I recommend checking the beach, searching the city, and looking near the bridge.",
      "look1": "the beach",
      "look2": "the city",
      "look3": "near the bridge",
      "clue1_s": "We checked the beach and it is clear that the thief came here, and ",
      "clue1_a": "It seems the thief left behind an expensive swimsuit that she had just bought.",
      "clue2_s": "We talked to people in the city about her dining habits, and ",
      "clue2_a": "Apparently, she is very worried about eating kangaroo meat.",
      "clue3_s": "We searched the bridge all day and found an important clue, and ",
      "clue3_a": "It is a book called how to converse with native English speakers."
    },
    {
      "location": "India",
      "talk": "We called the Indian police and they found her sightseeing at the Free City Palace in Udaipur. She ran away, but we heard from witnesses that she is thinking about going to either",
      "hint": "I recommend checking the river, searching the palace, and looking in the boat.",
      "look1": "the river",
      "look2": "the palace",
      "look3": "in the boat",
      "clue1_s": "We checked the river carefully, and ",
      "clue1_a": "We found her notebook. She wrote that her next destination has the second most people in the world.",
      "clue2_s": "We talked to the workers in the palace. They told us about her eating habits, and ",
      "clue2_a": "According to our sources, she will be eating curry at her next destination.",
      "clue3_s": "Someone seems to have left something important in the boat, and ",
      "clue3_a": "It is a book about the life of Gandhi."
    },
    {
      "location": "Egypt",
      "talk": "We called the Egyptian police and they found her near Giza. She ran away, but we heard from witnesses that she is thinking about going to either",
      "hint": "I recommend searching the desert, checking the hotel, and looking near the pyramid.",
      "look1": "the desert",
      "look2": "the hotel",
      "look3": "near the pyramid",
      "clue1_s": "We cheked the desert and think that the thief was here, and ",
      "clue1_a": "It seems that the thief left behind equipment for traveling in the desert.",
      "clue2_s": "We talked to the hotel staff. They said she always ate at the restaurant there, and ",
      "clue2_a": "It seems that the thief will enjoy eating falafel at her next location.",
      "clue3_s": "The pyramids are a famous tourist spot in Egypt, but we found something that belongs to the thief, and ",
      "clue3_a": "It is a book about the pyramids."
    },
    {
      "location": "Italy",
      "talk": "We called the Italian police and they found her in Sicily. She ran away, but we heard from witnesses that she is thinking about going to either",
      "hint": "I recommend searching the street, checking the restaurant, and looking behind the door.",
      "look1": "the street",
      "look2": "the restaurant",
      "look3": "behind the door",
      "clue1_s": "We searched the street carefully and it is clear that the thief was here, and ",
      "clue1_a": "We found a journal. There is an entry that says she plans on visiting Europe.",
      "clue2_s": "We talked to the staff at the restaurant, and ",
      "clue2_a": "It seems that the thief will enjoy eating pasta at her next location.",
      "clue3_s": "Someone left in a hurry and dropped something important behind this door, and ",
      "clue3_a": "It is a guidebook. She circled a passage about the Roman Colleseum."
    }
  ];

//Variables used in code
var progress_counter = 0;
var language_var = 'en-US';
var current_loc = 0;
var correct_next = 0;
var incorrect1 = 0;
var incorrect2 = 0;
var prompt1 = "";
var speed = 1.0;
var languageVoice = '';
let voices = []
const options = document.getElementById('voices');
const hasSynth = 'speechSynthesis' in window
if (hasSynth) {
  voices = speechSynthesis.getVoices()
  
  speechSynthesis.addEventListener('voiceschanged', () => {
    voices = speechSynthesis.getVoices()
  })
}

setTimeout(GetVoices, 1000);

//Boolean that determines whether something is a direction to a new location or a search for clues.
var clues = true;

//Randomizes locations
function Randomize() {
    current_loc = Math.floor(Math.random() * data.length);
    do {correct_next = Math.floor(Math.random() * data.length);}
       while (correct_next == current_loc);
    do {incorrect1 = Math.floor(Math.random() * data.length);}
       while (incorrect1 == current_loc || incorrect1 == correct_next);
    do {incorrect2 = Math.floor(Math.random() * data.length);}
       while (incorrect2 == current_loc || incorrect2 == correct_next || incorrect2 == incorrect1);
    //Set up first prompt
    let correct = data[correct_next].location;
    let wrong1 = data[incorrect1].location;
    let wrong2 = data[incorrect2].location;
    let order = Math.random();
    if (order >= 0.83) {
        prompt1 = data[current_loc].talk + " " + correct + ", " + wrong1 + ", or " + wrong2;
    } else if (order >=0.67) {
        prompt1 = data[current_loc].talk + " " + correct + ", " + wrong2 + ", or " +wrong1; 
    } else if (order >=0.5) {
        prompt1 = data[current_loc].talk + " " + wrong1 + ", " + correct + ", or " +wrong2; 
    } else if (order >=0.33) {
        prompt1 = data[current_loc].talk + " " + wrong1 + ", " + wrong2 + ", or " +correct; 
    } else if (order >=0.17) {
        prompt1 = data[current_loc].talk + " " + wrong2 + ", " + wrong1 + ", or " +correct; 
    } else {
        prompt1 = data[current_loc].talk + " " + wrong2 + ", " + correct + ", or " +wrong1;
    }
}

function GetNewLocation(current_loc) {
    do {correct_next = Math.floor(Math.random() * data.length);}
    while (correct_next == current_loc);
    do {incorrect1 = Math.floor(Math.random() * data.length);}
    while (incorrect1 == current_loc || incorrect1 == correct_next);
    do {incorrect2 = Math.floor(Math.random() * data.length);}
    while (incorrect2 == current_loc || incorrect2 == correct_next || incorrect2 == incorrect1);
    //Set up first prompt
    let correct = data[correct_next].location;
    let wrong1 = data[incorrect1].location;
    let wrong2 = data[incorrect2].location;
    let order = Math.random();
    if (order >= 0.83) {
        prompt1 = data[current_loc].talk + " " + correct + ", " + wrong1 + ", or " + wrong2;
    } else if (order >=0.67) {
        prompt1 = data[current_loc].talk + " " + correct + ", " + wrong2 + ", or " +wrong1; 
    } else if (order >=0.5) {
        prompt1 = data[current_loc].talk + " " + wrong1 + ", " + correct + ", or " +wrong2; 
    } else if (order >=0.33) {
        prompt1 = data[current_loc].talk + " " + wrong1 + ", " + wrong2 + ", or " +correct; 
    } else if (order >=0.17) {
        prompt1 = data[current_loc].talk + " " + wrong2 + ", " + wrong1 + ", or " +correct; 
    } else {
        prompt1 = data[current_loc].talk + " " + wrong2 + ", " + correct + ", or " +wrong1;
    }
}

//Starts the game from the first stage
function StartGame(){
    Randomize();
    progress_counter = 0;
    document.getElementById('home').style.display="none";
    document.getElementById('Command_Center').style.display="block";
    let current = data[current_loc].location;
    document.getElementById(current).style.display="block";
    TTS(prompt1);
}

function ResetPictures() {
    document.getElementById('success_screen').style.display="none";
    document.getElementById('home').style.display="none";
    document.getElementById('Command_Center').style.display="none";
    document.getElementById('England').style.display="none";
    document.getElementById('Mexico').style.display="none";
    document.getElementById('Korea').style.display="none";
    document.getElementById('France').style.display="none";
    document.getElementById('America').style.display="none";
    document.getElementById('Brazil').style.display="none";
    document.getElementById('Australia').style.display="none";
    document.getElementById('India').style.display="none";
    document.getElementById('Egypt').style.display="none";
    document.getElementById('Italy').style.display="none";
    document.getElementById('fail_screen').style.display="none";
}

//Resets everything and sends user back to initial screen
function GameOver(){
    progress_counter = 0;
    speechSynthesis.cancel();
    ResetPictures();
    document.getElementById('home').style.display="block";

}

//Creates new stage for each one past the initial
function PrepNextStage() {
    if (progress_counter == 3) {
        Success();
    } else {
    progress_counter +=1;
    ResetPictures();
    let current = data[correct_next].location;
    current_loc = correct_next;
    document.getElementById('Command_Center').style.display="block";
    document.getElementById(current).style.display="block";
    GetNewLocation(current_loc);
    TTS(prompt1);
    }
}

function FailStage(answer) {
    ResetPictures();
    document.getElementById('fail_screen').style.display="block";
    document.getElementById(answer).style.display="block";
    let fail = "We are here in " + answer + " searching everywhere for the thief, but we can't find any clues. I think you must have picked the wrong location!"
    TTS(fail);
}

//Runs TTS based on utterance, as determined by progress
async function TTS1(utterance) {
    await Randomize();
    speechSynthesis.cancel();
    let utter = new SpeechSynthesisUtterance();
    utter.lang=language_var;
    utter.voice = voices.find(voice=> voice.name === options.value);
    utter.rate = speed;
    utter.text = utterance;
    window.speechSynthesis.speak(utter);
}

async function TTS2(utterance) {
    await GetNewLocation();
    speechSynthesis.cancel();
    let utter = new SpeechSynthesisUtterance();
    utter.lang=language_var;
    utter.voice = voices.find(voice=> voice.name === options.value);
    utter.rate = speed;
    utter.text = utterance;
    window.speechSynthesis.speak(utter);
}

function TTS(utterance) {
    speechSynthesis.cancel();
    let utter = new SpeechSynthesisUtterance();
    utter.lang=language_var;
    utter.voice = voices.find(voice=> voice.name === options.value);
    utter.rate = speed;
    utter.text = utterance;
    window.speechSynthesis.speak(utter);
}

//What to do if user pushes "relisten" button
function ReListen(){
    TTS(prompt1);
}

//What to do if user pusehs "get help button"
function GetHelp() {
    utterance = data[current_loc].hint;
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
    if (clues == true) {
        let look1 = data[current_loc].look1;
        let look2 = data[current_loc].look2;
        let look3 = data[current_loc].look3;
        let clue1_s = data[current_loc].clue1_s;
        let clue1_a = data[correct_next].clue1_a;
        let clue2_s = data[current_loc].clue2_s;
        let clue2_a = data[correct_next].clue2_a;
        let clue3_s = data[current_loc].clue3_s;
        let clue3_a = data[correct_next].clue3_a;
        let result2 = result.toLowerCase();
        if (result2.includes(look1)) {
            document.getElementById('speech_output').innerHTML = "Search " + look1;
            let utterance = clue1_s + clue1_a;
            TTS(utterance);
        } else if (result2.includes(look2)) {
            document.getElementById('speech_output').innerHTML = "Check " + look2;
            let utterance = clue2_s + clue2_a;
            TTS(utterance);
        } else if (result2.includes(look3)) {
            document.getElementById('speech_output').innerHTML = "Look " + look3;
            let utterance = clue3_s + clue3_a;
            TTS(utterance);
        } else {document.getElementById('speech_output').innerHTML = "I don't understand what to do - please try again.";}
    } 
    
    else {
        let correct = data[correct_next].location;
        let wrong1 = data[incorrect1].location;
        let wrong2 = data[incorrect2].location;
        if (result.includes("go" && correct)){
            document.getElementById('speech_output').innerHTML = "Follow the thief to " + correct;
            PrepNextStage();
        } else if (result.includes("go" && wrong1)){
            document.getElementById('speech_output').innerHTML = "Follow the thief to " + wrong1;
            FailStage(wrong1);
        } else if (result.includes("go" && wrong2)) {
            document.getElementById('speech_output').innerHTML = "Follow the thief to " + wrong2;
            FailStage(wrong2);
        } else {document.getElementById('speech_output').innerHTML = "I don't understand what to do - please try again.";}
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

function Success(){
    ResetPictures();
    document.getElementById('success_screen').style.display="block";
}


//Handles voice options - I usually use it with a timeout; if this is called TOO early, it will be called before the voices load and then it will be blank.
function GetVoices(){
    const initOpt = document.createElement('option')
    if (!voices.length && hasSynth) {
    voices = speechSynthesis.getVoices()
    }
    initOpt.append(document.createTextNode('-- select voice --'))
    options.append(initOpt)
    voices.forEach(voice => {
    const option = document.createElement('option')
    option.value = voice.name;
    if (voice.lang.includes('en')) {
            var forkids = '';
            if(voice.lang = "en-GB"){
                forkids = "British English"
            } if (voice.lang = "en-US") {
                forkids = "American English"
            } else {forkids = voice.lang}
            option.append(document.createTextNode(`${forkids} : ${voice.name}`))
            options.append(option)
        }
    })
    options.style.display = 'inline';
  }


  
  function selectSpeed(){
    speed = document.getElementById('speedRNG').value;
    document.getElementById('speedCurrent').innerHTML = speed;
  }