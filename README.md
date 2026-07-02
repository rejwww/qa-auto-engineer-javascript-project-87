### Hexlet tests and linter status:
[![Actions Status](https://github.com/rejwww/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/rejwww/qa-auto-engineer-javascript-project-87/actions)


### SonarQube
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=rejwww_qa-auto-engineer-javascript-project-87&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=rejwww_qa-auto-engineer-javascript-project-87)


### Github Actions 
[![hexlet-check](https://github.com/rejwww/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/rejwww/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml)



## Makefile - команды

Команда **make install** - полезна при первом клонировании репозитория (или после удаления node_modules).

Команда **make publish** - публикации пакета в npm для доступа установки другими участниками проекта.

Команда **make lint** - запуск Eslint и Prettier (проверка кода на соответствие стандартам).

Команда **make test** - запуск тестов

Команда **test-coveraget** - проверка покрытия



## Пример работы gendiff

gendiff filepath1.json filepath2.json
https://asciinema.org/a/zpSmfK07gA37LCfp

gendiff filepath1.yml filepath2.yml -f stylish
https://asciinema.org/a/Z1dNugHjFlalBVlO

gendiff filepath1.json filepath2.json -f plain
https://asciinema.org/a/EY5nbafhxWUGDVu3



## Запусков тестов Jest
make test


## ESLint и Prettier

**npx prettier src/index.js --write**  - запуска автоматического исправления ошибок Prettier (где src/index.js  - путь и имя файла)

**npx eslint --fix** - запуска автоматического исправления ошибок ESLint в конкретном файле 

   