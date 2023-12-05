# GrupoVinum LTDA - Manual de Instalação

## Sumário

- [Montagem do Sensor](#montagem-do-sensor)
- [Configuração do Sensor](#configuração-do-sensor)
- [Configuração da API Node.js](#configuração-da-api-nodejs)
- [Realização de Testes](#realização-de-testes)
- [Instalação na Adega](#instalação-na-adega)

---

## Montagem do Sensor

Para montar o sensor, siga as instruções abaixo:

- **Fio Amarelo:** Conecte em uma das portas, preferencialmente A0, e no segundo pino do sensor (DADOS).
- **Fio Vermelho:** Conecte no 5V e no primeiro pino do Sensor (VCC).
- **Fio Preto:** Conecte no GND e no último pino do Sensor (GND).

## Configuração do Sensor

Replicar o código fornecido na IDE do Arduino.

## Configuração da API Node.js

Para configurar a API Node.js, siga os passos abaixo:

- Acesse o repositório online e vá para a pasta 'API VINUM'.
- Abra o arquivo 'main.js' para alterar o script de acesso ao banco de dados do cliente.

Certifique-se de seguir as instruções no script sobre o que alterar e o que não deve ser modificado. Substitua as credenciais do banco de dados pelo do seu dispositivo de monitoramento.

## Realização de Testes

Após verificar e modificar o script, execute testes de captura:

- Rode o código do Arduino.
- Instale os módulos do Node.js e execute 'app.js'.

### Instalação dos Módulos do Node.js

Na pasta com o arquivo 'app.js', abra o terminal e digite o comando "npm i" ou "npm install".

### Inicialização do Site

Após a instalação dos módulos, inicie o site com o comando "npm start" para registrar os dados capturados pelo Arduino e enviá-los para o banco de dados.

Verifique se os registros do Arduino estão sendo enviados corretamente para o banco de dados.

## Instalação na Adega

Insira o módulo na adega, lembrando que ele monitora até 12 compartimentos de vinho. Repita os testes para garantir a precisão do serviço.