# Pages

![pages-themed-bordered](https://feature-sliced.design/assets/images/pages-ca9c30c09a1951fdcd9f30b30204161b.png)

## Description

1. Here are the application pages

   - corresponding to a specific route
   - if necessary - grouped by a shared folder / parent page

1. Each page should have **as simple logic as possible**
   - all the logic of display, business rules and other things-should be implemented by composing the underlying layers (`shared`, `entitites`, `features`)
   - while the interaction between the underlying layers - should also be carried out most often on the page
     - _That is, if `featureA` affects `featureB` on a certain page - this logic should be written in the model of the page itself and only on it!_
     - _Without the code in the features themselves, and even more so, cross-imports!_

## Can use

`shared`, `entities`, `features`, `widgets`

## Structure

```sh
└── pages/{slice}
    ├── index.ts
    ├── lib.ts
    ├── model.ts
    └── ui.tsx
```
