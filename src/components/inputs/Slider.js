import './slider.css'

function Slider(props) {
  return (
    <input type="range"
          min={props.minRange}
          max={props.maxRange}
          onChange={props.onSliderChangeFunction}
          value={props.value}
          step={props.sliderStep}
          className="slider"
          id="customerPrice" />
  );
}

export default Slider;
