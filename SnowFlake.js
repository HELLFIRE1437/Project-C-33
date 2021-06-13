class SnowFlake{
    constructor(x,y){
        this.sprite = createSprite(x,y);
        var i = Math.round(random(1,3));
        switch (i) {
            case 1:
                this.sprite.addImage("snow",snow1Img);
                this.sprite.scale = 0.1 ;
                this.sprite.rotationSpeed = 3 ;
                break;
            case 2:
                this.sprite.addImage("snow",snow1Img);
                this.sprite.scale = 0.1 ;
                this.sprite.rotationSpeed = 3 ;
                break;
            case 3:
                this.sprite.addImage("snow",snow2Img);
                this.sprite.scale = 0.1 ;
                break;
            default:
                break;
        }
        this.sprite.velocityY = random(1,2);
    }
    update(){
        if(this.sprite.y > height + 10){
            this.sprite.x = random(10,665);
            this.sprite.y = -10
        }
        if(this.sprite.velocityY === 0){
            console.log(this.sprite);
        }
    }
}