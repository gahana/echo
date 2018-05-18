# Overview
A simple Apigee Edge proxy that echoes back query param text

<a change>

# Deploy Proxy

```sh
cd echo
$ mvn install -Ptest -Dusername=$EDGE_USERNAME -Dpassword=$EDGE_PASSWORD -Dorg=$EDGE_ORG -Denv=$EDGE_ENV
```

# Test

```bash
$ cd test
$ npm install
$ ./node_modules/.bin/cucumber-js
```

# CI with Jenkins

- Add SCM link
- SCM connection and credentials
- Build trigger config "* * * * *" every minute or "H * * * *" for every hour
- Build steps
	+ Set env variables "export EDGE_ORG=orgname" and "export EDGE_ENV=env"
	+ Deploy command

```sh
cd <proxy dir>
mvn install -Ptest -Dusername=$EDGE_USERNAME -Dpassword=$EDGE_PASSWORD -Dorg=$EDGE_ORG -Denv=$EDGE_ENV
```
	+ Execute tests

```sh
cd test
npm install
./node_modules/.bin/cucumber-js --format json >report.json
```
	+ Configure cucumber reports, fill report path (test dir) and file include pattern (report.json)

