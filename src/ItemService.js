import axios from 'axios';

const url = 'http://localhost:3000/api/items/';

class ItemService {
    // Get Items

    static getItems() {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get(url);
                const data = response.data;
                resolve(
                    data.map(item => ({
                        ...item,
                        createdAt: new Date(item.createdAt)
                    }))
                );
            } catch (err) {
                reject(err);
            }
        })
    }

    // Create Item
    static insertItem(image, title, price, description) {
        return axios.post(url, {
            image,
            title,
            price,
            description,
        })
    }

    // Update Item
    static updateItem(id, title, price, description) {
        return axios.put(`${url}${id}`, {
            title,
            price,
            description,
        })
    }

    // Delete Item
    static deleteItem(id) {
        return axios.delete(`${url}${id}`);
    }
}
export default ItemService;