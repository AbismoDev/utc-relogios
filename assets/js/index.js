document.addEventListener("DOMContentLoaded", () => {

    const selectTimezone = document.querySelectorAll(".lista--fuso--horario");

    let gerenciarIntervalo = [
        {intervalo: null},
        {intervalo: null},
        {intervalo: null}
    ]

    // Verificando se o navegador suporta a API Intl (Depois voltar a verificação normal, coloquei um erro de proposito para testar o else)
    if(Intl !== undefined && typeof Intl.supportedValuesOf("timeZone") !== undefined) {
        const listaTimezone = Intl.supportedValuesOf("timeZone");

        atualizaHora(listaTimezone);

    }
    else {
        const listaTimezone = [
            "America/Sao_Paulo", 
            "America/New_York", 
            "America/Los_Angeles",
            "America/Mexico_City",
            "America/Argentina/Buenos_Aires",
            "America/Manaus",
            "Europe/London",
            "Europe/Paris",
            "Europe/Lisbon",
            "Europe/Moscow",
            "Asia/Tokyo",
            "Asia/Shanghai",
            "Asia/Dubai",
            "Asia/Kolkata",
            "Africa/Johannesburg",
            "Africa/Cairo",
            "Australia/Sydney"
        ];

        atualizaHora(listaTimezone);
    }

    function atualizaHora(listaTimezone) {
        selectTimezone.forEach((select) => {
            listaTimezone.forEach((timezone) => {
                let option = document.createElement("option");
                option.value = timezone;
                option.textContent = timezone;
                select.appendChild(option);
            });
        });

        for(let i = 0; i < selectTimezone.length; i++) {
            selectTimezone[i].addEventListener("input", (e) => {
                let timezone = e.target.value;

                if(gerenciarIntervalo[i].intervalo != null) {
                    clearInterval(gerenciarIntervalo[i].intervalo);
                }

                gerenciarIntervalo[i].intervalo = setInterval(() => {
                    let date = new Date().toLocaleTimeString("pt-BR", {timeZone: timezone});
                    document.querySelector(`#hora--relogio${i + 1}`).textContent = date;
                }, 1000);

                let nomeCidade = timezone.split("/");

                document.querySelector(`#nome--cidade${i + 1}`).textContent = nomeCidade[nomeCidade.length - 1].replace("_", " ");
                
                gerenciarIntervalo[i].intervalo;
            });
        }
    }

});