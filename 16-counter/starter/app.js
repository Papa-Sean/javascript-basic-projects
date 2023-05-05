function getElement (selection){
    const element = document.querySelector(selection);
    if(element){
        return element;
    }
    throw new Error(`Please check "${selection}" selector, no such element exists`);
}

function Counter(element,value){
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

    // one way to do it
    // this.increaseBtn.addEventListener('click', this.increase.bind(this));
    // this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
    // this.resetBtn.addEventListener('click',this.reset.bind(this));

    //better way:
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.reset = this.reset.bind(this);

    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
    this.resetBtn.addEventListener('click', this.reset);
}

Counter.prototype.increase = function(){
    //console.log(this);
    this.value++;
    this.valueDOM.textContent = this.value;
}
Counter.prototype.decrease = function(){
    // console.log(this);
    this.value--;
    this.valueDOM.textContent = this.value;
}
Counter.prototype.reset = function(){
    // console.log(this);
    this.value = 0;
    this.valueDOM.textContent = this.value;
}

const firstCounter = new Counter(getElement('.first-counter'),100);
const secondCounter = new Counter(getElement('.second-counter'),200);

// firstCounter.increase();
// secondCounter.reset();


