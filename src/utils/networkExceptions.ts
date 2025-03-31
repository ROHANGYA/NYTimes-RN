export default function getErrorMessage(errorCode?: String): string {
  switch (errorCode) {
    case 'ERR_BAD_REQUEST':
      return 'The page you are looking for could not be found';
    case 'ERR_AUTH_TEST':
      return 'You are not authorised to access this page';
    default:
      return 'An error has occurred, please try again later.';
  }
}
