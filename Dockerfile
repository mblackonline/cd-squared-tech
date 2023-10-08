# Dockerfile

FROM python:3.10

ENV PYTHONUNBUFFERED 1

WORKDIR /apps

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

# runs the local server
ENTRYPOINT ["python", "manage.py"]
CMD ["runserver", "0.0.0.0:8000"]