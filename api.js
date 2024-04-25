import axios from 'axios'

const searchImage = async(term) => {
const url ='-bM7DpzP9cx3iVxBhp3hEUfLev0bNh6ulk29RxjVnIo'

const response = await axios.get(url, {
params: {
query: term
}

})

console.log(term)
console.log(response)

return response.data.results

}
export default searchImage