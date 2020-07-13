<?php

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
@$username = $request->username;
@$password = $request->password;

if (($username == 'admin@email.com') && ($password == '123456')) {
    require_once('jwt.php');
    $userId = 'admin@email.com';

    $serverKey = '123456789abcdefg123456789abcdefg';
    
    $tArray = array();
    $tArray['userId'] = $userId;
    $nbf = time();
    $exp = $nbf + 60*5;
    if (isset($nbf)) {$tArray['nbf'] = $nbf;}
    if (isset($exp)) {$tArray['exp'] = $exp;}
    $token = JWT::encode($tArray, $serverKey);
    
    $returnArray = 
        array("message" =>
                     array('code' => 200,'text' => $token)
        );
    $jsonReturn = json_encode($returnArray, JSON_PRETTY_PRINT);
    header('Content-type: application/json');
    echo $jsonReturn;

}else {
    $t =  time() + 60*5;
    $returnArray = array("message" =>
    array('code' => 203,'text' => 'Login invalido: '.$t.'-'.time()));
    $jsonReturn = json_encode($returnArray, JSON_PRETTY_PRINT);
    header('Content-type: application/json');
    echo $jsonReturn;
}

