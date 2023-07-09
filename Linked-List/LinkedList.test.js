const LinkedList = require('./LinkedList');

describe('#insertAtHead', () => {
    test('it adds the element to the beginning of the list', () => {
        const ll = new LinkedList()
        ll.insertAtHead(10)
        const oldHead = ll.head
        ll.insertAtHead(20)

        expect(ll.head.value).toBe(20)
        expect(ll.head.next).toBe(oldHead)
        expect(ll.length).toBe(2)

    })

})
describe('#InsertAtIndex', () => {
    test('insert at the middle', () => {
        const ll = LinkedList.fromValues(10, 20, 30, 40)
        ll.insertAtIndex(2, 50)
        const node = ll.getByIndex(2)
        expect(node.value).toBe(50)
        expect(node.next.value).toBe(30)
        expect(ll.length).toBe(5)
    })
})
describe('#getByIndex', () => {
    describe('with index less than ', () => {
        test('it returns null', () => {
            const ll = LinkedList.fromValues(10, 20)

            expect(ll.getByIndex(-1)).toBeNull()
        })
    })
})

describe('With Index 0', () => {
    test('it returns the head', () => {
        const ll = LinkedList.fromValues(10, 20)
        expect(ll.getByIndex(0).value).toBe(10)
    })
})
describe('With Index in the middle', () => {
    test('it returns the element at that index', () => {
        const ll = LinkedList.fromValues(10, 20, 30, 40)

        expect(ll.getByIndex(2).value).toBe(30)
    })
})

describe('#removeHead', () => {
    test('it removes the element at the beginning of the list', () => {
        const ll = LinkedList.fromValues(10, 20, 30)
        ll.removeHead()
        expect(ll.head.value).toBe(20)
        expect(ll.length).toBe(2)

    })
})
