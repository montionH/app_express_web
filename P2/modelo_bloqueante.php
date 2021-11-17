<?php
printf("abriendo archivo");
$archivo_url=fopen("el_quijote.txt","r");
$texto="";
while ($fragmento= fgets($archivo_url)){
    $texto.=$fragmento;
}
printf($texto);
printf("<br> haciendo otra cosa");
?>