import Button from "../CommonComponents/Button/Button";
import Tick from "../../Assets/tick.png"
import "./EndScreen.css"

const EndScreen = () => {

    const onButtonClick = () => {

    }

    return (
        <section className="container endscreen-container">
            <img className="tick-icon" src={Tick} alt="tick-mark" />
            <h3>Congraluations, Eren!</h3>
            <p>You have completed onboarding, you can start using the Eden!</p>
            <div className="form-container mt-zero">
                <Button label="Launch Eden" onClick={onButtonClick} />
            </div>
        </section>
    )
}

export default EndScreen