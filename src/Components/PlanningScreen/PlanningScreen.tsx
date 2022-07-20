import Button from "../CommonComponents/Button/Button";
import User from "../../Assets/user.png"
import Usergroup from "../../Assets/usergroup.png"
import "./PlanningScreen.css"

interface SelectionBoxProps {
    icon: string,
    title: string,
    desc: string
}
const PlanningScreen = ({ onButtonClick }: { onButtonClick: (status: string) => void }) => {

    const SelectionBox = (props: SelectionBoxProps) => {
        const { desc, icon, title } = props
        return (
            <div className="selectionbox">
                <img src={icon} alt="icon" />
                <h6>{title}</h6>
                <p>{desc}</p>
            </div>
        )
    }
    return (
        <section className="container nameScreen-container">
            <h3>How are you planning to use Eden?</h3>
            <p>We'll streamline your setup experience accordingly.</p>

            <div className="form-container">
                <div className="selectionbox-container">
                    <SelectionBox icon={User} title={"For myself"} desc={"Write better. Think more clearly. Stay organized"} />
                    <SelectionBox icon={Usergroup} title={"With my team"} desc={"Wikis, docs, tasks, & projects, all in one place"} />
                </div>
                <Button label="Create Workspace" onClick={() => onButtonClick("completed")} />
            </div>
        </section>
    )
}

export default PlanningScreen