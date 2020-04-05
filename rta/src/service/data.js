import { observable, decorate } from "mobx"

export default class tasksData {
    id
    named
    done
    dueDate

    constructor(id, named){
        this.id = id
        this.named = named
        this.done = false
        this.dueDate = Date.now()
    }
}

decorate(tasksData, {
    id: observable,
    named: observable,
    done: observable,
    dueDate: observable
})

// const tasksData = () => {
//     [
//         {
//             "id":"1",
//             "named":"Exercise",
//             "done":false,
//             "dueDate":"02.05.2020"
//         },
//         {
//             "id":"2",
//             "named":"Clean House",
//             "done":true,
//             "dueDate":"07.05.2020"
//         }
//     ]
// }

// const cardData = () => {
//     [
//         {
//             "id":"1",
//             "taskId":"1",
//             "description":"Run to Efieltower",
//             "label":"green"
//         },
//         {
//             "id":"2",
//             "taskId":"2",
//             "description":"Toilet, Living room, Barbershop",
//             "label":"blue"
//         },
//     ]
// }