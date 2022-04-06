FROM python:3.7

ADD . /server/
WORKDIR /server

EXPOSE 5000

RUN pip install -r requirements.txt
CMD ["python", "/server/server.py"]