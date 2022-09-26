# Processes

**When to use?**
When there is a lot of over-the-page logic that is difficult to control and expand for "end-to-end" interaction between pages

_Use it only if you are sure that additional separation by processes will help your application, and will not cause too much misunderstanding and skepticism! ⚠️_

![processes-themed-bordered](https://feature-sliced.design/assets/images/processes-d7172728458e3a580dc2365f5397dfb8.png)

## Description

_The layer is optional_, but it is usually located here:

- logic that affects several pages at once
  - _For example: `checkout`, `auth`_
- logic that would unnecessarily complicate the code of the pages and would be blurred in them

Processes should not contain display logic (ui), since the role of processes is **to control the behavior of pages and underlying layers, but not to display anything independently**

## Can use

`shared`, `entities`, `features`, `widgets`, `pages`

## Structure

```sh
└── processes/{slice}
    ├── index.ts
    ├── lib.ts
    └── model.ts
```
