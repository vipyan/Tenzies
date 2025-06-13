export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    }

    

function getDiceEmoji(value) {
  let face;
  switch (value) {
    case 1:
      face = "🐭";
      break;
    case 2:
      face = "🐶";
      break;
    case 3:
      face = "🐰";
      break;
    case 4:
      face = "🦊";
      break;
    case 5:
      face = "🐼";
      break;
    case 6:
      face = "🦁";
      break;
    default:
      face = "❓";  
  }
  return face;
}

    
    return (
        <button 
            style={styles}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, 
            ${props.isHeld ? "held" : "not held"}`}
        >{getDiceEmoji(props.value)}</button>
    )
}