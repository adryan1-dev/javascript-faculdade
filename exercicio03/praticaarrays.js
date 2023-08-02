const array = [1, 'dois', 3, 'quatro', 5, 'seis'];

//usando map

const arraymap = array.map(elemento =>{
    if(typeof elemento === 'number'){
        return elemento * 2
    } else if(typeof elemento === 'string'){
        return elemento.toUpperCase()
    } else{
        return elemento
    }
})

console.log(arraymap)

//filter

const arrayfilter = array.filter(numeros => typeof numeros === 'number')
console.log(arrayfilter)

//reduce

const arrayreduce = array.reduce((total,elemento) =>{
    if(typeof elemento === 'number'){
        return total + elemento
    } else{
        return total
    }
},0)
console.log(arrayreduce)