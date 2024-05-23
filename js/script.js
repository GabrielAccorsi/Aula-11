function exibir(){
    let n = document.getElementById("n").value
    let x = 0
    let i = 1
    document.getElementById("tri").innerHTML = ""
    document.getElementById("qua").innerHTML = ""
    document.getElementById("fib").innerHTML = ""
    while(x <= n){
        x += i 
        document.getElementById("tri").innerHTML += `${x} - `
        i++
    }

   let y = 1
    while(y<=n){
        x = y ** 2
        document.getElementById("qua").innerHTML += `${x} - `
        y++

    }

    let a = 0
    let b = 1
    while(b <= n){
        x = a + b
        document.getElementById("fib").innerHTML += `${x} - `
        b = a 
        a = x 

    }
    

    
    }
