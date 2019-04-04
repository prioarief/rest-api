<?php 

// $mahasiswa = [
//     [
//         "nama" => "Prio",
//         "kelas" => "XI RPL 1",
//         "hobby" => [
//             "coding" => "php"
//         ]
//     ],

//     [
//         "nama" => "Prio",
//         "kelas" => "XI RPL 1",
//         "hobby" => [
//             "coding" => "php"
//         ]
//     ]

// ];

$conn = new mysqli("localhost", "root", "", "web_gorengan");
$result = $conn->query("SELECT * FROM gorengan");
$mahasiswa = $result->fetch_All();

$data = json_encode($mahasiswa);
echo $data;
