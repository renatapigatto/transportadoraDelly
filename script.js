const citiesDistance = [
	[
		0, 2079, 1578, 1652, 2765, 2775, 2595, 2892, 1183, 1848, 611, 294, 5215, 788, 3296, 4230, 501, 4763, 1855, 356,
		1578, 2187, 1142, 1408
	],
	[
		2079, 0, 2824, 2120, 2942, 2941, 3193, 3500, 1610, 2017, 2161, 2173, 5298, 2108, 3852, 4397, 2074, 4931, 3250,
		2100, 806, 2933, 947, 3108
	],
	[
		1578, 2824, 0, 716, 1453, 1594, 1004, 1301, 2528, 906, 2171, 1854, 3951, 2348, 1712, 3050, 2061, 3584, 434,
		1372, 2738, 586, 2302, 524
	],
	[
		1650, 2140, 741, 0, 1134, 1133, 1366, 1673, 2200, 209, 2245, 1930, 3490, 2422, 2027, 2589, 2135, 3123, 1148,
		1446, 2157, 1015, 1789, 1239
	],
	[
		2764, 2942, 1453, 1134, 0, 694, 991, 1298, 3407, 935, 3357, 3040, 3051, 3534, 1518, 2150, 3247, 2684, 1444,
		2568, 2979, 1014, 2911, 1892
	],
	[
		2773, 2941, 1594, 1133, 694, 0, 1679, 1986, 3406, 934, 3366, 3049, 2357, 3543, 2206, 1456, 3255, 1990, 2017,
		2566, 2978, 1614, 2910, 2119
	],
	[
		2595, 3193, 1004, 1366, 991, 1679, 0, 300, 3541, 1186, 3188, 2871, 4036, 3365, 711, 3135, 3078, 3669, 852, 2385,
		3230, 408, 3143, 1300
	],
	[
		2892, 3500, 1301, 1673, 1298, 1986, 300, 0, 3838, 1493, 3485, 3168, 4443, 3662, 476, 3442, 3375, 3976, 1144,
		2682, 3537, 705, 3450, 1597
	],
	[
		1183, 1611, 2528, 2208, 3407, 3406, 3541, 3838, 0, 2482, 688, 1075, 5763, 537, 4242, 4862, 800, 5396, 2805,
		1389, 1070, 3127, 634, 2397
	],
	[
		1849, 2017, 906, 209, 935, 934, 1186, 1493, 2482, 0, 2442, 2125, 3291, 2618, 1847, 2390, 2332, 2924, 1338, 1643,
		2054, 926, 1986, 1428
	],
	[
		611, 2161, 2171, 2245, 3357, 3366, 3188, 3485, 688, 2442, 0, 395, 5808, 185, 3889, 4822, 120, 5356, 2448, 949,
		1660, 2770, 1224, 2001
	],
	[
		294, 2173, 1854, 1928, 3040, 3049, 2871, 3168, 1075, 2105, 395, 0, 5491, 572, 3572, 4505, 285, 5039, 2131, 632,
		1672, 2453, 1236, 1684
	],
	[
		5215, 5298, 3951, 3490, 3051, 2357, 4036, 4343, 5763, 3291, 5808, 5491, 0, 5985, 4563, 901, 5698, 1445, 4374,
		5009, 5335, 3971, 5267, 4476
	],
	[
		788, 2108, 2348, 2422, 3537, 3543, 3365, 3662, 537, 2619, 185, 572, 5985, 0, 4066, 4998, 297, 5533, 2625, 1126,
		1607, 2947, 1171, 2178
	],
	[
		3296, 3854, 1712, 2027, 1518, 2206, 711, 476, 4242, 1847, 3889, 3572, 4563, 4066, 0, 3662, 3779, 4196, 1553,
		3090, 3891, 1109, 3804, 2001
	],
	[
		4229, 4397, 3050, 2589, 2150, 1456, 3135, 3442, 4865, 2390, 4822, 4505, 901, 4999, 3662, 0, 4712, 544, 3473,
		4023, 4434, 3070, 4366, 3575
	],
	[
		501, 2074, 2061, 2135, 3247, 3256, 3078, 3375, 800, 2332, 120, 285, 5698, 297, 3779, 4712, 0, 5243, 2338, 839,
		1573, 2660, 1137, 1891
	],
	[
		4763, 4931, 3584, 3123, 2684, 1990, 3669, 3976, 5396, 2924, 5356, 5039, 1445, 5533, 4196, 544, 5243, 0, 4007,
		4457, 4968, 3604, 4900, 4109
	],
	[
		1855, 3250, 434, 1148, 1444, 2017, 852, 1144, 2805, 1338, 2448, 2131, 4374, 2625, 1553, 3473, 2338, 4007, 0,
		1649, 3015, 429, 2579, 521
	],
	[
		356, 2100, 1372, 1446, 2568, 2567, 2385, 2682, 1389, 1643, 949, 632, 5009, 1126, 3090, 4023, 839, 4457, 1649, 0,
		1599, 1962, 1163, 1202
	],
	[
		1578, 806, 2738, 2157, 2979, 2978, 3230, 3537, 1070, 2054, 1660, 1672, 5335, 1607, 3891, 4434, 1573, 4968, 3015,
		1599, 0, 2970, 446, 2607
	],
	[
		2188, 2933, 586, 1015, 1014, 1614, 408, 705, 3127, 926, 2770, 2453, 3971, 2947, 1109, 3070, 2660, 3604, 429,
		1962, 2970, 0, 2792, 882
	],
	[
		1142, 947, 2302, 1789, 2911, 2910, 3143, 3450, 634, 1986, 1224, 1236, 5267, 1171, 3804, 4366, 1137, 4900, 2579,
		1163, 446, 2792, 0, 2171
	],
	[
		1408, 3108, 524, 1238, 1892, 2119, 1300, 1597, 2397, 1428, 2001, 1684, 4476, 2178, 2001, 3575, 1891, 4109, 521,
		1202, 2607, 882, 2171, 0
	]
]

const citiesNames = [
	'Aracaju',
	'Belém',
	'Belo Horizonte',
	'Brasília',
	'Campo Grande',
	'Cuiabá',
	'Curitiba',
	'Florianópolis',
	'Fortaleza',
	'Goiânia',
	'João Pessoa',
	'Maceió',
	'Manaus',
	'Natal',
	'Porto Alegre',
	'Porto Velho',
	'Recife',
	'Rio Branco',
	'Rio De Janeiro',
	'Salvador',
	'São Luís',
	'São Paulo',
	'Teresina',
	'Vitória'
]

// SCRIPT CONSULTA

const trucks = ['pequeno (até 1 ton)', 'médio (até 4 ton)', 'grande (até 10 ton)']

function dropdownMenus(arr, selectId) {
	//creates the dropdown menus of 'consulta' and one of 'cadastro'
	var select = document.getElementById(selectId) //accesses the element select

	for (i = 0; i < arr.length; i++) {
		var city = arr[i]
		var element = document.createElement('option') //defines the new element will have the tag option
		element.textContent = city //defines the new element's content
		element.value = i //defines the new element's value as its position in the array
		select.appendChild(element) //adds a child element to the element select
	}
}

dropdownMenus(citiesNames, 'selectCity1')
dropdownMenus(citiesNames, 'selectCity2')
dropdownMenus(trucks, 'trucks')

function consult() {
	  
    //get the values selected by the user
	var selectedCity1 = document.getElementById('selectCity1').value
	var selectedCity2 = document.getElementById('selectCity2').value
	var selectedTruck = document.getElementById('trucks').value

    if(selectedCity1 == "-1"){
        alert("ERRO AO CONSULTAR TRECHO: Selecione a cidade de origem")
        return
    }

    if(selectedCity2 == "-1"){
        alert("ERRO AO CONSULTAR TRECHO: Selecione a cidade de destino")
        return
    }

    if(selectedTruck == "-1"){
        alert("ERRO AO CONSULTAR TRECHO: Selecione o tamanho do caminhão")
        return
    }

	// console.log("city 1", selectedCity1)
	// console.log("city 2", selectedCity2)
	// console.log("truck", selectedTruck)

	var distance = citiesDistance[selectedCity1][selectedCity2] //finds the point in the matrix where the 2 cities overlap

	function totalCost(size, dist) {
		if (size == 0) {
			//check if small truck
			return dist * 4.87
		}

		if (size == 1) {
			//check if medium truck
			return dist * 11.92
		}

		if (size == 2) {
			//check if big truck
			return dist * 27.44
		}
	}

	var total = totalCost(selectedTruck, distance)

	// console.log('custo total', total)

	const outputDiv = document.getElementById('output')

	outputDiv.innerHTML = `A distância entre <b>${citiesNames[selectedCity1]}</b> e <b>${
		citiesNames[selectedCity2]
	}</b> é de <b>${distance}km</b>. O custo total do transporte em um caminhão <b>${trucks[selectedTruck]}</b> é <b>${formatMoney(total)}</b>`
}

function formatMoney(number) {
	return new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL'
	}).format(number)
}

//SCRIPT CADASTRO

var itemsArr = [] //ALL ITEMS ADDED BY USER
var quantityArr = [] //TOTAL QUANTITIES ADDED BY USER
var weightArr = [] //WEIGHT OF EACH ITEM ADDED BY USER
var totalWeight = 0 //WEIGHT * QUANTITIES

function addItems() {
	var newItem = document.getElementById('items').value
	var quantity = document.getElementById('quantity').value
	var weight = document.getElementById('weight').value

	var select = document.getElementById('itemsList')
	var element = document.createElement('li')
	element.innerHTML = `${newItem} - ${quantity} unidades - ${weight}kgs`

	select.appendChild(element)

	itemsArr.push(newItem) //add new item to array every time the user presses the button
	quantityArr.push(quantity)
	weightArr.push(weight)

	totalWeight = findTotalWeight()

	document.getElementById("items").value = "" //clear the input boxes so the user knows they're ready for a new input
	document.getElementById("quantity").value = ""
	document.getElementById("weight").value = ""
}

function findTotalWeight() {
	var sum = 0

	for (i = 0; i < quantityArr.length; i++) {
		sum += quantityArr[i] * weightArr[i]
	}
	return sum
}

function bestTruck() {
	let kilos = totalWeight
	// console.log('best truck', kilos)
	//11750

	var bigTruck = 0
	var mediumTruck = 0
	var smallTruck = 0

	while (kilos >= 10000) {
		kilos -= 10000
		bigTruck++
	}
	// console.log('big truck', bigTruck)
	while (kilos >= 4000) {
		kilos -= 4000
		mediumTruck++
	}
	// console.log('medium truck', mediumTruck)
	while (kilos >= 1000) {
		kilos -= 1000
		smallTruck++
	}

	if (kilos > 0) {
		smallTruck++
	}
	// console.log('small truck', smallTruck)
	return [smallTruck, mediumTruck, bigTruck]
}

var chosenTrucks = [] //TRUCKS NECESSARY ACCORDING TO TOTAL WEIGHT - small, medium, big

dropdownMenus(citiesNames, 'originCity')

var counter = 1
var addedCities = [] //CITIES ADDED BY THE USER
var addedQuantities = [] //QUANTITIES ADDES BY THE USER IN EACH CITY

function createDropdownGroup() {
	
    if(itemsArr.length == 0){
        alert("ERRO AO ADICIONAR CIDADE: Insira pelo menos um item")
        return
    }
    
    //create dropdown cities
	var div = document.getElementById('addCities')
	var parent = document.createElement('div') //create one div for each destination
	parent.id = 'parent' + counter //make the div name match the index of the destination in the array
	var select = document.createElement('select')
	select.classList.add('selectCities')

	var title = document.createElement('lable')
	title.textContent = `Destino ${counter}: `

	function createOption(name, value) {
		var option = document.createElement('option')
		option.textContent = name
		option.value = value
		select.appendChild(option)
	}

	for (i = 0; i < citiesNames.length; i++) {
		if (i == 0) {
			createOption('Selecione', -1) //make the first item 'Selecione'
		}
		createOption(citiesNames[i], i)
	}

	//create items list with quantities
	var list = document.createElement('ol')
	for (i = 0; i < itemsArr.length; i++) {
		var listItem = document.createElement('li')
		listItem.textContent = itemsArr[i]
		var amount = document.createElement('input')
		amount.type = 'number'

		var space = document.createTextNode(' ')
		list.appendChild(listItem)
		listItem.appendChild(space)
		listItem.appendChild(amount)
	}

	parent.append(title, select, list)
	div.appendChild(parent)

	counter++
}

var distancesArr = [] //DISTANCE BETWEEN CITIES

var Order = [] //INFO OF EACH ORDER
const Orders = [] //INFOS OF ALL ORDERS

function createOrder() {
	
    if(document.getElementById("companyName").value == ""){
        alert("ERRO AO CADASTRAR PEDIDO: Preencha o nome da empresa")
        return
    }

    if(itemsArr.length == 0){
        alert("ERRO AO CADASTRAR PEDIDO: Insira pelo menos um item")
        return
    }

    
    //add selected cities to array
	var citiesList = document.getElementsByClassName("selectCities")

    if(citiesList == 0){
        alert("ERRO AO CADASTRAR PEDIDO: Insira pelo menos um item")
        return
    }

    var canAddCities = true

	for (var city of citiesList) {//check if all cities are selected
		if(city.value == "-1"){
            canAddCities = false
        }
	}

    if(!canAddCities){//if any city isn't selected -> throw error
        alert("ERRO AO CADASTRAR PEDIDO: Selecione a cidade")
        return
    }

    for (var city of citiesList) {//add selected cities to array
        addedCities.push(city.value)
	}

	//find distance between cities
	for (var i = 0; i < addedCities.length - 1; i++) {
		//length - 1 to because the last element will be i+1
		var city1 = addedCities[i]
		var city2 = addedCities[i + 1]
		distancesArr.push(citiesDistance[city1][city2])
	}

    // console.log('distances array', distancesArr)
    // console.log('add cities', addedCities)

	for (var i = 1; i < addedCities.length; i++) {
		Order.push({
			cityName: citiesNames[addedCities[i]],
            cityIndex: addedCities[i],
			distanceUntil: distancesArr[i-1],
			items: []
		})
	}

	for (var i = 0; i < addedCities.length - 1; i++) {//length-1 because Order doesn't have the origin city
		
        // console.log('added cities', addedCities)
        
        var itemsTotalWeight = 0
		var parent = document.getElementById('parent' + (i+1))
		
        // console.log('parent', parent)

        var inputs = parent.getElementsByTagName('input')

        // console.log('inputs', inputs)
		var items = []

		for (j = 0; j < inputs.length; j++) {
			items.push({
				index: j, //INDEX itemsArr
				name: itemsArr[j],
				quantities: inputs[j].value,
				totalWeight: inputs[j].value * weightArr[j]
			})

			itemsTotalWeight += inputs[j].value * weightArr[j]
		}

		// console.log('items:',items)
		// console.log('Order:', Order)
		// console.log('Order i-1:', Order[i-1])
		// console.log('i-1', i-1)
		Order[i].items = items
		Order[i].itemsTotalWeight = itemsTotalWeight
	}

	calculateOrder()
}

function calculateOrder() {
	for (var i = 0; i < Order.length; i++) {
        var city = Order[i]
		// console.log('truck cost', truckCosts())

		city.cost = truckCosts() * city.distanceUntil
		totalWeight -= city.itemsTotalWeight
		city.trucks = chosenTrucks
		// console.log('city total weight', city.itemsTotalWeight)
	}

	// console.log('trucks', chosenTrucks)
	// console.log(Order)

	function truckCosts() {
		chosenTrucks = bestTruck()
		// console.log('chosen trucks', chosenTrucks)
		// console.log('weight', totalWeight)
		var truckCost = 0
		var stretchTruckCost = 0

		for (var i = 0; i < chosenTrucks.length; i++) {
			if (i == 0) {
				truckCost = 4.87
			}
			if (i == 1) {
				truckCost = 11.92
			}
			if (i == 2) {
				truckCost = 27.44
			}

			stretchTruckCost += chosenTrucks[i] * truckCost
		}
		return stretchTruckCost
	}

	showCost()
}

var totalItemsQty = 0 //total amount of items in the order

function showCost() {
	var element = document.getElementById('orderCost')

	var totalDistance = 0
	var totalCost = 0
	var productsString = ''
	var trucksString = ''

	for (var city of Order) {
		totalDistance += city.distanceUntil
		totalCost += city.cost

		for (var i = 0; i < city.trucks.length; i++) {
			if (city.trucks[i] > 0) {
				switch (i) {
					case 0:
						trucksString += `${city.trucks[0]} caminhão(ões) pequenos, `
						break
					case 1:
						trucksString += `${city.trucks[1]} caminhão(ões) médios, `
						break
					case 2:
						trucksString += `${city.trucks[2]} caminhão(ões) grandes, `
						break
					default:
						break
				}
			}
		}

		city.trucksString = trucksString
		trucksString = ""
	}

	for (var i = 0; i < itemsArr.length; i++) {
		productsString += itemsArr[i]
		if (i < itemsArr.length - 1) {
			productsString += ', '
		}
	}

    for(var i = 0; i < quantityArr.length; i++){
        totalItemsQty += parseInt(quantityArr[i])
    }
	// console.log('addedCities',addedCities)
	// console.log('citiesNames',citiesNames)

	for (i = 0; i < Order.length; i++) { 
		if (addedCities[i + 1] == undefined) {//
			continue
		}

		element.innerHTML += `<br/><b>TRECHO ${i + 1}</b>: De <b>${citiesNames[addedCities[i]]}</b> para <b>${citiesNames[addedCities[i + 1]]}</b>, a distância a ser percorrida é de <b>${Order[i].distanceUntil}km</b>. Para o transporte dos produtos <b>${productsString}</b> será necessário utilizar <b>${Order[i].trucksString}</b> de forma a resultar no menor custo de transporte por km rodado. O valor total do transporte dos itens neste trecho é <b>${formatMoney(Order[i].cost)}.</b> <br/>`
	}

	element.innerHTML += `<br/><b> CUSTO TOTAL: ${formatMoney(totalCost)} <br/>DISTÂNCIA TOTAL: ${totalDistance}km <br/>CUSTO UNITÁRIO MÉDIO: ${formatMoney(totalCost / totalItemsQty)}</br><br/><br/>`

    //create button to make a new order
    var button = document.createElement("button")

    button.innerText = "Fazer novo pedido"
    button.onclick = function newOrder(){
        document.getElementById('addingOrder').style.display = 'block'
        element.innerHTML = ""
        //reset all counters and arrays
        counter = 1
        itemsArr = [] 
        quantityArr = [] 
        weightArr = [] 
        totalWeight = 0
        addedCities = []
        Order = []
        distancesArr = []
        totalItemsQty = 0
    }

    element.appendChild(button)

	Orders.push({
		name: document.getElementById('companyName').value,
		streches: Order,
		totalCost: totalCost,
		totalDistance: totalDistance,
        totalItemsQty: totalItemsQty,
		trucks: chosenTrucks
	})

	// console.log('orders', Orders)

	resetForm()
}

function resetForm() {
	//clear and hide form fields
    
    document.getElementById('companyName').value = ''
	document.getElementById('itemsList').innerHTML = ''
	document.getElementById('originCity').value = '-1'
	document.getElementById('addCities').innerHTML = ''

	document.getElementById('addingOrder').style.display = 'none'

}

//SCRIPT DADOS

function showData(){
    if(Orders.length == 0){
        alert("ERRO AO GERAR DADOS: Não há pedidos cadastrados")
        return
    }

    document.getElementById("dataSummary").innerText = ""//clears div before generating new data

    for(var index of Orders){
        var div = document.getElementById("dataSummary")
        var company = document.createElement("h4")
        var list = document.createElement("ul")
        var totalPrice = document.createElement("li")
        var costKm = document.createElement("li")
        var costStretch = document.createElement("li")
        var costStretchDiv = document.createElement("ul")
        var itemsTotal = document.createElement("li")
        var itemCost = document.createElement("li")

        var numberOfItems = index.streches[0].items.length
        
        company.innerText = `Empresa: ${index.name}`
        totalPrice.innerText = `Custo Total: ${formatMoney(index.totalCost)}`
        costKm.innerText = `Custo por Km: ${formatMoney(index.totalCost / index.totalDistance)}`
        costStretch.innerText = `Custo por Trecho:`
        
        var stretchCounter = 1
        for(var stretch of index.streches){
            costStretchDiv.innerHTML += `<li>Trecho ${stretchCounter}: ${formatMoney(stretch.cost)}</li>`
            stretchCounter++
        }

        itemsTotal.innerText = `Quantidade total de itens transportados: ${index.totalItemsQty}`
        itemCost.innerText = `Custo médio por tipo de produto: ${formatMoney(index.totalCost / numberOfItems)}`
        
        list.append(totalPrice, costKm, costStretch, costStretchDiv, itemsTotal, itemCost)
        div.append(company, list)
    }
}




