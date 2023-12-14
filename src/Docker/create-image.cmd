docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya_rabota_3/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kursovaya_rabota_3/app ../..
