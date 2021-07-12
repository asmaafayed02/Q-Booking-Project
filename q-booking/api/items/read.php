<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once '../config/database.php';
include_once '../class/modules.php';

$database = new Database();
$db = $database->getConnection();

$modules = new modules($db);

$modules->id = (isset($_GET['id']) && $_GET['id']) ? $_GET['id'] : '0';
$result = $modules->read();

if($result->num_rows > 0){
    $itemRecords=array();
    $itemRecords["modules"]=array();
	while ($module = $result->fetch_assoc()) {
        extract($module);
        $itemDetails=array(
            "id" => $id,
            "name" => $name,
            "disc" => $disc,
			      "phone" => $phone,
            "address" => $address
        );
       array_push($itemRecords["modules"], $itemDetails);
    }
    http_response_code(200);
    echo json_encode($itemRecords);
}else{
    http_response_code(404);
    echo json_encode(
        array("message" => "No item found.")
    );
}
?>
