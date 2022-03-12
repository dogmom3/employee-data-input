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
                <ul id="data">
                    <h2 id="name">Name:</h2>
                    <li id="list">Title:</li>
                    <li id="list">ID:</li>
                    <li id="list">Email:<a id="list-item" href=" "
                            target="_blank"></a> </li>
                    <li id="list">Office Number:</li>
                </ul>
    
                <ul id="data">
                    <h2 id="name">Name:</h2>
                    <li id="list">Title:</li>
                    <li id="list">ID:</li>
                    <li id="list">Email:<a href="" target="_blank"></a></li>
                    <li id="list">Github:<a href="" target="_blank"></a></li>
                </ul>
    
                <ul id="data">
                    <h2 id="name">Name:</h2>
                    <li id="list">Title:</li>
                    <li id="list">ID:</li>
                    <li id="list">Email:<a href="" target="_blank"></a></li>
                    <li id="list">School:</li>
                </ul>
            </div>
        </div>
    </body>
    
    </html>
    ;`
}

module.exports = generatePage;
