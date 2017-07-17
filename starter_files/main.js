//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, color, hungry) {
  this.name = name;
  this.color = color;
  this.hungry = hungry;
  this.satus = 'normal';

}

// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog('sadie', 'black', false);
let moonshine = new Dog('moonshine', 'white', true);
let atticus = new Dog('atticus')
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name;
  this.cool = cool;
}

Human.prototype.pet = function(dogName){
  dogName.status = 'happy';
}

Human.prototype.feed = function(dogName){
  dogName.hungry = false;
}
// Instances of Human
// Needed: mason, julia
let mason = new Human('mason', false);
let julia = new Human('julia', true);
