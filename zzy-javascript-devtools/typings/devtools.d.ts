type GenerateTree = (
  items: GenerateTreeListItem[],
  parentId: null | number | string,
  selectVal: string
) => any

type GenerateTreeListItem = {
  id: number | string
  children?: GenerateTreeListItem[]
  [key: string]: any
}


type AllEquals = (a: any, b: any) => boolean

type GetColonTimeFromDate = (date: Date) => string

type GetDaysDiffBetweenDates = (dateInitial: Date, dateFinal: Date) => number

type ChangeTimeYear = (time: number | string | Date) => string

type FormateSeconds = (surPlusTime: number | string) => string

type FormatNowTime = (time: number | string) => string

type GetScrollPosition = (el: Window | HTMLElement) => { x: number; x: number }

type GetScrollPositionWin = window

type FormToObject = (form: HTMLFormElement | undefined) => unknown

type LazyImage = (className: string | null) => void

type LazyImageThrottle = (
  fn: Function,
  delay?: number,
  mustRun?: number
) => void

type Debounce = (func: Function, wait: number) => Function

type Throttle = (
  func: Function,
  wait: number,
  options?: { leading?: boolean; trailing?: boolean }
) => Function


export {
  GenerateTree,
  GenerateTreeListItem,
  AllEquals,
  GetColonTimeFromDate,
  GetDaysDiffBetweenDates,
  ChangeTimeYear,
  FormateSeconds,
  FormatNowTime,
  GetScrollPosition,
  GetScrollPositionWin,
  FormToObject,
  LazyImage,
  LazyImageThrottle,
  Debounce,
  Throttle,
}
