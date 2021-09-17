import './toggle-switch.css'

function ToggleSwitch(props) {

  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="toggle-switch"></span>
    </label>
  );
}

export default ToggleSwitch;
