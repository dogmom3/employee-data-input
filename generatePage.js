function generateData(empArray){
    let str = ''
    for (let index = 0; index < empArray.length; index++) {
        
    str+=`
    <ul id="data">
    <h2 id="name">Name: ${empArray[index].getName()} </h2>
    <li id="list">Title:</li>
    <li id="list">ID:</li>
    <li id="list">Email:<a id="list-item" href=" "
            target="_blank"></a> </li>
    <li id="list">Office Number:</li>
</ul>`
    }
    return str
}
function generatePage(answers) {
    console.log(answers);
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="assets/css/style.css">
        <title>Document</title>
    </head>
    
    <body>
        <header>
            <h1>MY TEAM</h1>
        </header>
        <div id="container">
            <div id="employee-data">
               ${generateData(answers)}
    
               
            </div>
        </div>
    </body>
    
    </html>
    ;`
}

module.exports = generatePage;
