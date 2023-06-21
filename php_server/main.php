<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    echo $username;
}
else {
    $initialTime = microtime(true);
    $arraysize = 1000;

    $sum = 0;
    for ($i = 0; $i < $arraysize; $i++) {
        $sum += ($i + 1);
    }
    for ($i = 0; $i < $arraysize; $i++) {
    //;
    }
    $finalTime = microtime(true);

    $timeTaken = $finalTime - $initialTime;

    echo "Time taken: $timeTaken seconds";

}

?>