#!/bin/bash
COUNTER=0;

while true; do
COUNTER=$[COUNTER+1];
touch ./Day_$COUNTER/Challenge_original_description.txt;

if [[ $COUNTER == 10 ]]; then
echo "Quantidade máxima atingida, parando o processo.";
break
fi;
echo "Arquivos criados com sucesso... Total: ";
echo $COUNTER
done;


