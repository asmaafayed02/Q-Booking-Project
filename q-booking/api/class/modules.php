<?php
class modules{

    private $itemsTable = "clincs";
    public $id;
    public $name;
    public $disc;
    public $phone;
    public $address;
    private $conn;

    public function __construct($db){
        $this->conn = $db;
    }
    function read(){
    	if($this->id) {
    		$stmt = $this->conn->prepare("SELECT * FROM ".$this->itemsTable." WHERE id = ?");
    		$stmt->bind_param("i", $this->id);
    	} else {
    		$stmt = $this->conn->prepare("SELECT * FROM ".$this->itemsTable);
    	}
    	$stmt->execute();
    	$result = $stmt->get_result();
    	return $result;
    }
  }
