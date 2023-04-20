     // Define responses 
     const responses = {
        "hello": "Hi there!",
        "how are you": "I'm doing well, thank you for asking.",
        "what's your name": "My name is Chatbot.",
        "bye": "Goodbye!",
        "co2": "Carbon Dioxide",
        "B Coder": "Subscribe",
        "top 3 actor in world": "Tom Cruise, Paul Walker, The Rock",
        "who is messi" : "Foot Player",
        "expensive car in world": "Rolls Royce! I know.",
        "write hello world code in js":"console.log('Hello World')",
        "type of loop in js":"For loop, While loop, Do While Loop"
    };
    
    
    function getResponse(message) {
        message = message.toLowerCase();
        for (let key in responses) {
            if (message.includes(key)) {
                return responses[key];
            }
        }
        return "I'm sorry, I am  AI fool...";
    }
    
    
    function send() {
        let input = document.getElementById("input").value;
        if (input) {
            let div = document.createElement('div');
            let p_user = document.createElement('p');
            let span_user = document.createElement('span');
            span_user.innerText = "User:";
            span_user.className="user-title";
            p_user.append(span_user);
            p_user.append(input);


            let p_bot = document.createElement('p');
            p_bot.className="p-bot"
            let span_bot = document.createElement('span');
            span_bot.innerText = "Bot:"
            span_bot.className="bot-title";
            p_bot.append(span_bot);
            p_bot.append(getResponse(input));

            



            document.getElementById("chat").append(p_user);
            document.getElementById("chat").append(p_bot);
         
            console.log(document.getElementById("chat"))
            document.getElementById("input").value = "";
        }
    }