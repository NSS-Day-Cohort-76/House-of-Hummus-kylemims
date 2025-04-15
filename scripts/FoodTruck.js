// import { Purchases } from "./Purchases.js"
import { EntreeOptions } from "./Entrees.js"
import { VegetableOptions } from "./Vegetables.js"
import { SideOptions } from "./Sides.js"
import { PurchaseButton } from "./PurchaseButton.js"
import { Purchases } from "./Purchases.js"

export const FoodTruck = async () => {
    const entreeHTML = await EntreeOptions()
    const vegetableHTML = await VegetableOptions()
    const sideHTML = await SideOptions()
    const buttonHTML = PurchaseButton()
    const purchaseHTML = await Purchases()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article class="choices">
            <section class="choices__entrees options">
                <h2>Entrees</h2>
                ${entreeHTML}
            </section>

            <section class="choices__vegetables options">
                <h2>Vegetables</h2>
                ${vegetableHTML}
            </section>

            <section class="choices__sides options">
                <h2>Sides</h2>
                ${sideHTML}
            </section>
        </article>
        
        <article class="order">
            
            ${buttonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${purchaseHTML}
        </article>
    `
}
