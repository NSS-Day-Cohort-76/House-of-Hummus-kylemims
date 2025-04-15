//empty object w/ default values
const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

// setter functions (invoked in Etrees.js - updates our empty object with parsed id value)
export const setEntreeId = (id) => {
    transientState.entreeId = id
}
export const setVegetableId = (id) => {
    transientState.vegetableId = id
}
export const setSideId = (id) => {
    transientState.sideId = id
}

// export the updated object over to our button...ready for takeoff || using spread operator to make a copy that includes timestamp
export const purchaseCombo = async () => {
    const { entreeId, vegetableId, sideId } = transientState

    if ([entreeId, vegetableId, sideId].includes(0)) {
        alert("Please make a selection for all categories.")
        return
    }

    const newPurchase = {
        ...transientState,
        timestamp: Date.now()
    }

    // POST request to API 
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPurchase)
    }

    const response = await fetch("http://localhost:8088/purchases", postOptions)
    const responseData = await response.json()

    const comboPurchasedEvent = new CustomEvent("comboPurchased")
    document.dispatchEvent(comboPurchasedEvent)

    return responseData
}