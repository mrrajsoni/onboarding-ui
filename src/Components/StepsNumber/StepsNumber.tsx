import { ReactComponent as One } from "../../Assets/svg/number-circle-one.svg"
import { ReactComponent as Two } from "../../Assets/svg/number-circle-two.svg"
import { ReactComponent as Three } from "../../Assets/svg/number-circle-three.svg"
import { ReactComponent as Four } from "../../Assets/svg/number-circle-four.svg"
import "./StepsNumber.css"


const StepsNumber = ({ steps, status }: { steps: number, status: { 1: string, 2: string, 3: string, 4: string } }) => {

    return (
        <div className="steps-conatiner">
            <div className={`${status[1]} active half-border`}>
                <One />
            </div>
            <div className={`${status[2]} half-border ${steps === 2 ? `active` : "inactive"}`}>
                <Two />
            </div>
            <div className={`${status[3]} half-border ${steps === 3 ? `active ` : "inactive"}`}>
                <Three />
            </div>
            <div className={`complete-border ${steps === 4 ? "active" : "inactive"}`}>
                <Four />
            </div>

        </div>
    )
}

export default StepsNumber