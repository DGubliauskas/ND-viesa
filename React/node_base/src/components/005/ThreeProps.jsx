export default function ThreeProps({first, second, color}) {
    return (
     <>
     <h1 style={{
        color: `${color}`
     }}>{first}</h1>
     <h2 style={{
        color: `${color}`
     }}>{second}</h2>
     </>
    )
 }