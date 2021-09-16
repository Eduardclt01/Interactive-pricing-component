import './slider.css'

function Slider(props) {

  return (
    <input type="range" min="1" max="100"  class="slider" id="customerPrice" />
  );
}

export default Slider;
