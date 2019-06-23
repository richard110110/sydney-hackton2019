var imgs = document.getElementById("portfolio");
var node = imgs.getElementsByTagName("img");
console.log(node);
console.log(node.length);

var url = "./causeInfo.json";

var Underprivileged = document.querySelector("#Underprivileged");
var UnderMeals = document.querySelector("#meals");
var educationSessions = document.querySelector("#edusession")
var crisisInterv = document.querySelector("#crisisInterv");

var refugee = document.querySelector("#Refugees");
var safesleep = document.querySelector("#safe-sleep");
var foodgrocery = document.querySelector("#food-grocery");
var dollar_support = document.querySelector("#dollars-support");

var child_slavery = document.querySelector("#child");
var monthVocation = document.querySelector("#MonthsVocation");
var monthLive = document.querySelector("#MonthsLive");
var socialSupport = document.querySelector("#socialSupport");

var mental = document.querySelector("#mentalHealth");
var nationalcall = document.querySelector("#nationalcalls");
var peoplereach = document.querySelector("#peopleReach");
var healthservice = document.querySelector("#healthServices");

var domestic_violence = document.querySelector("#domestic-violence");
var Victims_support = document.querySelector("#Victims_support");
var relocate = document.querySelector("#relocate");
var domestic_achieve3 = document.querySelector("#domestic-achieve3");

var global_poverty = document.querySelector("#global_poverty");
var long_lasting = document.querySelector("#long-lasting");
var Lives_saved = document.querySelector("#Lives-saved");
var global_none = document.querySelector("#global-none");

var socialEnterprise = document.querySelector("#socialEnterprise");
var weeksFull = document.querySelector("#weeksFull");
var OnsiteTraining = document.querySelector("#OnsiteTraining");
var EnglishTuition = document.querySelector("#EnglishTuition");

var youthAtRisk = document.querySelector("#youthAtRisk");
var mentor = document.querySelector("#mentor");
var supportAfter = document.querySelector("#supportAfter");
var AdviceOnTrack = document.querySelector("#AdviceOnTrack");

var UnderprivilegedModal = document.querySelector("#UnderprivilegedModal");
var CharityUnderprivilegedModal = document.querySelector("#CharityUnderprivilegedModal");

var RefugeesName = document.querySelector("#RefugeesName");
var RefugeesCharity = document.querySelector("#RefugeesCharity");

var childslaveryName = document.querySelector("#childslaveryName");
var childslaverycharity = document.querySelector("#childslaverycharity");

var domesticViolenceName = document.querySelector("#domesticViolenceName");
var domesticViolenceCharity = document.querySelector("#domesticViolenceCharity");

var globalpovertyName = document.querySelector("#globalpovertyName");
var globalpovertyCharity = document.querySelector("#globalpovertyCharity");

var socialenterpriseName = document.querySelector("#socialenterpriseName");
var socialenterpriseCharity = document.querySelector("#socialenterpriseCharity");

var youthAtRiskName = document.querySelector("#youthAtRiskName");
var youthAtRiskCharity = document.querySelector("#youthAtRiskCharity");

fetch(url).then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data.causes.underPrivilagedYouth.causeName);
        updatePortfolio(data);
        updateModal(data);

    });

function updateModal(data) {
    UnderprivilegedModal.innerText = data.causes.underPrivilagedYouth.causeName;
    CharityUnderprivilegedModal.innerText = data.causes.underPrivilagedYouth.charityName;

    RefugeesName.innerText = data.causes.refugeesInAustralia.causeName;
    RefugeesCharity.innerText = data.causes.refugeesInAustralia.charityName;

    childslaveryName.innerText = data.causes.childSlavery.causeName;
    childslaverycharity.innerText = data.causes.childSlavery.charityName;

    mentalHealthName.innerText = data.causes.mentalHealth.causeName;
    mentalHealthCharity.innerText = data.causes.mentalHealth.charityName;

    domesticViolenceName.innerText = data.causes.womanDomesticViolence.causeName;
    domesticViolenceCharity.innerText = data.causes.womanDomesticViolence.charityName;

    globalpovertyName.innerText = data.causes.globalPoverty.causeName;
    globalpovertyCharity.innerText = data.causes.globalPoverty.charityName;

    socialenterpriseName.innerText = data.causes.socialEnterprise.causeName;
    socialenterpriseCharity.innerText = data.causes.socialEnterprise.charityName;

    youthAtRiskName.innerText = data.causes.youthAtRisk.causeName;
    youthAtRiskCharity.innerText = data.causes.youthAtRisk.charityName;

}

function updatePortfolio(data) {
    Underprivileged.innerText = data.causes.underPrivilagedYouth.causeName;
    UnderMeals.innerText = data.causes.underPrivilagedYouth.thousandAchieves.achieve1.achieveName;
    educationSessions.innerText = data.causes.underPrivilagedYouth.thousandAchieves.achieve2.achieveName;
    crisisInterv.innerText = data.causes.underPrivilagedYouth.thousandAchieves.achieve3.achieveName;

    refugee.innerText = data.causes.refugeesInAustralia.causeName;
    safesleep.innerText = data.causes.refugeesInAustralia.thousandAchieves.achieve1.achieveName;
    foodgrocery.innerText = data.causes.refugeesInAustralia.thousandAchieves.achieve2.achieveName;
    dollar_support.innerText = data.causes.refugeesInAustralia.thousandAchieves.achieve3.achieveName;

    child_slavery.innerText = data.causes.childSlavery.causeName;
    monthVocation.innerText = data.causes.childSlavery.thousandAchieves.achieve1.achieveName;
    monthLive.innerText = data.causes.childSlavery.thousandAchieves.achieve2.achieveName;
    socialSupport.innerText = data.causes.childSlavery.thousandAchieves.achieve3.achieveName;

    mental.innerText = data.causes.mentalHealth.causeName;
    nationalcall.innerText = data.causes.mentalHealth.thousandAchieves.achieve1.achieveName;
    peoplereach.innerText = data.causes.mentalHealth.thousandAchieves.achieve2.achieveName;
    healthservice.innerText = data.causes.mentalHealth.thousandAchieves.achieve3.achieveName;

    domestic_violence.innerText = data.causes.womanDomesticViolence.causeName;
    Victims_support.innerText = data.causes.womanDomesticViolence.thousandAchieves.achieve1.achieveName;
    relocate.innerText = data.causes.womanDomesticViolence.thousandAchieves.achieve2.achieveName;
    domestic_achieve3.innerText = data.causes.womanDomesticViolence.thousandAchieves.achieve3.achieveName;

    global_poverty.innerText = data.causes.globalPoverty.causeName;
    long_lasting.innerText = data.causes.globalPoverty.thousandAchieves.achieve1.achieveName;
    Lives_saved.innerText = data.causes.globalPoverty.thousandAchieves.achieve2.achieveName;
    global_none.innerText = data.causes.globalPoverty.thousandAchieves.achieve3.achieveName;

    socialEnterprise.innerText = data.causes.socialEnterprise.causeName;
    weeksFull.innerText = data.causes.socialEnterprise.thousandAchieves.achieve1.achieveName;
    OnsiteTraining.innerText = data.causes.socialEnterprise.thousandAchieves.achieve2.achieveName;
    EnglishTuition.innerText = data.causes.socialEnterprise.thousandAchieves.achieve3.achieveName;

    youthAtRisk.innerText = data.causes.youthAtRisk.causeName;
    mentor.innerText = data.causes.youthAtRisk.thousandAchieves.achieve1.achieveName;
    supportAfter.innerText = data.causes.youthAtRisk.thousandAchieves.achieve2.achieveName;
    AdviceOnTrack.innerText = data.causes.youthAtRisk.thousandAchieves.achieve3.achieveName;

}

function displayChart() {
    var enteredValue = document
        .getElementById("enter")
        .value;
    console.log(document.getElementById("enter").value);

    fetch(url).then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data.causes.underPrivilagedYouth.causeName);

            new Chart(document.getElementById("bar-chart-grouped"), {
                type: 'bar',
                data: {
                    labels: [
                        data.causes.underPrivilagedYouth.causeName,
                        data.causes.childSlavery.causeName,
                        data.causes.mentalHealth.causeName,
                        data.causes.womanDomesticViolence.causeName,
                        data.causes.globalPoverty.causeName,
                        data.causes.socialEnterprise.causeName,
                        data.causes.youthAtRisk.causeName
                    ],
                    datasets: [{
                        label: "Achieve1",
                        backgroundColor: "red",
                        data: [
                            (Math.floor(enteredValue * (data.causes.underPrivilagedYouth.thousandAchieves.achieve1.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.childSlavery.thousandAchieves.achieve1.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.mentalHealth.thousandAchieves.achieve1.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.womanDomesticViolence.thousandAchieves.achieve1.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.globalPoverty.thousandAchieves.achieve1.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.socialEnterprise.thousandAchieves.achieve1.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.youthAtRisk.thousandAchieves.achieve1.achieveAmount / 1000)))
                        ]
                    }, {
                        label: "Achieve2",
                        backgroundColor: "pink",
                        data: [
                            (Math.floor(enteredValue * (data.causes.underPrivilagedYouth.thousandAchieves.achieve2.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.childSlavery.thousandAchieves.achieve2.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.mentalHealth.thousandAchieves.achieve2.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.womanDomesticViolence.thousandAchieves.achieve2.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.globalPoverty.thousandAchieves.achieve2.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.socialEnterprise.thousandAchieves.achieve2.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.youthAtRisk.thousandAchieves.achieve2.achieveAmount / 1000)))
                        ]
                    }, {
                        label: "Achieve3",
                        backgroundColor: "lightblue",
                        data: [
                            (Math.floor(enteredValue * (data.causes.underPrivilagedYouth.thousandAchieves.achieve1.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.childSlavery.thousandAchieves.achieve3.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.mentalHealth.thousandAchieves.achieve3.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.womanDomesticViolence.thousandAchieves.achieve3.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.globalPoverty.thousandAchieves.achieve3.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.socialEnterprise.thousandAchieves.achieve3.achieveAmount / 1000))),
                            (Math.floor(enteredValue * (data.causes.youthAtRisk.thousandAchieves.achieve3.achieveAmount / 1000)))
                        ]
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Your donation result'
                    }
                }
            });

        });

}

function displayEachCauseChart() {
    var enteredValue = document
        .getElementById("enter")
        .value;
    console.log(document.getElementById("enter").value);

    var piechart = document.getElementById("piechart");
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        var piechart_data = {
            labels: [
                data.causes.underPrivilagedYouth.thousandAchieves.achieve1.achieveName,
                data.causes.underPrivilagedYouth.thousandAchieves.achieve2.achieveName,
                data.causes.underPrivilagedYouth.thousandAchieves.achieve3.achieveName

            ],
            datasets: [{
                data: [(Math.floor(enteredValue * (data.causes.underPrivilagedYouth.thousandAchieves.achieve1.achieveAmount / 1000))), (Math.floor(enteredValue * (data.causes.underPrivilagedYouth.thousandAchieves.achieve2.achieveAmount / 1000))),  (Math.floor(enteredValue * (data.causes.underPrivilagedYouth.thousandAchieves.achieve3.achieveAmount / 1000))) ],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        };
        var myPieChart = new Chart(piechart, {
            type: 'pie',
            data: piechart_data
        });

    })








}


function displayEachCauseChart2() {
    var enteredValue = document
        .getElementById("enter")
        .value;
    console.log(document.getElementById("enter").value);

    var piechart = document.getElementById("piechart2");
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        var piechart_data = {
            labels: [
                data.causes.refugeesInAustralia.thousandAchieves.achieve1.achieveName,
                data.causes.refugeesInAustralia.thousandAchieves.achieve2.achieveName,
                data.causes.refugeesInAustralia.thousandAchieves.achieve3.achieveName

            ],
            datasets: [{
                data: [(Math.floor(enteredValue * (data.causes.refugeesInAustralia.thousandAchieves.achieve1.achieveAmount / 1000))), (Math.floor(enteredValue * (data.causes.refugeesInAustralia.thousandAchieves.achieve2.achieveAmount / 1000))),  (Math.floor(enteredValue * (data.causes.refugeesInAustralia.thousandAchieves.achieve3.achieveAmount / 1000))) ],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        };
        var myPieChart = new Chart(piechart, {
            type: 'pie',
            data: piechart_data
        });

    })








}


function displayEachCauseChart3() {
    var enteredValue = document
        .getElementById("enter")
        .value;
    console.log(document.getElementById("enter").value);

    var piechart = document.getElementById("piechart3");
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        var piechart_data = {
            labels: [
                data.causes.childSlavery.thousandAchieves.achieve1.achieveName,
                data.causes.childSlavery.thousandAchieves.achieve2.achieveName,
                data.causes.childSlavery.thousandAchieves.achieve3.achieveName

            ],
            datasets: [{
                data: [(Math.floor(enteredValue * (data.causes.childSlavery.thousandAchieves.achieve1.achieveAmount / 1000))), (Math.floor(enteredValue * (data.causes.childSlavery.thousandAchieves.achieve2.achieveAmount / 1000))),  (Math.floor(enteredValue * (data.causes.childSlavery.thousandAchieves.achieve3.achieveAmount / 1000))) ],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        };
        var myPieChart = new Chart(piechart, {
            type: 'pie',
            data: piechart_data
        });

    })








}

function displayEachCauseChart4() {
    var enteredValue = document
        .getElementById("enter")
        .value;
    console.log(document.getElementById("enter").value);

    var piechart = document.getElementById("piechart4");
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        var piechart_data = {
            labels: [
                data.causes.mentalHealth.thousandAchieves.achieve1.achieveName,
                data.causes.mentalHealth.thousandAchieves.achieve2.achieveName,
                data.causes.mentalHealth.thousandAchieves.achieve3.achieveName

            ],
            datasets: [{
                data: [(Math.floor(enteredValue * (data.causes.mentalHealth.thousandAchieves.achieve1.achieveAmount / 1000))), (Math.floor(enteredValue * (data.causes.mentalHealth.thousandAchieves.achieve2.achieveAmount / 1000))),  (Math.floor(enteredValue * (data.causes.mentalHealth.thousandAchieves.achieve3.achieveAmount / 1000))) ],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        };
        var myPieChart = new Chart(piechart, {
            type: 'pie',
            data: piechart_data
        });

    })








}


function displayEachCauseChart5() {
    var enteredValue = document
        .getElementById("enter")
        .value;
    console.log(document.getElementById("enter").value);

    var piechart = document.getElementById("piechart5");
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        var piechart_data = {
            labels: [
                data.causes.womanDomesticViolence.thousandAchieves.achieve1.achieveName,
                data.causes.womanDomesticViolence.thousandAchieves.achieve2.achieveName,
                data.causes.womanDomesticViolence.thousandAchieves.achieve3.achieveName

            ],
            datasets: [{
                data: [(Math.floor(enteredValue * (data.causes.womanDomesticViolence.thousandAchieves.achieve1.achieveAmount / 1000))), (Math.floor(enteredValue * (data.causes.womanDomesticViolence.thousandAchieves.achieve2.achieveAmount / 1000))),  (Math.floor(enteredValue * (data.causes.womanDomesticViolence.thousandAchieves.achieve3.achieveAmount / 1000))) ],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        };
        var myPieChart = new Chart(piechart, {
            type: 'pie',
            data: piechart_data
        });

    })








}

function displayEachCauseChart6() {
    var enteredValue = document
        .getElementById("enter")
        .value;
    console.log(document.getElementById("enter").value);

    var piechart = document.getElementById("piechart6");
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        var piechart_data = {
            labels: [
                data.causes.globalPoverty.thousandAchieves.achieve1.achieveName,
                data.causes.globalPoverty.thousandAchieves.achieve2.achieveName,
                data.causes.globalPoverty.thousandAchieves.achieve3.achieveName

            ],
            datasets: [{
                data: [(Math.floor(enteredValue * (data.causes.globalPoverty.thousandAchieves.achieve1.achieveAmount / 1000))), (Math.floor(enteredValue * (data.causes.globalPoverty.thousandAchieves.achieve2.achieveAmount / 1000))),  (Math.floor(enteredValue * (data.causes.globalPoverty.thousandAchieves.achieve3.achieveAmount / 1000))) ],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        };
        var myPieChart = new Chart(piechart, {
            type: 'pie',
            data: piechart_data
        });

    })








}


function displayEachCauseChart7() {
    var enteredValue = document
        .getElementById("enter")
        .value;
    console.log(document.getElementById("enter").value);

    var piechart = document.getElementById("piechart7");
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        var piechart_data = {
            labels: [
                data.causes.socialEnterprise.thousandAchieves.achieve1.achieveName,
                data.causes.socialEnterprise.thousandAchieves.achieve2.achieveName,
                data.causes.socialEnterprise.thousandAchieves.achieve3.achieveName

            ],
            datasets: [{
                data: [(Math.floor(enteredValue * (data.causes.socialEnterprise.thousandAchieves.achieve1.achieveAmount / 1000))), (Math.floor(enteredValue * (data.causes.socialEnterprise.thousandAchieves.achieve2.achieveAmount / 1000))),  (Math.floor(enteredValue * (data.causes.socialEnterprise.thousandAchieves.achieve3.achieveAmount / 1000))) ],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        };
        var myPieChart = new Chart(piechart, {
            type: 'pie',
            data: piechart_data
        });

    })








}

function displayEachCauseChart8() {
    var enteredValue = document
        .getElementById("enter")
        .value;
    console.log(document.getElementById("enter").value);

    var piechart = document.getElementById("piechart8");
    fetch(url).then(function (res) {
        return res.json();
    }).then(function (data) {
        var piechart_data = {
            labels: [
                data.causes.youthAtRisk.thousandAchieves.achieve1.achieveName,
                data.causes.youthAtRisk.thousandAchieves.achieve2.achieveName,
                data.causes.youthAtRisk.thousandAchieves.achieve3.achieveName

            ],
            datasets: [{
                data: [(Math.floor(enteredValue * (data.causes.youthAtRisk.thousandAchieves.achieve1.achieveAmount / 1000))), (Math.floor(enteredValue * (data.causes.youthAtRisk.thousandAchieves.achieve2.achieveAmount / 1000))),  (Math.floor(enteredValue * (data.causes.youthAtRisk.thousandAchieves.achieve3.achieveAmount / 1000))) ],
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
        };
        var myPieChart = new Chart(piechart, {
            type: 'pie',
            data: piechart_data
        });

    })








}
function getDonation() {
    var value = document
        .getElementById("enter")
        .value;

    if (value < 1000 && value > 0) {
        alertify.warning('our minimum is $1000');
        preventDefault();
    }
    if (value < 0) {
        alertify.error('do not make a joke here ');
        preventDefault();

    }
    if (value == null || value == "") {
        alertify.warning('please enter the amount you want to donate: ');
        preventDefault();

    }
    if (isNaN(value)) {
        alertify.error('please enter a number');
        preventDefault();

    }

    var meal = Math.floor(value * 0.053);
    var edus = Math.floor(value * 0.011);
    var crisis = Math.floor(value * 0.021);

    document
        .getElementById("meal1")
        .innerText = meal;
    document
        .getElementById("edu1")
        .innerText = edus;
    document
        .getElementById("crisis1")
        .innerText = crisis;

    var sleep = Math.floor(value * 0.016);
    var food = Math.floor(value * 0.0016);
    var financial = Math.floor(value * 0.093);

    document
        .getElementById("SafeSleep")
        .innerText = sleep;
    document
        .getElementById("FoodAndGrocery")
        .innerText = food;
    document
        .getElementById("FinancialSupport")
        .innerText = financial;

    var months = Math.floor(value * 0.006);
    var accommodation = Math.floor(value * 0.006);
    var socialSupport = Math.floor(value * 0);

    document
        .getElementById("MonthsVocationalTraining")
        .innerText = months;
    document
        .getElementById("MonthsAccommodation")
        .innerText = accommodation;
    document
        .getElementById("SocialSupportToAidIntegration")
        .innerText = socialSupport;

    var nationalcall = Math.floor(value * 0.00112);
    var PeopleReached = Math.floor(value * 0);
    var HealthService = Math.floor(value * 0.0012);

    document
        .getElementById("nationalcall")
        .innerText = nationalcall;
    document
        .getElementById("PeopleReached")
        .innerText = PeopleReached;
    document
        .getElementById("HealthService")
        .innerText = HealthService;

    var Victims = (Math.floor(value * 0.006)).toFixed(2);
    var Relocations = (Math.floor(value * 0.0034)).toFixed(2);
    var none = (Math.floor(value * 0)).toFixed(2);

    document
        .getElementById("Victims")
        .innerText = Victims;
    document
        .getElementById("Relocations")
        .innerText = Relocations;
    document
        .getElementById("none")
        .innerText = none;

    var nets = Math.floor(value * 0.3);
    var Lives = Math.floor(value * 0.0002);
    var none = Math.floor(value * 0);

    document
        .getElementById("nets")
        .innerText = nets;
    document
        .getElementById("Lives")
        .innerText = Lives;
    document
        .getElementById("none1")
        .innerText = none;

    var weeks = Math.floor(value * 0.0036);
    var Onsite = Math.floor(value * 0);
    var counselling = Math.floor(value * 0);

    document
        .getElementById("weeks")
        .innerText = weeks;
    document
        .getElementById("Onsite")
        .innerText = Onsite;
    document
        .getElementById("counselling")
        .innerText = counselling;

    var mentor = Math.floor(value * 0.0036);
    var crises = Math.floor(value * 0);
    var advice = Math.floor(value * 0);

    document
        .getElementById("Mentor")
        .innerText = mentor;
    document
        .getElementById("crises")
        .innerText = crises;
    document
        .getElementById("Advice")
        .innerText = advice;

    displayChart();
    displayEachCauseChart();
    displayEachCauseChart2();
    displayEachCauseChart3();
    displayEachCauseChart4();
    displayEachCauseChart5();
    displayEachCauseChart6();
    displayEachCauseChart7();
    displayEachCauseChart8();

}