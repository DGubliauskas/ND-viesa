export default function Jura({key, id, name, color}) {
    return (
        <div className="squares" style={{
            margin: 0
            }}>
            {key} {id} {name} {color}
        </div>
    )
}