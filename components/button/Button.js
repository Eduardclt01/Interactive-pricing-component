import './button.css'

function Button(props) {
  var buttonText = props.buttonText
  var onButtonClick = props.onButtonClick

  return (
    <button onClick={onButtonClick} className='button'>
      {buttonText}
    </button>
  );
}

export default Button;
