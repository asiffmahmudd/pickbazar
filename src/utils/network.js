export const base_url="https://api.onimamzad.com" 

export const inputAddress="/api/frontEnd/inputAddress"
export const delveryAddress="/api/frontEnd/deliveryAddress"
export const updateAddress="/api/frontEnd/updateAddress"
export const deleteAddress="/api/frontEnd/deleteAddress"

export const userLogin="/api/frontEnd/userLogin"
export const userRegister="/api/frontEnd/userRegister"

export const allProducstApi="/api/frontEnd/products"
export const addProductApi="/api/admin/addProduct"
export const deleteProductsApi="/api/admin/deleteProducts"
export const updateProductApi="/api/admin/updateProduct/"

export const allCategoriesApi="/api/frontEnd/categories"
export const addCategoryApi="/api/admin/addCategory"
export const updateCategoryApi="/api/admin/updateCategory/"
export const deleteCategoryApi="/api/admin/deleteCategory/"

export const contactNumber="/api/frontEnd/contactNumbers"
export const updateNumber="/api/frontEnd/updateContact"
export const inputContactNumber="/api/frontEnd/inputContactNumber"
export const deleteNumber="/api/frontEnd/deleteContact"

export const addOrderApi="/api/frontEnd/addOrder"
export const getUserOrderApi="/api/frontEnd/orders"
export const adminOrdersApi="/api/admin/orders"
export const updateOrderApi="/api/admin/updateOrder"

export const inputCommentApi="/api/frontEnd/inputCustomerFeedback"
export const getCommentApi="/api/frontEnd/getFeedbackList/"

export const addLogoApi="/api/admin/addLogo"
export const getLogoApi="/api/admin/getLogo"

export const getSlidersApi="/api/frontEnd/homeSliders"
export const deleteSliderApi="/api/admin/deleteSlider/"
export const addSliderApi="/api/admin/addSlider"

export const customerApi="/api/admin/customers"


export const getProducts = (selectedCategory="", subCategory="", priceFilter="") => {
    return fetch(base_url+allProducstApi+'?categoryId='+selectedCategory+'&subCategoryId='+subCategory+'&priceFilter='+priceFilter)
    .then(res => res.json())
    .then(result =>{
        return result
    })
}

export const addProduct = (data, token) => {
    return fetch(base_url+addProductApi, {
        method: 'POST',
        headers: {
            Authorization: token
        },
        body: data
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        alert(error.message)
    })
}

export const deleteProducts = (data, token) => {
    return fetch(base_url+deleteProductsApi, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        alert(error.message)
    })
}

export const updateProduct = (data, id, token) => {
    return fetch(base_url+updateProductApi+id, {
        method: 'POST',
        headers: {
            Authorization: token
        },
        body: data
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        alert(error.message)
    })
}

export const callAddAddress= (address, token) => {
    return fetch(base_url+inputAddress, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(address)
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        alert(error.message)
    })
}

export const getDeliveryAddress = (token) => {
    return fetch(base_url+delveryAddress, {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(e => {
        alert(e.message)
    })
}

export const updateDeliveryAddress = (address, id, token) => {
    return fetch(base_url + updateAddress + '/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(address)
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        alert(error.message)
    })
}

export const deleteDeliveryAddress = (id, token) => {
    return fetch(base_url + deleteAddress + '/' +id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        alert(error.message)
    })
}

export const login = (data) => {
    return fetch(base_url + userLogin, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(e => {
        alert("Email or password doesn't match")
    })
}

export const signup = (data) => {
    return fetch(base_url + userRegister, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        return result
    })
}

export const getCategories = () =>{
    return fetch(base_url + allCategoriesApi)
    .then(res => res.json())
    .then(data => {
        return data
    })
    .catch(e => {
        alert(e.message)
    })
}

export const addCategory = (data, token) => {
    return fetch(base_url + addCategoryApi, {
        method: 'POST',
        headers: {
            Authorization: token
        },
        body: data
    })
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(e => {
        alert(e.message)
    })
}

export const updateCategory = (data, token, id) => {
    return fetch(base_url + updateCategoryApi+id, {
        method: 'POST',
        headers: {
            Authorization: token
        },
        body: data
    })
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(e => {
        alert(e.message)
    })
}

export const deleteCategory = (token, id) => {
    return fetch(base_url + deleteCategoryApi+id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    })
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(e => {
        alert(e.message)
    })
}

export const getAllContacts = (token) => {
    return fetch(base_url+contactNumber, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    })
    .then(res => res.json())
    .then(result => {
        return result
    })
}

export const callAddContact = (number, token) => {
    return fetch(base_url+inputContactNumber, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(number)
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        alert(error.message)
    })
}

export const updateContacts = (number, id, token) => {
    return fetch(base_url+updateNumber+'/'+id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(number)
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        alert(error.message)
    })
}

export const deleteContactNumber = (id, token) => {
    return fetch(base_url + deleteNumber + '/' +id, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    })
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => {
        alert(error.message)
    })
}

export const addOrder = (data, token) => {
    return fetch(base_url+addOrderApi,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(async result => {
        return result
    })
    .catch(e => alert(e.message))
}

export const getUserOrders = (token) => {
    return fetch(base_url+getUserOrderApi,{
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    })
    .then(res => res.json())
    .then(async result => {
        return result
    })
    .catch(e => alert(e.message))
}

export const getAdminOrders = (token) => {
    return fetch(base_url+adminOrdersApi,{
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        }
    })
    .then(res => res.json())
    .then(async result => {
        return result
    })
    .catch(e => alert(e.message))
}

export const updateOrder = (data, token) => {
    return fetch(base_url+updateOrderApi,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
        return result
    })
    .catch(e => alert(e.message))
}

export const inputComment = (data, token) => {
    return fetch(base_url+inputCommentApi,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(async result => {
        return result
    })
    .catch(e => alert(e.message))
}

export const getComments = (productId) => {
    return fetch(base_url+getCommentApi+productId)
    .then(res => res.json())
    .then(async result => {
        return result
    })
    .catch(e => alert(e.message))
}

export const addLogo = (data, token) => {
    console.log(data)
    return fetch(base_url+addLogoApi,{
        method: 'POST',
        headers: {
            Authorization: token
        },
        body: data
    })
    .then(res => res.json())
    .then(async result => {
        return result
    })
    .catch(e => alert(e.message))
}

export const getLogo = () => {
    return fetch(base_url+getLogoApi)
    .then(res => res.json())
    .then(async result => {
        return result
    })
    .catch(e => alert(e.message))
}

export const addSlider = (data, token) => {
    return fetch(base_url+addSliderApi,{
        method: 'POST',
        headers: {
            Authorization: token
        },
        body: data
    })
    .then(res => res.json())
    .then(async result => {
        return result
    })
    .catch(e => alert(e.message))
}

export const getSlider = () => {
    return fetch(base_url+getSlidersApi)
    .then(res => res.json())
    .then( result => {
        return result
    })
    // .catch(e => alert(e.message))
}

export const deleteSlider = (id,token) => {
    return fetch(base_url+deleteSliderApi+id,{
        method: 'DELETE',
        headers: {
            Authorization: token
        }
    })
    .then(res => res.json())
    .then(async result => {
        return result
    })
    .catch(e => alert(e.message))
}

export const getCustomers = (token) => {
    return fetch(base_url+customerApi,{
        headers: {
            Authorization: token
        }
    })
    .then(res => res.json())
    .then(async result => {
        return result
    })
    .catch(e => alert(e.message))
}