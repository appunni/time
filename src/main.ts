import './style.css'

class DigitalClock {
  private lastTime = ''
  private container: HTMLElement

  constructor() {
    this.container = document.createElement('div')
    this.container.className = 'min-h-screen bg-gray-900 flex items-center justify-center'
    document.body.appendChild(this.container)
    this.render()
    this.updateClock()
  }

  private createDigit(value: string): HTMLElement {
    const digit = document.createElement('div')
    digit.className = 'relative w-20 h-32 bg-gray-800 rounded-lg mx-1'
    
    const number = document.createElement('div')
    number.className = 'absolute inset-0 flex items-center justify-center text-6xl font-bold text-white'
    number.textContent = value
    
    digit.appendChild(number)
    return digit
  }

  private createSeparator(): HTMLElement {
    const separator = document.createElement('div')
    separator.className = 'text-6xl font-bold text-white mx-2'
    separator.textContent = ':'
    return separator
  }

  private render() {
    const clockFace = document.createElement('div')
    clockFace.className = 'flex items-center bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl'
    this.container.appendChild(clockFace)
  }

  private updateDigit(digit: HTMLElement, newValue: string) {
    const current = digit.querySelector('div')
    if (current) {
      current.textContent = newValue
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
      if (!this.lastTime) {
        // Initial render
        const clockFace = this.container.querySelector('div')
        if (clockFace) {
          const [hours, minutes, seconds] = time.split(':')
          
          // Hours
          clockFace.appendChild(this.createDigit(hours[0]))
          clockFace.appendChild(this.createDigit(hours[1]))
          
          // Separator
          clockFace.appendChild(this.createSeparator())
          
          // Minutes
          clockFace.appendChild(this.createDigit(minutes[0]))
          clockFace.appendChild(this.createDigit(minutes[1]))
          
          // Separator
          clockFace.appendChild(this.createSeparator())
          
          // Seconds
          clockFace.appendChild(this.createDigit(seconds[0]))
          clockFace.appendChild(this.createDigit(seconds[1]))
        }
      } else {
        // Update existing digits
        const digits = this.container.querySelectorAll('.bg-gray-800.rounded-lg')
        const [hours, minutes, seconds] = time.split(':')
        const values = [...hours, ...minutes, ...seconds]
        
        digits.forEach((digit, index) => {
          this.updateDigit(digit as HTMLElement, values[index])
        })
      }
      
      this.lastTime = time
    }
    
    requestAnimationFrame(() => this.updateClock())
  }
}

new DigitalClock()
