Front end for podcasttime.io
============================

About `build.zip`
-----------------

The whole build directory is checked in as one file called `build.zip`.
That keeps it easy to create a new build without having to git add
new files. The `./build/` directory is still git ignored.

This build is created with `./make_build.sh`.

The reason for checking in the whole build is to avoid having to run
`yarn run build` on the server since it's very CPU intensive on a cheap
shared server.


About the logo
--------------

Logo comes from the [
Miu square shadow social](https://www.iconfinder.com/icons/765089/media_podcast_shadow_social_square_icon#size=128)
icon set.
