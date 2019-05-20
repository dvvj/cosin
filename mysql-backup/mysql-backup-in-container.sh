mysqldump -uroot -p123456 --databases contactcenter | gzip -c > /backup/bck-$(date +%Y-%m-%d-%H.%M.%S).sql.gz
