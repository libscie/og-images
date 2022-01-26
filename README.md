# `og-images`

This repository is to manage the creation of [OpenGraph](https://ogp.me/) images for various webpages operated by Liberate Science GmbH.

## Development

```sh
git clone https://github.com/libscie/og-images
cd og-images

npm install
nodemon index
```

## Current route results

### `/api/researchequals`

![](https://og-images.herokuapp.com/api/researchequals)

No params!

### `/api/workspace`

![](https://og-images.herokuapp.com/api/workspace?title=test&avatar=https://avatars.githubusercontent.com/u/2946344?v=4&handle=chartgerink&orcid=1234-1234-1234-1234)

| `param`  | `value` | Example                                               |
|----------|---------|-------------------------------------------------------|
| `title`  | String  | Test Name                                             |
| `avatar` | String  | `https://avatars.githubusercontent.com/u/2946344?v=4` |
| `handle` | String  | testname                                              |
| `orcid`  | String  | `1234-1234-1234-1234`                                 |

### `/api/module`

![](https://og-images.herokuapp.com/api/module?title=%20title%20Test%20title%20Test%20title%20%20title%20Test%20title%20Test%20title%20%20title%20Test%20title%20Test%20title%20%20title%20Test%20title%20Test%20title%20%20title%20Test%20title%20Test%20title%20%20title%20Test%20title%20Test%20title%20%20title%20Test%20title%20Test%20title%20%20title%20Test%20title%20Test%20title%20%20title%20Test%20title%20Test%20title%20%20title%20Test%20title%20Test%20title%20&type=Theory&doi=10.53962/1234-1234&publishedAt=2022-01-20&avatars=https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4&license=CC0%20Public%20Domain%20Dedication)

| `param`       | `value`                            | Example                                                                                                                                                       |
|---------------|------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `title`       | String                             | Too Good to be False: Nonsignificant Results Revisited                                                                                                        |
| `doi`         | String                             | `10.53962/1234-1234`                                                                                                                                          |
| `type`        | String                             | Data analysis                                                                                                                                                 |
| `publishedAt` | String                             | `1970-01-01`                                                                                                                                                  |
| `license`     | String                             | CC-BY 4.0                                                                                                                                                     |
| `avatars`     | String of URLs, separated by semi-colon | `https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4;https://avatars.githubusercontent.com/u/2946344?v=4` |