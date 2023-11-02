#!/usr/bin/sh

path="${2:-downloads}"

rm -rf "${path}"

mkdir -p "${path}"

gh release download -D "${path}" "${1}"
