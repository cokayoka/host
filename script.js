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
    $("#organisation").append('<option value="noSelect">---Выберите организацию---</option>');
    organisations.forEach(element => {
        $("#organisation").append('<option value="' + element.name + '">' + element.name + '</option>');
    });
    employees.forEach(element => {
        $("#employee").append('<option value="' + element.fullName + '">' + element.fullName + '</option>');
    });
    $("#employee").attr('disabled', 'disabled');
    $("#organisation").change(function(e) {
        if ($("#organisation").val() == "noSelect") {
            e.preventDefault();
            $("#employee").attr('disabled', 'disabled');
        } else {
            e.preventDefault();
            $("#employee").removeAttr('disabled');
        }
    });
    positions.forEach(element => {
        $("#form").append('<input type="checkbox" name="' + element.position + '"><label for="' + element.position + '">' + element.position + '</label>');
    });
});