@ECHO OFF
start cmd.exe /C "code . && cd biz && cd Scripts && activate && cd ..  && cd .. && python manage.py runserver"
start cmd.exe /C "cd templates && cd GUI && npm run start"
explorer "http://127.0.0.1:8000/"
