import './slider.css'

function Slider(props) {
  var minRange = props.minRange;
  var maxRange = props.maxRange;
  var value = props.userValue;
  var onSliderChangeFunction = props.onSliderChangeFunction;
  var sliderStep = props.sliderStep;

  return (
    <input type="range" min={minRange} max={maxRange} onChange={onSliderChangeFunction} value={value} step={sliderStep} className="slider" id="customerPrice" />
  );
}

export default Slider;
