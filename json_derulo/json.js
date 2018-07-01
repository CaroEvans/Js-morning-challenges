/*

JSON Practice
-------------

JSON can be parsed and turned into a plain old JS object.
This makes it much easier to read from and write to.

Check out the shop JS object and run the tests.

Complete methods below, one by one.

TESTS: mocha json.tests.js

*/



const shop = {
  title: "My Fancy Drink Shop",
  products: [
    { id: 1, title: 'Coca Cola', price: 4.32 },
    { id: 2, title: 'Fanta', price: 4.22 },
    { id: 3, title: 'Lift', price: 4.11 }
  ],
  customers: {
    'jane@doe.com': {
      firstName: 'John',
      lastName: 'Doe',
      address: {
        streetNumber: 12,
        street: 'Main St',
        city: 'Brisbane',
        postcode: 4000
      },
      orders: [
        { id: 61721, status: 'delivered', items: [
            { productId: 1, qty: 2 },
            { productId: 3, qty: 1 },
            { productId: 2, qty: 3 }
          ],
          notes: 'Please leave on doorstep'
        },
        { id: 82721, status: 'delivered', items: [
            { productId: 4, qty: 100 }
          ],
          notes: 'Really enjoying coke ATM'
        }
      ]
    }
  }
}

const shopTitle = () => {
  return shop.title
  // Return the shop title (you have access to the shop object from here)
}
const upperCase = (x) => {
  return x.toUpperCase()
  // Return an uppercase version of string
}
const upperCaseShopTitle = () => {
  return upperCase(shopTitle())
}
const productById = (productId) => {
  return shop.products.find(products => products.id==productId)
}

const productCost = (productId) => {
  // given a product id, return its cost. DRY ;)
  return productById(productId).price
}
const formatAddress = (email) => {
  // Given a user's email, return their address in the format:
  // streetNumber street, city, postcode
  // E.g. 10 Amelia St, Sydney, 2000
  // Hint: some destructuring might save you a few lines.

  const u = shop.customers[email].address
  return u.streetNumber + ' ' + u.street + ', ' + u.city + ', ' + u.postcode
}

const totalCost = (email, orderId) => {
  // Return the total cost of an order.
  const order = shop.customers[email].orders.find(order => order.id==orderId).items
  let cost = 0
  
  for (i = order.length-1; i >= 0; i-- ){
      if (order[i].productId === 1) {
        cost += (order[i].qty * 4.32)
      } else if (order[i].productId === 2) {
        cost += (order[i].qty * 4.22)
      } else if (order[i].productId === 3){
        cost += (order[i].qty * 4.11)
      } else {
        cost += 0
      }
    }
    return cost
  }

const addProduct = (id, title, price) => {
  // Add a product to the shop.
  let p = shop.products
  let n = {id:id, title:title, price:price}
  p.push(n)
}

const updateProductPrice = (id, newPrice) => {
  // Update the price of a specific product
  shop.products.find(item => item.id==id).price = newPrice
}

// Test all the things
module.exports = {
  shopTitle,
  upperCase,
  upperCaseShopTitle,
  productById,
  productCost,
  formatAddress,
  totalCost,
  addProduct,
  updateProductPrice,
}
