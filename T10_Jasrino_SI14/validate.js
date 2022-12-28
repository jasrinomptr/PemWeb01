let btn_submit = document.getElementById("submit");
let name = document.getElementById("name");
let email = document.getElementById("email");
let time = document.getElementById("time");
let destiny = document.getElementById("destiny");
let ticket = document.getElementById("ticket");
let maxChar = 30;
let patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
let patternTime = /^[0-9]+[0-9]+.+[0-9]$/;
let error = ""; 

btn_submit.onclick = function() {
    if (name.value == ""){
        error = "Nama pelanggan harus diisi";
        document.getElementById("error_name").innerHTML = error;
        return false;
    } else if (name.value.lenght > maxChar){
        error = "Maksimum 30 Karakter";
        document.getElementById("error_name").innerHTML = error;
        return false;
    } else if(email == ""){
        error = "Email harus diisi";
        document.getElementById("error_email").innerHTML = error;
        return false;
    } else if(!patternEmail.test(email.value)){
        error = "Email yang anda masukkan salah"
        document.getElementById("error_email").innerHTML = error;
        return false;
    } else if(time.value == ""){
        error = "Jam keberangkatan harus diisi";
        document.getElementById("error_time").innerHTML = error;
        return false;
    } else if(!patternTime.test(time.value)){
        error = "Jam yang anda masukkan salah";
        document.getElementById("error_time").innerHTML = error;
        return false;
    } else if(time.value > 23.00){
        error = "Jam melebihi batasan";
        document.getElementById("error_time").innerHTML = error;
        return false;
    } else if(destiny == ""){
        error = "Tujuan harus diisi";
        document.getElementById("error_destiny").innerHTML = error;
        return false;
    } else if(ticket.value == ""){
        error = "Tiket harus diisi";
        document.getElementById("error_ticket").innerHTML = error;
        return false;
    } else if(ticket.value > 10){
        error = "Tiket melebihi batasan";
        document.getElementById("error_ticket").innerHTML = error;
        return false;
    } else {
        document.getElementById("result").innerHTML = "Data";
        document.getElementById("result_name").innerHTML = "Nama : " + name.value;
        document.getElementById("result_email").innerHTML = "Email : " + email.value;
        document.getElementById("result_time").innerHTML = "Jam Keberangkatan : " + time.value;
        document.getElementById("result_destiny").innerHTML = "Tujuan Keberangkatan : " + destiny.value;
        document.getElementById("result_ticket").innerHTML = "Jumlah Tiket : " + ticket.value;
        return false;
    }
}

btn_submit.addEventListener('click', function(){
    if (name.value == ""){
        error = "Nama pelanggan harus diisi";
        document.getElementById("error_name").innerHTML = error;
        return false;
    } else if (name.value.lenght > maxChar){
        error = "Maksimum 30 Karakter";
        document.getElementById("error_name").innerHTML = error;
        return false;
    } else if(email == ""){
        error = "Email harus diisi";
        document.getElementById("error_email").innerHTML = error;
        return false;
    } else if(!patternEmail.test(email.value)){
        error = "Email yang anda masukkan salah"
        document.getElementById("error_email").innerHTML = error;
        return false;
    } else if(time.value == ""){
        error = "Jam keberangkatan harus diisi";
        document.getElementById("error_time").innerHTML = error;
        return false;
    } else if(!patternTime.test(time.value)){
        error = "Jam yang anda masukkan salah";
        document.getElementById("error_time").innerHTML = error;
        return false;
    } else if(time.value > 23.00){
        error = "Jam melebihi batasan";
        document.getElementById("error_time").innerHTML = error;
        return false;
    } else if(destiny == ""){
        error = "Tujuan harus diisi";
        document.getElementById("error_destiny").innerHTML = error;
        return false;
    } else if(ticket.value == ""){
        error = "Tiket harus diisi";
        document.getElementById("error_ticket").innerHTML = error;
        return false;
    } else if(ticket.value > 10){
        error = "Tiket melebihi batasan";
        document.getElementById("error_ticket").innerHTML = error;
        return false;
    } else {
        document.getElementById("result").innerHTML = "Hasil Validasi";
        document.getElementById("result_name").innerHTML = "Nama : " + name.value;
        document.getElementById("result_email").innerHTML = "Email : " + email.value;
        document.getElementById("result_time").innerHTML = "Jam Keberangkatan : " + time.value;
        document.getElementById("result_destiny").innerHTML = "Tujuan Keberangkatan : " + destiny.value;
        document.getElementById("result_ticket").innerHTML = "Jumlah Tiket : " + ticket.value;
        return false;
    }
})