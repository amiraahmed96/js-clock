var start = document.getElementById("start"),
    stop = document.getElementById("stop"),
    hours = document.getElementById("hours"),
    mini = document.getElementById("mini"),
    second = document.getElementById("second"),
    days = document.getElementById("days");
var Interval ;

var hours1 = 23,
    mini1 = 59,
    second1 = 59,
    days1 = 19;

function starttimer()
{
    second1--;
    if(second1 < 9)
        {
            second.innerHTML = "0" + second1;
        }
    if(second1 > 9)
        {
            second.innerHTML = second1;
        }
    if(second1 <= 0)
        {
            second1 = 59;
            second.innerHTML = "59";
            mini1--;
            if(mini1 < 9)
                {
                    mini.innerHTML = "0" + mini1;
                }
            if(mini1 > 9)
                {
                    mini.innerHTML = mini1;
                }
            if(mini1 <= 0)
                {
                    mini1 = 59;
                    mini.innerHTML = "59"
                    hours1--;
                    if(hours1 < 9)
                        {
                            hours.innerHTML = "0" + hours1;
                        }
                    if(hours1 > 9)
                        {
                            hours.innerHTML = hours1;
                        }
                    if(hours1 <= 0)
                        {
                            hours.innerHTML = "23";
                            hours1 = 23;
                            days1--;
                            days.innerHTML = days1;
                            if(days1 <= 0)
                                {
                                    clearInterval(Interval);
                                }
                        }
                }
        }
}

start.onclick = function()
{
    Interval = setInterval(starttimer,1000);
}
stop.onclick = function()
{
    clearInterval(Interval);
}
