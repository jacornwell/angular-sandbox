# NPM Vulnerabilities

The objective is to improve the NPM vulnerability stats.

## Baseline Tests

At the point of setting up this specific project, the state of package.json and package-lock.json produced the following stats:

> 83 vulnerabilities (4 low, 32 moderate, 40 high, 7 critical)

*Warnings*
```
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.

npm warn deprecated rimraf@2.7.1: Rimraf versions prior to v4 are no longer supported

npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported

npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported

npm warn deprecated tslint@6.1.3: TSLint has been deprecated in favor of ESLint. 

Please see https://github.com/palantir/tslint/issues/4534 for more information.
```

## Stage 1

```
npm update
```

> 59 vulnerabilities (2 low, 38 moderate, 15 high, 4 critical)


## Stage 2

The result of this stage resulted in the same stats, but updates were made to package-lock.json.

```
npm audit fix
```

> 59 vulnerabilities (2 low, 38 moderate, 15 high, 4 critical)

