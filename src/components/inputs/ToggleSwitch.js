import './toggle-switch.css'

function ToggleSwitch(props) {
  var value = props.switchValue;
  var onCheckboxChange = props.onCheckboxChange;

  return (
    <label className="switch">
      <input onChange={onCheckboxChange} checked={value} type="checkbox" />
      <span className="toggle-switch"></span>
    </label>
  );
}

export default ToggleSwitch;
