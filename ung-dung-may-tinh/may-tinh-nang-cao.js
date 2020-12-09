function show(input){
    document.getElementById("nhap").value += input;
}
function ketqua(){
    let kq = eval(document.getElementById('nhap').value)
    document.getElementById('nhap').value = kq
}
function resetall(){
    document.getElementById('nhap').value = "";

}