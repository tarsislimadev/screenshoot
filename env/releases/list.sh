#!/usr/bin/sh

gh release list | head -n 1 | cut -f1 
