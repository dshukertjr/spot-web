/* eslint-disable @typescript-eslint/no-non-null-assertion */

export const SITE_NAME = 'Spot'

export const SITE_URL = 'https://spotvideo.app'

/**
 * Determine the mobile operating system.
 * This function returns 'ios', 'android' or 'other'
 *
 * @returns {String}
 */
export function getMobileOperatingSystem(): 'ios' | 'android' | 'other' {
  if (
    typeof window === 'undefined' ||
    typeof window.navigator === 'undefined' ||
    typeof navigator === 'undefined'
  ) {
    return 'other'
  }
  const userAgent = navigator?.userAgent || navigator?.vendor

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'other'
  }

  if (/android/i.test(userAgent)) {
    return 'android'
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'ios'
  }

  return 'other'
}
