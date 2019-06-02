export function checkCredentials(params) {
  if (
    params.username.toLowerCase() !== 'admin' ||
    params.password.toLowerCase() !== 'admin'
  ) {
    return false
  }

  return true
}
