#!/bin/bash

# Propósito: Automatização sem parâmetros para a criação de pastas e arquivos.
# Criado por: Erick Augusto
# Data de Criação: 25/10/2021
# Observações: Este software é livre, logo você poderá fazer o que quiser com ele.



declare COUNTER=0;

while true; do

COUNTER=$[COUNTER+1];

mkdir Day_$COUNTER;

touch ./Day_$COUNTER/Challenge_original_description.txt;

if [[ $COUNTER == 10 ]]; then

echo "Quantidade máxima atingida, parando o processo.";

break

fi;

echo "Arquivos criados com sucesso... Total: ";

echo $COUNTER

done;


