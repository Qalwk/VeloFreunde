# velo-backend

## Как запустить

1. Установи Docker Desktop: https://www.docker.com/products/docker-desktop/
2. Перейди в папку velo-backend
3. Выполни команду:
   docker-compose up --build
4. Открой браузер:
   - API и фото: http://localhost:8080/
   - phpMyAdmin: http://localhost:8081/ (логин/пароль: root/root)

## Структура

- uploads/ — все фото товаров
- db/products.sql — база с товарами
- php/products.php — API
- nginx/default.conf — конфиг nginx 