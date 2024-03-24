/* A stack is a collection of elements where the last inserted element sits at the very top of the stack
    & comes out first if stack has to be emptied, hence following a LIFO architecture */

class MainStack {
    constructor(){
        this.mainStack = []
    }

    get stack(){
        return this.mainStack
    }

    push(elem){
        // inserts the element at the top of the stack
        this.mainStack.push(elem)
    }

    pop(){
        // removes the element from the top of the stack
        if(this.mainStack.length){
            return this.mainStack.pop()
        }
        return 'The stack is empty'    
    }

    peek(){
        // displays the elemnt at the top of the stack without removing it
        if(this.mainStack.length){
            return this.mainStack[this.mainStack.length - 1]
        }
        return 'The stack is empty'
    }
}

const testStack1 = new MainStack()
testStack1.push(1)
testStack1.push(2)
testStack1.push(3)
console.log(testStack1.stack)
console.log(testStack1.pop())
console.log(testStack1.stack)
console.log(testStack1.peek())