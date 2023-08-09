# ☁️ Projeto Deploy AWS EC2

Esse projeto tem o objetivo de servir de insumo para realização de um Deploy na Cloud AWS, utilizando o serviço EC2 com integração no RDS.

Trata-se de uma API Simples que faz integração com o banco de dados MySQL e conta com um workflow que roda um Action no Github para realizar o deploy e start da aplicação em cloud.

## 🔥 Tecnologias utilizadas:

**Backend:** Node.js e Express </br>
**Banco de Dados:** MySQL e Sequelize (ORM) </br>
**CI/CD:** Github Actions </br>
**Cloud:** AWS EC2 e AWS RDS </br>

## 📭 Rotas da API:

O Backend está rodando na porta `3000`. Seguem as rotas que podem ser acessadas:

  `/`: (GET) exibe os links de acesso para as rotas /dogs e /data; </br>
  `/healthcheck`: (GET) try/catch que retorna status code 200 ou 500; </br>
  `/dogs`: (GET) consulta a API externa; </br>
  `/data`: (GET) retorna os dados cadastrados no RDS MySQL; </br>

## ✨ Instruções para utilização:

Para que esse projeto funcione é preciso primeiro criar os serviços `AWS EC2`, `AWS RDS` e configurar os secrets do repositório para processamento do CI/CD no Github Actions.

Todo o passo a passo está explicado no artigo que publiquei no LinkedIn e que pode ser acessado através desse [Link](https://www.linkedin.com/pulse/deploy-de-api-na-aws-com-cicd-fabiano-de-souza%3FtrackingId=N%252F661LRnRICbOo3jvGwDEg%253D%253D/?trackingId=N%2F661LRnRICbOo3jvGwDEg%3D%3D)!
