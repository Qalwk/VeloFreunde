FROM php:8.2-fpm

WORKDIR /var/www/html

RUN docker-php-ext-install mysqli pdo pdo_mysql

# Install wait-for-it.sh
ADD https://github.com/vishnubob/wait-for-it/raw/master/wait-for-it.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/wait-for-it.sh

# Copy custom entrypoint
COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

# Set custom entrypoint
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

# Copy PHP files to the correct directory
COPY products.php /var/www/html/php/products.php
COPY send_consultation.php /var/www/html/php/send_consultation.php 