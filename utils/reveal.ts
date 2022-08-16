import ScrollRevealObjectOptions = scrollReveal.ScrollRevealObjectOptions

export const reveal = async (
  selector: string | HTMLElement | NodeListOf<Element>,
  options?: ScrollRevealObjectOptions
) => {
  const scrollReveal = (await import('scrollreveal')).default
  scrollReveal().reveal(selector, options || {})
}
