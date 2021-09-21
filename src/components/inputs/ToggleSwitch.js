import './toggle-switch.css'

function ToggleSwitch(props) {
  return (
    <label className="toggle-switch">
      <input onChange={props.onCheckboxChange} checked={props.value} type="checkbox" />
      <span className="toggle-switch__thumb"></span>
    </label>
  );
}

export default ToggleSwitch;
