let organisations = [{
        id: 1,
        name: "Lada",
    },
    {
        id: 2,
        name: "Audi",
    },
    {
        id: 3,
        name: "Toyota",
    },

];

let positions = [{
        id: 10,
        position: "Директор",
    },
    {
        id: 20,
        position: "Инженер",
    },
    {
        id: 30,
        position: "Менеджер",
    },


]

let employees = [{
        id: 1,
        fullName: "Сидоров Иван Петрович",
        organisationId: 1,
        positionId: 10,
    },
    {
        id: 2,
        fullName: "Клюквина Анастасия Викторовна",
        organisationId: 1,
        positionId: 30,
    },
    {
        id: 3,
        fullName: "Yoshimoro Katsumi",
        organisationId: 3,
        positionId: 10,
    },
    {
        id: 4,
        fullName: "Albrecht Wallenstein",
        organisationId: 2,
        positionId: 20,
    },
    {
        id: 5,
        fullName: "Архипов Федот Ярополкович",
        organisationId: 1,
        positionId: 20,
    },
    {
        id: 6,
        fullName: "Синицына Ксения Игоревна",
        organisationId: 1,
        positionId: 30,
    },
    {
        id: 7,
        fullName: "Gustaf Grefberg",
        organisationId: 2,
        positionId: 10,
    },
    {
        id: 8,
        fullName: "Simidzu Koyama",
        organisationId: 3,
        positionId: 20,
    },
    {
        id: 9,
        fullName: "Miura Hirana",
        organisationId: 3,
        positionId: 20,
    },
    {
        id: 10,
        fullName: "Кузьмин Егор Владимирович",
        organisationId: 1,
        positionId: 30,
    },
    {
        id: 11,
        fullName: "Мазурик Алёна Васильевна",
        organisationId: 1,
        positionId: 20,
    },
    {
        id: 12,
        fullName: "Gudrun Ensslin",
        organisationId: 2,
        positionId: 30,
    },
    {
        id: 13,
        fullName: "Ernst Rommel",
        organisationId: 2,
        positionId: 20,
    },

];

$(document).ready(function() {
    //Отключение списка сотрудников при загрузке
    $("#employee").attr('disabled', 'disabled');

    //Отрисовка списка организаций
    $("#organisation").append('<option value="noSelect">---Выберите организацию---</option>');
    organisations.forEach(element => {
        $("#organisation").append('<option value="' + element.name + '">' + element.name + '</option>');
    });
    $("#organisation option:even").addClass("even");
    $("#organisation option:odd").addClass("odd");

    //Включение и отключение доступа к списку сотрудников
    $("#organisation").change(function(e) {


        if ($("#organisation").val() == "noSelect") {
            e.preventDefault();
            $("#employee").attr('disabled', 'disabled');
            drawEmpList();
        } else {
            e.preventDefault();
            $("#employee").removeAttr('disabled');
            drawEmpList();
        }
    });


    //Отрисовка списка сотрудников
    function drawEmpList() {
        clearEmpList();
        let organisationId = searchOrgId($("#organisation").val());
        let checkedPositionsId = checkboxCheck();


        employees.forEach(element => {
            if ((organisationId == element.organisationId && checkedPositionsId.length == 0) || (organisationId == element.organisationId && checkedPositionsId.indexOf(element.positionId) != -1)) {

                $("#employee").append('<option class="red" value="' + element.fullName + '">' + element.fullName + '</option>');
            }

        });

        $("#employee option:even").addClass("even");
        $("#employee option:odd").addClass("odd");
    }


    //Отрисовка списка должностей
    positions.forEach(element => {

        $("#checkboxes").append('<div class="checkboxWithLabel"><input type="checkbox" name="' + element.position + '"><label for="' + element.position + '">' + element.position + '</label></div>');
    });


    //Изменение состояние checkbox
    $("#checkboxes").change(function(e) {
        drawEmpList();
    });

    //Добавление в список по клику на "добавить"
    $("#addBtn").click(function(e) {
        e.preventDefault();
        let checkedPositionId = checkboxCheck();
        if (checkedPositionId.length == 0) {
            alert("Выберите хотя бы одну должность");
            return;
        }
        $("#informationField").append('<div>' + employee.value + " - " + searchPos(checkedPositionId, $("#organisation").val(), $("#employee").val()) + "(" + $("#organisation").val() + ")" + '</div>');

    });
    //Очистка списка по клику на "очистить"
    $("#clrBtn").click(function(e) {

        $("#informationField").empty();
    });
});
//Функция поиска названия должности
function searchPos(posId, orgName, fullName) {
    let orgId = searchOrgId(orgName);
    let positionId;
    let positon;
    employees.forEach(element => {
        if (posId.indexOf(element.positionId) != -1 && orgId == element.organisationId && fullName == element.fullName) {
            positionId = element.positionId
        }
    });
    positions.forEach(element => {
        if (element.id == positionId) {
            position = element.position;
        }
    });
    return position;
}

//Проверка выделенных чекбоксов
function checkboxCheck() {
    let checkedPositions = [];
    $("#checkboxes input:checked").each(function(i, element) {
        checkedPositions.push(searchPosId(element.name));
    });
    return checkedPositions;
}

//Поиск id должности
function searchPosId(position) {
    let posId = undefined;
    positions.forEach(element => {
        if (element.position == position) {
            posId = element.id;
        }

    });
    return posId;
}

//Поиск id организации по ее имени выбранного в списке
function searchOrgId(name) {
    let orgId;
    organisations.forEach(element => {
        if (element.name == name) {
            orgId = element.id;
        }
    });
    return orgId;
}


//Очистка списка сотрудников
function clearEmpList() {
    $("#employee").empty();
}