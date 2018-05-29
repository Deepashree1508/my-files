<!DOCTYPE html>
<html>
<body>

<h2>With "use strict":</h2>
<h3>Using a variable without declaring it, is not allowed.</h3>

<p>Activate debugging in your browser (F12) to see the error report.</p>
<button onclick="fun()">function</button>
<p id="demo"></p>
<script>


"use strict";
function fun()
{
try{
x = 3.14;// This will cause an error (x is not defined).
}
catch(err){
document.getElementById("demo").innerHTML=err.name;
}
}
</script>

</body>
</html>