import React from "react"
import "./Input.css"

interface InputProps {
    classNames?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    label: string,
    value: string,
    label2?: string
    showDisabledInput?: boolean
}
const Input = (props: InputProps) => {
    const { classNames, label, onChange, value, label2, showDisabledInput } = props
    return (
        <div className="input-container">
            <label htmlFor="input-field">{label} <span className="label2">{label2}</span></label>
            <div className="two-inputs-container">
                {showDisabledInput &&
                    <input className="url-disabled-input" type="text" name="urlPrefix" value="www.eden.com/" disabled />}
                <input required id="input-field" onChange={onChange} className={`${classNames} ${showDisabledInput && "no-left-border"} inputField`} value={value} type="text" />
            </div>

        </div>
    )
}

export default Input