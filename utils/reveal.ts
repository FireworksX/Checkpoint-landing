import ScrollRevealObjectOptions = scrollReveal.ScrollRevealObjectOptions
import { isBrowser } from './isBrowser'

export const reveal = async (
  selector: string | HTMLElement | NodeListOf<Element>,
  options?: ScrollRevealObjectOptions
) => {
  if (isBrowser) {
    const scrollReveal = (await import('scrollreveal')).default
    scrollReveal().reveal(selector, options || {})
  }
}
