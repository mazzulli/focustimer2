import { minutes } from "./elements.js"
import state from "./state.js"
import * as timer from './timer.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = true
    document.documentElement.classList.toggle('running')
    timer.countDown();
}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')    
}

export function increaseTimer() {
    state.seconds += 5

    if(state.seconds > 59){        
        state.minutes++
        state.seconds = 0
    }

    timer.updateDisplay(state.minutes, state.seconds)
}

export function decreaseTimer() {
    if(state.minutes == 0 && state.seconds == 0){
        document.documentElement.classList.remove('running')    
        return
    }
    
    if(state.minutes >= 0 && state.seconds >= 0){
        state.seconds -= 5
        if(state.seconds < 0 && state.minutes > 0){
            state.seconds=55
            state.minutes--
        }
    }

    timer.updateDisplay(state.minutes, state.seconds)
}

export function playTree() {
    console.log('playTree function')
    document.documentElement.classList.add('playing')    
    document.documentElement.classList.toggle('playing')    
    sounds.treeAudio.play()
}

export function playRain() {
    console.log('playRain function')
    sounds.rainAudio.play()
}

export function playCoffee() {
    console.log('playCoffee function')
    sounds.coffeAudio.play()
}

export function playFlame() {
    console.log('playFlame function')
    sounds.flameAudio.play()
}