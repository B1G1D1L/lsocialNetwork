# Features

![features-themed-bordered](https://feature-sliced.design/assets/images/features-c02167f92747c214473ed6a4d27c7523.png)

## Description

Each feature is a part of the business logic, while it necessarily has meaning and value for the end user

- _`ProductList`, `OfficeMap` - can hardly be called features_
- _`WalletAddFunds`, `AddToCart` - already makes more sense for the end user_

At the same time:

- the underlying layers are used to build the logic
  - _`shared`, `entities`_
- one feature **cannot** import another
  - _If there is such a need - the dependency needs to be transferred to the layer above / below, or solved through the composition through children-props_
- features cannot be nested, but they can be combined by a common folder, i.e. structurally
  - _At the same time, you can not create intermediate files that are necessary for a specific group of features_
- _You can only use re-export files_

## Can use

`shared`, `entities`

## Structure

```sh
└── features/{slice}
    ├── lib/
    ├── model/
    ├── ui/
    └── index.ts
```
