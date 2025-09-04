# Relógios Mundiais (World Clocks) 🕒

## 📝 Descrição
<p>Sétimo projeto do meu plano de estudos de JavaScript. Esta aplicação exibe múltiplos relógios digitais que mostram a hora atual em diferentes cidades ao redor do mundo, atualizando em tempo real. O projeto foi um exercício focado em lidar com fusos horários e na utilização da API de Internacionalização (Intl) do JavaScript.</p>

## 🚀 Funcionalidades
-   Exibição de múltiplos relógios simultaneamente.
-   Cada relógio exibe a hora, minuto e segundo corretos para um fuso horário específico.
-   Atualização dos relógios a cada segundo para simular um relógio real.
-   **Bônus:** Permite ao usuário selecionar dinamicamente as cidades a serem exibidas a partir de uma lista de todos os fusos horários suportados pelo navegador.

## 💻 Tecnologias Utilizadas
-   ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
-   ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
-   ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## 🖼️ Screenshot
![Screenshot da Aplicação](https://github.com/AbismoDev/utc-relogios/blob/main/assets/img/screenshot.png?raw=true)

## 🔗 Links
-   **Deploy:** https://utc-relogios.vercel.app/
-   **Repositório:** https://github.com/AbismoDev/utc-relogios

## 🧠 Aprendizados
<p>Este projeto foi uma introdução fascinante à complexidade dos fusos horários no desenvolvimento web. O principal aprendizado foi utilizar a API <code>Intl</code> do JavaScript para formatar datas e horas em diferentes localidades, em vez de tentar calcular manualmente os deslocamentos de UTC. Também aprimorei minha habilidade em gerenciar múltiplos timers (<code>setInterval</code>) de forma independente, criando uma estrutura de dados para controlar o estado de cada relógio individualmente e evitando bugs de sobreposição. A detecção de funcionalidades (Feature Detection) para verificar o suporte do navegador a APIs modernas também foi um conceito importante praticado aqui.</p>