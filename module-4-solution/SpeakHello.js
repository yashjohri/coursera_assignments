{

	var helloSpeaker={};

    helloSpeaker.speak=function (name) {
        var speakWord = "Hello";
        console.log(speakWord + " " + name);
    }

    window.helloSpeaker=helloSpeaker;

}(window);