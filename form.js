class Form{
    constructor(){
        this.input = createInput("question1:Name");
        this.input = createInput("answer");
        this.input = createInput("question2:job");
        this.input = createInput("answer");
        this.button = createButton("end");
        this.greeting = createElement("h2");
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState = data.val();
        });
    }
    update(state){
        database.ref('/').update({
            gameState : state
        });
    }
    display(){
        this.input.position(250, 200);
        this.input.position(250, 225);
        this.input.position(250, 250);
        this.input.position(250, 275);
        this.input.position(250, 300);
        this.input.position(250, 325);
        this.button.position(250, 375);
        var title = createElement('h2');
        title.html("answer please");
        title.position(130,50);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            this.greeting.html("Thank You "+ player.name);
            this.greeting.position(130,160);
        })


        form = new Form();
        form.display();
    }
}