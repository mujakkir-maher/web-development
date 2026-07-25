class ToyotaCar {
    start() {
        console.log("start");
    }

    stop() {
        console.log("Stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let lexus = new ToyotaCar();
let landcruser = new ToyotaCar();
landcruser.setBrand("Toyoya Landcruser v8");
lexus.start();
landcruser.stop();
console.log(landcruser.brand);

