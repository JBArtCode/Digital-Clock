// First I was thinking the code references the clock on my Mac
// Now I think the const is defining a variable called "clock" which the browser then uses .clock to define clock as time based on math the browser performs
const clock = document.querySelector(".clock") ;

// The browser uses .clock but we want what we subjectively call "time"
// Loading ie load is the action we call the browser to perform in place of the word "time"
window.addEventListener("load",time) ;

// Now that we have the browser loading "time" which is based on .clock - we need the Date function of the browser
// Date becomes variable d
// h m and s values are per calling for segments of the Date function
function time() {

    let d = new Date() ;
    let h = d.getHours() ;
    let m = d.getMinutes() ; 
    let s = d.getSeconds() ;

// This is the part we configure to call for the dynamic time output ie the numeric result we see on the screen
// ` ` These symbols are what js uses to know if strings of text should be output per variables that go between these symbols {}
// I see some people use setInterval instead of set timeout for the 1000ms / 1 second browser interpretation of the time change
    m = check(m);
    s = check(s);
    clock.textContent = `${h}:${m}:${s}` 
    setTimeout (time,1000) ;
}

// The purpose of this is to output all numeric time characters as two digits instead of eg 7:44 it is 07:44
// I don't know why t is sufficient instead of writing "check(time). I don't see where t was previously defined"
function check(t){
    if(t < 10) return '0' + t ;
    return t ;
}



