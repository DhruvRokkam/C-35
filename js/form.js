class Form{
    constructor(){

    }
    display(){
        var title=createElement('h2')
        title.html("car raceing game")
        title.position(130,0);
        var input=createInput("name");
        input.position(130,160);
        var button=createButton('play')
        var greeting=createElement('h3')
        button.position(250,200);
        button.mousePressed(function(){
            input.hide()
            button.hide();
            var name=input.value();
            playerCount++;
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("hello"+name);
            greeting.position(130,160);

        })
    }
}