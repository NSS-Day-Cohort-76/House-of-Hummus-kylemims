export const Purchases = async () => {
    try {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    const purchases = await response.json()

    let html = "<ul>"

    const listItems = purchases.map((purchase) => {
        const totalCost = purchase.entree.price + purchase.vegetable.price + purchase.side.price
        const formattedCost = totalCost.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        return `<li>Receipt #${purchase.id} = ${formattedCost}</li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html

} catch (error) {
    console.error("Error fetching purchases:", error);
    return "<p>Error loading purchases.</p>"; 
  }
}


