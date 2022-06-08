const prompt_1 = "Our police officers have been asking about the thief. We heard that she is planning ot go to either America or France next. However, when we got close to her apartment, she heard us coming and ran away. But, she left behind lots of things on her desk. Can you help us look for clues?"
const prompt_1_help = "I recommend searching her journal, checking her bag, and looking under the desk."



function StartGame(){
    document.getElementById('home').style.display="none";
    document.getElementById('Command_Center').style.display="block";
    document.getElementById('Stage1').style.display="block";
}

function GameOver(){
    document.getElementById('home').style.display="block";
    document.getElementById('Command_Center').style.display="none";
    document.getElementById('Stage1').style.display="none";
    document.getElementById('Stage2_America').style.display="none";
    document.getElementById('Stage2_France').style.display="none";
    document.getElementById('Stage3_England').style.display="none";
    document.getElementById('Stage3_Korea').style.display="none";
    document.getElementById('Stage3_Mexico').style.display="none";
    document.getElementById('Stage4_2').style.display="none";
    document.getElementById('Stage4_3').style.display="none";
}

