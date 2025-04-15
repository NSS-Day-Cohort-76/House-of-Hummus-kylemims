//import the entree setter function
import { setEntreeId } from "./TransientState.js"

//
const handleEntreeChange = (event) => {
    if (event.target.id === "entree") {
        setEntreeId(parseInt(event.target.value))
        
    }
}

export const EntreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", handleEntreeChange)

    const htmlArray = entrees.map((entree) => {
        return `
            <div>
                <input type="radio"
                        id="entree"
                        name="entree"
                        value="${entree.id}" />
                         ${entree.name}
            </div>
        `
    })

    return htmlArray.join("")
}

// rinse & repeat for Vegetables and Sides