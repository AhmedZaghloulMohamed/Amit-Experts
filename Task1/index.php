<?php
function CountHeigher($arr){
    $counter=0;
    $max=0;
    for($i=0;$i<count($arr);$i++){
        if($arr[$i]>$max){
            $max=$arr[$i];
            $counter=1;
        }
        else{
            if($arr[$i]==$max){
                $counter++;
            }
        }
    }
    return $counter;
}
$arr=[4,4,1,3];
echo  CountHeigher($arr);

?>