import "./Input.css";
interface IInput {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}
const Input = ({ value, onChange, placeholder }: IInput) => {
    return (
        <div>
            <input className="input-txt" type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange} />
        </div>
    )
}
// Введите текст для генераций QRcode

export default Input;