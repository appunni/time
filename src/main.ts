import './style.css'

class DigitalClock {
  private lastTime = ''
  private container: HTMLElement
  private dateDisplay: HTMLElement
  private clockFace: HTMLElement

  constructor() {
    // Main container
    this.container = document.createElement('div')
    this.container.className = 'min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4'
    document.body.appendChild(this.container)
    
    // Content wrapper with max width
    const contentWrapper = document.createElement('div')
    contentWrapper.className = 'w-full max-w-4xl mx-auto flex flex-col items-center'
    this.container.appendChild(contentWrapper)

    // Date display
    this.dateDisplay = document.createElement('div')
    this.dateDisplay.className = 'text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 sm:mb-8 md:mb-10 font-light tracking-wider text-center text-shadow-glow'
    contentWrapper.appendChild(this.dateDisplay)

    // Clock face wrapper
    this.clockFace = document.createElement('div')
    this.clockFace.className = 'w-full flex flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 p-6 sm:p-8 md:p-10 rounded-3xl bg-gray-800/30 backdrop-blur-xl shadow-2xl'
    contentWrapper.appendChild(this.clockFace)

    this.initializeClock()
    this.updateDate()
  }

  private createDigitGroup(values: [string, string]): HTMLElement {
    const group = document.createElement('div')
    group.className = 'flex flex-row gap-2 sm:gap-3 bg-gray-800/50 backdrop-blur p-3 sm:p-4 rounded-2xl'
    
    group.appendChild(this.createDigit(values[0]))
    group.appendChild(this.createDigit(values[1]))
    
    return group
  }

  private createDigit(value: string): HTMLElement {
    const digit = document.createElement('div')
    digit.className = 'w-16 sm:w-20 md:w-24 h-24 sm:h-32 md:h-40 relative bg-gray-700/50 rounded-xl overflow-hidden'
    
    const number = document.createElement('div')
    number.className = 'absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl md:text-7xl font-bold text-gray-100 font-clock text-shadow-glow'
    number.textContent = value
    
    digit.appendChild(number)
    return digit
  }

  private createSeparator(): HTMLElement {
    const separator = document.createElement('div')
    separator.className = 'text-4xl sm:text-6xl md:text-7xl font-light text-gray-300 mx-1 text-shadow-glow'
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
