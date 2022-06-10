let canvas;
let ctx;
let canvasWidth = 1400
let canvasHeight = 1000
let keys = []

document.addEventListener('DOMContentLoaded', SetupCanvas);

function SetupCanvas() {
    canvas = document.getElementById('my-canvas');
    ctx = canvas.getContext('2d')
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width, canvas.height);
    document.body.addEventListener('keydown', function(e){
        keys[e.key] = true;
    })
    document.body.addEventListener('keyup', function(e){
        keys[e.key] = false;
    })
    Render()
}

class Ship {
    constructor() {
        this.visible = true
        this.x = canvasWidth / 2;
        this.y = canvasHeight / 2;
        this.movingForward = false
        this.speed = 0.1
        this.velX = 0
        this.velY = 0
        this.rotateSpeed = 0.001
        this.radius = 15
        this.angle = 0
        this.strokeColor = 'white';
    }

    Rotate() {
        this.angle += this.rotateSpeed * dir
    }

    Update() {
        let radians = this.angle / Math.PI * 180
        if(this.movingForward){
            this.velX += Math.cos(radians) * this.speed
            this.velY += Math.sin(radians) * this.speed
        }
        if(this.x < this.radius){
            this.x = canvas.width
        }
        if(this.x > canvas.width){
            this.x = this.radius
        }
        if(this.y < this.radius){
            this.y = canvas.height
        }
        if(this.y > this.radius){
            this.y = this.radius
        }
        this.velX *= 0.99
        this.velY *= 0.99

        this.x -= this.velX
        this.y -= this.velY

    }
    Draw(){
        ctx.strokeStyle = this.strokeColor
        ctx.beginPath()
        let vertAngle = ((Math.PI * 2) / 3)
        var radians = this.angle / Math.PI * 180
        for(let i = 0; i < 3; i ++){
            ctx.lineTo(this.x - this.radius * Math.cos(vertAngle * i + radians), 
            this.y - this.radius * Math.sin(vertAngle * i + radians))
        }
        ctx.closePath()
        ctx.stroke()
    }
}

let ship = new Ship()

function Render() {

}