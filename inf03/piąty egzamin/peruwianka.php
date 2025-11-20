<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<title>Hodowla świnek morskich</title>
<link rel="stylesheet" href="styl.css">
</head>
<body>
    
    <header>
        <h1>Hodowla świnek morskich - zamów świnkowe maluszki</h1>
    </header>


    <aside>
        <h3>Poznaj wszystkie rasy świnek morskich</h3>
    </aside>

    <nav>
        <a href="peruwianka.html">Rasa Peruwianka</a>
        <a href="american.php">Rasa American</a>
        <a href="crested.php">Rasa Crested</a>
    </nav>

    <main>
    <img src="peruwianka.jpg" alt="Świnka morska rasy peruwianka">
    <?php 
    echo phpversion();
    ?>
    </main>

    

    <footer>
        <p>Stronę wykonał: 000000000</p>
    </footer>


    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        echo "Connected successfully";
    }
    
    ?>

</body>
</html>