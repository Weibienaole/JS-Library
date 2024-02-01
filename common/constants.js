import { join } from "path"
import { cwd } from "process"

export const returDatumTargetPath = path => join(cwd(), path)

export const OIRGIN_DIR = '/content'

export const UTILS_DIR_PATH = returDatumTargetPath(`${OIRGIN_DIR}`)

export const REALTIVE_UPDATES_RECORD_PATH = '/readmes/updates.json'

