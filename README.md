# Уроки по js.
## Инструменты
### Для обработки POST запросов используется 2 типа серверов.
Для того чтобы food_proj можно было запустить и нормально обрабатывать данные из форм, нам понадобится како-нибудь сервер который умеет работать с post-data. Для этого будем использовать apache + php, для обработки post запросов с данными в формате json используем **full fake REST API with zero coding** сервер - json-server
1. Apache (https://wiki.archlinux.org/title/Apache_HTTP_Server_(%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B9) (Внимательно смотрим на конфигурацию сервера, в частности на права доступа к пользовательским каталогам. Там же инструкция по установке php и его активации для apache.) Для windows и osx есть комбайны вроде openserver.
2. json-server (https://github.com/typicode/json-server)
Для установки json-server
``` bash
npm i json-server --save-dev
# --save-dev используем для того чтобы сервер отображался только
# в наших devDependencies. Для продакшен обычно не используется.
```
Для запуска json-server
``` bash
json-server db.json     #(windows and osx)
npx json-server db.json #(linux)
```
