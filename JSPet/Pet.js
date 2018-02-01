var Pet = function(){
  this.name = "Alex"
  this.eat = "am am";
  this.dance = "good song";
  this.fly = "I belive i can fly";
  this.sleep = "zzzzz"
  this.move = function(){
    console.log(this.name);
  }

}
var cat = new Pet();
