const groupsList = document.querySelector('.box');

let requestURL = 'https://boosb.github.io/json/groupsandsubjects.json';   
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    let groupSubjects = request.response;   
    createdDOM(groupSubjects);    // создаю объектную модель документа из объектов JSON

    var switch1 = new Switch('#group-list-wrapper', '.group-item', 'group-title');      // создаю первый переключатель для просмотра списка предметов
    switch1.init();

    var switch2 = new Switch('#group-list-wrapper', '.subjects-item', 'subjects-title');   // создаю второй переключатель для просмотра таблицы посещаемости
    switch2.init();

}

function createdDOM(jsonObj) {
    let groupsListTitle = document.createElement('h2'),
        group = jsonObj.group,
        groupListWrapper = document.createElement('div');

    groupsListTitle.textContent = jsonObj.titleOne;
    groupsList.appendChild(groupsListTitle);
    groupListWrapper.setAttribute('id', 'group-list-wrapper');
    groupsList.appendChild(groupListWrapper);

    for (let i = 0; i < group.length; i++) {
        let groupItem = document.createElement('div'),
            groupTitle = document.createElement('div'),
            subjectsListContent = document.createElement('ul'),
            subtitleSubjects = document.createElement('h3'),
            grSubj = group[i].subjects;

        groupItem.setAttribute('class', 'group-item');
        groupTitle.setAttribute('class', 'group-title');
        groupTitle.textContent = group[i].name;
        groupListWrapper.appendChild(groupItem);
        groupItem.appendChild(groupTitle);
        subjectsListContent.setAttribute('id', 'subjects-list-content');
        groupItem.appendChild(subjectsListContent);
        subtitleSubjects.textContent = jsonObj.titleTwo;
        subjectsListContent.appendChild(subtitleSubjects);

        for (let j = 0; j < grSubj.length; j++) {
            let subjectsListElem = document.createElement('li'),
                subjectsElemText = document.createElement('div'),
                tableWrapper = document.createElement('div'),
                tableTitle = document.createElement('h3'),
                grStud = group[i].subjects[j].studentList,
                tableUnderSubjects = document.createElement('table'),
                thead = document.createElement('thead'),
                tr = document.createElement('tr'),
                th = document.createElement('th'),
                tboby = document.createElement('tbody');

            subjectsListElem.setAttribute('class', 'subjects-item');
            subjectsElemText.setAttribute('class', 'subjects-title');

            subjectsElemText.textContent = grSubj[j].name + ' (' + grSubj[j].teacher + ');';
            subjectsListContent.appendChild(subjectsListElem);
            subjectsListElem.appendChild(subjectsElemText);
   
            tableWrapper.setAttribute('id', 'table-wrapper');
            subjectsListElem.appendChild(tableWrapper);

            tableTitle.textContent = 'Посещаемость занятий по предмету обучения "' + grSubj[j].name + '" студентами группы "' + group[i].name + '". Преподаватель: ' + grSubj[j].teacher;
            tableWrapper.appendChild(tableTitle);

            tableUnderSubjects.setAttribute('class', 'attendance-table');
            tableWrapper.appendChild(tableUnderSubjects);
            tableUnderSubjects.appendChild(thead);
            thead.appendChild(tr);
            tr.appendChild(th);
            th.textContent = 'Ф.И.О.';

            for (let x = 0; x < jsonObj.month.days.length; x++) {
                let monthDay = jsonObj.month.days[x],
                    thCreate = document.createElement('th');
                //let thCreate = document.createElement('th');
                thCreate.textContent = monthDay + '.' + jsonObj.month.name[1];
                tr.appendChild(thCreate);
            }

            tableUnderSubjects.appendChild(tboby);

            for (let y = 0; y < grStud.length; y++) {
                let studentName = grStud[y].name,
                    studentAttendance = grStud[y].attendance,
                    trCreate = document.createElement('tr'),
                    tdCreate = document.createElement('td');

                tdCreate.textContent = studentName;
                tboby.appendChild(trCreate);
                trCreate.appendChild(tdCreate);
                for (let z = 0; z < studentAttendance.length; z++) {
                    let tdCreateTest = document.createElement('td');
                    let lableText = jsonObj.month.days[z] + '.' + jsonObj.month.name[1];
                    tdCreateTest.setAttribute('aria-label', lableText);
                    tdCreateTest.textContent = studentAttendance[z];
                    trCreate.appendChild(tdCreateTest);

                }
            }
        }
    }
}


let Switch = function (mainSelector, itemSelector, titleSelector) {
    let mainElem = document.querySelector(mainSelector),
        items = mainElem.querySelectorAll(itemSelector);
    this.getMainElem = function () {
        return mainElem;
    }
    this.getItems = function () {
        return items;
    }
    this.getItem = function (elements, className) { // получаем эл-т с указанным классом
        let element = undefined;
        elements.forEach(function (item) {
            if (item.classList.contains(className)) {
                element = item;
            }
        })
        return element;
    }
    this.getTitle = function (){
        return titleSelector;
    }
}

Switch.prototype = function () {
    
    let chekOut = function (e, elem) {
        console.log(elem);
        if (!e.target.classList.contains(elem.getTitle())) { // проверям кликнули ли по заголовку, если нет - останавливаем функцию
            return;
        }
        e.preventDefault(); 
        let title = e.target,
            item = title.parentElement,
            active = elem.getItem(elem.getItems(), 'active');
            //console.log(item);
            //console.log(e.target.className);
        if (active === undefined) {             // добавляем класс active к нужному элементу
            item.classList.add('active');
        } else {                                // удаляем класс у ткущего элемента
            active.classList.remove('active');
            if (active !== item) {              // если следующая вкладка не равна активной
                item.classList.add('active');   // добавляем класс active в зависимости от выбранного заголовка
            }
        }
    }
    let listener = function (elem) {                                 // добавим обработчик события
        elem.getMainElem().addEventListener('click', function (e) {
            chekOut(e, elem);
        })
    }
    let init = function () {
        listener(this);
    }
    return {
        init: init
    }
}()