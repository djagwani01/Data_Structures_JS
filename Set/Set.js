/* Set is a collection of unique elements. Order doesn't matter in a set. It is useful when you require a data structure that only consists of
    unique values & avoids duplicate values */

/* 
    Some of the common operations are
        - Adding an element in the set
        - Removing an element from the set
        - Check if set has an element
        - Size of the set
        - Union of two sets
        - Intersection of two sets
        - Difference of two sets
        - Is a set subset of another set
*/

class mainSet {
    constructor(){
        this.mainSet = []
    }

    add(element){
        if(!this.has(element)){
            this.mainSet.push(element)
            console.log(`added element to ${this.mainSet}- ${element}`)
        } else{
            console.log(`Element already added in ${this.mainSet} --------> element- ${element}`)
        }
    }

    has(element){
        if(this.mainSet.indexOf(element) !== -1){
            return true
        }
        return false
    }

    get instanceSet(){
        return this.mainSet
    }

    get size(){
        return this.mainSet.length
    }

    remove(element){
        if(!this.size){
            console.log('The set is empty')
        } else if(!this.has(element)){
            console.log(`The set does not have element- ${element}`)
        }
        else{
            const elementRemoved = this.mainSet.splice(this.mainSet.indexOf(element), 1)[0]
            console.log(`removed element- ${elementRemoved}`)
        }
    }

    union(testSet){
        const combinedSet = this.mainSet.concat(testSet)
        let unionSet = new mainSet()
        for(let i=0; i<combinedSet.length; i++){
                unionSet.add(combinedSet[i])
        }
        return unionSet.instanceSet
    }

    intersection(testSet){
        let intersectionSet = new mainSet()
        for(let i=0; i<this.mainSet.length; i++){
            if(testSet.includes(this.mainSet[i])){
                intersectionSet.add(this.mainSet[i])
            }
        }
        return intersectionSet.instanceSet
    }

    difference(testSet){
        const intersectionSet = testSet.intersection(this.mainSet)
        const unionSet = testSet.union(this.mainSet)
        let differenceSet = new mainSet()
        for(let i=0; i<unionSet.length; i++){
            if(!(intersectionSet.includes(unionSet[i]))){
                differenceSet.add(unionSet[i])
            }
        }
        return differenceSet.instanceSet
    }
}

const testSetA = new mainSet()
testSetA.add(24)
testSetA.add(40)
testSetA.add(4)
testSetA.add(10)
testSetA.add(7)
testSetA.add(40)
testSetA.add(12)
testSetA.add(11)
testSetA.add(24)
console.log(`Set size- ${testSetA.size}`)
console.log(`Set- ${testSetA.instanceSet}`)
console.log(`Set has element- ${testSetA.has(5)}`)
console.log(`Set has element- ${testSetA.has(7)}`)
testSetA.remove(5)
testSetA.remove(12)
console.log(`Set size- ${testSetA.size}`)
console.log(`Set- ${testSetA.instanceSet}`)

const testSetB = new mainSet()
testSetB.add(31)
testSetB.add(40)
testSetB.add(6)
testSetB.add(10)
testSetB.add(7)
testSetB.add(40)
testSetB.add(12)
testSetB.add(11)
testSetB.add(20)
testSetB.add(24)
testSetB.add(11)
testSetB.add(15)
testSetB.add(19)

console.log(`intersection of sets ${testSetA.instanceSet} and ${testSetB.instanceSet} is- ${testSetA.intersection(testSetB.instanceSet)}`)
console.log(`union of sets ${testSetA.instanceSet} and ${testSetB.instanceSet} is- ${testSetA.union(testSetB.instanceSet)}`)
console.log(`difference of sets ${testSetA.instanceSet} and ${testSetB.instanceSet} is- ${testSetA.difference(testSetB)}`)