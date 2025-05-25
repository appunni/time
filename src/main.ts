import './style.css'

class DigitalClock {
  private lastTime = ''
  private container: HTMLElement
  private dateDisplay: HTMLElement
  private clockFace: HTMLElement

  constructor() {
    // Main container
    this.container = document.createElement('div')
    this.container.className = 'min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 md:px-6'
    document.body.appendChild(this.container)
    
    // Content wrapper with max width
    const contentWrapper = document.createElement('div')
    contentWrapper.className = 'w-full max-w-4xl mx-auto flex flex-col items-center landscape:py-2'
    this.container.appendChild(contentWrapper)

    // Date display
    this.dateDisplay = document.createElement('div')
    this.dateDisplay.className = 'text-base xs:text-lg sm:text-2xl md:text-3xl text-gray-200 mb-4 sm:mb-6 md:mb-8 font-light tracking-wider text-center text-shadow-glow landscape:mb-2 landscape:sm:mb-4'
    contentWrapper.appendChild(this.dateDisplay)

    // Clock face wrapper
    this.clockFace = document.createElement('div')
    this.clockFace.className = 'w-full flex flex-row items-center justify-center gap-1.5 xs:gap-2 sm:gap-4 md:gap-6 p-3 xs:p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-gray-800/30 backdrop-blur-xl shadow-2xl'
    contentWrapper.appendChild(this.clockFace)

    this.initializeClock()
    this.updateDate()
  }

  private createDigitGroup(values: [string, string]): HTMLElement {
    const group = document.createElement('div')
    group.className = 'flex flex-row gap-1 xs:gap-1.5 sm:gap-3 bg-gray-800/50 backdrop-blur p-2 xs:p-3 sm:p-4 rounded-xl sm:rounded-2xl'
    
    group.appendChild(this.createDigit(values[0]))
    group.appendChild(this.createDigit(values[1]))
    
    return group
  }

  private createDigit(value: string): HTMLElement {
    const digit = document.createElement('div')
    digit.className = 'w-10 xs:w-14 sm:w-20 md:w-24 h-16 xs:h-20 sm:h-32 md:h-40 relative bg-gray-700/50 rounded-lg sm:rounded-xl overflow-hidden landscape:h-14 landscape:xs:h-16 landscape:sm:h-24 landscape:md:h-32'
    
    const number = document.createElement('div')
    number.className = 'absolute inset-0 flex items-center justify-center text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-bold text-gray-100 font-clock text-shadow-glow landscape:text-2xl landscape:xs:text-3xl landscape:sm:text-5xl landscape:md:text-6xl'
    number.textContent = value
    
    digit.appendChild(number)
    return digit
  }

  private createSeparator(): HTMLElement {
    const separator = document.createElement('div')
    separator.className = 'text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-light text-gray-300 mx-0.5 xs:mx-1 text-shadow-glow landscape:text-2xl landscape:xs:text-3xl landscape:sm:text-5xl landscape:md:text-6xl'
    separator.textContent = ':'
    return separator
  }

  private formatDate(): string {
    const now = new Date()
    return now.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  private updateDate() {
    this.dateDisplay.textContent = this.formatDate()
    setInterval(() => {
      this.dateDisplay.textContent = this.formatDate()
    }, 60000)
  }

  private initializeClock() {
    // Initial render
    const now = new Date()
    const time = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    const [hours, minutes, seconds] = time.split(':')
    
    // Hours
    this.clockFace.appendChild(this.createDigitGroup([hours[0], hours[1]]))
    
    // Separator
    this.clockFace.appendChild(this.createSeparator())
    
    // Minutes
    this.clockFace.appendChild(this.createDigitGroup([minutes[0], minutes[1]]))
    
    // Separator
    this.clockFace.appendChild(this.createSeparator())
    
    // Seconds
    this.clockFace.appendChild(this.createDigitGroup([seconds[0], seconds[1]]))

    this.updateClock()
  }

  private updateDigit(digit: HTMLElement, newValue: string) {
    const number = digit.querySelector('div')
    if (number) {
      number.textContent = newValue
    }
  }

  private updateClock() {
    const now = new Date()
    const time = now.toLocaleTimeString('en-US', {
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    if (time !== this.lastTime) {
      const digits = this.clockFace.querySelectorAll('.bg-gray-700\\/50')
      const [hours, minutes, seconds] = time.split(':')
      const values = [...hours, ...minutes, ...seconds]
      
      digits.forEach((digit, index) => {
        this.updateDigit(digit as HTMLElement, values[index])
      })
      
      this.lastTime = time
    }
    
    requestAnimationFrame(() => this.updateClock())
  }
}

new DigitalClock()
