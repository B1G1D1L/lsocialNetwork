# Shared

![shared-themed-bordered](https://feature-sliced.design/assets/images/shared-14b558e88a6c1319ea28deade496363b.png)

## Description

There are usually placed:

- shared **UIKit** of the application (if there is one)
  - **\*Segment**: `shared/ui`\*
- shared **auxiliary libraries**
  - **\*Segment**: `shared/lib`\*
- general module for **working with the API**
  - **\*Segment**: `shared/api`\*
- module **configuration of the application** and its environment
  - **\*Segment**: `shared/config`\*

## Can use

shared can't use any layer

## Structure

```sh
└── shared/
    ├── api/
    ├── config/
    ├── lib/
    └── ui/
```
