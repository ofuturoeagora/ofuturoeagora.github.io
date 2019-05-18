    var now = new Date().getHours();
    
    var fr_greetings = ["fr","Bonjour ! Soyez le bienvenu !","Bonjour ! Soyez le bienvenu !","Bonsoir ! Soyez le bienvenu !"];
    var es_greetings = ["es","Buenos días! Sea bienvenido!","Buenas tardes! Sea bienvenido!","Buenas noches! Sea bienvenido!"];
    var en_greetings = ["en","Good morning! You are welcome!","Good afternoon! You are welcome!","Good evening! You are welcome!"];
    var pt_greetings = ["pt","Bom dia! Seja bem-vindo!","Boa tarde! Seja bem-vindo!","Boa noite! Seja bem-vindo!"];

    if (location.toString().includes("/fr/")) {
        var greetings = fr_greetings;
    }
    else if (location.toString().includes("/en/")){
        var greetings = en_greetings;
    }
    else if (location.toString().includes("/es/")){
        var greetings = es_greetings;
    }
    else{
        var greetings = pt_greetings;
    }
   
    if (now >= 3 && now <12){
        document.getElementsByTagName("h2")[0].innerHTML = greetings[1];
    }
    else if (now >= 12 && now <18){
        document.getElementsByTagName("h2")[0].innerHTML = greetings[2];
    }
    else {
        document.getElementsByTagName("h2")[0].innerHTML = greetings[3];
    }