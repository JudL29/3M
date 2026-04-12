import CreateDropdown from "./CreateDropdown"

const FaqSetup = (props) => {
    const [highSeverity] = [{ heading: "High Severity", body: }]
    const [mediumSeverity] = [{ heading: "Medium Severity", body: }]
    const [lowSeverity] = [{ heading: "Low Severity", body: }]

    return (
        <div className="section">
            <h1>props.name</h1>
            <CreateDropdown sections={highSeverity} />
            <CreateDropdown sections={mediumSeverity} />
            <CreateDropdown sections={lowSeverity} />
        </div>
    )
}

export default FaqSetup;