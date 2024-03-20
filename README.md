# Setup Project

Instale as dependências com:
```npm install```

Crie o arquivo .env e coloque a ULR do banco Postgress
DATABASE_URL=

Rode a migration:
```npx prisma migrate dev --name "init"```

Execute o Seed da base de dados
```npx prisma db seed```