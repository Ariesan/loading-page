//1. get two element from html, loading-text & bg
const loadText = document.querySelector('.load-text')
const bg = document.querySelector('.bg')
//2. initial a variable with 0 value, name = loading
let loading = 0

//4. run blurry function in an interval, every 40ms.
let int = setInterval(blurry, 40)

//9. don't forget to make variable for scale, hence it can be used inside the function
// source code : https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

//3. make a function, name = blurry inside the function, increment loading variable by one.
function blurry(){
    loading++

//7. to make loading stop running, we have to clear the interval, before it reaches 100
    if (loading > 99) {
        clearInterval(int)
    }

//8. now, after function is working, delete console.log, and grab DOM element to make it visible in browser. use template literal!
    loadText.innerText = `${loading}%`

//10. set opacity of the loading text from fully opaque (indicate as 1) to transparent/disappear (indicate as 0) 
    loadText.style.opacity = scale(loading, 0, 100, 1, 0)

//11. make bg image from fully blur to transparent, blurry start on 30px.
    bg.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`


//5. console log it. so you know blurry function is run
//console.log(loading) 
//6.if we check console on browser devTool, the function will keep running, forever every 30ms. Thats why we have to make it stop before 100. because we want the loading text stop on 100%. so, go to step 7.

}

