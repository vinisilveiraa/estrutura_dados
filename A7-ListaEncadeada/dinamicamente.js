class Node {
    constructor(value) {
        this.value = value;
        this.next = undefined;
    }
}

class ListaEncadeada {
    #head = undefined;
    #length = 0;

    insertBegginning(value) {
        let newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;

        this.#length++
    }

    insertEnd(value) {
        let newNode = new Node(value);

        if (this.#head === undefined) {
            this.#head = newNode;
            return;
        }

        let current = this.#head;
        while (current.next !== undefined) {
            current = current.next;
            // enquanto o current nao for undefined(fim da lista) ele continuara checando com o proximo
        }
        current.next = newNode;
        this.#length++;
    }

    removeValue(value) {
        if (this.#head === undefined) {
            return
        }
        if (this.#head.value === value) {
            this.#head = this.#head.next
            // passa a #head pro proximo no, deixando a head anterior fora da lista
            return
        }

        let current = this.#head;

        while (current.next !== undefined && current.next.value !== value) {
            // enquanto o proximo elemento de current nao for undefined e o valor dele for igual ao valor inserido ele percorre a lista 
            current = current.next;
        }
        if (current.next !== undefined) {
            current.next = current.next.next;
            
            //    1       2      3 
            // current  .next  .next
            //            ^apagado
        }
        this.#length--;
    }

    find(value) {
        let current = this.#head

        while (current !== undefined) {
            console.log(current.value)
            // percorre toda a lista
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return undefined
    }

    size() {
        let count = 0;
        let current = this.#head;
        while (current !== undefined) {
            count++ ;
            current = current.next;
        }
        return count;
    }

    isEmpty = () => this.#head === undefined;

    toString() {
        let current = this.#head;
        let list = '';

        while(current !== undefined) {
            list += current.value + ' -> ';
            current = current.next;
        }
        console.log(list + 'undefined')
    }
}

module.exports = ListaEncadeada;