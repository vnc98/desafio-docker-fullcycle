FROM golang:1.18-alpine as builder

RUN mkdir -p /app
WORKDIR /app

COPY go.mod .

RUN go mod download && go mod verify

COPY . .
ENV CGO_ENABLED=0
RUN GOOS=linux go build main.go

FROM scratch

WORKDIR /app

COPY --from=builder /app/main .

CMD [ "/app/main" ]