export default function Dogs({doglength, sqci}) {
    const wordLength = doglength.length;
    const whatcolor = wordLength > 6 ? "green" : "red";
    return (
        
        <div className={sqci} style={{
            color: whatcolor
        }}>
            <span>{wordLength}</span>
        </div>
    )
}