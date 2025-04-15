import { setVegetableId } from "./TransientState.js"

//
const handleVegetableChange = (event) => {
    if (event.target.id === "vegetable") {
        setVegetableId(parseInt(event.target.value))
        
    }
}

export const VegetableOptions = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    document.addEventListener("change", handleVegetableChange)

    const htmlArray = vegetables.map((vegetable) => {
        return `
            <div>
                <input type="radio" 
                        id="vegetable"
                        name="vegetable" 
                        value="${vegetable.id}" />
                         ${vegetable.type}
            </div>
        `
    })

    return htmlArray.join("")
}