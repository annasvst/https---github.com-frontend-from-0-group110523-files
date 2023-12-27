import './style.css';

export const Button = (props) => {

  function handleClick () {
    alert(`${props.title} button clicked!`);
  };

  return (
    <button
      className='btn'
      onClick={handleClick}>
        {props.title}
    </button>
  )
};