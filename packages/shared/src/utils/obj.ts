import type { Path, PathValue } from '../types'

export function get<TObject, TPath extends Path<TObject>>(obj: TObject, path: TPath): PathValue<TObject, TPath> | undefined {
  let current: any = obj
  for (const key of path.split('.')) {
    if (current == null) {
      return undefined
    }
    current = current[key]
  }
  return current
}

export function set<TObject, TPath extends Path<TObject>>(obj: TObject, path: TPath, value: PathValue<TObject, TPath>): void {
  let current: any = obj
  const keys = path.split('.')
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    if (current[key] == null) {
      current[key] = {}
    }
    current = current[key]
  }
  current[keys.at(-1)!] = value
}
