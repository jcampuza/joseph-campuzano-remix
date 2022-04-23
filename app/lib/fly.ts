import { redirect } from '@remix-run/node';

export function isFlyHttpForward(request: Request) {
  if (process.env.NODE_ENV === 'development') {
    return false;
  }

  return request.headers.get('X-Forwarded-Proto') === 'http';
}

export function getHttpsUrl(url: string) {
  if (url.startsWith('http://')) {
    const [, ...rest] = url.split('http://');
    return `https://${rest.join('')}`;
  }

  return `https://${url}`;
}

export function handleFlyHttpToHttpsRedirect(request: Request) {
  return redirect(getHttpsUrl(request.url), 301);
}
