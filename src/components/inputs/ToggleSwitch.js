import './toggle-switch.css'

function ToggleSwitch(props) {

  return (
    <label class="switch">
      <input type="checkbox" />
      <span class="toggle-switch"></span>
    </label>
  );
}

export default ToggleSwitch;
