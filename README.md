<h3 align="center">
  [GoStack11] | Desafio: Database Relations

  [Descrição do desafio](https://github.com/Rocketseat/bootcamp-gostack-desafios/blob/master/desafio-database-relations/README.md)
</h3>

---

## ⚙ Tecnologias utilizadas

  - NodeJS
  - Typescript
  - Postgres
  - dotenv
  - express
  - tsyringe
  - typeorm

## 💻 Instruções para executar o projeto

- no arquivo `ormconfig.json` você encontrará as configurações para o banco de dados (nome, host, senha, porta etc). Você poderá criar sua base com os mesmos valores configurados no arquivo ou alterá-lo.

- Caso esteja utilizando docker, poderá criar e inicializar sua base de dados com os comandos abaixo:

 ```bash
  # criando container com imagem do banco postgres
  docker run --name postgres -e POSTGRES_PASSWORD=postgres -d postgres

  # inicializando o container
  docker start postgres
 ```

- Após a criação do container com a instância do postgres, você precisará criar manualmente o banco de dados. No arquivo, ele está nomeado como `gostack_desafio09`. Você pode alterar, caso deseje.

- Faça o download do projeto:

```bash
  # clonando o repositório
  git clone https://github.com/AugustoMarcelo/database-relations.git

  # acessando a pasta
  cd database-relations

  # realizando o download das dependências
  yarn
```

 - Criado o banco de dados, execute as `migrations` para criar as tabelas e em seguida inicializar a aplicação:

 ```bash
  # cria as tabelas no banco de dados
  yarn typeorm migration:run

  # executando aplicação
  yarn dev:server
 ```


