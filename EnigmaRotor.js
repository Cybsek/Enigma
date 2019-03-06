var canvas = document.getElementById("enigma");
var ctx = canvas.getContext("2d");
var rotorCount = 0;
class rotor {
    constructor(id, output){
        ++rotorCount;
      this.rotorId = id;
      this.value = 1;
      this.output = [];
      for (var i = 0; i<26; i++){
        this.output.push(output.substring(i*2,i*2+2))
      }
      rotors.push(this);
    }

    fire(value){
        /*if (this.rotorId+1<=rotorCount) {
            console.log
        }*/ 

        return(this.output[value]);
    }
  
    reverseFire(value){
        return(this.output.indexOf(value));
    }

    rotate(){
        this.output.push(this.output.shift());
    }
}