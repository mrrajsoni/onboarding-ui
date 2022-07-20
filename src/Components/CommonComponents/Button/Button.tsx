interface ButtonProps {
    label: string,
    onClick: () => void
}

const Button = (props: ButtonProps) => {

    const { label, onClick } = props
    return (
        <button type="submit" className="primary-button" onClick={onClick}>{label}</button>
    )
}

export default Button