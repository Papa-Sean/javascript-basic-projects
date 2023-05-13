const items = [...document.querySelectorAll('.number')];
// console.log(items);

const updateCount = (el) =>{
    // console.log(el);
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value/1000);
    let initialValue = 0;

    const increastCount = setInterval(()=>{
        initialValue += increment;

        if (initialValue > value) {
            el.textContent = `${value}+`;
            clearInterval(increastCount);
            return;
        }


        el.textContent = `${initialValue}+`;
    },1)
}

items.forEach((item)=>{
    updateCount(item);
});

