//PEGAR CADASTROS NO BACKEND
async function BuscarAlgoNaAPI() {
    let response = await fetch('API')
    let data = await response.json()
    console.log(data)
}
