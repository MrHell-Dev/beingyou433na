window.addEventListener("load",function() 
        {
            class remainingtime
                {   
                    constructor(){
                        this.update();

                    }
                    update(){
                          this.curr = new Date();
                          this.nexteve = new Date('01/01/"'+(this.curr.getFullYear()+1)+'"');
                          this.a = this.nexteve.getTime()-this.curr.getTime();
                      }
                    getdays()
                    {
                        let n = this.a/(1000*60*60*24);
                        return n;
                    }
                    gethours()
                    {
                        let days = this.getdays();
                        let n = days-Math.floor(days);
                        
                        n*=24;
                        return n;
                    }
                    getmin()
                    {
                        let hour = this.gethours();
                        let n = hour - Math.floor(hour);
                        n*=60;
                        return n;
                    }
                    getsec()
                    {
                        let min = this.getmin();
                        let n = min - Math.floor(min);
                        n*=60;
                        return n;
                    }
                    geteverything()
                    {
                        let n = [Math.floor(this.getdays()),Math.floor(this.gethours()),Math.floor(this.getmin()),Math.floor(this.getsec())];
                        return n; 
                    }
                }
            let re = new remainingtime();
            let a = document.getElementById("day");
            let bb = document.getElementById("hour");
            let c = document.getElementById("min");
            let d = document.getElementById("sec");
            setInterval(function()
                {
                    re.update();
                    var b = re.geteverything();
                    a.innerHTML = "<h2>"+b[0]+"</h2>";
                    bb.innerHTML = "<h2>"+b[1]+"</h2>";
                    c.innerHTML = "<h2>"+b[2]+"</h2>";
                    d.innerHTML = "<h2>"+b[3]+"</h2>";

                },1000);
            
            
        });
    