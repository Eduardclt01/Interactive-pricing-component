import './slider.css'

function Slider(props) {
  var minRange = props.minRange;
  var maxRange = props.maxRange;
  var value = props.userValue;
  var onSliderChangeFunction = props.onSliderChangeFunction;

  return (
    <input type="range" min={minRange} max={maxRange} onChange={onSliderChangeFunction} value={value} className="slider" id="customerPrice" />
  );
}

export default Slider;
