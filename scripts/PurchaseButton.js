import { purchaseCombo } from "./TransientState.js"



const handlePurchaseClick = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        purchaseCombo()
    }
}

export const PurchaseButton = () => {
    document.addEventListener("click", handlePurchaseClick)
    return `<button id="purchase">Purchase Combo</button>`
}