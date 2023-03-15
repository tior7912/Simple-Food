
const rangeSlider = document.querySelector(".range-slider");
  if(rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [100, 1000],
      connect: true,
      step: 1,
      range: {
          'min': [100],
          'max': [1000]
      }
  });

  const input0 = document.querySelector(".input-from");
  const input1 = document.querySelector(".input-before");
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on("update", function(values, handle){
    inputs[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;

    console.log(arr);

    rangeSlider.noUiSlider.set(arr)
  };

  inputs.forEach((el, index) => {
    el.addEventListener("change", (e)=> {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
