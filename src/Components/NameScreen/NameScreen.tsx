import { useState } from "react";
import Button from "../CommonComponents/Button/Button";
import Input from "../CommonComponents/Input/Input"
import "./NameScreen.css"

const NameScreen = ({ onButtonClick }: { onButtonClick: (status: string) => void }) => {
    const [fullName, setfullName] = useState("");
    const [displayName, setdisplayName] = useState("");


    return (
        <section className="container nameScreen-container">
            <h3>Welcome! First things first...</h3>
            <p>You can always change them later.</p>

            <div className="form-container">
                <Input label="Full Name" onChange={(e) => setfullName(e.target.value)} value={fullName} />
                <Input label="Display Name" onChange={(e) => setdisplayName(e.target.value)} value={displayName} />
                <Button label="Create Workspace" onClick={() => onButtonClick("completed")} />
            </div>
        </section>
    )
}

export default NameScreen