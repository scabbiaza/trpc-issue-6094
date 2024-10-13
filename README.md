### trpc v11.0.0-rc.566

1. Run server via `tsx`
```
$ tsx src/server
```

Execute in shell
```
$ printf "GET ping HTTP/1.1\r\nHost: localhost\r\n\r\n" | nc localhost 3000
```

Result:
```
HTTP/1.1 400 Bad Request
Connection: close
```

2. Run server via `bun` (version 1.1.25)
```
$ bun src/server/index.ts
```

Execute in shell
```
$ printf "GET ping HTTP/1.1\r\nHost: localhost\r\n\r\n" | nc localhost 3000
```

See an error from the server side:
```
1 | function toURL(urlOrPathname) {
2 |     const url = urlOrPathname.startsWith('/') ? `http://127.0.0.1${urlOrPathname}` : urlOrPathname;
3 |     return new URL(url);
               ^
TypeError: "ping" cannot be parsed as a URL.
...
```

### trpc v11.0.0-rc.571

1. Run server via `bun`
```
$ bun src/server/index.ts
```

Execute in shell
```
$ printf "GET ping HTTP/1.1\r\nHost: localhost\r\n\r\n" | nc localhost 3000
```

Result is correct!
```
HTTP/1.1 400 Bad Request
content-type: text/plain;charset=utf-8
```
