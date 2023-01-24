document.getElementById("buttonAdd").onclick = function () {
	let inputA = document.getElementById("inputA").value;
	let inputB = document.getElementById("inputB").value;
    let a = Number(inputA);
    let b = Number(inputB);
    document.getElementById("answer").innerHTML = a + b;
}