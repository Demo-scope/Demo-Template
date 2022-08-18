// بسم الله الرحمن الرحيم 
// Start Project



// Home Pae ( image slider )
let allImages = Array.from(document.querySelectorAll(".img-slider .contaner .io img"))
let currentSlide = 1;
let slidesCount = allImages.length

let prev = document.querySelector(".img-slider .contaner .io .prev")
let next = document.querySelector(".img-slider .contaner .io .next")
let polits = document.querySelector(".img-slider .contaner .io .polits")



setInterval(function(){
    currentSlide++
    if (currentSlide > slidesCount) {
        currentSlide = 1
        next.classList.remove("disabled")
    }
    checker()
}, 4000)



let ul = document.createElement("ul")
ul.classList.add("polits")
for(let i = 0; i < slidesCount; i++) {
    let li = document.createElement("li")
    li.setAttribute("data-slide", i + 1)
    ul.appendChild(li)
}
document.querySelector(".img-slider .contaner .io").appendChild(ul)

let footerUl = document.getElementsByClassName("polits")
let footerLi = document.querySelectorAll(".polits li")



checker();

next.onclick = function () {
    if (next.classList.contains("disabled")) {
        return false
    } else {
        currentSlide++
        checker();
    }
}
prev.onclick = function () {
    if (prev.classList.contains("disabled")) {
        return false
    } else {
        currentSlide--;
        checker();
    }
}
for(let i = 0; i < footerLi.length; i++) {
    footerLi[i].onclick = function() {
        currentSlide = parseInt(footerLi[i].getAttribute("data-slide"))
        checker();
    }
}



function checker() {
    // remove all active class from imgs & polits
    for (let i = 0; i < slidesCount; i++) {
        allImages[i].classList.remove("active")
        footerUl[0].children[i].classList.remove("active")
    }
    // add active class for first img and first polit
    allImages[currentSlide - 1].classList.add("active")
    footerUl[0].children[currentSlide - 1].classList.add("active")

    if (currentSlide === 1) {
        prev.classList.add("disabled")
    } else if (currentSlide === slidesCount) {
        next.classList.add("disabled")
    } else {
        prev.classList.remove("disabled")
        next.classList.remove("disabled")
    }
}






// Home page ( page )
let allBoxs_h = document.querySelectorAll(".random-tasks .contaner .io .box-h")


// Generate 16 Random Box
let array = Array.from(allBoxs_h)
for(let i = 0; i < 16; i++) {
    let randomIndex = Math.floor(Math.random() * array.length)
    array[randomIndex].style.cssText = "display: block"
    array.splice(randomIndex, 1)
}










// ######################## Tasks Page ###########################

let sideNav = document.querySelectorAll(".tasks-page .tasks-part ul li")
let donigContaner = document.querySelector(".tasks-page .doing-contaner")
let CompletedContaner = document.querySelector(".tasks-page .completed-contaner")


Start_tasks();
sideNav.forEach(function(e) {
    e.onclick = function() {
        reset_tasks();
        if (e.classList.contains("doing")) {
            e.classList.add("active")
            donigContaner.style.cssText = "display: flex"
        } else if (e.classList.contains("completed")) {
            e.classList.add("active")
            CompletedContaner.style.cssText = "display: flex"
        }
    }
})



function Start_tasks() {
    sideNav.forEach(function(ele) {
        ele.classList.remove("active")
        if (ele.classList.contains("doing")) {
            ele.classList.add("active")
        }
    })
    donigContaner.style.cssText = "display: flex"
}
function reset_tasks () {
    sideNav.forEach(function(ele) {
        ele.classList.remove("active")
    })
    donigContaner.style.cssText = "display:none"
    CompletedContaner.style.cssText = "display:none"
}





// ################## vip page #################

let vipPage = document.querySelector(".vip-page")
let joinBottun = document.querySelectorAll(".vip-page .content button")
let monyPage = document.querySelector(".mony")

let moreCridet = document.querySelector(".mony .cridet-card .title i")
let cridetCard = document.querySelector(".mony .cridet-card")
let moreE = document.querySelector(".mony .e-wallet .title i")
let E_wallet = document.querySelector(".mony .e-wallet")

let selectPlane = document.querySelector(".mony .cridet-card form .balance select")
let price = document.querySelector(".mony .cridet-card form .balance span")


joinBottun.forEach(ele => {
    ele .onclick = function() {
        vipPage.classList.remove("active")
        monyPage.classList.add("active")
    }
});




cridetCard.classList.add("active")
moreCridet.classList.add("active")


moreCridet.onclick = function() {
    cridetCard.classList.toggle("active")
    moreCridet.classList.toggle("active")
}
moreE.onclick = function() {
    E_wallet.classList.toggle("active")
    moreE.classList.toggle("active")
}





selectPlane.onclick = function(){
    if (selectPlane.value === "1"){
        price.innerHTML = "(25 $)"
    } else if (selectPlane.value === "2") {
        price.innerHTML = "(45 $)"
    } else if (selectPlane.value === "3") {
        price.innerHTML = "(95 $)"
    } else if (selectPlane.value === "4") {
        price.innerHTML = "(150 $)"
    }
}






// ######################## Me Page ##########################


let balanceEGP = document.querySelector(".me-page .header .balance-egp span")
let balanceUSDT = document.querySelector(".me-page .header .balance-usdt span")

let completTasks = document.querySelector(".me-page .content1 .six span")
let todayEarning = document.querySelector(".me-page .content1 .one span")
let yasterdayEarning = document.querySelector(".me-page .content1 .two span")
let earningThisMonth = document.querySelector(".me-page .content1 .three span")
let earningLastMonth = document.querySelector(".me-page .content1 .four span")
let AllIncome = document.querySelector(".me-page .content1 .five span")

let dailyTarget = 0; 







change_Dot_Zero(balanceEGP)
change_Dot_Zero(todayEarning)
change_Dot_Zero(yasterdayEarning)
change_Dot_Zero(earningThisMonth)
change_Dot_Zero(earningLastMonth)
change_Dot_Zero(AllIncome)
function change_Dot_Zero(Target) {
    Target.innerHTML = `${Target.innerHTML}.00`
}

function changeUSDT(element , target) {
    target.innerHTML = ( parseInt(element) / 19.19 ).toFixed(2)
}

completeTasks(completTasks)
function completeTasks(target) {
    target.innerText = `${dailyTarget}/5`
}















let getVip = document.querySelector(".me-page .content2 .get-vip")
let personalInfo = document.querySelector(".me-page .content2 .info")
let pullOutHistory = document.querySelector(".me-page .content2 .get-out")
let pull = document.querySelector(".me-page .content2 .get-mony")

let personalInfoPage = document.querySelector(".personalInfo")
let pullPage = document.querySelector(".pullTarget")
let pullHistoryPage = document.querySelector(".pullHistory")


getVip.onclick = function(){
    document.querySelectorAll(".nav ul li")[3].classList.remove("active")
    document.querySelectorAll(".nav ul li")[2].classList.add("active")
    document.querySelector(".me-page").classList.remove("active")
    monyPage.classList.add("active")
}

personalInfo.onclick = function(){
    document.querySelector(".me-page").classList.remove("active")
    personalInfoPage.classList.add("active")
}

pull.onclick = function(){
    document.querySelector(".me-page").classList.remove("active")
    pullPage.classList.add("active")
}

pullOutHistory.onclick = function(){
    document.querySelector(".me-page").classList.remove("active")
    pullHistoryPage.classList.add("active")
}





let setUSDTurl = document.querySelector(".personalInfo .USDT-url")
let getDetails = document.querySelector(".personalInfo .detal")

let setUSDTPage = document.querySelector(".USDTurl")
let detalsePage = document.querySelector(".detals")

setUSDTurl.onclick = function(){
    personalInfoPage.classList.remove("active")
    setUSDTPage.classList.add("active")
}

getDetails.onclick = function(){
    personalInfoPage.classList.remove("active")
    detalsePage.classList.add("active")
}






let inputURL = document.querySelector(".USDTurl form #url")
document.querySelector(".USDTurl form").onsubmit = function(){
    if (inputURL.value === "" || inputURL.value.match(/\s/ig) || inputURL.value.length < 10 ){
        event.preventDefault();
    } else {
        document.querySelector(".USDTurl .contaner .info input").value = inputURL.value        
        document.querySelector(".pullTarget .content .first .up input").value = inputURL.value
    }
}

window.onload = function(){
    document.querySelector(".pullTarget .content .first .dowen input").value = document.querySelector(".me-page .header .balance-egp span").innerHTML
}





document.querySelector(".pullTarget .content .second p input:first-of-type").oninput = function(){
    if(parseInt(document.querySelector(".pullTarget .content .second p input:first-of-type").value) <= parseInt(document.querySelector(".me-page .header .balance-egp span").innerHTML)) {
        document.querySelector(".pullTarget .content .second p input:last-of-type").value = (document.querySelector(".pullTarget .content .second p input:first-of-type").value / 19.19).toFixed(1)
    } else {
        event.preventDefault()
    }
}













// reset some things every day =>  at (23:59:59)
let CounDownDate ; // this date will save win user sign up 

getFirstDate()
function getFirstDate() {
    if (CounDownDate === undefined) {
        let day = new Date().getDate()
        let year = new Date().getFullYear()
        let month = new Date().getMonth() + 1
        
        CounDownDate = new Date(`${year}/${month}/${day} 23:59:59`).getTime()
    }
}


setInterval(function() {
    if (((CounDownDate - new Date().getTime()) / 1000 / 60 / 60 ).toFixed(2) === "0.01") {
        newDay();
        CounDownDate = CounDownDate + (1 * 24 * 60 * 60 * 1000)
    }
},1)


function newDay() {
    dailyTarget = 0;

    completeTasks(completTasks)

    yasterdayEarning.innerText = parseInt(todayEarning.innerText)
    change_Dot_Zero(yasterdayEarning)
    
    earningThisMonth.innerHTML = parseInt(earningThisMonth.innerHTML) + parseInt(todayEarning.innerHTML)
    change_Dot_Zero(earningThisMonth)

    AllIncome.innerHTML = parseInt(AllIncome.innerHTML) + parseInt(todayEarning.innerHTML)
    change_Dot_Zero(AllIncome)

    todayEarning.innerText = "0"
    change_Dot_Zero(todayEarning)
}















// pop messsage
let pop = document.querySelector(".pop")
let popConfirm = document.querySelector(".pop ul li.confirm")
let popCancel = document.querySelector(".pop ul li.cancel")

let pop2 = document.querySelector(".pop2")
let pop2Ok = document.querySelector(".pop2 span")

let pop3 = document.querySelector(".pop3")
let pop3Upgrade = document.querySelector(".pop3 ul li.upgrade")
let pop3Cancel = document.querySelector(".pop3 ul li.cancel")



allBoxs_h.forEach(function(ele) {
    let A = Array.from(ele.children)
    A.forEach(function(ttt) {
        ttt.onclick = function() {

            if (ttt.parentElement.classList.contains("box-h") && ttt.parentElement.children[0].innerHTML === "vip0") {
                if (donigContaner.innerHTML === "" && dailyTarget < 5){
                    pop.classList.add("active")

                    popConfirm.onclick = function () {
                        if (ttt.parentElement.children[3].classList.contains("stars")) {
                            ttt.parentElement.children[3].remove()
                        }
                        if (ttt.parentElement.children[4].children[1].innerHTML === "") {
                            ttt.parentElement.children[4].children[1].innerHTML = "submit"
                        }
                        ttt.parentElement.classList.remove("box-h")
                        ttt.parentElement.classList.add("box-t")
                        donigContaner.appendChild(ttt.parentElement)
                        pop.classList.remove("active")
                    }
                }else if (donigContaner.innerHTML !== "" && dailyTarget < 5){
                    pop2.classList.add("active")
                } else if (donigContaner.innerHTML === "" && dailyTarget >= 5) {
                    console.log("Please wait into next day befure doing another task")
                }
            } else if (ttt.parentElement.classList.contains("box-h") && ttt.parentElement.children[0].innerHTML !== "vip0"){
                pop3.classList.add("active")

                pop3Upgrade.onclick = function() {
                    document.querySelectorAll(".nav ul li")[0].classList.remove("active")
                    document.querySelectorAll(".nav ul li")[2].classList.add("active")
                    document.querySelector(".home-page").classList.remove("active")
                    document.querySelector(".vip-page").classList.add("active")
                    
                    pop3.classList.remove("active")
                }
            }

        }
    })
})


popCancel.onclick = function() {
    pop.classList.remove("active")
}
pop2Ok.onclick = function () {
    pop2.classList.remove("active")
}
pop3Cancel.onclick = function(){
    pop3.classList.remove("active")
}




// on click Submit
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("load")) {
        e.target.parentElement.children[1].classList.add("done")
        e.target.parentElement.children[1].innerHTML = "done!"
        CompletedContaner.appendChild(e.target.parentElement.parentElement)

        balanceEGP.innerText = parseInt(balanceEGP.innerText) + 4
        change_Dot_Zero(balanceEGP)

        changeUSDT(balanceEGP.innerText, balanceUSDT)
        
        dailyTarget++

        completeTasks(completTasks)

        todayEarning.innerText = parseInt(todayEarning.innerText) + 4
        change_Dot_Zero(todayEarning)

        
    }
})






// ########################### Nav ##############################

let allPages = document.querySelectorAll(".pages")
let allLi = document.querySelectorAll(".nav ul li")










Start();

allLi.forEach(function(e) {
    e.onclick = function(){
        // remove active class from all li and all pages
        reset();
        monyPage.classList.remove("active")
        personalInfoPage.classList.remove("active")
        pullPage.classList.remove("active")
        pullHistoryPage.classList.remove("active")
        setUSDTPage.classList.remove("active")
        detalsePage.classList.remove("active")

        // add class active on clicked li
        e.classList.add("active")
        // add class active on the wanted page
        for (let i = 0; i < allPages.length; i++) {
            if (allPages[i].classList.contains(e.getAttribute("data-page"))){
                allPages[i].classList.add("active")
            }
        }

    }
})





function Start() {
    allLi.forEach(function(ele) {
        ele.classList.remove("active")
        if (ele.getAttribute("data-page") === "home-page") {
            ele.classList.add("active")
        }
    })
    allPages.forEach(function(ele) {
        ele.classList.remove("active")
        if(ele.classList.contains("home-page")){
            ele.classList.add("active")
        }
    })
}

function reset(){
    allLi.forEach(function(eee) {
        eee.classList.remove("active")
    })
    allPages.forEach(function(aaa) {
        aaa.classList.remove("active")
    })
}