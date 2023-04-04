function Takeaways(props) {
    const darkMode = props.darkMode
    const page = props.page
    return (
        <div className="takeaways">
            <h4>TAKEAWAYS</h4>
            <div className="flex flex-justify-between">
                <div className={"takeaway "+(darkMode ? "text-white bg-dark-gray" : "text-black bg-off-white")}>
                    <div className="takeaway-title inter-large">
                        <span className="text-red inter-large-bold">1. </span>
                        {page.takeaways[0].title}
                    </div>
                    <div className="takeaway-content inter-paragraph">
                        {page.takeaways[0].content}
                    </div>
                </div>
                <div className={"takeaway "+(darkMode ? "text-white bg-dark-gray" : "text-black bg-off-white")}>
                    <div className="takeaway-title inter-large">
                        <span className="text-red inter-large-bold">2. </span>
                        {page.takeaways[1].title}
                    </div>
                    <div className="takeaway-content inter-paragraph">
                        {page.takeaways[1].content}
                    </div>
                </div>
                <div className={"takeaway "+(darkMode ? "text-white bg-dark-gray" : "text-black bg-off-white")}>
                    <div className="takeaway-title inter-large">
                        <span className="text-red inter-large-bold">3. </span>
                        {page.takeaways[2].title}
                    </div>
                    <div className="takeaway-content inter-paragraph">
                        {page.takeaways[2].content}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Takeaways