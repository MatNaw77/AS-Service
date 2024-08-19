import './button.css'

export default function Button ({ text, classme }: {text: String, classme: string}) {
    return (
        <button className={classme}>
            {text}
        </button>
    )
}