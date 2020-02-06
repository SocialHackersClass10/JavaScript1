//na pernei tin timi pou dinw
const celciusInput = document.querySelector("#celcius > input") ;//dose tin timi--> input apo to celcius
const fahrenheitInput = document.querySelector("#fahrenheit > input") ;
const kelvinInput = document.querySelector("#kelvin > input") ;
function roundNum (num){
    return Math.round(num*100)/100;
}
//event lesseners
//px click or input
//1. type of event 2. function

    function celciusToFahrenheitAndKelvin(){
    const cTemp = parseFloat(celciusInput.value);    //apo string pou einai se arithmo
    const fTemp = (cTemp * (9/5)) +32 ; //metatrepi se fahrenheit
    const kTemp = cTemp +273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
    }

    function fahreTocelciusAndKelvin(){
        const fTemp = parseFloat(fahrenheitInput.value);
        const cTemp = (fTemp -32) * (5/9);
        const kTemp = (fTemp + 459.67) * 5/9;
        celciusInput.value = roundNum(cTemp);
        kelvinInput.value = roundNum(kTemp);

    }
    function kelvinToCelciusAndFahre(){
        const kTemp = parseFloat(kelvinInput.value);
        const cTemp = kTemp - 273.15;
        const fTemp = 9/5 * (kTemp -273) +32;
        celciusInput.value = roundNum(cTemp);
        fahrenheitInput.value = roundNum(fTemp);
    }


function main(){
celciusInput.addEventListener("input",celciusToFahrenheitAndKelvin );
fahrenheitInput.addEventListener("input", fahreTocelciusAndKelvin);
kelvinInput.addEventListener("input", kelvinToCelciusAndFahre);
}
main();