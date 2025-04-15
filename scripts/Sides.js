import { setSideId } from "./TransientState.js"

//
const handleSideChange = (event) => {
    if (event.target.id === "side") {
        setSideId(parseInt(event.target.value))
        
    }
}

export const SideOptions = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    document.addEventListener("change", handleSideChange)

    const htmlArray = sides.map((side) => {
        return `
            <div>
                <input type="radio" 
                            id="side"
                            name="side" 
                            value="${side.id}" />
                             ${side.title}
            </div>
        `
    })

    return htmlArray.join("")
}