import getToken from "./getToken"
import getData from "./getData";
import saveData from "./saveData";

const Order = (token, carts) => (
    fetch('http://172.20.10.3/api/cart.php', {
        method: "POST",
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application.js'
        },
        body: JSON.stringify({
            'token': token,
            'arrayDetail': carts

        })
    }).then(res => (res.text()))
)

const SendOrder = async () => {
    try {
        const token = await getToken();
        const carts = await getData();
        // const sendOrder = await Order(token, carts);
        if (token != '' && carts.length > 0) {
            let newArray = []
            {
                carts && carts.map(carts =>
                    newArray.push({ id: carts.products.id, quantity: carts.quantity })
                )
            }
            const kq = await Order(token, newArray)
            return kq

        } else {
            alert("Carts is null")
        }

    } catch (error) {
        console.log(error);
    }
}
export default SendOrder