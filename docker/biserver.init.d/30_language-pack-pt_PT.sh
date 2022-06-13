#!/bin/sh

set -eu
export LC_ALL=C

VERSION='9.3-22.06.13'
URL="https://repo.stratebi.com/repository/lincebi-raw/pentaho-language-packs/languagePack_pt_PT-${VERSION:?}.zip"

curl -fsSL "${URL:?}" > "${BISERVER_HOME:?}"/"${SOLUTIONS_DIRNAME:?}"/system/language-pack-pt_PT.zip
(cd "${BISERVER_HOME:?}"/"${SOLUTIONS_DIRNAME:?}"/system/ && unzip -qo ./language-pack-pt_PT.zip && rm -f ./language-pack-pt_PT.zip)
