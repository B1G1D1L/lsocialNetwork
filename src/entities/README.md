## Description

There are usually placed:

- business entities, for building the business logic of the application
  > _For example: `user`, `order`, `post`, `journal`, `navigation`, ..._
- components with the representation of entities, for building the UI of the overlying layers
  > _For example: `UserCard`, `TweetCard`, ..._

## Can use

`shared`

## Structure

```sh
└── entities/{slice}
    ├── lib/
    ├── model/
    ├── ui/
    └── index.ts
```
