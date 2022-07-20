import { useState } from "react"
import logo from "./Assets/eden-logo.png"
import EndScreen from "./Components/EndScreen/EndScreen"
import NameScreen from "./Components/NameScreen/NameScreen"
import PlanningScreen from "./Components/PlanningScreen/PlanningScreen"
import StepsNumber from "./Components/StepsNumber/StepsNumber"
import WorkspaceScreen from "./Components/WorkspaceScreen/WorkspaceScreen"

const Main = () => {
    const [steps, setSteps] = useState({
        step: 1,
        status: {
            1: "",
            2: "",
            3: "",
            4: ""
        }
    });

    const onButtonClick = (status: string) => {
        setSteps(prevState => {
            return {
                step: prevState.step + 1,
                status: {
                    ...prevState.status,
                    [prevState.step]: "completed"
                }
            }
        })
    }

    const renderScreens = () => {
        switch (steps.step) {
            case 1:
                return <NameScreen onButtonClick={onButtonClick} />
            case 2:
                return <WorkspaceScreen onButtonClick={onButtonClick} />
            case 3:
                return <PlanningScreen onButtonClick={onButtonClick} />
            case 4:
                return <EndScreen />
            default:
                break;
        }

    }

    return (
        <main>
            <img src={logo} alt="Eden-logo" className="logo" />
            <StepsNumber steps={steps.step} status={steps.status} />
            <section>
                {renderScreens()}
            </section>
        </main>

    )
}

export default Main