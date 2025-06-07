FROM php:8.2-fpm

WORKDIR /var/www/html

RUN docker-php-ext-install mysqli pdo pdo_mysql

# Install wait-for-it.sh
ADD https://github.com/vishnubob/wait-for-it/raw/master/wait-for-it.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/wait-for-it.sh

COPY products.php /var/www/html/products.php 