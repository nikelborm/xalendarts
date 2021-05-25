export function getError(msg: string, type: string) {
  const plate = {
    message: msg,
    type: type,
  };

  return JSON.stringify(plate);
}
