type IGenerateTree = (
  items: GenerateTreeListItem[],
  parentId: null | number | string,
  selectVal: string
) => any

type IGenerateTreeListItem = {
  id: number | string
  children?: GenerateTreeListItem[]
  [key: string]: any
}


type IAllEquals = (a: any, b: any) => boolean

type IGetColonTimeFromDate = (date: Date) => string

type IGetDaysDiffBetweenDates = (dateInitial: Date, dateFinal: Date) => number

type IChangeTimeYear = (time: number | string | Date) => string

type IFormateSeconds = (surPlusTime: number | string) => string

type IFormatNowTime = (time: number | string) => string

type IGetScrollPosition = (el: Window | HTMLElement) => { x: number; x: number }

type IGetScrollPositionWin = window

type IFormToObject = (form: HTMLFormElement | undefined) => unknown

type ILazyImage = (className: string | undefined) => void

type ILazyImageThrottle = (
  fn: Function,
  delay?: number,
  mustRun?: number
) => void

type IDebounce = (func: Function, wait: number) => Function

type IThrottle = (
  func: Function,
  wait: number,
  options?: { leading?: boolean; trailing?: boolean }
) => Function

interface IInfinityScrolling {
  (dom: HTMLElement, cb: Function): void
  bol?: boolean
  closeMonitor?: () => void
}


export {
  IInfinityScrolling,
  IGenerateTree,
  IGenerateTreeListItem,
  IAllEquals,
  IGetColonTimeFromDate,
  IGetDaysDiffBetweenDates,
  IChangeTimeYear,
  IFormateSeconds,
  IFormatNowTime,
  IGetScrollPosition,
  IGetScrollPositionWin,
  IFormToObject,
  ILazyImage,
  ILazyImageThrottle,
  IDebounce,
  IThrottle,
}
