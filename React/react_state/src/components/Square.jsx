export default function Square({sqci, number, redblue}) {

    return (
        <span className = {sqci} style= {{
            backgroundColor: redblue
        }}>{number}</span>
    )
}