import './style.css'

class DigitalClock {
  private lastTime = ''
  private container: HTMLElement
  private dateDisplay: HTMLElement
  private clockFace: HTMLElement

  constructor() {
    // Main container
    this.container = document.createElement('div')
    this.container.className = 'min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center px-4'
    document.body.appendChild(this.container)
    
    // Content wrapper with max width
    const contentWrapper = document.createElement('div')
    contentWrapper.className = 'w-full max-w-3xl mx-auto flex flex-col items-center'
    this.container.appendChild(contentWrapper)

    // Date display
    this.dateDisplay = document.createElement('div')
    this.dateDisplay.className = 'text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-5 md:mb-6 font-light tracking-wide text-center'
    contentWrapper.appendChild(this.dateDisplay)

    // Clock face wrapper
    this.clockFace = document.createElement('div')
    this.clockFace.className = 'w-full flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 p-4 sm:p-6 md:p-8 rounded-3xl bg-gray-800/30 backdrop-blur-lg shadow-xl'
    contentWrapper.appendChild(this.clockFace)

    this.initializeClock()
    this.updateDate()
  }

  private createDigitGroup(values: [string, string]): HTMLElement {
    const group = document.createElement('div')
    group.className = 'flex flex-row gap-1 sm:gap-2 bg-gray-800/50 backdrop-blur p-2 rounded-2xl'
    
    group.appendChild(this.createDigit(values[0]))
    group.appendChild(this.createDigit(values[1]))
    
    return group
  }

  private createDigit(value: string): HTMLElement {
    const digit = document.createElement('div')
    digit.className = 'w-12 sm:w-14 md:w-16 h-20 sm:h-24 md:h-28 relative bg-gray-700/50 rounded-xl overflow-hidden'
    
    const number = document.createElement('div')
    number.className = 'absolute inset-0 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-100'
    number.textContent = value
    
    digit.appendChild(number)
    return digit
  }

  private createSeparator(): HTMLElement {
    const separator = document.createElement('div')
    separator.className = 'text-2xl sm:text-3xl md:text-4xl font-light text-gray-400 mx-1'
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
