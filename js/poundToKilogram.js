/*  Gather lb input and set it as a variable
    Calculation: covert lb to kg. (lb * 0.45359237 = kg)
    Output: define the output value.  Value must be rounded to a tenth.
*/
function kgConversion() {
    let lb = parseFloat(document.getElementById("lb").value);
    let kg = lb * 0.45359237;
    let output = kg.toFixed(1)
    document.getElementById("output").innerHTML = output;
}
