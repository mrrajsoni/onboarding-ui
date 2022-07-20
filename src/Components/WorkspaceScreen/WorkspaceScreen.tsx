import { useState } from "react";
import Button from "../CommonComponents/Button/Button";
import Input from "../CommonComponents/Input/Input"

const WorkspaceScreen = ({ onButtonClick }: { onButtonClick: (status: string) => void }) => {
    const [fullName, setfullName] = useState("");
    const [displayName, setdisplayName] = useState("");


    return (
        <section className="container WorkspaceScreen-container">
            <h3>Let's set up a home for all your work</h3>
            <p>You can always create another workspace later.</p>

            <div className="form-container">
                <Input label="Workspace Name" onChange={(e) => setfullName(e.target.value)} value={fullName} />
                <div className="workspace-url-container">
                    <Input label="Workspace URL" showDisabledInput={true} label2="(optional)" onChange={(e) => setdisplayName(e.target.value)} value={displayName} />
                </div>

                <Button label="Create Workspace" onClick={() => onButtonClick("completed")} />
            </div>
        </section>
    )
}

export default WorkspaceScreen