export function getErrorMsgObj<T extends Record<string, any>>(object: T) {
  const errorMsgTemplate: Record<string, string> = {};

  for (const key of Object.keys(object)) {
    errorMsgTemplate[key as keyof Object] = '';
  }

  return errorMsgTemplate;
}
