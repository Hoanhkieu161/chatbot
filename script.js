
function talk(){
    var know = {
        "Hi" : "Hello!!",
        "who are you?" : "I'm a Robot. :)",
        " Nice to meet you" : "oh! me too ><",
        "How are you today?" : "Thank You So Much, I'm fine <3",
        "Bye" : "Okay! Will meet soon. TC:).."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
}
