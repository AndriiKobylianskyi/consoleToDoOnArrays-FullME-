const statuses = {
    TODO: `To Do`,
    INPROGRESS: `In Progress`,
    DONE: `Done`
}

const prioritys = {
    LOW: `low`,
    HIGH: `High`,
    MIDDLE: `Middle`
}

const toDo = []
let arr = []


function pushingForAudit() {
    for (let name of Object.values(toDo)) {
        arr.push(name.name)
    }
}


function auditTaskName(taskName) {
    if (!Object.values(arr).includes(taskName)) {
        console.log("This toDo not found")
    }
}


function auditExistence(obj, existance) {
    if (!Object.values(obj).includes(existance)) {
        console.log(`Not found ${existance}`)
    }
}


function addTask(taskName, status = statuses.TODO, priority = prioritys.LOW) {
    for (let key of Object.values(toDo)) {
        if (key.name === taskName) {
            return
        }
    }
    if (Object.values(statuses).includes(status) && Object.values(prioritys).includes(priority)) {
        toDo.push({
            name: taskName,
            status: status,
            priority: priority
        })
    } else {
        console.log("Not found status or priority")
    }
}

//addTaskTest
console.log(`=====addTaskTest=====`)
addTask(`Footabal`)
addTask(`Footabal`)
addTask(`Dota`, `123`)
addTask(`Dota`)
addTask(`Drink`, statuses.DONE, 45435435)
addTask(`Drink`)
addTask(`Sleep`)
addTask(`Study`)
pushingForAudit()
console.log(`\n`)
console.log(toDo)


function changeStatus(taskName, newStatus) {
    auditTaskName(taskName)
    auditExistence(statuses, newStatus)
    for (let obj of Object.values(toDo)) {
        if (obj.name === taskName) {
            obj.status = newStatus
            return
        }
    }
}


function changePriority(taskName, newPriority) {
    auditTaskName(taskName)
    auditExistence(prioritys, newPriority)
    for (let obj of Object.values(toDo)) {
        if (obj.name === taskName) {
            obj.priority = newPriority
            return
        }
    }
}


function deleteTask(taskName) {
    auditTaskName(taskName)
    for (let key in toDo) {
        if (toDo[key].name === taskName) {
            toDo.splice(key, 1)
        }

    }
}


function showByStatus() {
    let result = ``
    for (let key in statuses) {
        result += `----- ${key}\n`
        for (let k of Object.values(toDo)) {
            if (k.status === statuses[key]) {
                result += ` ${k.name}\n`
            }
        }
    }
    console.log(result)
}


function showByPriority() {
    let result = ``
    for (let key in prioritys) {
        result += `----- ${key}\n`
        for (let k of Object.values(toDo)) {
            if (k.priority === prioritys[key]) {
                result += ` ${k.name}\n`
            }
        }
    }
    console.log(result)
}

// changeStatusTest
console.log(`\n=====ChangeStatusTest=====`)
changeStatus(`Sleep`, 5345435)
changeStatus(`fdsfdsfdsf`, statuses.DONE)
changeStatus(`Sleep`, statuses.DONE)
changeStatus(`Study`, statuses.INPROGRESS)
console.log(`\n`)
console.log(toDo)

// changePriorityTest
console.log(`\n=====ChangePriorityTest=====`)
changePriority(`Sleep`, 5345435)
changePriority(`fdsfdsfdsf`, prioritys.LOW)
changePriority(`Sleep`, prioritys.HIGH)
changePriority(`Study`, prioritys.MIDDLE)
console.log(`\n`)
console.log(toDo)

//deleteTest
console.log(`\n=====DeleteTest=====`)
deleteTask(`Dota`)
deleteTask(`Drink`)
deleteTask(`Drin5435435435k`)
console.log(`\n`)
console.log(toDo)

//ShowByStatus
console.log(`\n=====ShowByStatus=====\n`)
showByStatus()

//ShowByPriority
console.log(`\n=====ShowByPriority=====\n`)
showByPriority()

