import {RecordKey, Unicode, Word} from "@sagittal/general"
import {Code} from "../../../../../bin"
import {mergeCodeMapsCheckingForCaseDesensitizedConflictsButWithoutCaseDesensitizing} from "../../merge"
import {SMuFL_MAP} from "../../smufl"

const SAGITTAL_LONG_ASCII_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "|(": SMuFL_MAP["acsg5V7klup"],
    "!(": SMuFL_MAP["acsg5V7kldn"],
    "/|": SMuFL_MAP["acsg5cmup"],
    "\\!": SMuFL_MAP["acsg5cmdn"],
    "|)": SMuFL_MAP["acsg7cmup"],
    "!)": SMuFL_MAP["acsg7cmdn"],
    "//|": SMuFL_MAP["acsg25smdsup"],
    "\\\\!": SMuFL_MAP["acsg25smdsdn"],
    "/|)": SMuFL_MAP["acsg35mddsup"],
    "\\!)": SMuFL_MAP["acsg35mddsdn"],
    "/|\\": SMuFL_MAP["acsg11mddsup"],
    "\\!/": SMuFL_MAP["acsg11mddsdn"],
    "(|)": SMuFL_MAP["acsg11lgdsup"],
    "(!)": SMuFL_MAP["acsg11lgdsdn"],
    "(|\\": SMuFL_MAP["acsg35lgdsup"],
    "(!/": SMuFL_MAP["acsg35lgdsdn"],
    ")||(": SMuFL_MAP["acsgsh25Sdn"],
    ")!!(": SMuFL_MAP["acsgfl25Sup"],
    "||)": SMuFL_MAP["acsgsh7Cdn"],
    "!!)": SMuFL_MAP["acsgfl7Cup"],
    "||\\": SMuFL_MAP["acsgsh5Cdn"],
    "!!/": SMuFL_MAP["acsgfl5Cup"],
    "/||)": SMuFL_MAP["acsgsh5V7Kdn"],
    "\\!!)": SMuFL_MAP["acsgfl5V7Kup"],
    "/||\\": SMuFL_MAP["acsgsh"],
    "\\!!/": SMuFL_MAP["acsgfl"],
    "|||(": SMuFL_MAP["acsgsh5V7Kup"],
    "!!!(": SMuFL_MAP["acsgfl5V7Kdn"],
    "/|||": SMuFL_MAP["acsgsh5Cup"],
    "\\!!!": SMuFL_MAP["acsgfl5Cdn"],
    "|||)": SMuFL_MAP["acsgsh7Cup"],
    "!!!)": SMuFL_MAP["acsgfl7Cdn"],
    "//|||": SMuFL_MAP["acsgsh25Sup"],
    "\\\\!!!": SMuFL_MAP["acsgfl25Sdn"],
    "/|||)": SMuFL_MAP["acsgsh35Mup"],
    "\\!!!)": SMuFL_MAP["acsgfl35Mdn"],
    "/|||\\": SMuFL_MAP["acsgsh11Mup"],
    "\\!!!/": SMuFL_MAP["acsgfl11Mdn"],
    "(|||)": SMuFL_MAP["acsgsh11Lup"],
    "(!!!)": SMuFL_MAP["acsgfl11Ldn"],
    "(|||\\": SMuFL_MAP["acsgsh35Lup"],
    "(!!!/": SMuFL_MAP["acsgfl35Ldn"],
    ")X(": SMuFL_MAP["acsgdbsh25Sdn"],
    ")Y(": SMuFL_MAP["acsgdbfl25Sup"],
    "X)": SMuFL_MAP["acsgdbsh7Cdn"],
    "Y)": SMuFL_MAP["acsgdbfl7Cup"],
    "X\\": SMuFL_MAP["acsgdbsh5Cdn"],
    "Y/": SMuFL_MAP["acsgdbfl5Cup"],
    "/X)": SMuFL_MAP["acsgdbsh5V7Kdn"],
    "\\Y)": SMuFL_MAP["acsgdbfl5V7Kup"],
    "/X\\": SMuFL_MAP["acsgdbsh"],
    "\\Y/": SMuFL_MAP["acsgdbfl"],
    ")|(": SMuFL_MAP["acsg7V11klup"],
    ")!(": SMuFL_MAP["acsg7V11kldn"],
    "~|(": SMuFL_MAP["acsg17cmup"],
    "~!(": SMuFL_MAP["acsg17cmdn"],
    "|\\": SMuFL_MAP["acsg55cmup"],
    "!/": SMuFL_MAP["acsg55cmdn"],
    "(|": SMuFL_MAP["acsg7V11cmup"],
    "(!": SMuFL_MAP["acsg7V11cmdn"],
    "(|(": SMuFL_MAP["acsg5V11smdsup"],
    "(!(": SMuFL_MAP["acsg5V11smdsdn"],
    "~||(": SMuFL_MAP["acsgsh5V11Sdn"],
    "~!!(": SMuFL_MAP["acsgfl5V11Sup"],
    ")||~": SMuFL_MAP["acsgsh7V11Cdn"],
    ")!!~": SMuFL_MAP["acsgfl7V11Cup"],
    "/||": SMuFL_MAP["acsgsh55Cdn"],
    "\\!!": SMuFL_MAP["acsgfl55Cup"],
    "(||(": SMuFL_MAP["acsgsh17Cdn"],
    "(!!(": SMuFL_MAP["acsgfl17Cup"],
    "//||": SMuFL_MAP["acsgsh7V11Kdn"],
    "\\\\!!": SMuFL_MAP["acsgfl7V11Kup"],
    ")|||(": SMuFL_MAP["acsgsh7V11Kup"],
    ")!!!(": SMuFL_MAP["acsgfl7V11Kdn"],
    "~|||(": SMuFL_MAP["acsgsh17Cup"],
    "~!!!(": SMuFL_MAP["acsgfl17Cdn"],
    "|||\\": SMuFL_MAP["acsgsh55Cup"],
    "!!!/": SMuFL_MAP["acsgfl55Cdn"],
    "(|||": SMuFL_MAP["acsgsh7V11Cup"],
    "(!!!": SMuFL_MAP["acsgfl7V11Cdn"],
    "(|||(": SMuFL_MAP["acsgsh5V11Sup"],
    "(!!!(": SMuFL_MAP["acsgfl5V11Sdn"],
    "~X(": SMuFL_MAP["acsgdbsh5V11Sdn"],
    "~Y(": SMuFL_MAP["acsgdbfl5V11Sup"],
    ")X~": SMuFL_MAP["acsgdbsh7V11Cdn"],
    ")Y~": SMuFL_MAP["acsgdbfl7V11Cup"],
    "/X": SMuFL_MAP["acsgdbsh55Cdn"],
    "\\Y": SMuFL_MAP["acsgdbfl55Cup"],
    "(X(": SMuFL_MAP["acsgdbsh17Cdn"],
    "(Y(": SMuFL_MAP["acsgdbfl17Cup"],
    "//X": SMuFL_MAP["acsgdbsh7V11Kdn"],
    "\\\\Y": SMuFL_MAP["acsgdbfl7V11Kup"],
    "|~": SMuFL_MAP["acsg23cmup"],
    "!~": SMuFL_MAP["acsg23cmdn"],
    ")/|": SMuFL_MAP["acsg5V19cmup"],
    ")\\!": SMuFL_MAP["acsg5V19cmdn"],
    "/|~": SMuFL_MAP["acsg5V23smdsup"],
    "\\!~": SMuFL_MAP["acsg5V23smdsdn"],
    "||~": SMuFL_MAP["acsgsh5V23Sdn"],
    "!!~": SMuFL_MAP["acsgfl5V23Sup"],
    ")||)": SMuFL_MAP["acsgsh5V19Cdn"],
    ")!!)": SMuFL_MAP["acsgfl5V19Cup"],
    "/||~": SMuFL_MAP["acsgsh23Cdn"],
    "\\!!~": SMuFL_MAP["acsgfl23Cup"],
    "|||~": SMuFL_MAP["acsgsh23Cup"],
    "!!!~": SMuFL_MAP["acsgfl23Cdn"],
    ")/|||": SMuFL_MAP["acsgsh5V19Cup"],
    ")\\!!!": SMuFL_MAP["acsgfl5V19Cdn"],
    "/|||~": SMuFL_MAP["acsgsh5V23Sup"],
    "\\!!!~": SMuFL_MAP["acsgfl5V23Sdn"],
    "X~": SMuFL_MAP["acsgdbsh5V23Sdn"],
    "Y~": SMuFL_MAP["acsgdbfl5V23Sup"],
    ")X)": SMuFL_MAP["acsgdbsh5V19Cdn"],
    ")Y)": SMuFL_MAP["acsgdbfl5V19Cup"],
    "/X~": SMuFL_MAP["acsgdbsh23Cdn"],
    "\\Y~": SMuFL_MAP["acsgdbfl23Cup"],
    ")|": SMuFL_MAP["acsg19scup"],
    ")!": SMuFL_MAP["acsg19scdn"],
    "~|": SMuFL_MAP["acsg17klup"],
    "~!": SMuFL_MAP["acsg17kldn"],
    ")~|": SMuFL_MAP["acsg143cmup"],
    ")~!": SMuFL_MAP["acsg143cmdn"],
    "~~|": SMuFL_MAP["acsg11V49cmup"],
    "~~!": SMuFL_MAP["acsg11V49cmdn"],
    ")|~": SMuFL_MAP["acsg19cmup"],
    ")!~": SMuFL_MAP["acsg19cmdn"],
    ")|)": SMuFL_MAP["acsg7V19cmup"],
    ")!)": SMuFL_MAP["acsg7V19cmdn"],
    "~|)": SMuFL_MAP["acsg49smdsup"],
    "~!)": SMuFL_MAP["acsg49smdsdn"],
    "~|\\": SMuFL_MAP["acsg23smdsup"],
    "~!/": SMuFL_MAP["acsg23smdsdn"],
    ")//|": SMuFL_MAP["acsg5V13mddsup"],
    ")\\\\!": SMuFL_MAP["acsg5V13mddsdn"],
    "(|~": SMuFL_MAP["acsg11V19mddsup"],
    "(!~": SMuFL_MAP["acsg11V19mddsdn"],
    "(/|": SMuFL_MAP["acsg49mddsup"],
    "(\\!": SMuFL_MAP["acsg49mddsdn"],
    ")/|\\": SMuFL_MAP["acsg5V49mddsup"],
    ")\\!/": SMuFL_MAP["acsg5V49mddsdn"],
    "|\\)": SMuFL_MAP["acsg49lgdsup"],
    "!/)": SMuFL_MAP["acsg49lgdsdn"],
    "|\\\\": SMuFL_MAP["acsg11V19lgdsup"],
    "!//": SMuFL_MAP["acsg11V19lgdsdn"],
    ")|\\\\": SMuFL_MAP["acsg5V13lgdsup"],
    ")!//": SMuFL_MAP["acsg5V13lgdsdn"],
    ")~||": SMuFL_MAP["acsgsh23Sdn"],
    ")~!!": SMuFL_MAP["acsgfl23Sup"],
    "~~||": SMuFL_MAP["acsgsh49Sdn"],
    "~~!!": SMuFL_MAP["acsgfl49Sup"],
    ")/||": SMuFL_MAP["acsgsh7V19Cdn"],
    ")\\!!": SMuFL_MAP["acsgfl7V19Cup"],
    "(||": SMuFL_MAP["acsgsh19Cdn"],
    "(!!": SMuFL_MAP["acsgfl19Cup"],
    "~||)": SMuFL_MAP["acsgsh11V49Cdn"],
    "~!!)": SMuFL_MAP["acsgfl11V49Cup"],
    "~||\\": SMuFL_MAP["acsgsh143Cdn"],
    "~!!/": SMuFL_MAP["acsgfl143Cup"],
    ")//||": SMuFL_MAP["acsgsh17Kdn"],
    ")\\\\!!": SMuFL_MAP["acsgfl17Kup"],
    "(||~": SMuFL_MAP["acsgsh19Sdn"],
    "(!!~": SMuFL_MAP["acsgfl19Sup"],
    ")|||": SMuFL_MAP["acsgsh19Sup"],
    ")!!!": SMuFL_MAP["acsgfl19Sdn"],
    "~|||": SMuFL_MAP["acsgsh17Kup"],
    "~!!!": SMuFL_MAP["acsgfl17Kdn"],
    ")~|||": SMuFL_MAP["acsgsh143Cup"],
    ")~!!!": SMuFL_MAP["acsgfl143Cdn"],
    "~~|||": SMuFL_MAP["acsgsh11V49Cup"],
    "~~!!!": SMuFL_MAP["acsgfl11V49Cdn"],
    ")|||~": SMuFL_MAP["acsgsh19Cup"],
    ")!!!~": SMuFL_MAP["acsgfl19Cdn"],
    ")|||)": SMuFL_MAP["acsgsh7V19Cup"],
    ")!!!)": SMuFL_MAP["acsgfl7V19Cdn"],
    "~|||)": SMuFL_MAP["acsgsh49Sup"],
    "~!!!)": SMuFL_MAP["acsgfl49Sdn"],
    "~|||\\": SMuFL_MAP["acsgsh23Sup"],
    "~!!!/": SMuFL_MAP["acsgfl23Sdn"],
    ")//|||": SMuFL_MAP["acsgsh5V13Mup"],
    ")\\\\!!!": SMuFL_MAP["acsgfl5V13Mdn"],
    "(|||~": SMuFL_MAP["acsgsh11V19Mup"],
    "(!!!~": SMuFL_MAP["acsgfl11V19Mdn"],
    "(/|||": SMuFL_MAP["acsgsh49Mup"],
    "(\\!!!": SMuFL_MAP["acsgfl49Mdn"],
    ")/|||\\": SMuFL_MAP["acsgsh5V49Mup"],
    ")\\!!!/": SMuFL_MAP["acsgfl5V49Mdn"],
    "|||\\)": SMuFL_MAP["acsgsh49Lup"],
    "!!!/)": SMuFL_MAP["acsgfl49Ldn"],
    "|||\\\\": SMuFL_MAP["acsgsh11V19Lup"],
    "!!!//": SMuFL_MAP["acsgfl11V19Ldn"],
    ")|||\\\\": SMuFL_MAP["acsgsh5V13Lup"],
    ")!!!//": SMuFL_MAP["acsgfl5V13Ldn"],
    ")~X": SMuFL_MAP["acsgdbsh23Sdn"],
    ")~Y": SMuFL_MAP["acsgdbfl23Sup"],
    "~~X": SMuFL_MAP["acsgdbsh49Sdn"],
    "~~Y": SMuFL_MAP["acsgdbfl49Sup"],
    ")/X": SMuFL_MAP["acsgdbsh7V19Cdn"],
    ")\\Y": SMuFL_MAP["acsgdbfl7V19Cup"],
    "(X": SMuFL_MAP["acsgdbsh19Cdn"],
    "(Y": SMuFL_MAP["acsgdbfl19Cup"],
    "~X)": SMuFL_MAP["acsgdbsh11V49Cdn"],
    "~Y)": SMuFL_MAP["acsgdbfl11V49Cup"],
    "~X\\": SMuFL_MAP["acsgdbsh143Cdn"],
    "~Y/": SMuFL_MAP["acsgdbfl143Cup"],
    ")//X": SMuFL_MAP["acsgdbsh17Kdn"],
    ")\\\\Y": SMuFL_MAP["acsgdbfl17Kup"],
    "(X~": SMuFL_MAP["acsgdbsh19Sdn"],
    "(Y~": SMuFL_MAP["acsgdbfl19Sup"],
    "|": SMuFL_MAP["acsgshup"],
    "!": SMuFL_MAP["acsgshdn"],
    "'": SMuFL_MAP["acsgac"],
    ".": SMuFL_MAP["acsggr"],
    "\`": SMuFL_MAP["acsg1mnup"],
    ",": SMuFL_MAP["acsg1mndn"],
    "\`\`": SMuFL_MAP["acsg2mnup"],
    ",,": SMuFL_MAP["acsg2mndn"],
    "@1": SMuFL_MAP["acsg1tnup"],
    "l1": SMuFL_MAP["acsg1tndn"],
    "@2": SMuFL_MAP["acsg2tnup"],
    "l2": SMuFL_MAP["acsg2tndn"],
    "@3": SMuFL_MAP["acsg3tnup"],
    "l3": SMuFL_MAP["acsg3tndn"],
    "@4": SMuFL_MAP["acsg4tnup"],
    "l4": SMuFL_MAP["acsg4tndn"],
    "@5": SMuFL_MAP["acsg5tnup"],
    "l5": SMuFL_MAP["acsg5tndn"],
    "@6": SMuFL_MAP["acsg6tnup"],
    "l6": SMuFL_MAP["acsg6tndn"],
    "@7": SMuFL_MAP["acsg7tnup"],
    "l7": SMuFL_MAP["acsg7tndn"],
    "@8": SMuFL_MAP["acsg8tnup"],
    "l8": SMuFL_MAP["acsg8tndn"],
    "@9": SMuFL_MAP["acsg9tnup"],
    "l9": SMuFL_MAP["acsg9tndn"],
    "@.": SMuFL_MAP["acsgfrtnup"],
    "l.": SMuFL_MAP["acsgfrtndn"],
} as Record<Code & Word, Unicode & Word>

const SAGITTAL_COMMA_NAME_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "5/7k": SMuFL_MAP["acsg5V7klup"],
    "7/5k": SMuFL_MAP["acsg5V7kldn"],
    "1/5C": SMuFL_MAP["acsg5cmup"],
    "5C": SMuFL_MAP["acsg5cmdn"],
    "1/7C": SMuFL_MAP["acsg7cmup"],
    "7C": SMuFL_MAP["acsg7cmdn"],
    "1/25S": SMuFL_MAP["acsg25smdsup"],
    "25S": SMuFL_MAP["acsg25smdsdn"],
    "1/35M": SMuFL_MAP["acsg35mddsup"],
    "35M": SMuFL_MAP["acsg35mddsdn"],
    "11M": SMuFL_MAP["acsg11mddsup"],
    "1/11M": SMuFL_MAP["acsg11mddsdn"],
    "1/11L": SMuFL_MAP["acsg11lgdsup"],
    "11L": SMuFL_MAP["acsg11lgdsdn"],
    "35L": SMuFL_MAP["acsg35lgdsup"],
    "1/35L": SMuFL_MAP["acsg35lgdsdn"],
    "sh25S": SMuFL_MAP["acsgsh25Sdn"],
    "fl1/25S": SMuFL_MAP["acsgfl25Sup"],
    "sh7C": SMuFL_MAP["acsgsh7Cdn"],
    "fl1/7C": SMuFL_MAP["acsgfl7Cup"],
    "sh5C": SMuFL_MAP["acsgsh5Cdn"],
    "fl1/5C": SMuFL_MAP["acsgfl5Cup"],
    "sh7/5k": SMuFL_MAP["acsgsh5V7Kdn"],
    "fl5/7k": SMuFL_MAP["acsgfl5V7Kup"],
    "sh5/7k": SMuFL_MAP["acsgsh5V7Kup"],
    "fl7/5k": SMuFL_MAP["acsgfl5V7Kdn"],
    "sh1/5C": SMuFL_MAP["acsgsh5Cup"],
    "fl5C": SMuFL_MAP["acsgfl5Cdn"],
    "sh1/7C": SMuFL_MAP["acsgsh7Cup"],
    "fl7C": SMuFL_MAP["acsgfl7Cdn"],
    "sh1/25S": SMuFL_MAP["acsgsh25Sup"],
    "fl25S": SMuFL_MAP["acsgfl25Sdn"],
    "sh1/35M": SMuFL_MAP["acsgsh35Mup"],
    "fl35M": SMuFL_MAP["acsgfl35Mdn"],
    "sh11M": SMuFL_MAP["acsgsh11Mup"],
    "fl1/11M": SMuFL_MAP["acsgfl11Mdn"],
    "sh1/11L": SMuFL_MAP["acsgsh11Lup"],
    "fl11L": SMuFL_MAP["acsgfl11Ldn"],
    "sh35L": SMuFL_MAP["acsgsh35Lup"],
    "fl1/35L": SMuFL_MAP["acsgfl35Ldn"],
    "dbsh25S": SMuFL_MAP["acsgdbsh25Sdn"],
    "dbfl1/25S": SMuFL_MAP["acsgdbfl25Sup"],
    "dbsh7C": SMuFL_MAP["acsgdbsh7Cdn"],
    "dbfl1/7C": SMuFL_MAP["acsgdbfl7Cup"],
    "dbsh5C": SMuFL_MAP["acsgdbsh5Cdn"],
    "dbfl1/5C": SMuFL_MAP["acsgdbfl5Cup"],
    "dbsh7/5k": SMuFL_MAP["acsgdbsh5V7Kdn"],
    "dbfl5/7k": SMuFL_MAP["acsgdbfl5V7Kup"],
    "7/11k": SMuFL_MAP["acsg7V11klup"],
    "11/7k": SMuFL_MAP["acsg7V11kldn"],
    "17C": SMuFL_MAP["acsg17cmup"],
    "1/17C": SMuFL_MAP["acsg17cmdn"],
    "55C": SMuFL_MAP["acsg55cmup"],
    "1/55C": SMuFL_MAP["acsg55cmdn"],
    "7/11C": SMuFL_MAP["acsg7V11cmup"],
    "11/7C": SMuFL_MAP["acsg7V11cmdn"],
    "5/11S": SMuFL_MAP["acsg5V11smdsup"],
    "11/5S": SMuFL_MAP["acsg5V11smdsdn"],
    "sh11/5S": SMuFL_MAP["acsgsh5V11Sdn"],
    "fl5/11S": SMuFL_MAP["acsgfl5V11Sup"],
    "sh11/7C": SMuFL_MAP["acsgsh7V11Cdn"],
    "fl7/11C": SMuFL_MAP["acsgfl7V11Cup"],
    "sh1/55C": SMuFL_MAP["acsgsh55Cdn"],
    "fl55C": SMuFL_MAP["acsgfl55Cup"],
    "sh1/17C": SMuFL_MAP["acsgsh17Cdn"],
    "fl17C": SMuFL_MAP["acsgfl17Cup"],
    "sh11/7k": SMuFL_MAP["acsgsh7V11Kdn"],
    "fl7/11k": SMuFL_MAP["acsgfl7V11Kup"],
    "sh7/11k": SMuFL_MAP["acsgsh7V11Kup"],
    "fl11/7k": SMuFL_MAP["acsgfl7V11Kdn"],
    "sh17C": SMuFL_MAP["acsgsh17Cup"],
    "fl1/17C": SMuFL_MAP["acsgfl17Cdn"],
    "sh55C": SMuFL_MAP["acsgsh55Cup"],
    "fl1/55C": SMuFL_MAP["acsgfl55Cdn"],
    "sh7/11C": SMuFL_MAP["acsgsh7V11Cup"],
    "fl11/7C": SMuFL_MAP["acsgfl7V11Cdn"],
    "sh5/11S": SMuFL_MAP["acsgsh5V11Sup"],
    "fl11/5S": SMuFL_MAP["acsgfl5V11Sdn"],
    "dbsh11/5S": SMuFL_MAP["acsgdbsh5V11Sdn"],
    "dbfl5/11S": SMuFL_MAP["acsgdbfl5V11Sup"],
    "dbsh11/7C": SMuFL_MAP["acsgdbsh7V11Cdn"],
    "dbfl7/11C": SMuFL_MAP["acsgdbfl7V11Cup"],
    "dbsh1/55C": SMuFL_MAP["acsgdbsh55Cdn"],
    "dbfl55C": SMuFL_MAP["acsgdbfl55Cup"],
    "dbsh1/17C": SMuFL_MAP["acsgdbsh17Cdn"],
    "dbfl17C": SMuFL_MAP["acsgdbfl17Cup"],
    "dbsh11/7k": SMuFL_MAP["acsgdbsh7V11Kdn"],
    "dbfl7/11k": SMuFL_MAP["acsgdbfl7V11Kup"],
    "23C": SMuFL_MAP["acsg23cmup"],
    "1/23C": SMuFL_MAP["acsg23cmdn"],
    "19/5C": SMuFL_MAP["acsg5V19cmup"],
    "5/19C": SMuFL_MAP["acsg5V19cmdn"],
    "23/5S": SMuFL_MAP["acsg5V23smdsup"],
    "5/23S": SMuFL_MAP["acsg5V23smdsdn"],
    "sh5/23S": SMuFL_MAP["acsgsh5V23Sdn"],
    "fl23/5S": SMuFL_MAP["acsgfl5V23Sup"],
    "sh5/19C": SMuFL_MAP["acsgsh5V19Cdn"],
    "fl19/5C": SMuFL_MAP["acsgfl5V19Cup"],
    "sh1/23C": SMuFL_MAP["acsgsh23Cdn"],
    "fl23C": SMuFL_MAP["acsgfl23Cup"],
    "sh23C": SMuFL_MAP["acsgsh23Cup"],
    "fl1/23C": SMuFL_MAP["acsgfl23Cdn"],
    "sh19/5C": SMuFL_MAP["acsgsh5V19Cup"],
    "fl5/19C": SMuFL_MAP["acsgfl5V19Cdn"],
    "sh23/5S": SMuFL_MAP["acsgsh5V23Sup"],
    "fl5/23S": SMuFL_MAP["acsgfl5V23Sdn"],
    "dbsh5/23S": SMuFL_MAP["acsgdbsh5V23Sdn"],
    "dbfl23/5S": SMuFL_MAP["acsgdbfl5V23Sup"],
    "dbsh5/19C": SMuFL_MAP["acsgdbsh5V19Cdn"],
    "dbfl19/5C": SMuFL_MAP["acsgdbfl5V19Cup"],
    "dbsh1/23C": SMuFL_MAP["acsgdbsh23Cdn"],
    "dbfl23C": SMuFL_MAP["acsgdbfl23Cup"],
    "19s": SMuFL_MAP["acsg19scup"],
    "1/19s": SMuFL_MAP["acsg19scdn"],
    "1/17k": SMuFL_MAP["acsg17klup"],
    "17k": SMuFL_MAP["acsg17kldn"],
    "1/143C": SMuFL_MAP["acsg143cmup"],
    "143C": SMuFL_MAP["acsg143cmdn"],
    "11/49C": SMuFL_MAP["acsg11V49cmup"],
    "49/11C": SMuFL_MAP["acsg11V49cmdn"],
    "1/19C": SMuFL_MAP["acsg19cmup"],
    "19C": SMuFL_MAP["acsg19cmdn"],
    "19/7C": SMuFL_MAP["acsg7V19cmup"],
    "7/19C": SMuFL_MAP["acsg7V19cmdn"],
    "49S": SMuFL_MAP["acsg49smdsup"],
    "1/49S": SMuFL_MAP["acsg49smdsdn"],
    "23S": SMuFL_MAP["acsg23smdsup"],
    "1/23S": SMuFL_MAP["acsg23smdsdn"],
    "13/5M": SMuFL_MAP["acsg5V13mddsup"],
    "5/13M": SMuFL_MAP["acsg5V13mddsdn"],
    "11/19M": SMuFL_MAP["acsg11V19mddsup"],
    "19/11M": SMuFL_MAP["acsg11V19mddsdn"],
    "1/49M": SMuFL_MAP["acsg49mddsup"],
    "49M": SMuFL_MAP["acsg49mddsdn"],
    "5/49M": SMuFL_MAP["acsg5V49mddsup"],
    "49/5M": SMuFL_MAP["acsg5V49mddsdn"],
    "49L": SMuFL_MAP["acsg49lgdsup"],
    "1/49L": SMuFL_MAP["acsg49lgdsdn"],
    "19/11L": SMuFL_MAP["acsg11V19lgdsup"],
    "11/19L": SMuFL_MAP["acsg11V19lgdsdn"],
    "5/13L": SMuFL_MAP["acsg5V13lgdsup"],
    "13/5L": SMuFL_MAP["acsg5V13lgdsdn"],
    "sh1/23S": SMuFL_MAP["acsgsh23Sdn"],
    "fl23S": SMuFL_MAP["acsgfl23Sup"],
    "sh1/49S": SMuFL_MAP["acsgsh49Sdn"],
    "fl49S": SMuFL_MAP["acsgfl49Sup"],
    "sh7/19C": SMuFL_MAP["acsgsh7V19Cdn"],
    "fl19/7C": SMuFL_MAP["acsgfl7V19Cup"],
    "sh19C": SMuFL_MAP["acsgsh19Cdn"],
    "fl1/19C": SMuFL_MAP["acsgfl19Cup"],
    "sh49/11C": SMuFL_MAP["acsgsh11V49Cdn"],
    "fl11/49C": SMuFL_MAP["acsgfl11V49Cup"],
    "sh143C": SMuFL_MAP["acsgsh143Cdn"],
    "fl1/143C": SMuFL_MAP["acsgfl143Cup"],
    "sh17k": SMuFL_MAP["acsgsh17Kdn"],
    "fl1/17k": SMuFL_MAP["acsgfl17Kup"],
    "sh1/19s": SMuFL_MAP["acsgsh19Sdn"],
    "fl19s": SMuFL_MAP["acsgfl19Sup"],
    "sh19s": SMuFL_MAP["acsgsh19Sup"],
    "fl1/19s": SMuFL_MAP["acsgfl19Sdn"],
    "sh1/17k": SMuFL_MAP["acsgsh17Kup"],
    "fl17k": SMuFL_MAP["acsgfl17Kdn"],
    "sh1/143C": SMuFL_MAP["acsgsh143Cup"],
    "fl143C": SMuFL_MAP["acsgfl143Cdn"],
    "sh11/49C": SMuFL_MAP["acsgsh11V49Cup"],
    "fl49/11C": SMuFL_MAP["acsgfl11V49Cdn"],
    "sh1/19C": SMuFL_MAP["acsgsh19Cup"],
    "fl19C": SMuFL_MAP["acsgfl19Cdn"],
    "sh19/7C": SMuFL_MAP["acsgsh7V19Cup"],
    "fl7/19C": SMuFL_MAP["acsgfl7V19Cdn"],
    "sh49S": SMuFL_MAP["acsgsh49Sup"],
    "fl1/49S": SMuFL_MAP["acsgfl49Sdn"],
    "sh23S": SMuFL_MAP["acsgsh23Sup"],
    "fl1/23S": SMuFL_MAP["acsgfl23Sdn"],
    "sh13/5M": SMuFL_MAP["acsgsh5V13Mup"],
    "fl5/13M": SMuFL_MAP["acsgfl5V13Mdn"],
    "sh11/19M": SMuFL_MAP["acsgsh11V19Mup"],
    "fl19/11M": SMuFL_MAP["acsgfl11V19Mdn"],
    "sh1/49M": SMuFL_MAP["acsgsh49Mup"],
    "fl49M": SMuFL_MAP["acsgfl49Mdn"],
    "sh5/49M": SMuFL_MAP["acsgsh5V49Mup"],
    "fl49/5M": SMuFL_MAP["acsgfl5V49Mdn"],
    "sh49L": SMuFL_MAP["acsgsh49Lup"],
    "fl1/49L": SMuFL_MAP["acsgfl49Ldn"],
    "sh19/11L": SMuFL_MAP["acsgsh11V19Lup"],
    "fl11/19L": SMuFL_MAP["acsgfl11V19Ldn"],
    "sh5/13L": SMuFL_MAP["acsgsh5V13Lup"],
    "fl13/5L": SMuFL_MAP["acsgfl5V13Ldn"],
    "dbsh1/23S": SMuFL_MAP["acsgdbsh23Sdn"],
    "dbfl23S": SMuFL_MAP["acsgdbfl23Sup"],
    "dbsh1/49S": SMuFL_MAP["acsgdbsh49Sdn"],
    "dbfl49S": SMuFL_MAP["acsgdbfl49Sup"],
    "dbsh7/19C": SMuFL_MAP["acsgdbsh7V19Cdn"],
    "dbfl19/7C": SMuFL_MAP["acsgdbfl7V19Cup"],
    "dbsh19C": SMuFL_MAP["acsgdbsh19Cdn"],
    "dbfl1/19C": SMuFL_MAP["acsgdbfl19Cup"],
    "dbsh49/11C": SMuFL_MAP["acsgdbsh11V49Cdn"],
    "dbfl11/49C": SMuFL_MAP["acsgdbfl11V49Cup"],
    "dbsh143C": SMuFL_MAP["acsgdbsh143Cdn"],
    "dbfl1/143C": SMuFL_MAP["acsgdbfl143Cup"],
    "dbsh17k": SMuFL_MAP["acsgdbsh17Kdn"],
    "dbfl1/17k": SMuFL_MAP["acsgdbfl17Kup"],
    "dbsh1/19s": SMuFL_MAP["acsgdbsh19Sdn"],
    "dbfl19s": SMuFL_MAP["acsgdbfl19Sup"],
    "5s": SMuFL_MAP["acsgac"],
    "1/5s": SMuFL_MAP["acsggr"],
    "1/(5.7.13)n": SMuFL_MAP["acsg1mnup"],
    "5.7.13n": SMuFL_MAP["acsg1mndn"],
    "65/77n": SMuFL_MAP["acsg2mnup"],
    "77/65n": SMuFL_MAP["acsg2mndn"],
    "7^2.11.19/5n": SMuFL_MAP["acsg1tnup"],
    "5/(7^2.11.19)n": SMuFL_MAP["acsg1tndn"],
    "1/(7^3.17)n": SMuFL_MAP["acsg2tnup"],
    "7^3.17n": SMuFL_MAP["acsg2tndn"],
    "1/(5.7.13)ntn": SMuFL_MAP["acsg3tnup"],
    "5.7.13ntn": SMuFL_MAP["acsg3tndn"],
    "5^2.11^2/7n": SMuFL_MAP["acsg4tnup"],
    "7/(5^2.11^2)n": SMuFL_MAP["acsg4tndn"],
    "7^4/25n": SMuFL_MAP["acsg5tnup"],
    "25/7^4n": SMuFL_MAP["acsg5tndn"],
    "65/77ntn": SMuFL_MAP["acsg6tnup"],
    "77/65ntn": SMuFL_MAP["acsg6tndn"],
    "7/(5^2.17)n": SMuFL_MAP["acsg7tnup"],
    "5^2.17/7n": SMuFL_MAP["acsg7tndn"],
    "11.17/(5^2.7)n": SMuFL_MAP["acsg8tnup"],
    "5^2.7/(11.17)n": SMuFL_MAP["acsg8tndn"],
    "1/(7^2.11)n": SMuFL_MAP["acsg9tnup"],
    "7^2.11n": SMuFL_MAP["acsg9tndn"],
    "77/(5.37)n": SMuFL_MAP["acsgfrtnup"],
    "5.37/77n": SMuFL_MAP["acsgfrtndn"],
} as Record<Code & Word, Unicode & Word>

const SAGITTAL_SAGISPEAK_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "nai": SMuFL_MAP["acsg5V7klup"],
    "nao": SMuFL_MAP["acsg5V7kldn"],
    "pai": SMuFL_MAP["acsg5cmup"],
    "pao": SMuFL_MAP["acsg5cmdn"],
    "tai": SMuFL_MAP["acsg7cmup"],
    "tao": SMuFL_MAP["acsg7cmdn"],
    "fai": SMuFL_MAP["acsg25smdsup"],
    "fao": SMuFL_MAP["acsg25smdsdn"],
    "gai": SMuFL_MAP["acsg35mddsup"],
    "gao": SMuFL_MAP["acsg35mddsdn"],
    "vai": SMuFL_MAP["acsg11mddsup"],
    "vao": SMuFL_MAP["acsg11mddsdn"],
    "wai": SMuFL_MAP["acsg11lgdsup"],
    "wao": SMuFL_MAP["acsg11lgdsdn"],
    "dai": SMuFL_MAP["acsg35lgdsup"],
    "dao": SMuFL_MAP["acsg35lgdsdn"],
    "faoshp": SMuFL_MAP["acsgsh25Sdn"],
    "faiflt": SMuFL_MAP["acsgfl25Sup"],
    "taoshp": SMuFL_MAP["acsgsh7Cdn"],
    "taiflt": SMuFL_MAP["acsgfl7Cup"],
    "paoshp": SMuFL_MAP["acsgsh5Cdn"],
    "paiflt": SMuFL_MAP["acsgfl5Cup"],
    "naoshp": SMuFL_MAP["acsgsh5V7Kdn"],
    "naiflt": SMuFL_MAP["acsgfl5V7Kup"],
    "shp": SMuFL_MAP["acsgsh"],
    "flt": SMuFL_MAP["acsgfl"],
    "naishp": SMuFL_MAP["acsgsh5V7Kup"],
    "naoflt": SMuFL_MAP["acsgfl5V7Kdn"],
    "paishp": SMuFL_MAP["acsgsh5Cup"],
    "paoflt": SMuFL_MAP["acsgfl5Cdn"],
    "taishp": SMuFL_MAP["acsgsh7Cup"],
    "taoflt": SMuFL_MAP["acsgfl7Cdn"],
    "faishp": SMuFL_MAP["acsgsh25Sup"],
    "faoflt": SMuFL_MAP["acsgfl25Sdn"],
    "gaishp": SMuFL_MAP["acsgsh35Mup"],
    "gaoflt": SMuFL_MAP["acsgfl35Mdn"],
    "vaishp": SMuFL_MAP["acsgsh11Mup"],
    "vaoflt": SMuFL_MAP["acsgfl11Mdn"],
    "waishp": SMuFL_MAP["acsgsh11Lup"],
    "waoflt": SMuFL_MAP["acsgfl11Ldn"],
    "daishp": SMuFL_MAP["acsgsh35Lup"],
    "daoflt": SMuFL_MAP["acsgfl35Ldn"],
    "faodblshp": SMuFL_MAP["acsgdbsh25Sdn"],
    "faidblflt": SMuFL_MAP["acsgdbfl25Sup"],
    "taodblshp": SMuFL_MAP["acsgdbsh7Cdn"],
    "taidblflt": SMuFL_MAP["acsgdbfl7Cup"],
    "paodblshp": SMuFL_MAP["acsgdbsh5Cdn"],
    "paidblflt": SMuFL_MAP["acsgdbfl5Cup"],
    "naodblshp": SMuFL_MAP["acsgdbsh5V7Kdn"],
    "naidblflt": SMuFL_MAP["acsgdbfl5V7Kup"],
    "dblshp": SMuFL_MAP["acsgdbsh"],
    "dblflt": SMuFL_MAP["acsgdbfl"],
    "ranai": SMuFL_MAP["acsg7V11klup"],
    "ranao": SMuFL_MAP["acsg7V11kldn"],
    "sanai": SMuFL_MAP["acsg17cmup"],
    "sanao": SMuFL_MAP["acsg17cmdn"],
    "kai": SMuFL_MAP["acsg55cmup"],
    "kao": SMuFL_MAP["acsg55cmdn"],
    "jai": SMuFL_MAP["acsg7V11cmup"],
    "jao": SMuFL_MAP["acsg7V11cmdn"],
    "janai": SMuFL_MAP["acsg5V11smdsup"],
    "janao": SMuFL_MAP["acsg5V11smdsdn"],
    "janaoshp": SMuFL_MAP["acsgsh5V11Sdn"],
    "janaiflt": SMuFL_MAP["acsgfl5V11Sup"],
    "jaoshp": SMuFL_MAP["acsgsh7V11Cdn"],
    "jaiflt": SMuFL_MAP["acsgfl7V11Cup"],
    "kaoshp": SMuFL_MAP["acsgsh55Cdn"],
    "kaiflt": SMuFL_MAP["acsgfl55Cup"],
    "sanaoshp": SMuFL_MAP["acsgsh17Cdn"],
    "sanaiflt": SMuFL_MAP["acsgfl17Cup"],
    "ranaoshp": SMuFL_MAP["acsgsh7V11Kdn"],
    "ranaiflt": SMuFL_MAP["acsgfl7V11Kup"],
    "ranaishp": SMuFL_MAP["acsgsh7V11Kup"],
    "ranaoflt": SMuFL_MAP["acsgfl7V11Kdn"],
    "sanaishp": SMuFL_MAP["acsgsh17Cup"],
    "sanaoflt": SMuFL_MAP["acsgfl17Cdn"],
    "kaishp": SMuFL_MAP["acsgsh55Cup"],
    "kaoflt": SMuFL_MAP["acsgfl55Cdn"],
    "jaishp": SMuFL_MAP["acsgsh7V11Cup"],
    "jaoflt": SMuFL_MAP["acsgfl7V11Cdn"],
    "janaishp": SMuFL_MAP["acsgsh5V11Sup"],
    "janaoflt": SMuFL_MAP["acsgfl5V11Sdn"],
    "janaodblshp": SMuFL_MAP["acsgdbsh5V11Sdn"],
    "janaidblflt": SMuFL_MAP["acsgdbfl5V11Sup"],
    "jaodblshp": SMuFL_MAP["acsgdbsh7V11Cdn"],
    "jaidblflt": SMuFL_MAP["acsgdbfl7V11Cup"],
    "kaodblshp": SMuFL_MAP["acsgdbsh55Cdn"],
    "kaidblflt": SMuFL_MAP["acsgdbfl55Cup"],
    "sanaodblshp": SMuFL_MAP["acsgdbsh17Cdn"],
    "sanaidblflt": SMuFL_MAP["acsgdbfl17Cup"],
    "ranaodblshp": SMuFL_MAP["acsgdbsh7V11Kdn"],
    "ranaidblflt": SMuFL_MAP["acsgdbfl7V11Kup"],
    "zai": SMuFL_MAP["acsg23cmup"],
    "zao": SMuFL_MAP["acsg23cmdn"],
    "prai": SMuFL_MAP["acsg5V19cmup"],
    "prao": SMuFL_MAP["acsg5V19cmdn"],
    "pazai": SMuFL_MAP["acsg5V23smdsup"],
    "pazao": SMuFL_MAP["acsg5V23smdsdn"],
    "pazaoshp": SMuFL_MAP["acsgsh5V23Sdn"],
    "pazaiflt": SMuFL_MAP["acsgfl5V23Sup"],
    "praoshp": SMuFL_MAP["acsgsh5V19Cdn"],
    "praiflt": SMuFL_MAP["acsgfl5V19Cup"],
    "zaoshp": SMuFL_MAP["acsgsh23Cdn"],
    "zaiflt": SMuFL_MAP["acsgfl23Cup"],
    "zaishp": SMuFL_MAP["acsgsh23Cup"],
    "zaoflt": SMuFL_MAP["acsgfl23Cdn"],
    "praishp": SMuFL_MAP["acsgsh5V19Cup"],
    "praoflt": SMuFL_MAP["acsgfl5V19Cdn"],
    "pazaishp": SMuFL_MAP["acsgsh5V23Sup"],
    "pazaoflt": SMuFL_MAP["acsgfl5V23Sdn"],
    "pazaodblshp": SMuFL_MAP["acsgdbsh5V23Sdn"],
    "pazaidblflt": SMuFL_MAP["acsgdbfl5V23Sup"],
    "praodblshp": SMuFL_MAP["acsgdbsh5V19Cdn"],
    "praidblflt": SMuFL_MAP["acsgdbfl5V19Cup"],
    "zaodblshp": SMuFL_MAP["acsgdbsh23Cdn"],
    "zaidblflt": SMuFL_MAP["acsgdbfl23Cup"],
    "rai": SMuFL_MAP["acsg19scup"],
    "rao": SMuFL_MAP["acsg19scdn"],
    "sai": SMuFL_MAP["acsg17klup"],
    "sao": SMuFL_MAP["acsg17kldn"],
    "slai": SMuFL_MAP["acsg143cmup"],
    "slao": SMuFL_MAP["acsg143cmdn"],
    "shai": SMuFL_MAP["acsg11V49cmup"],
    "shao": SMuFL_MAP["acsg11V49cmdn"],
    "razai": SMuFL_MAP["acsg19cmup"],
    "razao": SMuFL_MAP["acsg19cmdn"],
    "ratai": SMuFL_MAP["acsg7V19cmup"],
    "ratao": SMuFL_MAP["acsg7V19cmdn"],
    "satai": SMuFL_MAP["acsg49smdsup"],
    "satao": SMuFL_MAP["acsg49smdsdn"],
    "sakai": SMuFL_MAP["acsg23smdsup"],
    "sakao": SMuFL_MAP["acsg23smdsdn"],
    "frai": SMuFL_MAP["acsg5V13mddsup"],
    "frao": SMuFL_MAP["acsg5V13mddsdn"],
    "jazai": SMuFL_MAP["acsg11V19mddsup"],
    "jazao": SMuFL_MAP["acsg11V19mddsdn"],
    "jpai": SMuFL_MAP["acsg49mddsup"],
    "jpao": SMuFL_MAP["acsg49mddsdn"],
    "vrai": SMuFL_MAP["acsg5V49mddsup"],
    "vrao": SMuFL_MAP["acsg5V49mddsdn"],
    "ktai": SMuFL_MAP["acsg49lgdsup"],
    "ktao": SMuFL_MAP["acsg49lgdsdn"],
    "chai": SMuFL_MAP["acsg11V19lgdsup"],
    "chao": SMuFL_MAP["acsg11V19lgdsdn"],
    "rachai": SMuFL_MAP["acsg5V13lgdsup"],
    "rachao": SMuFL_MAP["acsg5V13lgdsdn"],
    "sakaoshp": SMuFL_MAP["acsgsh23Sdn"],
    "sakaiflt": SMuFL_MAP["acsgfl23Sup"],
    "sataoshp": SMuFL_MAP["acsgsh49Sdn"],
    "sataiflt": SMuFL_MAP["acsgfl49Sup"],
    "rataoshp": SMuFL_MAP["acsgsh7V19Cdn"],
    "rataiflt": SMuFL_MAP["acsgfl7V19Cup"],
    "razaoshp": SMuFL_MAP["acsgsh19Cdn"],
    "razaiflt": SMuFL_MAP["acsgfl19Cup"],
    "shaoshp": SMuFL_MAP["acsgsh11V49Cdn"],
    "shaiflt": SMuFL_MAP["acsgfl11V49Cup"],
    "slaoshp": SMuFL_MAP["acsgsh143Cdn"],
    "slaiflt": SMuFL_MAP["acsgfl143Cup"],
    "saoshp": SMuFL_MAP["acsgsh17Kdn"],
    "saiflt": SMuFL_MAP["acsgfl17Kup"],
    "raoshp": SMuFL_MAP["acsgsh19Sdn"],
    "raiflt": SMuFL_MAP["acsgfl19Sup"],
    "raishp": SMuFL_MAP["acsgsh19Sup"],
    "raoflt": SMuFL_MAP["acsgfl19Sdn"],
    "saishp": SMuFL_MAP["acsgsh17Kup"],
    "saoflt": SMuFL_MAP["acsgfl17Kdn"],
    "slaishp": SMuFL_MAP["acsgsh143Cup"],
    "slaoflt": SMuFL_MAP["acsgfl143Cdn"],
    "shaishp": SMuFL_MAP["acsgsh11V49Cup"],
    "shaoflt": SMuFL_MAP["acsgfl11V49Cdn"],
    "razaishp": SMuFL_MAP["acsgsh19Cup"],
    "razaoflt": SMuFL_MAP["acsgfl19Cdn"],
    "rataishp": SMuFL_MAP["acsgsh7V19Cup"],
    "rataoflt": SMuFL_MAP["acsgfl7V19Cdn"],
    "sataishp": SMuFL_MAP["acsgsh49Sup"],
    "sataoflt": SMuFL_MAP["acsgfl49Sdn"],
    "sakaishp": SMuFL_MAP["acsgsh23Sup"],
    "sakaoflt": SMuFL_MAP["acsgfl23Sdn"],
    "fraishp": SMuFL_MAP["acsgsh5V13Mup"],
    "fraoflt": SMuFL_MAP["acsgfl5V13Mdn"],
    "jazaishp": SMuFL_MAP["acsgsh11V19Mup"],
    "jazaoflt": SMuFL_MAP["acsgfl11V19Mdn"],
    "jpaishp": SMuFL_MAP["acsgsh49Mup"],
    "jpaoflt": SMuFL_MAP["acsgfl49Mdn"],
    "vraishp": SMuFL_MAP["acsgsh5V49Mup"],
    "vraoflt": SMuFL_MAP["acsgfl5V49Mdn"],
    "ktaishp": SMuFL_MAP["acsgsh49Lup"],
    "ktaoflt": SMuFL_MAP["acsgfl49Ldn"],
    "chaishp": SMuFL_MAP["acsgsh11V19Lup"],
    "chaoflt": SMuFL_MAP["acsgfl11V19Ldn"],
    "rachaishp": SMuFL_MAP["acsgsh5V13Lup"],
    "rachaoflt": SMuFL_MAP["acsgfl5V13Ldn"],
    "sakaodblshp": SMuFL_MAP["acsgdbsh23Sdn"],
    "sakaidblflt": SMuFL_MAP["acsgdbfl23Sup"],
    "sataodblshp": SMuFL_MAP["acsgdbsh49Sdn"],
    "sataidblflt": SMuFL_MAP["acsgdbfl49Sup"],
    "rataodblshp": SMuFL_MAP["acsgdbsh7V19Cdn"],
    "rataidblflt": SMuFL_MAP["acsgdbfl7V19Cup"],
    "razaodblshp": SMuFL_MAP["acsgdbsh19Cdn"],
    "razaidblflt": SMuFL_MAP["acsgdbfl19Cup"],
    "shaodblshp": SMuFL_MAP["acsgdbsh11V49Cdn"],
    "shaidblflt": SMuFL_MAP["acsgdbfl11V49Cup"],
    "slaodblshp": SMuFL_MAP["acsgdbsh143Cdn"],
    "slaidblflt": SMuFL_MAP["acsgdbfl143Cup"],
    "saodblshp": SMuFL_MAP["acsgdbsh17Kdn"],
    "saidblflt": SMuFL_MAP["acsgdbfl17Kup"],
    "raodblshp": SMuFL_MAP["acsgdbsh19Sdn"],
    "raidblflt": SMuFL_MAP["acsgdbfl19Sup"],
    "ai": SMuFL_MAP["acsgshup"],
    "ao": SMuFL_MAP["acsgshdn"],
    "bi": SMuFL_MAP["acsgac"],
    "bo": SMuFL_MAP["acsggr"],
    "mi": SMuFL_MAP["acsg1mnup"],
    "mo": SMuFL_MAP["acsg1mndn"],
    "mimi": SMuFL_MAP["acsg2mnup"],
    "momo": SMuFL_MAP["acsg2mndn"],
    "qui": SMuFL_MAP["acsg1tnup"],
    "quo": SMuFL_MAP["acsg1tndn"],
    "quiqui": SMuFL_MAP["acsg2tnup"],
    "quoquo": SMuFL_MAP["acsg2tndn"],
    "mitn": SMuFL_MAP["acsg3tnup"],
    "motn": SMuFL_MAP["acsg3tndn"],
    "quimi": SMuFL_MAP["acsg4tnup"],
    "quomo": SMuFL_MAP["acsg4tndn"],
    "quiquimi": SMuFL_MAP["acsg5tnup"],
    "quoquomo": SMuFL_MAP["acsg5tndn"],
    "mimitn": SMuFL_MAP["acsg6tnup"],
    "momotn": SMuFL_MAP["acsg6tndn"],
    "quimimi": SMuFL_MAP["acsg7tnup"],
    "quomomo": SMuFL_MAP["acsg7tndn"],
    "quiquimimi": SMuFL_MAP["acsg8tnup"],
    "quoquomomo": SMuFL_MAP["acsg8tndn"],
    "mimimi": SMuFL_MAP["acsg9tnup"],
    "momomo": SMuFL_MAP["acsg9tndn"],
    "i": SMuFL_MAP["acsgfrtnup"],
    "o": SMuFL_MAP["acsgfrtndn"],
} as Record<Code & Word, Unicode & Word>

const SAGITTAL_SECONDARY_SAGISPEAK_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> = {
    "phai": SMuFL_MAP["acsg25smdsup"],
    "phao": SMuFL_MAP["acsg25smdsdn"],
    "patai": SMuFL_MAP["acsg35mddsup"],
    "patao": SMuFL_MAP["acsg35mddsdn"],
    "pakai": SMuFL_MAP["acsg11mddsup"],
    "pakao": SMuFL_MAP["acsg11mddsdn"],
    "jatai": SMuFL_MAP["acsg11lgdsup"],
    "jatao": SMuFL_MAP["acsg11lgdsdn"],
    "jakai": SMuFL_MAP["acsg35lgdsup"],
    "jakao": SMuFL_MAP["acsg35lgdsdn"],
    "phaoshp": SMuFL_MAP["acsgsh25Sdn"],
    "phaiflt": SMuFL_MAP["acsgfl25Sup"],
    "phaishp": SMuFL_MAP["acsgsh25Sup"],
    "phaoflt": SMuFL_MAP["acsgfl25Sdn"],
    "pataishp": SMuFL_MAP["acsgsh35Mup"],
    "pataoflt": SMuFL_MAP["acsgfl35Mdn"],
    "pakaishp": SMuFL_MAP["acsgsh11Mup"],
    "pakaoflt": SMuFL_MAP["acsgfl11Mdn"],
    "jataishp": SMuFL_MAP["acsgsh11Lup"],
    "jataoflt": SMuFL_MAP["acsgfl11Ldn"],
    "jakaishp": SMuFL_MAP["acsgsh35Lup"],
    "jakaoflt": SMuFL_MAP["acsgfl35Ldn"],
    "phaodblshp": SMuFL_MAP["acsgdbsh25Sdn"],
    "phaidblflt": SMuFL_MAP["acsgdbfl25Sup"],
    "srai": SMuFL_MAP["acsg143cmup"],
    "srao": SMuFL_MAP["acsg143cmdn"],
    "phrai": SMuFL_MAP["acsg5V13mddsup"],
    "phrao": SMuFL_MAP["acsg5V13mddsdn"],
    "prakai": SMuFL_MAP["acsg5V49mddsup"],
    "prakao": SMuFL_MAP["acsg5V49mddsdn"],
    "khai": SMuFL_MAP["acsg11V19lgdsup"],
    "khao": SMuFL_MAP["acsg11V19lgdsdn"],
    "rakhai": SMuFL_MAP["acsg5V13lgdsup"],
    "rakhao": SMuFL_MAP["acsg5V13lgdsdn"],
    "sraoshp": SMuFL_MAP["acsgsh143Cdn"],
    "sraiflt": SMuFL_MAP["acsgfl143Cup"],
    "sraishp": SMuFL_MAP["acsgsh143Cup"],
    "sraoflt": SMuFL_MAP["acsgfl143Cdn"],
    "phraishp": SMuFL_MAP["acsgsh5V13Mup"],
    "phraoflt": SMuFL_MAP["acsgfl5V13Mdn"],
    "prakaishp": SMuFL_MAP["acsgsh5V49Mup"],
    "prakaoflt": SMuFL_MAP["acsgfl5V49Mdn"],
    "khaishp": SMuFL_MAP["acsgsh11V19Lup"],
    "khaoflt": SMuFL_MAP["acsgfl11V19Ldn"],
    "rakhaishp": SMuFL_MAP["acsgsh5V13Lup"],
    "rakhaoflt": SMuFL_MAP["acsgfl5V13Ldn"],
    "sraodblshp": SMuFL_MAP["acsgdbsh143Cdn"],
    "sraidblflt": SMuFL_MAP["acsgdbfl143Cup"],
} as Record<Code & Word, Unicode & Word>

const SAGITTAL_ACCIDENTAL_ALIASES_MAP: Record<RecordKey<Code & Word>, Unicode & Word> =
    mergeCodeMapsCheckingForCaseDesensitizedConflictsButWithoutCaseDesensitizing(
        SAGITTAL_LONG_ASCII_ALIASES_MAP,
        SAGITTAL_COMMA_NAME_ALIASES_MAP,
        SAGITTAL_SAGISPEAK_ALIASES_MAP,
        SAGITTAL_SECONDARY_SAGISPEAK_ALIASES_MAP,
    )

export {
    SAGITTAL_ACCIDENTAL_ALIASES_MAP,
    SAGITTAL_SECONDARY_SAGISPEAK_ALIASES_MAP,
    SAGITTAL_COMMA_NAME_ALIASES_MAP,
}
